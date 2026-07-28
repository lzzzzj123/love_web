let pageIndex=0;

function nextPage(){
let pages=document.querySelectorAll(".page");
pages[pageIndex].classList.remove("active");
pageIndex++;
pages[pageIndex].classList.add("active");
}

function showPopup(text){
document.getElementById("popup").style.display="block";
document.getElementById("popup-text").innerHTML=text;
}

function closePopup(){
document.getElementById("popup").style.display="none";
}

let count=0;

document.getElementById("buhao").onclick=function(){
count++;
let text=[
"我知道你可能还没有准备好，但我真的想认真和你重新开始。",
"我不会否定过去，只希望未来还有机会陪在你身边。",
"如果可以，让我用行动重新证明一次，好吗？",
"我不会逼你马上答应，只希望你知道，我一直珍惜你。"
];
showPopup(text[Math.min(count-1,3)]);
};

document.getElementById("hao").onclick=function(){
showPopup("谢谢你愿意再给我们一次机会 ❤️<br>这一次，我会更加珍惜你。");
};
