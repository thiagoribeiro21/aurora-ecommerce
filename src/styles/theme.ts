const theme = {
  colors: {
    primary: '#4a2c2a',
    secondary: '#F5F0E6',
    success: '#28a745',
    danger: '#dc3545',
    white: '#FFFFFF',
    black: '#000',
    text: '#333',
    // background: '#f4f4f4',
    gray: '#888',
    lightGray: '#f8f9fa',
  },
  fontSizes: {
    small: '0.875rem', // 14px
    medium: '1rem', // 16px
    mediumLarge: '1.125rem', // 18px
    large: '1.25rem', // 20px
    largeMedium: '1.5rem', // 24px
    superLarge: '2rem', // 32px
    extraLarge: '2.5rem', // 40px
    extraSuperLarge: '3rem', // 48px
  },
  fonts: {
    heading:
      "'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",
    body: "'Roboto', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
    accent: "'Lora', Georgia, 'Times New Roman', serif",
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    superLarge: '32px',
    extraLarge: '40px',
    sectionSpacing: '80px',
  },
};

export type ThemeType = typeof theme;

export default theme;
