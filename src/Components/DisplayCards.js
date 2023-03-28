import React from "react";
import { Card } from "antd";
import { GiCapitol, GiPathDistance } from "react-icons/gi";
import { IoIosPeople, IoMdGlobe, IoTimeSharp } from "react-icons/io";

import { FieldTimeOutlined } from "@ant-design/icons";
import "./scss/displayCards.scss";

const { Meta } = Card;

const DisplayCards = ({ regionInfo }) => {
  const currencies = Object.values(regionInfo[0].currencies)[0];
  return (
    <>
      <Card
        className="regionCard"
        actions={[
          <span>
            <span className="regionCurrency">{currencies.symbol}</span>
            <br />
            {currencies.name}
          </span>,
          <span>
            <GiPathDistance className="regionarea" /> <br />
            {regionInfo[0].area}
          </span>,
          <span>
            <IoMdGlobe className="regionContinent" />
            <br />
            {regionInfo[0].continents[0]}
          </span>,

          <span>
            <IoIosPeople className="regionpopulation" />
            <br />
            {regionInfo[0].population}
          </span>,
          <span>
            <FieldTimeOutlined className="regionTime" />
            <br />
            {regionInfo[0].timezones[0]}
          </span>,
        ]}
        cover={
          <img
            src={regionInfo[0].flags.png}
            className="regionFlag"
            alt={regionInfo[0].flags.alt}
          />
        }
      >
        <Meta
          title={regionInfo[0].name.common}
          description={
            <span>
              <GiCapitol /> {regionInfo[0].capital[0]}
              <br />
              <img
                src={regionInfo[0].coatOfArms.svg}
                className="coatArmimages"
              />
            </span>
          }
        />
      </Card>
    </>
  );
};

export default DisplayCards;
