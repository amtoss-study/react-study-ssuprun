import React from "react";
import { useParams } from "react-router-dom";
import useUsers from "hooks/useUsers"

const Details = () => {
    const {getUser, retrieveUser} = useUsers();
    const {userId} = useParams<{userId: string}>();
    const id = parseInt(userId, 10);
    const user = getUser(id);

    React.useEffect(() => {
        retrieveUser(id);
    }, [retrieveUser, id]);

    return (<div>
        <h3>User details</h3>
        <div>Id: {user?.id}</div>
        <div>Name: {user?.name}</div>
        <div>Surname: {user?.surname}</div>
        <div>E-mail: {user?.email}</div>

    </div>)
}

export default Details;