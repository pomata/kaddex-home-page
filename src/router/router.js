import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../components/layout/Layout";
import MainContainer from "../containers/MainContainer";

// import RedeemGuide from "../modals/RedeemGuide";
// import ConnectWalletModal from "../modals/kdaModal/ConnectWalletModal";
// import { WalletContext } from "../contexts/WalletContext";
import styled from "styled-components/macro";

import {
  ROUTE_INDEX,
} from "./routes";

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export default () => {

  return (
    <Router>
      <Layout>
        <Container>
          
          <Switch>
            <Route exact path={ROUTE_INDEX} component={MainContainer} />
        
          </Switch>
        </Container>
      </Layout>
    </Router>
  );
  // }
};
