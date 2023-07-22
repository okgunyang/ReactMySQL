import React from 'react'
import Student from './Student'

const Comp03 = () => {
    const students=[
        {no: '1', name:'홍길동', dept:'컴정과'},
        {no: '2', name:'심청이', dept:'전자과'},
        {no: '3', name:'김기태', dept:'통신과'}
    ]
    return (
        <div>
            <h1>배열 출력</h1>
            {students.map(s=>
                <Student stu={s} />
            )}
        </div>
    )
}

export default Comp03
