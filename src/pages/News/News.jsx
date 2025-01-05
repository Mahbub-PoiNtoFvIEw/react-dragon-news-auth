import React from 'react';
import Header from '../shared/Header/Header';
import RightSideNav from '../shared/RightSideNav/RightSideNav';
import NavBar from '../shared/NavBar/NavBar';

const News = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className='grid grid-cols-4'>
                <div className='col-span-3'>
                    <h2>News Details coming soon....</h2>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;