import React , {useState} from 'react'
import { useDispatch } from "react-redux";
import { actions } from "../../../redux";

function Edit(props) {
  const [title, setTitle] = useState(props.editCard.title);
  const [price, setPrice] = useState(props.editCard.price);
  const [description, setDescription] = useState(props.editCard.description);
  const dispatch = useDispatch();

  function postCall() {
    let value = {
      id: props.editCard.id,
      title: title,
      price: Number(price),
      description: description,
    };
    dispatch(actions.editProduct(value));
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
            value={title }
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="formCardValues">
          <label htmlFor="Price">Price :</label>
          <input
            id="Price"
            name="Price"
            type="text"
            value={price   }
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="formCardValues">
        <label htmlFor="Description">Desc :</label>
          <input
            id="Description"
            name="Description"
            type="text"
            value={ description  }
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

          <button className="btn btn-primary button" type="submit" onClick={() => postCall()}>
            Submit form
          </button>
        </form>
    </div>
    </div>
  )
}

export default Edit
