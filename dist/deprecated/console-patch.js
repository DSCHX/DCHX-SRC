let consolemessages = [];
let _log = console.log.__sentry_original__ ? console.log.__sentry_original__ : console.log 
let _warn = console.warn.__sentry_original__ ? console.warn.__sentry_original__ : console.warn
let _error = console.error.__sentry_original__ ? console.error.__sentry_original__ : console.error

console.log = function (...msg) {
    if(handleMessage({ type: "log", data: msg }))
        _log.apply(console, arguments)
}

console.warn = function (...msg) {
    if(handleMessage({ type: "warn", data: msg }))
        _warn.apply(console, arguments)
}

console.error = function (...msg) {
    if(handleMessage({ type: "error", data: msg }))
        _error.apply(console, arguments)
}

function handleMessage(args) {
    if(args.type == "log") {
        if(
            args.data.join("").includes("Hold Up!") || 
            args.data.join("").includes("If someone told you to copy/paste something here you have an 11/10 chance you're being scammed.") ||
            args.data.join("").includes("Pasting anything in here could give attackers access to your Discord account.") ||
            args.data.join("").includes("Unless you understand exactly what you are doing, close this window and stay safe.") ||
            args.data.join("").includes("If you do understand exactly what you are doing, you should come work with us")) {
            return false;
        }
    }
    if(args.data)
        consolemessages.push({ type: args.type || "log", data: args.data });
    return true;
}

function renderConsole() {
    let render = (css, data) => {
        let out = `<span style="${css}`;
        let i = 0;
        while(data.length > i) {
            if(data[i].startsWith("%c")) {
                out += `${data[i + 1]}">${data[i].replace("%c", "")}`
                i++
            } else {
                out += `">${data[i]}`
            }
            i++
        }
        out += `</span>`;
        return out;
    }
    let renderWarn = (warn) => render(`color: white;font-family: sans-serif;display: block;padding: 10px;border-top: 1px solid yellow;background: #595900;`, warn)
    let renderError = (error) => render(`color: white;font-family: sans-serif;display: block;padding: 10px;border-top: 1px solid red;background: #600000;`, error)
    let renderLog = (log) => render(`color: white;font-family: sans-serif;display: block;padding: 10px;border-top: 1px solid red;background: #600000;`, log)
    let out = `<div style="width: 300px;height: 500px;background: black;">`;
    for(let msg of consolemessages) {
        switch(msg.type) {
            case "log":
                out += renderLog(msg.data);
                break;
            case "error":
                out += renderError(msg.data)
                break;
            case "warn":
                out += renderWarn(msg.data)
                break;
            default:
                out += renderLog(msg.data);
                break;
        }
    }
    out += "</div>"
    return out
}
