/* global describe it beforeEach */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { BlogList } from "./"

describe("<BlogList />", () => {
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
      }]
    }

    wrapper = shallow(
      <BlogList {...props} />
    )
  })

  describe("should render", () => {
    it("a <BlogPost /> component", () => {
      container = wrapper.find("BlogPost")

      expect(container.length).to.equal(2)
    })

    it("a <Footer /> component", () => {
      container = wrapper.find("Footer")

      expect(container.length).to.equal(1)
    })
  })
})
