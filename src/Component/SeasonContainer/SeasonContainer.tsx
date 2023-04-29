import React from "react";
import s from "./SeasonContainer.module.scss";
import Header from "../Header/Header";
import Table from "../Table/Table";




export default function SeasonContainer() {
  return (
    <div className={`${s.seasonContainer}`}>
      <Header/>
      <Table/>
    </div>
  );
}
