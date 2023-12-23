import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const GoalItem = ({ goal }) => {
  const { name, purpose, date, amount, status } = goal;

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Tujuan:</strong> {purpose}
        </p>
        <p className="card-text">
          <strong>Tanggal:</strong> {date}
        </p>
        <p className="card-text">
          <strong>Jumlah:</strong> {amount}
        </p>
        <p className={`card-text ${status === 'tercapai' ? 'text-success' : 'text-danger'}`}>
          <strong>Status:</strong> {status}
        </p>
      </div>
    </div>
  );
};

const GoalsPage = () => {
  const [goals, setGoals] = useState([
    {
      name: 'Goal 1',
      purpose: 'Menyimpan untuk liburan',
      date: '2023-12-31',
      amount: 'Rp. 5.000.000',
      status: 'tercapai',
    },
    {
      name: 'Goal 2',
      purpose: 'Membeli peralatan baru',
      date: '2024-06-30',
      amount: 'Rp. 10.000.000',
      status: 'belum tercapai',
    },
  ]);

  const [newGoal, setNewGoal] = useState({
    name: '',
    purpose: '',
    date: '',
    amount: '',
    status: '',
  });

  const addGoal = () => {
    // Validasi form sebelum menambahkan tujuan
    if (newGoal.name && newGoal.purpose && newGoal.date && newGoal.amount && newGoal.status) {
      setGoals([...goals, newGoal]);
      setNewGoal({
        name: '',
        purpose: '',
        date: '',
        amount: '',
        status: '',
      });
    } else {
      alert('Harap isi semua kolom form!');
    }
  };

  return (
    <div className="container mt-4">
      <Navbar />
      <div className="container mt-4">
        <h2>Daftar Tujuan</h2>
        {goals.map((goal, index) => (
          <GoalItem key={index} goal={goal} />
        ))}
      </div>
      <div className="container mt-4">
        <h2>Tambah Tujuan Baru</h2>
        <form>
          <div className="form-group">
            <label>Nama Tujuan:</label>
            <input
              type="text"
              className="form-control"
              value={newGoal.name}
              onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Tujuan:</label>
            <input
              type="text"
              className="form-control"
              value={newGoal.purpose}
              onChange={(e) => setNewGoal({ ...newGoal, purpose: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Tanggal:</label>
            <input
              type="date"
              className="form-control"
              value={newGoal.date}
              onChange={(e) => setNewGoal({ ...newGoal, date: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Jumlah:</label>
            <input
              type="text"
              className="form-control"
              value={newGoal.amount}
              onChange={(e) => setNewGoal({ ...newGoal, amount: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Status:</label>
            <select
              className="form-control"
              value={newGoal.status}
              onChange={(e) => setNewGoal({ ...newGoal, status: e.target.value })}
            >
              <option value="">Pilih Status</option>
              <option value="tercapai">Tercapai</option>
              <option value="belum tercapai">Belum Tercapai</option>
            </select>
          </div>
          <button type="button" className="btn btn-primary" onClick={addGoal}>
            Tambah Tujuan
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default GoalsPage;
