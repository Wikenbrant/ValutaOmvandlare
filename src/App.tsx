import React from "react";
import { useStyles } from "./Helper/Hooks/useStyles";
import CurrencyForm from "./components/CurrencyForm";

function App() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.title}>
        <h1>Valutaomvandlare</h1>
      </div>
      <CurrencyForm />
    </>
  );
}

export default App;
