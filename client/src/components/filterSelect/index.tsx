import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 120%;
  height: 100%;
  border: none;
  background: transparent;
  color: #453a8d;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 20px;
  background-color: #f3eeff;

  @media (min-width: 1540px) and (max-width: 1730px) {
    width: 110%;
  }

  @media (min-width: 1420px) and (max-width: 1540px) {
    width: 100%;
  }

  @media (min-width: 1220px) and (max-width: 1420px) {
    width: 100%;
  }

  @media (min-width: 1060px) and (max-width: 1220px) {
    width: 100%;
  }
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
