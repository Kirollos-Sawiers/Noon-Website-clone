import React, { useEffect, useState } from "react";
import HomeCarousel from "./Carousel/homeCarousel";
import HomeCircle from "./Circle/homeCircle";
import AdStyleOne from "./Ads/adStyleOne";
import DealStyleVertical from "./Deals/dealStyleVertical";
import CategoryStyle from "./Categories/categoryStyle";
import AdStyleTwo from "./Ads/adStyleTwo";
import AdStyleThree from "./Ads/adStyleThree";
import AdStyleFour from "./Ads/adStyleFour";
import Brands from "./Brands/brands";
import DetailsServices from "../../services/details.services";
import { useTranslation } from "react-i18next";


export default function Home() {
  // const [collection, setCollection] = useState();
  // useEffect(() => {
  //   newCollection();
  // }, []);
  // const newCollection = async () => {
  //   await DetailsServices.addCollection();
  //   console.log("test");
  // };
  const { t } = useTranslation();

  var caturls = [
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-19.png",
    "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-23.png",
  ];
  return (
    <>
      <div className="container">
        <HomeCarousel />
        <HomeCircle />
        <AdStyleTwo />
        <DealStyleVertical />
        <CategoryStyle
          imgurls={[
            "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-19.png",
            "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-23.png",
            "https://k.nooncdn.com/cms/pages/20211206/8908ea4092c77b5ac68851cf40251c4b/en_cat-49.png",
          ]}
          imgtitle={t("elctro_title")}
          color="#E8EFFF"
          dealtitle={t("Apple_macbooks")}
          dealsubtitle={t("Audio")}
        />
        <AdStyleThree />
        <CategoryStyle
          imgtitle={t("men_title")}
          color="#BFBFBF"
          dealtitle={t("Summer_wear")}
          dealsubtitle=""
        />
        <AdStyleThree />
        <CategoryStyle
          imgtitle={t("home_title")}
          color="#F4FFFB"
          dealtitle={t("Top_home_picks")}
          dealsubtitle={t("Top_appliances_offers")}
        />
        <AdStyleFour />
        <CategoryStyle
          imgtitle={t("grocery_title")}
          color="#F4FFFB"
          dealtitle={t("Supermarket_offers")}
          dealsubtitle=""
        />
        <CategoryStyle
          imgtitle={t("baby_title")}
          color="#FFF4F7"
          dealtitle={t("baby_best_sellers")}
          dealsubtitle=""
        />
        <CategoryStyle
          imgtitle={t("other_title")}
          color="#F2ECE2"
          dealtitle={t("automotive_picks")}
          dealsubtitle=""
        />
        <Brands />
      </div>
    </>
  );
}
