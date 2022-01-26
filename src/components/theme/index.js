const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: 'var(--color-bg-text)',
  },
};

export { darkTheme };
