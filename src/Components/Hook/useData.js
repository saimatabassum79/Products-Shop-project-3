import React, { useEffect, useState } from 'react';

const useData = () => {
    const [tours, setTours] = useState();
    useEffect(() => {
        fetch('/TourData.json')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return{tours}
};

export default useData;