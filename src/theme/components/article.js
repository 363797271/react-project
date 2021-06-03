// theme/components/article.js
// 文章样式配置

const article = {
  parts: ['article', 'title', 'content'],
  baseStyle: {
    article: {
      mt: '40px',
      mx: 'auto'
    },
    title: {
      textAlign: 'center',
      fontFamily: 'Microsoft YaHei'
    },
    content: {
      fontFamily: 'sans-serif'
    }
  },
  sizes: {
    small: {
      article: {
        w: '50%',
        p: '5px'
      },
      title: {
        my: '10px'
      },
      content: {
        lineHeight: '1.2em'
      }
    },
    large: {
      article: {
        w: '80%',
        p: '20px'
      },
      title: {
        my: '20px'
      },
      content: {
        lineHeight: '1.8em'
      }
    }
  },
  variants: {
    solid: {
      article: {
        border: '1px solid',
        borderColor: 'gray.800'
      }
    },
    card: {
      article: {
        boxShadow: 'md',
      }
    }
  },
  defaultProps: {
    size: 'large',
    variant: 'solid'
  }
}

export default article
