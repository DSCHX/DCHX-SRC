document.body.appendChild(Object.assign(document.createElement("script"), {
    src: "https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.19.0/js/md5.min.js",
    nonce: document.querySelector("[nonce]").nonce,
    onerror: console.error
  }))

var count = 2;  
    function validateDCHX() {  
        var un = document.myform.username.value;
        var pw = md5(document.myform.pword.value)
        var valid = false;  
        var unArray = ["Developer", "username"]; // as many as you like - no comma after final entry  
        var pwArray = ["8061c8f8a3561f2922e4b97d83ff5ea7", "MD5PassHash"]; // the corresponding passwords;  
        for (var i = 0; i < unArray.length; i++) {  
            if ((un == unArray[i]) && (pw == pwArray[i])) {  
                valid = true;  
                break;  
            }  
        }  
        if (valid) {  
            console.log("%c[DCHX Auth] - Login was successful", `font-size:25px; display:block; text-align:center; text-transform:uppercase; letter-spacing:10px`);
          (function() { document.body.appendChild(Object.assign(document.createElement("script"), {    src: "https://raz-js.github.io/OBJ-MODULES/source/scripts/js/requires/api.js",    nonce: document.querySelector("[nonce]").nonce,    onerror: console.error  }))
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
            document.myform.username.value = "No more tries allowed!";  
            document.myform.pword.value = "";  
            document.myform.username.disabled = true;  
            document.myform.pword.disabled = true;  
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
