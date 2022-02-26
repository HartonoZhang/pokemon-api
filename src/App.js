import { Route, Switch } from "react-router-dom";

import Header from "./component/header/header.component";

import Homepage from "./page/homepage/homepage.page";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
