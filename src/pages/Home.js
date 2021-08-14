import React, {useState} from 'react';

const Home = () => {

    const [state, setState] = useState(0)

    const add = () => {
        if(state >= 900){
            setState(state)
        }
        else{
            setState(state+100)
        }
    }
    const remove = () => {
        if(state <= 0){
            setState(state)
        }
        else{
            setState(state-100)
        }
    }

    return(
        
        <div className="flex flex-row space-x-10">
            <button className="bg-red-400 w-20 rounded-md text-white font-bold text-6xl" onClick={()=>remove()}>-</button>
                <span className={`font-extrabold bg-gradient-to-r from-white to-red-${state}  rounded-full p-20`}>
                VALUE: {state}
                </span>
            <button className="bg-yellow-400 w-20 rounded-md text-white font-bold text-6xl" onClick={()=>add()}>+</button>
        </div>
    
    )
}

export default Home;