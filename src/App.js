import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionList} from './components/TransactionList';

function App() {
  return (
    <div>
      <Header />
      <div>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
