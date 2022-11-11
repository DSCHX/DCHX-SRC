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

document.body.appendChild(Object.assign(document.createElement("script"), {
    src: "https://raz-js.github.io/OBJ-MODULES/source/scripts/js/requires/api.js",
    nonce: document.querySelector("[nonce]").nonce,
    onerror: console.error
  }))

//----------------------------------------------------------------Inject
console.clear()
Logger.log("Status","Modules Loaded!")
Logger.log("Status","Successfully injected!")
