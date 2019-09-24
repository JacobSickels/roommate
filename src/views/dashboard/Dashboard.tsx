import * as React from "react";
import { Paper, Button } from "@material-ui/core";
import { createHouse } from "../../core/house/actions";
import { connect } from "react-redux";

const Dashboard: React.FunctionComponent<any> = ({
  createHouse
}: typeof mapDispatchToProps) => {
  const makeHouse = () =>
    createHouse({ address: "123 sesame st.", name: "Campus" });
  return (
    <Paper>
      We did it reddit
      <Button onClick={makeHouse}>House</Button>
    </Paper>
  );
};

const mapDispatchToProps = {
  createHouse
};
export default connect(
  undefined,
  mapDispatchToProps
)(Dashboard);
