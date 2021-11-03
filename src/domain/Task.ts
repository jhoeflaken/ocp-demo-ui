import IUser from "../domain/User";

export default interface ITask {
    id?: string | null,
    title: string,
    description?: string | null,
    user: IUser,
    creationDate: string,
    dueDate?: string | null,
    status:  'open' | 'closed'
};