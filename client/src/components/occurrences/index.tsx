import React from 'react';
import {
  InfoBlock,
  InfoTextId,
  InfoTextTime,
  InfoTextData,
  InfoTextPerson,
  InfoTextPlace,
  InfoTextType,
  InfoTextCategory,
  TopRow,
  MiddleRow,
  BottomRow
} from './styles';

export const InfoOcurrence = () => {
  return (
    <>
      <InfoBlock>
        <TopRow>
          <InfoTextId>IDD1967320929002...</InfoTextId>
          <InfoTextTime>Agora &gt;</InfoTextTime>
        </TopRow>
        <MiddleRow>
          <InfoTextData>04/10/23</InfoTextData>
          <InfoTextPerson>•ㅤTestemunhaㅤ•</InfoTextPerson>
          <InfoTextPlace>Ônibus</InfoTextPlace>
        </MiddleRow>
        <BottomRow>
          <InfoTextType>Intimidação</InfoTextType>
          <InfoTextCategory>Perseguição</InfoTextCategory>
        </BottomRow>
      </InfoBlock>
    </>
  );
};
