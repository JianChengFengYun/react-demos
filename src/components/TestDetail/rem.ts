/* (function(doc, win) {
    let docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            let clientWidth = docEl.clientWidth
            if (!clientWidth) return
            if (clientWidth >= 750) {
                docEl.style.fontSize = '100px'
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
            }
        }
    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window) */
// 1rem=100px
function setRem() {

  let docEl = document.documentElement
  let recalc = function () {
    let clientWidth = docEl.clientWidth
    if (!clientWidth) return
    if (clientWidth >= 750) {
      docEl.style.fontSize = '100px'
    } else {
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
    }
  }
  recalc()
  // console.log(1111)
  if (!document.addEventListener) return
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  window.addEventListener(resizeEvt, recalc, false)
  document.addEventListener('DOMContentLoaded', recalc, false)
}
export default setRem
