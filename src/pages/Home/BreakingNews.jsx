import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <div className='flex'>
            <button className='btn btn-secondary'>Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className='mr-6' to="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, numquam.</Link>
                <Link className='mr-6' to="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, numquam.</Link>
                <Link className='mr-6' to="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, numquam.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;