
import images from "~/assets/images"
import LABEL_TYPE from "./LABEL_TYPE"
// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        id:4,
        icon:images.lang,
        text:'Ngôn Ngữ',
        type:LABEL_TYPE.LEVEL,  
        childrenLevel:{
            title:'Ngôn Ngữ',
            data:[
                {
                    code:'en',
                    text:'English',
                    childrenLevel:{
                        title:'Ngôn Ngữ2',
                        data:[
                            {
                                code:'en',
                                text:'English2',
                          
                            },
                            {
                                code:'vn',
                                text:'Vietnamese2',
                            },
                            {
                                code:'cn',
                                text:'China',
                            },
                            {
                                code:'edn',
                                text:'Endglish',
                            },
                            {
                                code:'ean',
                                text:'English',
                            },
                            {
                                code:'etn',
                                text:'English',
                            },
                        ]
                    } 
                    
                },
                {
                    code:'vn',
                    text:'Vietnamese',
                },
                {
                    code:'cn',
                    text:'China',
                },
                {
                    code:'edn',
                    text:'Endglish',
                },
                {
                    code:'ean',
                    text:'English',
                },
                {
                    code:'etn',
                    text:'English',
                },
            ]
        }     
    },
    {
        id:5,
        icon:images.help,
        text:'Phản hồi và trợ giúp',
        to:'/feedback',
        type:LABEL_TYPE.LINK,     
    },
    {
        id:6,
        icon:images.keyboard,
        text:'Phím tắt trên bàn phím',
        type: LABEL_TYPE.MODAL,
    },

]