import{L as t,b as n}from"./browser-polyfill-D19t-2ey.js";setTimeout(function(){document.dispatchEvent(new CustomEvent("steamAuthReady"))},2e3);document.addEventListener(t.RUNTIME,({detail:i})=>{new Audio(n.runtime.getURL("public/notification.mp3")).play();const e=document.createElement("div");e.innerHTML='<div style="display: flex; flex-direction: column;"><div style="font-weight: bold;">SteamAuth</div>Confirm this action in the extension!</div>',e.style=`
    position: fixed;
    top: 0px;
    right: 0px;
    background: white;
    border-color: gray;
    color: black;
    padding: 10px;
    z-index: 100000;
    border-radius: 5px;
    font-family: 'Calibri', arial, sans-serif;
    font-size: 13px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 10px;
    border: 1px solid gray;
    `,document.body.appendChild(e),setTimeout(()=>{e.remove()},3e3),n.runtime.sendMessage({eventDetails:i,listener:t.RUNTIME})});n.runtime.onMessage.addListener(({detail:i,listener:e})=>{e===t.CLIENT&&document.dispatchEvent(new CustomEvent(t.CLIENT,{detail:i}))});
