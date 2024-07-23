import SelectTechComponent from "../select-tech/select-tech.component";
//PARENT COMPONENT
const SelectTech = ({containerName, techTitles, clickHandler}) => {
    return(
        <div className={containerName}>
            {
                techTitles.map((title, index) => {
                    return <SelectTechComponent name={title} key={title + index} onClickHandler={clickHandler}/>
                })
            }
        </div>
    )
}


export default SelectTech;