import React from 'react';
import "./SmallCard.css";

export default function SmallCard({tip, nume, pret, pic, stoc }) {
  return (
   
<body>

    <div className="container">
        <div className="card">
            <div className="imgBx">
                <img src={require(`../images/${pic}.png`)} alt={nume}/>
            </div>

            <div className="contentBx">

                <h2>{nume}</h2>

                <div className="size">
                    <h3>Size :</h3>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div>

                <div className="color">

                    <h3>Color :</h3>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p>Buy Now</p>
            </div>

        </div>
    </div>

</body>
  
  )
}
