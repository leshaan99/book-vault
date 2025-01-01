import React from "react";


export const Card = ({ book }) => {
  console.log(book);

  return (
    <div>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail != undefined && amount != undefined) {
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
                  <p className="amount">&#8377;{amount}</p>
                </div>
              </div>
              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </div>
          );
        }
      })}
    </div>
  );
};
