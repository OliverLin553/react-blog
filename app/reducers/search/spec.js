/* global describe it */
import { expect } from "chai"
import reducer from "./index"
import constants from "../../constants"

describe("Search reducer", () => {
  it("should default search state", () => {
    const action = {
      type: "anything"
    }

    expect(reducer(undefined, action)).to.equal("")
  })

  it("should set search state", () => {
    const searchKeyword = "dress"
    const action = {
      type: constants.SEARCH,
      data: searchKeyword
    }

    expect(reducer(undefined, action)).to.equal(searchKeyword)
  })
})
