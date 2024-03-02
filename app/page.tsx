"use client";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "./StateProvider";
import Landing from "./components/Landing";

export default function Home() {
  const { currentStep } = useContext(StateContext)!;

  return (
    <>
      <Landing/>
    </>
  );
}

/*
  main 
*/
