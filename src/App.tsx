import React from 'react';
import Card, { CArdVariant } from './modules/Card';
import Header from './modules/Header';
import UserList from "./modules/UserList";
import {IUser} from "./types/types";

function App() {
    const users:IUser[] = [
        {id:1,name:'lesha',email:'adasd',adress:{
            city:'gomel',street:'popla',zipcode:'123'
            }
        },
        {id:2,name:'esha',email:'ada',adress:{
                city:'omel',street:'opla',zipcode:'23'
            }
        }
    ]
  return (
    <div>
      <Header />
        its work
        <Card onClick={()=> console.log('pressed!')} width='200px' height='200px' variant={CArdVariant.primery}>
          <button>Кнопка</button>
          <div>aksjdalksd</div>
        </Card>
        <UserList users={users}/>
    </div>
  );
}

export default App;
