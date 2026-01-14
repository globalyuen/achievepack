'use client';

import * as React from 'react';
import { ChevronDown, Check } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/animate-ui/components/radix/dropdown-menu';
import { cn } from '@/lib/utils';

export type FilterOption = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

type FilterDropdownProps = {
  value: string;
  onChange: (value: string) => void;
  options: FilterOption[];
  placeholder?: string;
  label?: string;
  className?: string;
  triggerClassName?: string;
  size?: 'sm' | 'default' | 'lg';
  showSelectedLabel?: boolean;
  align?: 'start' | 'center' | 'end';
};

function FilterDropdown({
  value,
  onChange,
  options,
  placeholder = 'Select...',
  label,
  className,
  triggerClassName,
  size = 'default',
  showSelectedLabel = true,
  align = 'start',
}: FilterDropdownProps) {
  const selectedOption = options.find(opt => opt.value === value);
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-1 h-7',
    default: 'text-sm px-3 py-1.5 h-9',
    lg: 'text-sm px-4 py-2 h-10',
  };

  return (
    <div className={cn('inline-flex flex-col', className)}>
      {label && (
        <span className="text-xs font-medium text-gray-500 mb-1">{label}</span>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              'inline-flex items-center justify-between gap-2 rounded-lg border border-gray-200 bg-white font-medium text-gray-700 shadow-sm transition-all',
              'hover:bg-gray-50 hover:border-gray-300',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1',
              'data-[state=open]:border-primary-400 data-[state=open]:ring-2 data-[state=open]:ring-primary-100',
              sizeClasses[size],
              triggerClassName,
            )}
          >
            <span className={cn(
              'truncate',
              !selectedOption && 'text-gray-400'
            )}>
              {showSelectedLabel && selectedOption ? selectedOption.label : placeholder}
            </span>
            <ChevronDown className={cn(
              'h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200',
              'data-[state=open]:rotate-180'
            )} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align={align}
          className="min-w-[180px] max-h-[300px] overflow-y-auto"
        >
          <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
            {options.map((option) => (
              <DropdownMenuRadioItem 
                key={option.value} 
                value={option.value}
                className="cursor-pointer"
              >
                {option.icon && <span className="mr-2">{option.icon}</span>}
                {option.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

// Multi-select filter dropdown
type MultiFilterDropdownProps = {
  values: string[];
  onChange: (values: string[]) => void;
  options: FilterOption[];
  placeholder?: string;
  label?: string;
  className?: string;
  triggerClassName?: string;
  size?: 'sm' | 'default' | 'lg';
  align?: 'start' | 'center' | 'end';
};

function MultiFilterDropdown({
  values,
  onChange,
  options,
  placeholder = 'Select...',
  label,
  className,
  triggerClassName,
  size = 'default',
  align = 'start',
}: MultiFilterDropdownProps) {
  const selectedCount = values.length;
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-1 h-7',
    default: 'text-sm px-3 py-1.5 h-9',
    lg: 'text-sm px-4 py-2 h-10',
  };

  const handleToggle = (value: string, checked: boolean) => {
    if (checked) {
      onChange([...values, value]);
    } else {
      onChange(values.filter(v => v !== value));
    }
  };

  return (
    <div className={cn('inline-flex flex-col', className)}>
      {label && (
        <span className="text-xs font-medium text-gray-500 mb-1">{label}</span>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              'inline-flex items-center justify-between gap-2 rounded-lg border border-gray-200 bg-white font-medium text-gray-700 shadow-sm transition-all',
              'hover:bg-gray-50 hover:border-gray-300',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1',
              'data-[state=open]:border-primary-400 data-[state=open]:ring-2 data-[state=open]:ring-primary-100',
              sizeClasses[size],
              triggerClassName,
            )}
          >
            <span className={cn(
              'truncate',
              selectedCount === 0 && 'text-gray-400'
            )}>
              {selectedCount > 0 ? `${selectedCount} selected` : placeholder}
            </span>
            <ChevronDown className={cn(
              'h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200',
              'data-[state=open]:rotate-180'
            )} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align={align}
          className="min-w-[180px] max-h-[300px] overflow-y-auto"
        >
          <DropdownMenuGroup>
            {options.map((option) => (
              <DropdownMenuCheckboxItem
                key={option.value}
                checked={values.includes(option.value)}
                onCheckedChange={(checked) => handleToggle(option.value, checked)}
                className="cursor-pointer"
              >
                {option.icon && <span className="mr-2">{option.icon}</span>}
                {option.label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuGroup>
          {values.length > 0 && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => onChange([])}
                className="text-gray-500 cursor-pointer"
              >
                Clear all
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export { FilterDropdown, MultiFilterDropdown };
export type { FilterDropdownProps, MultiFilterDropdownProps };
