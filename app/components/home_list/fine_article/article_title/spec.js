/* global describe it beforeEach */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { ArticleTitle } from './';

describe("<ArticleTitle />", () => {
  let wrapper, container

  beforeEach(() => {
    wrapper = shallow(
      <ArticleTitle />
    )
  })

  describe("should render", () => {
    it("a h3 text", () => {
      container = wrapper.find("h3")

      expect(container.text()).to.equal("精品文章")
    })

    it("a p text", () => {
      container = wrapper.find("p")

      expect(container.text()).to.equal("我很喜欢创作，记录生活中点点滴滴的回忆，记录工作中前进路途的挫折，还会记录那些来自于世间万物的灵感")
    })
  })
})