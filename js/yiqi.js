var Dianji=0;

function showPopup(text){
 document.getElementById('popup').style.display='block';
 document.getElementById('popup-text').innerHTML=text;
}

function closePopup(){
 document.getElementById('popup').style.display='none';
}

window.onload=function(){
 var buhao=document.getElementById('buhao');
 var hao=document.getElementById('hao');
 var music=document.getElementById('music');
 document.body.addEventListener('click',function(){
  if(music) music.play().catch(function(){});
 },{once:true});

 buhao.onclick=function(){
  Dianji++;
  if(Dianji==1) showPopup('能够遇见你 ❤️');
  else if(Dianji==2) showPopup('对我来说是最大的幸福! ❤️');
  else if(Dianji==3) showPopup('有了你，我的生活变的无限宽广! ❤️');
  else if(Dianji==4) showPopup('有了你，世界变得如此迷人! ❤️');
  else if(Dianji==5) showPopup('你是世界，世界是你! ❤️');
  else {
   showPopup('只能选好哦 😜');
   buhao.style.position='absolute';
   buhao.style.left=Math.random()*70+'%';
   buhao.style.top=Math.random()*70+'%';
  }
 };

 hao.onclick=function(){
  showPopup('❤❤❤ 终于同意了，我爱你 ❤❤❤');
 };
};
