// // import React, { useState } from 'react';
// // import Navbar from '../components/Navbar';
// // import Footer from '../components/Footer';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // const GoalItem = ({ goal }) => {
// //   const { name, purpose, date, amount, status } = goal;

// //   return (
// //     <div className="card mb-3">
// //       <div className="card-body">
// //         <h5 className="card-title">{name}</h5>
// //         <p className="card-text">
// //           <strong>Tujuan:</strong> {purpose}
// //         </p>
// //         <p className="card-text">
// //           <strong>Tanggal:</strong> {date}
// //         </p>
// //         <p className="card-text">
// //           <strong>Jumlah:</strong> {amount}
// //         </p>
// //         <p className={`card-text ${status === 'tercapai' ? 'text-success' : 'text-danger'}`}>
// //           <strong>Status:</strong> {status}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // const GoalsPage = () => {
// //   const [goals, setGoals] = useState([
// //     {
// //       name: 'Goal 1',
// //       purpose: 'Menyimpan untuk liburan',
// //       date: '2023-12-31',
// //       amount: 'Rp. 5.000.000',
// //       status: 'tercapai',
// //     },
// //     {
// //       name: 'Goal 2',
// //       purpose: 'Membeli peralatan baru',
// //       date: '2024-06-30',
// //       amount: 'Rp. 10.000.000',
// //       status: 'belum tercapai',
// //     },
// //   ]);

// //   const [newGoal, setNewGoal] = useState({
// //     name: '',
// //     purpose: '',
// //     date: '',
// //     amount: '',
// //     status: '',
// //   });

// //   const addGoal = () => {
// //     // Validasi form sebelum menambahkan tujuan
// //     if (newGoal.name && newGoal.purpose && newGoal.date && newGoal.amount && newGoal.status) {
// //       setGoals([...goals, newGoal]);
// //       setNewGoal({
// //         name: '',
// //         purpose: '',
// //         date: '',
// //         amount: '',
// //         status: '',
// //       });
// //     } else {
// //       alert('Harap isi semua kolom form!');
// //     }
// //   };

// //   return (
// //     <div className="container mt-4">
// //       <Navbar />
// //       <div className="container mt-4">
// //         <h2>Daftar Tujuan</h2>
// //         {goals.map((goal, index) => (
// //           <GoalItem key={index} goal={goal} />
// //         ))}
// //       </div>
// //       <div className="container mt-4">
// //         <h2>Tambah Tujuan Baru</h2>
// //         <form>
// //           <div className="form-group">
// //             <label>Nama Tujuan:</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               value={newGoal.name}
// //               onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label>Tujuan:</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               value={newGoal.purpose}
// //               onChange={(e) => setNewGoal({ ...newGoal, purpose: e.target.value })}
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label>Tanggal:</label>
// //             <input
// //               type="date"
// //               className="form-control"
// //               value={newGoal.date}
// //               onChange={(e) => setNewGoal({ ...newGoal, date: e.target.value })}
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label>Jumlah:</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               value={newGoal.amount}
// //               onChange={(e) => setNewGoal({ ...newGoal, amount: e.target.value })}
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label>Status:</label>
// //             <select
// //               className="form-control"
// //               value={newGoal.status}
// //               onChange={(e) => setNewGoal({ ...newGoal, status: e.target.value })}
// //             >
// //               <option value="">Pilih Status</option>
// //               <option value="tercapai">Tercapai</option>
// //               <option value="belum tercapai">Belum Tercapai</option>
// //             </select>
// //           </div>
// //           <button type="button" className="btn btn-primary" onClick={addGoal}>
// //             Tambah Tujuan
// //           </button>
// //         </form>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default GoalsPage;
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { React, useEffect, useState } from "react";
// import axios from "axios";
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardHeader,
//   CTable,
//   CTableBody,
//   CTableDataCell,
//   CTableHead,
//   CTableHeaderCell,
//   CTableRow,
// } from "@coreui/react";
// import { Modal, Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Goals() {
//   const [id, setId] = useState("");
//   const [nama, setNama] = useState("");
//   const [tujuan, setTujuan] = useState("");
//   const [tanggal, setTanggal] = useState("");
//   const [jumlah, setJumlah] = useState("");
//   const [status, setStatus] = useState("");
//   const [show, setShow] = useState(false);

