
let imgEl;
chrome.storage.local.get(r=>{
    if(r.img){applyBg(r.img); setOpacity(r.opacity)};
    if(r.hide_topbar){hideTopbar();};
    if(r.hide_ncallui){hideNewCallUI();};
})

let styleElement = document.head.appendChild(document.createElement("style"));

function qsl(s,cb) {
    let timer = setInterval(()=>{
        let element = document.querySelector(s);
        if (element) {
            console.log('find succefully '+s)
            clearInterval(timer);
            cb(element);
        }
        else {
            console.log('trying to find '+s)
        }
    }, 500);
}

function applyBg(img){
    if(img){
        if(imgEl == undefined){
            imgEl = document.body.appendChild(document.createElement('img'));
            imgEl.id = 'custom_bg';
        }
        imgEl.src = img;

    }
}
function setOpacity(value){
    imgEl.style.opacity = value;
}
function hideTopbar(){
    styleElement.textContent += `
    :root {--custom-app-top-bar-height: 0px !important;}
    div[class^="itemsContainer"] {padding-top:1rem;}
    div[class^="bar"] {visibility: hidden;}
    `;
    qsl('div[class^="itemsContainer"]', e=>{
        qsl('div[class^="trailing"]', e1=>{
            e.appendChild(e1);
            styleElement.textContent+=`div[class^="trailing"] {flex-direction:column;}`;
            qsl('div[class^="bar"]', e2=>{
                e2.remove();
                qsl('div[class^="base"]', e2=>{e2.setAttribute('data-fullscreen','true')});
            });
        });        
    });
}
function hideNewCallUI(){
    styleElement.textContent += `div[class^="gradientBackground"]{visibility: hidden;}`;
}
