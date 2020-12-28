import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import firstPhoto from "../images/asset1.png";
import secondPhoto from "../images/phone.png";
import butler from "../images/butler.png";
import highFive from "../images/highfive.png";
import logos from "../images/logos.png";
import phone2 from "../images/phone2.png";
import appstore from "../images/appstore.png";
import playstore from "../images/playstore.png";

const ThirdMain = () => {
  return (
    <div>
      <Container>
        <Image src={firstPhoto} />
        <Title>Work with any team</Title>
        <Par>
          Whether it’s for work, a side project or even the next family
          vacation, Trello helps your team stay organized.
        </Par>
        <Button>
          <Link
            to="/boards"
            style={{
              color: "white",
              border: "none",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Start doing →
          </Link>
        </Button>
      </Container>
      <Container2>
        <Title>Information at a glance</Title>
        <Par>
          Dive into the details by adding comments, attachments, due dates,
          <br></br>
          and more directly to Trello cards. Collaborate on projects from
          <br></br>
          beginning to end.
        </Par>
        <ImageWithOutBoxShadow src={secondPhoto} />
      </Container2>
      <Container>
        <Title style={{ textAlign: "left" }}>
          Built-In Workflow Automation With Butler{" "}
        </Title>
        <Par style={{ textAlign: "left", marginLeft: "1rem" }}>
          Let the robots do the work! Boost productivity by unleashing the power
          of automation across your entire team with Butler, and remove tedious
          tasks from your to-do lists with:
          <ul style={{ marginLeft: "1rem" }}>
            <li>Rule-Based Triggers</li>
            <li>Custom Card & Board Buttons</li>
            <li>Calendar Commands</li>
            <li>Due Date Commands</li>
          </ul>
        </Par>
        <ImageWithOutBoxShadow
          src={butler}
          style={{ boxShadow: "none", WebkitBoxShadow: "none" }}
        />
      </Container>
      <Container>
        <Title>Trello your way</Title>
        <Par>
          Use Trello the way your team works best. We’ve got the flexibility &
          features to fit any team’s style.
        </Par>
        <ImageWithOutBoxShadow src={highFive} />
      </Container>
      <Container>
        <Title>The Team Playbook</Title>
        <Par>
          It’s easy to get your team up and running with Trello. We’ve collected
          all of the boards and tools your team needs to succeed in one handy
          resource.
        </Par>
        <Button>
          <Link
            style={{
              color: "white",
              border: "none",
              cursor: "pointer",
              textDecoration: "none",
            }}
            to="/boards"
          >
            Make A Game Plan
          </Link>
        </Button>
      </Container>
      <Container>
        {" "}
        <ImageWithOutBoxShadow src={logos} />
        <Title>A Productivity Platform</Title>
        <Par>
          Integrate the apps your team already uses directly into your workflow.
          Power-Ups turn Trello boards into living applications to meet your
          team's unique business needs.
        </Par>
      </Container>
      <Container>
        <ImageWithOutBoxShadow src={phone2} />
        <Title>Always In Sync</Title>
        <Par>
          No matter where you are, Trello stays in sync across all of your
          devices. Collaborate with your team anywhere, from sitting on the bus
          to sitting on the beach.
        </Par>
      </Container>
      <LinksToDownload>
        <a
          style={{ width: "100%", height: "50px" }}
          href="https://play.google.com/store/apps/details?id=com.trello"
        >
          <ImageWithOutBoxShadow
            src={appstore}
            style={{
              // width: "40%",
              // height: "50px",
              borderRadius: "5px",
              marginRight: "2px",
              opacity: "0.85",
              cursor: "pointer",
            }}
          />
        </a>

        <a
          style={{ height: "50px", width: "100%" }}
          href="https://itunes.apple.com/app/trello-organize-anything/id461504587"
        >
          <ImageWithOutBoxShadow
            src={playstore}
            style={{
              // width: "40%",
              // height: "50px",
              marginLeft: "0px",
              borderRadius: "5px",
              opacity: "0.85",
              cursor: "pointer",
            }}
          />
        </a>
      </LinksToDownload>
      <BottomGradient>
        <WorkSmarter>
          <Container>
            <Title style={{ color: "white" }}>Work smarter with Trello</Title>
            <Par style={{ color: "white" }}>
              Companies of all shapes and sizes use Trello.
            </Par>
          </Container>
        </WorkSmarter>
        <Container>
          <Title>Start Planning Today</Title>
          <Par>
            Sign up and join over 1,000,000 teams worldwide who are using Trello
            to get more done.
          </Par>
          <Button
            style={{
              backgroundColor: "#61BD4F",
              borderColor: "#61BD4F",
              padding: "0.7rem",
            }}
          >
            Get Started - It's Free
          </Button>
        </Container>
      </BottomGradient>
      <footer style={{marginTop: "4rem"}}> © Copyright 2020. All rights reserved to Trello. </footer>
    </div>
  );
};

export default ThirdMain;

const Image = styled.img`
  width: 90%;
  height: 120%;
  margin: 1rem;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 21px 6px rgba(0, 0, 0, 0.31);
  box-shadow: 0px 0px 21px 6px rgba(0, 0, 0, 0.31);
`;
const ImageWithOutBoxShadow = styled.img`
  width: 90%;
  height: 120%;
  margin: 1rem;
  border-radius: 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  flex-direction: column;
  @media (min-width: 993px) {
    position: relative;
    left: 100px;
    top: 120px;
    float: left;
    text-align: left;
    margin-top: 50px;
    line-height: 1.3;
    margin-left: 100px;
  }
`;

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  flex-direction: column;

  @media (min-width: 993px) {
    position: relative;
    top: 400px;
    left: 150px;
    float: left;
    text-align: left;
    line-height: 1.3;
  }
`;

const Title = styled.h2`
  color: #172b4d;
  margin-bottom: 0;
  font-size: 2.2rem;
  line-height: 2.5rem;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
  text-align: center;
`;

const Par = styled.p`
  color: #172b4d;
  margin-top: 0;
  font-size: 1.2rem;
  width: 90%;
  text-align: center;
`;

const Button = styled.button`
  background: #6d8ea2;
  border-radius: 5px;
  border-color: #6d8ea2;
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  color: white;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 1.1px;
`;

const LinksToDownload = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

const BottomGradient = styled.div`
  background: linear-gradient(
    to bottom,
    #fff 0%,
    #f7ecff 46%,
    #d2ecff 74%,
    #fff 100%
  );
`;

const WorkSmarter = styled.div`
  margin-top: 2rem;
  background: rgb(48, 54, 76);
  background: linear-gradient(
    173deg,
    rgba(48, 54, 76, 1) 0%,
    rgba(64, 69, 87, 1) 48%,
    rgba(102, 103, 107, 1) 100%
  );
`;
