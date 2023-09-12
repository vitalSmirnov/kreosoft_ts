

export enum IScheduleType{
    daily = "daily",
    weekly = "weekly"
}

export const IWeeklyType = [
    {name: "Понедельник"},
    {name: "Вторник"},
    {name: "Среда"},
    {name: "Четверг"},
    {name: "Пятница"},
    {name: "Суббота"},
    {name: "Восресенье"},

]

export interface IScheduleTypeProps{
    type: IScheduleType.daily | IScheduleType.weekly
}