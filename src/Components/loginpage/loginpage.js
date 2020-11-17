import React from 'react';
import Home from '../Navbar/Navbar'
import Image from '../Logo/image'
import Top from '../lower/footer'
import ScrollToTop from '../lower/Scroll'
import logo from '../../image/logo.png';
import '../loginpage/loginPage.css'
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ChatBubbleOutlineTwoToneIcon from '@material-ui/icons/ChatBubbleOutlineTwoTone';
import CardList from '../cardList/List';
import Dropdown from 'react-bootstrap/Dropdown'
import { Sign_Out } from '../../Redux store/SignOut_action/action';
import firebase from '../../Database config/firebase';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';




class LoginPage extends React.Component {

    render() {

        let user = this.props.current_user;
        let { Post_Ad } = this.props

        return (


            <div className="foo">

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

                                <img src={user.photo} className="picture" alt="profile picture" />



                                <Dropdown>
                                    <Dropdown.Toggle className="DropOne" >

                                        <ExpandMoreIcon style={{ fontSize: 20, color: "black" }} />

                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown >
                                            <div className="Menu">
                                                <div>
                                                    <img src={user.photo} className="proflie" alt="profile picture" />
                                                </div>
                                                <div className="Name">
                                                    <p>Hello</p>
                                                    <h6>{user.name}</h6>
                                                </div>
                                            </div>
                                        </Dropdown>
                                        <Dropdown.Divider />

                                        <Dropdown >


                                            <button onClick={this.props.Sign_Out()}>
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

                </div >

                <div>

                    <Home />

                </div>

                <div>

                    <Image />

                </div>

                <div>

                    <CardList Post_Ad={Post_Ad} />

                </div>


                <div>

                    <Top />

                </div>

                <div>

                    <ScrollToTop />

                </div>



            </div>



        )
    }
}




const mapStateToProps = (state) => {

    console.log(state)

    return {


        current_user: state.User.current_user,
        Post_Ad: state.firestore.ordered.Post_Ad

    }

}

const mapDispatchToProps = (dispatch) => {

    return {
        Sign_Out: () => dispatch(Sign_Out())
    }

}

export default compose(

    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'Post_Ad' }
    ])

)(LoginPage);