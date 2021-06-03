// theme/components/content.js
// 文章内容样式配置

const content = {
  baseStyle: {
    bgColor: 'gray.200',
    mt: '40px',
    mx: 'auto'
  },
  sizes: {
    small: {
      fontSize: '12px',
      lineHeight: '18px',
      w: '30%',
      p: '10px'
    },
    large: {
      fontSize: '20px',
      lineHeight: '36px',
      w: '80%',
      p: '20px'
    }
  },
  variants: {
    solid: {
      border: '1px solid',
      borderColor: 'gray.800'
    },
    card: {
      boxShadow: 'md'
    }
  },
  defaultProps: {
    size: 'large',
    variant: 'solid'
  }
}

export default content
