import React, { useEffect, useState } from "react";
import "./MainComponent.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/index";

export default function MainComponent(props) {
  const [info, setInfo] = useState([]);
  let users = useSelector((state) => state?.myFirstReducer?.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getUsersFetch());
  }, [info]);

  useEffect(() => {
    if (users && props.sortValue === "default") {
      setInfo(users);
    } else if (users && props.sortValue === "PltH") {
      let sortedProducts = users.sort((p1, p2) =>
      p1.price < p2.price ? -1 : p1.price > p2.price ? 1 : 0
      );
      setInfo(sortedProducts);
    } else if (users && props.sortValue === "PHtl") {
      let sortedProducts = users.sort((p1, p2) =>
        p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
      );
      setInfo(sortedProducts);
    } else if (users && props.sortValue === "RltH") {
      let sortedProducts = users.sort((p1, p2) =>
        p1.rating.rate < p2.rating.rate ? -1 : p1.rating.rate > p2.rating.rate ? 1 : 0
      );
      setInfo(sortedProducts);
    } else if (users && props.sortValue === "RHtl") {
      let sortedProducts = users.sort((p1, p2) =>
        p1.rating.rate < p2.rating.rate ? 1 : p1.rating.rate > p2.rating.rate ? -1 : 0
      );
      setInfo(sortedProducts);
    }
  }, [info, users, props]);

  function handleClickForAdd() {
    dispatch(actions.addReduxMoney(1));
  }
  function handleClickForWithdraw() {
    if (props.storeAmount > 0) dispatch(actions.withdrawReduxMoney(1));
  }
  return (
    <div className="mainComponent">
      {info.filter(item => item.title.match(new RegExp(props.searchValue, "i"))).map((item, idx) => (
        <div className="card" key={idx}>
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <Link to="/info">
              <h3
                className="card-title"
                onClick={() => props.setCard_info(item)}
              >
                {item.title}
              </h3>
            </Link>
            <h4 className="card-text">Price: ${item.price}</h4>
            <h4 className="card-text">Rating: {item.rating.rate}</h4>
            <button className="btn btn-danger" onClick={handleClickForAdd}>
              +
            </button>
            <button className="btn btn-danger" onClick={handleClickForWithdraw}>
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

