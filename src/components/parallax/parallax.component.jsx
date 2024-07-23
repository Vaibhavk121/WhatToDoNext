// import {Parallax, ParallaxLayer} from "@react-spring/parallax";
const ParallaxElement = () => {
    const parallaxCount = Array.from({ length: 7 }, (_, i) => i + 1);
    return(
        <div className="parallax-container">
            {/* <div className="logo" id="hexagon-circle">
                <img src="/logo_black.png" alt={"brand logo"}/>
            </div> */}
            {
            parallaxCount.map((_val, index) => {
                return(
                <div key={index} className={`parallax-${index + 1}`}>
                    <img alt={"parallex-image"} src={`/parallax_elements/${index + 1}.png`}/>
                </div>)
            })
}
        </div>
    )
}


export default ParallaxElement;