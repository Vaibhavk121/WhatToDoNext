const LandingPage = ({submitHandler}) => {
    return(
        <div className="landing-page-container">
      <div className="title-heading">
        <span className="landing-what">What</span>
        <span className="landing-to">to</span>
        <span className="landing-do">do</span>
        <span className="landing-next">Next?</span>
      </div>
      <h3 className="subheading">the most exciting things are yet to come</h3>
      <div className="get-started-div">
        <button onClick={submitHandler} className="get-started-button">
          Get Started!
          {/* <span>
            <img src="/rocket.png" alt="props" className="get-started-button-rocket" />
            <img src="/rocket-cloud.png" alt={"rocket-cloud"}/>
          </span> */}
        </button>
      </div>
    </div>
    )
}


export default LandingPage;