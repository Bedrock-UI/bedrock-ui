(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[414],{1097:function(a,b,c){"use strict";var d=c(959),e=c(5924),f=c(1302);function g({className:a,...b}){return d.createElement("div",{...b,className:(0,e.Z)("grid",a)})}g.Col=function({className:a,span:b,...c}){return d.createElement("div",{...c,className:(0,e.Z)("grid-item",(0,f.Z)(b,{prefix:"col-"}))})},b.Z=g},2324:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/highlight",function(){return c(1792)}])},1792:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return o}});var d=c(1527),e=c(1097),f=c(6992),g=c(959),h=c(5924),i=function({className:a,children:b,highlight:c,...d}){let e=(0,g.useMemo)(()=>b.split(/(\s+)/).map(a=>({text:a,match:Array.isArray(c)?c.includes(a):c===a})),[b,c]);return g.createElement("div",{...d,className:(0,h.Z)("highlight",a)},e.map(({text:a,match:b})=>b?g.createElement("mark",null,a):g.createElement("span",null,a)))},j=c(7973),k=c(2055),l="\nimport { Highlight } from '@bedrock-ui/core';\n".trim(),m='\n<Highlight highlight="consectetur">\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n  incididunt ut labore et dolore magna aliqua.\n</Highlight>\n'.trim(),n="\n<Highlight highlight={['consectetur', 'dolore']}>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n  incididunt ut labore et dolore magna aliqua.\n</Highlight>\n".trim(),o=function(){return(0,d.jsxs)(k.J,{name:"Highlight",children:[(0,d.jsx)(j.P,{children:l}),(0,d.jsxs)(e.Z,{style:{marginTop:64,marginBottom:64},children:[(0,d.jsx)(e.Z.Col,{span:12,children:(0,d.jsx)(f.Z,{level:3,children:"Single Word"})}),(0,d.jsx)(e.Z.Col,{span:12,children:(0,d.jsx)(j.P,{children:m})}),(0,d.jsx)(e.Z.Col,{span:12,children:(0,d.jsx)(i,{highlight:"consectetur",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]}),(0,d.jsxs)(e.Z,{style:{marginBottom:64},children:[(0,d.jsx)(e.Z.Col,{span:12,children:(0,d.jsx)(f.Z,{level:3,children:"Multiple Words"})}),(0,d.jsx)(e.Z.Col,{span:12,children:(0,d.jsx)(j.P,{children:n})}),(0,d.jsx)(e.Z.Col,{span:12,children:(0,d.jsx)(i,{highlight:["consectetur","dolore"],children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]})]})}},7973:function(a,b,c){"use strict";c.d(b,{P:function(){return i}});var d=c(1527),e=c(6628),f=c(4790),g=c(2154);e.Z.registerLanguage("tsx",f.Z);var h={fontSize:"16px"},i=function(a){var b=a.children;return(0,d.jsx)(e.Z,{customStyle:h,language:"tsx",style:g.Z,children:b})}},2055:function(a,b,c){"use strict";c.d(b,{J:function(){return l}});var d=c(1527),e=c(5269),f=c(6992),g=c(7647),h=c.n(g),i=function(a){var b=a.name;return(0,d.jsx)(e.Z,{className:h().banner,flexDirection:"column",children:(0,d.jsx)(f.Z,{level:1,children:b})})},j=c(1591),k=c.n(j),l=function(a){var b=a.children,c=a.name;return(0,d.jsxs)(e.Z,{className:k().container,flexDirection:"column",children:[(0,d.jsx)(i,{name:c}),b]})}},7647:function(a){a.exports={banner:"Banner_banner__wsj4G"}},1591:function(a){a.exports={container:"DocSection_container__f9Di_"}}},function(a){a.O(0,[45,774,888,179],function(){var b;return a(a.s=2324)}),_N_E=a.O()}])