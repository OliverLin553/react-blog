/* global describe it beforeEach */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { ContactList } from "./"

describe("<ContactList />", () => {
  let wrapper, container

  beforeEach(() => {
    wrapper = shallow(
      <ContactList />
    )
  })

  describe("should render", () => {
    it("a <ContactListInfo /> component", () => {
      container = wrapper.find("ContactListInfo")

      expect(container.length).to.equal(1)
    })

    it("a <Footer /> component", () => {
      container = wrapper.find("Footer")

      expect(container.length).to.equal(1)
    })
  })
})
