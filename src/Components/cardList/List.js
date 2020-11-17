import React from 'react';
import Card from '../Card/card';
import './list.css';
import { Link } from 'react-router-dom';

const CardList = ({ Post_Ad }) => {


    return (

        <div className="Main-Card">

            <h3>Fresh recommandations</h3>
            <div className='Cardlist'>
                {Post_Ad && Post_Ad.map(Post_Ads => {
                    return (

                        <Link to={'/cardPg/' + Post_Ads.id} key={Post_Ads.id}>

                            

                            <Card Post_Ads={Post_Ads} />


                            


                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default CardList;