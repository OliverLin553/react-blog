/* global describe it beforeEach */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { BlogList } from "./"
import { default as BlogPost } from "./blog_post"

describe("<BlogList />", () => {
  let wrapper, container, props

  beforeEach(() => {
    props = {
      articleContent: [{
        id: "1",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        title: "node常用包",
        date: "2017/3/9",
        comment: "0",
        Views: "137",
        content: "cnpm — 淘宝镜像NPM express – http framework koa R"
      },
      {
        id: "2",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        title: "React+Webpack+ES6从环境搭建",
        date: "2017/3/9",
        comment: "0",
        views: "137",
        content: "1.从官网下载最新版本的Node.js安装"
      }],
      searchKeyword: "node"
    }

    wrapper = shallow(
      <BlogList {...props} />
    )
  })

  describe("should render", () => {
    it("a <BackgroundBanner /> component", () => {
      container = wrapper.find("BackgroundBanner")

      expect(container.length).to.equal(1)
    })

    it("a <MyselfInfo /> component", () => {
      container = wrapper.find("MyselfInfo")

      expect(container.length).to.equal(1)
    })

    it("a <SearchBar /> component", () => {
      container = wrapper.find("Connect(SearchBar)")

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

    describe("when has search Keyword", () => {
      describe("when results are found", () => {
        it("a <BlogPost /> component", () => {
          container = wrapper.find(BlogPost)

          expect(container.length).to.equal(1)
        })
      })

      describe("when no results are found", () => {
        beforeEach(() => {
          props.searchKeyword = "dress"
          wrapper.setProps(props)

          container = wrapper.find(".search-msg-no-results")
        })

        it("displays first line no result message", () => {
          expect(container.childAt(0).text()).to.equal("We’re sorry,")
        })

        it("displays second line result message", () => {
          expect(container.childAt(1).text()).to.equal("We didn’t find any article that match your search for \"dress\".")
        })

        it("displays third line no result message", () => {
          expect(container.childAt(2).text()).to.equal("Try searching again with a related term—we might have just what you’re looking for.")
        })
      })
    })

    describe("when no search Keyword", () => {
      it("displays a no result message", () => {
        props.searchKeyword = ""
        wrapper.setProps(props)
        container = wrapper.find(BlogPost)

        expect(container.length).to.equal(2)
      })
    })
  })
})
