import React from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../redux/transactionSlice";

function Transaction({ transaction }) {
  const sign = transaction.amount < 0 ? "-" : "+";

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(
      deleteTransaction({
        id: transaction.id,
      })
    );
  };

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}
        {Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" onClick={handleDelete}>
        x
      </button>
    </li>
  );
}

export default Transaction;
