*{

    box-sizing:border-box;

    -webkit-user-select:none;

    user-select:none;

    -webkit-touch-callout:none;

}



html,body{


    width:100%;

    height:100%;

    margin:0;

    padding:0;


}



body{


    min-height:100vh;


    background:

    linear-gradient(
    135deg,
    #ffd6e0,
    #fff0f5
    );


    font-family:

    "Microsoft YaHei",
    sans-serif;


    display:flex;

    justify-content:center;

    align-items:center;


    overflow:hidden;


}





/* 页面主体 */

.page{


    display:none;


    width:88%;


    max-width:420px;


    min-height:65vh;


    padding:30px;


    background:white;


    border-radius:25px;


    text-align:center;


    box-shadow:

    0 10px 30px rgba(0,0,0,.12);


    position:relative;


    animation:

    fade .5s ease;


}




.page.active{


    display:flex;


    flex-direction:column;


    justify-content:center;


    align-items:center;


}





/* 图片 */

.photo{


    width:150px;


    height:150px;


    border-radius:50%;


    object-fit:cover;


    margin-bottom:20px;


}






/* 标题 */

h1{


    color:#ff6688;


    font-size:26px;


    margin:15px 0;


}





/* 正文 */

p{


    color:#555;


    font-size:17px;


    line-height:2;


}





/* 普通按钮 */


button{


    position:relative;


    z-index:5;


    margin:10px;


    padding:12px 25px;


    border:none;


    border-radius:30px;


    background:#ff8fab;


    color:white;


    font-size:16px;


    cursor:pointer;


    -webkit-tap-highlight-color:transparent;


}



button:active{


    transform:scale(.95);


}





/*
第四页按钮区域
*/

.button-area{


    width:100%;


    height:80px;


    position:relative;


    margin-top:20px;


}






/*
给彼此一个机会按钮

固定位置
最高层级
*/

#hao{


    width:280px;


    min-height:55px;


    padding:15px 20px;


    font-size:18px;


    white-space:nowrap;


    position:absolute;


    left:50%;


    top:5px;


    transform:translateX(-50%);


    background:#ff6688;


    z-index:20;


}







/*
再想想按钮

由JS控制位置

默认位置
*/

#buhao{


    width:120px;


    min-height:45px;


    padding:10px;


    font-size:16px;


    position:fixed;


    z-index:10;


    transition:

    left .25s ease,

    top .25s ease;


}







/* 弹窗 */


#popup{


    display:none;


    position:fixed;


    top:0;


    left:0;


    width:100%;


    height:100%;


    background:

    rgba(0,0,0,.35);


    z-index:999;


}





.popup-box{


    width:75%;


    max-width:350px;


    background:white;


    border-radius:25px;


    padding:30px;


    position:absolute;


    top:50%;


    left:50%;


    transform:

    translate(-50%,-50%);


    text-align:center;


}





.popup-box p{


    color:#ff6688;


    font-size:18px;


}





/* 页面切换动画 */


@keyframes fade{


    from{


        opacity:0;


        transform:

        translateX(40px);


    }



    to{


        opacity:1;


        transform:

        translateX(0);


    }


}






/* 手机适配 */


@media(max-width:600px){


    .page{


        width:88%;


        min-height:70vh;


        padding:25px;


    }





    .photo{


        width:130px;


        height:130px;


    }





    h1{


        font-size:23px;


    }





    p{


        font-size:16px;


        line-height:1.8;


    }





    #hao{


        width:85vw;


        max-width:300px;


        font-size:18px;


    }





    #buhao{


        width:110px;


        font-size:16px;


    }



}
