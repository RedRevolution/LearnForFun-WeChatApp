# 趣学

[TOC]

一款面向北航本科的群组学习软件

去往管理端：https://github.com/RedRevolution/LearnForFun-Web



- **2020.4.22 01:18更新：**创建了原生小程序，底部有导航栏Tarbar分为四块
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

- xx.js			目前用于暂存数据，放在`listData: []`当中
- xx.json
- xx.wxml     作用与html一致，为页面设计内容
- xx.wxss      作用与CSS一致，为页面装饰



#### 使用框架

#### 考虑使用：WePY开发框架(需要熟悉Vue)

![img](https://pic3.zhimg.com/v2-a643fad064b8bdf63cfa2214e71f4276_b.jpg)

[微信小程序组件化开发框架WePY官方文档](https://tencent.github.io/wepy/document.html#/?id=微信小程序组件化开发框架wepy官方文档)

- 尚未解决：是使用框架还是直接开发原生小程序？（WePY微信官方，资源较多，使用框架节省代码）



#### 确定使用：Vant-weapp(漂亮的UI组件)🌟🌟

[Vant Weapp - 轻量、可靠的小程序 UI 组件库](https://youzan.github.io/vant-weapp/#/intro)

包含各种主题，弹出层，按钮，日历，表单组件

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1ge1vaum20ej30f40fodim.jpg" alt="image-20200422004540875" style="zoom:50%;" />

### 自定义组件：Component（暂不理会）



### cloudfunctions文件夹（暂不理会）



## 3. 部署云数据库

现阶段直接用云开发？（华为企业云用来做什么）

![image-20200421233518643](https://tva1.sinaimg.cn/large/007S8ZIlgy1ge1t9li4p1j318e0u0ajx.jpg)