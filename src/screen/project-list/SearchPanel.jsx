import userEvent from "@testing-library/user-event"
import { useEffect } from "react"

// 引入自定义hooks
import {useDebounce} from '../../customHooks'

export const SearchPanel = (props) => {
    // 解构参数
    const {users,setUsers,Lists,setLists,dbUser}=props

    // useEffect(()=>{
    //     // console.log(dbUser)
    // },[])

    return <form action=''>
       <div>
           {/* input 框添加value以及onChange事件 */}
           {/* 使用onChange事件因此需要useDebounce 进行防抖 */}
           <input type='text' placeholder="请输入需要选择的内容" onChange={useDebounce((event)=>{
               console.log(event.target.value)
           }),500}></input>

           <select value={Lists.id} > 
           {/* 第一个option为默认值 */}
               <option value={''}>负责人</option>
               {
                   dbUser.map(item => {
                      return  <option key={item.id}>{item.jobGrade}</option>
                   })
               }
           </select>
       </div>
        
    </form>
}