import React, { useState, useEffect } from 'react'
import SkeletonLoader from './SkeletonLoader';



function LoadMorePagination() {
    const [data,setData] = useState([])
    const [visibleData,setVisibleData] = useState(3)
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        const fetchingData = async()=>{
            const response = await fetch('http://jsonplaceholder.typicode.com/users')
            const jsonData = await response.json()
            setData(jsonData)
            setLoading(false)
        }
        fetchingData()
    },[data,visibleData])
    
    const addMoreData=()=>{
        setVisibleData((prevValue)=>prevValue+3)
    }
    return (
        <div>
                                                        {/* .map() function will not work with objects thats why TypeError: data.map is not a function
                                                        simple solve just put useState([]) not useState('') */}
                                                        {/* var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
                                                            var myBest = fruits.slice(1, 3); OUTPUT:"Orange", "Lemon"
                                                            slice(1,3) === 0index=banana 1index=orange 2index=lemon 3index=apple 4index=mango
                                                                        1index theke 3index er ag poronto value nibe baki sob bad
                                                    */}
                                                   
            {
                data.slice(0,visibleData).map(data=>(
                    <div>
                        {
                            !loading ? <SkeletonLoader/> : <div key={data.id}>{data.username}</div>
                        }
                    </div>
                ))
            }
            <button onClick={addMoreData}>Load More</button>
        </div>
    )
}

export default LoadMorePagination
