import React from "react";
import styled from "styled-components";
import { FaChevronCircleRight } from "react-icons/fa";
import home from "../assets/home.png";
import badgePercent from "../assets/badge-percent.png";
import Button from "./Button";

export default function Home() {
  return (
    <Section className="flex j-center a-center gap gap-2">
      <div className="content flex column gap-2">
        <div className="subtitle">
          <h3 className="flex a-center gap-1 blue">
            <span>
              <img src={badgePercent} alt="badgepercent" />
            </span>{" "}
            Investment made easy
          </h3>
        </div>
        <div className="title">
          <h1>Access Your Savings Anywhere, Anytime</h1>
        </div>
        <div className="description">
          <p className="subdue">
          Experience the convenience of accessing your savings with our app, 
          making it easier for you to manage your finances no matter where you are.
          </p>
        </div>
        <div className="buttons flex gap-1">
          <Button text="Try Now" icon={<FaChevronCircleRight />} />
          <Button text="Testimonial?" subduedButton />
        </div>
      </div>
      <div className="image">
        <img src={home} alt="home" className="half-width" />
      </div>
    </Section>
  );
}

const Section = styled.section`
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .subtitle {
      h3 {
        flex-direction: row;
      }
    }
    .buttons {
      flex-direction: row;
      margin: 2rem 0;
      gap: 1rem;
    }
  }
`;
