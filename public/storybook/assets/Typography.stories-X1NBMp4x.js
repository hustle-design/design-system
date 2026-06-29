import{i as e}from"./preload-helper-CT_b8DTk.js";import{nt as t,t as n}from"./iframe-DGhWBC1_.js";import{i as r,n as i,t as a}from"./tokens-DJ9QuwBI.js";function o({category:e,scale:t,children:n,as:a=`span`,color:o=`#1a1c20`,className:c,style:l}){let u=r[e][t];return(0,s.jsx)(a,{className:c,style:{fontFamily:i,fontSize:u.fontSize,fontWeight:u.fontWeight,lineHeight:u.lineHeight,color:o,margin:0,...l},children:n})}var s,c=e((()=>{t(),a(),s=n(),o.__docgenInfo={description:``,methods:[],displayName:`Typography`,props:{category:{required:!0,tsType:{name:`C`},description:``},scale:{required:!0,tsType:{name:`unknown`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},as:{required:!1,tsType:{name:`JSX.IntrinsicElements`},description:``,defaultValue:{value:`'span'`,computed:!1}},color:{required:!1,tsType:{name:`string`},description:`텍스트 색상`,defaultValue:{value:`'#1a1c20'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``}}}}));function l(){let e=[];return Object.keys(r).forEach(t=>{Object.keys(r[t]).forEach(n=>{e.push({category:t,scale:n})})}),e}var u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{a(),c(),u=n(),d={title:`Foundation/Typography`,component:o,parameters:{layout:`padded`,docs:{description:{component:`Pretendard Variable 기반의 타이포그래피 스케일. Display · Heading · Body · Caption · Paragraph 5개 카테고리로 구성.`}}},tags:[`autodocs`]},f={args:{category:`heading`,scale:`H1_Bold`,children:`안녕하세요, 디자인 시스템입니다.`}},p={display:`flex`,alignItems:`center`,gap:24,padding:`12px 0`,borderBottom:`1px solid #eeeff1`},m={width:200,fontFamily:`monospace`,fontSize:11,color:`#868b94`,flexShrink:0},h={width:160,fontFamily:`monospace`,fontSize:11,color:`#b1b3bb`,flexShrink:0},g={name:`전체 스케일`,render:()=>(0,u.jsxs)(`div`,{style:{fontFamily:`sans-serif`},children:[(0,u.jsxs)(`div`,{style:{...p,borderBottom:`2px solid #1a1c20`},children:[(0,u.jsx)(`span`,{style:m,children:`Token`}),(0,u.jsx)(`span`,{style:h,children:`size / weight / lh`}),(0,u.jsx)(`span`,{style:{color:`#868b94`,fontSize:12},children:`Sample`})]}),l().map(({category:e,scale:t})=>{let n=r[e][t];return(0,u.jsxs)(`div`,{style:p,children:[(0,u.jsxs)(`span`,{style:m,children:[e,`/`,t]}),(0,u.jsxs)(`span`,{style:h,children:[n.fontSize,`px · `,n.fontWeight,` · `,n.lineHeight]}),(0,u.jsx)(o,{category:e,scale:t,children:`가나다라마바사 ABCDEFG 123456`})]},`${e}.${t}`)})]})},_={name:`Display`,render:()=>(0,u.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:Object.keys(r.display).map(e=>(0,u.jsxs)(o,{category:`display`,scale:e,children:[e,` — 디스플레이 타이포그래피`]},e))})},v={name:`Heading`,render:()=>(0,u.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:Object.keys(r.heading).map(e=>(0,u.jsxs)(o,{category:`heading`,scale:e,children:[e,` — 헤딩 타이포그래피`]},e))})},y={name:`Body`,render:()=>(0,u.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:Object.keys(r.body).map(e=>(0,u.jsxs)(o,{category:`body`,scale:e,children:[e,` — 본문 텍스트 / Body typography sample`]},e))})},b={name:`Caption`,render:()=>(0,u.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:6},children:Object.keys(r.caption).map(e=>(0,u.jsxs)(o,{category:`caption`,scale:e,children:[e,` — 캡션 텍스트 / Caption sample`]},e))})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    category: 'heading',
    scale: 'H1_Bold',
    children: '안녕하세요, 디자인 시스템입니다.'
  }
}`,...f.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '전체 스케일',
  render: () => <div style={{
    fontFamily: 'sans-serif'
  }}>
      <div style={{
      ...ROW_STYLE,
      borderBottom: '2px solid #1a1c20'
    }}>
        <span style={LABEL_STYLE}>Token</span>
        <span style={META_STYLE}>size / weight / lh</span>
        <span style={{
        color: '#868b94',
        fontSize: 12
      }}>Sample</span>
      </div>
      {buildRows().map(({
      category,
      scale
    }) => {
      const token = typography[category][scale as never] as {
        fontSize: number;
        fontWeight: number;
        lineHeight: string;
      };
      return <div key={\`\${category}.\${scale}\`} style={ROW_STYLE}>
            <span style={LABEL_STYLE}>{category}/{scale}</span>
            <span style={META_STYLE}>
              {token.fontSize}px · {token.fontWeight} · {token.lineHeight}
            </span>
            <Typography category={category} scale={scale as never}>
              가나다라마바사 ABCDEFG 123456
            </Typography>
          </div>;
    })}
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Display',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {Object.keys(typography.display).map(scale => <Typography key={scale} category="display" scale={scale as never}>
          {scale} — 디스플레이 타이포그래피
        </Typography>)}
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Heading',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      {Object.keys(typography.heading).map(scale => <Typography key={scale} category="heading" scale={scale as never}>
          {scale} — 헤딩 타이포그래피
        </Typography>)}
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Body',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      {Object.keys(typography.body).map(scale => <Typography key={scale} category="body" scale={scale as never}>
          {scale} — 본문 텍스트 / Body typography sample
        </Typography>)}
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Caption',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 6
  }}>
      {Object.keys(typography.caption).map(scale => <Typography key={scale} category="caption" scale={scale as never}>
          {scale} — 캡션 텍스트 / Caption sample
        </Typography>)}
    </div>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`AllScales`,`Display`,`Heading`,`Body`,`Caption`]}))();export{g as AllScales,y as Body,b as Caption,f as Default,_ as Display,v as Heading,x as __namedExportsOrder,d as default};