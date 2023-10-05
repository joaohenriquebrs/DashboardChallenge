import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  margin-top: 113px;
  width: 88%;
  height: 228px;
  border-radius: 16px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  flex-direction: column;
`;

export const HeaderTitle = styled.h1`
  display: flex;
  margin-left: 60px;
  margin-top: 29px;
  color: #5b43d9;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
`;

export const FilterContainer = styled.div`
  display: flex;
  margin-top: 52px;
  margin-left: 60px;
  flex-direction: column;
`;

export const FilterLabel = styled.h3`
  color: var(--material-theme-ref-neutral-neutral-30, #48464a);
  leading-trim: both;
  text-edge: cap;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;

export const FilterSelect = styled.div`
  display: flex;
  align-items: center;
  width: 185px;
  height: 40px;
  background-color: #f3eeff;
  border-radius: 8px;
  padding: 0 8px;
  margin-top: 8px;

  :hover {
    cursor: pointer;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  color: #453a8d;
  leading-trim: both;
  text-edge: cap;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 20px;
  background-color: #f3eeff;
`;

export const SelectsDiv = styled.div`
  display: flex;
`;
