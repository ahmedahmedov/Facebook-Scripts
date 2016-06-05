
var index = 0,
    total = 0,
    loopCounter = 0,
    maxLoop = 64;

function end() {
    index > 0 ? alert("Success! Deleted " + index + " posts.") : alert("No post found.")
}

function next() {
    index++, index >= total ? end() : deletePost(index)
}

function waitForConfirmButtonToDisappear() {
    var e = document.querySelector("form._s[action^='/ajax/timeline/delete'] button");
    e ? setTimeout(waitForConfirmButtonToDisappear, 1e3) : next()
}

function clickConfirmButton() {
    var e, t, o = document.querySelector("div._t div._4-i0 span");
    o && "This content is no longer available" === o.textContent ? (e = document.querySelector("div._t div._5a8u a"), e && (e.click(), setTimeout(function() {
        alert("Page out-of-sync. Please reload the page, re-initialize the script, and then run again.")
    }, 1e3))) : (loopCounter++, t = document.querySelector("form._s[action^='/ajax/timeline/delete'] button"), t ? (loopCounter = 0, t.click(), waitForConfirmButtonToDisappear()) : loopCounter >= maxLoop ? end() : setTimeout(function() {
        clickConfirmButton()
    }, 500))
}

function clickDeleteButton(e) {
    loopCounter++;
    var t = document.querySelectorAll("a._54nc[ajaxify^='/ajax/timeline/delete/confirm']");
    t && t[e] ? (loopCounter = 0, t[e].click(), setTimeout(clickConfirmButton, 500)) : loopCounter >= maxLoop ? end() : setTimeout(function() {
        clickDeleteButton(e)
    }, 500)
}

function deletePost(e) {
    loopCounter++;
    var t = document.querySelector("a._42ft[aria-label*='Allowed on Timeline'],a._42ft[aria-label*='Edit']");
    t ? (loopCounter = 0, t.click(), setTimeout(function() {
        clickDeleteButton(e)
    }, 500)) : loopCounter >= maxLoop ? end() : (2 >= loopCounter && window.scrollBy(0, 400), setTimeout(function() {
        deletePost(e)
    }, 500))
}

function deletePosts(e) {
    return total = e, deletePost(0), "Deleting..."
}
"Initialized."