
import React, { useEffect, useState } from 'react';

interface StableInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  value: string | number;
  onCommit: (val: any) => void;
  label?: string;
  textarea?: boolean;
}

const StableInput: React.FC<StableInputProps> = ({ value, onCommit, label, textarea, className, ...rest }) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleBlur = () => {
    if (localValue !== value) {
      onCommit(localValue);
    }
  };

  const baseClass = "w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all";

  return (
    <div className="mb-4">
      {label && <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">{label}</label>}
      {textarea ? (
        <textarea
          // @ts-ignore
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          onBlur={handleBlur}
          className={`${baseClass} min-h-[100px] ${className || ''}`}
          {...rest}
        />
      ) : (
        <input
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          onBlur={handleBlur}
          className={`${baseClass} ${className || ''}`}
          {...rest}
        />
      )}
    </div>
  );
};

export default StableInput;
