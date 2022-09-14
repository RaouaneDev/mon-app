import React from "react";
import Data from "../../../data";
import "./box.css"

const Box = () => {

    const boxitem = Data.map((item) => {
        return (
           
                <div className="col-md-3">
               <div className="box">
               <img src={item.img} />
                <h5>{item.title}</h5>
                <span>{item.price}</span>
                <button>order now</button>
               </div>
            </div>
            
        );
    })
    return (
        <section>
            <div className="boxs">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <h1>Expolre our Fruits </h1>
                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                <br />since the 1500s, when an unknown printer took a galley
                            </p>
                            
                        </div>
                        <div className="row">
                                
                                   {boxitem}
                               

                            </div>
                    </div>
                    
                </div>


            </div>
        </section>

    );
}
export default Box;
