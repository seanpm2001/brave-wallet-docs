"use strict";(self.webpackChunkbrave_wallet_docs=self.webpackChunkbrave_wallet_docs||[]).push([[111],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return w}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),w=a,f=d["".concat(s,".").concat(w)]||d[w]||p[w]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8864:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:3},s="Default Wallet setting",u={unversionedId:"default-wallet",id:"default-wallet",isDocsHomePage:!1,title:"Default Wallet setting",description:"Dapps work by communicating with a special object that Brave Wallet and extensions like MetaMask provide named window.ethereum.",source:"@site/docs/default-wallet.md",sourceDirName:".",slug:"/default-wallet",permalink:"/brave-wallet-docs/default-wallet",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/default-wallet.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/brave-wallet-docs/"},next:{title:"Overview",permalink:"/brave-wallet-docs/ethereum"}},c=[],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"default-wallet-setting"},"Default Wallet setting"),(0,o.kt)("p",null,"Dapps work by communicating with a special object that Brave Wallet and extensions like MetaMask provide named ",(0,o.kt)("inlineCode",{parentName:"p"},"window.ethereum"),".\nOnly one wallet can provide ",(0,o.kt)("inlineCode",{parentName:"p"},"window.ethereum")," to websites.\nIn Brave, we expose a setting in brave://settings/wallet to be able to change which wallet provides ",(0,o.kt)("inlineCode",{parentName:"p"},"window.ethereum"),"."),(0,o.kt)("p",null,"Here's a description of each setting:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Brave Wallet (Prefer extensions) - This is the default. Brave Wallet will expose ",(0,o.kt)("inlineCode",{parentName:"li"},"window.ethereum")," but allow other extensions such as MetaMask to overwrite it."),(0,o.kt)("li",{parentName:"ul"},"Brave Wallet - Exposes ",(0,o.kt)("inlineCode",{parentName:"li"},"window.ethereum")," and prevents sites and extensions from changing ",(0,o.kt)("inlineCode",{parentName:"li"},"window.ethereum"),"."),(0,o.kt)("li",{parentName:"ul"},"Crypto Wallets (Deprecated) - Gives access to the old deprecated wallet. This option is not compatible with other extensions such as MetaMask."),(0,o.kt)("li",{parentName:"ul"},"None - ",(0,o.kt)("inlineCode",{parentName:"li"},"window.ethereum")," will not be provided by Brave Wallet at all. If you have extensions such as MetaMask, is is free to use ",(0,o.kt)("inlineCode",{parentName:"li"},"window.ethereum"),".")),(0,o.kt)("p",null,"After changing the default wallet, it is best to restart your browser. Why?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you had Crypto Wallets loaded, it won't be unloaded until the next restart. When Crypto Wallets is loaded it will not work properly with other extensions trying to access ",(0,o.kt)("inlineCode",{parentName:"li"},"window.ethereum"),"."),(0,o.kt)("li",{parentName:"ul"},"Existing already opened tabs will not change to use the new wallet setting, you need a new tab or a browser restart.")))}d.isMDXComponent=!0}}]);