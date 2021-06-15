import React from "react";

class Button extends React.Component {
  render() {
    const { label, handleClick } = this.props;
    return (
      <div>
        <button onClick={handleClick}>{label}</button>
      </div>
    );
  }
}

export default Button;
