import React from 'react'
import {Row,Col} from 'antd'

import Lefter from '../../components/lefter'
// import Footer from '../../components/footer'
// import Header from '../../components/header'
import Main from '../../pages/main'
import './index.less'

export default class Admin extends React.Component{
    render(){
        return(
            <Row>
                <Col span={4} >
                    <Lefter></Lefter>
                </Col>
                <Col span={20} className='container'>
                    {/* <Header></Header> */}
                    <Main>
                        {this.props.children}
                    </Main>
                    {/* <Footer></Footer> */}
                </Col>
            </Row>
        )
    }
}
