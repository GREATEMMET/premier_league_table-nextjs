import React from "react";
import s from "./TableRow.module.scss";

export default function TableRow(props: any) {
  const last5Mapped = props.last5.map((i: string) => {
    if (i === "bad") {
      return <img src={"/images/bad_check.svg"} alt={"bad"} />;
    } else if (i === "good") {
      return <img src={"/images/good_check.svg"} alt={"good"} />;
    } else if (i === "null") {
      return <img src={"/images/no_check.svg"} alt={"null"} />;
    }
  });

  return (
    <tr className={`${s.row}`}>
      <td className={`${s.club}`}>
        <span className={`rowNumber`}>{props.id}</span>
        <img className={`${s.clubLogo}`} src={props.logo} alt="clubLogo" />
        <span className={s.clubName}>{props.name}</span>
      </td>

      <td className={`mp`}>{props.mp}</td>
      <td className={`w`}>{props.w}</td>
      <td className={`d`}>{props.d}</td>
      <td className={`l`}>{props.l}</td>
      <td className={`gf`}>{props.gf}</td>
      <td className={`ga`}>{props.ga}</td>
      <td className={`gd`}>{props.gd}</td>
      <td className={`pts`}>{props.pts}</td>
      <td className={`${s.last5}`}>{last5Mapped}</td>
    </tr>
  );
}
