import * as React from "react";
import { connect } from "react-redux";
import { startLogin } from "../../core/auth/actions";

export const LoginPage: React.FunctionComponent<any> = ({
  startLogin
}: typeof mapDispatchToProps) => (
  <button className="button" onClick={startLogin}>
    Login with Google
  </button>
);

/*
    This function takes Redux dispatch actions and maps them to a function
    The startLogin function is called when the (Login with Google) button is clicked
*/
const mapDispatchToProps = {
  startLogin
};

//This creates a Higher Order Component letting the component access the Redux state
export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
