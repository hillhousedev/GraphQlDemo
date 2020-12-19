
import './App.css';
import { 
  ApolloClient, InMemoryCache, gql, ApolloProvider,
  useQuery
} 
  from "@apollo/client";
import React from 'react';

function App() {

  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  });

  const EXCHANGE_RATES = gql`
    query GetExchangeRates {
        rates(currency: "USD") {
            currency
            rate
        }
    }
`;

  function ExchangeRates() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
    if (loading) return <p>Loading to obtain data from graphql server</p>
    if (error) return <p> Error in obtaining data.... :(</p>;

    return data.rates.map(({ currency, rate }) => (
      <div key={currency} className="currency">
        <p className="currency__rate">
          {currency}: {rate}
        </p>
      </div>
    ));
  }

  

  return (
    <ApolloProvider client={client}>
      <div className="app">
        <h1>Welcome to GraphQL Client </h1>
      </div>
      <p className="heading">Currency Rate</p>
      <ExchangeRates />
    </ApolloProvider>
    
  );
}

export default App;