//   const [newNama, setNewNama] = useState("");
//   const [newTujuan, setNewTujuan] = useState("");
//   const [newTanggal, setNewTanggal] = useState("");
//   const [newJumlah, setNewJumlah] = useState("");
//   const [newStatus, setNewStatus] = useState("");
//   const [showAdd, setShowAdd] = useState(false);

//   const AddDataGoals = async (event) => {
//     event.preventDefault();
//     try {
//       const postData = await axios.post(`http://localhost:8080/create/goals`, {
//         nama_goals: newNama,
//         tujuan_goals: newTujuan,  // Ganti dengan nama atribut yang sesuai
//         tanggal_goals: newTanggal,  // Ganti dengan nama atribut yang sesuai
//         jumlah_goals: newJumlah,  // Ganti dengan nama atribut yang sesuai
//         status_goals: newStatus,  // Ganti dengan nama atribut yang sesuai
//       });
//       alert(postData.data.messages);
//       window.location.reload();
//     } catch (error) {
//       alert("Data Gagal ditambahkan");
//     }
//   };
  

//   const showModalAdd = () => {
//     setShowAdd(true);
//   };
  
//   const closeModalAdd = () => {
//     setNewNama("");
//     setNewTujuan("");
//     setNewTanggal("");
//     setNewJumlah("");
//     setNewStatus("");
//     setShowAdd(false);
//   };

//   const UpdateDataGoals = async (event) => {
//     event.preventDefault();
//     try {
//       const putData = await axios.put(
//         `http://localhost:8080/update/goals/${id}`,
//         {
//           nama_goals: nama,  // Ganti dengan nama atribut yang sesuai
//           tujuan_goals: tujuan,  // Ganti dengan nama atribut yang sesuai
//           tanggal_goals: tanggal,  // Ganti dengan nama atribut yang sesuai
//           jumlah_goals: jumlah,  // Ganti dengan nama atribut yang sesuai
//           status_goals: status,  // Ganti dengan nama atribut yang sesuai
//         }
//       );
//       alert(putData.data.messages);
//       window.location.reload();
//     } catch (error) {
//       alert("Data Gagal diubah");
//     }
//   };
  

//   const showModal = (data) => {
//     setid(data.id_goals);
//     setNama(data.nama_goals);
//     setTujuan(data.tujuan_goals);
//     setTanggal(data.tanggal_goals);
//     setJumlah(data.jumlah_goals);
//     setStatus(data.status_goals);
//     setShow(true);
//   };
  
//   const closeModal = () => {
//     setid("");
//     setNama("");
//     setTujuan("");
//     setTanggal("");
//     setJumlah("");
//     setStatus("");
//     setShow(false);
//   };
  

// // Mendefinisikan state untuk menampilkan atau menyembunyikan modal penghapusan
// const [showDelete, setShowDelete] = useState(false);

// const showModalDelete = (data) => {
//   // Fungsi untuk menampilkan modal penghapusan
//   setid(data.id_goals);
//   setNama(data.nama_goals);
//   setTujuan(data.tujuan_goals);
//   setTanggal(data.tanggal_goals);
//   setJumlah(data.jumlah_goals);
//   setStatus(data.status_goals);
//   setShowDelete(true);
// };

// const closeModalDelete = () => {
//   // Fungsi untuk menutup modal penghapusan
//   setid(""); // Mengatur kembali id menjadi kosong
//   setNama(""); // Mengatur kembali menjadi kosong
//   setTujuan("");
//   setTanggal("");
//   setJumlah("");
//   setStatus("");
//   setShowDelete(false);
// };

//   const DeleteDataGoals = async (event) => {
//     event.preventDefault(); // Mencegah perilaku bawaan dari event
//     try {
//       const deleteData = await axios.delete(
//         // Mengirim permintaan penghapusan ke URL yang sesuai dengan id
//         `http://localhost:8080/delete/goals/${id}`
//       );
//       alert(deleteData.data.messages); // Menampilkan pesan yang dikembalikan dalam sebuah alert
//       window.location.reload(); // Memuat ulang halaman
//     } catch (error) {
//       alert("Data Gagal dihapus");
//     }
//   };

