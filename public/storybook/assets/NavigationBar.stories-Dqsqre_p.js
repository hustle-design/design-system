import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-DlEQIHMX.js";import{a as n,t as r}from"./tokens-qhb9cilZ.js";import{n as i,t as a}from"./Icon-bASt1V4l.js";function o({icon:e,onClick:t,children:r,...i}){return(0,c.jsx)(`button`,{type:`button`,onClick:t,style:{width:40,height:40,padding:10,border:`none`,background:`none`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,cursor:t?`pointer`:`default`,color:n.neutral[1e3]},...i,children:e?(0,c.jsx)(a,{type:e,size:20,color:n.neutral[1e3]}):r})}function s({title:e=`Title`,leftItem:t,rightItems:r=[],className:i}){let a=!!t,o=r.length>0;return(0,c.jsxs)(`div`,{className:i,style:{display:`flex`,alignItems:`center`,height:48,padding:`4px 10px 4px ${a?10:20}px`,background:n.neutral[0],width:`100%`,boxSizing:`border-box`},children:[a&&t,(0,c.jsx)(`div`,{style:{flex:1,minWidth:0,display:`flex`,alignItems:`center`,height:40,paddingRight:o?16:0,overflow:`hidden`},children:(0,c.jsx)(`p`,{style:{margin:0,fontFamily:l,fontWeight:700,fontSize:18,lineHeight:1,color:n.neutral[1e3],whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:e})}),o&&r.slice(0,3).map((e,t)=>(0,c.jsx)(`span`,{children:e},t))]})}var c,l,u=e((()=>{i(),r(),c=t(),l=`Pretendard Variable, Pretendard, -apple-system, sans-serif`,o.__docgenInfo={description:`Figma NavigationItem — 40x40 버튼, 10px 패딩, 20px 아이콘 (node 18:229 등)`,methods:[],displayName:`NavigationBarItem`,props:{icon:{required:!1,tsType:{name:`union`,raw:`| 'blank'
| 'error'
| 'right'
| 'left'
| 'bottom'
| 'copy'
| 'noti'
| 'plus'
| 'more'
| 'close'
| 'share'
| 'storageFill'
| 'storage'
| 'lock'
| 'camera'
| 'search'
| 'home'
| 'setting'
| 'cart'
| 'menu'
| 'back'
| 'alarm'`,elements:[{name:`literal`,value:`'blank'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'right'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'copy'`},{name:`literal`,value:`'noti'`},{name:`literal`,value:`'plus'`},{name:`literal`,value:`'more'`},{name:`literal`,value:`'close'`},{name:`literal`,value:`'share'`},{name:`literal`,value:`'storageFill'`},{name:`literal`,value:`'storage'`},{name:`literal`,value:`'lock'`},{name:`literal`,value:`'camera'`},{name:`literal`,value:`'search'`},{name:`literal`,value:`'home'`},{name:`literal`,value:`'setting'`},{name:`literal`,value:`'cart'`},{name:`literal`,value:`'menu'`},{name:`literal`,value:`'back'`},{name:`literal`,value:`'alarm'`}]},description:`시스템 아이콘 타입. icon 대신 커스텀 노드를 쓰려면 icon prop을 생략하고 children으로 전달`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}}},s.__docgenInfo={description:`Figma "❖ Navigation Bar" (node 18:168) 재구현.
height 48px, padding-y 4px, bg white. leftItem 유무에 따라 좌측 패딩이 20px ↔ 10px로 바뀐다.`,methods:[],displayName:`NavigationBar`,props:{title:{required:!1,tsType:{name:`string`},description:`타이틀 텍스트`,defaultValue:{value:`'Title'`,computed:!1}},leftItem:{required:!1,tsType:{name:`ReactNode`},description:`왼쪽 아이콘 버튼. 생략하면 타이틀이 왼쪽 끝(20px)까지 붙는다`},rightItems:{required:!1,tsType:{name:`Array`,elements:[{name:`ReactNode`}],raw:`ReactNode[]`},description:`오른쪽 아이콘 버튼, 최대 3개 (Figma rightItem: none|1|2|3)`,defaultValue:{value:`[]`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}}));function d({children:e}){return(0,f.jsx)(`div`,{style:{width:375,border:`1px solid ${n.neutral[300]}`,borderRadius:8,overflow:`hidden`},children:e})}var f,p,m,h,g,_,v,y;e((()=>{u(),r(),f=t(),p={title:`Components/NavigationBar`,component:s,parameters:{layout:`padded`,docs:{description:{component:`Figma "❖ Navigation Bar"(node 18:168) 재구현. leftItem(아이콘 버튼)과 rightItems(최대 3개)를 조합해 다양한 상단바를 구성한다. 아이콘은 Icon 컴포넌트를 사용한다.`}}},tags:[`autodocs`]},m={name:`leftItem: none / rightItem: none`,render:()=>(0,f.jsx)(d,{children:(0,f.jsx)(s,{title:`Title`})})},h={name:`leftItem: 1 / rightItem: none`,render:()=>(0,f.jsx)(d,{children:(0,f.jsx)(s,{title:`Title`,leftItem:(0,f.jsx)(o,{icon:`back`,"aria-label":`뒤로`})})})},g={name:`leftItem: none / rightItem: 1`,render:()=>(0,f.jsx)(d,{children:(0,f.jsx)(s,{title:`Title`,rightItems:[(0,f.jsx)(o,{icon:`close`,"aria-label":`닫기`},`close`)]})})},_={name:`leftItem: 1 / rightItem: 3`,render:()=>(0,f.jsx)(d,{children:(0,f.jsx)(s,{title:`Title`,leftItem:(0,f.jsx)(o,{icon:`back`,"aria-label":`뒤로`}),rightItems:[(0,f.jsx)(o,{icon:`search`,"aria-label":`검색`},`search`),(0,f.jsx)(o,{icon:`share`,"aria-label":`공유`},`share`),(0,f.jsx)(o,{icon:`more`,"aria-label":`더보기`},`more`)]})})},v={name:`실제 활용 예시`,render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{style:{fontSize:12,color:n.neutral[700],marginBottom:8},children:`상품 상세 (뒤로 + 공유 + 장바구니)`}),(0,f.jsx)(d,{children:(0,f.jsx)(s,{title:`상품 상세`,leftItem:(0,f.jsx)(o,{icon:`back`,"aria-label":`뒤로`}),rightItems:[(0,f.jsx)(o,{icon:`share`,"aria-label":`공유`},`share`),(0,f.jsx)(o,{icon:`cart`,"aria-label":`장바구니`},`cart`)]})})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{style:{fontSize:12,color:n.neutral[700],marginBottom:8},children:`홈 (검색 + 알림 + 메뉴)`}),(0,f.jsx)(d,{children:(0,f.jsx)(s,{title:`홈`,rightItems:[(0,f.jsx)(o,{icon:`search`,"aria-label":`검색`},`search`),(0,f.jsx)(o,{icon:`alarm`,"aria-label":`알림`},`alarm`),(0,f.jsx)(o,{icon:`menu`,"aria-label":`메뉴`},`menu`)]})})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{style:{fontSize:12,color:n.neutral[700],marginBottom:8},children:`모달 상단 (닫기만)`}),(0,f.jsx)(d,{children:(0,f.jsx)(s,{title:`필터`,rightItems:[(0,f.jsx)(o,{icon:`close`,"aria-label":`닫기`},`close`)]})})]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'leftItem: none / rightItem: none',
  render: () => <Frame>
      <NavigationBar title="Title" />
    </Frame>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'leftItem: 1 / rightItem: none',
  render: () => <Frame>
      <NavigationBar title="Title" leftItem={<NavigationBarItem icon="back" aria-label="뒤로" />} />
    </Frame>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'leftItem: none / rightItem: 1',
  render: () => <Frame>
      <NavigationBar title="Title" rightItems={[<NavigationBarItem key="close" icon="close" aria-label="닫기" />]} />
    </Frame>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'leftItem: 1 / rightItem: 3',
  render: () => <Frame>
      <NavigationBar title="Title" leftItem={<NavigationBarItem icon="back" aria-label="뒤로" />} rightItems={[<NavigationBarItem key="search" icon="search" aria-label="검색" />, <NavigationBarItem key="share" icon="share" aria-label="공유" />, <NavigationBarItem key="more" icon="more" aria-label="더보기" />]} />
    </Frame>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '실제 활용 예시',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <div>
        <p style={{
        fontSize: 12,
        color: colors.neutral[700],
        marginBottom: 8
      }}>상품 상세 (뒤로 + 공유 + 장바구니)</p>
        <Frame>
          <NavigationBar title="상품 상세" leftItem={<NavigationBarItem icon="back" aria-label="뒤로" />} rightItems={[<NavigationBarItem key="share" icon="share" aria-label="공유" />, <NavigationBarItem key="cart" icon="cart" aria-label="장바구니" />]} />
        </Frame>
      </div>
      <div>
        <p style={{
        fontSize: 12,
        color: colors.neutral[700],
        marginBottom: 8
      }}>홈 (검색 + 알림 + 메뉴)</p>
        <Frame>
          <NavigationBar title="홈" rightItems={[<NavigationBarItem key="search" icon="search" aria-label="검색" />, <NavigationBarItem key="alarm" icon="alarm" aria-label="알림" />, <NavigationBarItem key="menu" icon="menu" aria-label="메뉴" />]} />
        </Frame>
      </div>
      <div>
        <p style={{
        fontSize: 12,
        color: colors.neutral[700],
        marginBottom: 8
      }}>모달 상단 (닫기만)</p>
        <Frame>
          <NavigationBar title="필터" rightItems={[<NavigationBarItem key="close" icon="close" aria-label="닫기" />]} />
        </Frame>
      </div>
    </div>
}`,...v.parameters?.docs?.source},description:{story:`실제 화면에서 조합해 쓰는 예시 — Icon + NavigationBar를 함께 활용한 3가지 대표 패턴`,...v.parameters?.docs?.description}}},y=[`TitleOnly`,`BackWithTitle`,`TitleWithOneRight`,`BackWithThreeRight`,`RealWorldUsage`]}))();export{_ as BackWithThreeRight,h as BackWithTitle,v as RealWorldUsage,m as TitleOnly,g as TitleWithOneRight,y as __namedExportsOrder,p as default};