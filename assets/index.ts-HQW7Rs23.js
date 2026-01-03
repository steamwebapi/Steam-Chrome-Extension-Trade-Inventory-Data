import{d as A,b as p}from"./utils-CtNtESjZ.js";const S=(n={})=>{const{partnerName:t=null,partnerLogo:m=null,message:i="Confirm this action in the extension!",backgroundColor:o="#18181b",fontColor:c="#ffffff",displayTime:r=null}=n,e=document.createElement("div");e.id="steamauth-notification",e.setAttribute("role","alert"),e.setAttribute("aria-live","assertive");const a=document.createElement("div");if(a.style.display="flex",a.style.flexDirection="column",a.style.alignItems="center",a.style.gap="8px",a.style.textAlign="center",m){const v=document.createElement("div");v.style.display="flex",v.style.justifyContent="center";const h=document.createElement("img");h.src=m,h.alt=t?`${t} Logo`:"Partner Logo",h.style.height="60px",h.style.width="60px",h.style.objectFit="contain",h.style.borderRadius="50%",v.appendChild(h),a.appendChild(v)}const u=document.createElement("div");u.style.fontWeight="600",u.style.fontSize="15px",u.textContent=t?`SteamAuth x ${t}`:"SteamAuth",a.appendChild(u);const s=document.createElement("div");s.style.fontSize="15px",s.style.opacity="0.9",s.textContent=i,a.appendChild(s),e.appendChild(a);const g=A(o);e.style.position="fixed",e.style.top="0px",e.style.right="0px",e.style.background=`linear-gradient(to bottom, ${o}, ${g})`,e.style.color=c,e.style.padding="16px",e.style.zIndex="100000",e.style.borderRadius="12px",e.style.fontFamily="'IBM Plex Sans', 'Arial', sans-serif",e.style.fontSize="13px",e.style.boxShadow="rgba(0, 0, 0, 0.3) 0px 8px 16px",e.style.margin="16px",e.style.border="1px solid rgba(255, 255, 255, 0.1)",e.style.backdropFilter="blur(10px)",e.style.maxWidth="280px",e.style.transition="opacity 0.3s ease-in-out",document.body.appendChild(e);const d=3e3,l=20,b=(t?.length||0)+(i?.length||30),k=r??Math.min(Math.max(d,b*l),6e3);return setTimeout(()=>{e.style.opacity="0",setTimeout(()=>e.remove(),300)},k),e},I={readyEvent:"steamAuthReady",readyAttr:"data-steamauth-ready",ackAttr:"data-steamauth-ack",retryAttr:"data-steamauth-retry",installationIdKey:"installationId",initialDelayMs:1e3,intervalMs:500,maxMs:15e3},L=async(n={})=>{try{const t={...I,...n},m=await p.storage.local.get([t.installationIdKey,"steamId"]),i=m[t.installationIdKey]??null,o=m.steamId??null;let c=null;const r=()=>{c&&(clearInterval(c),c=null)},e=()=>document.documentElement?.getAttribute(t.ackAttr)==="1",a=l=>{if(e()){r();return}document.documentElement?.setAttribute(t.readyAttr,"1"),document.dispatchEvent(new CustomEvent(t.readyEvent,{detail:{source:"steamauth-extension",installationId:i,steamId:o,attempt:l,timestamp:Date.now()}}))};let u=0;const s=()=>{r(),u=Date.now();let l=0;a(l),c=setInterval(()=>{if(l+=1,Date.now()-u>t.maxMs){r();return}a(l)},t.intervalMs)};let g=null;return(()=>{g||(g=new MutationObserver(l=>{for(const b of l)b.attributeName===t.ackAttr&&e()&&r(),b.attributeName===t.retryAttr&&document.documentElement?.getAttribute(t.retryAttr)&&(document.documentElement?.removeAttribute(t.ackAttr),document.documentElement?.removeAttribute(t.retryAttr),s())}),g.observe(document.documentElement,{attributes:!0,attributeFilter:[t.ackAttr,t.retryAttr]}))})(),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{setTimeout(s,t.initialDelayMs)}):setTimeout(s,t.initialDelayMs),window.addEventListener("pageshow",s),()=>{r(),g?.disconnect(),g=null,window.removeEventListener("pageshow",s)}}catch(t){console.error("Error initializing Steam Auth Ready Bridge:",t)}},E={CLIENT:"steamauth"},C=()=>{try{return p.runtime.getURL("steamauth-logo.webp")}catch{return""}},T=n=>`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Blocked - SteamAuth</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            background: #171a21;
            color: #94a3b8;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 2rem;
            line-height: 1.6;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            max-width: 600px;
        }
        .logo {
            height: 20px;
            width: auto;
            opacity: 0.15;
        }
        .icon {
            color: #e05a59;
            width: 64px;
            height: 64px;
            margin-top: 2rem;
        }
        .badge {
            display: inline-block;
            background: rgba(224, 90, 89, 0.15);
            border: 1px solid rgba(224, 90, 89, 0.3);
            color: #e05a59;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.7rem;
            font-weight: 600;
            margin-top: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .content {
            margin-top: 1.5rem;
        }
        h1 {
            font-size: 1.125rem;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 0.75rem;
        }
        p {
            font-size: 0.9375rem;
            color: #94a3b8;
        }
        .domain {
            color: #ffffff;
            font-weight: 600;
        }
        .btn-primary {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: #3b82f6;
            color: #ffffff;
            border: none;
            border-radius: 0.25rem;
            padding: 1.25rem 4rem;
            margin-top: 2rem;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            cursor: pointer;
            transition: background 0.15s ease;
        }
        .btn-primary:hover {
            background: #2563eb;
        }
        .footer-text {
            margin-top: 2rem;
            font-size: 0.75rem;
            color: #64748b;
        }
        .footer-text a {
            color: #94a3b8;
            text-decoration: none;
            transition: color 0.15s ease;
        }
        .footer-text a:hover {
            color: #e05a59;
        }
        .settings-link {
            display: inline-block;
            margin-top: 1.5rem;
            font-size: 0.7rem;
            color: #475569;
            text-decoration: none;
            transition: color 0.15s ease;
        }
        .settings-link:hover {
            color: #64748b;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="${n}" alt="SteamAuth" class="logo" />
        
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
            <path d="M12 8v4"></path>
            <path d="M12 16h.01"></path>
        </svg>

        <div class="badge" id="reason-badge"></div>

        <div class="content">
            <h1>Potential Phishing Site Detected</h1>
            <p>
                SteamAuth has blocked access to <span class="domain" id="blocked-domain"></span> because it may be impersonating a legitimate website and could trick you into revealing your Steam credentials, email, password, or Steam Web API key.
            </p>
        </div>

        <button id="btn-go-back" class="btn-primary">← Go Back to Safety</button>

        <p class="footer-text">
            If you understand the risks, <a href="#" id="btn-proceed">visit this unsafe site anyway</a>.
        </p>

        <a href="#" id="btn-settings" class="settings-link">Manage blocked sites</a>
    </div>
</body>
</html>
`;async function D(){if(sessionStorage.getItem("steamauth_ignore_scam_warning")!=="true")try{const t=(await p.storage.local.get("setting-store"))["setting-store"];if(t){let d;if(typeof t=="string"?d=JSON.parse(t):d=t,(d?.state??d??{}).steamAuthEnabled===!1)return}const i=(await p.storage.local.get("scam-sites-store"))["scam-sites-store"];if(!i)return;let o;typeof i=="string"?o=JSON.parse(i):o=i;const c=o?.state??o??{},r=c.isEnabled!==!1,e=c.sites||[];if(!r)return;const a=window.location.hostname.toLowerCase().trim(),u=d=>d.toLowerCase().trim().replace(/^www\./,""),s=u(a),g=e.find(d=>{if(!d.blocked)return!1;const l=u(d.host);return s===l||s.endsWith(`.${l}`)});g&&M(a,g.reason)}catch(n){console.error("[SteamAuth] Error checking scam site:",n)}}function M(n,t){window.stop();const m=C();document.open(),document.write(T(m)),document.close();const i=document.getElementById("blocked-domain");i&&(i.textContent=n);const o=document.getElementById("reason-badge");o&&t?o.textContent=t:o&&(o.style.display="none"),document.getElementById("btn-go-back")?.addEventListener("click",()=>{window.history.back(),setTimeout(()=>{window.location.href="https://google.com"},500)}),document.getElementById("btn-proceed")?.addEventListener("click",r=>{r.preventDefault(),confirm("Are you absolutely sure? This site is flagged as dangerous and may steal your Steam credentials.")&&(sessionStorage.setItem("steamauth_ignore_scam_warning","true"),window.location.reload())}),document.getElementById("btn-settings")?.addEventListener("click",r=>{r.preventDefault();const e=p.runtime.getURL("index.html?page=scam-sites");window.open(e,"_blank")});const c=new MutationObserver(()=>{document.getElementById("blocked-domain")||(c.disconnect(),window.location.href=p.runtime.getURL("blocked.html")+"?site="+encodeURIComponent(n))});document.body&&c.observe(document.body,{childList:!0,subtree:!0,characterData:!0})}D();const z=n=>n?String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#039;"):"",B=n=>{if(!n)return!1;try{const t=new URL(String(n));return["http:","https:"].includes(t.protocol)&&String(n).match(/\.(jpeg|jpg|gif|png|svg|webp)$/i)!==null}catch{return!1}};L();const N=25e3;let f=null,w=null;function y(){try{if(f)try{f.disconnect()}catch{}f=p.runtime.connect({name:"keep-alive"}),f.onDisconnect.addListener(()=>{f=null,setTimeout(y,1e3)}),w&&clearInterval(w),w=setInterval(()=>{if(f)try{f.postMessage({type:"ping"})}catch{y()}},N)}catch{setTimeout(y,5e3)}}y();document.addEventListener("visibilitychange",()=>{!document.hidden&&!f&&y()});const x=()=>{try{p.runtime.sendMessage({event:"tabPresence",hostname:window.location.hostname}).catch(()=>{})}catch{}};p.runtime.onMessage.addListener(n=>{const{detail:t,listener:m,event:i}=n||{};if(i==="checkTabPresence"){x();return}if(n?.type==="play-sound"&&n?.soundUrl){try{const o=new Audio(n.soundUrl);o.volume=.5,o.play().catch(()=>{})}catch{}return}m===E.CLIENT&&(t?.type==="error"&&S({partnerName:z(t.config?.partnerName)||null,partnerLogo:B(t.config?.partnerLogo)?t.config.partnerLogo:null,backgroundColor:t.config?.backgroundColor||"#18181b",message:"Confirm this action in the extension!"}),document.dispatchEvent(new CustomEvent(E.CLIENT,{detail:t})))});x();document.addEventListener("visibilitychange",()=>{document.hidden||x()});