//   const [data_login, setDataGoals] = useState([]);

//   const GetDataGoals = async () => {
//     const getData = await axios.get(`http://localhost:8080/goals`);
//     setDataGoals(getData.data.data);
//     console.log(getData);
//   };

//   useEffect(() => {
//     GetDataGoals();
//   }, []);

//   return (
//     <div className="body-flex">
//       <Navbar/>
//       <div className="flex">
//         <div className="col-10 p-5 mx-auto">
//           <h1 className="py-1">Data Tagihan</h1>
//           <CButton className="btn btn-danger text-white me-2 mb-4" onClick={showModalAdd}>Tambah</CButton>

//           <Modal show={showAdd} onHide={closeModalAdd}>
//             <Modal.Header closeButton>
//               <Modal.Title>Form Tambah Data</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Form onSubmit={AddDataGoals}>
//                 <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
//                   {/* You can add any additional form fields for adding data */}
//                   <Form.Label>Nama Tagihan</Form.Label>
//                   <Form.Control
//                     type="text"
//                     autoFocus
//                     onChange={(e) => setNewNama(e.target.value)}
//                     value={newNama}
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
//                   <Form.Label>Nominal</Form.Label>
//                   <Form.Control
//                     type="number"
//                     autoFocus
//                     onChange={(e) => setNewNominal(e.target.value)}
//                     value={newNominal}
//                   />
//                 </Form.Group>
//                 <Button type="submit" color="primary" className="px-4">
//                   Tambah
//                 </Button>
//               </Form>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={closeModalAdd}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>

//           <Modal show={show} onHide={closeModal}>
//             <Modal.Header closeButton>
//               <Modal.Title>Form Update Data</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Form onSubmit={UpdateDataGoals}>
//                 <Form.Group
//                   className="mb-3"
//                   controlid="exampleForm.ControlInput1"
//                 ></Form.Group>
//                 <Form.Group
//                   className="mb-3"
//                   controlid="exampleForm.ControlInput1"
//                 >
//                   <Form.Label>nama</Form.Label>
//                   <Form.Control
//                     type="text"
//                     autoFocus
//                     onChange={(e) => setNama(e.target.value)}
//                     value={nama}
//                   />
//                 </Form.Group>
//                 <Form.Group
//                   className="mb-3"
//                   controlid="exampleForm.ControlInput1"
//                 >
//                   <Form.Label>nominal</Form.Label>
//                   <Form.Control
//                     type="text"
//                     autoFocus
//                     onChange={(e) => setNominal(e.target.value)}
//                     value={nominal}
//                   />
//                 </Form.Group>
//                 <Button type="submit" color="primary" className="px-4">
//                   Update
//                 </Button>
//               </Form>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={closeModal}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>

//           <Modal show={showDelete} onHide={closeModalDelete}>
//             <Modal.Header closeButton>
//               <Modal.Title>Apakah Anda yakin menghapus data ini?</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <div className="col-sm-12">
//                 <div className="card">
//                   <div className="card-body">
//                     <h5 className="card-title">Detail Data</h5>
//                     <div className="row">
//                       <p className="col-4 card-text">nama User</p>
//                       <p className="col-6 card-text">: {nama}</p>
//                     </div>
//                     <div className="row">
//                       <p className="col-4 card-text">nominal</p>
//                       <p className="col-6 card-text">: {nominal}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button
//                 type="submit"
//                 color="primary"
//                 className="px-4"
//                 onClick={DeleteDataGoals}
//               >
//                 Hapus Data
//               </Button>
//               <Button variant="danger" onClick={closeModalDelete}>
//                 Batal
//               </Button>
//             </Modal.Footer>
//           </Modal>

//           <CCard className="mb-4 mx-auto">
//             <CCardHeader>
//               <strong>Tabel Tagihan</strong>
//             </CCardHeader>
//             <CCardBody>
//               <p className="text-medium-emphasis small">
//                 Tabel ini menampilkan data dari berbagai tagihan
//               </p>

