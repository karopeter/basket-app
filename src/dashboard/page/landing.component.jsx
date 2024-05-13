import React from 'react';
import Header from "../../components/header/header.component";
import ContentPage from '../../components/content/content.component';
import FooterPage from '../../components/footer/footer.component';
import "./landing.styles.css";

const Landingpage = () => {
    return (
        <>
         <Header />
         <ContentPage />
         <FooterPage />
        </>
    );
}

export default Landingpage;