import React from "react";
import "./Make.css";

function Make(props) {
  return (
    <div class="make">
      <div class="container">
        {props.resources.map(resource => (
          <div class="cards">
            <div class="face face1">
              <div class="content">
                <img src={resource.image} />
                <h3>{resource.name}</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  cum cumque minus iste veritatis provident at.
                </p>
                <a href={resource.link}>Start Exploring !</a>
              </div>
            </div>
          </div>
        ))}
        {/*
        <div class="cards">
          <div class="face face1">
            <div class="content">
              <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
              <h3>Code</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident at.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div class="cards">
          <div class="face face1">
            <div class="content">
              <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
              <h3>Launch</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum cumque minus iste veritatis provident at.
              </p>
              <a href="#">Read More</a>
            </div>
          </div> */}
      </div>
    </div>
  );
}

export default Make;
