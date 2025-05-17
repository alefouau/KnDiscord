let btn_close = document.getElementById("btn_close"); 
let filepicker = document.getElementById("filepicker");
let btn_github = document.getElementById("btn_github");
let btn_reload = document.getElementById("btn_reload");
let cbx_hide_topbar = document.getElementById("cbx-hide-topbar");
let cbx_hide_ncallui = document.getElementById("cbx-hide-ncallui");
let range_opacity = document.getElementById("range-opacity");
let info_opacity = document.getElementById("info-opacity");

chrome.storage.local.get(r=>{
    if(r.hide_topbar){cbx_hide_topbar.checked = true};
    if(r.hide_ncallui){cbx_hide_ncallui.checked = true};
    if(r.opacity){info_opacity = r.opacity; range_opacity.value = r.opacity};
})
function exeScript(cb, arg){
    chrome.tabs.query({"url":"https://discord.com/*"}).then(tabs=>{
        for(tab of tabs){
            chrome.scripting.executeScript(
                {
                    target: {tabId: tab.id},
                    func: cb,
                    args: arg
                }
            );
        }
    });
}
btn_close.addEventListener("click", ()=>{close()});
btn_github.addEventListener("click", ()=>{chrome.tabs.create({active: true, url: "https://alefouau.github.io"})});
cbx_hide_topbar.addEventListener("change", (e)=>{chrome.storage.local.set({hide_topbar: e.target.checked});});
cbx_hide_ncallui.addEventListener("change", (e)=>{chrome.storage.local.set({hide_ncallui: e.target.checked});});
range_opacity.addEventListener("input", (e)=>{
    chrome.storage.local.set({opacity: e.target.value});
    exeScript(r=>setOpacity(r),[e.target.value]);
    info_opacity.innerText = e.target.value;
});

filepicker.addEventListener('change', (e)=>{
    var reader = new FileReader();
    reader.onloadend = ()=>{
        result = reader.result;
        chrome.storage.local.set({img: result});
        exeScript(r=>applyBg(r),[result]);
    };
    reader.readAsDataURL(e.target.files[0]); 
})

