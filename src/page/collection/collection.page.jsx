import { Route, useRouteMatch } from "react-router-dom";

import CollectionDetailPage from "./collection-detail.page";

const CollectionPage = () => {
  const match = useRouteMatch();
  return (
    <div>
      <Route
        path={`${match.path}/:pokemonId`}
        component={CollectionDetailPage}
      />
    </div>
  );
};

export default CollectionPage;
