import { useState,useEffect } from "react"
import { SearchPanel } from "./SearchPanel"
import { List } from "./List"


export const ProjectListScreen = () =>{
     // 初始化用户变量 数组
     const [users,setUsers]=useState([])
     // 初始化参数变量 对象
     const [params,setParams]=useState({
         name:"",
         personId:""
     })
     const [List,setList]=useState([])
 
 
     // 逻辑
     useEffect(()=>{
         // 发送网络请求
         fetch('').then(async(response) =>{
             if(response.ok ){
                 // setList(await response.json())
             }
         })
     },[])
 
    return <div>
        {/* props 传递变量 */}
        {/* 主页有搜索框 展示数据的列表  搜索框需要通过props传递参数*/}
        <SearchPanel params={params} setParams={setParams} ></SearchPanel>
        <List  List={List}>负责人</List>
    </div>
}