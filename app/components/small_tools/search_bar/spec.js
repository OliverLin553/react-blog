/* global describe it beforeEach */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"
import sinon, { assert } from "sinon"

import { SearchBar } from "./"

describe("<SearchBar />", () => {
  let props, wrapper, container, componentInstance

  beforeEach(() => {
    props = {
      actions: {
        search: {
          set: sinon.spy()
        }
      }
    }

    wrapper = shallow(
      <SearchBar {...props} />
    )

    componentInstance = wrapper.instance()
  })

  describe("render", () => {
    it("a <input />", () => {
      container = wrapper.find(".widget-recent-entries input")

      expect(container.length).to.equal(1)
    })

    it("a placeholder text", () => {
      container = wrapper.find(".widget-recent-entries input")

      expect(container.props().placeholder).to.equal("Search...")
    })
  })

  describe("functions", () => {
    describe("#handleInputChange", () => {
      beforeEach(() => {
        const event = {
          target: {
            value: "test"
          }
        }

        componentInstance.handleInputChange(event)
      })

      it("call actions.search", () => {
        assert.calledWith(props.actions.search.set, "test")
      })
    })
  })
})
