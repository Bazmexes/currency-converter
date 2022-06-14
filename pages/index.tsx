import type { NextPage } from 'next';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import useStore from '@/hooks/useStore';

const Home: NextPage = () => {
  const {
    currenciesStore: { fetchCurrencies, currencies },
  } = useStore();

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <>
      {currencies.map((currency) => {
        return <p key={currency.ID}>{currency.ID}</p>;
      })}
    </>
  );
};

export default observer(Home);
