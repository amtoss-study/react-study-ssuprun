const User = ({ id, name, surname, email, removeUser }) => (
    <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{email}</td>
        <td>
            <button 
                type='button'
                onClick={() => removeUser(id)}
            >
                Remove
            </button>
        </td>
    </tr>
);


const Users = ({ users, removeUser }) => {
    return (
        <div>
            <h3>User list</h3>
            <table border="1px" cellspacing="0" cellpadding="3">
                <thead>
                    <tr>
                        <th width='200px'>Name</th>
                        <th width='200px'>Surname</th>
                        <th width='200px'>E-mail</th>
                        <th width='60px'></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <User
                            removeUser={removeUser}
                            {...user}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}


const NameForm = ({ onSubmit }) => {
    const [values, setValues] = React.useState({
        name: '',
        surname: '',
        email: ''
    });
    return (
        <form
            autoComplete="off"
            onSubmit={event => {
                event.preventDefault();
                onSubmit(values);
            }}
        >
            <input
                placeholder='Name'
                name="name"
                value={values.name}
                onChange={event => {
                    setValues({...values, name:event.target.value})
                }}
            />
            <input
                placeholder='Surname'
                name="surnname"
                value={values.surname}
                onChange={event => {
                    setValues({...values, surname:event.target.value})
                }}
            />
            <input
                placeholder='E-mail address'
                name="email"
                value={values.email}
                onChange={event => {
                    setValues({...values, email:event.target.value})
                }}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

const App = () => {
    const [users, setUsers] = React.useState([]);
    return (
        <div>
            <h3>Add new user</h3>
            <NameForm onSubmit={values => setUsers([...users, {...values, id:Date.now()}])} />
            <Users
                users={users}
                removeUser={id => {
                    setUsers(users.filter(user => user.id !== id))
                }}
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('react-root'));
