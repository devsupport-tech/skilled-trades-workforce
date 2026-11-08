'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { FormField } from '@/components/forms/FormField';
import { PhoneInput } from '@/components/forms/PhoneInput';
import { TagsInput } from '@/components/forms/TagsInput';
import { StateSelect } from '@/components/forms/StateSelect';
import {
  employerRequestSchema,
  employerRequestStepSchemas,
  type EmployerRequestFormData
} from '@/lib/validations/employer-request';
import { jobCategories } from '@/lib/config';
import { CheckCircle, ArrowRight, ArrowLeft, Loader2, Shield, Clock, Users } from 'lucide-react';

const STEPS = [
  { id: 1, title: 'Contact Info', description: 'Your company details' },
  { id: 2, title: 'Position Details', description: 'Job information' },
  { id: 3, title: 'Compensation', description: 'Pay rate details' },
  { id: 4, title: 'Timeline', description: 'Start date and urgency' },
  { id: 5, title: 'Location', description: 'Work location' },
  { id: 6, title: 'Requirements', description: 'Skills and certifications' },
];

const EMPLOYMENT_TYPES = [
  { value: 'temporary', label: 'Temporary Staffing' },
  { value: 'temp_to_hire', label: 'Temp-to-Hire' },
  { value: 'direct_hire', label: 'Direct Hire' },
  { value: 'contract', label: 'Contract Staffing' },
  { value: 'remote', label: 'Remote Staffing' },
];

const SHIFTS = [
  { value: 'day', label: 'Day Shift' },
  { value: 'night', label: 'Night Shift' },
  { value: 'swing', label: 'Swing Shift' },
  { value: 'rotating', label: 'Rotating Shifts' },
  { value: 'flexible', label: 'Flexible Schedule' },
];

const URGENCY_LEVELS = [
  { value: 'immediate', label: 'Immediate (Within 48 hours)' },
  { value: 'within_week', label: 'Within 1 Week' },
  { value: 'within_month', label: 'Within 1 Month' },
  { value: 'flexible', label: 'Flexible Timeline' },
];

const PAY_RATE_TYPES = [
  { value: 'hourly', label: 'Hourly' },
  { value: 'salary', label: 'Annual Salary' },
  { value: 'project', label: 'Project-Based' },
];

