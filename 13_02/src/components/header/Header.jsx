import React from 'react';
import Title from "../title/Title";


 const Header = () => <Title />;


 Title.defaultProps = {
    value: "Здесь Title"
 };
export default Header;


//Eslint, Prettier