'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { AlertCircle } from 'lucide-react';
import { formatPhoneNumber } from '@/lib/utils';

interface PhoneInputProps {
  label: string;
  id: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  helpText?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  className?: string;
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
  placeholder = '(555) 123-4567',
  error,
  required = false,
  helpText,
  disabled = false,
  value = '',
  onChange,
  onBlur,
  className = '',
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
      onChange?.(formatted);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text');
    const digitsOnly = pastedText.replace(/\D/g, '');

    if (digitsOnly.length <= 10) {
      const formatted = formatPhoneNumber(digitsOnly);
      onChange?.(formatted);
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
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onPaste={handlePaste}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
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
