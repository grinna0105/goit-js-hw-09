!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body"),r=null;e.setAttribute("disabled",!0),t.addEventListener("click",(function(){r=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));o.style.backgroundColor=t,console.log(t)}),1e3),e.removeAttribute("disabled"),t.setAttribute("disabled",!0)})),e.addEventListener("click",(function(){clearInterval(r),e.setAttribute("disabled",!0),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.fd8de343.js.map