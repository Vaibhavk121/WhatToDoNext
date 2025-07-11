import Foreground from "./components/foreground/foreground.component";
import ParallaxElement from "./components/parallax/parallax.component";
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const App = () => {

    const handleScroll = () => {

    }
    return (
        <ErrorBoundary>
            <ParallaxElement />
            <Foreground scrollHandler={handleScroll} />
        </ErrorBoundary>
    )
}


export default App;