import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import Home from "./home/Home";
import Expenses_home from "./expenses/expenses";
import Expenses_add from "./expenses/ex_add";
import Expenses_list from "./expenses/ex_list";
import Expenses_Id from "./expenses/ex_id";

function App() {
  return (
    <div className={"app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* <Route path="login" element={<Login />} />
            <Route path="SignUp" element={<SignUp />} /> */}

            <Route index element={<Home />} />
            {/* <Route path="Profile" element={<Profile />} /> */}

            {/* --------------------------------------------Expenses start -------------------------------------------------*/}
            <Route path="Expenses">
              <Route index element={<Expenses_home />} />
              <Route path="add" element={<Expenses_add />} />
              <Route path="List" element={<Expenses_list />} />
              <Route path=":expensesId" element={<Expenses_Id />} />
            </Route>
            {/* --------------------------------------------Expenses end -------------------------------------------------*/}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
