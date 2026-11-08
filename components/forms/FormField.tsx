import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { AlertCircle } from 'lucide-react';
import { ChangeEvent } from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  name?: string;
  type?: 'text' | 'email' | 'tel' | 'number' | 'url' | 'date' | 'textarea' | 'select';
  placeholder?: string;
  error?: string;
  required?: boolean;
  helpText?: string;
  disabled?: boolean;
  value?: string | number;
  onChange?: ((value: string) => void) | ((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void);
  onBlur?: (() => void) | ((event: any) => void);
  selectOptions?: { value: string; label: string }[];
  min?: number;
  max?: number;
  step?: number;
  rows?: number;
  maxLength?: number;
  pattern?: string;
  className?: string;
  ref?: any;
}

/**
 * Reusable Form Field Component
 *
 * Wraps input elements with consistent label, error display, and help text
 * Supports text, email, tel, number, url, date, textarea, and select inputs
 *
 * @example
 * <FormField
 *   label="Email Address"
 *   id="email"
 *   type="email"
 *   placeholder="you@example.com"
 *   error={errors.email}
 *   required
 *   value={formData.email}
 *   onChange={(value) => setFormData({ ...formData, email: value })}
 * />
 */
export function FormField({
  label,
  id,
  name,
  type = 'text',
  placeholder,
  error,
  required = false,
  helpText,
  disabled = false,
  value,
  onChange,
  onBlur,
  selectOptions = [],
  min,
  max,
  step,
  rows = 4,
  maxLength,
  pattern,
  className = '',
  ref,
}: FormFieldProps) {
  const hasError = !!error;

  const renderInput = () => {
    const baseProps = {
      id,
      name: name || id,
      disabled,
      required,
      onBlur,
      onChange,
      ref,
      className: hasError ? 'border-red-500 focus:ring-red-500' : '',
    };

    if (type === 'textarea') {
      return (
        <Textarea
          {...baseProps}
          placeholder={placeholder}
          value={value as string || ''}
          rows={rows}
          maxLength={maxLength}
        />
      );
    }

    if (type === 'select') {
      return (
        <Select
          {...baseProps}
          value={value as string || ''}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {selectOptions?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      );
    }

    return (
      <Input
        {...baseProps}
        type={type}
        placeholder={placeholder}
        value={value || ''}
        min={min}
        max={max}
        step={step}
        maxLength={maxLength}
        pattern={pattern}
      />
    );
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={id} className="flex items-center gap-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>

      {renderInput()}

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
