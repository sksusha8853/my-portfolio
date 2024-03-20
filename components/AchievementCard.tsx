import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { AchievementsType, ExperienceType } from "../types/sections";

const AchievementCard = ({ achievementTitle, achievementImage, desc, duration }: AchievementsType) => {
  return (
    <Col lg="6">
      <Card style={{ flex: 1 }} className="shadow-lg--hover my-4 shadow border-0 text-center rounded h-100">
        <CardBody className="">
          <img
            src={achievementImage}
            style={{
              objectFit: "cover",
              left: 0,
              right: 0,
              top: "7rem",
              marginLeft: "auto",
              marginRight: "auto",
              width: "4rem",
              height: "4rem",
              borderRadius: "50%",
            }}
            className="shadow mb-3"
            alt={achievementImage}
          />
          <CardTitle tag="h5" className="mb-2">
            {achievementTitle}
          </CardTitle>
          <CardSubtitle>{duration}</CardSubtitle>
          <CardText tag="div" className="description my-3 text-center">
            {desc}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AchievementCard;
