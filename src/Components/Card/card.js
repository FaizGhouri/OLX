import React from 'react';
import '../Card/card.css';
import { connect } from 'react-redux';
import moment from 'moment';




const Card = ({ Post_Ads }) => {


    return (

        <div className="big">


            <div className="AllCard">
             

                <div className="DivSquare">

                    <div className="card">


                        <div className="pic">

                            <p className="fea">FEATURED</p>

                            <img src={Post_Ads.photo} alt="pix" className="pix" />

                        </div>
                        <div className="price">


                            <h5>Rs {Post_Ads.Price}</h5>


                            <p>{Post_Ads.Item}</p>


                        </div>

                        <div className="loctda">

                            <p>{Post_Ads.location}</p>

                            <p className="date">{moment(Post_Ads.createAt.toDate().toString()).format("MMM Do YY")}</p>
                        </div>
                    </div>

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