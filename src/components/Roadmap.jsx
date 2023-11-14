import React from "react";
import styled from "styled-components";
import {
  RiGoogleFill,
  RiAppleFill,
  RiAmazonFill,
  RiBitCoinFill,
} from "react-icons/ri";
export default function Roadmap() {
  const data = [
    {
      date: "Juli 2012",
      name: "SavingShift",
      description:
        "Bayangkan Anda menabung Rp1.000.000 sebelum krisis 2008 dan terus menyimpan uang Anda. Saldo tabungan di SavingShift terus bertumbuh, membantu Anda mencapai tujuan tabungan Anda.",
      icon: <RiGoogleFill />,
    },
    {
      date: "Juli 2014",
      name: "SavingShift",
      description:
        "Asumsikan Anda menabung Rp1.000.000 di SavingShift, aplikasi tabungan yang mudah digunakan. Saldo tabungan terus meningkat, memberikan jaminan keberhasilan keuangan Anda.",
      icon: <RiAppleFill />,
    },
    {
      date: "Juli 2018",
      name: "SavingShift",
      description:
        "Bayangkan Anda menabung Rp1.000.000 di SavingShift, aplikasi tabungan cerdas. Saldo tabungan terus bertumbuh, mengamankan masa depan finansial Anda.",
      icon: <RiAmazonFill />,
    },
    {
      date: "Juli 2022",
      name: "SavingShift",
      description:
        "Investasikan Rp1.000.000 di SavingShift untuk perjalanan tabungan Anda. Saldo tabungan terus meningkat, membantu Anda mencapai tonggak keuangan Anda.",
      icon: <RiBitCoinFill />,
    },
    
  ];
  return (
    <Section className="flex column gap">
      <div className="title-container text-center">
        <div className="subtitle subdue">
          <h3>Roadmap</h3>
        </div>
        <div className="title">
          <h2>How Investing Can Change Your Future</h2>
        </div>
      </div>
      <div className="roadmap flex gap">
        {data.map(({ date, name, description, icon }, index) => {
          return (
            <div className="map flex column gap-1 a-start" key={index}>
              <div className="icon flex j-center a-center">{icon}</div>
              <h3 className="date">{date}</h3>
              <h3 className="name">{name}</h3>
              <p className="description subdue">{description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  .roadmap {
    overflow-x: scroll;
    overflow-y: hidden;
    padding-bottom: 4rem;
    &::-webkit-scrollbar {
      height: 1px;
    }
    .map {
      min-width: 300px;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 1.3rem;
        left: 1rem;
        height: 100%;
        width: 120%;
        z-index: -1;
        border-top: 3px solid white;
        opacity: 0.5;
      }
      .icon {
        background-color: var(--roadmap-icon);
        padding: 0.5rem;
        border-radius: 100%;

        svg {
          font-size: 2rem;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 2rem;

    .roadmap {
      overflow: initial;
      padding-bottom: 2rem;
      .map {
        min-width: 100%;
      }
      .map::after {
        border-top: none;
      }
    }
  }
`;
