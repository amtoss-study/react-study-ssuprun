import { useContext } from "react";

import UsersContext from "UsersContext";
import { DataFromValues } from "types";
import { User } from "types";

const useUsers = () => {
    const { users, setUsers } = useContext(UsersContext);

    const getUser = (id: number) => users.find(user => user.id === id);

    const createUser = (values: DataFromValues) => {
        const newUser: User = { ...values, id: Date.now() };
        setUsers([...users, newUser]);
    };

    const deleteUser = (id: number) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return { users, getUser, createUser, deleteUser };
};

export default useUsers;
