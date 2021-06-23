import React from "react";
import { render } from "react-dom";
import "./css/style.css";

// Importing components
import StorePicker from "./components/StorePicker";

render(<StorePicker />, document.querySelector("#main"));
