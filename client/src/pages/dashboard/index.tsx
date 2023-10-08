import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  PageContainer,
  HeaderContainer,
  HeaderTitle,
  FilterLabel,
  FilterContainer,
  FilterSelect,
  SelectsDiv,
  ClearButton,
  FilterButton,
  ButtonContainer,
  ContentContainer,
  GridContainer,
  Block,
  RightSection,
  RightBlock,
  ContainerMain,
  BlockHeader,
  BlockContent,
  RightHeader,
  RightContent,
  BlockImage,
  BlockGraphic
} from './styles';

import { AgeRangeSlider, InfoOcurrence, FetchComplaints, FilterSelectComponent } from 'components';
import {
  Circle1,
  Circle2,
  GraphicBars,
  GraphicHeatmap,
  GraphicGender
} from 'assets';

export const Dashboard = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    place: 'all',
    type: 'all',
    moment: 'all',
    gender: 'all',
    ageRange: [1, 90],
  });

  useEffect(() => {
    const filters = {
      place: selectedFilters.place !== 'all' ? selectedFilters.place : undefined,
      type: selectedFilters.type !== 'all' ? selectedFilters.type : undefined,
      moment: selectedFilters.moment !== 'all' ? selectedFilters.moment : undefined,
      gender: selectedFilters.gender !== 'all' ? selectedFilters.gender : undefined,
      ageRange: selectedFilters.ageRange,
      _sort: 'datetime',
    };

    FetchComplaints(filters)
      .then((complaints) => {
        console.log(complaints);
      })
      .catch((error) => {
        console.error('Erro ao buscar reclamações:', error);
      });
  }, [selectedFilters]);

  const handleClearFilters = () => {
    setSelectedFilters({
      place: 'all',
      type: 'all',
      moment: 'all',
      gender: 'all',
      ageRange: [1, 90],
    });
  };

  const handleApplyFilters = () => {
    // Função para aplicar os filtros selecionados
    // Já está usando os filtros em selectedFilters no useEffect
  };


  return (
    <>
      <PageContainer>
        <HeaderContainer>
          <HeaderTitle>Dashboard</HeaderTitle>
          <SelectsDiv>
            <FilterContainer>
              <FilterLabel>Local das ocorrências</FilterLabel>
              <FilterSelect>
                <FilterSelectComponent
                  label=""
                  options={[
                    { value: 'all', label: 'Todos os locais' },
                    { value: 'bus', label: 'Ônibus' },
                    { value: 'bus_terminal', label: 'Terminal de Ônibus' },
                    { value: 'subway', label: 'Metrô' },
                    { value: 'bus_stop', label: 'Parada de ônibus' },
                    { value: 'subway_terminal', label: 'Terminal de metrô' },
                  ]}
                  selectedValue={selectedFilters.place}
                  onChange={(value: string) => setSelectedFilters({ ...selectedFilters, place: value })}
                />
              </FilterSelect>
            </FilterContainer>

            <FilterContainer>
              <FilterLabel>Tipo de importunação</FilterLabel>
              <FilterSelect>
                <FilterSelectComponent
                  label=""
                  options={[
                    { value: 'all', label: 'Todos' },
                    { value: 'groping', label: 'Abuso sexual' },
                    { value: 'stalking', label: 'Perseguição' },
                    { value: 'unwanted_photos', label: 'Fotos indesejadas' },
                    { value: 'verbal_aggression', label: 'Agressão verbal' },
                    { value: 'physical_aggression', label: 'Agressão física' },
                  ]}
                  selectedValue={selectedFilters.type}
                  onChange={(value: string) => setSelectedFilters({ ...selectedFilters, type: value })}
                />
              </FilterSelect>
            </FilterContainer>

            <FilterContainer>
              <FilterLabel>Momento da importunação</FilterLabel>
              <FilterSelect>
                <FilterSelectComponent
                  label=""
                  options={[
                    { value: 'all', label: 'Todos' },
                    { value: 'morning', label: 'Manhã' },
                    { value: 'afternoon', label: 'Tarde' },
                    { value: 'evening', label: 'Noite' },
                    { value: 'late_night', label: 'Madrugada' },
                    { value: 'unknown', label: 'Desconhecido' },
                  ]}
                  selectedValue={selectedFilters.moment}
                  onChange={(value: string) => setSelectedFilters({ ...selectedFilters, moment: value })}
                />
              </FilterSelect>
            </FilterContainer>

            <FilterContainer>
              <FilterLabel>Gênero</FilterLabel>
              <FilterSelect>
                <FilterSelectComponent
                  label=""
                  options={[
                    { value: 'all', label: 'Todos' },
                    { value: 'woman_cis', label: 'Mulher Cis' },
                    { value: 'man_cis', label: 'Homem Cis' },
                    { value: 'woman_trans', label: 'Mulher Trans' },
                    { value: 'man_trans', label: 'Homem Trans' },
                    { value: 'non-binary', label: 'Não-Binário' },
                  ]}
                  selectedValue={selectedFilters.gender}
                  onChange={(value: string) => setSelectedFilters({ ...selectedFilters, gender: value })}
                />
              </FilterSelect>
            </FilterContainer>

            <FilterContainer>
              <FilterLabel>Faixa etária</FilterLabel>
              <AgeRangeSlider />
            </FilterContainer>

            <ButtonContainer>
              <ClearButton onClick={handleClearFilters}>Limpar filtro</ClearButton>
              <FilterButton onClick={handleApplyFilters}>Filtrar</FilterButton>
            </ButtonContainer>
          </SelectsDiv>
        </HeaderContainer>
      </PageContainer>

      <ContainerMain>
        <ContentContainer>
          <GridContainer>
            <Block>
              <BlockHeader>Momento</BlockHeader>
              <BlockContent>
                <BlockImage>
                  <Image
                    src={Circle1}
                    alt="Gráfico em forma de circulo 
                mostrando o percentual no momento da importunação"
                  />
                </BlockImage>
                <BlockImage>
                  <Image
                    src={Circle2}
                    alt="Gráfico em forma de circulo 
                mostrando o percentual após a importunação"
                  />
                </BlockImage>
              </BlockContent>
            </Block>
            <Block>
              <BlockHeader>Faixa Etária</BlockHeader>
              <BlockContent>
                <BlockGraphic>
                  <Image
                    src={GraphicBars}
                    alt="Gráfico em barra mostrando o percentual 
                de importunação de acordo com a faixa etária"
                  />
                </BlockGraphic>
              </BlockContent>
            </Block>
            <Block>
              <BlockHeader>Horário</BlockHeader>
              <BlockContent>
                <BlockGraphic>
                  <Image
                    src={GraphicHeatmap}
                    alt="Gráfico em formato de mapa de calor 
                mostrando os horários com maior densidade importunação"
                  />
                </BlockGraphic>
              </BlockContent>
            </Block>
            <Block>
              <BlockHeader>Gênero</BlockHeader>
              <BlockContent>
                <BlockGraphic>
                  <Image
                    src={GraphicGender}
                    alt="Gráfico em barra mostrando o percentual 
                de importunação de acordo com o gênero"
                  />
                </BlockGraphic>
              </BlockContent>
            </Block>
          </GridContainer>
        </ContentContainer>

        <RightSection>
          <RightBlock>
            <RightHeader>Ocorrências</RightHeader>
            <RightContent>
              <InfoOcurrence />
              <InfoOcurrence />
              <InfoOcurrence />
              <InfoOcurrence />
              <InfoOcurrence />
              <InfoOcurrence />
            </RightContent>
          </RightBlock>
        </RightSection>
      </ContainerMain>
    </>
  );
};
