import React, { useState } from "react";
import Header from "../Header/Header";
import MainComponent from "../MainComponent/MainComponent";

export default function Home(props) {
  const [sortValue, setSortValue] = useState("default");
  const [searchValue, setSearchValue] = useState("")

  return (
    <div>
      <Header  setSortValue={setSortValue} searchValue={searchValue} setSearchValue={setSearchValue} />
      <MainComponent
        setCard_info={props.setCard_info}
        setEditCard={props.setEditCard}
        sortValue={sortValue}
        searchValue={searchValue}
      />
    </div>
  );
}
