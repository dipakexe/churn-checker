import React, { useState } from "react";

import AppContainer from "./components/AppContainer";
import AppHeader from "./components/AppHeader";
import ChurnCheckerForm from "./components/ChurnCheckerForm";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <AppContainer>
      <AppHeader />
      <ChurnCheckerForm />
      <AppFooter />
    </AppContainer>
  );
}

export default App;
