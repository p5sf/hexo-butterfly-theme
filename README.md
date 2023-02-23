本博客主题根据`hexo`博客搭建、使用`hexo-theme-butterfly`主题，在此基础上做了一些修改，添加某些功能或者删除多余的配置，详情见博客演示

## 安装环境

- 请先安装[Git](https://git-scm.com/)，需要克隆本仓库
- 前端运行环境[Node](https://nodejs.org/en/download/)，演示Node环境为14.21.0版本
- 主题使用大量的第三方插件需要注册使用，不注册可能无法使用

## 安装主题

如不了解Hexo，请先到[Hexo](https://hexo.io/zh-cn/)官网进行了解、注意本主题是依据[Butterfly](https://github.com/jerryc127/hexo-theme-butterfly)主题进行修改，如果要使用原生的主题，请到[Butterfly](https://butterfly.js.org/)官网进行查看。

博客预览演示：

```shell
# 克隆我的地址
git clone  git@github.com:sundayskys/hexo-butterfly-bokeya.git
# 安装
npm install
# 启动
hexo server
```

## 基本配置

注意以下配置是根据原生Butterfly进行修改，不是原生的，主要修改如下

- [ ] 删除分享和聊天功能
- [ ] 删除公告和添加通知栏
- [ ] 删除分享壁纸换背景
- [ ] 添加轮播图和导航栏
- [ ] 博客优化和部署

#### 修改个人信息

注意：要修改基本的个人信息，才能算作是个人博客，注意有两个配置信息，一个是Hexo的配置，还有一个是主题Butterfly的配置，都是名称为_config.yml的文件。

注意以下的配置一般在Butterfly主题里面的配置文件。

这是个例外，是修改Hexo的配置文件

```yml
title: "博客"
subtitle: "这是一个副标题" # 副标题
description: "这是一个博客丫"
keywords: 这是一个关键字
author: 作者
language: zh-CN
timezone: "Asia/Shanghai"

# 添加GitHub地址，填写用户名，否则部署到GitHub上样式无法正常显示
url: https://youname.github.io
```

## 三方插件

这里用到了许多的第三方插件，这里介绍如何使用以及注册，如果不注册，可能使用的是我的个人信息了。

#### 添加Github贡献图

可以展示个人的Github上传信息，可以在首页展示，也可以在另一个页面展示，这里只展示如何在首页展示，如果在另一个页面展示请到

需要修改个人的Github名称，和主题色

```yml
githubcalendar:
  enable: true
  enable_page: /
  user: 个人仓库名称
  layout:
    type: id
    name: recent-posts
    index: 0
  githubcalendar_html: '<div class="recent-post-item" style="width:100%;height:auto;padding:10px;"><div id="github_loading" style="width:10%;height:100%;margin:0 auto;display: block"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 50 50" style="enable-background:new 0 0 50 50" xml:space="preserve"><path fill="#d0d0d0" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z" transform="rotate(275.098 25 25)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform></path></svg></div><div id="github_container"></div></div>'
  pc_minheight: 280px
  mobile_minheight: 0px
  color: "['#ebedf0', '#a2f7af', '#6ce480', '#54ad63', '#469252', '#31753c', '#1f5f2a', '#13531f', '#084111', '#032b09', '#000000']"
  api: https://python-github-calendar-api.vercel.app/api
  # api: https://python-gitee-calendar-api.vercel.app/api
  calendar_js: https://cdn.jsdelivr.net/gh/Zfour/hexo-github-calendar@1.21/hexo_githubcalendar.js
  plus_style: ""
```

#### 添加评论

注意我只保留Twikoo，和Valine评论，其他的评论功能已经删除。

需要添加个人的环境变量ID，如何获取请看：https://tzy1997.com/articles/hexo1611

```yml
comments:
  use: Twikoo # Valine,Disqus
  text: true # 在按钮旁边显示注释名称
  lazyload: false # 是否开启懒加载
  count: true # 在帖子top_img中显示评论计数
  card_post_count: false # 在主页中显示评论计数
twikoo:
  envId: 环境ID
  region:
  visitor: true
  option:
```

## 部署上线

我们可以在本地进行浏览，如要在线上查看，下面有几种方式都可以，Github 提供了页面部署方式Github Pages，优点方便缺点慢。也可以使用vercel或者Netfly方式都是静态部署。如果有服务器也可以使用。

#### 使用Github pages方式

注意修改的是Hexo配置也就是最外层的_config.yml文件。

注意仓库名称为你的Github名称，否则可能部署不成功：youname.github.io

```shell
# 项目部署，请修改为个人仓库地址
deploy:
  type: "git"
  repo: git@github.com:yourname.github.io.git
  branch: gh-pages
```

这里执行`hexo deploy`会自动部署到Github Pages下，线上地址为http://yourname.github.io

#### 使用vercel方式

使用Github速度不是那么快，这里使用Vercel进行静态代码托管，注意这里仓库名称就不局限与你的GitHub名称，如要使用[Vercel](https://vercel.com/)请先注册。

注册成功后进入页面，点击News Project，然后导入项目

![image](https://blog.zwying.com/usr/uploads/sina/63adb5c7bca02.jpg)

如果出现这个页面，表示部署成功

![image](https://blog.zwying.com/usr/uploads/sina/63adb5c7e8763.jpg)

这里的域名不是我们想要的可以进行域名绑定，点击设置，选择Domains，修改自己的域名名称，Vercel就会检查DNS对不对，如果对就显示配置成功。

![image](https://blog.zwying.com/usr/uploads/sina/63adb5c81f90a.jpg)

#### 流水线部署

你可以添加也可以不添加，由于我需要上传主题文件，上述的都是编译后的主题文件，这里我要做个主题备份也就是源代码，所以这里创建两个仓库。这里我利用Github的 [Action](https://github.com/features/actions)的方式。

在主题文件夹下.github/workflows 下创建 autodeploy.yml，Github会自动检查有没有Action这个行为，如果有自动执行Action下的行为。

配置文件如下，请到个人仓库下的Action查看是否启动。

经过Action下，它会自动进行编译，然后上传到另一个仓库，也就是编译后的文件。

> 请先修改个人的基本信息，也就是部署到Github上的个人信息,请添加Token和仓库，否则部署不成功

```yml
name: 自动部署
on:
  push:
    branches:
      - master # 只在master上push触发部署
    paths-ignore: # 下列文件的变更不触发部署，可以自行添加
      - README.md
      - LICENSE

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: 检查分支
        uses: actions/checkout@v2
        with:
          ref: master

      - name: 安装 Node
        uses: actions/setup-node@v1
        with:
          node-version: "16.x"

      - name: 安装 Hexo
        run: |
          export TZ='Asia/Shanghai'
          npm install hexo-cli -g
          npm install hexo-renderer-pug hexo-renderer-stylus --save
      - name: 安装依赖
        if: ${{ steps.cache-npm.outputs.cache-hit != 'true' }}
        run: |
          npm install --save

      - name: 生成静态文件
        run: |
          hexo clean
          hexo generate

      - name: 部署到Github
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          token: 
          repository-name: xxx.github.io
          branch: main
          folder: public
          commit-message: "${{ github.event.head_commit.message }} Updated By Github Actions"
```

这里是我的[Action](https://github.com/sundayskys/hexo-butterfly-bokeya/actions)，必须全部成功，才能部署成功。

详情见：https://zhangshier.vip/posts/8779

## 参考文献

#### 魔改大佬

- 安知鱼：https://anzhiy.cn/
- heo 张： https://akilar.top/
- 糖果屋 https://blog.zhheo.com

#### 参考博客

- 主题：https://github.com/jerryc127/hexo-theme-butterfly
- 主题美化教程：https://butterfly.zhheo.com/docs/
- 博客优化：https://akilar.top/posts/7c16c4bb/
- 压缩优化：https://www.zyskys.com/posts/60945.html
- 部署上线：https://daiyu-233.top/posts/87a2.html#Github-Action
- 电子时钟：https://anzhiy.cn/posts/fc18.html
- 添加 Git 贡献图：https://gishai.top/blog/posts/91dc324b.html
- 添加评论功能：https://tzy1997.com/articles/hexo1611