import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-DlEQIHMX.js";import{a as n,t as r}from"./tokens-qhb9cilZ.js";import{n as i,t as a}from"./Icon-bASt1V4l.js";function o({types:e}){return(0,s.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:20},children:e.map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8,width:76,padding:`16px 8px`,borderRadius:12,background:n.neutral[100]},children:[(0,s.jsx)(a,{type:e,size:24,color:n.neutral[950]}),(0,s.jsx)(`span`,{style:{fontSize:11,fontFamily:`monospace`,color:n.neutral[700]},children:e})]},e))})}var s,c,l,u,d,f,p,m,h,g;e((()=>{i(),r(),s=t(),c={title:`Components/Icon`,component:a,parameters:{layout:`padded`,docs:{description:{component:'Figma "❖ System Icon Component"(node 19:419)와 "❖ Navigation Bar"(node 18:168)의 NavigationItem 아이콘을 통합한 아이콘 세트. 20x20 뷰박스, `color` prop으로 테마 가능.'}}},tags:[`autodocs`],argTypes:{type:{control:{type:`select`},options:[`blank`,`error`,`right`,`left`,`bottom`,`copy`,`noti`,`plus`,`more`,`close`,`share`,`storageFill`,`storage`,`lock`,`camera`,`search`,`home`,`setting`,`cart`,`menu`,`back`,`alarm`]},size:{control:{type:`number`}},color:{control:{type:`color`}}}},l={args:{type:`home`,size:24,color:n.neutral[950]}},u=[`blank`,`error`,`right`,`left`,`bottom`,`copy`,`noti`,`plus`,`more`,`close`,`share`,`storageFill`,`storage`,`lock`,`camera`],d=[`search`,`home`,`setting`,`cart`,`menu`,`back`,`alarm`,`blank`,`share`,`close`],f={name:`❖ System Icon Component`,render:()=>(0,s.jsx)(o,{types:u})},p={name:`❖ Navigation Bar Item 아이콘`,render:()=>(0,s.jsx)(o,{types:d})},m={name:`사이즈`,render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:20},children:[16,20,24,32,40].map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,s.jsx)(a,{type:`home`,size:e,color:n.neutral[950]}),(0,s.jsxs)(`span`,{style:{fontSize:11,color:n.neutral[700]},children:[e,`px`]})]},e))})},h={name:`색상`,render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:20},children:[n.neutral[950],n.neutral[700],n.blue[700],n.red[700],n.green[700]].map(e=>(0,s.jsx)(a,{type:`noti`,size:28,color:e},e))})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'home',
    size: 24,
    color: colors.neutral[950]
  }
}`,...l.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '❖ System Icon Component',
  render: () => <IconGrid types={SYSTEM_ICONS} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '❖ Navigation Bar Item 아이콘',
  render: () => <IconGrid types={NAV_ICONS} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '사이즈',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 20
  }}>
      {[16, 20, 24, 32, 40].map(s => <div key={s} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }}>
          <Icon type="home" size={s} color={colors.neutral[950]} />
          <span style={{
        fontSize: 11,
        color: colors.neutral[700]
      }}>{s}px</span>
        </div>)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '색상',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 20
  }}>
      {[colors.neutral[950], colors.neutral[700], colors.blue[700], colors.red[700], colors.green[700]].map(c => <Icon key={c} type="noti" size={28} color={c} />)}
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Default`,`SystemIconSet`,`NavigationBarIconSet`,`AllSizes`,`Colors`]}))();export{m as AllSizes,h as Colors,l as Default,p as NavigationBarIconSet,f as SystemIconSet,g as __namedExportsOrder,c as default};