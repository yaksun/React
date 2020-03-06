import React, { Component } from 'react';
import ReactDataSheet from 'react-datasheet';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css';
import {Button}  from 'antd'


class DataSheet extends Component {
    constructor (props) {
      super(props)
      this.state = {
        grid: [
          [{value:  '姓名'}, {value:  '年龄'}],
          [{value:  2}, {value:  4}],
          [{value:  1}, {value:  5}]
        ]
      }
    }

    // 添加行操作
    addRow=()=>{
        const {grid} = this.state 
        let temp = [{value:''},{value:''}]
        grid.unshift(temp)
        this.setState({
            grid
        })
    }

    //添加列操作
    addCol = ()=>{
        const {grid} = this.state 
        let temp = [{value:'新列'},{value:''},{value:''}]

            // 返回的grid
         grid.map((item,index)=>{
               return item.push(temp[index])
            }
            
         )

        this.setState({
            grid
        })

    }

    render () {
      return (
            <div>
                <Button type="primary" onClick={this.addRow}>添加行</Button>
                <Button type="primary" onClick={this.addCol}>添加列</Button>
                  <ReactDataSheet
                    data={this.state.grid}
                    valueRenderer={(cell) => cell.value}
                    onCellsChanged={changes => {
                        const grid = this.state.grid.map(row => [...row])
                        changes.forEach(({cell, row, col, value}) => {
                        grid[row][col] = {...grid[row][col], value}
                        })
                        this.setState({grid})
                    }}
                />
            </div>
      )
    }
  }

  export default DataSheet