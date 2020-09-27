import axios from 'axios';
import { IPlaylistResponse } from '../../interfaces';

const headers : object = {
    Authorization: 'Bearer BQDb0EfUzN01P0AzCayXN3q0S-YpNVu8s_5BVZlMot0pV3uKzQS8_JlCJX9xCaHVGxsimo_pYMe-4V-QAxFuUjfHuM8h7uhuWzzEQMoNtY0X1J3xdKw831IbSRv9m8GE9d_vyt3v6Kveb0-iCzks7rwKA05lYvdKMzjSGRc-Y171a1qrnR-2Dw2oD1QHr7Hr_eqPdEZl0co'
};

const getPlaylists = async () => (
    (await axios.get<IPlaylistResponse>('https://api.spotify.com/v1/browse/featured-playlists', { headers: headers })).data
);

export { getPlaylists };
