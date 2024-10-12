(()=>{function o(o){return o&&o.__esModule?o.default:o}function n(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common,window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native,window.enmity.modules.common.React,window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings;let e=window.enmity.modules.common.Users;window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;var t,m,i={};i=JSON.parse('{"name":"Message Logger","version":"3.5.15","build":"patch-1.0.14","description":"PLs work","authors":[{"name":"vet","id":"305188557843070977"}],"color":"#000000","sourceUrl":"https://raw.githubusercontent.com/vetoul/enmity/refs/heads/main/index.js"}');var s=function(){return(s=Object.assign||function(o){for(var n,e=1,t=arguments.length;e<t;e++)for(var m in n=arguments[e])Object.prototype.hasOwnProperty.call(n,m)&&(o[m]=n[m]);return o}).apply(this,arguments)},c=(t=/*@__PURE__*/o(i).name,window.enmity.patcher.create(t)),a={},r=function(o){var n;return null!==(n=a[o])&&void 0!==n?n:null},d=function(o,n){a[o]=n};m=s(s({},/*@__PURE__*/o(i)),{onStart:function(){var t;try{if(!(null===(t=e.getCurrentUser())||void 0===t?void 0:t.id)){console.error("[".concat(/*@__PURE__*/o(i).name,"] Error: Current user not initialized."));return}console.log("[".concat(/*@__PURE__*/o(i).name,"] Using in-memory storage."));var m=n("dispatch","subscribe");if(!m){console.error("[".concat(/*@__PURE__*/o(i).name,"] Error: FluxDispatcher not found."));return}c.before(m,"dispatch",function(e,t){var c=t[0];if("MESSAGE_DELETE"===c.type){console.log("[".concat(/*@__PURE__*/o(i).name,"] Intercepted MESSAGE_DELETE event:"),c);var a=n("getMessage","getMessages").getMessage(c.channelId,c.id);if(!a||!a.content)return;console.log("[".concat(/*@__PURE__*/o(i).name,"] Original message:"),a.content);var l=s(s({},a),{content:'<span style="color:red;">[Deleted] '.concat(a.content,"</span>")});m.dispatch({type:"MESSAGE_UPDATE",message:l}),console.log("[".concat(/*@__PURE__*/o(i).name,"] Updated message dispatched: ").concat(l.content));var u=r("NoDeleteLogs");u||(u=[]),u.push({author:a.author.username,content:a.content,timestamp:a.timestamp}),d("NoDeleteLogs",u)}}),console.log("[".concat(/*@__PURE__*/o(i).name,"] Plugin started successfully."))}catch(n){console.error("[".concat(/*@__PURE__*/o(i).name,"] Plugin Error: ").concat(n.message))}},onStop:function(){try{c.unpatchAll(),console.log("[".concat(/*@__PURE__*/o(i).name,"] Plugin stopped."))}catch(n){console.error("[".concat(/*@__PURE__*/o(i).name,"] Plugin Stop Error: ").concat(n.message))}}}),window.enmity.plugins.registerPlugin(m)})();
//# sourceMappingURL=index.js.map
