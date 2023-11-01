import React, { memo } from 'react';

interface TextProps {
  label: string;
  value: string | undefined;
  onChange: (value: string) => void;
}


const TextLabel: React.FC<TextProps> = ({ label, value, onChange }) => {
  console.log(`input ${label} has been rendered with value ${value}`)
  return (
    <label>
      {label}:
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export default memo(TextLabel) ;
