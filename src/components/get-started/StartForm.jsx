const StartForm = ({submitHandler}) => {
  const getUsernameAge = () => {
    const username = document.querySelector(".my-name-input").value;
    const age = document.querySelector(".my-age-input").value;
    return [username, age]
  }
  return (
    <div className={"name-age-container frame"}>
      <div className="name-div">
      <h1 className="my-name-is">My Name is </h1>
      <input type={"text"} className={"my-name-input"} placeholder="your name"/>
      </div>
      <div className="age-div">
      <h1 className="my-age-is">I am</h1>
      <input type={"number"} min={"5"} max={"70"} className={"my-age-input"}/>
      <h1 className="my-age-is-fin">
        years old
      </h1>
      </div>
      <button className={"generic-button"} onClick={() => {
        const [username, age] = getUsernameAge();
        submitHandler(username, age);
        }} >Submit</button>
    </div>
  );
}


export default StartForm;