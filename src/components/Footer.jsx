import React from "react";
import styled from "styled-components";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import cards from "../assets/cards.png";

const Footer = () => {
  const socialIcons = [<BsFacebook />, <BsTwitter />, <BsYoutube />];

  return (
    <FooterContainer>
      <UpperFooter>
        <BrandInfo>
          <h2>SavingShift</h2>
          <p>
            Perumahan Wahyu Pesona Mandiri,
            Mejayan, Kab. Madiun, Jawa Timur
          </p>
        </BrandInfo>
        <ContactInfo>
          <div>
            <span>Phone: +62812 2788 3455</span>
          </div>
          <div>
            <span>Email: Admin@savingShift.com</span>
          </div>
        </ContactInfo>
        <SocialIcons>
          {socialIcons.map((icon, index) => (
            <div className="icon" key={index}>
              {icon}
            </div>
          ))}
        </SocialIcons>
      </UpperFooter>
      <LowerFooter>
        <CardImage>
          <img src={cards} alt="cards" />
        </CardImage>
        <LegalInfo>
          <p>&copy; 2023 SavingShift. All rights reserved.</p>
          <p>Privacy Policy | Terms & Conditions</p>
        </LegalInfo>
      </LowerFooter>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 2rem 5rem;
  background: #1a1a1a;
  color: white;
`;

const UpperFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`;

const BrandInfo = styled.div`
  flex: 1 1 30%;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 14px;
    color: #888;
  }
`;

const ContactInfo = styled.div`
  flex: 1 1 30%;

  div {
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 14px;
  }
`;

const SocialIcons = styled.div`
  flex: 1 1 30%;
  display: flex;
  gap: 1rem;

  .icon {
    font-size: 1.5rem;
  }
`;

const LowerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
`;

const CardImage = styled.div`
  flex: 1 1 30%;
  img {
    width: 100%;
    max-width: 200px;
  }
`;

const LegalInfo = styled.div`
  flex: 1 1 70%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 12px;
`;

export default Footer;
