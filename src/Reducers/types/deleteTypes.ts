export interface DeleteType{
    name: string,
    id: string,
    deleteFunction(id: string) : void
}