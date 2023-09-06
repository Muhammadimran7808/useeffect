import React, { useState, useEffect } from 'react';

const Home = () => {
    const [num, setNum] = useState(1)
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${num}&idStarts=1001`)
            const get = await response.json();
            setData(get)
        }
        getData();

        document.title = (`(${num}) employees fetch`)
    }, [num])

    return (
        <div>
            <button onClick={() => setNum(num + 1)}>click me {num}</button>
            {
                data.map((elem, index) => {
                    return (
                        <div className='show-data' key={index}>
                            <h4>{elem.firstName}</h4>
                            <h4>{elem.lastName}</h4>
                            <h4>{elem.email}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home