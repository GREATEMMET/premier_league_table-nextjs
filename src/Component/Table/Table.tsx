import React from "react";
import s from "./Table.module.scss";
import Image from "next/image";
import TableRow from "../TableRow/TableRow";
import data from "../../dataBase/league_data";

export default function Table() {
  const [club, setClub] = React.useState(data.data.clubs);

  const clubMapped = club.map((c) => (
    <TableRow
      key={c.id}
      id={c.id}
      logo={c.logo}
      name={c.name}
      mp={c.mp}
      w={c.w}
      d={c.d}
      l={c.l}
      gf={c.gf}
      ga={c.ga}
      gd={c.gd}
      pts={c.pts}
      last5={c.last5}
    />
  ));

  return (
    <div className={`${s.innerWrapper}`}>
      <table className={`${s.table}`}>
        <thead>
          <tr className={`${s.row}`}>
            <th className={`${s.club}`}>Club</th>
            <th>MP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Pts</th>
            <th>Last 5</th>
          </tr>
        </thead>
        <tbody>{clubMapped}</tbody>
      </table>
    </div>
  );
}
