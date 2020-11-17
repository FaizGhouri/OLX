import React from 'react';
import Home from '../Navbar/Navbar'
import '../page/page.css'
import CallIcon from '@material-ui/icons/Call';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Top from '../lower/footer'
import logo from '../../image/logo.png';
import '../loginpage/loginPage.css'
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ChatBubbleOutlineTwoToneIcon from '@material-ui/icons/ChatBubbleOutlineTwoTone';
import Dropdown from 'react-bootstrap/Dropdown'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import Slider from 'react-slick'






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

    const { Post_Ads, current_user } = props;
   
    


    if (Post_Ads) {

        return (



            <div className="page">
                <div>
                    <div className="first fixed-top" >

                        <div className="head">


                            <div>
                                <Link to='/loginpage'>
                                    <img src={logo} className="logo" alt="logo" />
                                </Link>

                            </div>


                            <div className="seacrhBar">
                                <i className="fa fa-search fa-lg" aria-hidden="true"></i>
                                <input type="text" className="input" placeholder="Search" value="Pakistan" />
                                <ExpandMoreIcon className="ex" style={{ fontSize: 50 }} />

                            </div>


                            <div className="longSearch">

                                <input type="text" placeholder="Find Cars, Mobile Phone and more..." className="long" />


                                <IconButton className="btn">
                                    <SearchIcon className="searchBTn" style={{ fontSize: 35 }} />
                                </IconButton>


                            </div>



                            <div className="SearchBtn">

                                <NotificationsNoneOutlinedIcon className="notification" style={{ fontSize: 25 }} />

                                <ChatBubbleOutlineTwoToneIcon className="notification" style={{ fontSize: 25 }} />

                                <img src={current_user.photo} className="picture" alt="profile picture" />



                                <Dropdown>
                                    <Dropdown.Toggle className="DropOne" >

                                        <ExpandMoreIcon style={{ fontSize: 20, color: "black" }} />

                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown >
                                            <div className="Menu">
                                                <div>
                                                    <img src={current_user.photo} className="proflie" alt="profile picture" />
                                                </div>
                                                <div className="Name">
                                                    <p>Hello</p>
                                                    <h6>{current_user.name}</h6>
                                                </div>
                                            </div>
                                        </Dropdown>
                                        <Dropdown.Divider />

                                        <Dropdown >


                                            <button >
                                                LogOut
                                            </button>

                                        </Dropdown>


                                    </Dropdown.Menu>
                                </Dropdown>

                                <Link to="/postCard" >

                                    <button className="sell" ><AddIcon style={{ fontSize: 20 }} />  SELL</button>

                                </Link>


                            </div>


                        </div >

                    </div>
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
                                            <img className="ImgAddress" src={Post_Ads.photo} alt={props} />
                                        </div>

                                    </Slider>

                                </div>

                            </div>

                        </div>

                        <div className="br123">

                            <div className="chat">

                                <h1>Rs {Post_Ads.Price}</h1>



                                <p className="camry">{Post_Ads.Item}</p>

                                <div className="locda">

                                    <p className="location">{Post_Ads.location}</p>
                                    <p className="date">{moment(Post_Ads.createAt.toDate().toString()).format("MMM Do YY")}</p>

                                </div>

                            </div>
                            <div className="description">

                                <h3>Seller description</h3>

                                <div className="sellers">
                                    <img src={"https://statics.olx.com.pk/external/base/img/loginEntryPointChat.webp"} width="80px" alt="pix" />

                                    <p className="carNax">
                                        {Post_Ads.username}
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
    const current_user = state.User.current_user;
   

    return {

        Post_Ads: Post_Ads,
        current_user: current_user,
      
    }
}


export default compose(

    connect(mapStateToProps, null),
    firestoreConnect([
        { collection: 'Post_Ad' }
    ])

)(PageRout);