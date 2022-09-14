import React, { Fragment } from "react";
import Box from "./Boxs/box";
import Header from "./Header/header";
import Ingredient from "./Ingredient/ingredient";
import NumberSection from "./NumberSection/numberSection";
import Paralax from "./Paralax/paralax";
import Pride from "./Pride/pride";

const Home = ()=>{
    return(
       <Fragment>
       <Header/>
       <NumberSection/>
       <Pride/>
       <Ingredient/>
       <Paralax/>
       <Box/>
       </Fragment>
    );
}
export default Home;