export default function RequestWorkersPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    trigger,
  } = useForm<z.input<typeof employerRequestSchema>, any, EmployerRequestFormData>({
    resolver: zodResolver(employerRequestSchema),
    mode: 'onBlur',
    defaultValues: {
      requiredSkills: [],
      preferredSkills: [],
      certifications: [],
      consent: false,
      source: 'website',
    },
  });

  const requiredSkills = watch('requiredSkills') || [];
  const preferredSkills = watch('preferredSkills') || [];
  const certifications = watch('certifications') || [];

  const progress = (currentStep / STEPS.length) * 100;

  const handleNext = async () => {
    let isValid = false;

    // Validate current step
    switch (currentStep) {
      case 1:
        isValid = await trigger(['contactName', 'contactEmail', 'contactPhone', 'companyName', 'companyWebsite', 'industry']);
        break;
      case 2:
        isValid = await trigger(['positionTitle', 'numberOfPositions', 'employmentType', 'shift', 'jobDescription']);
        break;
      case 3:
        isValid = await trigger(['payRateMin', 'payRateMax', 'payRateType']);
        break;
      case 4:
        isValid = await trigger(['startDate', 'urgency']);
        break;
      case 5:
        isValid = await trigger(['workLocation', 'workCity', 'workState', 'workZip']);
        break;
      case 6:
        isValid = await trigger(['requiredSkills', 'preferredSkills', 'certifications', 'specialRequirements', 'consent']);
        break;
    }

    if (isValid && currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const onSubmit = async (data: EmployerRequestFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // TODO: Implement server action
      console.log('Form data:', data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Redirect to confirmation page
      router.push('/employers/request-workers/confirmation');
    } catch (error) {
      setSubmitError('Something went wrong. Please try again or call us at (XXX) XXX-XXXX.');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Request Workers
            </h1>
            <p className="text-xl text-blue-100">
              Complete the form below and we'll start finding qualified candidates within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Clock className="h-8 w-8 text-blue-600" />
                <div className="text-sm font-semibold text-gray-900">24-48 Hour Response</div>
                <div className="text-xs text-gray-600">We'll start finding candidates fast</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="h-8 w-8 text-blue-600" />
                <div className="text-sm font-semibold text-gray-900">Pre-Screened Candidates</div>
                <div className="text-xs text-gray-600">Background checks and skill validation</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Users className="h-8 w-8 text-blue-600" />
                <div className="text-sm font-semibold text-gray-900">Dedicated Support</div>
                <div className="text-xs text-gray-600">Your own recruiter throughout the process</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Step {currentStep} of {STEPS.length}: {STEPS[currentStep - 1].title}
                </span>
                <span className="text-sm text-gray-500">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Steps Indicator */}
            <div className="mb-8 hidden md:block">
              <div className="flex items-center justify-between">
                {STEPS.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                          currentStep > step.id
                            ? 'bg-green-600 text-white'
                            : currentStep === step.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-500'
                        }`}
                      >
                        {currentStep > step.id ? <CheckCircle className="h-5 w-5" /> : step.id}
                      </div>
                      <div className="mt-2 text-xs text-center max-w-[80px]">
                        <div className={`font-medium ${currentStep >= step.id ? 'text-gray-900' : 'text-gray-500'}`}>
                          {step.title}
                        </div>
                      </div>
                    </div>
                    {index < STEPS.length - 1 && (
                      <div
                        className={`h-1 w-12 mx-2 ${
                          currentStep > step.id ? 'bg-green-600' : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>{STEPS[currentStep - 1].title}</CardTitle>
                <CardDescription>{STEPS[currentStep - 1].description}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Step 1: Contact Info */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <FormField
                        label="Contact Name"
                        id="contactName"
                        {...register('contactName')}
                        error={errors.contactName?.message}
                        required
                        placeholder="John Smith"
                      />

                      <FormField
                        label="Email Address"
                        id="contactEmail"
                        type="email"
                        {...register('contactEmail')}
                        error={errors.contactEmail?.message}
                        required
                        placeholder="john@company.com"
                      />

                      <PhoneInput
                        label="Phone Number"
                        id="contactPhone"
                        {...register('contactPhone')}
                        error={errors.contactPhone?.message}
                        required
                      />

                      <FormField
                        label="Company Name"
                        id="companyName"
                        {...register('companyName')}
                        error={errors.companyName?.message}
                        required
                        placeholder="ABC Company"
                      />

                      <FormField
                        label="Company Website"
                        id="companyWebsite"
                        type="url"
                        {...register('companyWebsite')}
                        error={errors.companyWebsite?.message}
                        placeholder="https://www.company.com"
                      />

                      <FormField
                        label="Industry"
                        id="industry"
                        type="select"
                        {...register('industry')}
                        error={errors.industry?.message}
                        required
                      >
                        <option value="">Select industry...</option>
                        {jobCategories.map((category) => (
                          <option key={category.slug} value={category.name}>
                            {category.name}
                          </option>
                        ))}
                      </FormField>
                    </div>
                  )}

                  {/* Step 2: Position Details */}
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <FormField
                        label="Position Title"
                        id="positionTitle"
                        {...register('positionTitle')}
                        error={errors.positionTitle?.message}
                        required
                        placeholder="e.g., Warehouse Associate, Electrician, Administrative Assistant"
                      />

                      <FormField
                        label="Number of Positions"
                        id="numberOfPositions"
                        type="number"
                        {...register('numberOfPositions')}
                        error={errors.numberOfPositions?.message}
                        required
                        min={1}
                        placeholder="1"
                      />

                      <FormField
                        label="Employment Type"
                        id="employmentType"
                        type="select"
                        {...register('employmentType')}
                        error={errors.employmentType?.message}
                        required
                      >
                        <option value="">Select employment type...</option>
                        {EMPLOYMENT_TYPES.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </FormField>

                      <FormField
                        label="Shift"
                        id="shift"
                        type="select"
                        {...register('shift')}
                        error={errors.shift?.message}
                      >
                        <option value="">Select shift...</option>
                        {SHIFTS.map((shift) => (
                          <option key={shift.value} value={shift.value}>
                            {shift.label}
                          </option>
                        ))}
                      </FormField>

                      <FormField
                        label="Job Description"
                        id="jobDescription"
                        type="textarea"
                        {...register('jobDescription')}
                        error={errors.jobDescription?.message}
                        required
                        rows={6}
                        placeholder="Describe the job duties, responsibilities, and working conditions..."
                        helpText="Minimum 20 characters"
                      />
                    </div>
                  )}

                  {/* Step 3: Compensation */}
                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <FormField
                        label="Pay Rate Type"
                        id="payRateType"
                        type="select"
                        {...register('payRateType')}
                        error={errors.payRateType?.message}
                      >
                        <option value="">Select pay type...</option>
                        {PAY_RATE_TYPES.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </FormField>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          label="Minimum Pay Rate"
                          id="payRateMin"
                          type="number"
                          {...register('payRateMin')}
                          error={errors.payRateMin?.message}
                          min={0}
                          step={0.01}
                          placeholder="15.00"
                          helpText="$/hour or annual salary"
                        />

                        <FormField
                          label="Maximum Pay Rate"
                          id="payRateMax"
                          type="number"
                          {...register('payRateMax')}
                          error={errors.payRateMax?.message}
                          min={0}
                          step={0.01}
                          placeholder="20.00"
                          helpText="$/hour or annual salary"
                        />
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-700">
                        <p className="font-semibold text-gray-900 mb-1">Pay Rate Information</p>
                        <p>
                          Providing a pay range helps us find candidates that match your budget.
                          Your actual bill rate will depend on the specific staffing arrangement and may include
                          our markup, payroll taxes, and workers\' compensation insurance.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Timeline */}
                  {currentStep === 4 && (
                    <div className="space-y-4">
                      <FormField
                        label="Desired Start Date"
                        id="startDate"
                        type="date"
                        {...register('startDate')}
                        error={errors.startDate?.message}
                        required
                        min={new Date().toISOString().split('T')[0]}
                      />

                      <FormField
                        label="Urgency Level"
                        id="urgency"
                        type="select"
                        {...register('urgency')}
                        error={errors.urgency?.message}
                        required
                      >
                        <option value="">Select urgency...</option>
                        {URGENCY_LEVELS.map((level) => (
                          <option key={level.value} value={level.value}>
                            {level.label}
                          </option>
                        ))}
                      </FormField>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-gray-700">
                        <p className="font-semibold text-gray-900 mb-1">Fast Placement</p>
                        <p>
                          We can place qualified candidates within 24-48 hours for many positions.
                          For specialized roles or large volume requests, we'll provide a timeline estimate
                          after reviewing your requirements.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Step 5: Location */}
                  {currentStep === 5 && (
                    <div className="space-y-4">
                      <FormField
                        label="Work Location Address"
                        id="workLocation"
                        {...register('workLocation')}
                        error={errors.workLocation?.message}
                        required
                        placeholder="123 Main Street"
                      />

                      <FormField
                        label="City"
                        id="workCity"
                        {...register('workCity')}
                        error={errors.workCity?.message}
                        required
                        placeholder="Houston"
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <StateSelect
                          label="State"
                          id="workState"
                          {...register('workState')}
                          error={errors.workState?.message}
                          required
                        />

                        <FormField
                          label="ZIP Code"
                          id="workZip"
                          {...register('workZip')}
                          error={errors.workZip?.message}
                          required
                          placeholder="77001"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 6: Requirements */}
                  {currentStep === 6 && (
                    <div className="space-y-6">
                      <TagsInput
                        label="Required Skills"
                        id="requiredSkills"
                        value={requiredSkills}
                        onChange={(tags) => setValue('requiredSkills', tags)}
                        error={errors.requiredSkills?.message}
                        required
                        placeholder="Add a skill and press Enter"
                        helpText="Minimum 1 required skill"
                      />

                      <TagsInput
                        label="Preferred Skills"
                        id="preferredSkills"
                        value={preferredSkills}
                        onChange={(tags) => setValue('preferredSkills', tags)}
                        error={errors.preferredSkills?.message}
                        placeholder="Add a skill and press Enter"
                      />

                      <TagsInput
                        label="Required Certifications"
                        id="certifications"
                        value={certifications}
                        onChange={(tags) => setValue('certifications', tags)}
                        error={errors.certifications?.message}
                        placeholder="Add a certification and press Enter"
                        helpText="e.g., OSHA 10, Forklift License, CPA"
                      />

                      <FormField
                        label="Special Requirements"
                        id="specialRequirements"
                        type="textarea"
                        {...register('specialRequirements')}
                        error={errors.specialRequirements?.message}
                        rows={4}
                        placeholder="Any additional information we should know about this position..."
                      />

                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border">
                          <input
                            type="checkbox"
                            id="consent"
                            {...register('consent')}
                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="consent" className="text-sm text-gray-700">
                            I agree to be contacted by Skilled Trades Workforce regarding this staffing request.
                            I understand that by submitting this form, I consent to receive phone calls and emails
                            about qualified candidates and staffing services.
                            <span className="text-red-500 ml-1">*</span>
                          </label>
                        </div>
                        {errors.consent && (
                          <p className="text-sm text-red-600">{errors.consent.message}</p>
                        )}
                      </div>

                      {submitError && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
                          {submitError}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-6 border-t">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePrevious}
                      disabled={currentStep === 1 || isSubmitting}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>

                    {currentStep < STEPS.length ? (
                      <Button type="button" onClick={handleNext} disabled={isSubmitting}>
                        Next
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Request
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Help Text */}
            <div className="mt-8 text-center text-sm text-gray-600">
              <p>
                Need help or have questions? Call us at{' '}
                <a href="tel:+1234567890" className="text-blue-600 font-semibold hover:text-blue-700">
                  (XXX) XXX-XXXX
                </a>
                {' '}or email{' '}
                <a href="mailto:staffing@example.com" className="text-blue-600 font-semibold hover:text-blue-700">
                  staffing@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
