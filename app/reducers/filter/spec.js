/* global describe it */
import { expect } from "chai"
import * as jsdom from "jsdom"
import reducer, { getDefaultFilter } from "./index"
import constants from "../../constants"

describe("Filter reducer", () => {
  it("should set filter state", () => {
    const filter = "home"
    const action = {
      type: constants.FILTER,
      data: filter
    }

    expect(reducer(undefined, action)).to.eql(filter)
  })

  describe("functions", () => {
    describe("#getDefaultFilter", () => {
      describe("when window.location.href include blog", () => {
        it("returns a value", () => {
          jsdom.changeURL(window, "https://www.test.com/blog")

          expect(getDefaultFilter()).to.eql("blog")
        })
      })

      describe("when window.location.href include wedding-budget", () => {
        it("returns a value", () => {
          jsdom.changeURL(window, "https://www.test.com/contact")

          expect(getDefaultFilter()).to.eql("contact")
        })
      })

      describe("when window.location.href include other", () => {
        it("returns a value", () => {
          jsdom.changeURL(window, "https://qa-beta.theknot.com/test")

          expect(getDefaultFilter()).to.eql("home")
        })
      })
    })
  })
})
