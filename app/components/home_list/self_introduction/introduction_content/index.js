import React, { Component } from "react"

export class IntroductionContent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-push-6">
            <figure className="kratos-feature-image animate-box fadeInUp animated">
              <img src="http://blog.styxzp.com/wp-content/themes/Kratos/images/macbook.png" role="presentation" />
            </figure>
          </div>
          <div className="col-md-6 col-md-pull-6">
            <h2 className="kratos-lead animate-box fadeInUp animated">Minimalist Theme</h2>
            <div className="kratos-feature">
              <div className="kratos-feature">
                <div className="kratos-text animate-box fadeInUp animated">
                  <h3>Jiang</h3>
                  <p>前端工程师</p>
                </div>
              </div>
            </div>
            <div className="kratos-btn-action animate-box fadeInUp animated">
              <a href="http://blog.styxzp.com/jiang/" className="btn btn-primary view-more-2">更多项目</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IntroductionContent
