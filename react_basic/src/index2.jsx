// console.log('hello')
import React from 'react'
import ReactDOM from 'react-dom'
// import Second from '@/components/Second'
import Third from '@/components/Third'
import bootcss from 'bootstrap/dist/css/bootstrap.css'

// ReactDOM.render(<Second />,document.getElementById('div1'))

const p1 = {
    name:'小明',
    age:18,
    sex:'男'
}


ReactDOM.render(<Third  {...p1}/>,document.getElementById('div1'))

const p2 = {
    name:'小龙',
    
}


ReactDOM.render(<Third  {...p2}/>,document.getElementById('div2'))
