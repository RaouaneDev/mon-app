import React from "react";
import "./ingredient.css";
import ingredient from "../../../assets/fraise.jpg";

const Ingredient = ()=>{
    return (
        <section className="ingredient">
            <div className="container">
                <div className="row">
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
                    <div className="col-md-6">
                    <img src ={ingredient} title ="img"/>
                    </div>
                    
                   
                </div>
            </div>
        </section>
    );
}
export default Ingredient