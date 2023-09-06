
export interface IDeleteProps{
    name: string,
    id: string,
    deleteFunction(id: string) : void
}