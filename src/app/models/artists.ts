export interface IArtists {
    id: number,
    artist: string,
    picture: string,
    small_picture: string,
    fans: number,
}

export function makeArtist(): IArtists {
    return {
        id: 0,
        artist: '',
        picture: '',
        small_picture: '',
        fans: 0,
    }
}