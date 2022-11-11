//apiLoader
      function loadApi() { document.body.appendChild(Object.assign(document.createElement("script"), {
    src: "https://scripts.media-server.repl.co/Api.js",
    nonce: document.querySelector("[nonce]").nonce,
    onerror: console.error
  }))
                         }
 
      function load_Placeholder_() { document.body.appendChild(Object.assign(document.createElement("script"), {
    src: "https://scripts.media-server.repl.co/newApi.js",
    nonce: document.querySelector("[nonce]").nonce,
    onerror: console.error
  }))
}
                                    
function loadUtils() {
  document.body.appendChild(Object.assign(document.createElement("script"), {
    src: "https://scripts.media-server.repl.co/Utilities.js",
    nonce: document.querySelector("[nonce]").nonce,
    onerror: console.error
  }))
}

loadApi();
loadUtils();
