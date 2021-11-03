import http from "../http-commons";
import ITask from "../domain/Task";

const getAll = () => {
    return http.get<Array<ITask>>("/v1/tasks")
}

const get = (id: number) => {
    return http.get<ITask>(`/v1/tasks/${id}`);
}

const create = (task: ITask) => {
    return http.post<ITask>("/v1/tasks", task);
}

const update = (task: ITask) => {
    return http.put<ITask>("/v1/tasks", task);
}

const deleteAll = () => {
    return http.delete("/v1/tasks/");
}

const deleteById = (id: number) => {
    return http.delete(`/v1/tasks/${id}`)
}

const TaskService = {
    getAll,
    get,
    create,
    update,
    deleteAll,
    deleteById
}

export default TaskService;