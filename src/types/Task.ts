type Priority = "High" | "Medium" | "Low";

export interface ITask{
    id: number;
    title: string;
    note?: string;
    completed: boolean;
    priority: Priority
}