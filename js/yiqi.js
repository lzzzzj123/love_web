document.addEventListener(
"DOMContentLoaded",
function(){



// ======================
// 页面翻页
// ======================


let pageIndex = 0;



window.nextPage = function(){


    let pages = document.querySelectorAll(".page");



    if(pageIndex < pages.length - 1){


        pages[pageIndex].classList.remove("active");



        pageIndex++;



        pages[pageIndex].classList.add("active");


    }


};








// ======================
// 弹窗
// ======================


window.showPopup = function(text){


    let popup =
    document.getElementById("popup");


    let popupText =
    document.getElementById("popup-text");



    popupText.innerHTML = text;


    popup.style.display="block";


};





window.closePopup=function(){


    document.getElementById("popup").style.display="none";


};









// ======================
// 再想想按钮逻辑
// ======================


let buhao =
document.getElementById("buhao");



let count = 0;



let texts=[


"我知道你可能还没有准备好。<br><br>但我真的想认真和你重新开始。",



"我不会逼你马上答应，只希望你知道，<br><br>我一直珍惜你。",



"过去的事情，我也一直在反思。<br><br>希望以后能够做得更好。",



"如果可以，让我用行动重新证明一次，好吗？"，


"能够和你在一起是最幸福的事情了。"


];





if(buhao){



    buhao.onclick=function(){



        count++;




        if(count <= texts.length){


            showPopup(
                texts[count-1]
            );



        }else{


            let random =
            Math.floor(
            Math.random()*texts.length
            );


            showPopup(
                texts[random]
            );



            moveButton();


        }



    };



}









// ======================
// 再想想按钮逃跑
// 避开 给彼此一个机会按钮
// ======================


function moveButton(){



    let hao =
    document.getElementById("hao");



    if(!hao || !buhao){

        return;

    }




    // 变为全屏定位

    buhao.style.position="fixed";



    let haoRect =
    hao.getBoundingClientRect();



    let btnWidth =
    buhao.offsetWidth;


    let btnHeight =
    buhao.offsetHeight;




    let screenWidth =
    window.innerWidth;


    let screenHeight =
    window.innerHeight;



    let x;

    let y;


    let safe=false;



    let attempt=0;





    while(!safe && attempt<100){



        x =
        Math.random()
        *
        (screenWidth-btnWidth);



        y =
        Math.random()
        *
        (screenHeight-btnHeight);





        let newRect={


            left:x,

            right:x+btnWidth,


            top:y,

            bottom:y+btnHeight


        };






        // 判断是否和好按钮重叠

        let overlap = !(


            newRect.right < haoRect.left ||


            newRect.left > haoRect.right ||


            newRect.bottom < haoRect.top ||


            newRect.top > haoRect.bottom



        );





        if(!overlap){


            safe=true;


        }



        attempt++;


    }






    buhao.style.left =
    x + "px";



    buhao.style.top =
    y + "px";



}









// ======================
// 给彼此一个机会按钮
// ======================


let hao =
document.getElementById("hao");



if(hao){



    hao.onclick=function(){


        showPopup(

        "谢谢你愿意再给我一次机会 ❤️<br>这一次，我会更加珍惜你。"

        );


    };



}



});
