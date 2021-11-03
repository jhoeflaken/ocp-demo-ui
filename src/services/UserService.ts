import http from '../http-commons'
import IUser from "../domain/User";

const getAll = () => {
    return http.get<Array<IUser>>("/v1/users")
}

const get = (id: number) => {
    return http.get<IUser>(`/v1/users/${id}`);
}

const create = (user: IUser) => {
    return http.post<IUser>("/v1/users", user);
}

const update = (user: IUser) => {
    return http.put<IUser>("/v1/users", user);
}

const deleteAll = () => {
    return http.delete("/v1/users/");
}

const deleteById = (id: number) => {
    return http.delete(`/v1/users/${id}`)
}

const UserService = {
    getAll,
    get,
    create,
    update,
    deleteAll,
    deleteById
}

export default UserService;