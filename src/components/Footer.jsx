import React from "react";
import styled from "styled-components";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import spacemen from "../assets/spacemen.png";
import cards from "../assets/cards.png";

export default function Footer() {
  const companyLinks = [
    "About",
    "Careers",
    "Affiliates",
    "Blog",
    "Press",
    "Investors",
    "Legal & Privacy",
    "Cookie policy",
    "Cookie preferences",
  ];
  const LearnLinks = [
    "Browse crypto prices",
    "Coinbase Bytes newsletter",
    "Crypto basics",
    "Tips & Tutorials",
    "Market Updates",
    "What is SavingShift?",
    "What is crypto?",
    "What is a blockchain?",
    "How to set up a crypto wallet",
    "How to send crypto",
  ];
  const socialIcons = [<BsFacebook />, <BsTwitter />, <BsYoutube />];

  return (
    <Foot className="flex column gap">
      <div className="upper-footer flex gap">
        <div className="column">
          <div className="brand">
            <h2>SavingShift</h2>
          </div>
          <div className="address">
            <p>
              Perumahan Wahyu Pesona Mandiri,
              Mejayan, Kab. Madiun, Jawa Timur
            </p>
          </div>
          <div className="info">
            <span>Phone: +62812 2788 3455</span>
            <span>Email: Admin@savingShift.com</span>
          </div>
          <div className="social-icons flex gap-2">
            {socialIcons.map((icon, index) => (
              <div className="icon" key={index}>
                {icon}
              </div>
            ))}
          </div>
        </div>
        <div className="column">
          <div className="title">
            <h3>Company</h3>
          </div>
          <ul className="flex column gap-half">
            {companyLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="column">
          <div className="title">
            <h3>Learn</h3>
          </div>
          <ul className="flex column gap-half">
            {LearnLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="column">
          <div className="title">
            <h3>Company</h3>
          </div>
          <ul className="flex column gap-half">
            {companyLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col spacemen">
          <div className="image">
            <img src={spacemen} alt="spacemen" />
          </div>
        </div>
      </div>
      <div className="lower-footer flex a-center j-between gap">
        <div className="cards">
          <img
            src={cards}
            alt="cards"
            style={{ maxWidth: '400px', maxHeight: '100px' }}
          />
        </div>
        <div className="col1">
          <div className="col2 flex a-center gap">
          <h7 style={{ fontSize: '12px' }}>
    &copy; 2023 || SavingShift || Privacy Policy || Terms & Conditions
  </h7>
          </div>
        </div>
      </div>
    </Foot>
  );
}

const Foot = styled.footer`
  padding: 0rem 5rem;
  padding-bottom: 3rem;
  position: relative;
  .upper-footer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    .social-icons {
      margin-top: 2rem;
      svg {
        font-size: 2rem;
      }
    }
    .spacemen {
      position: absolute;
      right: 0rem;
      top: -23rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem 2rem;
    .social-icons {
      display: none;
      flex-direction: row;
    }
    .upper-footer {
      flex-direction: row;
      gap: 2rem;
      .column {
        width: 100%;
      }
    }
    .spacemen {
      display: none;
    }
    .cards {
      img {
        width: 80vw;
      }
    }
  }
`;
