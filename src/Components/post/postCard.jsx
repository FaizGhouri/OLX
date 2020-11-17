import React from 'react';
import '../post/ad.css';
import logo from '../../image/logo.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
import { connect } from 'react-redux';
import { createAd } from '../../Redux store/Post/action';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


class PostToAdd extends React.Component {


    constructor() {
        super()
        this.state = {

        }

    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createAd(this.state)
    }


    render() {


        const user = this.props.current_user
        return (

            <div>

                <div className="key">

                    <div className="post fixed-top">

                        <Link to='/loginpage'>

                            <ArrowBackIcon style={{ fontSize: 25, color: "#002f34", cursor: "pointer" }} />

                        </Link>


                        <img className="OLXlogo" src={logo} alt="profile" />

                    </div>
                </div>


                <div className="On12">
                    <div className="ads">
                        <div>

                            

                        </div>
                        <div>

                            <p >POST YOUR ADS</p>

                        </div>

                    </div>


                    <div className="container">

                        <form onSubmit={this.handleSubmit} className="white">


                            <h5 className="card-content gray-text text-darken-3" style={{textAlign:'center'}}>Details</h5>

                            <div className="input-field">
                                <label htmlFor="Item">ITEM NAME</label>
                                <input className="item" type="text" id="Item" required="Required" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="category">CATEGORY</label>
                                <input className="FromCon" type="text" id="category" required="Required" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="Condition">CONDITION</label>
                                <input className="Con23" type="text" id="Condition" required="Required" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="make">MAKE</label>
                                <input className="Con23" type="text" id="make"required="Required" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="model">MODEL</label>
                                <input className="Con23" type="text" id="model" required="Required" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="year">YEAR</label>
                                <input className="year" type="text" id="year" required="Required" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="Price">PRICE</label>
                                <input className="year" type="text" id="Price" required="Required" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="photo">PHOTO</label>
                                <input className="year" type="url" id="photo" required="Required" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="location">LOCATION</label>
                                <input className="year" type="text" id="location" required="Required" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label className="Crip" htmlFor="description">DESCRIPTION</label>
                                <input  id="description" cols="60" rows="10" className="material" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                                <button className=" Adspost" onClick={()=>alert("Your Ad Post")}>POST</button>
                            </div>


                        </form>
                    </div>
                  
                </div>


            </div>

        )
    }
}



const mapDispatchToProp = (dispatch) => ({

    createAd: (Post_Ads) => dispatch(createAd(Post_Ads))


})

export default connect(null, mapDispatchToProp)(PostToAdd);