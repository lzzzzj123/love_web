document.addEventListener(
"DOMContentLoaded",
function(){



// ======================
// 翻页功能
// ======================


let pageIndex = 0;



window.nextPage = function(){


    let pages=document.querySelectorAll(".page");



    if(pageIndex < pages.length-1){


        pages[pageIndex].classList.remove("active");


        pageIndex++;


        pages[pageIndex].classList.add("active");


    }


};







// ======================
// 弹窗功能
// ======================


window.showPopup=function(text){


    let popup=document.getElementById("popup");


    let popupText=document.getElementById("popup-text");



    popupText.innerHTML=text;


    popup.style.display="block";


};





window.closePopup=function(){


    document.getElementById("popup").style.display="none";


};









// ======================
// 再想想按钮
// ======================


let count=0;


let buhao=document.getElementById("buhao");



let texts=[


"我知道你可能还没有准备好。<br><br>没关系，我理解。",



"其实我只是希望你能够认真考虑一下。<br><br>不用急着回答。",



"过去的事情，我也一直在反思。<br><br>希望以后能够做得更好。",



"如果可以，希望我们能够重新开始。<br><br>我会认真面对。"


];





if(buhao){


    buhao.onclick=function(){


        count++;



        if(count<=texts.length){


            showPopup(
            texts[count-1]
            );


        }

        else{


            let index=Math.floor(

            Math.random()*texts.length

            );


            showPopup(
            texts[index]
            );



            moveButton();


        }



    };


}









// ======================
// 再想想按钮移动
// 避开 给彼此一个机会
// ======================


function moveButton(){


    let hao=document.getElementById("hao");



    if(!hao || !buhao){

        return;

    }




    let haoRect=
    hao.getBoundingClientRect();



    let btnWidth=
    buhao.offsetWidth;


    let btnHeight=
    buhao.offsetHeight;



    let screenWidth=
    window.innerWidth;


    let screenHeight=
    window.innerHeight;



    let x;

    let y;


    let safe=false;



    let times=0;



    while(!safe && times<100){



        x=Math.random()
        *
        (screenWidth-btnWidth);



        y=Math.random()
        *
        (screenHeight-btnHeight);





        let btnRect={


            left:x,

            right:x+btnWidth,


            top:y,

            bottom:y+btnHeight


        };






        // 判断两个按钮是否重叠

        let overlap=!(


            btnRect.right < haoRect.left ||


            btnRect.left > haoRect.right ||


            btnRect.bottom < haoRect.top ||


            btnRect.top > haoRect.bottom



        );




        if(!overlap){


            safe=true;


        }



        times++;


    }





    buhao.style.left=x+"px";


    buhao.style.top=y+"px";



}









// ======================
// 给彼此一个机会
// ======================


let hao=document.getElementById("hao");



if(hao){


    hao.onclick=function(){


        showPopup(

        "谢谢你的选择。<br><br>"

        );


    };


}



});
