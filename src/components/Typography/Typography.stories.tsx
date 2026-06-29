import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { typography } from '../../tokens';
import { Typography, type TypographyProps } from './Typography';

type TypographyStoryProps = TypographyProps<'heading'>;

const meta: Meta<TypographyStoryProps> = {
  title: 'Foundation/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Pretendard Variable 기반의 타이포그래피 스케일. Display · Heading · Body · Caption · Paragraph 5개 카테고리로 구성.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TypographyStoryProps>;

// ── Single token preview ──────────────────────────────────────
export const Default: Story = {
  args: {
    category: 'heading',
    scale: 'H1_Bold',
    children: '안녕하세요, 디자인 시스템입니다.',
  },
};

// ── Full scale table ──────────────────────────────────────────
const ROW_STYLE: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 24,
  padding: '12px 0',
  borderBottom: '1px solid #eeeff1',
};

const LABEL_STYLE: CSSProperties = {
  width: 200,
  fontFamily: 'monospace',
  fontSize: 11,
  color: '#868b94',
  flexShrink: 0,
};

const META_STYLE: CSSProperties = {
  width: 160,
  fontFamily: 'monospace',
  fontSize: 11,
  color: '#b1b3bb',
  flexShrink: 0,
};

type RowEntry = { category: keyof typeof typography; scale: string };

function buildRows(): RowEntry[] {
  const rows: RowEntry[] = [];
  (Object.keys(typography) as Array<keyof typeof typography>).forEach((cat) => {
    Object.keys(typography[cat]).forEach((scale) => {
      rows.push({ category: cat, scale });
    });
  });
  return rows;
}

export const AllScales: Story = {
  name: '전체 스케일',
  render: () => (
    <div style={{ fontFamily: 'sans-serif' }}>
      <div style={{ ...ROW_STYLE, borderBottom: '2px solid #1a1c20' }}>
        <span style={LABEL_STYLE}>Token</span>
        <span style={META_STYLE}>size / weight / lh</span>
        <span style={{ color: '#868b94', fontSize: 12 }}>Sample</span>
      </div>
      {buildRows().map(({ category, scale }) => {
        const token = typography[category][scale as never] as {
          fontSize: number; fontWeight: number; lineHeight: string;
        };
        return (
          <div key={`${category}.${scale}`} style={ROW_STYLE}>
            <span style={LABEL_STYLE}>{category}/{scale}</span>
            <span style={META_STYLE}>
              {token.fontSize}px · {token.fontWeight} · {token.lineHeight}
            </span>
            <Typography category={category} scale={scale as never}>
              가나다라마바사 ABCDEFG 123456
            </Typography>
          </div>
        );
      })}
    </div>
  ),
};

// ── Per-category stories ──────────────────────────────────────
export const Display: Story = {
  name: 'Display',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {Object.keys(typography.display).map((scale) => (
        <Typography key={scale} category="display" scale={scale as never}>
          {scale} — 디스플레이 타이포그래피
        </Typography>
      ))}
    </div>
  ),
};

export const Heading: Story = {
  name: 'Heading',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {Object.keys(typography.heading).map((scale) => (
        <Typography key={scale} category="heading" scale={scale as never}>
          {scale} — 헤딩 타이포그래피
        </Typography>
      ))}
    </div>
  ),
};

export const Body: Story = {
  name: 'Body',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {Object.keys(typography.body).map((scale) => (
        <Typography key={scale} category="body" scale={scale as never}>
          {scale} — 본문 텍스트 / Body typography sample
        </Typography>
      ))}
    </div>
  ),
};

export const Caption: Story = {
  name: 'Caption',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {Object.keys(typography.caption).map((scale) => (
        <Typography key={scale} category="caption" scale={scale as never}>
          {scale} — 캡션 텍스트 / Caption sample
        </Typography>
      ))}
    </div>
  ),
};
