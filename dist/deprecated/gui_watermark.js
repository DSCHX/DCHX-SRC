var modName = configStorage.getItem("Name")
// Watermark
var UI = document.createElement("div");
UI.innerHTML = '<div id="watermark" style="z-index:10;opacity: 0.85; resize: both; overflow: auto; font-family: sans-serif;width: 210px;height: 40px;background: #101010;position: absolute;border-radius: 10px;display: grid;place-items: center;color: grey;font-size: larger; top: 552px; left: 514px; text-align: center;">	<h1 class="rainbow-text"><center>' + modName + '</center></h1><style>.rainbow-text {  background: repeating-linear-gradient(90deg,red 0%, yellow 7.14%, rgb(0,255,0) 14.28%, rgb(0,255,255) 21.42%, cyan 28.56%, blue 35.7%, magenta 42.84%, red 50%);  text-align: center;  background-size:80vw 600vw;;  -webkit-background-clip: text;  -webkit-text-fill-color: transparent;  font-size: 24px;  -webkit-animation:"slide" 40s infinite linear forwards;}@keyframes slide{  0%{    background-position-x: 0%;  }  100%{    background-position-x: 600vw;  }}</style> <head></head>'

dragElement(UI.firstElementChild);
document.body.appendChild(UI);
