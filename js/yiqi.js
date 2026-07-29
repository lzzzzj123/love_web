document.addEventListener(
"DOMContentLoaded",
function(){



// ======================
// 翻页功能
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
// 弹窗功能
// ======================


window.showPopup = function(text){


    document.getElementById("popup").style.display="block";


    document.getElementById("popup-text").innerHTML=text;


};





window.closePopup=function(){


    document.getElementById("popup").style.display="none";


};









// ======================
// 再想想按钮逻辑
// ======================


let count=0;



const noTexts=[


"我知道你可能还没有准备好。🥺<br><br>没关系，我理解。<br>只是想让你知道，我真的想认真和你重新开始。",



"其实我不是想让你忘记过去。<br><br>我只是希望未来的日子里，还有机会陪在你身边。",



"以前的我可能没有做好。<br><br>但我真的有在反思，也有在努力改变。<br>如果可以，让我用行动重新证明一次，好吗？",



"我不会逼你马上答应。<br><br>我只是想告诉你：<br>如果你愿意回头，我一直都在。"


];





let buhao=document.getElementById("buhao");





if(buhao){


    buhao.onclick=function(){



        count++;




        // 前四次按顺序显示

        if(count<=noTexts.length){



            showPopup(
            noTexts[count-1]
            );



        }

        else{



            // 后续随机显示


            let randomIndex=Math.floor(

            Math.random()*noTexts.length

            );



            showPopup(
            noTexts[randomIndex]
            );



            // 开始逃跑

            moveButton();



        }



    };


}









// ======================
// 按钮逃跑
// 避开“给我一次机会”按钮
// ======================


function moveButton(){



    let area=document.querySelector(".button-area");


    let hao=document.getElementById("hao");



    let areaRect=area.getBoundingClientRect();


    let haoRect=hao.getBoundingClientRect();



    let btnWidth=buhao.offsetWidth;


    let btnHeight=buhao.offsetHeight;



    let maxX=
    area.offsetWidth-btnWidth;



    let maxY=
    area.offsetHeight-btnHeight;



    let x;

    let y;

    let overlap=true;



    // 最多尝试50次寻找安全位置

    let times=0;



    while(overlap && times<50){


        x=Math.random()*maxX;


        y=Math.random()*maxY;




        let newRect={


            left:areaRect.left+x,

            right:areaRect.left+x+btnWidth,


            top:areaRect.top+y,

            bottom:areaRect.top+y+btnHeight


        };





        overlap=!(


            newRect.right < haoRect.left ||


            newRect.left > haoRect.right ||


            newRect.bottom < haoRect.top ||


            newRect.top > haoRect.bottom



        );



        times++;


    }




    buhao.style.left=x+"px";


    buhao.style.top=y+"px";



}









// ======================
// 给一次机会按钮
// ======================


let hao=document.getElementById("hao");





if(hao){


    hao.onclick=function(){



        showPopup(


        "谢谢你愿意再给我们一次机会 ❤️<br><br>"+

        "我们不是回到过去，<br>"+

        "而是重新开始。<br><br>"+

        "这一次，我会更加珍惜你。"



        );


    };


}





});