//               <CTable striped>
//                 <CTableHead>
//                   <CTableRow>
//                     <CTableHeaderCell scope="col">Nama Tagihan</CTableHeaderCell>
//                     <CTableHeaderCell scope="col">Nominal</CTableHeaderCell>
//                     <CTableHeaderCell scope="col">Aksi</CTableHeaderCell>
//                   </CTableRow>
//                 </CTableHead>
//                 <CTableBody>
//                   {data_login.map((item, index) => {
//                     return (
//                       <CTableRow key={index}>
//                         <CTableHeaderCell> {item.nama} </CTableHeaderCell>
//                         <CTableHeaderCell> {item.nominal} </CTableHeaderCell>
//                         <CTableDataCell>
//                           <CButton
//                             className="btn btn-primary text-white me-2"
//                             onClick={() => showModal(item)}
//                           >
//                             Edit
//                           </CButton>
//                           <CButton
//                             className="btn btn-danger text-white"
//                             onClick={() => showModalDelete(item)}
//                           >
//                             Hapus
//                           </CButton>
//                         </CTableDataCell>
//                       </CTableRow>
//                     );
//                   })}
//                 </CTableBody>
//               </CTable>
//             </CCardBody>
//           </CCard>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Goals;
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { React, useEffect, useState } from "react";
import axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Goals() {
  const [id, setId] = useState("");
  const [nama, setNama] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(false);

  const [newNama, setNewNama] = useState("");
  const [newTujuan, setNewTujuan] = useState("");
  const [newTanggal, setNewTanggal] = useState("");
  const [newJumlah, setNewJumlah] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [showAdd, setShowAdd] = useState(false);

  const AddDataGoals = async (event) => {
    event.preventDefault();
    try {
      const postData = await axios.post(`http://localhost:8080/create/goals`, {
        nama_goals: newNama,
        tujuan_goals: newTujuan,
        tanggal_goals: newTanggal,
        jumlah_goals: newJumlah,
        status_goals: newStatus,
      });
      alert(postData.data.messages);
      window.location.reload();
    } catch (error) {
      alert("Data Gagal ditambahkan");
    }
  };

  const showModalAdd = () => {
    setShowAdd(true);
  };

  const closeModalAdd = () => {
    setNewNama("");
    setNewTujuan("");
    setNewTanggal("");
    setNewJumlah("");
    setNewStatus("");
    setShowAdd(false);
  };

  const UpdateDataGoals = async (event) => {
    event.preventDefault();
    try {
      const putData = await axios.put(
        `http://localhost:8080/update/goals/${id}`,
        {
          nama_goals: nama,
          tujuan_goals: tujuan,
          tanggal_goals: tanggal,
          jumlah_goals: jumlah,
          status_goals: status,
        }
      );
      alert(putData.data.messages);
      window.location.reload();
    } catch (error) {
      alert("Data Gagal diubah");
    }
  };

  const showModal = (data) => {
    setId(data.id_goals);
    setNama(data.nama_goals);
    setTujuan(data.tujuan_goals);
    setTanggal(data.tanggal_goals);
    setJumlah(data.jumlah_goals);
    setStatus(data.status_goals);
    setShow(true);
  };

  const closeModal = () => {
    setId("");
    setNama("");
    setTujuan("");
    setTanggal("");
    setJumlah("");
    setStatus("");
    setShow(false);
  };

  // Mendefinisikan state untuk menampilkan atau menyembunyikan modal penghapusan
  const [showDelete, setShowDelete] = useState(false);

  const showModalDelete = (data) => {
    // Fungsi untuk menampilkan modal penghapusan
    setId(data.id_goals);
    setNama(data.nama_goals);
    setTujuan(data.tujuan_goals);
    setTanggal(data.tanggal_goals);
    setJumlah(data.jumlah_goals);
    setStatus(data.status_goals);
    setShowDelete(true);
  };

  const closeModalDelete = () => {
    // Fungsi untuk menutup modal penghapusan
    setId("");
    setNama("");
    setTujuan("");
    setTanggal("");
    setJumlah("");
    setStatus("");
    setShowDelete(false);
  };

  const DeleteDataGoals = async (event) => {
    event.preventDefault();
    try {
      const deleteData = await axios.delete(
        `http://localhost:8080/delete/goals/${id}`
      );
      alert(deleteData.data.messages);
      window.location.reload();
    } catch (error) {
      alert("Data Gagal dihapus");
    }
  };

  const [data_goals, setDataGoals] = useState([]);

  const GetDataGoals = async () => {
    const getData = await axios.get(`http://localhost:8080/goals`);
    setDataGoals(getData.data.data);
    console.log(getData);
  };

  useEffect(() => {
    GetDataGoals();
  }, []);

  return (
    <div className="body-flex">
      <Navbar />
      <div className="flex">
        <div className="col-10 p-5 mx-auto">
          <h1 className="py-1">Data Tujuan</h1>
          <CButton
            className="btn btn-danger text-white me-2 mb-4"
            onClick={showModalAdd}
          >
            Tambah
          </CButton>

          <Modal show={showAdd} onHide={closeModalAdd}>
            <Modal.Header closeButton>
              <Modal.Title>Form Tambah Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={AddDataGoals}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Nama Tujuan</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setNewNama(e.target.value)}
                    value={newNama}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Tujuan</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setNewTujuan(e.target.value)}
                    value={newTujuan}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Tanggal</Form.Label>
                  <Form.Control
                    type="date"
                    autoFocus
                    onChange={(e) => setNewTanggal(e.target.value)}
                    value={newTanggal}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Jumlah</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setNewJumlah(e.target.value)}
                    value={newJumlah}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setNewStatus(e.target.value)}
                    value={newStatus}
                  />
                </Form.Group>
                <Button type="submit" color="primary" className="px-4">
                  Tambah
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModalAdd}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Form Update Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={UpdateDataGoals}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                ></Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Nama Tujuan</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setNama(e.target.value)}
                    value={nama}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Tujuan</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setTujuan(e.target.value)}
                    value={tujuan}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Tanggal</Form.Label>
                  <Form.Control
                    type="date"
                    autoFocus
                    onChange={(e) => setTanggal(e.target.value)}
                    value={tanggal}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Jumlah</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setJumlah(e.target.value)}
                    value={jumlah}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                  />
                </Form.Group>
                <Button type="submit" color="primary" className="px-4">
                  Update
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={showDelete} onHide={closeModalDelete}>
            <Modal.Header closeButton>
              <Modal.Title>Apakah Anda yakin menghapus data ini?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Detail Data</h5>
                    <div className="row">
                      <p className="col-4 card-text">Nama Tujuan</p>
                      <p className="col-6 card-text">: {nama}</p>
                    </div>
                    <div className="row">
                      <p className="col-4 card-text">Tanggal</p>
                      <p className="col-6 card-text">: {tanggal}</p>
                    </div>
                    <div className="row">
                      <p className="col-4 card-text">Jumlah</p>
                      <p className="col-6 card-text">: {jumlah}</p>
                    </div>
                    <div className="row">
                      <p className="col-4 card-text">Status</p>
                      <p className="col-6 card-text">: {status}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                type="submit"
                color="primary"
                className="px-4"
                onClick={DeleteDataGoals}
              >
                Hapus Data
              </Button>
              <Button variant="danger" onClick={closeModalDelete}>
                Batal
              </Button>
            </Modal.Footer>
          </Modal>

          <CCard className="mb-4 mx-auto">
            <CCardHeader>
              <strong>Tabel Tujuan</strong>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                Tabel ini menampilkan data dari berbagai tujuan
              </p>

              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Nama Tujuan</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tanggal</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Jumlah</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Aksi</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data_goals.map((item, index) => {
                    return (
                      <CTableRow key={index}>
                        <CTableHeaderCell>{item.nama_goals}</CTableHeaderCell>
                        <CTableHeaderCell>{item.tanggal_goals}</CTableHeaderCell>
                        <CTableHeaderCell>{item.jumlah_goals}</CTableHeaderCell>
                        <CTableHeaderCell>{item.status_goals}</CTableHeaderCell>
                        <CTableDataCell>
                          <CButton
                            className="btn btn-primary text-white me-2"
                            onClick={() => showModal(item)}
                          >
                            Edit
                          </CButton>
                          <CButton
                            className="btn btn-danger text-white"
                            onClick={() => showModalDelete(item)}
                          >
                            Hapus
                          </CButton>
                        </CTableDataCell>
                      </CTableRow>
                    );
                  })}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
  );
}

export default Goals;
