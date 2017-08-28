/* global describe it beforeEach */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { ContactListInfo } from "./"

describe("<ContactListInfo />", () => {
  let wrapper, container

  beforeEach(() => {
    wrapper = shallow(
      <ContactListInfo />
    )
  })

  describe("should render", () => {
    it("a title text", () => {
      container = wrapper.find(".kratos-entry-title")

      expect(container.text()).to.equal("About")
    })

    it("a myself info <h2/>", () => {
      container = wrapper.find(".kratos-post-content h2")

      expect(container.text()).to.equal("Web Front End Enginee")
    })

    it("a myself info <h3/>", () => {
      container = wrapper.find(".kratos-post-content h3")

      expect(container.text()).to.equal("Web前端开发工程师(HTML/CSS/JS)")
    })

    it("a myself info <h4/>", () => {
      container = wrapper.find(".kratos-post-content h4")

      expect(container.at(0).text()).to.equal("姓名：林江煌")
      expect(container.at(1).text()).to.equal("性别：男")
      expect(container.at(2).text()).to.equal("籍贯：广东省汕头市")
      expect(container.at(3).text()).to.equal("毕业院校：岭南职业技术学院")
    })

    it("a myself info <p/>", () => {
      container = wrapper.find(".kratos-post-content p")

      expect(container.at(0).text()).to.equal("本人性格开朗，待人热情，工作认真负责积极主动，能够吃苦耐劳， 有很强的自我学习能力，善于与团队协同沟通。有着丰富的大中 型企业网站， 电商及手机网站的制作经验，能够准确把握网站制作的要求。 能够承受工作上的压 力，具备团队合作精神。熟练DIV+CSS 网站制作标准， 善于解决浏览器的兼容问题，熟练使用Javascript、 jQuery实现各种网页特效")
    })
  })
})
