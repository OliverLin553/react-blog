/* global describe it */
import { expect } from "chai"
import constants from "../../constants"
import * as actions from "./"

describe("search action", () => {
  it("should set a search keyword", () => {
    const data = "wedding dress"
    const expectedAction = {
      type: constants.SEARCH,
      data
    }

    expect(actions.set(data)).to.eql(expectedAction)
  })
})
