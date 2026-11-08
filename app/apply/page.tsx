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
import { FileUpload } from '@/components/forms/FileUpload';
import { candidateRegistrationSchema } from '@/lib/validations/candidate-registration';
import type { CandidateRegistrationFormData } from '@/lib/validations/candidate-registration';
import { jobCategories } from '@/lib/config';
import { CheckCircle, ArrowRight, ArrowLeft, Loader2, Shield, Clock, Users } from 'lucide-react';

// Modify schema to make resume optional for web upload
const webCandidateRegistrationSchema = candidateRegistrationSchema.omit({ resume: true }).extend({
  resume: z.any().optional(),
});

type WebCandidateRegistrationFormData = z.infer<typeof webCandidateRegistrationSchema>;

const STEPS = [
  { id: 1, title: 'Personal Info', description: 'Contact information' },
  { id: 2, title: 'Address', description: 'Where you live' },
  { id: 3, title: 'Professional', description: 'Experience & skills' },
  { id: 4, title: 'Preferences', description: 'Work preferences' },
  { id: 5, title: 'Availability', description: 'When you can start' },
  { id: 6, title: 'Background', description: 'Eligibility & screening' },
  { id: 7, title: 'Additional', description: 'Final details' },
];

const EMPLOYMENT_TYPES = [
  { value: 'temporary', label: 'Temporary' },
  { value: 'temp_to_hire', label: 'Temp-to-Hire' },
  { value: 'direct_hire', label: 'Direct Hire / Permanent' },
  { value: 'contract', label: 'Contract' },
  { value: 'remote', label: 'Remote' },
];

const SHIFTS = [
  { value: 'day', label: 'Day Shift' },
  { value: 'night', label: 'Night Shift' },
  { value: 'swing', label: 'Swing Shift' },
  { value: 'rotating', label: 'Rotating Shifts' },
  { value: 'flexible', label: 'Flexible' },
];

