// import Canvas from "./Canvas";
// import Point from "./Point";
// const canvas = new Canvas(200, 200, "test-frame");

// const postulateOne = canvas.draw();

/* EXPERIMENT BASED ON SVGEDIT [Layer.js L95](https://github.com/SVG-Edit/svgedit) */

/* GOAL: to toggle the visibility of an element */

// get the svg element from the page
const svgFrame = document.getElementById("svg");

// create a variable for the NS
const NS = "http://www.w3.org/2000/svg";

// TODO: create a layer Element NS

// create an element NS and draw a point on it

const a = document.createElementNS(NS, "circle");

a.setAttribute("cx", "50");
a.setAttribute("cy", "50");
a.setAttribute("r", "20");

// this syntax (variable?.method()) removes the need for an if guard
svgFrame?.appendChild(a);
