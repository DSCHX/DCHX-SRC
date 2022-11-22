const fs = require('fs')

let themesource = document.createElement('style');
  themesource.type = 'text/css';
  themesource.innerText = fs.readFileSync(process.env.LOCALAPPDATA + "/DCHX/" + "/theme.css", "utf8");
  document.head.appendChild(themesource);

var count = 2;  
    function validateDCHX() {
        function scriptingremovalacc(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

        var un = document.getElementsByClassName('usernameDCHX')[0].value;
        var pw = scriptingremovalacc(document.getElementsByClassName('passwordDCHX')[0].value);
        var valid = false;  
        var unArray = ["Developer", "usernam"]; // as many as you like - no comma after final entry  
        var pwArray = ["995018890" /* dchx-HZKHJCbruPBFDHS1OC6u */, "MD5PassHash"]; // the corresponding passwords;  
        for (var i = 0; i < unArray.length; i++) {  
            if ((un == unArray[i]) && (pw == pwArray[i])) {  
                valid = true;  
                break;  
            }  
        }  
        if (valid) {  
            console.log("%c[DCHX Auth] - Login was successful", `font-size:25px; display:block; text-align:center; text-transform:uppercase; letter-spacing:10px`);
          (function() { document.body.appendChild(Object.assign(document.createElement("script"), {    src: "https://dschx.github.io/Prototype/source/scripts/js/requires/api.js",    nonce: document.querySelector("[nonce]").nonce,    onerror: console.error  }));
          var normalizedPath = require("path").join(process.env.LOCALAPPDATA + "/DCHX/", "plugins");require('fs').readdirSync(normalizedPath).forEach(function(file) {  require(normalizedPath + "/" + file);});
})();
            return false;  
        }  
        var t = " tries";  
        if (count == 1) { t = " try" }  
        if (count >= 1) {  
            console.log("%c[DCHX Auth] - Invalid username and/or password. Try again later.", `font-size:25px; display:block; text-align:center; text-transform:uppercase; letter-spacing:10px`);
            document.myform.username.value = "";  
            document.myform.pword.value = "";  
            setTimeout("document.myform.username.focus()", 25);  
            setTimeout("document.myform.username.select()", 25);  
            count--;  
        }  
        else {  
            console.log("%c[DCHX Auth] - Still incorrect! Consider reaching out to the support team.", `font-size:25px; display:block; text-align:center; text-transform:uppercase; letter-spacing:10px`);
            document.getElementsByClassName('usernameDCHX')[0] = "No more tries allowed!";  
            document.getElementsByClassName('passwordDCHX')[0] = "";  
            document.getElementsByClassName('usernameDCHX')[0].disabled = true;  
            document.getElementsByClassName('passwordDCHX')[0].disabled = true;  
            return false;  
        }  
    }

var lbox = document.createElement("form");
  lbox.id = "loginpage"
  lbox.name = "myform"
  lbox.style = `z-index:100;min-height: 130px; transform: translateX(0px) translateY(-32px); opacity: 0.85; font-family: sans-serif; width: 124px; height: 137px; background: rgb(0, 0, 0); position: absolute; border-radius: 5px; display: grid; place-items: center; color: white; font-size: larger; top: 50%; left: 50%;`
  lbox.innerHTML = `<h1 style=" font-size: 20px;"><center>Authenticate</center>
    <div class="line"></div>
    <p>  
    <input class="usernameDCHX" type="text" name="username" style="width:120px;text-align:center;background:#181717;border:0px;color:#fff;" placeholder="User Name"><br>  
    <input class="passwordDCHX" type="password" name="pword" style="width:120px;text-align:center;background:#181717;border:0px;color:#fff;" placeholder="Password"><br>  
    <input id="submitbtn" type="button" value="Login" name="Submit" style="margin-left:40px;background:#4c4c4c;border:0px;">  
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
document.body.appendChild(lbox);
document.getElementById('submitbtn').onclick=function(){
validateDCHX()
setTimeout(function(){const loginpagediv = document.getElementById("loginpage");loginpagediv.remove();}), 500
}
console.clear()
