import React, { useState } from 'react'
import './banner.css'
import { Button } from '@mui/material'
import Search from '../search/Search';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className='banner'>
            <div className="banner_search">
                <Button varient='outlined' className='banner_searchButton' onClick={() => { setShowSearch(!showSearch) }}>{!showSearch ? 'Search Dates' : 'Hide'}</Button>
                {showSearch && <Search />}
            </div>
            <div className="banner_info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button varient='outlined' onClick={() => { navigate('/search') }}>
                    Explore Nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner
