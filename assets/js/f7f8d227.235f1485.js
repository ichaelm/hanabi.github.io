/*! For license information please see f7f8d227.235f1485.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[2825],{8173:function(e,t,r){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function a(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(t,{Z:function(){return a}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),o=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=o(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=o(r),h=a,p=d["".concat(s,".").concat(h)]||d[h]||m[h]||n;return r?i.createElement(p,l(l({ref:t},u),{},{components:r})):i.createElement(p,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<n;o++)l[o]=r[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/dual-color","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white","variant-specific/no-positive-clues"]},"convention-attribution"]}},1961:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var i=r(8173),a=r(7294),n=r(5774),l=r(6679),c=l.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],s=[];!function e(t,r){for(var a,n=(0,i.Z)(r);!(a=n()).done;){var l=a.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(s,c),"beginner"===s[0]&&s.shift();var o=s.length;function u(e){var t=e.id,r=s.findIndex((function(e){return"beginner/"+t===e}));if(-1===r)throw new Error("page id not found in sidebar");var i=Math.round((r+1)/o*100);return(0,a.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),a.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},a.createElement(n.Ip,{value:i,text:i+"%"}))}},9944:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return Ce},default:function(){return qe},frontMatter:function(){return Ne},metadata:function(){return Oe},toc:function(){return Se}});var i,a,n,l,c,s,o,u,m,d,h,p,g,f,b,y,v,x,w,E,k,N,C,O,S,P,q,B,j,_=r(2122),M=r(9756),A=r(7294),H=r(3905),I=r(1961),T=["title","titleId"];function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var W,D,G,z,Z,V,X,L,Q,U,$,J,K,Y,ee,te,re,ie,ae,ne,le,ce,se,oe,ue,me,de,he,pe,ge,fe,be,ye=function(e){var t=e.title,r=e.titleId,_=R(e,T);return A.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:265,viewBox:"0 0 944 265",width:944,className:"example","aria-labelledby":r},_),t?A.createElement("title",{id:r},t):null,i||(i=A.createElement("defs",null,A.createElement("filter",{x:0,y:0,width:1,height:1,id:"left-most-focus_yml__a"},A.createElement("feFlood",{floodColor:"#0ff"})),A.createElement("filter",{id:"left-most-focus_yml__b"},A.createElement("feOffset",{in:"SourceAlpha",dx:2,dy:2,result:"offsetblur"}),A.createElement("feComponentTransfer",{result:"shadow"},A.createElement("feFuncA",{type:"linear",slope:.5})),A.createElement("feMorphology",{in:"SourceAlpha",operator:"dilate",radius:1,result:"border"}),A.createElement("feMerge",null,A.createElement("feMergeNode",{in:"shadow"}),A.createElement("feMergeNode",{in:"border"}),A.createElement("feMergeNode",{in:"SourceGraphic"}))))),a||(a=A.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red0.svg"})),n||(n=A.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),l||(l=A.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green0.svg"})),c||(c=A.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue0.svg"})),s||(s=A.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple0.svg"})),A.createElement("svg",F({height:100,width:90,x:464,className:"example","aria-labelledby":r},_),t?A.createElement("title",{id:r},t):null,o||(o=A.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),u||(u=A.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#left-most-focus_yml__a)",x:"0%",y:"50%"},"Clue Giver")),m||(m=A.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),A.createElement("svg",F({height:100,width:70,x:554,className:"example","aria-labelledby":r},_),t?A.createElement("title",{id:r},t):null,d||(d=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",F({height:100,width:70,x:632,className:"example","aria-labelledby":r},_),t?A.createElement("title",{id:r},t):null,h||(h=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",F({height:100,width:70,x:710,className:"example","aria-labelledby":r},_),t?A.createElement("title",{id:r},t):null,p||(p=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",F({height:100,width:70,x:788,className:"example","aria-labelledby":r},_),t?A.createElement("title",{id:r},t):null,g||(g=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",F({height:100,width:70,x:866,className:"example","aria-labelledby":r},_),t?A.createElement("title",{id:r},t):null,f||(f=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",F({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":r},_),t?A.createElement("title",{id:r},t):null,b||(b=A.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),A.createElement("svg",F({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":r},_),t?A.createElement("title",{id:r},t):null,y||(y=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),v||(v=A.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:629,y:122})),A.createElement("svg",F({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":r},_),t?A.createElement("title",{id:r},t):null,x||(x=A.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red.svg"}))),w||(w=A.createElement("image",{height:70,width:50,x:642,xlinkHref:"/img/pieces/arrow.svg",y:85})),E||(E=A.createElement("circle",{cx:667,cy:110,fill:"red",r:15,stroke:"#000",strokeWidth:2})),A.createElement("svg",F({height:20,width:64,x:635,y:230,className:"example","aria-labelledby":r},_),t?A.createElement("title",{id:r},t):null,k||(k=A.createElement("path",{fill:"gold",stroke:"#000",d:"M0 0h64v20H0z"})),A.createElement("svg",F({height:20,width:64,className:"example","aria-labelledby":r},_),t?A.createElement("title",{id:r},t):null,N||(N=A.createElement("text",{dominantBaseline:"central",textAnchor:"middle",x:"50%",y:"50%"},"Focus")))),A.createElement("svg",F({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":r},_),t?A.createElement("title",{id:r},t):null,C||(C=A.createElement("text",{dominantBaseline:"central",fill:"#fff",stroke:"#fff",textAnchor:"middle",x:"50%",y:"50%",fontSize:"1.5em",filter:"url(#left-most-focus_yml__b)"},"(1)"))),A.createElement("svg",F({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":r},_),t?A.createElement("title",{id:r},t):null,O||(O=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S||(S=A.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:122})),A.createElement("svg",F({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":r},_),t?A.createElement("title",{id:r},t):null,P||(P=A.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red.svg"}))),q||(q=A.createElement("image",{height:70,width:50,x:798,xlinkHref:"/img/pieces/arrow.svg",y:85})),B||(B=A.createElement("circle",{cx:823,cy:110,fill:"red",r:15,stroke:"#000",strokeWidth:2})),A.createElement("svg",F({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":r},_),t?A.createElement("title",{id:r},t):null,j||(j=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))))},ve=["title","titleId"];function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}function we(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var Ee=function(e){var t=e.title,r=e.titleId,i=we(e,ve);return A.createElement("svg",xe({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:265,viewBox:"0 0 944 265",width:944,className:"example","aria-labelledby":r},i),t?A.createElement("title",{id:r},t):null,W||(W=A.createElement("defs",null,A.createElement("filter",{x:0,y:0,width:1,height:1,id:"chop-focus_yml__a"},A.createElement("feFlood",{floodColor:"#0ff"})),A.createElement("filter",{id:"chop-focus_yml__b"},A.createElement("feOffset",{in:"SourceAlpha",dx:2,dy:2,result:"offsetblur"}),A.createElement("feComponentTransfer",{result:"shadow"},A.createElement("feFuncA",{type:"linear",slope:.5})),A.createElement("feMorphology",{in:"SourceAlpha",operator:"dilate",radius:1,result:"border"}),A.createElement("feMerge",null,A.createElement("feMergeNode",{in:"shadow"}),A.createElement("feMergeNode",{in:"border"}),A.createElement("feMergeNode",{in:"SourceGraphic"}))))),D||(D=A.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red0.svg"})),G||(G=A.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow0.svg"})),z||(z=A.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green0.svg"})),Z||(Z=A.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue0.svg"})),V||(V=A.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple0.svg"})),A.createElement("svg",xe({height:100,width:90,x:464,className:"example","aria-labelledby":r},i),t?A.createElement("title",{id:r},t):null,X||(X=A.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),L||(L=A.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#chop-focus_yml__a)",x:"0%",y:"50%"},"Clue Giver")),Q||(Q=A.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),A.createElement("svg",xe({height:100,width:70,x:554,className:"example","aria-labelledby":r},i),t?A.createElement("title",{id:r},t):null,U||(U=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",xe({height:100,width:70,x:632,className:"example","aria-labelledby":r},i),t?A.createElement("title",{id:r},t):null,$||($=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",xe({height:100,width:70,x:710,className:"example","aria-labelledby":r},i),t?A.createElement("title",{id:r},t):null,J||(J=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",xe({height:100,width:70,x:788,className:"example","aria-labelledby":r},i),t?A.createElement("title",{id:r},t):null,K||(K=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",xe({height:100,width:70,x:866,className:"example","aria-labelledby":r},i),t?A.createElement("title",{id:r},t):null,Y||(Y=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",xe({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":r},i),t?A.createElement("title",{id:r},t):null,ee||(ee=A.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),te||(te=A.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:551,y:122})),A.createElement("svg",xe({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":r},i),t?A.createElement("title",{id:r},t):null,re||(re=A.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red.svg"}))),ie||(ie=A.createElement("image",{height:70,width:50,x:564,xlinkHref:"/img/pieces/arrow.svg",y:85})),ae||(ae=A.createElement("circle",{cx:589,cy:110,fill:"red",r:15,stroke:"#000",strokeWidth:2})),ne||(ne=A.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:629,y:122})),A.createElement("svg",xe({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":r},i),t?A.createElement("title",{id:r},t):null,le||(le=A.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red.svg"}))),ce||(ce=A.createElement("image",{height:70,width:50,x:642,xlinkHref:"/img/pieces/arrow.svg",y:85})),se||(se=A.createElement("circle",{cx:667,cy:110,fill:"red",r:15,stroke:"#000",strokeWidth:2})),A.createElement("svg",xe({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":r},i),t?A.createElement("title",{id:r},t):null,oe||(oe=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),A.createElement("svg",xe({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":r},i),t?A.createElement("title",{id:r},t):null,ue||(ue=A.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),me||(me=A.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:122})),A.createElement("svg",xe({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":r},i),t?A.createElement("title",{id:r},t):null,de||(de=A.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red.svg"}))),he||(he=A.createElement("image",{height:70,width:50,x:876,xlinkHref:"/img/pieces/arrow.svg",y:85})),pe||(pe=A.createElement("circle",{cx:901,cy:110,fill:"red",r:15,stroke:"#000",strokeWidth:2})),A.createElement("svg",xe({height:20,width:64,x:869,y:230,className:"example","aria-labelledby":r},i),t?A.createElement("title",{id:r},t):null,ge||(ge=A.createElement("path",{fill:"gold",stroke:"#000",d:"M0 0h64v20H0z"})),A.createElement("svg",xe({height:20,width:64,className:"example","aria-labelledby":r},i),t?A.createElement("title",{id:r},t):null,fe||(fe=A.createElement("text",{dominantBaseline:"central",textAnchor:"middle",x:"50%",y:"50%"},"Focus")))),A.createElement("svg",xe({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":r},i),t?A.createElement("title",{id:r},t):null,be||(be=A.createElement("text",{dominantBaseline:"central",fill:"#fff",stroke:"#fff",textAnchor:"middle",x:"50%",y:"50%",fontSize:"1.5em",filter:"url(#chop-focus_yml__b)"},"(1)"))))},ke=["components"],Ne={id:"single-card-focus",title:"Single Card Focus"},Ce=void 0,Oe={unversionedId:"beginner/single-card-focus",id:"beginner/single-card-focus",isDocsHomePage:!1,title:"Single Card Focus",description:"- So far, we have learned about the two types of clues: Play Clues and Save Clues.",source:"@site/docs/beginner/single-card-focus.md",sourceDirName:"beginner",slug:"/beginner/single-card-focus",permalink:"/docs/beginner/single-card-focus",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/single-card-focus.md",version:"current",frontMatter:{id:"single-card-focus",title:"Single Card Focus"},sidebar:"mainSidebar",previous:{title:"The Critical Save (Question 4)",permalink:"/docs/beginner/critical-save-question-4"},next:{title:"Single Card Focus (Question 1)",permalink:"/docs/beginner/single-card-focus-question-1"}},Se=[{value:"New Cards",id:"new-cards",children:[]},{value:"Determining the Focus: 4 Steps",id:"determining-the-focus-4-steps",children:[]},{value:"Example 1: Left-Most Focus",id:"example-1-left-most-focus",children:[]},{value:"Example 2: Chop-Focus",id:"example-2-chop-focus",children:[]}],Pe={toc:Se};function qe(e){var t=e.components,r=(0,M.Z)(e,ke);return(0,H.kt)("wrapper",(0,_.Z)({},Pe,r,{components:t,mdxType:"MDXLayout"}),(0,H.kt)(I.Z,{id:"single-card-focus",mdxType:"BeginnersGuideProgress"}),(0,H.kt)("ul",null,(0,H.kt)("li",{parentName:"ul"},"So far, we have learned about the two types of clues: ",(0,H.kt)("em",{parentName:"li"},"Play Clues")," and ",(0,H.kt)("em",{parentName:"li"},"Save Clues"),"."),(0,H.kt)("li",{parentName:"ul"},"But all of the ",(0,H.kt)("em",{parentName:"li"},"Play Clues")," and ",(0,H.kt)("em",{parentName:"li"},"Save Clues"),' that we have seen so far have only "touched" a single card.'),(0,H.kt)("li",{parentName:"ul"},"Obviously, it is also possible to give a clue that touches ",(0,H.kt)("strong",{parentName:"li"},"two or more")," cards."),(0,H.kt)("li",{parentName:"ul"},"We agree that if a clue touches two or more cards, the clue only delivers a message about ",(0,H.kt)("strong",{parentName:"li"},"one specific card"),". This is referred to as the ",(0,H.kt)("em",{parentName:"li"},"focus")," of the clue."),(0,H.kt)("li",{parentName:"ul"},"With every clue, only ",(0,H.kt)("strong",{parentName:"li"},"one card is focused"),". Nothing specific is implied about non-focused cards (except that they will be useful at some point later on)."),(0,H.kt)("li",{parentName:"ul"},"For example, if Alice gives a ",(0,H.kt)("em",{parentName:"li"},"Play Clue")," to Bob that touches two cards, then Bob can ",(0,H.kt)("strong",{parentName:"li"},"only play the focused card"),". He has to hold on to the non-focused card for later.")),(0,H.kt)("br",null),(0,H.kt)("h3",{id:"new-cards"},"New Cards"),(0,H.kt)("ul",null,(0,H.kt)("li",{parentName:"ul"},"When determining the ",(0,H.kt)("em",{parentName:"li"},"focus"),' of a clue, you need to look for "new" cards.'),(0,H.kt)("li",{parentName:"ul"},"New cards are specifically defined as ",(0,H.kt)("strong",{parentName:"li"},'cards that are touched by a clue that did not have any clues "on" them already'),".")),(0,H.kt)("br",null),(0,H.kt)("h3",{id:"determining-the-focus-4-steps"},"Determining the Focus: 4 Steps"),(0,H.kt)("p",null,"So, when two or more cards are touched by a clue, which card is focused?"),(0,H.kt)("ol",null,(0,H.kt)("li",{parentName:"ol"},"If no cards are new, then ",(0,H.kt)("strong",{parentName:"li"},"the focus is on the left-most re-touched card"),"."),(0,H.kt)("li",{parentName:"ol"},"If only one card is new, then ",(0,H.kt)("strong",{parentName:"li"},"the focus is on the new card"),"."),(0,H.kt)("li",{parentName:"ol"},"If two or more cards are new, and one of them was on chop, then ",(0,H.kt)("strong",{parentName:"li"},"the focus is on the chop"),"."),(0,H.kt)("li",{parentName:"ol"},"If two or more cards are new, and none of them were on chop, then ",(0,H.kt)("strong",{parentName:"li"},"the focus is on the left-most new card"),".")),(0,H.kt)("br",null),(0,H.kt)("h3",{id:"example-1-left-most-focus"},"Example 1: Left-Most Focus"),(0,H.kt)("ul",null,(0,H.kt)("li",{parentName:"ul"},"In the example below, Alice clues red to Bob. This must be a ",(0,H.kt)("em",{parentName:"li"},"Play Clue"),"."),(0,H.kt)("li",{parentName:"ul"},"Before this clue, Bob's hand was completely unclued. So, with this clue, ",(0,H.kt)("strong",{parentName:"li"},"two new cards were introduced")," - the red card on slot 2 and the red card on slot 4."),(0,H.kt)("li",{parentName:"ul"},"Bob knows that in this situation, the focus of the clue is the left-most of the two new cards. This must be a ",(0,H.kt)("em",{parentName:"li"},"Play Clue")," on a red 1."),(0,H.kt)("li",{parentName:"ul"},"Since the other red card in his hand must be useful, Bob can reason that it is either red 2, red 3, red 4, or red 5. He will hold on to the card for later.")),(0,H.kt)(ye,{mdxType:"LeftMostFocus"}),(0,H.kt)("h3",{id:"example-2-chop-focus"},"Example 2: Chop-Focus"),(0,H.kt)("ul",null,(0,H.kt)("li",{parentName:"ul"},"In the example below, Alice clues red to Bob. This must be a ",(0,H.kt)("em",{parentName:"li"},"Play Clue"),"."),(0,H.kt)("li",{parentName:"ul"},"Before this clue, Bob's hand was completely unclued. So, with this clue, ",(0,H.kt)("strong",{parentName:"li"},"three new cards were introduced")," - slot 1, slot 2, and slot 5."),(0,H.kt)("li",{parentName:"ul"},"Before this clue, Bob's chop was slot 5. So, since the clue touched his chop and ",(0,H.kt)("em",{parentName:"li"},"Chop-Focus")," has priority, this must be a ",(0,H.kt)("em",{parentName:"li"},"Chop-Focus Play Clue")," on a red 1.")),(0,H.kt)(Ee,{mdxType:"ChopFocus"}),(0,H.kt)("ul",null,(0,H.kt)("li",{parentName:"ul"},"Note that even though it touches Bob's chop card, Bob knows that this cannot be a ",(0,H.kt)("em",{parentName:"li"},"Save Clue"),". Specifically:",(0,H.kt)("ul",{parentName:"li"},(0,H.kt)("li",{parentName:"ul"},"It can't be a ",(0,H.kt)("em",{parentName:"li"},"5 Save")," on a red 5, because Alice would have clued number 5 for that."),(0,H.kt)("li",{parentName:"ul"},"It can't be a ",(0,H.kt)("em",{parentName:"li"},"2 Save")," on a red 2, because Alice would have clued number 2 for that."),(0,H.kt)("li",{parentName:"ul"},"It can't be a ",(0,H.kt)("em",{parentName:"li"},"Critical Save"),", because there are no red cards in the trash yet.")))))}qe.isMDXComponent=!0},5774:function(e,t,r){"use strict";r.d(t,{Ip:function(){return s}});var i=r(7294),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function n(e){var t=e.className,r=e.counterClockwise,a=e.dashRatio,n=e.pathRadius,s=e.strokeWidth,o=e.style;return(0,i.createElement)("path",{className:t,style:Object.assign({},o,c({pathRadius:n,dashRatio:a,counterClockwise:r})),d:l({pathRadius:n,counterClockwise:r}),strokeWidth:s,fillOpacity:0})}function l(e){var t=e.pathRadius,r=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+r+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+r+" 1 1 0,-"+2*t+"\n    "}function c(e){var t=e.counterClockwise,r=e.dashRatio,i=e.pathRadius,a=2*Math.PI*i,n=(1-r)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(t?-n:n)+"px"}}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,i=e.maxValue;return(Math.min(Math.max(t,r),i)-r)/(i-r)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,a=e.classes,l=e.counterClockwise,c=e.styles,s=e.strokeWidth,o=e.text,u=this.getPathRadius(),m=this.getPathRatio();return(0,i.createElement)("svg",{className:a.root+" "+r,style:c.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,i.createElement)("circle",{className:a.background,style:c.background,cx:50,cy:50,r:50}):null,(0,i.createElement)(n,{className:a.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:s,style:c.trail}),(0,i.createElement)(n,{className:a.path,counterClockwise:l,dashRatio:m*t,pathRadius:u,strokeWidth:s,style:c.path}),o?(0,i.createElement)("text",{className:a.text,style:c.text,x:50,y:50},o):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(i.Component)}}]);