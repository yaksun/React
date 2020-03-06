import React from 'react'



class Autolink extends React.Component{
   state={
       text:'http://www.baidu.com()--> yuc...ou :https://127.89.12.12 ftp://127.0.0.1 file://127.89.12.12 www.baidu.com 127.879.555.555 www.ccc.ccc',
   }

  

    render(){
 
        const {text} = this.state
    const  delimiter = /((?:(https?|file|ftp):\/\/)(?:(?:[a-z0-9]?(?:[a-z0-9\-]{1,61}[a-z0-9])?\.[^\.|\s])+[a-z\.]*[a-z]+|(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3})(?::\d{1,5})*[a-z0-9.,_\/~#&=;%+?\-]*)/gi

        return (
         <div>
                  <h2>自动识别url,添加a标签</h2>
            <React.Fragment>
            { /* 按正则分割为数组，最终渲染时被显示在了一起 */}
            { /* 按正则分割为数组，最终渲染时被显示在了一起 */}
                {  text.split(delimiter).map(word => {
                    // foo bar baz
                    // http://example.org
                    //  bar
                    console.log(word);

                   
                    // 从以上分割的内容中找到具体的url的部分
                    // 进行超链接的处理
                    let match = word.match(delimiter);
                    if (match) {
                        let url = match[0];
                       
                        return (
                            <a href={ url.startsWith('http') ? url : `http://${url}` } key={ url } target='_blank'>{ url }</a>
                        );
                    }

                    if(word == 'http' || word == 'https' || word=='ftp' || word=='file'){
                        word = ''
                    }
                    
                             return word  ;
                     } ) 
                }
        </React.Fragment>

         </div>
        )
    }
}


export default  Autolink