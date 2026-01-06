(self.webpackChunkreact_fc_masonry=self.webpackChunkreact_fc_masonry||[]).push([[904],{88264:function(a,n,e){"use strict";var t;e.r(n),e.d(n,{demos:function(){return f}});var r=e(90228),o=e.n(r),s=e(87999),u=e.n(s),l=e(75271),d=e(53144),f={"docs-demo-react-masonry-demo-example":{component:l.memo(l.lazy(function(){return e.e(433).then(e.bind(e,66117))})),asset:{type:"BLOCK",id:"docs-demo-react-masonry-demo-example",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(64477).Z},react:{type:"NPM",value:"18.3.1"},"react-fc-masonry":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{react:t||(t=e.t(l,2)),"react-fc-masonry":d},renderOpts:{compile:function(){var O=u()(o()().mark(function E(){var i,h=arguments;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(406).then(e.bind(e,18406));case 2:return m.abrupt("return",(i=m.sent).default.apply(i,h));case 3:case"end":return m.stop()}},E)}));function C(){return O.apply(this,arguments)}return C}()}}}},55810:function(a,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return r}});var t=e(75271),r={}},53144:function(a,n,e){"use strict";e.r(n),e.d(n,{Masonry:function(){return E}});var t=e(26068),r=e.n(t),o=e(48305),s=e.n(o),u=e(67825),l=e.n(u),d=e(75271),f=e(52676),O=["breakpointCols","columnGap","columnClassName","children","style"],C={display:"flex",width:"100%",height:"100%"};function E(i){var h=i.breakpointCols,x=h===void 0?{default:6,1600:5,1280:4,1024:3,768:2,480:2}:h,m=i.columnGap,W=m===void 0?8:m,g=i.columnClassName,A=g===void 0?"":g,M=i.children,b=i.style,L=b===void 0?{}:b,T=l()(i,O),U=(0,d.useState)(0),j=s()(U,2),D=j[0],R=j[1],_=(0,d.useRef)(null),y=(0,d.useMemo)(function(){if(!x)return 1;var v=D,I=x!=null?x:{};for(var c in I)if(Object.prototype.hasOwnProperty.call(I,c)){var p=parseInt(c),P=p>0&&v<=p;if(P)return I[c]}return I.default||1},[x,D]),N=(0,d.useMemo)(function(){if(!M||M.length===0)return[];if(!y||y<=0)return[];var v=Array.from({length:y}).map(function(){return[]});return M.forEach(function(I,c){var p=c%y;v[p].push(I)}),v},[M,y]);return(0,d.useEffect)(function(){if(_.current){R(_.current.clientWidth);var v=function(){requestAnimationFrame(function(){var c,p,P=(c=(p=_.current)===null||p===void 0?void 0:p.clientWidth)!==null&&c!==void 0?c:0;R(P)})};return window.addEventListener("resize",v),function(){window.removeEventListener("resize",v)}}},[]),(0,f.jsx)("div",r()(r()({style:r()(r()({},C),{},{gap:W},L),ref:_},T),{},{children:N.map(function(v,I){return(0,f.jsx)("div",{className:A,style:{width:"".concat(100/y,"%")},children:v.map(function(c){return c})},I)})}))}},42836:function(a,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return t}});const t=[]},23058:function(a,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"Masonry",paraId:0,tocIndex:1},{value:" \u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7011\u5E03\u6D41\u5E03\u5C40\u7EC4\u4EF6\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u5217\u6570\u3001\u95F4\u8DDD\u3001\u6837\u5F0F\u7B49\uFF0C\u9002\u7528\u4E8E\u56FE\u7247\u3001\u5361\u7247\u7B49\u5185\u5BB9\u7684\u5206\u680F\u5C55\u793A\u3002",paraId:0,tocIndex:1},{value:`import { Masonry } from 'react-fn-masonry';
`,paraId:1,tocIndex:3},{value:`<Masonry>
  {[1,2,3,4,5,6].map(i => (
    <div key={i} style={{ background: '#eee', marginBottom: 8, height: 100 }}>
      Item {i}
    </div>
  ))}
</Masonry>
`,paraId:2,tocIndex:4},{value:"\u53C2\u6570\u540D",paraId:3,tocIndex:5},{value:"\u7C7B\u578B",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"breakpointCols",paraId:3,tocIndex:5},{value:"{ [key: string]: number; default: number }",paraId:3,tocIndex:5},{value:"{default:6,...}",paraId:3,tocIndex:5},{value:"\u54CD\u5E94\u5F0F\u65AD\u70B9\u4E0E\u5217\u6570\u914D\u7F6E\uFF0C\u652F\u6301 default \u548C\u5404\u5C4F\u5E55\u5BBD\u5EA6\u65AD\u70B9",paraId:3,tocIndex:5},{value:"columnGap",paraId:3,tocIndex:5},{value:"number",paraId:3,tocIndex:5},{value:"8",paraId:3,tocIndex:5},{value:"\u5217\u95F4\u8DDD\uFF08\u5355\u4F4D px\uFF09",paraId:3,tocIndex:5},{value:"columnClassName",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"''",paraId:3,tocIndex:5},{value:"\u6BCF\u4E00\u5217\u7684\u81EA\u5B9A\u4E49 className",paraId:3,tocIndex:5},{value:"children",paraId:3,tocIndex:5},{value:"React.ReactNode[]",paraId:3,tocIndex:5},{value:"\u5FC5\u586B",paraId:3,tocIndex:5},{value:"\u9700\u8981\u5206\u680F\u663E\u793A\u7684\u5185\u5BB9\u6570\u7EC4",paraId:3,tocIndex:5},{value:"style",paraId:3,tocIndex:5},{value:"React.CSSProperties",paraId:3,tocIndex:5},{value:"{}",paraId:3,tocIndex:5},{value:"\u5BB9\u5668\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:3,tocIndex:5},{value:"...rest",paraId:3,tocIndex:5},{value:"any",paraId:3,tocIndex:5},{value:"\u5176\u4ED6\u900F\u4F20\u5230\u5BB9\u5668\u7684\u5C5E\u6027",paraId:3,tocIndex:5},{value:`<Masonry
  breakpointCols={{
    default: 4,
    1200: 3,
    800: 2,
    480: 1,
  }}
>
  {/* children */}
</Masonry>
`,paraId:4,tocIndex:6},{value:"\u5F53\u5C4F\u5E55\u5BBD\u5EA6\u5C0F\u4E8E\u7B49\u4E8E 1200 \u65F6\u663E\u793A 3 \u5217\uFF0C\u5C0F\u4E8E\u7B49\u4E8E 800 \u65F6\u663E\u793A 2 \u5217\uFF0C\u4F9D\u6B64\u7C7B\u63A8\u3002",paraId:5,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u6BCF\u5217\u6837\u5F0F\uFF1A",paraId:6,tocIndex:7},{value:`<Masonry columnClassName="my-column" style={{ minHeight: 400 }}>
  {/* children */}
</Masonry>
`,paraId:7,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u5217\u95F4\u8DDD\uFF1A",paraId:8,tocIndex:7},{value:`<Masonry columnGap={16}>
  {/* children */}
</Masonry>
`,paraId:9,tocIndex:7},{value:"children",paraId:10,tocIndex:8},{value:" \u5FC5\u987B\u662F\u6570\u7EC4\uFF0C\u5EFA\u8BAE\u6BCF\u4E2A\u5143\u7D20\u90FD\u8BBE\u7F6E\u552F\u4E00\u7684 ",paraId:10,tocIndex:8},{value:"key",paraId:10,tocIndex:8},{value:"\u3002",paraId:10,tocIndex:8},{value:"\u7EC4\u4EF6\u4F1A\u81EA\u52A8\u76D1\u542C\u7A97\u53E3\u5927\u5C0F\u53D8\u5316\uFF0C\u52A8\u6001\u8C03\u6574\u5217\u6570\u3002",paraId:10,tocIndex:8},{value:"\u5217\u5BBD\u81EA\u52A8\u5747\u5206\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u5BB9\u5668\u6837\u5F0F\u3002",paraId:10,tocIndex:8},{value:"Q: \u5982\u4F55\u8BA9\u6BCF\u5217\u5185\u5BB9\u9AD8\u5EA6\u81EA\u9002\u5E94\uFF1F",paraId:11,tocIndex:9},{value:`
A: \u53EA\u9700\u4FDD\u8BC1\u6BCF\u4E2A\u5B50\u5143\u7D20\u9AD8\u5EA6\u81EA\u5B9A\u5373\u53EF\uFF0CMasonry \u4F1A\u81EA\u52A8\u5206\u914D\u3002`,paraId:11,tocIndex:9},{value:"Q: \u5982\u4F55\u517C\u5BB9\u79FB\u52A8\u7AEF\uFF1F",paraId:12,tocIndex:9},{value:`
A: \u901A\u8FC7\u8BBE\u7F6E\u5408\u9002\u7684 `,paraId:12,tocIndex:9},{value:"breakpointCols",paraId:12,tocIndex:9},{value:"\uFF0C\u5373\u53EF\u5B9E\u73B0\u54CD\u5E94\u5F0F\u5E03\u5C40\u3002",paraId:12,tocIndex:9},{value:"\u5982\u9700\u66F4\u8BE6\u7EC6\u7684\u793A\u4F8B\u6216\u9047\u5230\u95EE\u9898\uFF0C\u6B22\u8FCE\u67E5\u9605\u6E90\u7801\u6216\u53CD\u9988\u3002\u9700\u8981\u8865\u5145\u66F4\u591A\u5185\u5BB9\u8BF7\u544A\u77E5\uFF01",paraId:13,tocIndex:9}]},64477:function(a,n){"use strict";n.Z=`import React from 'react';
import { Masonry } from 'react-fc-masonry';

const list = Array.from({ length: 20 }).map((_, index) => ({
  id: index + 1,
  image: \`https://picsum.photos/seed/tool\${index + 1}/\${
    [400, 420, 440][index % 3]
  }/\${[300, 320, 340][(index + 1) % 3]}\`,
}));

const breakpointColumnsObj = {
  default: 6,
  1600: 5,
  1280: 4,
  1024: 3,
  768: 2,
  480: 2,
  0: 1,
};

const Home = () => {
  return (
    <Masonry breakpointCols={breakpointColumnsObj} columnGap={16}>
      {list.map((it) => (
        <div key={it.id}>
          <img src={it.image} style={{ width: '100%', minHeight: 40 }} />
        </div>
      ))}
    </Masonry>
  );
};

export default Home;
`},67825:function(a,n,e){var t=e(64382);function r(o,s){if(o==null)return{};var u=t(o,s),l,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(o);for(d=0;d<f.length;d++)l=f[d],!(s.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(o,l)&&(u[l]=o[l])}return u}a.exports=r,a.exports.__esModule=!0,a.exports.default=a.exports},64382:function(a){function n(e,t){if(e==null)return{};var r={},o=Object.keys(e),s,u;for(u=0;u<o.length;u++)s=o[u],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}a.exports=n,a.exports.__esModule=!0,a.exports.default=a.exports}}]);
