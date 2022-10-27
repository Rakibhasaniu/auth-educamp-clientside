import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [titles, setTitle] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setTitle(data))
    },[])
    return (
        <div>
            <h2>Course Title : {titles.length}</h2>
             <div>
                {
                    titles.map(title => 
                    <p
                    key={title._id}
                    >
                        <Link>{title.title}</Link>
                        
                    </p>)
                }
            </div> 
        </div>
    );
};

export default LeftSideNav;