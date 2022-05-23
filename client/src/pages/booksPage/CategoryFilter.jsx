import React, { useState } from "react";
import "./CategoryFilter";

function CategoryFilter(){
    const [isActive, setIsActive]= useState(false)
    return(
      
        <div className="dropup">
            <div className="dropbtn" onClick={(e) => setIsActive(!isActive)}>
                فئة الكتاب
                <span className="span-dd"></span>
            </div>
                <div className="dropup-content">
                    <div className="dd-item"></div>
                </div>
           
            
        </div>
    )
}
export default CategoryFilter;
