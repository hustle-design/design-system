import type { Meta, StoryObj } from '@storybook/react';
import { Icon, type IconType } from './Icon';
import { colors } from '../../tokens';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Figma "❖ System Icon Component"(node 19:419)와 "❖ Navigation Bar"(node 18:168)의 NavigationItem 아이콘을 통합한 아이콘 세트. 20x20 뷰박스, `color` prop으로 테마 가능.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [
        'blank', 'error', 'right', 'left', 'bottom', 'copy', 'noti', 'plus', 'more',
        'close', 'share', 'storageFill', 'storage', 'lock', 'camera',
        'search', 'home', 'setting', 'cart', 'menu', 'back', 'alarm',
      ] as IconType[],
    },
    size: { control: { type: 'number' } },
    color: { control: { type: 'color' } },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: { type: 'home', size: 24, color: colors.neutral[950] },
};

const SYSTEM_ICONS: IconType[] = [
  'blank', 'error', 'right', 'left', 'bottom', 'copy', 'noti', 'plus', 'more',
  'close', 'share', 'storageFill', 'storage', 'lock', 'camera',
];

const NAV_ICONS: IconType[] = ['search', 'home', 'setting', 'cart', 'menu', 'back', 'alarm', 'blank', 'share', 'close'];

function IconGrid({ types }: { types: IconType[] }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
      {types.map((t) => (
        <div
          key={t}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            width: 76,
            padding: '16px 8px',
            borderRadius: 12,
            background: colors.neutral[100],
          }}
        >
          <Icon type={t} size={24} color={colors.neutral[950]} />
          <span style={{ fontSize: 11, fontFamily: 'monospace', color: colors.neutral[700] }}>{t}</span>
        </div>
      ))}
    </div>
  );
}

export const SystemIconSet: Story = {
  name: '❖ System Icon Component',
  render: () => <IconGrid types={SYSTEM_ICONS} />,
};

export const NavigationBarIconSet: Story = {
  name: '❖ Navigation Bar Item 아이콘',
  render: () => <IconGrid types={NAV_ICONS} />,
};

export const AllSizes: Story = {
  name: '사이즈',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      {[16, 20, 24, 32, 40].map((s) => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <Icon type="home" size={s} color={colors.neutral[950]} />
          <span style={{ fontSize: 11, color: colors.neutral[700] }}>{s}px</span>
        </div>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  name: '색상',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      {[colors.neutral[950], colors.neutral[700], colors.blue[700], colors.red[700], colors.green[700]].map((c) => (
        <Icon key={c} type="noti" size={28} color={c} />
      ))}
    </div>
  ),
};
