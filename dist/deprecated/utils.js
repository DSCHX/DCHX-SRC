function playSound(url) {
new Audio(url).play()
}

function reloadTab() {
window.location.reload()
}

const elements = {
  get textArea() { return document.querySelector(".channelTextArea-1FufC0.channelTextArea-1VQBuV") },
  get userArea() { return document.querySelector(".panels-3wFtMD") },
  get dmArea() { return document.querySelector(".sidebar-1tnWFu") },
  get memberArea() { return document.querySelector(".membersWrap-3NUR2t") },
  get appArea() { return document.querySelector(".appMount-2yBXZl") },
  get ServerArea() { return document.querySelector(".wrapper-1_HaEi guilds-2JjMmN") }
}

function copyText(text) {
navigator.clipboard.writeText(text)
}

function include(url) {
fetch(url).then((res) => res.text().then((t) => eval(t)))
}

//----------------------------------------------------------------Colored console.log
//colorLog(message, color)

function colorLog(message, color) {

    color = color || "black";

    switch (color) {
        case "success":  
             color = "Green"; 
             break;
        case "info":     
                color = "DodgerBlue";  
             break;
        case "error":   
             color = "Red";     
             break;
        case "warning":  
             color = "Orange";   
             break;
        default: 
             color = color;
    }

    console.log("%c" + message, "color:" + color);
}
//----------------------------------------------------------------Colored console.log
//Logger.log(Status, message)

function showConfirmationModal(title, content, options = {}) {
var React = getModule(["createElement", "Component"])
var Markdown = getModule(m => m.default?.displayName === "Markdown" && m.default.rules).default
var ModalFunctions = getModule(["openModalLazy"])
var ConfirmationModal = getModule("ConfirmModal").default
var Button = getModule(["ButtonColors"])
var { Messages } = getModule(m => m.default?.Messages?.OKAY).default
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

async function prompt(title, defaultValue = "") {
  const TextInput = getModule("TextInput").default
  const ConfirmationModal = getModule("ConfirmModal").default
  const Button = getModule(["ButtonColors"])
  const { Messages } = getModule(["Messages"], false)[1]
  const { openModal } = getModule(["openModal", "openModalLazy"])

  let toReturn = ""

  return new Promise((resolve) => {
    openModal(props => {
      if (props.transitionState === 3) resolve(null)
      return React.createElement(ConfirmationModal, Object.assign({
        header: title,
        confirmButtonColor: Button.ButtonColors.BRAND,
        confirmText: Messages.OKAY,
        cancelText: Messages.CANCEL,
        onConfirm: () => resolve(toReturn),
        onCancel: () => resolve(null),
        children: React.createElement(React.memo(() => {
          const [value, setValue] = React.useState(defaultValue)
          return React.createElement(TextInput, {
            value: value,
            onInput: ({ target }) => {
              setValue(target.value)
              toReturn = target.value
            }
          })
        }))
      }, props))
    })
  })
}
