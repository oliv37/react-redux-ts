import * as React from "react";

export default (props: {items: Array<string>}) => (
    <React.Fragment>
        {props.items.map((item, index) => <p key={index}>{item}</p>)}
    </React.Fragment>
);
