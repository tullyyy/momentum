import React from "react";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  text-align: center;
`;

class BeatLoad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="loading">
        <BeatLoader
          css={override}
          size={10}
          color={"#fff"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default BeatLoad;
