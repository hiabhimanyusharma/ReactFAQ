import React, {useState} from 'react'

function Que(que) {
    const [isDisplay,setIsDisplay] = useState(false);
    return (
        <>
            <div className="theQuestion">
                <h3>{que.question}</h3>
                <button className={isDisplay?"fa fa-minus":"fa fa-plus"} onClick={()=> setIsDisplay(!isDisplay)}></button>
            </div>
            <p>{isDisplay?que.answer:""}</p>
        </>
    )
}

export default Que;
