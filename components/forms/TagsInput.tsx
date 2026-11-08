'use client';

import { useState, KeyboardEvent } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { X, AlertCircle, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TagsInputProps {
  label: string;
  id: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  helpText?: string;
  disabled?: boolean;
  value?: string[];
  onChange?: (tags: string[]) => void;
  onBlur?: () => void;
  maxTags?: number;
  suggestions?: string[];
  className?: string;
}

/**
 * Tags Input Component
 *
 * Allows adding/removing multiple items as tags
 * Supports suggestions and keyboard shortcuts
 *
 * @example
 * <TagsInput
 *   label="Skills"
 *   id="skills"
 *   placeholder="Type a skill and press Enter"
 *   error={errors.skills}
 *   required
 *   value={formData.skills}
 *   onChange={(tags) => setFormData({ ...formData, skills: tags })}
 *   maxTags={50}
 *   suggestions={['Carpentry', 'Electrical', 'Plumbing', 'HVAC']}
 * />
 */
export function TagsInput({
  label,
  id,
  placeholder = 'Type and press Enter to add',
  error,
  required = false,
  helpText,
  disabled = false,
  value = [],
  onChange,
  onBlur,
  maxTags = 50,
  suggestions = [],
  className = '',
}: TagsInputProps) {
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const hasError = !!error;

  const filteredSuggestions = suggestions.filter(
    (suggestion) =>
      !value.includes(suggestion) &&
      suggestion.toLowerCase().includes(inputValue.toLowerCase())
  );

  const addTag = (tag: string) => {
    const trimmedTag = tag.trim();

    if (!trimmedTag) return;

    if (value.includes(trimmedTag)) {
      setInputValue('');
      return;
    }

    if (value.length >= maxTags) {
      setInputValue('');
      return;
    }

    onChange?.([...value, trimmedTag]);
    setInputValue('');
    setShowSuggestions(false);
  };

  const removeTag = (tagToRemove: string) => {
    onChange?.(value.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === 'Backspace' && !inputValue && value.length > 0) {
      removeTag(value[value.length - 1]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={id} className="flex items-center gap-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>

      <div className="space-y-2">
        {/* Display added tags */}
        {value.length > 0 && (
          <div className="flex flex-wrap gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
            {value.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-3 py-1 flex items-center gap-1"
              >
                <span>{tag}</span>
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  disabled={disabled}
                  className="hover:bg-gray-300 rounded-full p-0.5 transition-colors"
                >
                  <X className="h-3 w-3" />
                  <span className="sr-only">Remove {tag}</span>
                </button>
              </Badge>
            ))}
          </div>
        )}

        {/* Input field */}
        <div className="relative">
          <div className="flex gap-2">
            <Input
              type="text"
              id={id}
              name={id}
              placeholder={
                value.length >= maxTags
                  ? `Maximum ${maxTags} tags reached`
                  : placeholder
              }
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onBlur={onBlur}
              onFocus={() => setShowSuggestions(inputValue.length > 0)}
              disabled={disabled || value.length >= maxTags}
              required={required && value.length === 0}
              className={hasError ? 'border-red-500 focus:ring-red-500' : ''}
            />
            <Button
              type="button"
              onClick={() => addTag(inputValue)}
              disabled={disabled || !inputValue.trim() || value.length >= maxTags}
              variant="outline"
              size="icon"
            >
              <Plus className="h-4 w-4" />
              <span className="sr-only">Add tag</span>
            </Button>
          </div>

          {/* Suggestions dropdown */}
          {showSuggestions && filteredSuggestions.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
              {filteredSuggestions.slice(0, 10).map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => addTag(suggestion)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors text-sm"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Tag count */}
        <p className="text-xs text-gray-500">
          {value.length} / {maxTags} tags added
        </p>
      </div>

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
