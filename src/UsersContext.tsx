import React from "react";
import { User } from "types";

type UsersContextType = {
    users: User[];
    setUsers: (users: User[] | ((prevUsers: User[]) => User[])) => void;
};

const UsersContext = React.createContext<UsersContextType>({
    users: [],
    setUsers: () => {},
});

export const UsersContextProvider: React.FunctionComponent = ({ children }) => {
    const [users, setUsers] = React.useState<Array<User>>([]);
    return (
        <UsersContext.Provider value={{ users, setUsers }}>
            {children}
        </UsersContext.Provider>
    );
};

export default UsersContext;
