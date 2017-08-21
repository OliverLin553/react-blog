/* global describe it beforeEach */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { ArticleContent } from "./"

describe("<ArticleContent />", () => {
  let wrapper, container, props

  beforeEach(() => {
    props = {
      bucket: {
        id: "1",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        title: "node常用包",
        date: "2017/3/9",
        comment: "0",
        views: "137",
        content: "cnpm — 淘宝镜像NPM express – http framework koa R"
      }
    }

    wrapper = shallow(
      <ArticleContent {...props} />
    )
  })

  describe("should render", () => {
    it("an img src", () => {
      container = wrapper.find("img")

      expect(container.props().src).to.equal(props.bucket.src)
    })

    it("a title text", () => {
      container = wrapper.find(".kratos-post-text h3")

      expect(container.text()).to.equal(props.bucket.title)
    })

    it("an article content", () => {
      container = wrapper.find(".kratos-post-text p")

      expect(container.text()).to.equal(props.bucket.content)
    })

    it("an <a /> list", () => {
      container = wrapper.find(".kratos-post-meta a")

      expect(container.at(0).text()).to.equal(props.bucket.date)
      expect(container.at(1).text()).to.equal("0 Comment")
      expect(container.at(2).text()).to.equal("137 Views")
    })
  })
})
