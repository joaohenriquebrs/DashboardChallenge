import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  color: #453a8d;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 20px;
  background-color: #f3eeff;
`;

interface Option {
    value: string;
    label: string;
}

interface FilterSelectProps {
    label: string;
    options: Option[];
    selectedValue: string;
    onChange: (value: string) => void;
}

export const FilterSelectComponent: React.FC<FilterSelectProps> = ({
    label,
    options,
    selectedValue,
    onChange,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        onChange(value);
    };

    return (
        <div>
            <label>{label}</label>
            <StyledSelect
                value={selectedValue}
                onChange={handleChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </StyledSelect>
        </div>
    );
};
