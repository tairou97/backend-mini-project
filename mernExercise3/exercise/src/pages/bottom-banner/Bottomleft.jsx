import React from "react";
import imgBig2 from "../../assets/big1.png";
const Bottomleft = () => {
  const Big = [{ img: imgBig2, title: "NEUHEITEN" }];
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

export default Bottomleft;
