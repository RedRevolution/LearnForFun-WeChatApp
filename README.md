# 趣学

[TOC]

一款面向北航本科的群组学习软件

去往管理端：https://github.com/RedRevolution/LearnForFun-Web



- 2020.4.22 01:18更新：创建了原生小程序，底部有导航栏Tarbar分为四块 (DM)
  - 备注：若使用WePY框架（建议），该项目可能需要重新创建，但是文件结构大致可以按以下内容理解
- 2020.4.29 14:00更新：WePY框架程序，分页4Tabbar，引入了vant-weapp UI组件 (DM)
- 2020.4.30 00:50更新：新建images目录，加入众多png图片，配好tabbar颜色；可参考服装商城/深大的树洞2.0进行开发 (DM)
- 2020.4.30 12:53更新：修改了顶部导航栏颜色和内容，颜色为北航蓝，内容与每页tabbar一致;补充可供参考的茄酱小程序链接 (PG)
- 2020.5.1 19:06更新：完成微信授权登录，用户信息获取（即可以通过nickName和avatarUrl展示昵称和头像），但是要刷新才能看到，因为onLoad函数在每次进入小程序时只执行一次，第二次进入小程序就可以看到；封装了wsCommon.js的wepy.request发送请求，学号绑定页面还没做好（DM）
- 2020.5.1 22:24更新：完成userRequest封装，成功向后台post/get修改数据库或获取userInfo，但是由于微信端无法获取微信号，openid暂时还没获取(DM)
- 2020.5.2 01:00: 加入课表整体框架页面，色彩配色，vant pop弹窗闪退问题(PG)
- 2020.5.3 12:41: wx.login可以获取code，解决了自动刷新onshow问题，但是后台还无法返回openid(DM) 
- 2020.5.3 14:30: app secret获取成功，openId成功绑定并导入数据库(DM)
- 2020.5.3 22:30: websocket写了一个简单页面，尝试向后端建立连接onSocketOpen函数成功却无法connect failed(DM)
- 2020.5.4 23:59: 开发者工具可以成功发送短消息并存储到页面，但是真机调试由于没有ssl证书无法连接websocket(DM)
- 2020.5.7 10:37: 做好了收藏页面，可供列表显示(PG)
- 2020.5.7 22:40: websocket实时聊天功能接通，待美化(DM)
- 2020.5.9 17:47: 首页入口+创建群组和加入群组，成功创建群组并展示已加入群组列表及对应聊天(DM)
- 2020.5.9 23:57: me/我的日程 实现创建日程 做好日程展示页面（PG）
- 2020.5.10 17:09: 创建日程、显示日程列表实现并拉通（PG）
- 2020.5.10 17:47: 实现通过ID加入群组，优化群聊页面并写群详情页入口，统一settitlebar(DM)
- 2020.5.11 00:02: 完成群详情页以及相关信息获取(DM)
- 2020.5.11 01:00: 在加入群组增加通过查找加入的功能(DM)
- 2020.5.11 09:19: 删除日程实现并拉通（PG）
- 2020.5.11 11:21:添加editTodo页 日程放到tabbar(PG)
- 2020.5.11 12:37:编辑日程实现并拉通，删除日程不能自动刷新页面（PG）
- 2020.5.11 13:24:实现退出群组，聊天界面美化和聊天气泡iOS化，暂时不能自动滚到底部(DM)
- 2020.5.11 18:53:删除最后一条日程可以刷新(DM)
- 2020.5.11 21:17:实现发布分享功能(PG)
- 2020.5.11 22:20:查看群组分享列表，分为资料和知识(PG)
- 2020.5.12 00:13:实现群聊天记录缓存和一些bug修复(DM)
- 2020.5.12 21:10:把爬课表入口放入me.wpy, 课表页留出向服务器请求已存下来的课表(DM)
- 2020.5.12 22:21:实现统一认证登录获取课表，没有测试（PG）
- 2020.5.13 00:34:解析部分字符串(DM)
- 2020.5.13 17:22:实现课表查看和classInfo解析,已录视频（群组显示和课表）(DM)
- 2020.5.13 22:33:加入聊天机器人，并优化聊天界面有新消息自动滚到底部，输入消息时也滚到底部(DM)
- 2020.5.14 0:44:优化页面设计，为录视频做准备，增加首页引导登录（PG）
- 2020.5.14 9:04:尝试资料分享跳转外部网页，暂未上线（PG）
- 2020.5.14 9:46:发布alpha版(DM)
- 2020.5.14 18:50: 资料分享复制url，绑定后自动返回me等优化（PG）
- 2020.5.18 15:42: 更新：建立管理员权限和创建者权限机制，增加修改群组信息（群名和介绍），群公告展示，增加解散群组功能,groupInfo页有较大UI变动(DM)
- 2020.5.18 17:49: 修改提示方式，增加获取和发布群公告功能，仅管理员可以(DM)
- 2020.5.20 0:32:知识分享详情页加入，收藏功能和查看收藏列表基本实现（PG）
- 2020.5.20 13:48: 实现发布/获取群公告，修复管理员修改群组基本信息bug (DM)
- 2020.5.20 18:55: 实现小趣首次自我介绍，实现管理员添加群成员并赋予权限(DM)
- 2020.5.20 20:41:实现评论和现实评论列表（PG）
- 2020.5.20 21:39:实现点赞功能（PG）
- 2020.5.20 23:36:删除评论+日程格式修改+我的收藏页面跳转到收藏详情+我的收藏列表时间解决（PG）
- 2020.5.21 00:32:统一向后台请求聊天记录不做缓存，socket拼接时间格式与数据库统一(DM)
- 2020.5.21 10:04:实现取消收藏，与我的收藏同步（PG）
- 2020.5.21 11:26:实现获取群成员列表并左滑删除群成员(DM)
- 2020.5.21 18:20:实现下滑在顶部追加聊天记录，修复了一些显示的bug(DM)
- 2020.5.21 22:33:美化me页面+knowledge页面显示时间，不显示内容（PG）
- 2020.5.21 22:49:修复了聊天的一些bug，beautify(DM)
- 2020.5.22 11:20:修复聊天气泡显示bug，下拉加载聊天记录bug(DM)
- 2020.5.22 14:30:实现资料收藏功能（PG）
## 1. 开启项目

