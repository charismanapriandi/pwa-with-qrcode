import { ChangeEvent } from 'react';
import './Input.css'

interface InputProps {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function Input({
  name,
  onChange,
  value
}: InputProps) {
  return (
    <div className="Input-root">
      <input 
        name={name} 
        value={value} 
        onChange={onChange} 
        className="Input-field"
      />
    </div>
  )
}