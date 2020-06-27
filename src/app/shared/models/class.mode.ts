export interface IClass {
    id: number
    name: string
    maxStudnets: number
    status: boolean
    //Nullable
    description: string
}
 
enum ClassStatus {
 OPENED,CLOSED
}