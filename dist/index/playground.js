function dchxform(boxid, title, button){
  var boxvar = document.createElement("form");
  boxvar.id = boxid
  boxvar.name = boxid
  boxvar.style = `z-index:100;min-height: 130px; transform: translateX(0px) translateY(-32px); opacity: 0.85; font-family: sans-serif; width: 153px; height: 137px; background: rgb(0, 0, 0); position: absolute; border-radius: 5px; display: grid; place-items: center; color: white; font-size: larger; top: 50%; left: 50%;`
 boxvar.innerHTML = `<h1 style=" font-size: 20px;"><center>${title}</center>
    <div class="line"></div>
    <p>  
    <input class=${boxid} type="text" name=${boxid} style="width:120px;text-align:center;background:#181717;border:0px;color:#fff;" placeholder=${boxid}><br>
    <input id="submitbtn" type="button" value=${button} name="Submit" style="margin-left:40px;background:#4c4c4c;border:0px;">  
</p>
<style>
input::placeholder {
color: white;
padding:0px
outline: none;
border: 0px;
}

.line {
    width: 124px;;
    height: 1px;;
    background: repeating-linear-gradient(90deg,red 0%, yellow 7.14%, rgb(0,255,0) 14.28%, rgb(0,255,255) 21.42%, cyan 28.56%, blue 35.7%, magenta 42.84%, red 50%);
   background-size:100vw 200vw; 
    -webkit-animation:'slide' 30s infinite linear forwards;
}@keyframes slide{
  0%{
    background-position-x: 0%;
  }
  100%{
    background-position-x: 600vw;
  }
}
</style>`
document.body.appendChild(boxvar);
}
