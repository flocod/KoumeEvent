function OutlineBtn({ title }) {
    return (<div className="outLineBtn">
        <div className="text">{title}</div>
        <svg viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="2" height="2" fill="white" />
            <rect y="6" width="2" height="2" fill="white" />
            <rect x="4" y="3" width="2" height="2" fill="white" />
        </svg>
    </div>);
}


export default OutlineBtn;