export default function ApplyPage() {
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
  } = useForm<WebCandidateRegistrationFormData>({
    resolver: zodResolver(webCandidateRegistrationSchema),
    mode: 'onBlur',
    defaultValues: {
      skills: [],
      certifications: [],
      employmentTypes: [],
      shifts: [],
      preferredLocations: [],
      specializations: [],
      languagesSpoken: ['English'],
      consent: false,
      marketingConsent: false,
      willingToRelocate: false,
      hasDriversLicense: false,
      hasReliableTransportation: false,
      isAuthorizedToWork: false,
      hasBackgroundCheck: false,
      hasDrugScreening: false,
      source: 'website',
    },
  });

  const skills = watch('skills') || [];
  const certifications = watch('certifications') || [];
  const employmentTypes = watch('employmentTypes') || [];
  const shifts = watch('shifts') || [];
  const preferredLocations = watch('preferredLocations') || [];
  const specializations = watch('specializations') || [];
  const languagesSpoken = watch('languagesSpoken') || ['English'];

  const progress = (currentStep / STEPS.length) * 100;

  const handleNext = async () => {
    let isValid = false;

    switch (currentStep) {
      case 1:
        isValid = await trigger(['firstName', 'lastName', 'email', 'phone', 'alternatePhone']);
        break;
      case 2:
        isValid = await trigger(['addressLine1', 'addressLine2', 'city', 'state', 'zipCode']);
        break;
      case 3:
        isValid = await trigger(['yearsExperience', 'primaryJobCategory', 'jobTitle', 'skills', 'certifications', 'linkedInUrl']);
        break;
      case 4:
        isValid = await trigger(['employmentTypes', 'shifts', 'desiredPayRateMin', 'desiredPayRateMax', 'willingToRelocate', 'maxCommuteMinutes', 'preferredLocations']);
        break;
      case 5:
        isValid = await trigger(['availableStartDate']);
        break;
      case 6:
        isValid = await trigger(['hasDriversLicense', 'hasReliableTransportation', 'isAuthorizedToWork', 'hasBackgroundCheck', 'hasDrugScreening']);
        break;
      case 7:
        isValid = await trigger(['specializations', 'languagesSpoken', 'additionalInfo', 'consent', 'marketingConsent']);
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

  const onSubmit = async (data: WebCandidateRegistrationFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // TODO: Implement server action
      console.log('Form data:', data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Redirect to confirmation page
      router.push('/apply/confirmation');
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
              Register for Job Opportunities
            </h1>
            <p className="text-xl text-blue-100">
              Complete your profile and we\\'ll match you with positions that fit your skills and preferences
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
                <div className="text-sm font-semibold text-gray-900">Fast Job Matching</div>
                <div className="text-xs text-gray-600">We\\'ll match you with opportunities quickly</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="h-8 w-8 text-blue-600" />
                <div className="text-sm font-semibold text-gray-900">100% Free for Job Seekers</div>
                <div className="text-xs text-gray-600">No fees, no obligations</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Users className="h-8 w-8 text-blue-600" />
                <div className="text-sm font-semibold text-gray-900">Dedicated Support</div>
                <div className="text-xs text-gray-600">Your own recruiter to guide you</div>
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
            <div className="mb-8 hidden md:flex overflow-x-auto">
              <div className="flex items-center justify-between min-w-full">
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
                      <div className="mt-2 text-xs text-center max-w-[70px]">
                        <div className={`font-medium ${currentStep >= step.id ? 'text-gray-900' : 'text-gray-500'}`}>
                          {step.title}
                        </div>
                      </div>
                    </div>
                    {index < STEPS.length - 1 && (
                      <div
                        className={`h-1 w-8 mx-1 ${
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
                  {/* Step 1: Personal Info */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          label="First Name"
                          id="firstName"
                          {...register('firstName')}
                          error={errors.firstName?.message}
                          required
                          placeholder="John"
                        />

                        <FormField
                          label="Last Name"
                          id="lastName"
                          {...register('lastName')}
                          error={errors.lastName?.message}
                          required
                          placeholder="Smith"
                        />
                      </div>

                      <FormField
                        label="Email Address"
                        id="email"
                        type="email"
                        {...register('email')}
                        error={errors.email?.message}
                        required
                        placeholder="john@example.com"
                      />

                      <PhoneInput
                        label="Phone Number"
                        id="phone"
                        {...register('phone')}
                        error={errors.phone?.message}
                        required
                      />

                      <PhoneInput
                        label="Alternate Phone Number"
                        id="alternatePhone"
                        {...register('alternatePhone')}
                        error={errors.alternatePhone?.message}
                      />
                    </div>
                  )}

                  {/* Step 2: Address */}
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <FormField
                        label="Address Line 1"
                        id="addressLine1"
                        {...register('addressLine1')}
                        error={errors.addressLine1?.message}
                        required
                        placeholder="123 Main Street"
                      />

                      <FormField
                        label="Address Line 2"
                        id="addressLine2"
                        {...register('addressLine2')}
                        error={errors.addressLine2?.message}
                        placeholder="Apt 4B"
                      />

                      <FormField
                        label="City"
                        id="city"
                        {...register('city')}
                        error={errors.city?.message}
                        required
                        placeholder="Houston"
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <StateSelect
                          label="State"
                          id="state"
                          {...register('state')}
                          error={errors.state?.message}
                          required
                        />

                        <FormField
                          label="ZIP Code"
                          id="zipCode"
                          {...register('zipCode')}
                          error={errors.zipCode?.message}
                          required
                          placeholder="77001"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Professional */}
                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <FormField
                        label="Years of Experience"
                        id="yearsExperience"
                        type="number"
                        {...register('yearsExperience')}
                        error={errors.yearsExperience?.message}
                        required
                        min={0}
                        max={75}
                        placeholder="5"
                      />

                      <FormField
                        label="Primary Job Category"
                        id="primaryJobCategory"
                        type="select"
                        {...register('primaryJobCategory')}
                        error={errors.primaryJobCategory?.message}
                        required
                      >
                        <option value="">Select category...</option>
                        {jobCategories.map((category) => (
                          <option key={category.slug} value={category.name}>
                            {category.name}
                          </option>
                        ))}
                      </FormField>

                      <FormField
                        label="Current or Most Recent Job Title"
                        id="jobTitle"
                        {...register('jobTitle')}
                        error={errors.jobTitle?.message}
                        required
                        placeholder="e.g., Warehouse Associate, Electrician, Administrative Assistant"
                      />

                      <TagsInput
                        label="Skills"
                        id="skills"
                        value={skills}
                        onChange={(tags) => setValue('skills', tags)}
                        error={errors.skills?.message}
                        required
                        placeholder="Add a skill and press Enter"
                        helpText="Add your key skills (minimum 1)"
                      />

                      <TagsInput
                        label="Certifications & Licenses"
                        id="certifications"
                        value={certifications}
                        onChange={(tags) => setValue('certifications', tags)}
                        error={errors.certifications?.message}
                        placeholder="Add certification and press Enter"
                        helpText="e.g., OSHA 10, CDL, CPA, etc."
                      />

                      <FormField
                        label="LinkedIn Profile URL"
                        id="linkedInUrl"
                        type="url"
                        {...register('linkedInUrl')}
                        error={errors.linkedInUrl?.message}
                        placeholder="https://www.linkedin.com/in/yourprofile"
                      />
                    </div>
                  )}

                  {/* Step 4: Preferences */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Employment Types <span className="text-red-500">*</span>
                        </label>
                        <div className="space-y-2">
                          {EMPLOYMENT_TYPES.map((type) => (
                            <div key={type.value} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`employment-${type.value}`}
                                value={type.value}
                                {...register('employmentTypes')}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                              <label htmlFor={`employment-${type.value}`} className="ml-2 text-sm text-gray-700">
                                {type.label}
                              </label>
                            </div>
                          ))}
                        </div>
                        {errors.employmentTypes && (
                          <p className="mt-2 text-sm text-red-600">{errors.employmentTypes.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Shift Preferences <span className="text-red-500">*</span>
                        </label>
                        <div className="space-y-2">
                          {SHIFTS.map((shift) => (
                            <div key={shift.value} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`shift-${shift.value}`}
                                value={shift.value}
                                {...register('shifts')}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                              <label htmlFor={`shift-${shift.value}`} className="ml-2 text-sm text-gray-700">
                                {shift.label}
                              </label>
                            </div>
                          ))}
                        </div>
                        {errors.shifts && (
                          <p className="mt-2 text-sm text-red-600">{errors.shifts.message}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          label="Desired Minimum Pay Rate"
                          id="desiredPayRateMin"
                          type="number"
                          {...register('desiredPayRateMin')}
                          error={errors.desiredPayRateMin?.message}
                          min={0}
                          step={0.01}
                          placeholder="15.00"
                          helpText="$/hour"
                        />

                        <FormField
                          label="Desired Maximum Pay Rate"
                          id="desiredPayRateMax"
                          type="number"
                          {...register('desiredPayRateMax')}
                          error={errors.desiredPayRateMax?.message}
                          min={0}
                          step={0.01}
                          placeholder="25.00"
                          helpText="$/hour"
                        />
                      </div>

                      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border">
                        <input
                          type="checkbox"
                          id="willingToRelocate"
                          {...register('willingToRelocate')}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="willingToRelocate" className="text-sm text-gray-700">
                          I am willing to relocate for the right opportunity
                        </label>
                      </div>

                      <FormField
                        label="Maximum Commute Time"
                        id="maxCommuteMinutes"
                        type="number"
                        {...register('maxCommuteMinutes')}
                        error={errors.maxCommuteMinutes?.message}
                        min={0}
                        max={300}
                        placeholder="30"
                        helpText="Minutes (one way)"
                      />

                      <TagsInput
                        label="Preferred Work Locations"
                        id="preferredLocations"
                        value={preferredLocations}
                        onChange={(tags) => setValue('preferredLocations', tags)}
                        error={errors.preferredLocations?.message}
                        placeholder="Add city/area and press Enter"
                        helpText="e.g., Houston, Katy, Sugar Land"
                      />
                    </div>
                  )}

                  {/* Step 5: Availability */}
                  {currentStep === 5 && (
                    <div className="space-y-4">
                      <FormField
                        label="Available Start Date"
                        id="availableStartDate"
                        type="date"
                        {...register('availableStartDate')}
                        error={errors.availableStartDate?.message}
                        required
                        min={new Date().toISOString().split('T')[0]}
                      />

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-700">
                        <p className="font-semibold text-gray-900 mb-1">When Can You Start?</p>
                        <p>
                          Let us know your earliest available start date. Many of our positions can begin
                          within 24-48 hours of interview approval.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Step 6: Background */}
                  {currentStep === 6 && (
                    <div className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border">
                          <input
                            type="checkbox"
                            id="hasDriversLicense"
                            {...register('hasDriversLicense')}
                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="hasDriversLicense" className="text-sm text-gray-700">
                            I have a valid driver\\'s license
                          </label>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border">
                          <input
                            type="checkbox"
                            id="hasReliableTransportation"
                            {...register('hasReliableTransportation')}
                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="hasReliableTransportation" className="text-sm text-gray-700">
                            I have reliable transportation to work
                          </label>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border">
                          <input
                            type="checkbox"
                            id="isAuthorizedToWork"
                            {...register('isAuthorizedToWork')}
                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="isAuthorizedToWork" className="text-sm text-gray-700">
                            I am authorized to work in the United States
                            <span className="text-red-500 ml-1">*</span>
                          </label>
                        </div>
                        {errors.isAuthorizedToWork && (
                          <p className="text-sm text-red-600">{errors.isAuthorizedToWork.message}</p>
                        )}

                        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border">
                          <input
                            type="checkbox"
                            id="hasBackgroundCheck"
                            {...register('hasBackgroundCheck')}
                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="hasBackgroundCheck" className="text-sm text-gray-700">
                            I am willing to undergo a background check
                          </label>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border">
                          <input
                            type="checkbox"
                            id="hasDrugScreening"
                            {...register('hasDrugScreening')}
                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="hasDrugScreening" className="text-sm text-gray-700">
                            I am willing to undergo a drug screening
                          </label>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 7: Additional */}
                  {currentStep === 7 && (
                    <div className="space-y-6">
                      <TagsInput
                        label="Specializations"
                        id="specializations"
                        value={specializations}
                        onChange={(tags) => setValue('specializations', tags)}
                        error={errors.specializations?.message}
                        placeholder="Add specialization and press Enter"
                        helpText="Any specialized areas of expertise"
                      />

                      <TagsInput
                        label="Languages Spoken"
                        id="languagesSpoken"
                        value={languagesSpoken}
                        onChange={(tags) => setValue('languagesSpoken', tags)}
                        error={errors.languagesSpoken?.message}
                        placeholder="Add language and press Enter"
                      />

                      <FormField
                        label="Additional Information"
                        id="additionalInfo"
                        type="textarea"
                        {...register('additionalInfo')}
                        error={errors.additionalInfo?.message}
                        rows={4}
                        placeholder="Any additional information you\\'d like us to know..."
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
                            I agree to be contacted by Skilled Trades Workforce regarding job opportunities.
                            I understand my information will be used to match me with suitable positions.
                            <span className="text-red-500 ml-1">*</span>
                          </label>
                        </div>
                        {errors.consent && (
                          <p className="text-sm text-red-600">{errors.consent.message}</p>
                        )}

                        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border">
                          <input
                            type="checkbox"
                            id="marketingConsent"
                            {...register('marketingConsent')}
                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="marketingConsent" className="text-sm text-gray-700">
                            I\\'d like to receive email updates about new job opportunities and career tips
                          </label>
                        </div>
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
                            Complete Registration
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
                <a href="mailto:jobs@example.com" className="text-blue-600 font-semibold hover:text-blue-700">
                  jobs@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
