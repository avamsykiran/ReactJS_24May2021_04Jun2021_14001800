import { useEffect, useState } from "react";

const Counter = (props) => {

    let [count,setCount] = useState(0);

    useEffect(()=>{
        if(count<0){
            setCount(15);
        }else if(count>15){
            setCount(0);
        }
    },[count]);

    return (
        <div className="m-5">
            <button className="btn btn-sm btn-info mr-2" 
             onClick={e => setCount(count+1)}>Increase</button>
            <strong>{count}</strong>
            <button className="btn btn-sm btn-info ml-2"
            onClick={e => setCount(count-1)}>Decrease</button>
        </div>
    );
};

export default Counter;