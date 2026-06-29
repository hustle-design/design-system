import React from 'react';
import type { JSX } from 'react';
import { fontFamily, typography } from '../../tokens';

type Category = keyof typeof typography;
type Scale<C extends Category> = keyof (typeof typography)[C];

export interface TypographyProps<C extends Category = Category> {
  category: C;
  scale: Scale<C>;
  children: React.ReactNode;
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
  as: Tag = 'span' as keyof JSX.IntrinsicElements,
  color = '#1a1c20',
  className,
  style,
}: TypographyProps<C>) {
  const token = typography[category][scale as Scale<typeof category>] as {
    fontSize: number;
    fontWeight: number;
    lineHeight: string;
  };

  const El = Tag as React.ElementType;
  return (
    <El
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
    </El>
  );
}
