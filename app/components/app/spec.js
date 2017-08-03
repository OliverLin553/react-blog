/* global describe it beforeEach */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { App } from './';

describe("<App />", () => {
  let wrapper, container, props

  beforeEach(() => {
    props = {
      filterName: "home"
    }

    wrapper = shallow(
      <App {...props} />
    )
  })

  describe("should render", () => {
    it("<LeftMenu /> components", () => {
      container = wrapper.find("Connect(LeftMenu)")

      expect(container.length).to.equal(1)
    })

    it("<HomeList /> components", () => {
      container = wrapper.find("HomeList")

      expect(container.length).to.equal(1)
    })
  })
})