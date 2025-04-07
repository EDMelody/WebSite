import { MockMethod }  from 'vite-plugin-mock'

export default [
  {
    url: '/api/getMenuList',
    method: 'get',
    response: () => {
      return [
        {name: '11'}
      ]
    }
  }
] as MockMethod[] // 定义数据格式