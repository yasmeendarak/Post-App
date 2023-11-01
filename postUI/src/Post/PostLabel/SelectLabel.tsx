import React from 'react';

interface SelectLabelProps {
  label: string;
  value: string  | undefined;
  options: string[];
  onChange: (value: string) => void;
}

export const SelectLabel: React.FC<SelectLabelProps> = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}:
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options .map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};
