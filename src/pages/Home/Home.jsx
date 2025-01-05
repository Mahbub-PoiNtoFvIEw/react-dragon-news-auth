import React from 'react';
import Header from '../shared/Header/Header';
import NavBar from '../shared/NavBar/NavBar';
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-2'>
                    {
                        news.map((aNews, idx) => <NewsCard key={idx} aNews={aNews}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;