import React, { useEffect } from "react";

import UserList from "components/UserList";
import NameForm from "components/NameForm";
import useUsers from "hooks/useUsers";

const List = () => {
    const { users, createUser, deleteUser, retrieveUsers } = useUsers();
    const [ loading, setLoading ] = React.useState(false);
    const [ error, setError ] = React.useState<null | Error>(null);

    useEffect(() => {
        setLoading(true);
        retrieveUsers().catch((err) => {
            setError(err);
            setLoading(false);
        }).finally(() => {
            setLoading(false);
        });
    }, [retrieveUsers]);

    if (error) {
        return <p>Error while loading data: {`${error}`}</p>
    }
    if (loading) {
        return <p>LOADING...</p>
    }

    return (
        <>
            <h3>Add new user</h3>
            <NameForm onSubmit={createUser} />
            <UserList users={users} removeUser={deleteUser} />
        </>
    );
};

export default List;
