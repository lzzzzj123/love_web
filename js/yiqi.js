let count = 0;

const noTexts = [
    "我知道你可能还没有准备好，但我真的想认真和你重新开始。",

    "我不会否定过去，只希望未来还有机会陪在你身边。",

    "如果可以，让我用行动重新证明一次，好吗？",

    "我不会逼你马上答应，只希望你知道，我一直珍惜你。"
];


const buhao = document.getElementById("buhao");


// 点击“不好”
buhao.onclick = function(){

    count++;


    // 前4次按照顺序显示
    if(count <= noTexts.length){

        showPopup(noTexts[count-1]);

    }


    // 第5次以后随机显示
    else{

        let randomIndex = Math.floor(
            Math.random() * noTexts.length
        );


        showPopup(noTexts[randomIndex]);


        moveButton();

    }

};



// 按钮逃跑
function moveButton(){

    let maxX = window.innerWidth - buhao.offsetWidth - 20;
    let maxY = window.innerHeight - buhao.offsetHeight - 20;


    let x = Math.random() * maxX;
    let y = Math.random() * maxY;


    buhao.style.position = "fixed";

    buhao.style.left = x + "px";

    buhao.style.top = y + "px";

}
