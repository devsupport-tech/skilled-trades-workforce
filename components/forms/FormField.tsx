import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertCircle } from 'lucide-react';

interface FormFieldProps {
  label: string;
  id: string;
  type?: 'text' | 'email' | 'tel' | 'number' | 'url' | 'date' | 'textarea' | 'select';
  placeholder?: string;
  error?: string;
  required?: boolean;
  helpText?: string;
  disabled?: boolean;
  value?: string | number;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  selectOptions?: { value: string; label: string }[];
  min?: number;
  max?: number;
  step?: number;
  rows?: number;
  maxLength?: number;
  pattern?: string;
  className?: string;
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
}: FormFieldProps) {
  const hasError = !!error;

  const renderInput = () => {
    const baseProps = {
      id,
      name: id,
      disabled,
      required,
      onBlur,
      className: hasError ? 'border-red-500 focus:ring-red-500' : '',
    };

    if (type === 'textarea') {
      return (
        <Textarea
          {...baseProps}
          placeholder={placeholder}
          value={value as string || ''}
          onChange={(e) => onChange?.(e.target.value)}
          rows={rows}
          maxLength={maxLength}
        />
      );
    }

    if (type === 'select') {
      return (
        <Select
          value={value as string || ''}
          onValueChange={(val) => onChange?.(val)}
          disabled={disabled}
        >
          <SelectTrigger
            id={id}
            className={hasError ? 'border-red-500 focus:ring-red-500' : ''}
          >
            <SelectValue placeholder={placeholder || 'Select an option'} />
          </SelectTrigger>
          <SelectContent>
            {selectOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    }

    return (
      <Input
        {...baseProps}
        type={type}
        placeholder={placeholder}
        value={value || ''}
        onChange={(e) => onChange?.(e.target.value)}
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
