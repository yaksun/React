// 接收父组件的数据

import React from 'react'
import PropTypes from 'prop-types';

//function 接收数据固定语法
//  使用function构造的组件没有自己的私有属性 state
// function Third(props){
//     return  <ul>
//         <li>姓名:{props.name}</li>
//         <li>年龄:{props.age}</li>
//         <li>性别:{props.sex}</li>
//     </ul>
// }

class Third extends React.Component{
        render(){
            return <ul>
                 <li>姓名:{this.props.name}</li>
                 <li>年龄:{this.props.age}</li>
                 <li>性别:{this.props.sex}</li>
            </ul>
        }

}

// 当没有传该属性的时候，使用默认的
Third.defaultProps = {
    age:18,
    sex:'男'
}


// 配置属性的类型，和是否必须
Third.propTypes={
    
    age:PropTypes.number.isRequired
}

export default Third