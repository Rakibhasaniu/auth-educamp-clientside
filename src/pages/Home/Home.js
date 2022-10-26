import React, { useEffect, useState } from 'react';
import DisplayDetails from '../DisplayDetails/DisplayDetails';

const Home = () => {
    const [titles, setTitle] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/course-categories')
        .then(res => res.json())
        .then(data => setTitle(data))
    },[])
    return (
        <div>
            <h2>This Is Home</h2>
            <div>
                {
                    titles.map(ti => <DisplayDetails key={ti._id} ti={ti}></DisplayDetails>)
                }
            </div>
        </div>
    );
};

export default Home;