import wepy from 'wepy'

export default class wxCommon extends wepy.mixin{

  data = {
    userInfo: null,
    url: 'https://learn.wsscloud.cn',
    app: 'appname'
  }

    // 用户特有的请求头部token
  userRequest(url, method, data, cb) {
    const that = this
    wepy.request({
      url: that.url + url,
      method: method,
      data: data,
      header: {
        'Token': wepy.getStorageSync('token'),
        'Cookie': wepy.getStorageSync('cookie')
      }
    }).then((res) => {
      console.log(res.data)
      if (res.header['Set-Cookie'] != null) {
        wepy.setStorageSync('cookie', res.header['Set-Cookie'])
      }
      cb(res)
    })
  }

  checkNum(number) {
    //学号必须全都是数字
    let numReg = /(^1[1|2|3|4|5|6|7|8|9|0]\d{6}$)|(^09\d{7}$)/
    // 学号
    if (!numReg.test(number)) {
      return false
    } else {
      return true
    }

  }

}