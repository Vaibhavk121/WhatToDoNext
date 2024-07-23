import DomainElement from "../domain-element/domain-element.component";

const DomainPage = ({domains,clicksHandler, clickHandler}) => {
    return(<div className="domain-container">
        {
            domains.map(domain => {
                return (<DomainElement domainName={domain} onClickHandler={clicksHandler} key={domain}/>)
            })
        }
        <button className="generic-button" onClick={clickHandler}>Render Guidance</button>
    </div>)
}


export default DomainPage;