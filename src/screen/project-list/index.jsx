import { useState,useEffect } from "react"
import { SearchPanel } from "./SearchPanel"
import { List } from "./List"
// 引入数据
import {dbUser,dbLists} from '../../dbData/db'
// 引入自定义hooks
import {useDebounce} from '../../customHooks'




export const ProjectListScreen = () =>{
    //  定义用户变量
    const [users,setUsers]=useState(dbUser)
    //  定义参数对象
    const  [param,setParam]=useState({
        name:'',
        jobGrade:''
    })
    const [Lists,setLists]=useState(dbLists)


    //  生命周期中处理事件
    useEffect(()=>{
        // users=dbUser
        // console.log(Lists)
    },[])
     
 
    return <div>
        {/* props 传递变量 */}
        {/* 主页有搜索框 展示数据的列表  搜索框需要通过props传递参数*/}
        <SearchPanel user={users} setUser={setUsers} Lists={Lists} setLists={setLists} dbUser={dbUser}></SearchPanel>
        <List Lists={Lists}></List>
    </div>
}