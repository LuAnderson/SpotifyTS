import React from 'react';
import * as S from './styles';

import { IPlaylist } from '../../interfaces';

function Playlist({data} : { data: IPlaylist[] }) {
  return (
    <S.Container>
      {data.map((item: IPlaylist, index: number) => (
        <S.Card key={index}>
          <S.Image src={item.images[0].url} alt={item.id} />
        </S.Card>
      ))}
    </S.Container>
  );
}

export { Playlist };
