export interface IAlbum {
    id: number,
    picture: string,
    title: string,
    artist: string,
    fans: string,
    duration: string,
    type: string,
    artistId: string,
}

export function makeAlbum(): IAlbum {
    return {
        id: 0,
        picture: '',
        title: '',
        artist: '',
        fans: '',
        duration: '',
        type: '',
        artistId: '',
    }
}