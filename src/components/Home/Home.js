import React, { useState } from "react";
import Header from "../Header/Header";
import MainComponent from "../MainComponent/MainComponent";

export default function Home(props) {
  const [sortValue, setSortValue] = useState("default");
  const [searchValue, setSearchValue] = useState("")

  return (
    <div>
      <Header storeAmount={props.storeAmount} setSortValue={setSortValue} searchValue={searchValue} setSearchValue={setSearchValue} />
      <MainComponent
        setCard_info={props.setCard_info}
        storeAmount={props.storeAmount}
        sortValue={sortValue}
        searchValue={searchValue}
      />
    </div>
  );
}
