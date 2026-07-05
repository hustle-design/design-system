import type { Meta, StoryObj } from '@storybook/react';
import { NavigationBar, NavigationBarItem } from './NavigationBar';
import { colors } from '../../tokens';

const meta: Meta<typeof NavigationBar> = {
  title: 'Components/NavigationBar',
  component: NavigationBar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Figma "❖ Navigation Bar"(node 18:168) 재구현. leftItem(아이콘 버튼)과 rightItems(최대 3개)를 조합해 다양한 상단바를 구성한다. 아이콘은 Icon 컴포넌트를 사용한다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavigationBar>;

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: 375, border: `1px solid ${colors.neutral[300]}`, borderRadius: 8, overflow: 'hidden' }}>
      {children}
    </div>
  );
}

export const TitleOnly: Story = {
  name: 'leftItem: none / rightItem: none',
  render: () => (
    <Frame>
      <NavigationBar title="Title" />
    </Frame>
  ),
};

export const BackWithTitle: Story = {
  name: 'leftItem: 1 / rightItem: none',
  render: () => (
    <Frame>
      <NavigationBar title="Title" leftItem={<NavigationBarItem icon="back" aria-label="뒤로" />} />
    </Frame>
  ),
};

export const TitleWithOneRight: Story = {
  name: 'leftItem: none / rightItem: 1',
  render: () => (
    <Frame>
      <NavigationBar title="Title" rightItems={[<NavigationBarItem key="close" icon="close" aria-label="닫기" />]} />
    </Frame>
  ),
};

export const BackWithThreeRight: Story = {
  name: 'leftItem: 1 / rightItem: 3',
  render: () => (
    <Frame>
      <NavigationBar
        title="Title"
        leftItem={<NavigationBarItem icon="back" aria-label="뒤로" />}
        rightItems={[
          <NavigationBarItem key="search" icon="search" aria-label="검색" />,
          <NavigationBarItem key="share" icon="share" aria-label="공유" />,
          <NavigationBarItem key="more" icon="more" aria-label="더보기" />,
        ]}
      />
    </Frame>
  ),
};

/** 실제 화면에서 조합해 쓰는 예시 — Icon + NavigationBar를 함께 활용한 3가지 대표 패턴 */
export const RealWorldUsage: Story = {
  name: '실제 활용 예시',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <p style={{ fontSize: 12, color: colors.neutral[700], marginBottom: 8 }}>상품 상세 (뒤로 + 공유 + 장바구니)</p>
        <Frame>
          <NavigationBar
            title="상품 상세"
            leftItem={<NavigationBarItem icon="back" aria-label="뒤로" />}
            rightItems={[
              <NavigationBarItem key="share" icon="share" aria-label="공유" />,
              <NavigationBarItem key="cart" icon="cart" aria-label="장바구니" />,
            ]}
          />
        </Frame>
      </div>
      <div>
        <p style={{ fontSize: 12, color: colors.neutral[700], marginBottom: 8 }}>홈 (검색 + 알림 + 메뉴)</p>
        <Frame>
          <NavigationBar
            title="홈"
            rightItems={[
              <NavigationBarItem key="search" icon="search" aria-label="검색" />,
              <NavigationBarItem key="alarm" icon="alarm" aria-label="알림" />,
              <NavigationBarItem key="menu" icon="menu" aria-label="메뉴" />,
            ]}
          />
        </Frame>
      </div>
      <div>
        <p style={{ fontSize: 12, color: colors.neutral[700], marginBottom: 8 }}>모달 상단 (닫기만)</p>
        <Frame>
          <NavigationBar title="필터" rightItems={[<NavigationBarItem key="close" icon="close" aria-label="닫기" />]} />
        </Frame>
      </div>
    </div>
  ),
};
