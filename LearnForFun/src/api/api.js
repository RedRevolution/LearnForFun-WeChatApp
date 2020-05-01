import { wxRequest } from './wxRequest';

let env = "-test" //-dev 或者 -test
// const apiMall = 'https://sujiefs.com/'
const apiMall = 'http://114.115.142.227:80'
// 获取学号
const getUserInfo = (params) => wxRequest(params, apiMall + '/api/user');


//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/api/wechat/jscode2session");