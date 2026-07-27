let count=0;
window.onload=function(){
 const hao=document.getElementById('hao');
 const buhao=document.getElementById('buhao');
 const music=document.getElementById('music');
 document.body.addEventListener('click',()=>{music.play().catch(()=>{})},{once:true});
 hao.onclick=function(){alert('❤❤❤ 终于同意了，我爱你 ❤❤❤');};
 buhao.onclick=function(){
  count++;
  if(count<=6){
   const msg=['能够遇见你','对我来说是最大的幸福!','有了你，我的生活变的无限宽广!','有了你，世界变得如此迷人!','你是世界，世界是你!','我愿意用自己的心，好好的陪着你，爱着你。'][count-1];
   alert(msg);
  }else{
   alert('只能选好哦 😜');
   buhao.style.position='fixed';
   buhao.style.left=Math.random()*70+10+'%';
   buhao.style.top=Math.random()*70+10+'%';
  }
 };
};
