import React from 'react'

const Student = (props) => {
    return (
        <div>
            <h2>학번:{props.stu.no}</h2>
            <h2>이름:{props.stu.name}</h2>
            <h2>학과:{props.stu.dept}</h2>
        </div>
    )
}

export default Student