const DomainElement = ({domainName, onClickHandler}) => {
    return(
        <div className="domain-name-div" onClick={() =>onClickHandler(domainName)}>
            <img src={`/tech_icons/${domainName.toLowerCase().replace(" ", "_")}.svg`} className="domain-name-image" alt="domain-name"/>
            <h3 className="domain-name-title">
                {domainName}
            </h3>
            <h4>Experience:</h4>
            <select id={`${domainName.toLowerCase().replace(" ", "-")}`}>
                <option value={"x"}>
                    null
                </option>
                <option value={"a"}>
                    no experience
                </option>
            <option value={"b"}>
                1 - 2 years
            </option>
            <option value={"c"}>
                around 5 years
            </option>
            <option value={"d"}>
                around 10 years
            </option>
            <option value={"e"}>
                10 years+
            </option>
            </select>
        </div>
    )
}


export default DomainElement;