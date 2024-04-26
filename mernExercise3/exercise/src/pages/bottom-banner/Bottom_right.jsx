import React from "react";

import imgBig3 from "../../assets/big2.png";

const Bottom_side = () => {
  const Big = [{ img: imgBig3, title: "DAUERHAFT REDUZIERT" }];
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="banner carousel slide  "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {Big.map((item) => (
          <div className="" key={item.id}>
            <img className="" src={item.img} alt={item.title} />
            <h2 className="h2">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bottom_side;
