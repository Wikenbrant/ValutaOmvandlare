import { useState, useCallback, useEffect } from "react";
import { Currency } from "../Api/Currency";
import { GetData } from "../Api/Api";

export const useCurrency = () => {
  const [selectedBaseCurrency, setselectedBaseCurrency] = useState(
    Currency.SEK
  );
  const [isBuying, setIsBuying] = useState(true);
  const [amount, setAmount] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedToCurrency, setselectedToCurrency] = useState(Currency.EUR);

  const getData = useCallback(async () => {
    const data = await GetData(selectedBaseCurrency, selectedToCurrency);
    const rate = data.rates[selectedToCurrency];
    setTotalAmount(amount * rate);
  }, [amount, selectedBaseCurrency, selectedToCurrency]);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    amount,
    setAmount,
    totalAmount,
    isBuying,
    setIsBuying,
    selectedBaseCurrency,
    setselectedBaseCurrency,
    selectedToCurrency,
    setselectedToCurrency
  };
};
