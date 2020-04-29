# 趣学

[TOC]

一款面向北航本科的群组学习软件

去往管理端：https://github.com/RedRevolution/LearnForFun-Web



- 2020.4.22 01:18更新：创建了原生小程序，底部有导航栏Tarbar分为四块
  - 备注：若使用WePY框架（建议），该项目可能需要重新创建，但是文件结构大致可以按以下内容理解
- 2020.4.29 14:00更新：WePY框架程序，分页4Tabbar，引入了vant-weapp UI组件



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



#### 原生小程序优秀示例（可以拿来利用的）🌟🌟🌟

1. [微信小程序之小熊の日记](https://github.com/harveyqing/BearDiary) ：发布信息，Server端API支持，输入日记（对应于我们的知识帖子），拍照上传等

2. [WeHalo 简约风 的微信小程序版博客](https://github.com/aquanlerou/WeHalo)：点赞，评论，云开发，数据库

   

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
