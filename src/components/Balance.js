import React from "react";
import { useSelector } from "react-redux";

function Balance() {
  const transactions = useSelector((state) => state.transactions.transactions);

  const amounts = transactions.map((transaction) => transaction.amount);

  const balance = amounts.reduce((acc, amount) => (acc += amount), 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{balance}</h1>
    </>
  );
}

export default Balance;
