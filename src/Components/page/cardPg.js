import React from 'react';
import Header from '../Header/Header'
import Home from '../Navbar/Navbar'
import '../page/page.css'
import CallIcon from '@material-ui/icons/Call';
import Top from '../lower/footer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from 'react-redux'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';





const settings = {
    dots: true,
    infinte: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slidies",
}


const PageRout = (props) => {

    const { Post_Ads } = props;
    
    

    if (Post_Ads) {

        return (



            <div className="page">
                <div>
                    <Header />
                </div>
                <div>

                    <Home />

                </div>
                <div className="pageAll">
                    <div class="vehicles">
                        <p className="Cantt">Home</p> /
                        <p className="Cantt">Vehicles</p>/
                        <p className="Cantt">Cars</p>/
                        <p className="Cantt">Cars in punjab</p>/
                        <p className="Cantt">Cars in Lahore</p> /
                        <p className="Cantt">Cars in Cantt</p>/
                        <p className="Cantt">Toyota in Cantt</p>/
                        <p className="Cantt">Camry in Cantt</p>
                    </div>


                    <div className="carsoulOpen">

                        <div className="car123">

                            <div className="box">


                                <div className="pictures" >



                                    <Slider {...settings}>


                                        <div className="">
                                            <img className="ImgAddress" src={Post_Ads.photo} alt="Picture" />
                                        </div>

                                    </Slider>

                                </div>

                            </div>

                        </div>

                        <div className="br123">

                            <div className="chat">

                                <h1>Rs {Post_Ads.Price}</h1>

                                <p className="kms">2011 - 75,000 km</p>

                                <p className="camry">{Post_Ads.Item}</p>

                                <div className="locda">

                                    <p className="location">Cantt,Lahore,Punjab</p>
                                    <p className="date">Oct 22</p>

                                </div>

                            </div>
                            <div className="description">

                                <h3>Seller description</h3>

                                <div className="sellers">
                                    <img src={"https://statics.olx.com.pk/external/base/img/loginEntryPointChat.webp"} width="80px" alt="pix" />

                                    <p className="carNax">
                                        {/* {this.props.Post_Ad.username} */}
                                        <p className="member">Member Since 2015</p>
                                    </p>

                                </div>

                                <div className="SellerBtn">
                                    <button className="CHS">Chat with seller</button>
                                </div>

                                <div >
                                    <div className="caller">

                                        <CallIcon className="callicon" />

                                        <p className="star">** *** ****</p>

                                        <p className="Num"><u>Show number</u></p>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="detail">

                        <div className="AllDetails">
                            <div>

                                <h5>Details</h5>

                            </div>

                            <div>
                                <table>

                                    <tr>
                                        <td className="make">Item Name</td>
                                        <td className="model">{Post_Ads.Item}</td>
                                        <td className="make">Make</td>
                                        <td className="model">{Post_Ads.make}</td>
                                    </tr>
                                    <tr>
                                        <td className="make">Model</td>
                                        <td className="model">{Post_Ads.model}</td>
                                        <td className="make">Condition</td>
                                        <td className="model">{Post_Ads.Condition}</td>
                                    </tr>
                                    <tr>
                                        <td className="make">Year</td>
                                        <td className="model">{Post_Ads.year}</td>
                                        <td className="make"></td>
                                        <td className="model"></td>
                                    </tr>

                                </table>
                            </div>
                            <hr />
                            <div>
                                <h5>Description</h5>

                                {Post_Ads.description}
                                
                            </div>

                        </div>


                    </div>

                </div>

                <div>
                    <Top />
                </div>

            </div>

        )
    }
    else {



        return (

            <div className='container'>
                Loading Page....
            </div>

        )
    }
}



const mapStateToProps = (state, ownProps) => {

    console.log(state)
    const id = ownProps.match.params.id;
    const Post_Ad = state.firestore.data.Post_Ad;
    const Post_Ads = Post_Ad ? Post_Ad[id] : null;

    return {

        Post_Ads: Post_Ads

    }
}


export default compose(

    connect(mapStateToProps, null),
    firestoreConnect([
        { collection: 'Post_Ad' }
    ])

)(PageRout);