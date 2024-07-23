import SelectTech from "../select-tech-wrapper/select-tech-wrapper.component";

const ProficiencyForm = ({containerName, techTitles, clickHandler}) => {
  
  return(
    <div className="proficiency-container">
      <SelectTech containerName={containerName} techTitles={techTitles} clickHandler={clickHandler}/>
    </div>
  )
}


export default ProficiencyForm;