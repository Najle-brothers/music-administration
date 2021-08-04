export interface IArtist {
    picture: string,
    medium_picture: string,
    fans: string,
    name: string,
    id: number,
}

export function makeArtist(): IArtist {
    return {
        picture: '',
        medium_picture: '',
        fans: '',
        name: '',
        id: 0,
    }
}