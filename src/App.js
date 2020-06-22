import React from 'react';
import './App.css';
import Bar from "./components/Bar";
import NewsList from "./components/NewsList";
import './css/bootstrap.css';
import AuthProvider from "./components/AuthProvider";
function App() {
  return (
    <div className="App container">
        <AuthProvider>
      <Bar/>
      <NewsList/>
        </AuthProvider>
    </div>
  );
}

export default App;
