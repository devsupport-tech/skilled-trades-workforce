'use client';

import { useRef, useState } from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Upload, File, X, AlertCircle, CheckCircle2 } from 'lucide-react';
import { VALIDATION_RULES } from '@/lib/constants';

interface FileUploadProps {
  label: string;
  id: string;
  accept?: string;
  maxSizeMB?: number;
  error?: string;
  required?: boolean;
  helpText?: string;
  disabled?: boolean;
  value?: File | null;
  onChange?: (file: File | null) => void;
  onBlur?: () => void;
  className?: string;
}

/**
 * Reusable File Upload Component
 *
 * Handles file selection, validation, and display
 * Shows file name, size, and provides remove functionality
 *
 * @example
 * <FileUpload
 *   label="Resume"
 *   id="resume"
 *   accept=".pdf,.doc,.docx"
 *   maxSizeMB={5}
 *   error={errors.resume}
 *   required
 *   value={formData.resume}
 *   onChange={(file) => setFormData({ ...formData, resume: file })}
 * />
 */
export function FileUpload({
  label,
  id,
  accept = '.pdf,.doc,.docx',
  maxSizeMB = 5,
  error,
  required = false,
  helpText,
  disabled = false,
  value,
  onChange,
  onBlur,
  className = '',
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const hasError = !!error;

  const maxSizeBytes = maxSizeMB * 1024 * 1024;

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const validateFile = (file: File): string | null => {
    if (file.size > maxSizeBytes) {
      return `File size must be less than ${maxSizeMB}MB`;
    }

    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    const allowedExtensions = accept.split(',').map(ext => ext.trim().toLowerCase());

    if (!allowedExtensions.includes(fileExtension)) {
      return `File type must be one of: ${accept}`;
    }

    return null;
  };

  const handleFileChange = (file: File | null) => {
    if (!file) {
      onChange?.(null);
      return;
    }

    const validationError = validateFile(file);
    if (validationError) {
      // Could show a toast or inline error here
      console.error(validationError);
      return;
    }

    onChange?.(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFileChange(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (disabled) return;

    const file = e.dataTransfer.files?.[0] || null;
    handleFileChange(file);
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (disabled) return;

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleRemove = () => {
    onChange?.(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={id} className="flex items-center gap-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>

      <input
        ref={inputRef}
        type="file"
        id={id}
        name={id}
        accept={accept}
        disabled={disabled}
        required={required}
        onChange={handleInputChange}
        onBlur={onBlur}
        className="sr-only"
      />

      {!value ? (
        <div
          onClick={handleClick}
          onDrop={handleDrop}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          className={`
            relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
            transition-colors
            ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}
            ${hasError ? 'border-red-500 bg-red-50' : ''}
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-sm font-medium text-gray-700 mb-1">
            Drop file here or click to browse
          </p>
          <p className="text-xs text-gray-500">
            {accept.split(',').join(', ')} up to {maxSizeMB}MB
          </p>
        </div>
      ) : (
        <div className={`
          flex items-center justify-between p-4 rounded-lg border
          ${hasError ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'}
        `}>
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="flex-shrink-0">
              {hasError ? (
                <AlertCircle className="h-8 w-8 text-red-500" />
              ) : (
                <CheckCircle2 className="h-8 w-8 text-green-500" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900 truncate">
                {value.name}
              </p>
              <p className="text-xs text-gray-500">
                {formatFileSize(value.size)}
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleRemove}
            disabled={disabled}
            className="flex-shrink-0 ml-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Remove file</span>
          </Button>
        </div>
      )}

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
