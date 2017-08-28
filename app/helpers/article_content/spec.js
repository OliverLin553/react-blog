/* global describe beforeEach it */
import { expect } from "chai"
import * as helper from "./index"

describe("helper article", () => {
  let articleContent
  beforeEach(() => {
    articleContent = [{
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
    }]
  })

  describe("#refineSearchResults", () => {
    it("returns tasks that contain search keyword in the name in two collections, onList", () => {
      articleContent[0].title = "Buy wedding party gifts"

      const searchKeyword = "Buy"
      const result = {
        onList: [articleContent[0]]
      }

      expect(helper.refineSearchResults(articleContent, searchKeyword)).to.deep.equal(result)
    })
  })
})
