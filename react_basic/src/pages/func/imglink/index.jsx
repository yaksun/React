import React from 'react'
import _ from 'lodash'


class ImgLink extends React.Component{
   state={
       txt:'![file](http://www.baid)()u.com()  [中【国】人民] [寒江孤影] 【江湖故人】<a href="http://www.baidu.com"></a> yuc...ou :https://127.89.12.12 ftp://127.0.0.1 ![file](http://127.89.12.12) www.baidu.com 127.879.555.555 www.ccc.ccc',
   }

  
   show=()=>{

    let {txt} = this.state

    const images = txt.match(/!\[file\]\(http(s)?:\/\/(.*?)\)((\r\n)|(\n))?/ig);

    const imgFileUrls = [];
    if (images) {
      _.forEach(images, (v, i) => {
        const imgurls = v.match(/http(s)?:\/\/([^\)]+)/ig);

        const pattern = new RegExp('^http[s]?:\/\/[^\/]+(.+)$');
        if (pattern.exec(imgurls[0])) {
          txt = txt.replace(v, '<div><img class="inline-img" id="inlineimg-'  + i + '" style="margin-bottom:5px; margin-right:10px;"  src="'+ imgurls+'"  /></div>');
          imgFileUrls.push(imgurls);
        }
      });
      txt = txt.replace(/<\/div>(\s*?)<div>/ig, '');

    
    }

    

    const  delimiter = /[^src="]((?:(https?|file|ftp):\/\/)(?:(?:[a-z0-9]?(?:[a-z0-9\-]{1,61}[a-z0-9])?\.[^\.|\s])+[a-z\.]*[a-z]+|(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3})(?::\d{1,5})*[a-z0-9.,_\/~#&=;%+?\-]*)/gi


    // const links = txt.match(/\[.*?\]\(.*?\)/ig);
    const links = txt.match(delimiter);

    if (links) {
      _.forEach(links, (v, i) => {
        const pattern = new RegExp('^\\[([^\\]]*)\\]\\(([^\\)]*)\\)$');
        pattern.exec(v);
        txt = txt.replace(v, '<a target=\'_blank\' href=\'' + RegExp.$1 + '\'>' + RegExp.$1 + '</a>');
      });
    }

    const strongs = txt.match(/(\[[^\[\]]+\] |\【[^\【\】]+\】)/g);

    console.log(strongs)
    if(strongs){
      _.forEach(strongs,(v,i) => {
        txt = txt.replace(v,'<strong>'+v+'</strong>') 
       })
    }
    
      console.log(txt)

   }


   componentDidMount(){
       this.show()
   }

    render(){
        return  <div>
           {this.state.txt}
        </div>
   
    }
}


export default  ImgLink