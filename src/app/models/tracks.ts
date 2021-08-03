export interface ITracks {
    id: number,
    title: string,
    duration: number,
    position: number,
    artist: string,
    artistId: number,
    type: string,
    explicit: boolean,
    picture: string,
    album: string,
    albumId: number
}

export function makeTracks(): ITracks {
    return {
        id: 0,
        title: '',
        duration: 0,
        position: 0,
        artist: '',
        artistId: 0,
        type: '',
        explicit: true,
        picture: '',
        album: '',
        albumId: 0,
    }
}