import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux";
import './NewProduct.scss'

function NewProduct() {
  // const [cart , setCart] = useState({})

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  function postCall() {
    let value = {
      title: title,
      price: price,
      description: description,
    };
    dispatch(actions.postNewProduct(value));
  }

  const handleSubmit = (event) => {
    // console.log('handleSubmit ran');
    event.preventDefault(); // 👈️ prevent page refresh
  };

  return (
    <div>
      <div className="card formCard">
        <form onSubmit={handleSubmit}>
        <div className="formCardValues">
        <label htmlFor="Title">Title : </label>
          <input
            id="Title"
            name="Title"
            type="text"
            //   value={title }
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="formCardValues">
          <label htmlFor="Price">Price :</label>
          <input
            id="Price"
            name="Price"
            type="text"
            //   value={price   }
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="formCardValues">
        <label htmlFor="Description">Desc :</label>
          <input
            id="Description"
            name="Description"
            type="text"
            //   value={ description  }
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

          <button className="btn btn-primary button" type="submit" onClick={() => postCall()}>
            Submit form
          </button>
        </form>
      </div>

      <h2>{title}</h2>
    </div>
  );
}

export default NewProduct;
