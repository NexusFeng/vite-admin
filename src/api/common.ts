import request from '@/utils/request';

// interface ResponseData<T = any> {
//   status: number
//   msg: string
//   data: T
// }

export const getLoginInfo = () => {
  return request<{
      logo_square: string
      logo_rectangle: string
      login_logo: string
      slide: string[]
    }>({
    method: 'GET',
    url: '/login/info',
  })
  // return request.get<{
  //   status: number
  //   msg: string
  //   data: {
  //     logo_square: string
  //     slide: string[]
  //   }
  // }>('/login/info')
  // return request.get<ResponseData<{
  //   logo_square: string
  //   logo_rectangle: string
  //   login_logo: string
  //   slide: string[]
  // }>>('/login/info')
}