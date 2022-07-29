(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[100],{1556:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/breakpoints/install",function(){return c(7933)}])},7933:function(a,b,c){"use strict";c.r(b);var d=c(1527),e=c(6690),f=c(7117),g=c(1014),h="\n(npm|yarn|pnpm) install @bedrock-ui/breakpoints\n".trim(),i="\nimport { BreakpointsProvider } from '@bedrock-ui/breakpoints';\n\n<BreakpointsProvider breakpoints={{\n  mobile: 0,\n  tablet: 600,\n  desktop: 1024,\n}}>\n  // children\n</BreakpointsProvider>\n".trim(),j="\nimport { useBreakpoints } from '@bedrock-ui/breakpoints';\n\nfunction Responsive() {\n  const matches = useBreakpoints();\n\n  // { mobile: false, tablet: false, desktop: true }\n}\n".trim(),k="\nimport { useBreakpointValues } from '@bedrock-ui/breakpoints';\n\nfunction Responsive() {\n  const breakpoints = useBreakpointValues();\n\n  // { mobile: 0, tablet: 600, desktop: 1024 }\n}\n".trim();b.default=function(){return(0,d.jsxs)(g.G,{name:"Breakpoints",children:[(0,d.jsx)(e.kC,{className:"my-8",children:(0,d.jsx)(e.X6,{level:5,children:"Install"})}),(0,d.jsx)(f.P,{children:h}),(0,d.jsxs)(e.kC,{flexDirection:"column",className:"my-8",children:[(0,d.jsx)(e.kC,{className:"mb-2",children:(0,d.jsx)(e.X6,{level:5,children:"Usage"})}),(0,d.jsx)(e.xv,{children:"Add the provider to inject breakpoints into your application. Breakpoints should be specified in order from the smallest width to the largest."})]}),(0,d.jsx)(f.P,{children:i}),(0,d.jsxs)(e.kC,{flexDirection:"column",className:"my-8",children:[(0,d.jsx)(e.kC,{className:"mb-2",children:(0,d.jsx)(e.X6,{level:5,children:"useBreakpoints"})}),(0,d.jsx)(e.xv,{children:"This hook will return an object of boolean values for each breakpoint specified, with the currently active breakpoint set to true."})]}),(0,d.jsx)(f.P,{children:j}),(0,d.jsxs)(e.kC,{flexDirection:"column",className:"my-8",children:[(0,d.jsx)(e.kC,{className:"mb-2",children:(0,d.jsx)(e.X6,{level:5,children:"useBreakpointValues"})}),(0,d.jsx)(e.xv,{children:"This hook will return an object containing the breakpoints that were passed into the provider."})]}),(0,d.jsx)(f.P,{children:k})]})}},7117:function(a,b,c){"use strict";c.d(b,{P:function(){return i}});var d=c(1527),e=c(6628),f=c(7194),g=c(2154);e.Z.registerLanguage("tsx",f.Z);var h={fontSize:"16px"},i=function(a){var b=a.children;return(0,d.jsx)(e.Z,{customStyle:h,language:"tsx",style:g.Z,children:b})}},1014:function(a,b,c){"use strict";c.d(b,{G:function(){return k}});var d=c(1527),e=c(6690),f=c(9422),g=c.n(f),h=function(a){var b=a.name;return(0,d.jsx)(e.kC,{className:g().banner,flexDirection:"column",children:(0,d.jsx)(e.X6,{level:1,children:b})})},i=c(175),j=c.n(i),k=function(a){var b=a.children,c=a.name;return(0,d.jsxs)(e.kC,{className:j().container,flexDirection:"column",children:[(0,d.jsx)(h,{name:c}),b]})}},9422:function(a){a.exports={banner:"Banner_banner___F5qA"}},175:function(a){a.exports={container:"ComponentDocumentation_container__b1MVI"}}},function(a){a.O(0,[45,774,888,179],function(){var b;return a(a.s=1556)}),_N_E=a.O()}])