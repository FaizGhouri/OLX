import React from 'react';
import '../Sell_login/sell.css';
import logo from '../../image/logo.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Google_Signin, facebook_login } from '../../Redux store/Sell_action/index';
import PostTOAdd from '../post/postCard'



class Sign_Up extends React.Component {
    render() {
        return (



            <div>


                <div className="firsts" >

                    <Link to="/">

                        <ArrowBackIcon style={{ fontSize: 30, color: "#002f34", cursor: "pointer" }} />

                    </Link>


                    <div>
                        <img src={logo} className="logos" alt="logo" />

                    </div>




                </div >

                <div className="login">


                    <div className="Sign_in">


                        <div className="Cr456">

                            <p className="HeadOne">SIGN IN</p>

                            <div className="hello">
                                <p >Hello there! Sign start managing your Store item</p>

                            </div>



                            <div className="withBtn">




                                <button className="ConBtn" onClick={() => { this.props.facebook_login(this.props.history) }}>Continue with Facbook</button>
                                <button className="ConBtn" onClick={() => { this.props.Google_Signin(this.props.history) }}>Continue with Google</button>



                            </div>
                        </div>

                    </div>

                </div>



            </div>





        );
    }
}



const mapStateToProps = (state) => ({

    current_user: state.current_user,

})

const mapDispatchToProp = (dispatch) => ({

    Google_Signin: (history) => dispatch(Google_Signin(history)),

    facebook_login: (history) => dispatch(facebook_login(history))


})

export default connect(mapStateToProps, mapDispatchToProp)(Sign_Up);
