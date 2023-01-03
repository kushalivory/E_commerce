import React from "react";
import "./Header.scss";

export default function Header(props) {
  return (
    <div className="header">
      <div className="leftDiv">
        <h2>E-Commerce</h2>
      </div>
      <div className="centerDiv">
      <input
        type="text"
        name="search"
        value={props.searchValue}
        onChange={e => props.setSearchValue(e.target.value)}
      />
      </div>
      <div className="rightDiv">
       <button type="button" className="btn btn-danger position-relative">
          Cart
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {props.storeAmount}            {/* <span className="visually-hidden">unread messages</span> */}
          </span>
        </button>
        <span></span>

          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><p className="dropdown-item" onClick={()=>props.setSortValue("default")} >All</p></li>
            <li><p className="dropdown-item" onClick={()=>props.setSortValue("PltH")} >Price(low to High)</p></li>
            <li><p className="dropdown-item" onClick={()=>props.setSortValue("PHtl")}>Price(High to Low)</p></li>
            <li><p className="dropdown-item" onClick={()=>props.setSortValue("RltH")}>Rating(low to High)</p></li>
            <li><p className="dropdown-item" onClick={()=>props.setSortValue("RHtl")}>Rating(High to low)</p></li>
          </ul>

        <div className="profileDiv">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbM-2IhHeIHlulPlhBeI_F6pSRxwxd_KcGsYM3Bm_NMX6LM6I54d4i6KR_nW6z07PB7KI&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
