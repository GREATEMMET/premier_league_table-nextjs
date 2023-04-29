import React from "react";
import s from "./Topbar.module.scss";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className={`${s.navbar}`}>
      <h1 className={`${s.navbarLogo}`}>Premier League</h1>
      <div className={`${s.navbarLinks}`}>
        <h3 className={`${s.navbarLink}`}>
          {" "}
          <Link href={"/#"}>MATCHES</Link>
        </h3>
        <h3 className={`${s.navbarLink}`}>
          {" "}
          <Link href={"/#"}>NEWS</Link>
        </h3>
        <h3 className={`${s.navbarLink}`}>
          {" "}
          <Link href={"/#"}>STANDING</Link>
        </h3>
        <h3 className={`${s.navbarLink}`}>
          {" "}
          <Link href={"/#"}>STATS</Link>
        </h3>
        <h3 className={`${s.navbarLink}`}>
          {" "}
          <Link href={"/#"}>PLAYERS</Link>
        </h3>
      </div>
    </div>
  );
}
