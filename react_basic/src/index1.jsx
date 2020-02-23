// console.log('hello')
import React from 'react'
import ReactDOM from 'react-dom'
// import Hello from './Hello'
// import Hello2 from './Hello2'

import First from '@/components/First'

const dog={
    name:'大黄',
    age:5
}

ReactDOM.render(<First {...dog}></First>,document.getElementById('div1'))