
import './App.css';
import { ApolloClient, InMemmoryCache, InMemoryCache } from "@apollo/client";


function App() {

  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  });

  

  return (
    <div className="app">
      <h1>Welcome to GraphQL Client </h1>
    </div>
  );
}

export default App;
