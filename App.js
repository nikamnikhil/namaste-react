import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an h1 tag from child 1"),
    React.createElement("h2", {}, "I'm an h2 tag from child 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag from child 2"),
    React.createElement("h2", {}, "I'm an h2 tag from child 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);