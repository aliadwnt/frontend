import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bitcoin from "../assets/bitcoin.png";
import ethereum from "../assets/ethereum.png";
import ggcoin from "../assets/ggcoin.png";

export default function DailyPrices() {
  const data = [
    {
      name: "Belanja",
      image: bitcoin,
      short: "Alfamart",
      price: "Rp. 205.000",
      change: "Rp. 5.000.000",
    },
    {
      name: "Tagihan",
      image: ethereum,
      short: "PLN",
      price: "Rp. 205.000",
      change: "Rp. 5.000.000",
    },
    {
      name: "Tagihan",
      image: ggcoin,
      short: "BPJS",
      price: "Rp. 205.000",
      change: "Rp. 5.000.000",
    },
    {
      name: "Pembayaran",
      image: bitcoin,
      short: "Pendidikan",
      price: "Rp. 205.000",
      change: "Rp. 5.000.000",
    },
  ];

  const getPriceChangeClassName = (change) => {
    const changeNum = change[0];
    if (changeNum === "+") return "text-success";
    else if (changeNum === "-") return "text-danger";
    else return "";
  };

  return (
    <Section className="py-4">
      <Container>
        <h1>Recent Transaction</h1>
        <span></span>
        <Row className="border-bottom pb-2">
          <Col xs={2}>No</Col>
          <Col xs={4}>Kategori Pengeluaran</Col>
          <Col xs={2}>Pengeluaran</Col>
          <Col xs={2}>Tabungan</Col>
        </Row>
        {data.map(
          ({ name, image, short, price, change }, index) => {
            return (
              <StyledRow className="align-items-center border-bottom py-2" key={price}>
                <Col xs={2}>{index + 1}</Col>
                <Col xs={4} className="d-flex align-items-center">
                  <img src={image} alt="name" className="me-2" />
                  <div>
                    <div>{name}</div>
                    <div className="text-muted small">{short}</div>
                  </div>
                </Col>
                <Col xs={2}>{price}</Col>
                <Col xs={2} className={getPriceChangeClassName(change)}>
                  {change}
                </Col>
              </StyledRow>
            );
          }
        )}
      </Container>
    </Section>
  );
}

const Section = styled.section`
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  span {
    display: block;
  }

  .text-success {
    color: #28a745;
  }

  .text-danger {
    color: #dc3545;
  }
`;

const StyledRow = styled(Row)`
  transition: background-color 0.3s;

  &:hover {
    background-color: #e2e8f0;
  }
`;
