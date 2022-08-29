import React from "react";
import { useTranslation } from "react-i18next";


export default function AdStyleTwoComp() {
  const { t } = useTranslation();

  return (
    <>
      {/* <div
        className=" mx-1"
        style={{ width: "24%", backgroundColor: "#feee00", height: 50 }}
      > */}
      <div className="flex-grow-1">
        <img
          className="img-fluid w-100"
          // style={{ width: "24%" }}
          src={t("ad2")}
          alt="/eg-bedding-bath"
        ></img>
      </div>

      {/* </div> */}
    </>
  );
}
