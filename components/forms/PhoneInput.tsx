'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { AlertCircle } from 'lucide-react';
import { formatPhoneNumber } from '@/lib/utils';
import { ChangeEvent } from 'react';

interface PhoneInputProps {
  label: string;
  id: string;
  name?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  helpText?: string;
  disabled?: boolean;
  value?: string;
  onChange?: ((value: string) => void) | ((event: ChangeEvent<HTMLInputElement>) => void);
  onBlur?: (() => void) | ((event: any) => void);
  className?: string;
  ref?: any;
}

/**
 * Phone Input Component with Automatic Formatting
 *
 * Formats phone numbers as (XXX) XXX-XXXX while typing
 * Accepts only digits and common phone number characters
 *
 * @example
 * <PhoneInput
 *   label="Phone Number"
 *   id="phone"
 *   placeholder="(555) 123-4567"
 *   error={errors.phone}
 *   required
 *   value={formData.phone}
 *   onChange={(value) => setFormData({ ...formData, phone: value })}
 * />
 */
export function PhoneInput({
  label,
  id,
  name,
  placeholder = '(555) 123-4567',
  error,
  required = false,
  helpText,
  disabled = false,
  value = '',
  onChange,
  onBlur,
  className = '',
  ref,
}: PhoneInputProps) {
  const hasError = !!error;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    // Remove all non-digit characters for validation
    const digitsOnly = input.replace(/\D/g, '');

    // Limit to 10 digits
    if (digitsOnly.length <= 10) {
      // Store the formatted version
      const formatted = formatPhoneNumber(input);

      // Check if onChange expects a value or an event
      if (onChange) {
        // Try calling with formatted value first (for manual onChange handlers)
        try {
          (onChange as (value: string) => void)(formatted);
        } catch {
          // If that fails, call with the event (for react-hook-form)
          e.target.value = formatted;
          (onChange as (event: ChangeEvent<HTMLInputElement>) => void)(e);
        }
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text');
    const digitsOnly = pastedText.replace(/\D/g, '');

    if (digitsOnly.length <= 10) {
      const formatted = formatPhoneNumber(digitsOnly);

      if (onChange) {
        try {
          (onChange as (value: string) => void)(formatted);
        } catch {
          const syntheticEvent = {
            target: { value: formatted },
            type: 'change'
          } as ChangeEvent<HTMLInputElement>;
          (onChange as (event: ChangeEvent<HTMLInputElement>) => void)(syntheticEvent);
        }
      }
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={id} className="flex items-center gap-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>

      <Input
        type="tel"
        id={id}
        name={name || id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onPaste={handlePaste}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        ref={ref}
        className={hasError ? 'border-red-500 focus:ring-red-500' : ''}
        maxLength={14} // (XXX) XXX-XXXX
      />

      {helpText && !hasError && (
        <p className="text-sm text-gray-500">{helpText}</p>
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
