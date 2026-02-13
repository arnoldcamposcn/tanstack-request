import { forwardRef, type InputHTMLAttributes } from 'react';

interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  onSearch?: (value: string) => void;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSearch, className = '', ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onSearch?.(e.target.value);
    };

    return (
      <div className="w-full">
        <input
          ref={ref}
          type="search"
          onChange={handleChange}
          className={`border-2 rounded-md p-2 w-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 hover:border-gray-400 ${className}`}
          placeholder="Buscar por marca, modelo, color..."
          {...props}
        />
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';