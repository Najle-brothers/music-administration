export interface IArtist {
    picture: string,
    title: string,
    fans: string
}

export function makeArtist(): IArtist {
    return {
        picture: '',
        title: '',
        fans: ''
    }
}