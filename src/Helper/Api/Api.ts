import axios from "axios";
import { Currency } from "./Currency";
import { baseURL } from "./URLs";
import { SaveDataToStorage, GetDataFromStorage } from "../Storage/LocalStorage";

export interface CurrencyResponse {
  rates: { [key in Currency]: number };
  base: Currency;
  date: Date;
}

export async function GetRate(
  baseCurrency: Currency,
  ...other: Currency[]
): Promise<CurrencyResponse> {
  const request = {
    params: {
      base: baseCurrency,
      symbols: other.join(",")
    }
  };
  return (await axios.get<CurrencyResponse>(baseURL, request)).data;
}

const GetDataAndUpdateLocalStorage = async (
  baseCurrency: Currency,
  toCurrency: Currency
): Promise<CurrencyResponse> => {
  const data = await GetRate(baseCurrency, toCurrency);
  const time = new Date();
  SaveDataToStorage({ data, baseCurrency, toCurrency, time });
  return data;
};

export const GetData = async (
  selectedBaseCurrency: Currency,
  selectedToCurrency: Currency
) => {
  let data: CurrencyResponse;
  const storageData = GetDataFromStorage();
  if (storageData) {
    const correctData = storageData.filter(
      item =>
        LessThanOneHour(item.time) &&
        item.baseCurrency === selectedBaseCurrency &&
        item.toCurrency === selectedToCurrency
    );
    if (correctData.length > 0) {
      data = correctData[0].data;
    } else {
      data = await GetDataAndUpdateLocalStorage(
        selectedBaseCurrency,
        selectedToCurrency
      );
    }
  } else {
    data = await GetDataAndUpdateLocalStorage(
      selectedBaseCurrency,
      selectedToCurrency
    );
  }
  return data;
};

const LessThanOneHour = (time: Date) => {
  return new Date() < new Date(new Date(time).getTime() + 60 * 60 * 1000);
};
