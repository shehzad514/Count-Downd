const timeH=document.querySelector('h1');
let timesec=80;

timeH.innerHTML=`00:${timesec}`;

const count=setInterval(()=>
{
    timesec--;
    displayTime(timesec);
    if(timesec<=0 || timesec<1)
    {
        clearInterval(count);
    }
},1000)

function displayTime(sec)
{
    const min = Math.floor(sec /60);
    const s=Math.floor(sec%60);
    timeH.innerHTML=`${min<10 ? '0': ''}${min}:${sec<10? '0':''}${sec}`;
}