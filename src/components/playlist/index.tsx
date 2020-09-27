import React from 'react';
import * as S from './styles';

import { IPlaylist } from '../../interfaces';

function Playlist({data} : { data: any }) {
  return (
    <S.Container>
      {data.map((item: IPlaylist, index: number) => (
        <>
          <S.Image src={item.images[0].url} alt={item.id} />
          {/* <a href={item.external_urls.spotify} key={index} target="_blank">
            {item.description}
          </a> */}
        </>
      ))}
    </S.Container>
  );
}

export { Playlist };
