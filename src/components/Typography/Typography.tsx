import React from 'react';
import { fontFamily, typography } from '../../tokens';

type Category = keyof typeof typography;
type Scale<C extends Category> = keyof (typeof typography)[C];

export interface TypographyProps<C extends Category = Category> {
  /** 타이포그래피 카테고리 */
  category: C;
  /** 스케일 (카테고리 내 세부 항목) */
  scale: Scale<C>;
  /** 표시할 텍스트 */
  children: React.ReactNode;
  /** 렌더링할 HTML 태그 */
  as?: keyof JSX.IntrinsicElements;
  /** 텍스트 색상 */
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Typography<C extends Category>({
  category,
  scale,
  children,
  as: Tag = 'span',
  color = '#1a1c20',
  className,
  style,
}: TypographyProps<C>) {
  const token = typography[category][scale as Scale<typeof category>] as {
    fontSize: number;
    fontWeight: number;
    lineHeight: string;
  };

  return (
    <Tag
      className={className}
      style={{
        fontFamily,
        fontSize: token.fontSize,
        fontWeight: token.fontWeight,
        lineHeight: token.lineHeight,
        color,
        margin: 0,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
