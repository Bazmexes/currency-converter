import { action, makeAutoObservable, observable } from 'mobx';
import { persist } from 'mobx-persist';

import CurrencyService from '@/api/services/CurrenciesService';
import { TypeCurrency } from '@/types/CurrenciesTypes';

const { getCurrencies } = CurrencyService;

export default class CurrenciesStore {
  constructor() {
    makeAutoObservable(this);
  }

  @persist @observable count = 0;

  @observable isHydrate: boolean = false;
  @observable currencies: TypeCurrency[] = [];

  @action setIsHydrate = (value: boolean) => {
    this.isHydrate = value;
  };

  @action fetchCurrencies = async () => {
    await getCurrencies().then((res) => {
      if (res.status === 200) {
        this.setCurrencies(Object.values(res.data.Valute));
      }
    });
  };

  @action setCurrencies = (currencies: TypeCurrency[]) => {
    this.currencies = currencies;
  };
}
