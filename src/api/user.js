import axios from '../utils/request'
import qs from 'qs'
// 用户签到
const userSign = () => axios.get('/user/fav')
// 基本设置的接口
const updateUserInfo = (data) => axios.post('/user/basic', data)
// 确认修改用户名
const updateUsername = (data) => axios.get('public/reset-email?' + qs.stringify(data))
export {
  userSign,
  updateUserInfo,
  updateUsername
}
