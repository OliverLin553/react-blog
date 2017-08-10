/* global describe it */
import { expect } from "chai"
import constants from "../../constants"
import * as actions from "./"

describe("filter actions", () => {
  it("should create an action to set a filter", () => {
    const data = { name: "home" }
    const expectedAction = {
      type: constants.FILTER,
      data
    }

    expect(actions.set(data)).to.eql(expectedAction)
  })
})
