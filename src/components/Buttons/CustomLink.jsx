import React from "react";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom"

const CustomLink = withRouter(props => (
  <Button
    {...props}
    onClick={evt => {
      evt.preventDefault();
      props.onClick && props.onClick(evt);
      props.history.push(props.to);
    }}
    block
    href={props.to}
    className={props.className}
    color={props.color}
    size={props.size}
  />
))

export default CustomLink;