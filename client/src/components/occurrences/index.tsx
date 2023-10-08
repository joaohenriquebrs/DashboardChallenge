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

interface InfoOcurrenceProps {
  id: string;
  time: string;
  data: string;
  person: string;
  place: string;
  type: string;
  category: string;
}

export const InfoOcurrence: React.FC<InfoOcurrenceProps> = ({
  id,
  time,
  data,
  person,
  place,
  type,
  category
}) => {
  return (
    <>
      <InfoBlock>
        <TopRow>
          <InfoTextId>{id}</InfoTextId>
          <InfoTextTime>{time}</InfoTextTime>
        </TopRow>
        <MiddleRow>
          <InfoTextData>{data}</InfoTextData>
          <InfoTextPerson>•ㅤ{person}ㅤ•</InfoTextPerson>
          <InfoTextPlace>{place}</InfoTextPlace>
        </MiddleRow>
        <BottomRow>
          <InfoTextType>{type}</InfoTextType>
          <InfoTextCategory>{category}</InfoTextCategory>
        </BottomRow>
      </InfoBlock>
    </>
  );
};
