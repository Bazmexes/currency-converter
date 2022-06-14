import { create } from 'mobx-persist';
import { enableStaticRendering } from 'mobx-react-lite';

import CurrenciesStore from '@/store/stores/CurrenciesStore';

enableStaticRendering(typeof window === 'undefined');

const hydrate = create({});

export default class AppStore {
  currenciesStore = new CurrenciesStore();

  constructor() {
    if (typeof window !== 'undefined') {
      hydrate(`counterStore`, this.currenciesStore).then(() => {
        this.currenciesStore.setIsHydrate(true);
      });
    }
  }
}
