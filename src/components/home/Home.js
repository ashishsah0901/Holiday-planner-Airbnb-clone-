import React from 'react'
import Banner from '../banner/Banner'
import './home.css'
import Card from '../card/Card'

const Home = () => {
    return (
        <div className='home'>
            <Banner />
            <div className="home_section">
                <Card src='https://a0.muscache.com/im/pictures/dc670b54-f7c8-413f-9f40-3352132d19a3.jpg' title='Ocean View Sanctuary' description='Entire apartment hosted by Maya
                6 guests1 bedroom1 bed1 bathroom' price='₹6,678 / night' />
                <Card src='https://a0.muscache.com/im/pictures/lombard/MtTemplate-2729659-media_library/original/7f09890c-57ad-4133-9aea-34196592a5ca.jpeg' title='Photoshoot with a photographer in Mumbai' description='Experience hosted by Samuel Rasoori 4 hoursHosted in English' price='From $110/ person' />
                <Card src='https://a0.muscache.com/im/pictures/b3c3cf95-123c-43cb-9079-19803f47d1ed.jpg' title='Estudio 5 meters from the beach' description='Entire rental unit hosted by Rodrigo 4 guestsStudio2 beds1 bathroom' price='₹5,713 / night' />
            </div>
            <div className="home_section">
                <Card src='https://a0.muscache.com/im/pictures/miso/Hosting-53187405/original/7432ece2-7d61-4fa5-a290-1bdf70a6bc4b.jpeg' title='¡Increíble Departamento en la mejor zona de Gdl!' description='Entire serviced apartment hosted by Gretta 4 guests1 bedroom1 bed1 bath' price='$2,452.04 AUD total' />
                <Card src='https://a0.muscache.com/im/pictures/19f6700b-4786-49f2-b7dc-4609261a9ab8.jpg' title='Harbour Studio' description='Entire serviced apartment hosted by Hansie & Fienie 2 guests1 bedroom1 bed1 bath' price='$205.63 AUD total' />
                <Card src='https://a0.muscache.com/im/pictures/8d77f77d-7970-470f-b0a8-1a19caa8204d.jpg' title='♥BEACH SIDE♥Near 5th Av + BEACH CLUB COMP♥FAVORITE' description='Entire condominium (condo) hosted by J 11 guests3 bedrooms5 beds3 baths' price='$1,708.22 AUD total' />
            </div>
        </div>
    )
}

export default Home
