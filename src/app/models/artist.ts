export interface IArtist {
    picture: string,
    fans: string,
    name: string,
    id: number,
}

export function makeArtist(): IArtist {
    return {
        picture: '',
        fans: '',
        name: '',
        id: 0,
    }
}