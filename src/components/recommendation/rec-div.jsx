const RecDiv = ({tech, description}) => {
    return (
        <div className="rec-div">
            <h2>
                {tech}
            </h2>
            <p>
                {description}
            </p>
        </div>
    )
}

export default RecDiv;