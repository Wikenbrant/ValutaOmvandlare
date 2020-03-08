import { CurrencyResponse } from "../Api/Api";
import { Currency } from "../Api/Currency";

interface localstorageData {
  data: CurrencyResponse;
  time: Date;
  baseCurrency: Currency;
  toCurrency: Currency;
}

export const GetDataFromStorage = (): localstorageData[] | null => {
  const raw = localStorage.getItem("x");
  if (raw) {
    return JSON.parse(raw) as localstorageData[];
  }
  return null;
};
export const SaveDataToStorage = (data: localstorageData) => {
  let items = GetDataFromStorage();
  if (items) {
    localStorage.setItem("x", JSON.stringify([...items, data]));
  } else {
    localStorage.setItem("x", JSON.stringify([data]));
  }
};
