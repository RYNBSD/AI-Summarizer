import { lazy } from "react";

const Hero = lazy(() => import("./Hero"))
const Demo = lazy(() => import("./Demo"))

export {
  Hero,
  Demo
}