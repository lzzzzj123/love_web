document.addEventListener(
"DOMContentLoaded",
function(){



// =================
// 翻页
// =================


let pageIndex=0;



window.nextPage=function(){


let pages=document.querySelectorAll(".page");



if(pageIndex < pages.length-1){


pages[pageIndex].classList.remove("active");


pageIndex++;


pages[pageIndex].classList.add("active");


}



};





// =================
// 弹窗
// =================


window.showPopup=function(text){


document.getElementById("popup").style.display="block";


document.getElementById("popup-text").innerHTML=text;


};



window.closePopup=function(){


document.getElementById("popup").style.display="none";


};






// =================
// 不好按钮
// =================


let count=0;



let texts=[


"我知道你可能还没有准备好。🥺<br><br>没关系，我理解。<br>只是想让你知道，我真的想认真和你重新开始。",



"其实我不是想让你忘记过去。<br><br>我只是希望未来的日子里，还有机会陪在你身边。",



"以前的我可能没有做好。<br><br>但我真的有在反思，也有在努力改变。<br>如果可以，让我用行动重新证明一次，好吗？",



"我不会逼你马上答应。<br><br>我只是想告诉你：<br>如果你愿意回头，我一直都在。"



];





let buhao=document.getElementById("buhao");




buhao.onclick=function(){


count++;



if(count<=texts.length){


showPopup(texts[count-1]);


}

else{


let random=Math.floor(

Math.random()*texts.length

);



showPopup(texts[random]);



moveButton();


}



};







// =================
// 按钮逃跑
// =================


function moveButton(){



let area=document.querySelector(".button-area");



let maxX=

area.clientWidth-buhao.offsetWidth;



let maxY=

area.clientHeight-buhao.offsetHeight;




let x=Math.random()*maxX;


let y=Math.random()*maxY;



buhao.style.position="absolute";


buhao.style.left=x+"px";


buhao.style.top=y+"px";



}







// =================
// 好按钮
// =================


document.getElementById("hao").onclick=function(){


showPopup(

"谢谢你愿意再给我们一次机会 ❤️<br><br>"+
"我们不是回到过去，<br>"+
"而是重新开始。<br><br>"+
"这一次，我会更加珍惜你。"

);


};



});