- clone到本地之后，先使用`npm install`，本地会多出`node_module`文件夹，为开发组件做准备。（如果npm install失败再发文件压缩包）
- 然后使用`wepy build --no-cache --watch`开始监听文件
  - 此时目录下会多出`dist`文件夹，用微信开发者工具导入`dist`文件夹
  - 此时修改本目录下`src`当中的文件，也就是wepy框架的文件，wepy会自动编译成`dist`当中的原生小程序。
- `src/components`当中已经有vant组件库了，编译时（应当）也会自动编译进去的



## 2. 前端页面简要介绍

### 使用开发框架WePY

[入门Wepy框架注意事项：](http://www.dinglindong.club/2018/02/23/wepy%E6%A1%86%E6%9E%B6%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9/)

#### 使用WePY资源：

1. [微信小程序组件化开发框架WePY腾讯官方文档](https://tencent.github.io/wepy/document.html#/?id=微信小程序组件化开发框架wepy官方文档)
2. [腾讯WePY官方仓库](https://github.com/Tencent/wepy)
3. [Awesome for wepy ! 微信小程序组件化开发框架wepy开发资源汇总](https://github.com/aben1188/awesome-wepy)
4. [We川大小程序 - 四川大学使用wepy开发的完善的校园综合小程序](https://github.com/mohuishou/scuplus-wechat)
5. [基于wepy开发的仿微信聊天界面小程序](https://github.com/wepyjs/wepy-wechat-demo)
6. [茄酱开源小程序](https://www.jiangqie.com/docs/kaiyuan/id1)

#### 强烈推荐参考的wepy开发的小程序：

- [微信服装商城 - 分为9个branch相当于可以一步一步学，结构清晰](https://github.com/weimingwill/fashion-mall)
- [深大的树洞2.0  ](https://github.com/jas0ncn/szushudong)



## 3. 如何使用封装userRequest发送ajax请求？

WxCommon.js里已经写好域名和微信API函数，并封装成：

`userRequest(url, method, data, cb)`，我们发送请求只需调用它即可

### 前提条件

1. 在`<script>`下面添加一条` import wxCommon from '../mixins/wxCommon'`
2. 页面内部属性添加`mixins = [wxCommon]`，表示可以使用wxCommon内的函数

### 发送数据post方法实例（用于修改数据库）

```javascript
let that = this
that.userRequest(
 '/api/user','post',   // '/api/user'是小红给的url，'post'是方法
 {
    openId: that.openId, 	//提供给后端的数据，左侧字段必须和数据库里一样
    userId: that.schoolNum, // 右侧字段是当前页面的数据,在data里
    userName: that.realName
 }, function(res) {			// res是后端服务器返回的内容，res.data是真数据
    if(res.data == 0) {  
       wepy.switchTab({ 
         url:'/pages/me'
       })
    } else if (res.data == 'duplicate') { 
       wepy.showModal({ // 若返回的是一个字符串，res.data就是字符串
         title: '提示',
         content: '学号/工号重复，请重新输入'
       })
       // 返回“重复”时不应当进行缓存
    } else if (res.data == 'success'){
       wepy.showModal({
         title: '提示',
         content: '绑定成功！' 
       })
       // 进行全局缓存，双引号内相当于key，下次想取用学号schoolNum这个变量时，
       // 则使用wepy.getStorageSync("schoolNum")
       // 取真实姓名使用wepy.getStorageSync("realName")
       wepy.setStorageSync("schoolNum", that.schoolNum)
       wepy.setStorageSync("realName", that.realName)
    }
  }
)
```



### 接收数据get方法实例（获取数据到本地缓存）

```javascript
that.userRequest(
   '/api/user/'+res.code ,'get',//这里url后面加了code来决定请求什么，文档
   {
     // 由于是get方法，数据部分写一个大括号留空
   }, function(res) {
     if(res.data.userId == 'unbound') { // 返回数据分类讨论情况
        wepy.showModal({
          title: '提示',
          content: '你还没有绑定学号哦～请去“我的”页面点击绑定学号',
          success (res) {
            if (res.confirm) {
               console.log('用户点击确定')
            } else if (res.cancel) {
               console.log('用户点击取消')
            }
          }
        })
        // 未绑定学号会返回 openid
        console.log('我的openid应当为：' +res.data.openId)
        wepy.setStorageSync("openid", res.data.openId)  
     } else { // 返回一个完整的User实例
       //缓存userId, userName作为全局缓存->schoolNum, realName
       wepy.setStorageSync("schoolNum", res.data.userId)
       wepy.setStorageSync("realName", res.data.userName)
       wepy.setStorageSync("openid", res.data.openId)
       that.schoolNum = res.data.userId
       that.realName = res.data.userName
       // 一定要看文档写返回的是什么，如果是一个类实例 
       // 要用res.data.xxattr获取该实例某属性
     }                
   }
)
```





## 4. 即时聊天自己写websocket通信

- 域名已经配置
- SSL证书已经配置
- 



------
【下面是腾讯IM的信息，暂时不用了】

将SDKAppID和密钥粘贴到指定位置：

SDKAppID：1400362697

密钥：80f2b4560bf4d2bebf4e33a6b199cb41b9c6742dbf8d070e71e38d9db0bb018b

![img](https://sqimg.qq.com/qq_product_operations/tentcent_cloud/minp.png)

1. 配置 `SDKAPPID` 和 `SECRETKEY`，获取方式参考：[密钥获取方法](https://cloud.tencent.com/document/product/269/36838#.E6.AD.A5.E9.AA.A41.EF.BC.9A.E5.88.9B.E5.BB.BA.E5.BA.94.E7.94.A8)

   - 打开 `/debug/GeneraterUserSig.js` 文件
   - 按图示填写相应配置后，保存文件

   [![img](https://github.com/tencentyun/TIMSDK/raw/master/WXMini/_doc/2.png)](https://github.com/tencentyun/TIMSDK/blob/master/WXMini/_doc/2.png)

2. 本地配置如下图所示

   - 勾选ES6转ES5选项
   - 勾选不检验合法域名选项
   - 基础库版本 > 2.1.1

   [![img](https://github.com/tencentyun/TIMSDK/raw/master/WXMini/_doc/4.png)](https://github.com/tencentyun/TIMSDK/blob/master/WXMini/_doc/4.png)

----

### UI组件 

#### 1：Vant-weapp(漂亮的UI组件)🌟🌟

[Vant Weapp - 轻量、可靠的小程序 UI 组件库使用文档](https://youzan.github.io/vant-weapp/#/intro)

包含各种主题，弹出层，按钮，日历，表单组件

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ge1vaum20ej30f40fodim.jpg" alt="image-20200422004540875" style="zoom:20%;" />



### 自定义组件：Component（暂不理会）



### 云函数：cloudfunctions文件夹（暂不理会）



## 3. 部署云数据库

现阶段直接用云开发？

![image-20200421233518643](https://tva1.sinaimg.cn/large/007S8ZIlgy1ge1t9li4p1j318e0u0ajx.jpg)
