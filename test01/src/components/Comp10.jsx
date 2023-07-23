import React, { useEffect, useState } from 'react'

const Comp10 = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [last, setLastPage] = useState(1);

    const callAPI = () => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            //console.log(json);
            let start=(page-1)*10 + 1;
            let end=page * 10;
            setLastPage(Math.ceil(json.length/10));
            setTodos(json.filter(post=>post.id>=start && post.id<=end));
            setLoading(false);
        })
    }

    useEffect(()=>{
        callAPI();
    }, [page]);

    if(loading) return <h1>로딩중입니다...</h1>
    return (
        <div>
            <h1>할일목록</h1>
            <table>
                <thead>
                    <tr>
                        <td>Completed</td>
                        <td>ID</td>
                        <td>Title</td>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo=>
                        <tr key={todo.id}>
                            <td><input type="checkbox" checked={todo.completed && true} readOnly={true}/></td>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div style={{margin:'10px'}}>
                <button onClick={()=>setPage(page-1)} disabled={page===1 && true}>이전</button>
                <span>{page} / {last}</span>
                <button onClick={()=>setPage(page+1)} disabled={page===last && true}>다음</button>
            </div>
        </div>
    )
}

export default Comp10