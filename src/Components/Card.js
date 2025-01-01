import React, { useState } from "react";
import { Model } from "./Model";

export const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  console.log(book);

  return (
    <div>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <div>
              <div
                className="card"
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount">LKR {amount}</p>
                </div>
              </div>
              <Model
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Card;
