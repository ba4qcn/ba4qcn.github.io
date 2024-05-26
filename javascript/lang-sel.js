function setLang(element, lang) {
    var showElements = element.querySelectorAll(`[lang="${lang}"]`);
    var hideElements = element.querySelectorAll(`[lang]:not([lang="${lang}"])`);
    showElements.forEach(function (ele) {
        ele.style = "";
    });
    hideElements.forEach(function (ele) {
        ele.style.display = "none";
    });
}
function initLangSel() {
    var langSelElements = document.getElementsByClassName("lang-sel");
    for (var i = 0; i < langSelElements.length; i++) {
        element = langSelElements[i];

        var selDiv = document.createElement("div");
        element.insertBefore(selDiv, element.firstChild);
        selDiv.className = "lang-sel-div";
        selDiv.id = `lang-sel-div-${i}`;

        var label = document.createElement("label");
        label.setAttribute("for", `ls-${i}`);
        label.textContent = "lang: ";
        selDiv.appendChild(label);

        var sel = document.createElement("select");
        sel.setAttribute("name", `ls-${i}`);
        sel.innerHTML = '<option value="cn" selected>中文</option><option value="en">EN</option>'
        selDiv.appendChild(sel);

        sel.addEventListener("change", (event) => {
            setLang(element, event.target.value);
        });
        setLang(element, "cn");
        element.classList.remove("lang-sel");
    }
}
document.addEventListener("DOMContentLoaded", initLangSel);
document.addEventListener("onload", initLangSel);
((initLangSel)());