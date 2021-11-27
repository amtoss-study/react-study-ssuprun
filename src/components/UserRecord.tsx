import React from 'react';
import { User } from '../types'

const UserRecord = ({ user, removeUser }: {user: User, removeUser: (id: number) => void}) => (
    <tr>
        <td>{user.name}</td>
        <td>{user.surname}</td>
        <td>{user.email}</td>
        <td>
            <button 
                type='button'
                onClick={() => removeUser(user.id)}
            >
                Remove
            </button>
        </td>
    </tr>
  );

export default UserRecord;