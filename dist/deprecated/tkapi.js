//----------------------------------------------------------------Get Module

var webpackExports = webpackChunkdiscord_app.push([[Math.random()],{},(e) => e])

function getModule(filter, first = true) {
  let modules = []
  function byPropsAll(...props) {
    const norm = getModule(m => props.every((prop) => typeof m[prop] !== "undefined"), false)
    let def = []
    for (const module of getModule(m => props.every((prop) => typeof m.Z?.[prop] !== "undefined"), false)) 
      def.push(module.Z)
    return [...norm, ...def]
  }
  function byDisplayName(displayName) {
    const norm = getModule(m => m.Z?.displayName === displayName, false)
    const type = getModule(m => m.Z?.type?.displayName === displayName, false)
    const rend = getModule(m => m.Z?.type?.render?.displayName === displayName, false)
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

//---------------------------------------------------------------- Logger (Not a token logger)
class Logger {
    static _parseType(type) {
        switch (type) {
            case "info":
            case "warn":
            case "error":
                return type;
            default:
                return "log";
        }
    }

    static _log(type, module, ...nessage) {
        type = this._parseType(type);
        console[type](`%c[Client]%c %c[${module}]%c`, "color: #00FFFF; font-weight: 700;", "", "color: #396CB8", "", ...nessage);
    }

    static log(module, ...message) {this._log("log", module, ...message);}
    static info(module, ...message) {this._log("info", module, ...message);}
    static warn(module, ...message) {this._log("warn", module, ...message);}
    static error(module, ...message) {this._log("error", module, ...message);}
}


//---------------------------------------------------------------- Patcher

let Patch_Symbol = Symbol("patch")
let Quick_Symbol = Symbol("patch.quick")
let ALLpatches = {}

function patch(patchName, moduleToPatch, functionToPatch, callback, opts = {}) {
  let { method = "after", id } = opts
  let originalFunction = moduleToPatch[functionToPatch]
  if (!originalFunction) {
    moduleToPatch[functionToPatch] = () => {}
    originalFunction = moduleToPatch[functionToPatch]
  }
  method = method.toLowerCase()
  if (!(method === "before" || method === "after" || method === "instead")) throw new Error(`'${method}' is a invalid patch type`)
  let patches = moduleToPatch?.[functionToPatch]?.[Patch_Symbol]?.patches ?? { before: [], after: [], instead: [] }
  let CallbackSymbol = Symbol()
  let patchInfo = { unpatch, patchName: id ?? patchName, moduleToPatch, functionToPatch, callback, method, Symbol: CallbackSymbol }
  patches[method].unshift(Object.assign(callback, { unpatch, Symbol: CallbackSymbol }))
  let DidUnpatch = false
  function unpatch() {
    if (DidUnpatch) return
    DidUnpatch = true
    let found = patches[method].find(p => p.Symbol === patchInfo.Symbol)
    let index = patches[method].indexOf(found)
    patches[method].splice(index, 1)
    found = ALLpatches[patchName].find(p => p.Symbol === patchInfo.Symbol)
    index = ALLpatches[patchName].indexOf(found)
    ALLpatches[patchName].splice(index, 1)
    if (!ALLpatches[patchName].length) delete ALLpatches[patchName]
  }
  if (!moduleToPatch[functionToPatch][Patch_Symbol]) {
    moduleToPatch[functionToPatch] = function() {
      for (const patch of patches.before) patch([...arguments], this)
      let insteadFunction = originalFunction
      for (const patch of patches.instead) insteadFunction = patch([...arguments], insteadFunction, this)
      let res = insteadFunction.apply(this, [...arguments])
      for (const patch of patches.after) patch([...arguments], res, this)
      return res
    }
    moduleToPatch[functionToPatch][Patch_Symbol] = {
      original: originalFunction,
      module: moduleToPatch,
      function: functionToPatch,
      patches, unpatchAll: () => {
        for (const patch of patches.before) patch.unpatch()
        for (const patch of patches.instead) patch.unpatch()
        for (const patch of patches.after) patch.unpatch()
        moduleToPatch[functionToPatch] = originalFunction
      }
    }
    Object.assign(moduleToPatch[functionToPatch], originalFunction, {
      toString: () => originalFunction.toString()
    })
  }
  if (!ALLpatches[patchName]) ALLpatches[patchName] = [patchInfo]
  else ALLpatches[patchName].push(patchInfo)
  return unpatch
}

const Patcher = {
  patch: (patchName, moduleToPatch, functionToPatch, callback, opts) => patch(patchName, moduleToPatch, functionToPatch, callback, opts),
  before: (patchName, moduleToPatch, functionToPatch, callback, opts) => patch(patchName, moduleToPatch, functionToPatch, callback, {
    method: "before",
    ...opts
  }),
  instead: (patchName, moduleToPatch, functionToPatch, callback, opts) => patch(patchName, moduleToPatch, functionToPatch, callback, {
    method: "instead",
    ...opts
  }),
  after: (patchName, moduleToPatch, functionToPatch, callback, opts) => patch(patchName, moduleToPatch, functionToPatch, callback, {
    method: "after",
    ...opts
  }),
  unpatchAll: function(name) {
    if (!ALLpatches[name]) return
    for (let i = ALLpatches[name].length; i > 0; i--) ALLpatches[name][i - 1].unpatch()
  },
  quick: (moduleToPatch, functionToPatch, callback, opts) => patch(Quick_Symbol, moduleToPatch, functionToPatch, callback, opts),
  patches: ALLpatches
}

//---------------------------------------------------------------- Confirmation Modal

function showConfirmationModal(title, content, options = {}) {
var React = getModule(["createElement", "Component"])
var Markdown = getModule(m => m.Z?.displayName === "Markdown" && m.Z.rules).Z
var ModalFunctions = getModule(["openModalLazy"])
var ConfirmationModal = getModule("ConfirmModal").default
var Button = getModule(["ButtonColors"])
var { Messages } = getModule(m => m.Z?.Messages?.OKAY).Z
var emptyFunction = () => {}
var {onConfirm = emptyFunction, onCancel = emptyFunction, confirmText = Messages.OKAY, cancelText = Messages.CANCEL, danger = false, key = undefined} = options
if (!Array.isArray(content)) content = [content]
content = content.map(c => typeof(c) === "string" ? React.createElement(Markdown, null, c) : c)
return ModalFunctions.openModal(props => {
return React.createElement(ConfirmationModal, Object.assign({
header: title,
confirmButtonColor: danger ? Button.ButtonColors.RED : Button.ButtonColors.BRAND,
confirmText: confirmText,
cancelText: cancelText,
onConfirm: onConfirm,
onCancel: onCancel
}, props), content)
}, {modalKey: key})
}

//---------------------------------------------------------------- Helpful modules
/*
var Guild = getModule(["getGuild"])
var currentGuild = getModule(["getGuildId", "getLastSelectedGuildId"])
var Channel = getModule(["getChannel", "getDMFromUserId"])
var currentChannel = getModule(["getChannelId", "getLastSelectedChannelId"])
var Users = getModule(["getUser", "getCurrentUser"])
var Members = getModule(["getMember"])
*/
//---------------------------------------------------------------- Module List
let { getCurrentUser } = getModule(["getCurrentUser"])
let { getToken } = getModule(["getToken"])
let { getGuild } = getModule(["getGuild"])
let { getPrivateChannelsIds } = getModule(["getPrivateChannelIds"]) // get private channel id list
let sendMessage = getModule(["sendMessage"])
let { getChannelId } = getModule(["getChannelId", "getVoiceChannelId"]) //current Channel Id
let { getByName } = getModule(["getByName"])
let getSelfEmbeddedActivities = getModule(["getSelfEmbeddedActivities"])
let { getChannel } = getModule(["getChannel"])
let { getChannels } = getModule(["getChannels"]) 
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

//----------------------------------------------------------------Inject
console.clear()
Logger.log("Status","Modules Loaded!")
Logger.log("Status","Successfully injected!")
