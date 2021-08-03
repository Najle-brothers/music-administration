export interface IAlbums {
    id: number,
    picture: string,
    small_picture: string,
    title: string,
    artist: string,
    explicitContent: boolean,
}

export function makeAlbums(): IAlbums {
    return {
        id: 0,
        picture: '',
        small_picture: '',
        title: '',
        artist: '',
        explicitContent: false
    }
}