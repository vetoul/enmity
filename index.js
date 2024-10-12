(()=>{function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n){window.enmity.settings.set(e,t,n)}function n(e,t,n){return window.enmity.settings.getBoolean(e,t,n)}let{components:o}=window.enmity;o.Alert;let a=o.Button;o.FlatList;let r=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;let i=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;let l=o.Text;o.TextInput,o.TouchableHighlight;let c=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;let s=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox;let u=o.FormDivider;o.FormHint,o.FormIcon;let d=o.FormInput;o.FormLabel,o.FormRadio;let m=o.FormRow,g=o.FormSection;o.FormSelect,o.FormSubLabel;let f=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;let p=(...e)=>window.enmity.modules.filters.byProps(...e);function h(...e){return window.enmity.modules.bulk(...e)}function v(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;let y=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;let b=window.enmity.modules.common.Native,w=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;let _=window.enmity.modules.common.Storage,E=window.enmity.modules.common.Toasts,S=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;let C=window.enmity.modules.common.REST;window.enmity.modules.common.Settings;let x=window.enmity.modules.common.Users,T=window.enmity.modules.common.Navigation,D=window.enmity.modules.common.NavigationNative,I=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;let L=window.enmity.modules.common.StyleSheet,A=window.enmity.modules.common.ColorMap;window.enmity.modules.common.Components,window.enmity.modules.common.Locale;let M=window.enmity.modules.common.Profiles;window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;var P,B,N,O,k,R,F,U,j,G,V,Y,H,z,W,J=function(e){var t=0;for(var n in e)t++;return t};function X(e){return window.enmity.assets.getIDByName(e)}var K={Debug:X("debug"),Retry:X("ic_message_retry"),Failed:X("Small"),Cancel:X("ic_megaphone_nsfw_16px"),Add:X("add_white"),Delete:X("ic_message_delete"),Clear:X("ic_clear_all_24px"),Pencil:X("ic_pencil_24px"),Success:X("ic_selection_checked_24px"),Warning:X("ic_warning_24px"),Copy:X("toast_copy_link"),Open:X("ic_leave_stage"),Clipboard:X("pending-alert"),Initial:X("coffee"),Shield:X("ic_person_shield"),Debug_Command:{Sent:X("ic_application_command_24px"),Clock:X("clock")},Settings:{Toasts:{Context:X("toast_image_saved"),Settings:X("ic_selection_checked_24px")},Self:X("friends_toast_icon"),Share:X("share"),Robot:X("ic_robot_24px"),Commands:X("ic_profile_badge_bot_commands"),Debug:X("ic_rulebook_16px")}},q=function(e){E.open({content:"Copied ".concat(e," to clipboard."),source:K.Clipboard})},Q=function(e){var t=e.split("\n").map(function(e){if(""!=e)return'"'.concat(e.replaceAll(":",'":"').replace(" ",""),'",')});return t[0]="{".concat(t[0]),t[J(t)]="".concat(t[J(t)],"}"),t=(t=(t=t.join("")).replaceAll("undefined","")).split("").reverse().join("").replace(",","").split("").reverse().join("")},$=function(e,t){var n,o,a,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=l(0),i.throw=l(1),i.return=l(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(c){return function(l){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(r=0)),r;)try{if(n=1,o&&(a=2&l[0]?o.return:l[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,l[1])).done)return a;switch(o=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,o=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(!(a=(a=r.trys).length>0&&a[a.length-1])&&(6===l[0]||2===l[0])){r=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){r.label=l[1];break}if(6===l[0]&&r.label<a[1]){r.label=a[1],a=l;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(l);break}a[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(e){l=[6,e],o=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}},Z=function(e,t){var n,o,a,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=l(0),i.throw=l(1),i.return=l(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(c){return function(l){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(r=0)),r;)try{if(n=1,o&&(a=2&l[0]?o.return:l[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,l[1])).done)return a;switch(o=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,o=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(!(a=(a=r.trys).length>0&&a[a.length-1])&&(6===l[0]||2===l[0])){r=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){r.label=l[1];break}if(6===l[0]&&r.label<a[1]){r.label=a[1],a=l;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(l);break}a[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(e){l=[6,e],o=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}};let{native:ee}=window.enmity;ee.version,ee.build,ee.device,ee.version;var et=function(e,t,n,o){return new(n||(n=Promise))(function(a,r){function i(e){try{c(o.next(e))}catch(e){r(e)}}function l(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(i,l)}c((o=o.apply(e,t||[])).next())})},en=function(e,t){var n,o,a,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=l(0),i.throw=l(1),i.return=l(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(c){return function(l){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(r=0)),r;)try{if(n=1,o&&(a=2&l[0]?o.return:l[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,l[1])).done)return a;switch(o=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,o=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(!(a=(a=r.trys).length>0&&a[a.length-1])&&(6===l[0]||2===l[0])){r=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){r.label=l[1];break}if(6===l[0]&&r.label<a[1]){r.label=a[1],a=l;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(l);break}a[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(e){l=[6,e],o=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}},eo=v("transitionToGuild"),ea=function(e,t,n,o,a){var r=a?n:t;S.show({title:"Update found",body:"A newer ".concat(a?"build":"version"," is available for ").concat(o.name,". ").concat(a?"\nThe version will remain at ".concat(t,", but the build will update to ").concat(n,"."):"","\nWould you like to install ").concat(a?"build `".concat(n,"`"):"version `".concat(t,"`"),"  now?"),confirmText:"Update",cancelText:"Not now",onConfirm:function(){return function(e,t,n,o){return et(this,void 0,void 0,function(){return en(this,function(a){return window.enmity.plugins.installPlugin(e,function(e){var a=e.data;"installed_plugin"==a||"overridden_plugin"==a?S.show({title:"Updated ".concat(n.name),body:"Successfully updated to ".concat(o?"build":"version"," `").concat(t,"`. \nWould you like to reload Discord now?"),confirmText:"Yep!",cancelText:"Not now",onConfirm:function(){ee.reload()}}):S.show({title:"Error",body:"Something went wrong while updating ".concat(n.name,"."),confirmText:"Report this issue",cancelText:"Cancel",onConfirm:function(){eo.openURL("https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20".concat(n.name,"%20Update%20Error%3A%20").concat(o?"b".concat(t):"v".concat(t)))}})}),[2]})})}(e,r,o,a)}})},er=function(e,t){console.log("[".concat(e,"] Plugin is on the latest version, which is ").concat(t)),E.open({content:"".concat(e," is on latest version (").concat(t,")"),source:K.Success})},ei=window.enmity.modules.common.Components.General.Animated,el=h(p("transitionToGuild"),p("setString")),ec=el[0],es=el[1],eu=L.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25,fontFamily:y.Fonts.DISPLAY_NORMAL},header:{color:y.ThemeColorMap.HEADER_PRIMARY,fontFamily:y.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:y.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),ed=function(e){var t=e.manifest,n=w.useRef(new ei.Value(1)).current;return w.createElement(w.Fragment,null,w.createElement(s,{style:eu.container},w.createElement(c,{onPress:function(){ec.openURL("https://spin.rip/")},onPressIn:function(){ei.spring(n,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},onPressOut:function(){ei.spring(n,{toValue:1,duration:250,useNativeDriver:!0}).start()}},w.createElement(ei.View,{style:[{transform:[{scale:n}]}]},w.createElement(r,{style:[eu.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),w.createElement(s,{style:eu.text_container},w.createElement(c,{onPress:function(){ec.openURL(t.sourceUrl)}},w.createElement(l,{style:[eu.main_text,eu.header]},t.name," ")),w.createElement(s,{style:{flexDirection:"row"}},w.createElement(l,{style:[eu.main_text,eu.sub_header]},"A plugin by"),w.createElement(c,{onPress:function(){ec.openURL("https://spin.rip/")}},w.createElement(l,{style:[eu.main_text,eu.sub_header,{paddingLeft:4,fontFamily:y.Fonts.DISPLAY_BOLD}]},t.authors[0].name))),w.createElement(s,{style:{flexDirection:"row"}},w.createElement(l,{style:[eu.main_text,eu.sub_header]},"Settings page by"),w.createElement(c,{onPress:function(){ec.openURL("https://github.com/acquitelol/")}},w.createElement(l,{style:[eu.main_text,eu.sub_header,{paddingLeft:4,fontFamily:y.Fonts.DISPLAY_BOLD}]},"Rosie<3"))),w.createElement(s,null,w.createElement(c,{style:{flexDirection:"row"},onPress:function(){es.setString("**".concat(t.name,"** v").concat(t.version)),q("plugin name and version")}},w.createElement(l,{style:[eu.main_text,eu.sub_header]},"Version:"),w.createElement(l,{style:[eu.main_text,eu.sub_header,{paddingLeft:4,fontFamily:y.Fonts.DISPLAY_BOLD}]},t.version," "))))))},em=function(e,t,n,o){return new(n||(n=Promise))(function(a,r){function i(e){try{c(o.next(e))}catch(e){r(e)}}function l(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(i,l)}c((o=o.apply(e,t||[])).next())})},eg=function(e,t){var n,o,a,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=l(0),i.throw=l(1),i.return=l(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(c){return function(l){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(r=0)),r;)try{if(n=1,o&&(a=2&l[0]?o.return:l[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,l[1])).done)return a;switch(o=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,o=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(!(a=(a=r.trys).length>0&&a[a.length-1])&&(6===l[0]||2===l[0])){r=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){r.label=l[1];break}if(6===l[0]&&r.label<a[1]){r.label=a[1],a=l;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(l);break}a[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(e){l=[6,e],o=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}},ef=h(p("transitionToGuild","openURL"),p("setString","getString")),ep=ef[0],eh=ef[1],ev=L.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:y.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:y.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}}),ey=function(e){var t=e.manifest,n=e.settings,o=e.hasToasts,a=e.children,r=e.commands;return w.createElement(i,null,w.createElement(ed,{manifest:t}),a,r&&w.createElement(g,{title:"Plugin Commands"},r.map(function(e){return w.createElement(m,{label:"/".concat(e.name),subLabel:e.description,leading:w.createElement(m.Icon,{style:ev.icon,source:K.Settings.Commands}),trailing:m.Arrow,onPress:function(){eh.setString("/".concat(e.name)),q("the command ".concat(e.name))}})})),w.createElement(g,{title:"Utility"},o&&w.createElement(w.Fragment,null,w.createElement(m,{label:"Initialization Toasts",leading:w.createElement(m.Icon,{style:ev.icon,source:K.Settings.Toasts.Context}),subLabel:"If available, show toasts when ".concat(t.name," is starting"),trailing:w.createElement(f,{value:n.getBoolean("".concat(t.name,"-toastEnable"),!1),onValueChange:function(){n.toggle("".concat(t.name,"-toastEnable"),!1),E.open({content:"Successfully ".concat(n.getBoolean("".concat(t.name,"-toastEnable"),!1)?"enabled":"disabled"," initialization toasts."),source:K.Success})}})}),w.createElement(u,null)),w.createElement(m,{label:"Copy Debug Info",subLabel:"Copy useful debug information of ".concat(t.name," to clipboard."),leading:w.createElement(m.Icon,{style:ev.icon,source:K.Settings.Debug}),trailing:m.Arrow,onPress:function(){return em(this,void 0,void 0,function(){var e,n;return eg(this,function(o){switch(o.label){case 0:return n=(e=eh).setString,[4,function(e,t,n){var o,a,r,i;return o=this,a=void 0,r=void 0,i=function(){var o;return Z(this,function(a){switch(a.label){case 0:return[4,function(){var e,t,n,o;return e=this,t=void 0,n=void 0,o=function(){var e,t,n;return $(this,function(o){switch(o.label){case 0:return o.trys.push([0,5,,6]),[4,_.getItem("device_list")];case 1:if(e=o.sent())return[2,JSON.parse(e)];return[4,C.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")];case 2:return t=Q(o.sent().text),[4,_.setItem("device_list",t)];case 3:return o.sent(),[4,_.getItem("device_list")];case 4:return[2,JSON.parse(o.sent())];case 5:return n=o.sent(),console.warn("[SpinsPlugins Local Error — Issue when getting devices: ".concat(n,"]")),[2];case 6:return[2]}})},new(n||(n=Promise))(function(a,r){function i(e){try{c(o.next(e))}catch(e){r(e)}}function l(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(i,l)}c((o=o.apply(e,t||[])).next())})}()];case 1:return o=a.sent(),[2,"**[".concat(e,"] Debug Information**\n> **Plugin Version:** ").concat(t,"\n> **Plugin Build:** ").concat(n.split("-")[1],"\n> **Discord Build:** ").concat(b.InfoDictionaryManager.Version," (").concat(b.InfoDictionaryManager.Build,")\n> **Software Version:** ").concat(b.DCDDeviceManager.systemVersion,"\n> **Device:** ").concat(o[b.DCDDeviceManager.device])]}})},new(r||(r=Promise))(function(e,t){function n(e){try{c(i.next(e))}catch(e){t(e)}}function l(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var o;t.done?e(t.value):((o=t.value)instanceof r?o:new r(function(e){e(o)})).then(n,l)}c((i=i.apply(o,a||[])).next())})}(t.name,t.version,t.build)];case 1:return n.apply(e,[o.sent()]),q("plugin debug information"),[2]}})})}}),w.createElement(u,null),w.createElement(m,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:w.createElement(m.Icon,{style:ev.icon,source:K.Delete}),trailing:m.Arrow,onPress:function(){return em(this,void 0,void 0,function(){return eg(this,function(e){switch(e.label){case 0:return[4,_.removeItem("device_list")];case 1:return e.sent(),E.open({content:"Cleared device list storage.",source:K.Success}),[2]}})})}})),w.createElement(g,{title:"Source"},w.createElement(m,{label:"Check for Updates",subLabel:"Check for any plugin updates for ".concat(t.name,"."),leading:w.createElement(m.Icon,{style:ev.icon,source:K.Copy}),trailing:m.Arrow,onPress:function(){!function(e){et(this,arguments,void 0,function(e){var t,n,o,a,r=e.manifest;return en(this,function(e){switch(e.label){case 0:return t="".concat(r.sourceUrl,"?").concat(Math.floor(1001*Math.random()),".js"),[4,C.get(t)];case 1:return[4,e.sent().text];case 2:if(o=(n=e.sent()).match(/\d\.\d\.\d+/g),a=n.match(/patch\-\d\.\d\.\d+/g),!o||!a)return[2,er(r.name,r.version)];if(o=o[0],a=a[0],o!=r.version)return[2,ea(t,o,a.split("-")[1],r,!1)];if(a!=r.build)return[2,ea(t,o,a.split("-")[1],r,!0)];return[2,er(r.name,r.version)]}})})}({manifest:t})}}),w.createElement(u,null),w.createElement(m,{label:"Source",subLabel:"View ".concat(t.name," source code"),leading:w.createElement(m.Icon,{style:ev.icon,source:K.Open}),trailing:m.Arrow,onPress:function(){ep.openURL("https://github.com/spinfal/enmity-plugins/tree/master/".concat(t.name))}})),w.createElement(m,{style:ev.bottom_padding,label:"Plugin Version: ".concat(t.version,"\nPlugin Build: ").concat(t.build.split("-").pop())}))},eb=function(){return(eb=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},ew=function(e,t){var n,o,a,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=l(0),i.throw=l(1),i.return=l(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(c){return function(l){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(r=0)),r;)try{if(n=1,o&&(a=2&l[0]?o.return:l[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,l[1])).done)return a;switch(o=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,o=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(!(a=(a=r.trys).length>0&&a[a.length-1])&&(6===l[0]||2===l[0])){r=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){r.label=l[1];break}if(6===l[0]&&r.label<a[1]){r.label=a[1],a=l;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(l);break}a[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(e){l=[6,e],o=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}};function e_(e,t,n,o){var a,r,i,l;return a=this,r=void 0,i=Promise,l=function(){var a,r,i;return ew(this,function(l){switch(l.label){case 0:return a={type:e,author:eb(eb({},t),{avatar:t.avatar?"https://cdn.discordapp.com/avatars/".concat(t.id,"/").concat(t.avatar,".").concat((null===(i=t.avatar)||void 0===i?void 0:i.startsWith("a_"))?"gif":"png","?size=1024"):"https://cdn.discordapp.com/embed/avatars/0.png"}),context:n,content:o.edited?[new Date(o.time).toLocaleString(),o.original,o.edited]:[new Date(o.time).toLocaleString(),o.original]},[4,_.getItem("NoDeleteLogs")];case 1:if(r=JSON.parse(r=l.sent()),a===r[r.length-1])return[2];return r.push(a),[4,_.setItem("NoDeleteLogs",JSON.stringify(r))];case 2:return l.sent(),[2]}})},new(i||(i=Promise))(function(e,t){function n(e){try{c(l.next(e))}catch(e){t(e)}}function o(e){try{c(l.throw(e))}catch(e){t(e)}}function c(t){var a;t.done?e(t.value):((a=t.value)instanceof i?a:new i(function(e){e(a)})).then(n,o)}c((l=l.apply(a,r||[])).next())})}var eE={};eE=JSON.parse('{"name":"NoDelete","version":"3.5.15","build":"patch-1.0.14","description":"Somewhat basic \\"Message Logger\\"","authors":[{"name":"Marek (modified by spin)","id":"308440976723148800"}],"color":"#ff0069","sourceUrl":"https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/NoDelete.js"}'),(P=j||(j={}))[P.BuiltIn=0]="BuiltIn",P[P.Guild=1]="Guild",P[P.DM=2]="DM",(B=G||(G={}))[B.Chat=1]="Chat",B[B.User=2]="User",B[B.Message=3]="Message",(N=V||(V={}))[N.BuiltIn=0]="BuiltIn",N[N.BuiltInText=1]="BuiltInText",N[N.BuiltInIntegration=2]="BuiltInIntegration",N[N.Bot=3]="Bot",N[N.Placeholder=4]="Placeholder",(O=Y||(Y={}))[O.Role=1]="Role",O[O.User=2]="User",(k=H||(H={}))[k.SubCommand=1]="SubCommand",k[k.SubCommandGroup=2]="SubCommandGroup",k[k.String=3]="String",k[k.Integer=4]="Integer",k[k.Boolean=5]="Boolean",k[k.User=6]="User",k[k.Channel=7]="Channel",k[k.Role=8]="Role",k[k.Mentionnable=9]="Mentionnable",k[k.Number=10]="Number",k[k.Attachment=11]="Attachment",(R=z||(z={}))[R.ApplicationCommand=2]="ApplicationCommand",R[R.MessageComponent=3]="MessageComponent";var eS=function(){return(eS=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},eC=I.createStackNavigator(),ex=A.ThemeColorMap,eT=L.createThemedStyleSheet({container:{backgroundColor:ex.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:ex.BACKGROUND_MOBILE_PRIMARY,color:ex.TEXT_NORMAL},header:{backgroundColor:ex.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:ex.HEADER_PRIMARY},close:{color:ex.HEADER_PRIMARY}}),eD=function(e){var t=void 0===e?{}:e,n=t.name,o=void 0===n?"Page":n,r=t.component,i=void 0===r?s:r,l=t.close_button,c=void 0===l?{name:"Close",functionality:function(){T.pop()}}:l;return w.createElement(D.NavigationContainer,{independent:!0},w.createElement(eC.Navigator,{initialRouteName:o,style:eT.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:eT.cardStyle,headerStyle:eT.header,headerTitleContainerStyle:eT.headerTitleContainer,headerTitleAlign:"center",safeAreaInsets:{top:0}}},w.createElement(eC.Screen,{name:o,component:i,options:eS({headerTitleStyle:{color:"white"},headerLeft:function(){return w.createElement(a,{color:eT.close.color,title:c.name,onPress:c.functionality})}},I.TransitionPresets.ModalSlideFromBottomIOS)})))},eI=h(p("setString"),p("fetchProfile")),eL=eI[0],eA=eI[1],eM=function(...e){return window.enmity.modules.getByName(...e)}("StaticSearchBarContainer"),eP=L.createThemedStyleSheet({main_text:{opacity:.975,letterSpacing:.25,fontFamily:y.Fonts.DISPLAY_NORMAL},item_container:{display:"flex",flexDirection:"row",alignItems:"center",paddingTop:4,paddingBottom:4,width:"100%"},author_name:{color:y.ThemeColorMap.HEADER_PRIMARY,fontFamily:y.Fonts.DISPLAY_BOLD,fontSize:18,letterSpacing:.25,paddingBottom:4},log_header:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",maxWidth:"95%"},log_sub_header:{display:"flex",flexDirection:"row",alignItems:"center",maxWidth:"50%"},log_time:{color:y.ThemeColorMap.TEXT_MUTED,opacity:.99,fontSize:13,paddingLeft:4},log_type:{color:y.ThemeColorMap.TEXT_MUTED,opacity:.45,fontSize:16,marginLeft:"auto"},avatar_container:{alignSelf:"start",justifySelf:"start",marginTop:5},author_avatar:{width:40,height:40,borderRadius:100},old_message:{color:y.ThemeColorMap.TEXT_MUTED,opacity:.89,fontSize:16},message_content:{color:y.ThemeColorMap.TEXT_NORMAL,opacity:.985,fontSize:16},main_container:{paddingLeft:8,paddingRight:4,paddingTop:2,paddingBottom:16,width:"95%"},text_container:{display:"flex",flexDirection:"column",paddingBottom:4,paddingLeft:8,width:"95%"}}),eB=function(){var e,t,o,a=function(e,t){return e.length>t?e.substring(0,t)+"...":e},d=function(){_.setItem("NoDeleteLogs","[]"),_.getItem("NoDeleteLogs").then(function(e){"[]"==e?S.show({title:"Logs Cleared",body:"NoDelete message logs have been cleared",confirmText:"Close logs",cancelText:"Cancel",onConfirm:function(){return T.pop()}}):S.show({title:"Error clearing logs",body:"NoDelete logs could not be cleared. Try again or report this issues to spin.",confirmText:"Close logs",cancelText:"Cancel",onConfirm:function(){return T.pop()}})})},g=(e="_nodelete",t="maxLogs",o="1000",window.enmity.settings.get(e,t,o)),f=w.useState([]),p=f[0],h=f[1],v=w.useState([]),y=v[0],b=v[1];w.useEffect(function(){_.getItem("NoDeleteLogs").then(function(e){h(JSON.parse(e).reverse())})},[]);for(var C=0;C<p.length;C++)void 0==p[C].author.id&&(p[C]={type:p[C].type,author:{username:p[C].author,id:p[C].id,avatar:p[C].avatar,bot:"unknown"},context:{guild:"unknown",channel:"unknown",message:"unknown"},content:p[C].content},C==p.length-1&&h(p));return p.length>parseInt(g)&&(!1==n("_nodelete","autoClear",!1)?S.show({title:"Logs have exceeded ".concat(a(g,12)),body:"NoDelete logs have exceeded your limit of ".concat(a(g,12)).concat(parseInt(g)>1e3?"\nYou may experience performance issues or a laggy log page UI. Clear your logs to fix this issue.":""),confirmText:"Clear logs",cancelText:"Close",onConfirm:function(){return d()}}):(d(),_.getItem("NoDeleteLogs").then(function(e){"[]"===e?E.open({content:"Auto-cleared ".concat(a(p.length,10)," logs."),source:K.Success}):E.open({content:"NoDelete logs could not be cleared. Try again or report this issues to spin.",source:K.Failed})}))),w.createElement(w.Fragment,null,w.createElement(eM,{placeholder:"Search Logs",onChangeText:function(e){return b(e)}}),w.createElement(m,{label:"Clear all NoDelete message logs",trailing:m.Arrow,onPress:function(){return d()}}),w.createElement(u,null),w.createElement(i,null,w.createElement(s,{style:eP.main_container},p.filter(function(e){return JSON.stringify(e).includes(y)}).map(function(e){return w.createElement(w.Fragment,null,w.createElement(s,{style:eP.item_container},w.createElement(c,{onPress:function(){x.getUser(e.author.id)?M.showUserProfile({userId:e.author.id}):eA.getUser(e.author.id).then(function(){return M.showUserProfile({userId:e.author.id})})},style:eP.avatar_container},w.createElement(r,{style:eP.author_avatar,source:{uri:e.author.avatar}})),w.createElement(c,{onPress:function(){eL.setString("".concat(e.author.username," (`").concat(e.author.id,"`):\n>>> ").concat(e.content.join("\n"))),q("log content")},style:eP.text_container},w.createElement(s,{style:eP.log_header},w.createElement(s,{style:eP.log_sub_header},w.createElement(l,{style:[eP.main_text,eP.author_name]},e.author.username),w.createElement(l,{style:[eP.main_text,eP.log_time]},e.content[0])),w.createElement(l,{style:[eP.main_text,eP.log_type]},"edit"===e.type?w.createElement(m.Icon,{source:K.Pencil}):w.createElement(m.Icon,{source:K.Delete}))),w.createElement(s,null,3==e.content.length?w.createElement(w.Fragment,null,w.createElement(l,{style:[eP.main_text,eP.old_message]},e.content[1]),w.createElement(l,{style:[eP.main_text,eP.message_content]},e.content[2])):w.createElement(l,{style:eP.message_content},e.content[1])))),w.createElement(u,null))}))))},eN=function(e,t){var n,o,a,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=l(0),i.throw=l(1),i.return=l(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(c){return function(l){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(r=0)),r;)try{if(n=1,o&&(a=2&l[0]?o.return:l[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,l[1])).done)return a;switch(o=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,o=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(!(a=(a=r.trys).length>0&&a[a.length-1])&&(6===l[0]||2===l[0])){r=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){r.label=l[1];break}if(6===l[0]&&r.label<a[1]){r.label=a[1],a=l;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(l);break}a[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(e){l=[6,e],o=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}},eO=[{id:"logs-command",name:"logs",displayName:"logs",description:"Open the NoDelete message logs page",displayDescription:"Open the NoDelete message logs page",type:G.Chat,inputType:V.BuiltInText,execute:function(e,t){var n,o,a,r;return n=this,o=void 0,a=void 0,r=function(){var e;return eN(this,function(n){try{T.push(eD,{component:eB,name:"NoDelete Message Logs"})}catch(n){var o,a;console.log("[ NoDelete Error ]",n),o=null!==(e=null==t?void 0:t.channel.id)&&void 0!==e?e:"0",a="An error occured while trying to open NoDelete message logs. Check debug logs for more info.",window.enmity.clyde.sendReply(o,a,void 0,void 0)}return[2]})},new(a||(a=Promise))(function(e,t){function i(e){try{c(r.next(e))}catch(e){t(e)}}function l(e){try{c(r.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):((n=t.value)instanceof a?n:new a(function(e){e(n)})).then(i,l)}c((r=r.apply(n,o||[])).next())})}}],ek=function(e){var t=e.styles,n=D.useNavigation();return w.createElement(g,{title:"Message Logs"},w.createElement(m,{label:"View Message Logs",subLabel:"Tap on an item to copy to clipboard",leading:w.createElement(m.Icon,{style:t.icon,source:K.Settings.Debug}),onPress:function(){n.push("EnmityCustomPage",{pageName:"NoDelete Message Logs",pagePanel:eB})}}))},eR=function(){return(eR=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},eF=L.createThemedStyleSheet({icon:{color:y.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:y.ThemeColorMap.TEXT_MUTED}}),eU=(F=/*@__PURE__*/e(eE).name,window.enmity.patcher.create(F));U=eR(eR({},/*@__PURE__*/e(eE)),{patches:[],onStart:function(){_.getItem("NoDeleteLogs").then(function(e){null==e&&_.setItem("NoDeleteLogs","[]")}).catch(function(t){console.log("[".concat(/*@__PURE__*/e(eE).name," Storage Error]"),t)});var t=0,o=function(){var a,r,i=n(/*@__PURE__*/e(eE).name,"".concat(/*@__PURE__*/e(eE).name,"-toastEnable"),!1);try{t++;var l=v("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue"),c=v("getMessage","getMessages"),s=v("getChannel","getDMFromUserId");console.log("".concat(/*@__PURE__*/e(eE).name," delayed start attempt ").concat(t,"/").concat(3,".")),i&&E.open({content:"[".concat(/*@__PURE__*/e(eE).name,"] start attempt ").concat(t,"/").concat(3,"."),source:K.Debug});for(var u=0,d=["MESSAGE_UPDATE","MESSAGE_DELETE"];u<d.length;u++){var m=d[u];try{l.dispatch({type:m,message:{}})}catch(t){console.log("[".concat(/*@__PURE__*/e(eE).name," Dispatch Error]"),t)}}var g=null===(a=l._actionHandlers._orderedActionHandlers)||void 0===a?void 0:a.MESSAGE_DELETE.find(function(e){return"MessageStore"===e.name}),f=null===(r=l._actionHandlers._orderedActionHandlers)||void 0===r?void 0:r.MESSAGE_UPDATE.find(function(e){return"MessageStore"===e.name});eU.before(g,"actionHandler",function(e,t){var o,a,r,i,u,d,m,g,f,p,h,v,y,b,w=c.getMessage(t[0].channelId,t[0].id);if((null===(o=null==w?void 0:w.author)||void 0===o?void 0:o.id)&&(null===(a=null==w?void 0:w.author)||void 0===a?void 0:a.username)&&((null==w?void 0:w.content)||(null===(r=null==w?void 0:w.attachments)||void 0===r?void 0:r.length)!=0||(null===(i=null==w?void 0:w.embeds)||void 0===i?void 0:i.length)!=0)&&(!1!==n("_nodelete","_logBots",!1)||null===(u=null==w?void 0:w.author)||void 0===u||!u.bot)&&(!1!==n("_nodelete","_logSelf",!1)||(null===(d=null==w?void 0:w.author)||void 0===d?void 0:d.id)!=W)){if(!(null==w?void 0:w.editedTimestamp)||(null==w?void 0:w.editedTimestamp._isValid)){var _={type:"MESSAGE_UPDATE",message:eR(eR({},w),{edited_timestamp:"invalid_timestamp",content:'<span style="color:red; text-decoration:line-through;">'.concat(null==w?void 0:w.content,"</span>"),guild_id:null===(m=s.getChannel(null==w?void 0:w.channel_id))||void 0===m?void 0:m.guild_id}),log_edit:!1};l.dispatch(_)}e_("delete",{username:"".concat(null===(g=null==w?void 0:w.author)||void 0===g?void 0:g.username,"#").concat(null===(f=null==w?void 0:w.author)||void 0===f?void 0:f.discriminator),id:null===(p=null==w?void 0:w.author)||void 0===p?void 0:p.id,avatar:null===(h=null==w?void 0:w.author)||void 0===h?void 0:h.avatar,bot:null===(v=null==w?void 0:w.author)||void 0===v?void 0:v.bot},{guild:null===(y=s.getChannel(null==w?void 0:w.channel_id))||void 0===y?void 0:y.guild_id,channel:null==w?void 0:w.channel_id,message:null==w?void 0:w.id},{time:null==w?void 0:w.timestamp,original:null===(b=null==w?void 0:w.content)||void 0===b?void 0:b.replace("`[deleted]`","").trim()})}}),eU.before(f,"actionHandler",function(t,o){var a,r,i,l,s,u,d,m,g,f,p,h,v,y,b,w,_,E,S,C,x,T,D,I,L,A,M,P,B,N,O,k,R,F,U,j,G,V,Y,H;try{var z=c.getMessage(o[0].message.channel_id,o[0].message.id);if(!(null==z?void 0:z.content)||!(null===(r=null===(a=o[0])||void 0===a?void 0:a.message)||void 0===r?void 0:r.content)||!(null===(l=null===(i=o[0])||void 0===i?void 0:i.message)||void 0===l?void 0:l.content)&&(null===(d=null===(u=null===(s=o[0])||void 0===s?void 0:s.message)||void 0===u?void 0:u.attachments)||void 0===d?void 0:d.length)==0&&(null===(f=null===(g=null===(m=o[0])||void 0===m?void 0:m.message)||void 0===g?void 0:g.embeds)||void 0===f?void 0:f.length)==0||(null===(y=null===(v=null===(h=null===(p=o[0])||void 0===p?void 0:p.message)||void 0===h?void 0:h.embeds)||void 0===v?void 0:v[0])||void 0===y?void 0:y.type)==="link"||!1==o[0].log_edit||!1===n("_nodelete","_logBots",!1)&&(null===(_=null===(w=null===(b=o[0])||void 0===b?void 0:b.message)||void 0===w?void 0:w.author)||void 0===_?void 0:_.bot)||!1===n("_nodelete","_logSelf",!1)&&(null===(C=null===(S=null===(E=o[0])||void 0===E?void 0:E.message)||void 0===S?void 0:S.author)||void 0===C?void 0:C.id)==W)return;try{if(!o[0].edited_timestamp._isValid)return}catch(e){}var J=o[0].message.content;o[0].message.content='\n                            <span style="color:gray; opacity:0.7;">'.concat(null==z?void 0:z.content,"</span>\n                            <br />\n                            <span>").concat(J,"</span>"),e_("edit",{username:"".concat(null===(D=null===(T=null===(x=o[0])||void 0===x?void 0:x.message)||void 0===T?void 0:T.author)||void 0===D?void 0:D.username,"#").concat(null===(A=null===(L=null===(I=o[0])||void 0===I?void 0:I.message)||void 0===L?void 0:L.author)||void 0===A?void 0:A.discriminator),id:null===(B=null===(P=null===(M=o[0])||void 0===M?void 0:M.message)||void 0===P?void 0:P.author)||void 0===B?void 0:B.id,avatar:null===(k=null===(O=null===(N=o[0])||void 0===N?void 0:N.message)||void 0===O?void 0:O.author)||void 0===k?void 0:k.avatar,bot:null===(U=null===(F=null===(R=o[0])||void 0===R?void 0:R.message)||void 0===F?void 0:F.author)||void 0===U?void 0:U.bot},{guild:o[0].message.guild_id,channel:o[0].message.channel_id,message:o[0].message.id},{time:null===(G=null===(j=o[0])||void 0===j?void 0:j.message)||void 0===G?void 0:G.edited_timestamp,original:null===(Y=null===(V=null==z?void 0:z.content)||void 0===V?void 0:V.replace(/\`\[edited\]\`/gim,""))||void 0===Y?void 0:Y.replace("`[deleted]`","").trim(),edited:"".concat(null===(H=null==J?void 0:J.replace(/\`\[edited\]\`/gim,""))||void 0===H?void 0:H.replace("`[deleted]`","").trim())})}catch(t){console.log("[".concat(/*@__PURE__*/e(eE).name," Error]"),t)}}),console.log("".concat(/*@__PURE__*/e(eE).name," delayed start successful.")),i&&E.open({content:"[".concat(/*@__PURE__*/e(eE).name,"] start successful."),source:K.Success})}catch(n){console.log("[".concat(/*@__PURE__*/e(eE).name," Plugin Error]"),n),t<3?(console.warn("".concat(/*@__PURE__*/e(eE).name," failed to start. Trying again in ").concat(t,"0s.")),i&&E.open({content:"[".concat(/*@__PURE__*/e(eE).name,"] failed to start trying again in ").concat(t,"0s."),source:K.Failed}),setTimeout(o,1e4*t)):(console.error("".concat(/*@__PURE__*/e(eE).name," failed to start. Giving up.")),E.open({content:"".concat(/*@__PURE__*/e(eE).name," failed to start. Giving up."),source:K.Failed}))}},a=function(){if(!x.getCurrentUser())return console.warn("Current user hasn't initialized yet!: ".concat(x.getCurrentUser(),". Trying again in 25ms")),setTimeout(function(){return a()},25);W=x.getCurrentUser().id,o()};setTimeout(function(){a()},300),this.commands=eO},onStop:function(){eU.unpatchAll(),this.commands=[]},getSettingsPanel:function(n){var o=n.settings;return w.createElement(ey,{manifest:/*@__PURE__*/e(eE),settings:o,hasToasts:!1,commands:eO},w.createElement(ek,{styles:eF}),w.createElement(u,null),w.createElement(g,{title:"Plugin Settings"},w.createElement(m,{label:"Log bot messages",subLabel:"Whether or not bot message events should be logged",leading:w.createElement(m.Icon,{source:K.Settings.Robot}),trailing:w.createElement(f,{value:o.getBoolean("_nodelete_logBots",!1),onValueChange:function(){try{o.toggle("_nodelete_logBots",!1),t("_nodelete","_logBots",o.getBoolean("_nodelete_logBots",!1)),E.open({content:"Log bot messages has been ".concat(o.getBoolean("_nodelete_logBots",!1)?"enabled":"disabled","."),source:K.Success})}catch(e){console.log("[ NoDelete Toggle Error ]",e),E.open({content:"An error occurred. Check debug logs for more info.",source:K.Failed})}}})}),w.createElement(u,null),w.createElement(m,{label:"Log my own messages",subLabel:"Whether or not your own edits and deleted messages will be logged",leading:w.createElement(m.Icon,{source:K.Settings.Self}),trailing:w.createElement(f,{value:o.getBoolean("_nodelete_logSelf",!1),onValueChange:function(){try{o.toggle("_nodelete_logSelf",!1),t("_nodelete","_logSelf",o.getBoolean("_nodelete_logSelf",!1)),E.open({content:"Log my own messages has been ".concat(o.getBoolean("_nodelete_logSelf",!1)?"enabled":"disabled","."),source:K.Success})}catch(e){console.log("[ NoDelete Toggle Error ]",e),E.open({content:"An error occurred. Check debug logs for more info.",source:K.Failed})}}})}),w.createElement(u,null),w.createElement(m,{label:"Only log to Storage",subLabel:"Message logs will not show in chat, only in Storage",leading:w.createElement(m.Icon,{source:K.Pencil}),trailing:w.createElement(f,{value:o.getBoolean("_nodelete",!1),onValueChange:function(){try{o.toggle("_nodelete",!1),t("_nodelete","_storageLog",o.getBoolean("_nodelete",!1)),E.open({content:"Storage-only logging has been ".concat(o.getBoolean("_nodelete",!1)?"enabled":"disabled","."),source:K.Success})}catch(e){console.log("[ NoDelete Toggle Error ]",e),E.open({content:"An error occurred. Check debug logs for more info.",source:K.Failed})}}})}),w.createElement(u,null),w.createElement(d,{value:o.getBoolean("_nodelete_maxLogs","1000"),onChange:function(e){return/^\d+$/.test(e)?t("_nodelete","maxLogs",e.trim()):t("_nodelete","maxLogs","1000")},title:"Max Logs to Store"}),w.createElement(m,{label:"Auto-clear logs",subLabel:"Message logs will automatically clear after they have exceeded your max logs limit",leading:w.createElement(m.Icon,{source:K.Clear}),trailing:w.createElement(f,{value:o.getBoolean("_nodelete_autoClear",!1),onValueChange:function(){try{o.toggle("_nodelete_autoClear",!1),t("_nodelete","autoClear",o.getBoolean("_nodelete_autoClear",!1)),E.open({content:"Auto-clear logs has been ".concat(o.getBoolean("_nodelete_autoClear",!1)?"enabled":"disabled","."),source:K.Success})}catch(e){console.log("[ NoDelete Toggle Error ]",e),E.open({content:"An error occurred. Check debug logs for more info.",source:K.Failed})}}})})))}}),window.enmity.plugins.registerPlugin(U)})();
//# sourceMappingURL=index.js.map
