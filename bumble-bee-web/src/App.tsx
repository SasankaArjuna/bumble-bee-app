import React from 'react';
import AppRoutes from "./routes";
import {useDispatch} from "react-redux";
import {authActions} from "./redux/actions";
function App() {
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    // @ts-ignore
    dispatch(authActions.fetchAuthorizedUser())
  }, [])

  return (
      <AppRoutes />
  );
}

export default App;
