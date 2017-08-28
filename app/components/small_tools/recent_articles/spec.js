/* global describe it beforeEach */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { RecentArticles } from "./"

describe("<RecentArticles />", () => {
  let wrapper, container, props

  beforeEach(() => {
    props = {
      articleContent: [{
        id: "1",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        title: "node常用包",
        date: "2017/3/9",
        comment: "0",
        Views: "137",
        content: "cnpm — 淘宝镜像NPM express – http framework koa R",
        href: "http://blog.styxzp.com/test1"
      },
      {
        id: "2",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        title: "React+Webpack+ES6从环境搭建",
        date: "2017/3/9",
        comment: "0",
        views: "137",
        content: "1.从官网下载最新版本的Node.js安装",
        href: "http://blog.styxzp.com/test2"
      },
      {
        id: "3",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        title: "React+Webpack+ES6从环境搭建",
        date: "2017/3/9",
        comment: "0",
        views: "137",
        content: "1.从官网下载最新版本的Node.js安装",
        href: "http://blog.styxzp.com/test2"
      },
      {
        id: "4",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        title: "React+Webpack+ES6从环境搭建",
        date: "2017/3/9",
        comment: "0",
        views: "137",
        content: "1.从官网下载最新版本的Node.js安装",
        href: "http://blog.styxzp.com/test2"
      },
      {
        id: "5",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        title: "React+Webpack+ES6从环境搭建",
        date: "2017/3/9",
        comment: "0",
        views: "137",
        content: "1.从官网下载最新版本的Node.js安装",
        href: "http://blog.styxzp.com/test2"
      },
      {
        id: "6",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        title: "React+Webpack+ES6从环境搭建",
        date: "2017/3/9",
        comment: "0",
        views: "137",
        content: "1.从官网下载最新版本的Node.js安装",
        href: "http://blog.styxzp.com/test2"
      },
      {
        id: "7",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        title: "React+Webpack+ES6从环境搭建",
        date: "2017/3/9",
        comment: "0",
        views: "137",
        content: "1.从官网下载最新版本的Node.js安装",
        href: "http://blog.styxzp.com/test2"
      }]
    }

    wrapper = shallow(
      <RecentArticles {...props} />
    )
  })

  describe("render", () => {
    it("a recent articles title <h4 />", () => {
      container = wrapper.find(".widget-title")

      expect(container.text()).to.equal("近期文章")
    })

    it("a recent articles title <a /> href", () => {
      container = wrapper.find(".widget-recent-entries li a")

      expect(container.at(0).props().href).to.equal("http://blog.styxzp.com/test1")
      expect(container.at(1).props().href).to.equal("http://blog.styxzp.com/test2")
    })

    it("a recent articles title <a />", () => {
      container = wrapper.find(".widget-recent-entries li")

      expect(container.at(0).text()).to.equal("node常用包")
      expect(container.at(1).text()).to.equal("React+Webpack+ES6从环境搭建")
      expect(container.at(2).text()).to.equal("React+Webpack+ES6从环境搭建")
      expect(container.at(3).text()).to.equal("React+Webpack+ES6从环境搭建")
      expect(container.at(4).text()).to.equal("React+Webpack+ES6从环境搭建")
      expect(container.at(5).text()).to.equal("React+Webpack+ES6从环境搭建")
    })
  })
})
