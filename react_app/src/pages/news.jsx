import React, { Component } from 'react';

class news extends Component {
    state = {
        news:[
            "为众人抱薪者",
            "冻毙于风雪",
            "善哉，善哉"
        ]
    }
    render() {

        const {news} = this.state

        return (
            <div>
                <ul>
                    {
                       news.map((item,index) => <li key={index}>{item}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default news;