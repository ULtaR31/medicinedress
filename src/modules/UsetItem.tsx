import React from 'react';
import {IUser} from "../types/types";
interface UserItemProps {
    user:IUser;
}
const UserItem:React.FC<UserItemProps>  = (
    {
        user
    }:UserItemProps
)=>{
    return(
        <div style={{padding: 15, border: '1px solid darkgray'}}>
            {user.id}. {user.name} проживает в городе {user.adress.city} на улице {user.adress.street}
        </div>
    )
}

export default UserItem;