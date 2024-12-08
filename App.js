// const hearder = React.createElement(
//   "h1", //html "h1" tag
//   { id: "heading", xyz: "abc" }, //attributes
//   "Hello World! from react" // childern pass it to "h1" tag
// );
// console.log(hearder); // simple javascript object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(hearder); //rendor method job is to put object with covertable into heading tag

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
