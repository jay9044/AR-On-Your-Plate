import React from "react";
import { Scene, Router } from "react-native-router-flux";
import WrapperContainer from "./src/containers/WrapperContainer";
import LandingContainer from "./src/containers/LandingContainer";
import BasketContainer from "./src/containers/BasketContainer";
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="welcome" initial>
          <Scene key="Landing" component={LandingContainer} title="Welcome" />
        </Scene>

        <Scene key="main">
          <Scene key="menu" component={WrapperContainer} title="Menu" />
          <Scene key="basket" component={BasketContainer} title="Your Basket" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
