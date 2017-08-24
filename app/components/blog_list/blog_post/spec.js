/* global describe it beforeEach */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { BlogPost } from "./"

describe("<BlogPost />", () => {
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
        content: "cnpm — 淘宝镜像NPM express – http framework koa R",
        classification: "react"
      }
    }

    wrapper = shallow(
      <BlogPost {...props} />
    )
  })

  describe("should render", () => {
    it("a title text", () => {
      container = wrapper.find(".kratos-entry-title")

      expect(container.text()).to.equal(props.bucket.title)
    })

    it("an <a /> list", () => {
      container = wrapper.find(".kratos-post-meta a")

      expect(container.at(0).text()).to.equal(" 2017/3/9")
      expect(container.at(1).text()).to.equal(" react")
      expect(container.at(2).text()).to.equal(" 0 Comment")
      expect(container.at(3).text()).to.equal(" 137 Views")
    })

    it("an article content", () => {
      container = wrapper.find(".kratos-entry-content p")

      expect(container.text()).to.equal(props.bucket.content)
    })
  })
})
