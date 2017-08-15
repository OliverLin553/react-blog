/* global describe it */
import { expect } from "chai"
import reducer from "./index"
import constants from "../../constants"

describe("Article content reducer", () => {
  it("should set default Article content state", () => {
    const action = {
      type: "test",
    }

    expect(reducer(undefined, action)).to.eql([])
  })

  describe("when action is ARTICLE_CONTENT", () => {
    it("should set total Article content", () => {
      const payload = {
        id: "1",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        title: "node常用包",
        date: "2017/3/9",
        comment: "0",
        Views: "137",
        content: "cnpm — 淘宝镜像NPM express – http framework koa R"
      }
      const action = {
        type: constants.ARTICLE_CONTENT,
        payload
      }

      expect(reducer(undefined, action)).to.equal(payload)
    })
  })
})
