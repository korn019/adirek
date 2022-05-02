const CourseLesson = () => {
  return (
    <>
      <h5 className="widget-title border-0">Course Syllabus</h5>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">
              Introduction
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <ul>
                <li>
                  <a className="play-btn" href="#">
                    <i className="fa fa-play"></i>
                  </a>
                  <span>
                    <p>Welcome to strategic thinking</p>
                    <span>1m 24s</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo">
              1. Setting the Stage for Strategic Thinking
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <ul>
                <li>
                  <i className="fa fa-lock"></i>
                  <span>
                    <p>Embrace the strategic thinking mindset</p>
                    <span>1m 24s</span>
                  </span>
                </li>
                <li>
                  <i className="fa fa-lock"></i>
                  <span>
                    <p>Strategy: Not just for corporations</p>
                    <span>1m 24s</span>
                  </span>
                </li>
                <li>
                  <i className="fa fa-lock"></i>
                  <span>
                    <p>The sequence of strategy</p>
                    <span>1m 24s</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree">
              2. Developing Your Strategic Thinking
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <ul>
                <li>
                  <i className="fa fa-lock"></i>
                  <span>
                    <p>Embrace the strategic thinking mindset</p>
                    <span>1m 24s</span>
                  </span>
                </li>
                <li>
                  <i className="fa fa-lock"></i>
                  <span>
                    <p>Strategy: Not just for corporations</p>
                    <span>1m 24s</span>
                  </span>
                </li>
                <li>
                  <i className="fa fa-lock"></i>
                  <span>
                    <p>The sequence of strategy</p>
                    <span>1m 24s</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour">
              3. Implementing Strategic Thinking
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <ul>
                <li>
                  <i className="fa fa-lock"></i>
                  <span>
                    <p>Embrace the strategic thinking mindset</p>
                    <span>1m 24s</span>
                  </span>
                </li>
                <li>
                  <i className="fa fa-lock"></i>
                  <span>
                    <p>Strategy: Not just for corporations</p>
                    <span>1m 24s</span>
                  </span>
                </li>
                <li>
                  <i className="fa fa-lock"></i>
                  <span>
                    <p>The sequence of strategy</p>
                    <span>1m 24s</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive">
              4. Collaborating, Sharing, and Exporting
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <ul>
                <li>
                  <i className="fa fa-lock"></i>
                  <span>
                    <p>Embrace the strategic thinking mindset</p>
                    <span>1m 24s</span>
                  </span>
                </li>
                <li>
                  <i className="fa fa-lock"></i>
                  <span>
                    <p>Strategy: Not just for corporations</p>
                    <span>1m 24s</span>
                  </span>
                </li>
                <li>
                  <i className="fa fa-lock"></i>
                  <span>
                    <p>The sequence of strategy</p>
                    <span>1m 24s</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseLesson
