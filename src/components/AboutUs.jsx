import React from "react";
import styled from "styled-components";
import { FaChevronCircleRight } from "react-icons/fa";

import about from "../assets/about.png";
import Button from "./Button";
export default function AboutUs() {
  return (
    <Section className="flex a-center gap">
      <div className="content flex column gap">
        <div className="title-container flex column j-center a-center gap-1">
          <div className="subtitle subdue">
            <h3>About Us</h3>
          </div>
          <div className="title">
            <h2>Why Would You Choose SavingShift?</h2>
          </div>
        </div>
        <div className="flex gap">
          <div className="info flex column gap a-start j-center">
            <p className="subdue">User-Friendly Platform  –</p>
            <p className="subdue">
            "We don't require you to link your bank accounts; 
            our goal is to provide everyone with the opportunity 
            to grasp the potential of saving and investing, 
            whether it's for retirement or short-term goals. 
            We utilize data analytics to simplify 
            the way you manage your savings and investments"
            </p>
            {/* <Button text="Start Earning" icon={<FaChevronCircleRight />} /> */}
          </div>
          <div className="image">
            <img src={about} alt="about" className="half-width" />
          </div>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .title-container {
      text-align: center;
    }
  }
`;
