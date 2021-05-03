
// import h from './mysnabbdom/h';
// import patch from './mysnabbdom/patch';

// import {
//   init,
//   classModule,
//   propsModule,
//   styleModule,
//   eventListenersModule,
//   h,
// } from "snabbdom";


// 创建出 patch 函数
// const patch = init([
//   classModule,
//   propsModule,
//   styleModule,
//   eventListenersModule
// ])

import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const myVnode1 = h('ul', {}, [
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'D' }, 'D'),
  h('li', { key: 'E' }, 'E')
])
const container = document.getElementById('container')
// 第一次上树
patch(container, myVnode1)

const btn = document.getElementById('btn')
// 新节点
const myVnode2 = h('ul', {}, [
  h('li', { key: 'QQ' }, 'QQB'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'D' }, 'D'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'F' }, 'F'),
  h('li', { key: 'G' }, 'G')
])
btn.onclick = function () {
  patch(myVnode1, myVnode2)
}

