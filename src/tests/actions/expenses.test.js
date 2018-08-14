import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("remove expense", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("edit expense", () => {
  const action = editExpense("aa12", {
    note: "lol"
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "aa12",
    updates: { note: "lol" }
  });
});

test("add expense action object", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 1000,
    note: "Last month's rent"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("add expense action object default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
