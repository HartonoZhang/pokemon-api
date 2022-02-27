import { Route, Switch } from "react-router-dom";

import Header from "./component/header/header.component";
import CollectionPage from "./page/collection/collection.page";

import Homepage from "./page/homepage/homepage.page";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/pokemon" component={CollectionPage} />
      </Switch>
    </div>
  );
}

export default App;
