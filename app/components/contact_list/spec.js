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
    it("a <BackgroundBanner /> component", () => {
      container = wrapper.find("BackgroundBanner")

      expect(container.length).to.equal(1)
    })

    it("a <ContactListInfo /> component", () => {
      container = wrapper.find("ContactListInfo")

      expect(container.length).to.equal(1)
    })

    it("a <MyselfInfo /> component", () => {
      container = wrapper.find("MyselfInfo")

      expect(container.length).to.equal(1)
    })

    it("a <RecentArticles /> component", () => {
      container = wrapper.find("Connect(RecentArticles)")

      expect(container.length).to.equal(1)
    })

    it("a <Footer /> component", () => {
      container = wrapper.find("Footer")

      expect(container.length).to.equal(1)
    })
  })
})
