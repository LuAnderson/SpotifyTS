import React, { useState } from 'react';
import * as S from './styles';

function Search() {

  const [content, setContent] = useState('');

  const _handleChange = (event : React.ChangeEvent<any>) => {
    setContent(event.target.value);
  }

  return (
    <S.Bar>
      <S.Input 
        type='text'
        id='search-playlist'
        name='fname'
        placeholder='Buscar'
        onChange={_handleChange}
        value={content}
      />
    </S.Bar>
  );
}

export { Search };
