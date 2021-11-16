import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [
    { id: 1, text: "flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

export const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      const newTransaction = {
        id: Date.now(),
        text: action.payload.text,
        amount: action.payload.amount,
      };
      return {
        ...state,
        transactions: [newTransaction, ...state.transactions],
      };
    },
    deleteTransaction: (state, action) => {
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload.id
        ),
      };
    },
  },
});

export const { addTransaction, deleteTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
