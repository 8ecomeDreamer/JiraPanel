import userEvent from "@testing-library/user-event"
import { useEffect } from "react"

export const SearchPanel = (params,setParams) => {
    

    return <form action=''>
        {/* input 输入框 */}
        <input type="text"  value={params.name} onChange={(event)=>{
            // 修改变量
            setParams({
                // 解构
                ...params,
                // 修改name属性
                name: event.target.value
            })
        }}/>
        {/* select 选择框 */}
        <select>
            {/* 列表渲染 */}
            {/* {
                users.map(item => {
                    return <option key={item.id} value={item.id}>{item.name}</option>
                })
            } */}
            
        </select>
        
    </form>
}