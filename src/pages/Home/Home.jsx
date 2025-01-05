import React, { useState } from 'react';
import Header from '../shared/Header/Header';
import NavBar from '../shared/NavBar/NavBar';
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Home = () => {
    const news = useLoaderData();
    const [dataLength, setDataLength] = useState(3);
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
                        news.slice(0, dataLength).map((aNews, idx) => <NewsCard key={idx} aNews={aNews}></NewsCard>)
                    }
                    <div className='mb-4'>
                        <button 
                        className={`btn w-full bg-blue-600 text-white ${dataLength === news.length || dataLength === Math.floor(news.length/2) ? "hidden" : ""}`}
                        onClick={()=>setDataLength(Math.floor(news.length/2))}>show more news <IoIosArrowDown></IoIosArrowDown></button>

                        <button 
                        className={`btn w-full bg-blue-600 text-white ${dataLength !== Math.floor(news.length/2) && "hidden"}`}
                        onClick={()=>setDataLength(news.length)}>show more news <IoIosArrowDown></IoIosArrowDown></button>

                        <button 
                        className={`btn w-full bg-blue-600 text-white ${dataLength !== news.length && "hidden"}`}
                        onClick={()=>setDataLength(3)}>less news <IoIosArrowUp></IoIosArrowUp></button>
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;