import React from 'react';
import Que from './Que';

function Ques({data}) {
    console.log(data);
    return (
        <div className="ques">
            <h2>These are some of the most asked question</h2>
            <div className="que">
                {data.map((que)=>{
                    return <Que key={que.id} {...que}/>
                })}
            </div>
        </div>
    )
}

export default Ques
