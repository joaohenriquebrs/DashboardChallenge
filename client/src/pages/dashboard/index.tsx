import React, { useEffect } from 'react';
import Image from 'next/image';
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

import { AgeRangeSlider, InfoOcurrence, FetchComplaints } from 'components';
import {
  Circle1,
  Circle2,
  GraphicBars,
  GraphicHeatmap,
  GraphicGender
} from 'assets';

export const Dashboard = () => {
  useEffect(() => {
    const filters = {
      place: 'bus_stop',
      _sort: 'datetime',
    };

    FetchComplaints(filters)
      .then((complaints) => {
        console.log(complaints);
      })
      .catch((error) => {
        console.error('Erro ao buscar reclamações:', error);
      });
  }, []);

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
