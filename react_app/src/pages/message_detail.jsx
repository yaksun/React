import React from 'react'

const messages=[
    {id:1,title:"消息一",content:"消息一出,谁与争锋"},
    {id:2,title:"消息二",content:"二进宫可不是闹着玩的"},
    {id:5,title:"消息五",content:"五谷丰登,歌舞升平"}
]

export default function MessageDetail(props){
    const {id} = props.match.params

    let message = messages.find( (m)=> m.id === id*1 )

    return <ul>
        <li>ID:{message.id}</li>
        <li>标题:{message.title}</li>
        <li>内容:{message.content}</li>
    </ul>
    
}