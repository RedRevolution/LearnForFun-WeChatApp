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
  //从id中格式化提取时间字符串
  timeFormat(id){
    let format = id.substr(1,4)+'-'+id.substr(5,2)+'-'+id.substr(7,2)
    return format
  }

  

  chatFormatTime() {
    const formatNumber = n => {
      n = n.toString()
      return n[1] ? n : '0' + n
    }
    let date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    
    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
   }

   //把utf16的emoji表情字符进行转码成八进制的字符
   utf16toEntities(str) {
    var patt = /[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则  
    return str.replace(patt, function (char) {
        var H, L, code;
        if (char.length === 2) {
            H = char.charCodeAt(0); // 取出高位  
            L = char.charCodeAt(1); // 取出低位  
            code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00; // 转换算法  
            return "&#" + code + ";";
        } else {
            return char;
        }
    });
}

    //将编码后的八进制的emoji表情重新解码成十六进制的表情字符
    entitiesToUtf16(str) {
        return str.replace(/&#(\d+);/g, function (match, dec) {
            let H = Math.floor((dec - 0x10000) / 0x400) + 0xD800;
            let L = Math.floor(dec - 0x10000) % 0x400 + 0xDC00;
            return String.fromCharCode(H, L);
        });
    }

}