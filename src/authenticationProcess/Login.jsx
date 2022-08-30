// 登陆页面


export const Login = ()=>{

    const handleSubmit = (event)=>{
        event.preventDefault()
        // console.log(event)
        // 获取节点
        const username=event.target[0].value
        const password=event.target[1].value
        // console.log(username,password)

    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">用户名</label>
            <input type="text" id="username"></input>
        </div>
        <div>
            <label htmlFor="password">密码</label>
            <input type="text" id="password"></input>
        </div>
        <button type="submit">登陆</button>
    </form>
}