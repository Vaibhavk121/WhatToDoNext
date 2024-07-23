import Foreground from "./components/foreground/foreground.component";
import ParallaxElement from "./components/parallax/parallax.component";

const App = () => {

    const handleScroll = () => {

    }
    return (
        <>
            <ParallaxElement />
            <Foreground scrollHandler={handleScroll} />
        </>
    )
}


export default App;