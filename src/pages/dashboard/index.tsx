import React from 'react';
import {
  PageContainer,
  HeaderContainer,
  HeaderTitle,
  FilterLabel,
  FilterContainer,
  FilterSelect,
  Select,
  SelectsDiv,
  ClearButton,
  FilterButton,
  ButtonContainer
} from './styles';

import { AgeRangeSlider } from 'components';

export const Dashboard = () => {
  return (
    <>
      <PageContainer>
        <HeaderContainer>
          <HeaderTitle>Dashboard</HeaderTitle>
          <SelectsDiv>
            <FilterContainer>
              <FilterLabel>Local das ocorrências</FilterLabel>
              <FilterSelect>
                <Select>
                  <option value="all">Todos os locais</option>
                  <option value="bus">Ônibus</option>
                  <option value="bus_terminal">Terminal de Ônibus</option>
                  <option value="subway">Metrô</option>
                  <option value="bus_stop">Parada de ônibus</option>
                  <option value="subway_terminal">Terminal de metrô</option>
                </Select>
              </FilterSelect>
            </FilterContainer>

            <FilterContainer>
              <FilterLabel>Tipo de importunação</FilterLabel>
              <FilterSelect>
                <Select>
                  <option value="all">Todos</option>
                  <option value="groping">Abuso sexual</option>
                  <option value="stalking">Perseguição</option>
                  <option value="unwanted_photos">Fotos indesejadas</option>
                  <option value="verbal_aggression">Agressão verbal</option>
                  <option value="physical_aggression">Agressão física</option>
                </Select>
              </FilterSelect>
            </FilterContainer>

            <FilterContainer>
              <FilterLabel>Momento da importunação</FilterLabel>
              <FilterSelect>
                <Select>
                  <option value="all">Todos</option>
                  <option value="morning">Manhã</option>
                  <option value="afternoon">Tarde</option>
                  <option value="evening">Noite</option>
                  <option value="late_night">Madrugada</option>
                  <option value="unknown">Desconhecido</option>
                </Select>
              </FilterSelect>
            </FilterContainer>

            <FilterContainer>
              <FilterLabel>Gênero</FilterLabel>
              <FilterSelect>
                <Select>
                  <option value="all">Todos</option>
                  <option value="woman_cis">Mulher Cis</option>
                  <option value="man_cis">Homem Cis</option>
                  <option value="woman_trans">Mulher Trans</option>
                  <option value="man_trans">Homem Trans</option>
                  <option value="non-binary">Não-Binário</option>
                </Select>
              </FilterSelect>
            </FilterContainer>

            <FilterContainer>
              <FilterLabel>Faixa etária</FilterLabel>
              <AgeRangeSlider />
            </FilterContainer>

            <ButtonContainer>
              <ClearButton>Limpar filtro</ClearButton>
              <FilterButton>Filtrar</FilterButton>
            </ButtonContainer>
          </SelectsDiv>
        </HeaderContainer>
      </PageContainer>
    </>
  );
};
