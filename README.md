# 趣学

[TOC]

一款面向北航本科的群组学习软件

去往管理端：https://github.com/RedRevolution/LearnForFun-Web



- 2020.4.22 01:18更新：创建了原生小程序，底部有导航栏Tarbar分为四块
  - 备注：若使用WePY框架（建议），该项目可能需要重新创建，但是文件结构大致可以按以下内容理解



## 1. 导入项目

将本项目`git clone `至本地，在微信开发者工具中导入整个文件夹

AppID（小程序ID）：wxbe3bc73b7a961e66

云开发环境名称：learnForFunEnv

云开发环境ID：learnforfunid

> 当前配额：基础版 1 资源均衡型有效期至2020-07-20





## 2. 前端页面简要介绍

### Miniprogram文件夹: app.json和pages文件夹

```json
"pages": [
    "pages/index/index",						// 
    "pages/groupchat/groupchat",		// 群聊页面
    "pages/coursetable/coursetable",// 课表页面
    "pages/collection/collection",	// 收藏页面
    "pages/user/user"								// “我的”
  ],
```

“pages”当中一个文件夹对应一个xx页面

一个页面的文件夹包含:

- xx.js			可用于暂存数据，放在`listData: []`当中
- xx.json
- xx.wxml     作用与html一致，为页面设计内容，很大程度与html不兼容
- xx.wxss      作用与CSS一致，为页面装饰，但是于CSS不完全兼容



### 使用开发框架❓

#### 考虑使用：WePY开发框架(需要熟悉Vue)

![img](https://pic3.zhimg.com/v2-a643fad064b8bdf63cfa2214e71f4276_b.jpg)

#### 使用WePY资源：

1. [微信小程序组件化开发框架WePY腾讯官方文档](https://tencent.github.io/wepy/document.html#/?id=微信小程序组件化开发框架wepy官方文档)
2. [腾讯WePY官方仓库](https://github.com/Tencent/wepy)
3. [Awesome for wepy ! 微信小程序组件化开发框架wepy开发资源汇总](https://github.com/aben1188/awesome-wepy)
4. [We川大小程序 - 四川大学使用wepy开发的完善的校园综合小程序](https://github.com/mohuishou/scuplus-wechat)
5. [基于wepy开发的仿微信聊天界面小程序](https://github.com/wepyjs/wepy-wechat-demo)

- 尚未解决：是使用框架还是直接开发原生小程序？

#### 原生小程序优秀示例（可以拿来利用的）🌟🌟🌟

1. [微信小程序之小熊の日记](https://github.com/harveyqing/BearDiary) ：发布信息，Server端API支持，输入日记（对应于我们的知识帖子），拍照上传等

2. [WeHalo 简约风 的微信小程序版博客](https://github.com/aquanlerou/WeHalo)：点赞，评论，云开发，数据库

   <img src="https://tva1.sinaimg.cn/large/007S8ZIlly1ge2nuh8r7xj30ro0rsqbo.jpg" alt="image-20200422171318408" style="zoom:20%;" />



### UI组件

#### 1：Vant-weapp(漂亮的UI组件)🌟🌟

[Vant Weapp - 轻量、可靠的小程序 UI 组件库](https://youzan.github.io/vant-weapp/#/intro)

包含各种主题，弹出层，按钮，日历，表单组件

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ge1vaum20ej30f40fodim.jpg" alt="image-20200422004540875" style="zoom:20%;" />

#### 2:  iview-weapp

[iview-weapp 一套高质量的微信小程序 UI 组件库](https://github.com/TalkingData/iview-weapp)

<img src="https://raw.githubusercontent.com/TalkingData/iview-weapp/master/assets/code.jpg" alt="img" style="zoom:20%;" />





### 自定义组件：Component（暂不理会）



### 云函数：cloudfunctions文件夹（暂不理会）



## 3. 部署云数据库

现阶段直接用云开发？

![image-20200421233518643](https://tva1.sinaimg.cn/large/007S8ZIlgy1ge1t9li4p1j318e0u0ajx.jpg)
