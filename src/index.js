import React from "react";
import { RendererProvider, useFela } from "react-fela";
import { createRenderer } from "fela";
import { render } from "react-dom";

const rule = state => ({
  textAlign: "center",
  padding: "5px 10px",
  // directly use the state to compute style values
  fontSize: state.fontSize + "pt",
  borderRadius: 5,
  // deeply nest media queries and pseudo classes
  ":hover": {
    fontSize: state.fontSize + 2 + "pt",
    boxShadow: "0 0 2px rgb(70, 70, 70)"
  }
});

const Button = ({ children, ...props }) => {
  const { css } = useFela(props);

  return <button className={css(rule)}>{children}</button>;
};

const renderer = createRenderer();

render(
  <RendererProvider renderer={renderer}>
    <>
      <Button>Basic Button</Button>
      <Button fontSize={18}>Big Button</Button>
    </>
  </RendererProvider>,
  document.body
);
