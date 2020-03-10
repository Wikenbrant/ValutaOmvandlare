import React from "react";
import { Currency } from "../Helper/Api/Currency";
import {
  MenuItem,
  TextField,
  Button,
  FormGroup,
  Grid,
  Paper
} from "@material-ui/core";
import { useCurrency } from "../Helper/Hooks/useCurrency";
import { useStyles } from "../Helper/Hooks/useStyles";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import DragHandleIcon from "@material-ui/icons/DragHandle";

const CurrencyForm: React.FC = () => {
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
      className={classes.root}
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
      <Grid container>
        <Paper className={classes.paper}>
          <Grid item sm={12}>
            <Grid container>
              <Grid item sm={5}>
                <FormGroup>
                  <TextField
                    select
                    label="Från"
                    value={selectedBaseCurrency}
                    onChange={e =>
                      setselectedBaseCurrency(e.target.value as Currency)
                    }
                  >
                    {Object.keys(Currency).map(key => (
                      <MenuItem key={key} value={key}>
                        {key}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormGroup>
              </Grid>
              <Grid item sm={2} className={classes.ma}>
                <div>
                  <AutorenewIcon
                    onClick={e => {
                      e.preventDefault();
                      const temp = selectedBaseCurrency;
                      setselectedBaseCurrency(selectedToCurrency);
                      setselectedToCurrency(temp);
                    }}
                  />
                </div>
              </Grid>
              <Grid item sm={5}>
                <FormGroup>
                  <TextField
                    select
                    label="Till"
                    value={selectedToCurrency}
                    onChange={e =>
                      setselectedToCurrency(e.target.value as Currency)
                    }
                  >
                    {Object.keys(Currency).map(key => (
                      <MenuItem key={key} value={key}>
                        {key}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12}>
            <Grid container>
              <Grid item sm={5}>
                <FormGroup>
                  <TextField
                    label="Hur mycket?"
                    type="number"
                    value={amount}
                    onChange={e => setAmount(+e.target.value)}
                    autoFocus
                  />
                </FormGroup>
              </Grid>
              <Grid item sm={2} className={classes.ma}>
                <div>
                  <DragHandleIcon />
                </div>
              </Grid>
              <Grid item sm={5}>
                <FormGroup className={classes.formControl}>
                  <TextField
                    label="Totalt:"
                    type="text"
                    value={totalAmount.toFixed(4) + " " + selectedToCurrency}
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12}>
            <Grid container>
              <Grid item sm={4}>
                <FormGroup className={classes.formControl}>
                  <TextField
                    select
                    label="Välj"
                    value={isBuying}
                    onChange={e => setIsBuying(e.target.value === "true")}
                  >
                    <MenuItem value="true">Köp</MenuItem>
                    <MenuItem value="false">Sälj</MenuItem>
                  </TextField>
                </FormGroup>
              </Grid>
              <Grid item sm={8} alignItems="flex-end">
                <FormGroup className={classes.formControl}>
                  <Button className={classes.cool} type="submit">
                    {isBuying ? "Köp " : "Sälj "}
                  </Button>
                </FormGroup>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </form>
  );
};

export default CurrencyForm;
