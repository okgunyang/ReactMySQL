import React from 'react'
import Student from './Student'

const Comp02 = () => {
    const student1 = {
        no: '1', name:'홍길동', dept:'컴정과'
    }
    const student2 = {
        no: '2', name:'심청이', dept:'전자과'
    }
    const student3 = {
        no: '3', name:'김기태', dept:'통신과'
    }
    return (
        <div>
            <Student stu={student1}/>
            <hr/>
            <Student stu={student2}/>
            <hr/>
            <Student stu={student3}/>
        </div>
    )
}

export default Comp02