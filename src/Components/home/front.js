import React from 'react';
import Header from '../Header/Header'
import Home from '../Navbar/Navbar'
import Image from '../Logo/image'
import Top from '../lower/footer'
import ScrollToTop from '../lower/Scroll'
import FooterAd from '../FooterAd/FooterAd';
import { connect } from 'react-redux';
import CardList from '../cardList/List';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class FrontPage extends React.Component {

    render() {


        let { Post_Ad } = this.props;

        return (


            <div className="foo">

                <div>

                    <Header />

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

                    <FooterAd />

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

    return{

        
        current_user: state.User.current_user,
        Post_Ad: state.firestore.ordered.Post_Ad
        
    }

}


export default compose(

    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'Post_Ad' }
    ])

)(FrontPage);