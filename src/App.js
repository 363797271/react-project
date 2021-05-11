import { useState, useEffect } from 'react'

function App() {
  function onScroll() {
    console.log('页面滚动了')
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const [count, setCount] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setCount(count + 1)
    }, 1000)

    return () => {
      clearInterval(t)
    }
  }, [])

  return (
    <div>App</div>
  );
}

export default App;
