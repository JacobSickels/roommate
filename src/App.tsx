import * as React from "react";
import "./App.css";
import { Provider, connect } from "react-redux";
import store, { history } from "./core/store";
import { Router, Switch, Route } from "react-router";
import Login from "./views/login/Login";
import { RootState } from "./core/RootReducer";
import Dashboard from "./views/dashboard/Dashboard";
import Navigation from "./views/_shared/Navigation";
import { withStyles, WithStyles } from "@material-ui/styles";

const styles = {
  content: {
    margin: "auto 10rem",
    marginTop: "2rem"
  }
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedAppRouter />
    </Provider>
  );
};

const AppRouter = withStyles(styles)(
  ({
    isAuthenticated,
    classes
  }: WithStyles<typeof styles> & ReturnType<typeof mapStateToProps>) => {
    return isAuthenticated ? (
      <Router history={history}>
        <Navigation />
        <div className={classes.content}>
          <Switch>
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    ) : (
      <Login />
    );
  }
);

const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: !!state.auth.uid
  };
};

const ConnectedAppRouter = connect(mapStateToProps)(AppRouter);

export default App;
