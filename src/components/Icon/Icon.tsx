import type { SVGProps } from 'react';

/**
 * Figma "❖ System Icon Component" (node 19:419)와
 * "❖ Navigation Bar" (node 18:168) 의 NavigationItem 아이콘을 통합한 세트.
 * 모든 아이콘은 20x20 뷰박스, 단일 color(기본 Gray 950 #2a3038)로 테마 가능하게 설계했다.
 */
export type IconType =
  | 'blank'
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
  | 'alarm';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'viewBox'> {
  type: IconType;
  size?: number;
  color?: string;
}

export function Icon({ type, size = 20, color = '#2a3038', ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {renderIconContent(type, color)}
    </svg>
  );
}

function renderIconContent(type: IconType, c: string) {
  const stroke = { stroke: c, strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  switch (type) {
    // Figma에서 실제로 추출한 벡터 (node 19:475, viewfinder 코너 브래킷)
    case 'blank':
      return (
        <g fill={c}>
          <path d="M7.52 1.84C7.52 1.38 7.9 1 8.36 1h3.26c.46 0 .84.38.84.84s-.38.84-.84.84H8.36c-.46 0-.84-.38-.84-.84Z" />
          <path d="M5.94 1.83c.01.46-.35.85-.81.86-.8.03-1.13.09-1.37.21l-.01.01c-.36.18-.66.48-.86.87-.12.24-.19.57-.21 1.36-.01.47-.4.83-.86.81-.47-.01-.83-.4-.82-.86.02-.8.08-1.48.39-2.09l.01-.01c.35-.67.9-1.24 1.6-1.59.6-.31 1.29-.37 2.08-.39.47-.01.85.35.87.82Z" />
          <path d="M14.05 1.83c.01-.47.4-.83.87-.82.79.02 1.47.08 2.08.39.7.35 1.24.92 1.6 1.59v.01c.31.61.37 1.29.4 2.09.01.46-.35.85-.81.86-.47.01-.85-.35-.87-.82-.02-.79-.09-1.13-.21-1.36-.2-.39-.5-.68-.86-.86l-.01-.01c-.24-.12-.57-.19-1.36-.21-.47-.01-.85-.4-.83-.86Z" />
          <path d="M1.84 7.52c.46 0 .84.38.84.84v3.26c0 .46-.38.84-.84.84s-.84-.38-.84-.84V8.36c0-.46.38-.84.84-.84Z" />
          <path d="M18.15 7.52c.46 0 .84.38.84.84v3.26c0 .46-.38.84-.84.84s-.84-.38-.84-.84V8.36c0-.46.38-.84.84-.84Z" />
          <path d="M18.19 14.05c.46.01.83.4.82.86-.02.8-.08 1.48-.39 2.09l-.01.01c-.35.67-.9 1.23-1.59 1.59-.6.31-1.29.37-2.08.39-.47.01-.85-.35-.87-.82-.01-.46.35-.85.81-.86.8-.02 1.13-.09 1.37-.21l.01-.01c.36-.18.66-.48.86-.87.12-.24.19-.57.21-1.36.01-.46.4-.83.86-.81Z" />
          <path d="M1.81 14.06c.46-.01.85.35.87.82.02.8.09 1.13.21 1.36l.01.01c.2.39.5.68.86.86.24.12.57.19 1.36.21.47.01.85.4.83.86-.01.46-.4.83-.87.82-.79-.02-1.47-.08-2.08-.39l-.01-.01c-.67-.35-1.22-.9-1.53-1.6-.31-.61-.37-1.29-.39-2.08-.01-.46.35-.85.81-.86Z" />
          <path d="M7.52 18.15c0-.47.38-.84.84-.84h3.26c.46 0 .84.38.84.84s-.38.84-.84.84H8.36c-.46 0-.84-.38-.84-.84Z" />
        </g>
      );

    case 'error':
      return (
        <>
          <circle cx="10" cy="10" r="8" fill="none" {...stroke} />
          <line x1="10" y1="6.2" x2="10" y2="11" {...stroke} />
          <circle cx="10" cy="14" r="0.95" fill={c} />
        </>
      );

    case 'right':
      return <path d="M7.5 4.5 13 10l-5.5 5.5" fill="none" {...stroke} />;

    case 'left':
      return <path d="M12.5 4.5 7 10l5.5 5.5" fill="none" {...stroke} />;

    case 'bottom':
      return <path d="M4.5 7.5 10 13l5.5-5.5" fill="none" {...stroke} />;

    case 'copy':
      return (
        <>
          <rect x="7.25" y="7.25" width="9.25" height="9.25" rx="1.5" fill="none" {...stroke} />
          <path d="M13.75 7.25v-2.5A1.5 1.5 0 0 0 12.25 3.25h-7.5a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h2.5" fill="none" {...stroke} />
        </>
      );

    case 'noti':
      return (
        <>
          <path d="M5 8.2C5 5.6 7.2 3.5 10 3.5s5 2.1 5 4.7c0 2.55.53 4 1.13 4.85.34.48-.02 1.15-.6 1.15H4.47c-.58 0-.94-.67-.6-1.15C4.47 12.2 5 10.75 5 8.2Z" fill="none" {...stroke} />
          <path d="M8.3 16.2a1.9 1.9 0 0 0 3.4 0" fill="none" {...stroke} />
        </>
      );

    case 'plus':
      return (
        <>
          <line x1="10" y1="4" x2="10" y2="16" {...stroke} />
          <line x1="4" y1="10" x2="16" y2="10" {...stroke} />
        </>
      );

    case 'more':
      return (
        <g fill={c}>
          <circle cx="4.5" cy="10" r="1.5" />
          <circle cx="10" cy="10" r="1.5" />
          <circle cx="15.5" cy="10" r="1.5" />
        </g>
      );

    case 'close':
      return (
        <>
          <line x1="5" y1="5" x2="15" y2="15" {...stroke} />
          <line x1="15" y1="5" x2="5" y2="15" {...stroke} />
        </>
      );

    case 'share':
      return (
        <>
          <path d="M10 13V3.3" fill="none" {...stroke} />
          <path d="M6.5 6.8 10 3.3l3.5 3.5" fill="none" {...stroke} />
          <path d="M4.5 10v4.5a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5V10" fill="none" {...stroke} />
        </>
      );

    case 'storageFill':
      return (
        <g fill={c}>
          <rect x="2.5" y="2.5" width="6.5" height="6.5" rx="1.2" />
          <rect x="11" y="2.5" width="6.5" height="6.5" rx="1.2" />
          <rect x="2.5" y="11" width="6.5" height="6.5" rx="1.2" />
          <rect x="11" y="11" width="6.5" height="6.5" rx="1.2" />
        </g>
      );

    case 'storage':
      return (
        <g fill="none" {...stroke}>
          <rect x="2.5" y="2.5" width="6.5" height="6.5" rx="1.2" />
          <rect x="11" y="2.5" width="6.5" height="6.5" rx="1.2" />
          <rect x="2.5" y="11" width="6.5" height="6.5" rx="1.2" />
          <rect x="11" y="11" width="6.5" height="6.5" rx="1.2" />
        </g>
      );

    case 'lock':
      return (
        <>
          <rect x="4" y="9" width="12" height="8" rx="1.8" fill="none" {...stroke} />
          <path d="M6.5 9V6.5a3.5 3.5 0 0 1 7 0V9" fill="none" {...stroke} />
          <circle cx="10" cy="13" r="1.1" fill={c} />
        </>
      );

    case 'camera':
      return (
        <>
          <path
            d="M4 7a2 2 0 0 1 2-2h1.2l.9-1.5A2 2 0 0 1 9.8 2.5h.4a2 2 0 0 1 1.7 1L12.8 5H14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z"
            fill="none"
            {...stroke}
          />
          <circle cx="10" cy="11" r="3" fill="none" {...stroke} />
        </>
      );

    case 'search':
      return (
        <>
          <circle cx="9" cy="9" r="5.5" fill="none" {...stroke} />
          <line x1="13.2" y1="13.2" x2="17" y2="17" {...stroke} />
        </>
      );

    case 'home':
      return (
        <>
          <path d="M3.5 9.5 10 4l6.5 5.5" fill="none" {...stroke} />
          <path d="M5.5 8.5V16a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V8.5" fill="none" {...stroke} />
          <path d="M8 17v-4h4v4" fill="none" {...stroke} />
        </>
      );

    case 'setting':
      return (
        <>
          <circle cx="10" cy="10" r="2.6" fill="none" {...stroke} />
          <path
            d="M10 3.5v1.6M10 14.9v1.6M16.5 10h-1.6M5.1 10H3.5M14.6 5.4l-1.1 1.1M6.5 13.5l-1.1 1.1M14.6 14.6l-1.1-1.1M6.5 6.5 5.4 5.4"
            {...stroke}
          />
        </>
      );

    case 'cart':
      return (
        <>
          <path d="M3.5 5h2l1.6 8.4a1.5 1.5 0 0 0 1.5 1.2h5.9a1.5 1.5 0 0 0 1.47-1.2L17 7.5H6" fill="none" {...stroke} />
          <circle cx="8.5" cy="17" r="1.1" fill={c} />
          <circle cx="14.5" cy="17" r="1.1" fill={c} />
        </>
      );

    case 'menu':
      return (
        <>
          <line x1="3.5" y1="6" x2="16.5" y2="6" {...stroke} />
          <line x1="3.5" y1="10" x2="16.5" y2="10" {...stroke} />
          <line x1="3.5" y1="14" x2="16.5" y2="14" {...stroke} />
        </>
      );

    case 'back':
      return <path d="M12.5 4.5 7 10l5.5 5.5" fill="none" {...stroke} />;

    case 'alarm':
      return (
        <>
          <path d="M5 8.2C5 5.6 7.2 3.5 10 3.5s5 2.1 5 4.7c0 2.55.53 4 1.13 4.85.34.48-.02 1.15-.6 1.15H4.47c-.58 0-.94-.67-.6-1.15C4.47 12.2 5 10.75 5 8.2Z" fill="none" {...stroke} />
          <path d="M8.3 16.2a1.9 1.9 0 0 0 3.4 0" fill="none" {...stroke} />
        </>
      );

    default:
      return null;
  }
}
