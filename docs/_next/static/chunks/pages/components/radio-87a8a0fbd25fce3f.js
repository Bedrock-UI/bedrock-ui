(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{7973:function(e,n,r){"use strict";var c=r(959),t=r(5924),s=r(4735);function i({className:e,...n}){return c.createElement("div",{...n,className:(0,t.Z)("grid",e)})}i.Col=function({className:e,span:n,...r}){return c.createElement("div",{...r,className:(0,t.Z)("grid-item",(0,s.Z)(n,{prefix:"col-"}))})},n.Z=i},4282:function(e,n,r){"use strict";var c=r(959),t=r(5924),s=r(4735);n.Z=function({className:e,color:n,...r}){return c.createElement("div",{...r,className:(0,t.Z)("text",(0,s.Z)(n),e)})}},8713:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/radio",function(){return r(6097)}])},6097:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return f}});var c=r(1527),t=r(959),s=r(7973),i=r(5888),l=r(1369),o=r(5924),a=function({checked:e=!1,className:n,error:r=!1,onChange:c,success:s=!1,...i}){return t.createElement("div",{className:"radio-container"},t.createElement("input",{...i,checked:e,className:"radio-input",readOnly:!0,type:"radio",tabIndex:-1}),t.createElement("span",{className:(0,o.Z)("radio",n,{checked:e,error:r,success:s}),onClick:()=>c(!e),tabIndex:0}))},d=r(4282),u=r(1698),h=r(1378),x="\nimport { Radio } from '@bedrock-ui/core';\n".trim(),m="\n<Flex>\n  <Radio checked={checked} onChange={() => setChecked(!checked)} />\n  <Text>Lorem ipsum</Text>\n</Flex>\n".trim(),Z="\n<Flex>\n  <Radio error checked={checked} onChange={() => setChecked(!checked)} />\n  <Text>Lorem ipsum</Text>\n</Flex>\n".trim(),j="\n<Flex>\n  <Radio success checked={checked} onChange={() => setChecked(!checked)} />\n  <Text>Lorem ipsum</Text>\n</Flex>\n".trim(),f=function(){var e=(0,t.useState)(!1),n=e[0],r=e[1],o=(0,t.useState)(!1),f=o[0],p=o[1],k=(0,t.useState)(!1),C=k[0],g=k[1];return(0,c.jsxs)(h.J,{name:"Checkbox",children:[(0,c.jsx)(u.P,{children:x}),(0,c.jsxs)(s.Z,{style:{marginTop:64,marginBottom:64},children:[(0,c.jsx)(s.Z.Col,{span:12,children:(0,c.jsx)(i.Z,{level:3,children:"Default"})}),(0,c.jsx)(s.Z.Col,{span:12,children:(0,c.jsx)(u.P,{children:m})}),(0,c.jsx)(s.Z.Col,{span:12,children:(0,c.jsxs)(l.Z,{children:[(0,c.jsx)(a,{checked:n,onChange:function(){return r(!n)}}),(0,c.jsx)(l.Z,{ml:3,children:(0,c.jsx)(d.Z,{children:"Lorem ipsum"})})]})})]}),(0,c.jsxs)(s.Z,{style:{marginTop:64,marginBottom:64},children:[(0,c.jsx)(s.Z.Col,{span:12,children:(0,c.jsx)(i.Z,{level:3,children:"Error"})}),(0,c.jsx)(s.Z.Col,{span:12,children:(0,c.jsx)(u.P,{children:Z})}),(0,c.jsx)(s.Z.Col,{span:12,children:(0,c.jsxs)(l.Z,{children:[(0,c.jsx)(a,{checked:f,error:!0,onChange:function(){return p(!f)}}),(0,c.jsx)(l.Z,{ml:3,children:(0,c.jsx)(d.Z,{children:"Lorem ipsum"})})]})})]}),(0,c.jsxs)(s.Z,{style:{marginTop:64,marginBottom:64},children:[(0,c.jsx)(s.Z.Col,{span:12,children:(0,c.jsx)(i.Z,{level:3,children:"Success"})}),(0,c.jsx)(s.Z.Col,{span:12,children:(0,c.jsx)(u.P,{children:j})}),(0,c.jsx)(s.Z.Col,{span:12,children:(0,c.jsxs)(l.Z,{children:[(0,c.jsx)(a,{checked:C,success:!0,onChange:function(){return g(!C)}}),(0,c.jsx)(l.Z,{ml:3,children:(0,c.jsx)(d.Z,{children:"Lorem ipsum"})})]})})]})]})}},1698:function(e,n,r){"use strict";r.d(n,{P:function(){return o}});var c=r(1527),t=r(577),s=r(7194),i=r(2154);t.Z.registerLanguage("tsx",s.Z);var l={fontSize:"16px"},o=function(e){var n=e.children;return(0,c.jsx)(t.Z,{customStyle:l,language:"tsx",style:i.Z,children:n})}},1378:function(e,n,r){"use strict";r.d(n,{J:function(){return u}});var c=r(1527),t=r(1369),s=r(5888),i=r(477),l=r.n(i),o=function(e){var n=e.name;return(0,c.jsx)(t.Z,{className:l().banner,flexDirection:"column",children:(0,c.jsx)(s.Z,{level:1,children:n})})},a=r(832),d=r.n(a),u=function(e){var n=e.children,r=e.name;return(0,c.jsxs)(t.Z,{className:d().container,flexDirection:"column",children:[(0,c.jsx)(o,{name:r}),n]})}},477:function(e){e.exports={banner:"Banner_banner__wsj4G"}},832:function(e){e.exports={container:"DocSection_container__f9Di_"}}},function(e){e.O(0,[874,774,888,179],function(){return e(e.s=8713)}),_N_E=e.O()}]);