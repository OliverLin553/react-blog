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
        content: "cnpm — 淘宝镜像NPM express – http framework koa R"
      },
      {
        id: "2",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        title: "React+Webpack+ES6从环境搭建",
        date: "2017/3/9",
        comment: "0",
        views: "137",
        content: "1.从官网下载最新版本的Node.js安装"
      },
      {
        id: "3",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        title: "wordpress 常用插件",
        date: "2017/3/9",
        comment: "0",
        views: "137",
        content: "WordPress图片加文字/图片水印插件：Watermark RELOADED WordPress的快速缓存插件：WP"
      }
    ]

    dispatch({
      type: constants.ARTICLE_CONTENT,
      payload: data
    })
  }
}
