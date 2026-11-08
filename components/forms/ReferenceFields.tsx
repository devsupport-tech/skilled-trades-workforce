'use client';

import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, AlertCircle } from 'lucide-react';
import { FormField } from './FormField';
import { PhoneInput } from './PhoneInput';

interface Reference {
  name: string;
  company: string;
  title?: string;
  phone: string;
  email?: string;
  relationship?: string;
}

interface ReferenceFieldsProps {
  label?: string;
  id: string;
  error?: string;
  required?: boolean;
  helpText?: string;
  disabled?: boolean;
  value?: Reference[];
  onChange?: (references: Reference[]) => void;
  onBlur?: () => void;
  minReferences?: number;
  maxReferences?: number;
  includeTitle?: boolean;
  includeRelationship?: boolean;
  className?: string;
}

/**
 * Reference Fields Component
 *
 * Allows adding/removing multiple references with validation
 * Collects name, company, title, phone, email, relationship
 *
 * @example
 * <ReferenceFields
 *   label="Professional References"
 *   id="references"
 *   error={errors.references}
 *   required
 *   value={formData.references}
 *   onChange={(refs) => setFormData({ ...formData, references: refs })}
 *   minReferences={2}
 *   maxReferences={5}
 *   includeTitle
 * />
 */
export function ReferenceFields({
  label = 'References',
  id,
  error,
  required = false,
  helpText,
  disabled = false,
  value = [],
  onChange,
  onBlur,
  minReferences = 2,
  maxReferences = 5,
  includeTitle = true,
  includeRelationship = false,
  className = '',
}: ReferenceFieldsProps) {
  const hasError = !!error;

  const addReference = () => {
    if (value.length >= maxReferences) return;

    onChange?.([
      ...value,
      {
        name: '',
        company: '',
        ...(includeTitle && { title: '' }),
        phone: '',
        email: '',
        ...(includeRelationship && { relationship: '' }),
      },
    ]);
  };

  const removeReference = (index: number) => {
    onChange?.(value.filter((_, i) => i !== index));
  };

  const updateReference = (index: number, field: keyof Reference, fieldValue: string) => {
    const updated = value.map((ref, i) =>
      i === index ? { ...ref, [field]: fieldValue } : ref
    );
    onChange?.(updated);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <Label className="flex items-center gap-1">
          {label}
          {required && <span className="text-red-500">*</span>}
        </Label>
        <Button
          type="button"
          onClick={addReference}
          disabled={disabled || value.length >= maxReferences}
          variant="outline"
          size="sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Reference
        </Button>
      </div>

      {helpText && !hasError && (
        <p className="text-sm text-gray-500">{helpText}</p>
      )}

      {value.length > 0 ? (
        <div className="space-y-4">
          {value.map((reference, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">
                    Reference {index + 1}
                    {index < minReferences && (
                      <span className="text-red-500 ml-1">*</span>
                    )}
                  </CardTitle>
                  <Button
                    type="button"
                    onClick={() => removeReference(index)}
                    disabled={disabled || value.length <= minReferences}
                    variant="ghost"
                    size="sm"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove reference</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <FormField
                    label="Name"
                    id={`${id}-${index}-name`}
                    type="text"
                    placeholder="John Smith"
                    value={reference.name}
                    onChange={(val) => updateReference(index, 'name', val)}
                    required={index < minReferences}
                    disabled={disabled}
                  />
                  <FormField
                    label="Company"
                    id={`${id}-${index}-company`}
                    type="text"
                    placeholder="ABC Construction"
                    value={reference.company}
                    onChange={(val) => updateReference(index, 'company', val)}
                    required={index < minReferences}
                    disabled={disabled}
                  />
                </div>

                {includeTitle && (
                  <FormField
                    label="Title"
                    id={`${id}-${index}-title`}
                    type="text"
                    placeholder="Project Manager"
                    value={reference.title || ''}
                    onChange={(val) => updateReference(index, 'title', val)}
                    disabled={disabled}
                  />
                )}

                {includeRelationship && (
                  <FormField
                    label="Relationship"
                    id={`${id}-${index}-relationship`}
                    type="text"
                    placeholder="Former Supervisor"
                    value={reference.relationship || ''}
                    onChange={(val) => updateReference(index, 'relationship', val)}
                    disabled={disabled}
                  />
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <PhoneInput
                    label="Phone"
                    id={`${id}-${index}-phone`}
                    placeholder="(555) 123-4567"
                    value={reference.phone}
                    onChange={(val) => updateReference(index, 'phone', val)}
                    required={index < minReferences}
                    disabled={disabled}
                  />
                  <FormField
                    label="Email"
                    id={`${id}-${index}-email`}
                    type="email"
                    placeholder="john@example.com"
                    value={reference.email || ''}
                    onChange={(val) => updateReference(index, 'email', val)}
                    disabled={disabled}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 border-2 border-dashed rounded-lg">
          <p className="text-sm text-gray-500 mb-3">No references added yet</p>
          <Button
            type="button"
            onClick={addReference}
            disabled={disabled}
            variant="outline"
            size="sm"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Your First Reference
          </Button>
        </div>
      )}

      {value.length > 0 && value.length < minReferences && (
        <p className="text-sm text-orange-600">
          Please add at least {minReferences - value.length} more reference(s)
        </p>
      )}

      {hasError && (
        <div className="flex items-start gap-2 text-sm text-red-600">
          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
