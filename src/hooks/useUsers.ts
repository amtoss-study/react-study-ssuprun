import { useContext, useCallback } from "react";

import UsersContext from "UsersContext";
import { DataFromValues } from "types";
import { User } from "types";
import api from "api";

const useUsers = () => {
    const { users, setUsers } = useContext(UsersContext);

    const getUser = (id: number) => users.find(user => user.id === id);

    const retrieveUser = useCallback((id: number) => {
        return api.get(`users/${id}`).then((data: User) => {
            setUsers(prevUsers => [...prevUsers, data]);
        });
    }, [setUsers]);

    const retrieveUsers = useCallback(() => api.get("users").then((data: User[]) => {
        return setUsers(data);
    }), [setUsers]);

    const createUser = (values: DataFromValues) => {
        api.post("users", values).then((data: User) => {
            setUsers([...users, data]);
        });
    };

    const deleteUser = (id: number) => {
        setUsers(users.filter((user) => user.id !== id));
        api.del(`users/${id}`).catch(() => {
            setUsers(users);
        });
    };

    return { users, getUser, createUser, deleteUser, retrieveUsers, retrieveUser };
};

export default useUsers;
