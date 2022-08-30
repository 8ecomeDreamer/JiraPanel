import userEvent from "@testing-library/user-event"
import { useEffect } from "react"

// 引入自定义hooks
// import { useDebounce } from "../../customHooks"


// interface dbUser{
   
// }

// interface SearchPanelProps {
//     Lists: [{
//         id: Number;
//         jobGrade: Number;
//         name: string
//     }];
//     setLists: (Lists:any) => void;   
//     dbUser: [{
//         id: Number;
//         jobGrade: Number;
//         personId: Number;
//     }];
// }


export const SearchPanel = (props) => {
    // 解构参数
    const {Lists,setLists,dbUser}=props

    // useEffect(()=>{
    //     // console.log(dbUser)
    // },[])

    return <form action=''>
       <div>
           {/* input 框添加value以及onChange事件 */}
           {/* 使用onChange事件因此需要useDebounce 进行防抖 */}
           <input type='text' placeholder="请输入需要选择的内容" onChange={(event)=>{
               console.log(event.target.value)
           }}></input>

           <select> 
           {/* 第一个option为默认值 */}
               <option value={''}>负责人</option>
               {
                   dbUser.map((item) => {
                      return  <option key={item.id}>{item.jobGrade}</option>
                   })
               }
           </select>
       </div>
        
    </form>
}