/* global title date */
import constants from "../../constants"

export const fetch = () => {
  return (dispatch) => {
    const data = [
      {
        id: "1",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        title: "node常用包",
        date: "2017/3/9",
        comment: "0",
        Views: "137",
        content: "cnpm — 淘宝镜像NPM express – http framework koa R",
        classification: "node",
        href: "http://blog.styxzp.com/2017/08/21/%e9%85%8d%e7%bd%ae%e8%a7%84%e8%8c%83-eslintrc-js/"
      },
      {
        id: "2",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        title: "React+Webpack+ES6从环境搭建",
        date: "2017/3/9",
        comment: "0",
        views: "137",
        content: "1.从官网下载最新版本的Node.js安装",
        classification: "react",
        href: "http://blog.styxzp.com/"
      },
      {
        id: "3",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        title: "wordpress 常用插件",
        date: "2017/3/9",
        comment: "0",
        views: "137",
        content: "WordPress图片加文字/图片水印插件：Watermark RELOADED WordPress的快速缓存插件：WP",
        classification: "wordpress",
        href: "http://blog.styxzp.com/"
      },
      {
        id: "4",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        title: "小程序 app.json配置",
        date: "2017/3/9",
        comment: "0",
        views: "137",
        content: "WordPress图片加文字/图片水印插件：Watermark RELOADED WordPress的快速缓存插件：WP",
        classification: "weChat",
        href: "http://blog.styxzp.com/"
      },
      {
        id: "5",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        title: "test",
        date: "2017/3/9",
        comment: "0",
        views: "137",
        content: "WordPress图片加文字/图片水印插件：Watermark RELOADED WordPress的快速缓存插件：WP",
        classification: "test",
        href: "http://blog.styxzp.com/"
      },
      {
        id: "6",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        title: "uploadPreview 上传图片看到图",
        date: "2017/3/9",
        comment: "0",
        views: "137",
        content: "WordPress图片加文字/图片水印插件：Watermark RELOADED WordPress的快速缓存插件：WP",
        classification: "javasrcrit",
        href: "http://blog.styxzp.com/"
      }
    ]

    dispatch({
      type: constants.ARTICLE_CONTENT,
      payload: data
    })
  }
}
