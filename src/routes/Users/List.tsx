import React from "react";

import UserList from "components/UserList";
import NameForm from "components/NameForm";
import useUsers from "hooks/useUsers";

const List = () => {
    const { users, createUser, deleteUser } = useUsers();
    return (
        <>
            <h3>Add new user</h3>
            <NameForm onSubmit={createUser} />
            <UserList users={users} removeUser={deleteUser} />
        </>
    );
};

export default List;
