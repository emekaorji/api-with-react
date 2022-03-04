import * as React from "react";

const card = {
  width: '27%',
	display: "flex",
	flexDirection: "column",
  padding: '1em 2em 2em',
  border: '1px solid #fff7',
  borderRadius: '.7em',
  backdropFilter: 'blur(10px)',
  marginBottom: '-4em',
};
export const Card = (props) => <div {...props} style={card}></div>;
