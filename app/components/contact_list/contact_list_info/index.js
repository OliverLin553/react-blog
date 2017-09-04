import React, { Component } from "react"

import style from "./style.css"

export class ContactListInfo extends Component {
  render() {
    return (
      <article className="animate-box fadeInUp animated">
        <div className={`clearfix ${style["kratos-post-inner"]} ${style["widget-recent-entries"]}`}>
          <header className="kratos-entry-header">
            <h1 className="kratos-entry-title text-center">About</h1>
          </header>
          <div className="kratos-post-content">
            <h2>Web Front End Enginee</h2>
            <h3>Web前端开发工程师(HTML/CSS/JS)</h3>
            <h4>姓名：林江煌</h4>
            <h4>性别：男</h4>
            <h4>籍贯：广东省汕头市</h4>
            <h4>毕业院校：岭南职业技术学院</h4>
            <p>本人性格开朗，待人热情，工作认真负责积极主动，能够吃苦耐劳，
              有很强的自我学习能力，善于与团队协同沟通。有着丰富的大中 型企业网站，
              电商及手机网站的制作经验，能够准确把握网站制作的要求。
              能够承受工作上的压 力，具备团队合作精神。熟练DIV+CSS 网站制作标准，
              善于解决浏览器的兼容问题，熟练使用Javascript、 jQuery实现各种网页特效</p>
          </div>
        </div>
      </article>
    )
  }
}

export default ContactListInfo
