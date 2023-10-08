import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
  margin-top: 20px;

  .rc-slider-track {
    background-color: #453a8d;
    height: 6px;
  }

  .rc-slider-rail {
    background-color: #e5deff;
    height: 6px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 189px;
  margin-top: 20px;

  @media (min-width: 1700px) and (max-width: 1860px) {
    width: 159px;
  }

  @media (min-width: 1540px) and (max-width: 1700px) {
    width: 139px;
  }

  @media (min-width: 1380px) and (max-width: 1540px) {
    width: 124px;
  }

  @media (min-width: 1220px) and (max-width: 1380px) {
    width: 119px;
  }

  @media (min-width: 1060px) and (max-width: 1220px) {
    width: 109px;
  }
`;

const Range = styled.p`
  margin-top: -35px;
  font-size: 14px;
  color: #cac5ca;

  @media (min-width: 1540px) and (max-width: 1700px) {
    font-size: 13px;
  }

  @media (min-width: 1380px) and (max-width: 1540px) {
    font-size: 12px;
  }

  @media (min-width: 1220px) and (max-width: 1380px) {
    font-size: 11px;
  }

  @media (min-width: 1060px) and (max-width: 1220px) {
    font-size: 11px;
  }
`;

const AgeRangeSlider = () => {
  const [ageRange, setAgeRange] = useState([1, 30]);

  const handleSliderChange = (value: [number, number]) => {
    setAgeRange(value);
  };

  return (
    <Container>
      <Range>
        {ageRange[0]} - {ageRange[1]} anos
      </Range>
      <StyledSlider
        range
        min={1}
        max={90}
        step={1}
        value={ageRange}
        onChange={handleSliderChange}
      />
    </Container>
  );
};

export default AgeRangeSlider;
