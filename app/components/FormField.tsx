import type { LucideIcon } from 'lucide-react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'number' | 'tel';
  icon?: LucideIcon;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  isTextarea?: boolean;
  rows?: number;
  className?: string;
}

/**
 * Reusable form field component
 * Handles both input and textarea fields with consistent styling and error handling
 * Reduces code duplication in forms
 */
export default function FormField({
  label,
  name,
  type = 'text',
  icon: Icon,
  value,
  onChange,
  error,
  placeholder,
  required = false,
  isTextarea = false,
  rows = 6,
  className = '',
}: FormFieldProps) {
  const fieldId = `field-${name}`;
  const errorId = error ? `${fieldId}-error` : undefined;
  const iconColor = error ? 'text-error' : 'text-muted';

  return (
    <div className={className}>
      <label htmlFor={fieldId} className="block text-sm font-semibold text-body mb-2">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className={`absolute ${isTextarea ? 'top-3' : 'inset-y-0'} left-0 ${!isTextarea && 'flex items-center'} pl-4 pointer-events-none`}>
            <Icon className={`h-5 w-5 ${iconColor}`} />
          </div>
        )}
        {isTextarea ? (
          <textarea
            id={fieldId}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            rows={rows}
            aria-invalid={!!error}
            aria-describedby={errorId}
            className={`w-full ${Icon ? 'pl-12' : 'pl-4'} pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 outline-none resize-none ${
              error ? 'border-error focus:ring-error' : 'border-border focus:ring-primary-600'
            }`}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            id={fieldId}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            aria-invalid={!!error}
            aria-describedby={errorId}
            className={`w-full ${Icon ? 'pl-12' : 'pl-4'} pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 outline-none ${
              error ? 'border-error focus:ring-error' : 'border-border focus:ring-primary-600'
            }`}
            placeholder={placeholder}
          />
        )}
      </div>
      {error && (
        <p id={errorId} className="text-error text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
