import React from 'react';
import '../Card/card.css';
import { connect } from 'react-redux';
import moment from 'moment';




const Card = ({ Post_Ads }) => {


    return (

        <div className="AllCard">

            <div className="DivSquare">



                <div className="pic">

                    <p className="fea">FEATURED</p>

                    <img src={Post_Ads.photo} alt="pix" className="pix" />

                </div>
                <div className="price">


                    <h5>{Post_Ads.Price}</h5>


                    {Post_Ads.Item}


                </div>

                <div>
                    <h6>{moment(Post_Ads.createAt.toDate().toString()).format("MMM Do YY")}</h6>
                </div>
            </div>

        </div>


    )
}



const mapStateToProps = (state) => ({

    current_user: state.current_user,
    Post_Ad: state.Post_Ad,

})


export default connect(mapStateToProps, null)(Card);