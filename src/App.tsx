import React from "react";
import { Currency } from "./Helper/Api/Currency";
import { Select, MenuItem, TextField, Button } from "@material-ui/core";
import { useCurrency } from "./Helper/Hooks/useCurrency";
import { useStyles } from "./Helper/Hooks/useStyles";

function App() {
  const {
    amount,
    setAmount,
    totalAmount,
    isBuying,
    setIsBuying,
    selectedBaseCurrency,
    setselectedBaseCurrency,
    selectedToCurrency,
    setselectedToCurrency
  } = useCurrency();

  const classes = useStyles();
  return (
    <form
      className={classes.container}
      onSubmit={e => {
        e.preventDefault();
        alert(
          "Du kan " +
            (isBuying ? "köpa " : "sälja ") +
            amount +
            " " +
            selectedBaseCurrency +
            " för " +
            totalAmount.toFixed(4) +
            " " +
            selectedToCurrency
        );
      }}
    >
      <Select
        className={classes.item}
        value={isBuying}
        onChange={e => setIsBuying(e.target.value === "true")}
      >
        <MenuItem value="true">Köp</MenuItem>
        <MenuItem value="false">Sälj</MenuItem>
      </Select>
      <Select
        className={classes.item}
        value={selectedBaseCurrency}
        onChange={e => setselectedBaseCurrency(e.target.value as Currency)}
      >
        {Object.keys(Currency).map(key => (
          <MenuItem key={key} value={key}>
            {key}
          </MenuItem>
        ))}
      </Select>
      <TextField
        className={classes.item}
        type="number"
        value={amount}
        onChange={e => setAmount(+e.target.value)}
      />
      <Select
        className={classes.item}
        value={selectedToCurrency}
        onChange={e => setselectedToCurrency(e.target.value as Currency)}
      >
        {Object.keys(Currency).map(key => (
          <MenuItem key={key} value={key}>
            {key}
          </MenuItem>
        ))}
      </Select>
      <TextField
        className={classes.item}
        type="text"
        value={totalAmount.toFixed(4) + " " + selectedToCurrency}
        InputProps={{
          readOnly: true
        }}
      />
      <Button className={classes.cool} type="submit">
        {isBuying ? "Köp " : "Sälj "}
      </Button>
    </form>
  );
}

export default App;
