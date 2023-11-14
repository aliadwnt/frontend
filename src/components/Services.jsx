import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

export default function Services() {
  const servicesData = [
    {
      image: service1,
      title: "Manage your savings",
      description:
        "Our app allows you to easily manage and grow your savings portfolio.",
    },
    {
      image: service2,
      title: "Set up recurring savings",
      description:
        "Schedule recurring deposits to your savings account for hassle-free wealth-building.",
    },
    {
      image: service3,
      title: "Mobile access",
      description:
        "Access your savings and financial tools on the go with our mobile app.",
    },    
  ];
  return (
    <Section className="flex column j-center a-center gap">
      <div className="title-container flex column gap-1">
        <div className="title text-center ">
          <h2>Start your Invest with us</h2>
        </div>
        <div className="subtitle text-center subdue">
          <h3>
          "Savingshift offers a wide range of features 
          that make it the ideal platform
           to kickstart your savings journey."
          </h3>
        </div>
      </div>
      <div className="services flex j-center a-center gap">
        {servicesData.map(({ image, title, descrption }) => {
          return (
            <div className="service text-center flex column gap-1" key={title}>
              <div className="image">
                <img src={image} alt="servive" />
              </div>
              <h3 className="title">{title}</h3>
              <p className="description subdue">{descrption}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
const Section = styled.section`
  .services {
    padding: 0 5rem;
    gap: 10rem;
    .service {
      .title {
        font-size: 1.5rem;
      }
      .description {
        font-size: 1rem;
        line-height: 1.2rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .services {
      padding: 2rem;
      gap: 3rem;
    }
  }
`;
