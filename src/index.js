import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// import React from 'react'
// import ReactDOM from 'react-dom'

// let state = []
// let setters = [] // 存储设置状态值的方法
// let stateIndex = 0

// function createSetter(index) {
//   return function(newState) {
//     if (typeof newState === 'function') {
//       // 如果传入的是回调函数
//       state[index] = newState(state[index])
//     } else {
//       state[index] = newState
//     }

//     // 在状态更改完成后，重新渲染视图
//     render()
//   }
// }

// function useState(initialState) {
//   state[stateIndex] = state[stateIndex] ? state[stateIndex] : initialState

//   if (!setters[stateIndex]) {
//     // 错误：直接保存一个 set 方法，方法中使用 stateIndex 会采用最终的值
//     // setters.push(function(newState) {
//     //   state[stateIndex] = newState
//     //   render()
//     // })

//     // 正确：声明一个函数，采用闭包的方式，保存各自状态的 index
//     setters.push(createSetter(stateIndex))
//   }


//   const value = state[stateIndex]
//   const setter = setters[stateIndex]

//   stateIndex++

//   return [value, setter]
// }

// function render() {
//   // 重置 index
//   stateIndex = 0
//   ReactDOM.render(<App />, document.getElementById('root'))
// }

// function App() {
//   const [count, setCount] = useState(0)
//   const [name, setName] = useState('张三')

//   return (
//     <div>
//       {count}
//       <button onClick={() => setCount(count => count + 1)}>setCount</button>
//       <br/>
//       {name}
//       <button onClick={() => setName('李四')}>setName</button>
//     </div>
//   )
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
