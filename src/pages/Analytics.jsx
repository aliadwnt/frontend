import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


const Analytics = () => {
  // State untuk menyimpan data
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [balance, setBalance] = useState(0);
  const [incomeTransactions, setIncomeTransactions] = useState([]);
  const [expenseTransactions, setExpenseTransactions] = useState([]);
  const [status, setStatus] = useState('');
  const [incomeAmount, setIncomeAmount] = useState();
  const [expenseAmount, setExpenseAmount] = useState();
  const [initialBalance, setInitialBalance] = useState(null); // State untuk menyimpan saldo awal

  // Fungsi untuk menambahkan transaksi pemasukan
  const addIncomeTransaction = () => {
    const transaction = { amount: incomeAmount, type: 'income', date: new Date() };
    setIncomeTransactions([...incomeTransactions, transaction]);
    setIncome(income + incomeAmount);
    setBalance(balance + incomeAmount);
    setStatus(balance + incomeAmount > 0 ? 'Positif' : 'Negatif');
  };

  // Fungsi untuk menambahkan transaksi pengeluaran
  const addExpenseTransaction = () => {
    const transaction = { amount: expenseAmount, type: 'expenses', date: new Date() };
    setExpenseTransactions([...expenseTransactions, transaction]);
    setExpenses(expenses + expenseAmount);
    setBalance(balance - expenseAmount);
    setStatus(balance - expenseAmount > 0 ? 'Positif' : 'Negatif');
  };

  // Fungsi untuk menangani pengaturan saldo awal
  const handleInitialBalance = () => {
    if (initialBalance !== null) {
      setBalance(initialBalance);
    }
  };

  return (
    <div className="container mt-4">
      <Navbar />
      <div className="card">
        <div className="card-header">
          <h2 className="mb-0">Analytics</h2>
        </div>
        <div className="card-body mb-4">
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card bg-success text-white">
                <div className="card-body">
                  <h5 className="card-title">Jumlah Pemasukan</h5>
                  <p className="card-text">Rp. {income}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-danger text-white">
                <div className="card-body">
                  <h5 className="card-title">Jumlah Pengeluaran</h5>
                  <p className="card-text">Rp. {expenses}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`card text-white ${balance >= 0 ? 'bg-success' : 'bg-danger'}`}>
                <div className="card-body">
                  <h5 className="card-title">Selisih</h5>
                  <h1 className="card-text"> Rp. {balance}</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <h3>Riwayat Mutasi Pemasukan</h3>
              <ul className="list-group">
                {incomeTransactions.map((transaction, index) => (
                  <li key={index} className="list-group-item">
                    + Rp. {transaction.amount} ({transaction.date.toDateString()})
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Riwayat Mutasi Pengeluaran</h3>
              <ul className="list-group">
                {expenseTransactions.map((transaction, index) => (
                  <li key={index} className="list-group-item">
                    - Rp. {transaction.amount} ({transaction.date.toDateString()})
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form className="mb-4" onSubmit={(e) => { e.preventDefault(); handleInitialBalance(); }}>
            <div className="form-group">
              <label>Saldo Awal:</label>
              <input type="number" className="form-control" value={initialBalance || ''} onChange={(e) => setInitialBalance(Number(e.target.value))} />
            </div>
            <button type="submit" className="btn btn-primary">Set Saldo Awal</button>
          </form>

          <div className="row">
            <div className="col-md-6">
              <form onSubmit={(e) => { e.preventDefault(); addIncomeTransaction(); }}>
                <div className="form-group">
                  <label>Jumlah Pemasukan:</label>
                  <input type="number" className="form-control" value={incomeAmount} onChange={(e) => setIncomeAmount(Number(e.target.value))} />
                </div>
                <button type="submit" className="btn btn-success">Tambah Pemasukan</button>
              </form>
            </div>
            <div className="col-md-6">
              <form onSubmit={(e) => { e.preventDefault(); addExpenseTransaction(); }}>
                <div className="form-group">
                  <label>Jumlah Pengeluaran:</label>
                  <input type="number" className="form-control" value={expenseAmount} onChange={(e) => setExpenseAmount(Number(e.target.value))} />
                </div>
                <button type="submit" className="btn btn-danger">Tambah Pengeluaran</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Analytics;
