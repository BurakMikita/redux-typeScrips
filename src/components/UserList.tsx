import React, {useEffect} from "react";
import {useTypedSelector} from "../hook/UseTypesSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/action-creater/user";
import {useActions} from "../hook/useActions";


const  UserList: React.FC = ()=>{

    const {users,error,loading} = useTypedSelector(state=>state.user)
  const{fetchUsers} = useActions()

    useEffect(()=>{
        fetchUsers()
    },[])


    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            <div>
                {users.map(user =>
                    <div key={user.id}>{user.name}</div>
                )}
            </div>
        </div>
    )
}

export default UserList