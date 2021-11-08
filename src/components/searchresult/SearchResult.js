import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react'
import './searchresult.css'
import StarIcon from '@mui/icons-material/Star';

const SearchResult = (props) => {
    const { img, location, title, description, star, price, total } = props
    return (
        <div className='searchresult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className='searchresult_heart' />
            <div className="searchresult_info">
                <div className="searchresult_infoTop">
                    <p>{location}</p>
                    <p>{title}</p>
                    <p>_____</p>
                    <p>{description}</p>
                </div>
                <div className="searchresult_infoButtom">
                    <div className="searchresult_stars">
                        <StarIcon className='searchresult_star' />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className="searchresult_price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
