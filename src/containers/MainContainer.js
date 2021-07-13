import React from "react";
import styled from 'styled-components/macro';
import Button from "../shared/Button";
import { KaddexLogo} from "../assets";
import "./MainContainer.css"
import { ReactComponent as TwitterLogo } from "../assets/images/shared/twitter.svg";

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  padding: 30px;
  /* overflow: auto; */
`;

const TextContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const RoadmapContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 6%;
  width: 100%;
`;

const FooterContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  color: #fff;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Title = styled.span`
    text-align: center;
    font: normal normal bold 56px/64px montserrat-regular;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
`;

const SubTitle = styled.span`
    margin-top: 5px;
    padding 0px;
    text-align: center;
    font: normal normal normal 32px/40px montserrat-regular;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
`;

const RoadmapItemLeft = styled.p`
    text-align: right;
    margin-right: 40px;
    font: normal normal normal 16px/24px montserrat-regular;
`;
const RoadmapItemRight = styled.p`
    text-align: left;
    margin-left: 40px;
    font: normal normal normal 16px/24px montserrat-regular;
`;

const MainContainer = () => {
    return (
        <OuterContainer>
            <TextContainer>
                <Title>
                    Multiprotocol Decentralized Exchange (DEX)
                </Title>
                <SubTitle>
                    Powered by Kadena, the only scalable PoW blockchain,
                </SubTitle>
                <SubTitle>
                    <strong>Kaddex is the first truly decentralised DEX</strong>
                </SubTitle>
            </TextContainer>
            <Button
              hover={true}
              background= "#FFFFFF 0% 0% no-repeat padding-box"
              border= "1px solid #FFFFFF"
              color= "#4C125A"
              buttonStyle={{ padding: "8px 45px" }}
              boxShadow= "0 0 3px #FFFFFF"
              fontSize={14}
              onClick={() =>
                  window.open(
                    `https://swap.kaddex.com`,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
            >
              Use Kaddex
            </Button>
            <RoadmapContainer>
                <Title style={{marginBottom: "40px", marginTop: "20%"}}>Roadmap</Title>
                <div class="timeline">
                    <div class="roadmap_container left">
                        <RoadmapItemLeft>
                             Kaddex Website Refresh
                        </RoadmapItemLeft>
                    </div>
                    <div class="roadmap_container right">
                        <RoadmapItemRight>
                            Tokenomics Allocation and Deep Dive
                        </RoadmapItemRight>
                    </div>
                    <div class="roadmap_container left">
                        <RoadmapItemLeft>
                            Kaddex Beta on Mainnet
                        </RoadmapItemLeft>
                    </div>
                    <div class="roadmap_container right">
                        <RoadmapItemRight>
                            Native and Bridged ERC-20 Token Pairs
                        </RoadmapItemRight>
                    </div>
                    <div class="roadmap_container left">
                        <RoadmapItemLeft>
                            Kaddex Full Launch on Mainnet
                        </RoadmapItemLeft>
                    </div>
                    <div class="roadmap_container right">
                        <RoadmapItemRight>
                            Institutional Collaboration
                        </RoadmapItemRight>
                    </div>
                    <div class="roadmap_container left">
                        <RoadmapItemLeft>
                            DEX Whitepaper
                        </RoadmapItemLeft>
                    </div>
                    <div class="roadmap_container right">
                        <RoadmapItemRight>
                            ERC-20 Public Sale
                        </RoadmapItemRight>
                    </div>
                    <div class="roadmap_container left">
                        <RoadmapItemLeft>
                            Transition to a DAO
                        </RoadmapItemLeft>
                    </div>
                </div>
            </RoadmapContainer>
            <FooterContainer>
                <KaddexLogo
                    style={{ marginRight: "2%" }}
                />
                ©2021, Privacy Policy
                <TwitterLogo
                    style={{ cursor: "pointer", marginLeft: "20%" }}
                    onClick={() =>
                        window.open(
                        `https://twitter.com/KaddeXofficial`,
                        "_blank",
                        "noopener,noreferrer"
                        )
                    }
                />
            </FooterContainer>
      </OuterContainer>
  );
};

export default MainContainer;