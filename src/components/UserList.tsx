import React from "react";

import UserRecord from "components/UserRecord";
import { User } from "types";

const UserList = ({
    users,
    removeUser,
}: {
    users: User[];
    removeUser: (id: number) => void;
}) => {
    return (
        <div>
            <h3>User list</h3>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>E-mail</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <UserRecord user={user} removeUser={removeUser} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
