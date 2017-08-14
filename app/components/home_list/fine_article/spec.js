/* global describe it beforeEach */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { FineArticle } from './';

describe("<FineArticle />", () => {
  let wrapper, container, props

  beforeEach(() => {
    props = {
      articleContent: [{
        id: "1",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        "title": "node常用包",
        "date": "2017/3/9",
        "comment": "0",
        "Views": "137",
        "content": "cnpm — 淘宝镜像NPM express – http framework koa R"
      },
        {
          id: "2",
          src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
          "title": "React+Webpack+ES6从环境搭建",
          "date": "2017/3/9",
          "comment": "0",
          "views": "137",
          "content": "1.从官网下载最新版本的Node.js安装"
        }]
    }

    wrapper = shallow(
      <FineArticle {...props} />
    )
  })

  describe("should render", () => {
    it("a <ArticleTitle /> component", () => {
      container = wrapper.find("ArticleTitle")

      expect(container.length).to.equal(1)
    })

    it("a <ArticleContent /> component", () => {
      container = wrapper.find("ArticleContent")

      expect(container.length).to.equal(2)
    })

    it("a btn text", () => {
      container = wrapper.find(".article-btn")

      expect(container.text()).to.equal("查看更多")
    })

    it("a href text", () => {
      container = wrapper.find(".article-btn a")

      expect(container.props().href).to.equal("http://blog.styxzp.com/blog/")
    })
  })
})