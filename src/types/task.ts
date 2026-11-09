export interface Task{
    id:string;
    title:string;
    description:string;
    priority:TaskPriority;
    status:TaskStatus;
    category:string;
    createdAt:string;
    dueDate:string;
    updatedAt?:string;
}

export type TaskPriority= "Low"|"Medium"|"High";

export type TaskStatus="Pending"|"In Progress"|"Completed";