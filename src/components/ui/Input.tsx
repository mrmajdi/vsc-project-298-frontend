// @vsc repo:vsc-project-298-frontend file:src/components/ui/Input.tsx task:f6-src-components-ui-input-tsx module:frontend session:298
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    placeholder?: string;
    value?: string;
}

export function Input({ type = 'text', placeholder, value, onChange, ...props }: InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value ?? ''}
            onChange={onChange}
            className={`w-full rounded-md border bg-background ps-[??]
`}
</input>
);
}
