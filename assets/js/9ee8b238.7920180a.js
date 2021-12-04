/*! For license information please see 9ee8b238.7920180a.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[1416],{8173:function(e,t,i){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function n(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return r(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}i.d(t,{Z:function(){return n}})},3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return u},kt:function(){return h}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=o(i),h=n,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return i?r.createElement(g,l(l({ref:t},u),{},{components:i})):r.createElement(g,l({ref:t},u))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<a;o++)l[o]=i[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/dual-color","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white","variant-specific/no-positive-clues"]},"convention-attribution"]}},1961:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var r=i(8173),n=i(7294),a=i(5774),l=i(6679),c=l.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],s=[];!function e(t,i){for(var n,a=(0,r.Z)(i);!(n=a()).done;){var l=n.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(s,c),"beginner"===s[0]&&s.shift();var o=s.length;function u(e){var t=e.id,i=s.findIndex((function(e){return"beginner/"+t===e}));if(-1===i)throw new Error("page id not found in sidebar");var r=Math.round((i+1)/o*100);return(0,n.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),n.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},n.createElement(a.Ip,{value:r,text:r+"%"}))}},4391:function(e,t,i){"use strict";i.r(t),i.d(t,{contentTitle:function(){return X},default:function(){return L},frontMatter:function(){return F},metadata:function(){return z},toc:function(){return Q}});var r,n,a,l,c,s,o,u,p,d,h,g,m,f,b,v,y,x,w,k,E,q,N,O,C,P,S,_,j,T,B,A=i(2122),R=i(9756),I=i(7294),M=i(3905),H=i(1961),D=["title","titleId"];function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var Z=function(e){var t=e.title,i=e.titleId,A=W(e,D);return I.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:322,viewBox:"0 0 944 322",width:944,className:"example","aria-labelledby":i},A),t?I.createElement("title",{id:i},t):null,r||(r=I.createElement("defs",null,I.createElement("filter",{x:0,y:0,width:1,height:1,id:"critical-save_yml__a"},I.createElement("feFlood",{floodColor:"#0ff"})),I.createElement("filter",{id:"critical-save_yml__b"},I.createElement("feOffset",{in:"SourceAlpha",dx:1,dy:1,result:"offsetblur"}),I.createElement("feComponentTransfer",{result:"shadow"},I.createElement("feFuncA",{type:"linear",slope:.5})),I.createElement("feMorphology",{in:"SourceAlpha",operator:"dilate",radius:.5,result:"border"}),I.createElement("feMerge",null,I.createElement("feMergeNode",{in:"shadow"}),I.createElement("feMergeNode",{in:"border"}),I.createElement("feMergeNode",{in:"SourceGraphic"}))))),n||(n=I.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red1.svg"})),a||(a=I.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow1.svg"})),l||(l=I.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green0.svg"})),c||(c=I.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue1.svg"})),s||(s=I.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple0.svg"})),I.createElement("svg",G({height:100,width:90,x:464,className:"example","aria-labelledby":i},A),t?I.createElement("title",{id:i},t):null,o||(o=I.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),u||(u=I.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#critical-save_yml__a)",x:"0%",y:"50%"},"Clue Giver")),p||(p=I.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),I.createElement("svg",G({height:100,width:70,x:554,className:"example","aria-labelledby":i},A),t?I.createElement("title",{id:i},t):null,d||(d=I.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),I.createElement("svg",G({height:100,width:70,x:632,className:"example","aria-labelledby":i},A),t?I.createElement("title",{id:i},t):null,h||(h=I.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),I.createElement("svg",G({height:100,width:70,x:710,className:"example","aria-labelledby":i},A),t?I.createElement("title",{id:i},t):null,g||(g=I.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),I.createElement("svg",G({height:100,width:70,x:788,className:"example","aria-labelledby":i},A),t?I.createElement("title",{id:i},t):null,m||(m=I.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),I.createElement("svg",G({height:100,width:70,x:866,className:"example","aria-labelledby":i},A),t?I.createElement("title",{id:i},t):null,f||(f=I.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),I.createElement("svg",G({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":i},A),t?I.createElement("title",{id:i},t):null,b||(b=I.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),I.createElement("svg",G({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":i},A),t?I.createElement("title",{id:i},t):null,v||(v=I.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),I.createElement("svg",G({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":i},A),t?I.createElement("title",{id:i},t):null,y||(y=I.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),I.createElement("svg",G({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":i},A),t?I.createElement("title",{id:i},t):null,x||(x=I.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),w||(w=I.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:122})),I.createElement("svg",G({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":i},A),t?I.createElement("title",{id:i},t):null,k||(k=I.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/blue.svg"}))),E||(E=I.createElement("image",{height:70,width:50,x:798,xlinkHref:"/img/pieces/arrow.svg",y:85})),q||(q=I.createElement("circle",{cx:823,cy:110,fill:"#00f",r:15,stroke:"#000",strokeWidth:2})),N||(N=I.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:122})),I.createElement("svg",G({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":i},A),t?I.createElement("title",{id:i},t):null,O||(O=I.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/5.svg"})),C||(C=I.createElement("image",{height:12,width:12,x:29,xlinkHref:"/img/pieces/pips/red.svg",y:24,filter:"url(#critical-save_yml__b)"})),P||(P=I.createElement("image",{height:12,width:12,x:9.979,xlinkHref:"/img/pieces/pips/yellow.svg",y:37.82,filter:"url(#critical-save_yml__b)"})),S||(S=I.createElement("image",{height:12,width:12,x:17.244,xlinkHref:"/img/pieces/pips/green.svg",y:60.18,filter:"url(#critical-save_yml__b)"})),_||(_=I.createElement("image",{height:12,width:12,x:48.021,xlinkHref:"/img/pieces/pips/purple.svg",y:37.82,filter:"url(#critical-save_yml__b)"}))),j||(j=I.createElement("image",{height:200,opacity:.2,width:200,x:91,xlinkHref:"/img/pieces/trashcan.png",y:120})),T||(T=I.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/blue4.svg",y:170})),B||(B=I.createElement("rect",{fill:"none",height:200,rx:10,ry:10,stroke:"#006400",strokeWidth:2,width:200,x:91,y:120})))},V=["components"],F={id:"critical-save",title:"The Critical Save"},X=void 0,z={unversionedId:"beginner/critical-save",id:"beginner/critical-save",isDocsHomePage:!1,title:"The Critical Save",description:"- Critical cards are defined as the final card of a suit and rank combination that is not discarded yet. For example:",source:"@site/docs/beginner/critical-save.md",sourceDirName:"beginner",slug:"/beginner/critical-save",permalink:"/docs/beginner/critical-save",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/critical-save.md",version:"current",frontMatter:{id:"critical-save",title:"The Critical Save"},sidebar:"mainSidebar",previous:{title:"The 2 Save (Question 3)",permalink:"/docs/beginner/2-save-question-3"},next:{title:"The Critical Save (Question 1)",permalink:"/docs/beginner/critical-save-question-1"}},Q=[],U={toc:Q};function L(e){var t=e.components,i=(0,R.Z)(e,V);return(0,M.kt)("wrapper",(0,A.Z)({},U,i,{components:t,mdxType:"MDXLayout"}),(0,M.kt)(H.Z,{id:"critical-save",mdxType:"BeginnersGuideProgress"}),(0,M.kt)("ul",null,(0,M.kt)("li",{parentName:"ul"},"Critical cards are defined as the final card of a suit and rank combination that is not discarded yet. For example:",(0,M.kt)("ul",{parentName:"li"},(0,M.kt)("li",{parentName:"ul"},"If Alice has a red 2 in her hand, and the other copy of red 2 is in the deck, then Alice's red 2 is not critical."),(0,M.kt)("li",{parentName:"ul"},"If Alice has a red 2 in her hand, and the other copy of red 2 is already discarded, then Alice's red 2 is critical."),(0,M.kt)("li",{parentName:"ul"},"If Alice has a red 5 in her hand, then it is always critical. (There is only one copy of each 5 in a Hanabi deck.)"))),(0,M.kt)("li",{parentName:"ul"},"Obviously, critical cards need to be given ",(0,M.kt)("em",{parentName:"li"},"Save Clues")," so that they are not discarded. (If a critical card was discarded, then the maximum score of the game would decrease.)"),(0,M.kt)("li",{parentName:"ul"},"As long as the critical card is not a 5, we agree that players can save critical cards with ",(0,M.kt)("strong",{parentName:"li"},"either a color clue or a number clue"),"."),(0,M.kt)("li",{parentName:"ul"},"In the example below:",(0,M.kt)("ul",{parentName:"li"},(0,M.kt)("li",{parentName:"ul"},"Alice clues Bob blue, which touches a card on slot 4."),(0,M.kt)("li",{parentName:"ul"},"Before this clue, the only clued card in Bob's hand was the 5 on slot 5."),(0,M.kt)("li",{parentName:"ul"},"Bob's first instinct is that this could be a ",(0,M.kt)("em",{parentName:"li"},"Play Clue")," on the blue 2. However, since the clue was focused on his chop, this could also be a ",(0,M.kt)("em",{parentName:"li"},"Save Clue"),"."),(0,M.kt)("li",{parentName:"ul"},"Bob looks through the discard pile and finds that there is a blue 4 there. Thus, this could be a ",(0,M.kt)("em",{parentName:"li"},"Save Clue")," on the blue 4. So, Bob knows that for now, he has to hold on to the card."),(0,M.kt)("li",{parentName:"ul"},"Bob marks the card as either a blue 2 or a blue 4, so that he can keep track of it for later. Then, he discards.")))),(0,M.kt)(Z,{mdxType:"CriticalSave"}))}L.isMDXComponent=!0},5774:function(e,t,i){"use strict";i.d(t,{Ip:function(){return s}});var r=i(7294),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};function a(e){var t=e.className,i=e.counterClockwise,n=e.dashRatio,a=e.pathRadius,s=e.strokeWidth,o=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},o,c({pathRadius:a,dashRatio:n,counterClockwise:i})),d:l({pathRadius:a,counterClockwise:i}),strokeWidth:s,fillOpacity:0})}function l(e){var t=e.pathRadius,i=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+i+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+i+" 1 1 0,-"+2*t+"\n    "}function c(e){var t=e.counterClockwise,i=e.dashRatio,r=e.pathRadius,n=2*Math.PI*r,a=(1-i)*n;return{strokeDasharray:n+"px "+n+"px",strokeDashoffset:(t?-a:a)+"px"}}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,i=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,i),r)-i)/(r-i)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,i=e.className,n=e.classes,l=e.counterClockwise,c=e.styles,s=e.strokeWidth,o=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,r.createElement)("svg",{className:n.root+" "+i,style:c.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:n.background,style:c.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(a,{className:n.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:s,style:c.trail}),(0,r.createElement)(a,{className:n.path,counterClockwise:l,dashRatio:p*t,pathRadius:u,strokeWidth:s,style:c.path}),o?(0,r.createElement)("text",{className:n.text,style:c.text,x:50,y:50},o):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component)}}]);