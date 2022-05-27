export interface StatusInterface{
    method:string|null,
    time:string|null,
    type:string
}

export interface attendancesInterface{
    attendances:StatusInterface[],
    date:number,
    month:number,
    totalRestTime:number,
    totalWorkingTime:number,
    year:number,
    userId:string

}