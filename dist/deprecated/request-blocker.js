if (!XMLHttpRequest_setRequestHeader) {
    var XMLHttpRequest_setRequestHeader = XMLHttpRequest.prototype.setRequestHeader
}
XMLHttpRequest.prototype.setRequestHeader = function () {
    return arguments = null
    XMLHttpRequest_setRequestHeader.apply(this, arguments)
}
