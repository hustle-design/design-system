import type { Meta, StoryObj } from '@storybook/react';
import { ColorPalette } from './ColorPalette';

const meta: Meta<typeof ColorPalette> = {
  title: 'Foundation/ColorPalette',
  component: ColorPalette,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Figma에서 추출한 색상 팔레트. Neutral · Green · Red · Blue 4개 그룹.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    group: {
      control: { type: 'select' },
      options: ['all', 'neutral', 'green', 'red', 'blue'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPalette>;

export const All: Story = {
  name: '전체 팔레트',
  args: { group: 'all' },
};

export const Neutral: Story = {
  name: 'Neutral',
  args: { group: 'neutral' },
};

export const Green: Story = {
  name: 'Green',
  args: { group: 'green' },
};

export const Red: Story = {
  name: 'Red',
  args: { group: 'red' },
};

export const Blue: Story = {
  name: 'Blue',
  args: { group: 'blue' },
};
