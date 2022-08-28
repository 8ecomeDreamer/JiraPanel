export const  List = (props) => {
    const {Lists}=props

    return <table>
        <thead>
            <tr>
                <th>职责</th>
                <th>名称</th>
            </tr>
        </thead>
        <tbody>
            {
                Lists.map(item => {
                    return  (
                        <tr key={item.id}>
                            <td>{item.jobGrade}</td>
                            <td>{item.name}</td>
                        </tr>
                    )
                })
            }
        </tbody>
        
    </table>
}