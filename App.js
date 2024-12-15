import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <div className="head" tabIndex={5}>
      Namaste React using jsx 🚀
    </div>
  );
};
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1 className="heading">Namaste React Functional Compoenent</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
