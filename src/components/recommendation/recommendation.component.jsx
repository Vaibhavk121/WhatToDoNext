import RecDiv from "./rec-div"

const Recommendation = ({components}) => {
    // console.log(components);
    return(
        <div className="rec-container">
        {components.map((comp, index) => {
            const key = Object.keys(comp)[0];
            const value = Object.values(comp)[0];
            console.log("Keys and values are ");
            console.log(key);
            console.log(value);
            return(
                <RecDiv tech={key} description={value} key={index}/>
            )
        })
    }
        </div>
    )
}


export default Recommendation


