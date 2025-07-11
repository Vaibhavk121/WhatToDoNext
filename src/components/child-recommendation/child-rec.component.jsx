const ChildRec = () => {
    return (
        <div className="child-rec-container">
            <div className="child-rec-internet">
                <img src="/assets/internet.png" alt="Internet category icon"/>
                <h3>Internet</h3>
            </div>
            <div className="child-rec-windows">
                <img src="/assets/windows.png" alt="Windows category icon"/>
                <h3>Windows</h3>
            </div>
            <div className="child-rec-art">
                <img src="/assets/art.png" alt="Art category icon"/>
                <h3>Art</h3>
            </div>
        </div>
    )
}

export default ChildRec;