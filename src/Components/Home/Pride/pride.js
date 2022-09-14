import React from "react";
import prideimg from "../../../assets/kiwi.jpg";
import "./pride.css"

const Pride = ()=>{
    return(

        <section className="pride">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <img src ={prideimg} title ="img"/>
                    </div>
                    <div className="col-md-6">
                        
                    <h2>
                     Why do we use it?
                     </h2>
                     <p>
                     is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                     <br/>dummy text ever since the 1500s, when an unknown printer took a galley
                     </p>
                     <button ><a href="#"></a>learn more</button>
                    </div>
                   
                </div>
            </div>
        </section>
    );
}
export default Pride;