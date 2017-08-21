/* global describe it beforeEach */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { HomeList } from "./"

describe("<HomeList />", () => {
  let wrapper, container, props

  beforeEach(() => {
    wrapper = shallow(
      <HomeList {...props} />
    )
  })

  describe("should render", () => {
    it("a <Swiper /> component", () => {
      container = wrapper.find("Swiper")

      expect(container.length).to.equal(1)
    })

    it("a <FineArticle /> component", () => {
      container = wrapper.find("Connect(FineArticle)")

      expect(container.length).to.equal(1)
    })
  })
})
