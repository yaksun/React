import React from 'react'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
import {NavLink} from 'react-router-dom'

import './index.less'
import  menuList  from '../../config/menuList'

export default class Sider extends React.Component {
    // submenu keys of first level
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };

    renderMenu=(data)=>{

        return data.map((m)=>{

            if(m.children){
                return   <SubMenu
                    key={m.key}
                    title={
                        <span>
                      <Icon type="mail" />
                      <span>{m.title}</span>
                    </span>
                    }
                >
                    {this.renderMenu(m.children)}

                </SubMenu>
            }else{
                return   <Menu.Item key={m.key}>
                    <NavLink to={m.key}>{m.title}</NavLink>
                </Menu.Item>
            }

        })
    }

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        return (
            <div className='lefter'>
                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    style={{ width: 256 }}
                    theme='dark'
                >
                    {this.renderMenu(menuList)}
                </Menu>
            </div>
        );
    }
}
