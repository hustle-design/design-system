import React from 'react';
import { colors } from '../../tokens';

type ColorGroup = keyof typeof colors;

interface SwatchProps {
  hex: string;
  label: string;
}

function Swatch({ hex, label }: SwatchProps) {
  const isDark = isColorDark(hex);
  return (
    <div
      title={hex}
      style={{
        backgroundColor: hex,
        borderRadius: 8,
        padding: '12px 10px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        gap: 2,
        minHeight: 80,
        border: hex === '#ffffff' ? '1px solid #eeeff1' : undefined,
      }}
    >
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.5)',
          fontFamily: 'monospace',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: 10,
          fontFamily: 'monospace',
          color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.4)',
        }}
      >
        {hex}
      </span>
    </div>
  );
}

function isColorDark(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 128;
}

export interface ColorPaletteProps {
  /** 표시할 색상 그룹 */
  group?: ColorGroup | 'all';
}

export function ColorPalette({ group = 'all' }: ColorPaletteProps) {
  const groups = group === 'all'
    ? (Object.keys(colors) as ColorGroup[])
    : [group as ColorGroup];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {groups.map((g) => (
        <div key={g}>
          <p
            style={{
              fontFamily: 'sans-serif',
              fontSize: 12,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#868b94',
              marginBottom: 10,
            }}
          >
            {g}
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))',
              gap: 8,
            }}
          >
            {Object.entries(colors[g]).map(([step, hex]) => (
              <Swatch key={step} hex={hex as string} label={step} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
