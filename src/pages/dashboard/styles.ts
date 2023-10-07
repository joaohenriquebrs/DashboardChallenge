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

  @media (min-width: 1420px) and (max-width: 1540px) {
    margin-left: 50px;
  }

  @media (min-width: 1220px) and (max-width: 1420px) {
    margin-left: 50px;
  }

  @media (min-width: 1060px) and (max-width: 1220px) {
    margin-left: 40px;
  }
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

  @media (min-width: 1540px) and (max-width: 1700px) {
    font-size: 13px;
  }

  @media (min-width: 1420px) and (max-width: 1540px) {
    font-size: 12px;
  }

  @media (min-width: 1220px) and (max-width: 1420px) {
    font-size: 11px;
  }

  @media (min-width: 1060px) and (max-width: 1220px) {
    font-size: 10px;
  }
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

  @media (min-width: 1540px) and (max-width: 1730px) {
    width: 165px;
  }

  @media (min-width: 1420px) and (max-width: 1540px) {
    width: 155px;
  }

  @media (min-width: 1220px) and (max-width: 1420px) {
    width: 130px;
  }

  @media (min-width: 1060px) and (max-width: 1220px) {
    width: 125px;
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

export const ClearButton = styled.button`
  color: #5b43d9;
  font-size: 16px;
  background: none;
  border: none;
  border-bottom: 1px solid #5b43d9;
  cursor: pointer;
  margin-right: 20px;

  @media (min-width: 1540px) and (max-width: 1700px) {
    font-size: 13px;
  }

  @media (min-width: 1420px) and (max-width: 1540px) {
    font-size: 13px;
  }

  @media (min-width: 1220px) and (max-width: 1420px) {
    font-size: 12px;
  }

  @media (min-width: 1060px) and (max-width: 1220px) {
    font-size: 12px;
  }
`;

export const FilterButton = styled.button`
  background: #5b43d9;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 119px;
  height: 41px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  @media (min-width: 1700px) and (max-width: 1860px) {
    width: 99px;
    font-size: 15px;
  }

  @media (min-width: 1540px) and (max-width: 1700px) {
    width: 89px;
    font-size: 13px;
  }

  @media (min-width: 1420px) and (max-width: 1540px) {
    width: 79px;
    font-size: 11px;
  }

  @media (min-width: 1220px) and (max-width: 1420px) {
    width: 74px;
    font-size: 12px;
  }

  @media (min-width: 1060px) and (max-width: 1220px) {
    width: 84px;
    font-size: 12px;
    margin-top: 10px;
  }
`;

export const ButtonContainer = styled.div`
  margin-left: 180px;
  margin-top: 70px;

  @media (min-width: 1700px) and (max-width: 1860px) {
    margin-left: 110px;
  }

  @media (min-width: 1540px) and (max-width: 1700px) {
    margin-left: 70px;
  }

  @media (min-width: 1420px) and (max-width: 1540px) {
    margin-left: 60px;
  }

  @media (min-width: 1220px) and (max-width: 1420px) {
    margin-left: 20px;
    margin-top: 60px;
  }

  @media (min-width: 1060px) and (max-width: 1220px) {
    margin-left: 20px;
    margin-top: -60px;
  }
`;
