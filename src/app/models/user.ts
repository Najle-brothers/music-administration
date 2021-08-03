export interface IUser {
    id: number,
    userName: string,
    name: string,
    lastName: string,
    explicitContent: boolean,
}

export function makeUser(): IUser {
    return {
        id: 0,
        userName: '',
        name: '',
        lastName: '',
        explicitContent: false,
    }
}