const SelectTechComponent = ({name, onClickHandler}) => {
    return (
        <div className="tech-div" id={name} onClick={(event) => {
            if(onClickHandler(name, true)) {
                // alert("Will select now");
                setTimeout(() => {document.querySelector("#" + name).className += " selected";}, 100);
                
            } else {
                // alert("Will NOT select now");
                document.querySelector("#" + name).className = event.target.className.replace("selected", "")
            }
            }}>
                <img alt={name} className={"tech-img"} src={`/tech_icons/${name.toLowerCase().replace(" ", "_")}.svg`}/>
                <h3 className={"tech-title"}>{name}</h3>
        </div>
    )
}


export default SelectTechComponent;