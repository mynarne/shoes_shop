import React, { useEffect } from 'react'
import { useState } from 'react'


const Cart = () => {
    const [count, setCount] = useState(0);

    // 컴포넌트 마운트될 때 한 번만
    useEffect(()=>{
        console.log('start')
    }, [])

    useEffect(()=>{
        console.log('hi');
        console.log(count);

        return () => {
            // clean up function
            console.log('초기화')
        }
    }, [count])

    return (
        <div>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium text-sm px-4 py-2 rounded transition-colors active:bg-blue-700" 
            onClick={()=>
                setCount(count + 1)
            }>버튼</button>
        </div>
    )
}

export default Cart