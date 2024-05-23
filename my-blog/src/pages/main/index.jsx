import React, {useEffect, useState} from 'react';
import Header from '../../components/header';
import BlogEntries from '../../components/blogEntries';
import IntroductionMenu from '../../components/introductionMenu';
import Footer from '../../components/footer';

const MainPage = () => {
    return (
    <>

    <div className="w3-content" style={{maxWidth:"1400px"}}>
        <Header />
    <div className='w3-row'>
        <BlogEntries />
        <IntroductionMenu />
    </div>
    </div>
    <Footer />
    </>
    );
}

export default MainPage;
