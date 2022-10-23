import React from 'react'
import {IUser} from "../types/types";
import UserItem from "./UsetItem";

interface UserListProps{
    users:IUser[]
}
const UserList:React.FC<UserListProps> =  (
    {
        users
    }:UserListProps
)=>{
    return(
        <div>
            {users.map(user =>
                <UserItem key={user.id} user={user} />
            )}
        </div>
    )
}

export default UserList;


