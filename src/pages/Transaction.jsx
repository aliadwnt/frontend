import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionName, setTransactionName] = useState('');
  const [transactionDate, setTransactionDate] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [transactionReceipt, setTransactionReceipt] = useState(null);

  const addTransaction = () => {
    if (transactionName && transactionDate && transactionAmount) {
      const newTransaction = {
        name: transactionName,
        date: transactionDate,
        amount: transactionAmount,
        receipt: transactionReceipt,
      };

      setTransactions([...transactions, newTransaction]);
      setTransactionName('');
      setTransactionDate('');
      setTransactionAmount('');
      setTransactionReceipt(null);
    } else {
      alert('Harap isi semua kolom transaksi!');
    }
  };

  const handleReceiptUpload = (event) => {
    const file = event.target.files[0];
    setTransactionReceipt(file);
  };

  return (
    <div className="container mt-4">
      <Navbar />
      <h2>Transaksi</h2>

      {/* Form Tambah Transaksi */}
      <div className="mb-3">
        <label style={{ fontWeight: 'bold' }}>Nama Transaksi:</label>
        <input
          type="text"
          className="form-control"
          value={transactionName}
          onChange={(e) => setTransactionName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Tanggal Transaksi:</label>
        <input
          type="date"
          className="form-control"
          value={transactionDate}
          onChange={(e) => setTransactionDate(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Jumlah:</label>
        <input
          type="number"
          className="form-control"
          value={transactionAmount}
          onChange={(e) => setTransactionAmount(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Upload Struk:</label>
        <input type="file" onChange={handleReceiptUpload} />
      </div>
      <button className="btn btn-primary" onClick={addTransaction}>
        Tambah Transaksi
      </button>

      {/* Riwayat Transaksi */}
      <h3 className="mt-4">Riwayat Transaksi</h3>
      <div className="row">
        {transactions.map((transaction, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{transaction.name}</h5>
                <p className="card-text">
                  <strong>Tanggal:</strong> {transaction.date}
                </p>
                <p className="card-text">
                  <strong>Jumlah:</strong> {transaction.amount}
                </p>
                {transaction.receipt && (
                  <div>
                    <strong>Foto Struk:</strong>{' '}
                    <img
                      src={URL.createObjectURL(transaction.receipt)}
                      alt="Receipt"
                      className="img-fluid card-img"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Transaction;
