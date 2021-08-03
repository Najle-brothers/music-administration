export interface IPlaylists {
    picture: string,
    small_picture: string,
    title: string,
    id: number,
    user: string,
}

export function makePlaylists(): IPlaylists {
    return {
        picture: '',
        small_picture: '',
        title: '',
        id: 0,
        user:'',
    }
}