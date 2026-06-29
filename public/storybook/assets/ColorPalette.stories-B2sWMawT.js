import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-Bn-7BJf9.js";import{a as n,t as r}from"./tokens-qhb9cilZ.js";function i({hex:e,label:t}){let n=a(e);return(0,s.jsxs)(`div`,{title:e,style:{backgroundColor:e,borderRadius:8,padding:`12px 10px 10px`,display:`flex`,flexDirection:`column`,justifyContent:`flex-end`,gap:2,minHeight:80,border:e===`#ffffff`?`1px solid #eeeff1`:void 0},children:[(0,s.jsx)(`span`,{style:{fontSize:11,fontWeight:600,color:n?`rgba(255,255,255,0.8)`:`rgba(0,0,0,0.5)`,fontFamily:`monospace`},children:t}),(0,s.jsx)(`span`,{style:{fontSize:10,fontFamily:`monospace`,color:n?`rgba(255,255,255,0.6)`:`rgba(0,0,0,0.4)`},children:e})]})}function a(e){let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16);return(t*299+n*587+r*114)/1e3<128}function o({group:e=`all`}){return(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:(e===`all`?Object.keys(n):[e]).map(e=>(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{fontFamily:`sans-serif`,fontSize:12,fontWeight:700,textTransform:`uppercase`,letterSpacing:`0.06em`,color:`#868b94`,marginBottom:10},children:e}),(0,s.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(88px, 1fr))`,gap:8},children:Object.entries(n[e]).map(([e,t])=>(0,s.jsx)(i,{hex:t,label:e},e))})]},e))})}var s,c=e((()=>{r(),s=t(),o.__docgenInfo={description:``,methods:[],displayName:`ColorPalette`,props:{group:{required:!1,tsType:{name:`union`,raw:`ColorGroup | 'all'`,elements:[{name:`union`,raw:`keyof typeof colors`,elements:[{name:`literal`,value:`neutral`},{name:`literal`,value:`green`},{name:`literal`,value:`red`},{name:`literal`,value:`blue`}]},{name:`literal`,value:`'all'`}]},description:`표시할 색상 그룹`,defaultValue:{value:`'all'`,computed:!1}}}}})),l,u,d,f,p,m,h;e((()=>{c(),l={title:`Foundation/ColorPalette`,component:o,parameters:{layout:`padded`,docs:{description:{component:`Figma에서 추출한 색상 팔레트. Neutral · Green · Red · Blue 4개 그룹.`}}},tags:[`autodocs`],argTypes:{group:{control:{type:`select`},options:[`all`,`neutral`,`green`,`red`,`blue`]}}},u={name:`전체 팔레트`,args:{group:`all`}},d={name:`Neutral`,args:{group:`neutral`}},f={name:`Green`,args:{group:`green`}},p={name:`Red`,args:{group:`red`}},m={name:`Blue`,args:{group:`blue`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '전체 팔레트',
  args: {
    group: 'all'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Neutral',
  args: {
    group: 'neutral'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Green',
  args: {
    group: 'green'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Red',
  args: {
    group: 'red'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Blue',
  args: {
    group: 'blue'
  }
}`,...m.parameters?.docs?.source}}},h=[`All`,`Neutral`,`Green`,`Red`,`Blue`]}))();export{u as All,m as Blue,f as Green,d as Neutral,p as Red,h as __namedExportsOrder,l as default};