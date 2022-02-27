import { Route, Switch } from "react-router-dom";

import Header from "./component/header/header.component";
import CollectionPage from "./page/collection/collection.page";
import FavoritePage from "./page/favorite/favorite.page";

import Homepage from "./page/homepage/homepage.page";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/pokemon" component={CollectionPage} />
        <Route path="/favorite" component={FavoritePage} />
      </Switch>
    </div>
  );
}

export default App;
