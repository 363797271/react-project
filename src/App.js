import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

const PrimaryDiv = styled.div`
  color: ${props => props.theme.colors.primary}
`

const primaryColor = theme => ({
  color: theme.colors.primary
})

function App() {
  const theme = useTheme()
  return (
    <div>
    <PrimaryDiv>样式化组件</PrimaryDiv>
      <div css={primaryColor}>向css属性传递一个函数</div>
      <div css={{color: theme.colors.primary}}>使用钩子函数</div>
    </div>
  )
}
export default App
