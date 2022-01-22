const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: 'var(--color-bg-text)',
    heading: '#fff',
    text: '#fff',
    preFormattedText: '#000',
    link: '#1ED3C6',
  },
};

export { darkTheme };
