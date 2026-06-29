export const fontFamily = 'Pretendard Variable, Pretendard, -apple-system, sans-serif';

export const typography = {
  display: {
    D1_Bold: { fontSize: 36, fontWeight: 700, lineHeight: '150%' },
    D2_Bold: { fontSize: 32, fontWeight: 700, lineHeight: '145%' },
  },
  heading: {
    H1_Bold:    { fontSize: 28, fontWeight: 700, lineHeight: '140%' },
    H2_Bold:    { fontSize: 26, fontWeight: 700, lineHeight: '140%' },
    H3_Bold:    { fontSize: 24, fontWeight: 700, lineHeight: '140%' },
    H4_Bold:    { fontSize: 22, fontWeight: 700, lineHeight: '140%' },
    H5_Bold:    { fontSize: 20, fontWeight: 700, lineHeight: '135%' },
    H1_SemiBold: { fontSize: 24, fontWeight: 600, lineHeight: '140%' },
  },
  body: {
    B1_Medium: { fontSize: 18, fontWeight: 500, lineHeight: '125%' },
    B2_Medium: { fontSize: 16, fontWeight: 500, lineHeight: '125%' },
    B3_Medium: { fontSize: 15, fontWeight: 500, lineHeight: '125%' },
    B4_Medium: { fontSize: 14, fontWeight: 500, lineHeight: '125%' },
    B5_Medium: { fontSize: 13, fontWeight: 500, lineHeight: '125%' },
    B6_Medium: { fontSize: 12, fontWeight: 500, lineHeight: '125%' },
    B7_Medium: { fontSize: 11, fontWeight: 500, lineHeight: '125%' },
  },
  caption: {
    C1_Medium:  { fontSize: 12, fontWeight: 500, lineHeight: '140%' },
    C2_Medium:  { fontSize: 11, fontWeight: 500, lineHeight: '140%' },
    C3_Medium:  { fontSize: 10, fontWeight: 500, lineHeight: '140%' },
    C1_Regular: { fontSize: 12, fontWeight: 400, lineHeight: '140%' },
    C2_Regular: { fontSize: 11, fontWeight: 400, lineHeight: '140%' },
    C3_Regular: { fontSize: 10, fontWeight: 400, lineHeight: '140%' },
  },
  paragraph: {
    P1_Medium:  { fontSize: 16, fontWeight: 500, lineHeight: '140%' },
    P2_Medium:  { fontSize: 15, fontWeight: 500, lineHeight: '150%' },
    P3_Medium:  { fontSize: 14, fontWeight: 500, lineHeight: '150%' },
    P4_Medium:  { fontSize: 13, fontWeight: 500, lineHeight: '150%' },
    P1_Regular: { fontSize: 16, fontWeight: 400, lineHeight: '140%' },
    P2_Regular: { fontSize: 15, fontWeight: 400, lineHeight: '140%' },
    P3_Regular: { fontSize: 14, fontWeight: 400, lineHeight: '140%' },
    P4_Regular: { fontSize: 13, fontWeight: 400, lineHeight: '140%' },
  },
} as const;

export type TypographyScale = typeof typography;
