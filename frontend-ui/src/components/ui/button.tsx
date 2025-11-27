import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
    size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
                    {
                        'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
                        'bg-gray-100 text-gray-900 hover:bg-gray-200': variant === 'secondary',
                        'border border-gray-200 hover:bg-gray-100': variant === 'outline',
                        'hover:bg-gray-100': variant === 'ghost',
                        'bg-red-600 text-white hover:bg-red-700': variant === 'destructive',
                        'h-9 px-3 text-sm': size === 'sm',
                        'h-10 py-2 px-4': size === 'md',
                        'h-11 px-8 rounded-md': size === 'lg',
                        'h-10 w-10': size === 'icon',
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';
