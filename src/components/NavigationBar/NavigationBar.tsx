import type { ReactNode } from 'react';
import { Icon, type IconType } from '../Icon/Icon';
import { colors } from '../../tokens';

const fontFamily = 'Pretendard Variable, Pretendard, -apple-system, sans-serif';

export interface NavigationBarItemProps {
  /** 시스템 아이콘 타입. icon 대신 커스텀 노드를 쓰려면 icon prop을 생략하고 children으로 전달 */
  icon?: IconType;
  onClick?: () => void;
  'aria-label'?: string;
  children?: ReactNode;
}

/** Figma NavigationItem — 40x40 버튼, 10px 패딩, 20px 아이콘 (node 18:229 등) */
export function NavigationBarItem({ icon, onClick, children, ...rest }: NavigationBarItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: 40,
        height: 40,
        padding: 10,
        border: 'none',
        background: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        cursor: onClick ? 'pointer' : 'default',
        color: colors.neutral[1000],
      }}
      {...rest}
    >
      {icon ? <Icon type={icon} size={20} color={colors.neutral[1000]} /> : children}
    </button>
  );
}

export interface NavigationBarProps {
  /** 타이틀 텍스트 */
  title?: string;
  /** 왼쪽 아이콘 버튼. 생략하면 타이틀이 왼쪽 끝(20px)까지 붙는다 */
  leftItem?: ReactNode;
  /** 오른쪽 아이콘 버튼, 최대 3개 (Figma rightItem: none|1|2|3) */
  rightItems?: ReactNode[];
  className?: string;
}

/**
 * Figma "❖ Navigation Bar" (node 18:168) 재구현.
 * height 48px, padding-y 4px, bg white. leftItem 유무에 따라 좌측 패딩이 20px ↔ 10px로 바뀐다.
 */
export function NavigationBar({ title = 'Title', leftItem, rightItems = [], className }: NavigationBarProps) {
  const hasLeft = Boolean(leftItem);
  const hasRight = rightItems.length > 0;

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        height: 48,
        padding: `4px ${hasRight ? 10 : 10}px 4px ${hasLeft ? 10 : 20}px`,
        background: colors.neutral[0],
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {hasLeft && leftItem}
      <div
        style={{
          flex: 1,
          minWidth: 0,
          display: 'flex',
          alignItems: 'center',
          height: 40,
          paddingRight: hasRight ? 16 : 0,
          overflow: 'hidden',
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily,
            fontWeight: 700,
            fontSize: 18,
            lineHeight: 1,
            color: colors.neutral[1000],
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {title}
        </p>
      </div>
      {hasRight && rightItems.slice(0, 3).map((item, i) => <span key={i}>{item}</span>)}
    </div>
  );
}
