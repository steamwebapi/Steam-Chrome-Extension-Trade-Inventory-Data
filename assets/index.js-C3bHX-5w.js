import{b as o,L as a}from"./browser-polyfill-D19t-2ey.js";import{W as i,u as r,p as d}from"./worker-ZVyQmZVq.js";const c=()=>{let e=o.action??o.browserAction;o.runtime.onMessage.addListener(t=>{t.event==="popupOpened"&&(i.init(),e.setBadgeText({text:""}))}),r.subscribe(t=>{t.open&&(e.setBadgeText({text:"1"}),e.setBadgeBackgroundColor({color:"#ef4444"}),e.setBadgeTextColor({color:"#fff"}))});const n=async({eventDetails:t,listener:s})=>{s===a.RUNTIME&&r.setState({open:!0,state:"pending",eventDetails:t})};o.runtime.onMessage.addListener(n)};o.runtime.onInstalled.addListener(async()=>{try{await d()}catch(e){console.log("Error on extension install",e)}});c();