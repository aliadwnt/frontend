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

// function Analytics() {
//   const [id_analytics, setIdAnalytics] = useState("");
//   const [tgl, setTgl] = useState("");
//   const [saldo_awal, setSaldoAwal] = useState("");
//   const [pemasukan, setPemasukan] = useState("");
//   const [pengeluaran, setPengeluaran] = useState("");
//   const [show, setShow] = useState(false);

//   const [newIdAnalytics, setNewIdAnalytics] = useState("");
//   const [newSaldoAwal, setNewSaldoAwal] = useState("");
//   const [newPemasukan, setNewPemasukan] = useState("");
//   const [newPengeluaran, setNewPengeluaran] = useState("");
//   const [showAdd, setShowAdd] = useState(false);

//   // Function to handle form submission for adding data
//   // const AddDataAnalytics = async (event) => {
//   //   event.preventDefault();
//   //   try {
//   //     const postData = await axios.post(`http://localhost:8080/create/analytics`, {
//   //       id_analytics: newIdAnalytics,
//   //       saldo_awal: newSaldoAwal,
//   //       pemasukan: newPemasukan,
//   //       pengeluaran: newPengeluaran,
//   //     });
//   //     alert(postData.data.messages);
//   //     window.location.reload();
//   //   } catch (error) {
//   //     alert("Data Gagal ditambahkan");
//   //   }
//   // };
//   const showModalAdd = () => {
//     setShowAdd(true);
//   };
//   const AddDataAnalytics = async (event) => {
//     event.preventDefault();
//     try {
//       const postData = await axios.post(`http://localhost:8080/create/analytics`, {
//         id_analytics: newIdAnalytics,
//         saldo_awal: newSaldoAwal,
//         pemasukan: newPemasukan,
//         pengeluaran: newPengeluaran,
//         tgl: tgl,
//       });
//       alert(postData.data.messages);
//       window.location.reload();
//     } catch (error) {
//       alert("Data Gagal ditambahkan");
//     }
//   };
  
//   const closeModalAdd = () => {
//     setIdAnalytics("");
//     setTgl("");
//     setSaldoAwal("");
//     setPemasukan("");
//     setPengeluaran("");
//     setShowAdd(false);
//   };
  

//   // const UpdateDataAnalytics = async (event) => {
//   //   event.preventDefault();
//   //   try {
//   //     const putData = await axios.put(
//   //       `http://localhost:8080/update/analytics/${id_analytics}`,
//   //       {
//   //         id_analytics: id_analytics,
//   //         saldo_awal: saldo_awal,
//   //         pemasukan: pemasukan,
//   //         pengeluaran: pengeluaran,
//   //       }
//   //     );
//   //     alert(putData.data.messages);
//   //     window.location.reload();
//   //   } catch (error) {
//   //     alert("Data Gagal diubah");
//   //   }
//   // };
  
//   const UpdateDataAnalytics = async (event) => {
//     event.preventDefault();
//     try {
//       const putData = await axios.put(
//         `http://localhost:8080/update/analytics/${id_analytics}`,
//         {
//           id_analytics: id_analytics,
//           saldo_awal: saldo_awal,
//           pemasukan: pemasukan,
//           pengeluaran: pengeluaran,
//           tgl: tgl,
//         }
//       );
//       alert(putData.data.messages);
//       window.location.reload();
//     } catch (error) {
//       alert("Data Gagal diubah");
//     }
//   };

//   const showModal = (data) => {
//     setIdAnalytics(data.id_analytics);
//     setTgl(data.tgl);
//     setSaldoAwal(data.saldo_awal);
//     setPemasukan(data.pemasukan);
//     setPengeluaran(data.pengeluaran);
//     setShow(true);
//   };
  
//   const closeModal = () => {
//     setIdAnalytics("");
//     setTgl("");
//     setSaldoAwal("");
//     setPemasukan("");
//     setPengeluaran("");
//     setShow(false);
//   };
  
//   // Mendefinisikan state untuk menampilkan atau menyembunyikan modal penghapusan
//   const [showDelete, setShowDelete] = useState(false);

//   const showModalDelete = (data) => {
//     // Fungsi untuk menampilkan modal penghapusan
//     setIdAnalytics(data.id_analytics);
//     setTgl(data.tgl);
//     setSaldoAwal(data.saldo_awal);
//     setPemasukan(data.pemasukan);
//     setPengeluaran(data.pengeluaran);
//     setShowDelete(true);
//   };
  
//   const closeModalDelete = () => {
//     // Fungsi untuk menutup modal penghapusan
//     setIdAnalytics(""); // Mengatur kembali id_analytics menjadi kosong
//     setTgl("");
//     setSaldoAwal(""); // Mengatur kembali saldo_awal menjadi kosong
//     setPemasukan("");
//     setPengeluaran("");
//     setShowDelete(false);
//   };
  

//   const DeleteDataAnalytics = async (event) => {
//     event.preventDefault(); // Mencegah perilaku bawaan dari event
//     try {
//       const deleteData = await axios.delete(
//         // Mengirim permintaan penghapusan ke URL yang sesuai dengan id
//         `http://localhost:8080/delete/analytics/${id}`
//       );
//       alert(deleteData.data.messages); // Menampilkan pesan yang dikembalikan dalam sebuah alert
//       window.location.reload(); // Memuat ulang halaman
//     } catch (error) {
//       alert("Data Gagal dihapus");
//     }
//   };

//   const [data_login, setDataAnalytics] = useState([]);
//   const [tgl, setTgl] = useState("");

//   const GetDataAnalytics = async () => {
//     const getData = await axios.get(`http://localhost:8080/analytics`);
//     setDataAnalytics(getData.data.data);
//     console.log(getData);
//   };

//   useEffect(() => {
//     GetDataAnalytics();
//   }, []);

//   return (
//     <div className="body-flex">
//       <Navbar/>
//       <div className="flex">
//         <div className="col-10 p-5 mx-auto">
//         <h1 className="py-1 text-center font-weight-bold">DATA ANALYTICS</h1>
//           <CButton className="btn btn-danger text-white me-2 mb-4" onClick={showModalAdd}>Tambah</CButton>

//           <Modal show={showAdd} onHide={closeModalAdd}>
//             <Modal.Header closeButton>
//               <Modal.Title>Form Tambah Data</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//             <Form onSubmit={AddDataAnalytics}>

//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
//   <Form.Label>Tanggal</Form.Label>
//   <Form.Control
//     type="date"
//     autoFocus
//     onChange={(e) => setTgl(e.target.value)}
//     value={tgl}
//   />
// </Form.Group>
// <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
//     <Form.Label>Tuliskan Saldo Awal anda :</Form.Label>
//     <Form.Control
//       type="number"
//       autoFocus
//       onChange={(e) => setNewSaldoAwal(e.target.value)}
//       value={newSaldoAwal}
//     />
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
//     <Form.Label>Masukkan jumlah Pemasukan anda :</Form.Label>
//     <Form.Control
//       type="number"
//       autoFocus
//       onChange={(e) => setNewPemasukan(e.target.value)}
//       value={newPemasukan}
//     />
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
//     <Form.Label>Masukkan jumlah Pengeluaran anda :</Form.Label>
//     <Form.Control
//       type="number"
//       autoFocus
//       onChange={(e) => setNewPengeluaran(e.target.value)}
//       value={newPengeluaran}
//     />
//   </Form.Group>
//   <Button type="submit" color="primary" className="px-4">
//     Tambah
//   </Button>
// </Form>

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
//             <Form onSubmit={UpdateDataAnalytics}>
//   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//     {/* You can add any additional form fields for updating data */}
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
//   </Form.Group>
//     <Form.Label>ID</Form.Label>
//     <Form.Control
//       type="text"
//       autoFocus
//       onChange={(e) => setIdAnalytics(e.target.value)}
//       value={id_analytics}
//     /><Form.Control
//       type="text"
//       autoFocus
//       onChange={(e) => setIdAnalytics(e.target.value)}
//       value={id_analytics}
//     />
//     <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
//   </Form.Group>
//     <Form.Label>Tanggal</Form.Label>
//     <Form.Control
//       type="date"
//       autoFocus
//       onChange={(e) => setTgl(e.target.value)}
//       value={tgl}
//     /><Form.Control
//       type="date"
//       autoFocus
//       onChange={(e) => setTgl(e.target.value)}
//       value={tgl}
//     />
//   <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
//     <Form.Label>Saldo Awal</Form.Label>
//     <Form.Control
//       type="text"
//       autoFocus
//       onChange={(e) => setSaldoAwal(e.target.value)}
//       value={saldo_awal}
//     />
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
//     <Form.Label>Pemasukan</Form.Label>
//     <Form.Control
//       type="text"
//       autoFocus
//       onChange={(e) => setPemasukan(e.target.value)}
//       value={pemasukan}
//     />
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
//     <Form.Label>Pengeluaran</Form.Label>
//     <Form.Control
//       type="text"
//       autoFocus
//       onChange={(e) => setPengeluaran(e.target.value)}
//       value={pengeluaran}
//     />
//   </Form.Group>
//   <Button type="submit" color="primary" className="px-4">
//     Update
//   </Button>
// </Form>

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
//             <div className="col-sm-12">
//   <div className="card">
//     <div className="card-body">
//       <h5 className="card-title">Detail Data</h5>
//       <div className="row">
//         <p className="col-4 card-text">ID</p>
//         <p className="col-6 card-text">: {id_analytics}</p>
//       </div>
//       <div className="row">
//         <p className="col-4 card-text">Tanggal</p>
//         <p className="col-6 card-text">: {tgl}</p>
//       </div><div className="row">
//         <p className="col-4 card-text">saldo_awal</p>
//         <p className="col-6 card-text">: {saldo_awal}</p>
//       </div>
//       <div className="row">
//         <p className="col-4 card-text">pemasukan</p>
//         <p className="col-6 card-text">: {pemasukan}</p>
//       </div>
//       <div className="row">
//         <p className="col-4 card-text">pengeluaran</p>
//         <p className="col-6 card-text">: {pengeluaran}</p>
//       </div>
//     </div>
//   </div>
// </div>

//             </Modal.Body>
//             <Modal.Footer>
//               <Button
//                 type="submit"
//                 color="primary"
//                 className="px-4"
//                 onClick={DeleteDataAnalytics}
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
//                 TABLE INI MENAMPILKAN SEMUA DATA UNTUK MENANALISIS KEUANGAN USER
//               </p>

//               <CTable striped>
//   <CTableHead>
//     <CTableRow>
//     <CTableHeaderCell scope="col">ID</CTableHeaderCell>
//     <CTableHeaderCell scope="col">Tanggal</CTableHeaderCell>
//       <CTableHeaderCell scope="col">Saldo Awal</CTableHeaderCell>
//       <CTableHeaderCell scope="col">Pemasukan</CTableHeaderCell>
//       <CTableHeaderCell scope="col">Pengeluaran</CTableHeaderCell>
//       <CTableHeaderCell scope="col">Aksi</CTableHeaderCell>
//     </CTableRow>
//   </CTableHead>
//   <CTableBody>
//                   {data_login.map((item, index) => {
//                     return (
//   //                     <CTableRow key={index}>
//   // <CTableHeaderCell> {item.id_analytics} </CTableHeaderCell>
//   //   <CTableHeaderCell> {item.saldo_awal} </CTableHeaderCell>
//   // <CTableHeaderCell> {item.pemasukan} </CTableHeaderCell>
//   // <CTableHeaderCell> {item.pengeluaran} </CTableHeaderCell>
//   // <CTableDataCell>
//   //   <CButton
//   //     className="btn btn-primary text-white me-2"
//   //     onClick={() => showModal(item)}
//   //   >
//   <CTableRow key={index}>
//   <CTableHeaderCell>{item.id_analytics}</CTableHeaderCell>
//   <CTableHeaderCell>{item.saldo_awal}</CTableHeaderCell>
//   <CTableHeaderCell>{item.pemasukan}</CTableHeaderCell>
//   <CTableHeaderCell>{item.pengeluaran}</CTableHeaderCell>
//   <CTableHeaderCell>{item.tgl}</CTableHeaderCell>
//   <CTableDataCell>
//     <CButton
//       className="btn btn-primary text-white me-2"
//       onClick={() => showModal(item)}
//     >
//       Edit
//     </CButton>
//     <CButton
//       className="btn btn-danger text-white"
//       onClick={() => showModalDelete(item)}
//     >
//       Hapus
//     </CButton>
//   </CTableDataCell>
// </CTableRow>

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

// export default Analytics;
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

function Analytics() {
  const [id_analytics, setIdAnalytics] = useState("");
  const [tgl, setTgl] = useState("");
  const [saldo_awal, setSaldoAwal] = useState("");
  const [pemasukan, setPemasukan] = useState("");
  const [pengeluaran, setPengeluaran] = useState("");
  const [show, setShow] = useState(false);

  const [newIdAnalytics, setNewIdAnalytics] = useState("");
  const [newSaldoAwal, setNewSaldoAwal] = useState("");
  const [newPemasukan, setNewPemasukan] = useState("");
  const [newPengeluaran, setNewPengeluaran] = useState("");
  const [showAdd, setShowAdd] = useState(false);

  const AddDataAnalytics = async (event) => {
    event.preventDefault();
    try {
      const postData = await axios.post(`http://localhost:8080/create/analytics`, {
        id_analytics: newIdAnalytics,
        tgl: tgl,
        saldo_awal: newSaldoAwal,
        pemasukan: newPemasukan,
        pengeluaran: newPengeluaran,
    
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
    setIdAnalytics("");
    setTgl("");
    setSaldoAwal("");
    setPemasukan("");
    setPengeluaran("");
    setShowAdd(false);
  };

  const UpdateDataAnalytics = async (event) => {
    event.preventDefault();
    try {
      const putData = await axios.put(
        `http://localhost:8080/update/analytics/${id_analytics}`,
        {
          id_analytics: id_analytics,
          tgl: tgl, 
          saldo_awal: saldo_awal,
          pemasukan: pemasukan,
          pengeluaran: pengeluaran,
      
        }
      );
      alert(putData.data.messages);
      window.location.reload();
    } catch (error) {
      alert("Data Gagal diubah");
    }
  };

  const showModal = (data) => {
    setIdAnalytics(data.id_analytics);
    setTgl(data.tgl);
    setSaldoAwal(data.saldo_awal);
    setPemasukan(data.pemasukan);
    setPengeluaran(data.pengeluaran);
    setShow(true);
  };

  const closeModal = () => {
    setIdAnalytics("");
    setTgl("");
    setSaldoAwal("");
    setPemasukan("");
    setPengeluaran("");
    setShow(false);
  };

  const [showDelete, setShowDelete] = useState(false);

  const showModalDelete = (data) => {
    setIdAnalytics(data.id_analytics);
    setTgl(data.tgl);
    setSaldoAwal(data.saldo_awal);
    setPemasukan(data.pemasukan);
    setPengeluaran(data.pengeluaran);
    setShowDelete(true);
  };

  const closeModalDelete = () => {
    setIdAnalytics("");
    setTgl("");
    setSaldoAwal("");
    setPemasukan("");
    setPengeluaran("");
    setShowDelete(false);
  };

  const DeleteDataAnalytics = async (event) => {
    event.preventDefault();
    try {
      const deleteData = await axios.delete(
        `http://localhost:8080/delete/analytics/${id_analytics}`
      );
      alert(deleteData.data.messages);
      window.location.reload();
    } catch (error) {
      alert("Data Gagal dihapus");
    }
  };

  const [data_login, setDataAnalytics] = useState([]);

  const GetDataAnalytics = async () => {
    const getData = await axios.get(`http://localhost:8080/analytics`);
    setDataAnalytics(getData.data.data);
    console.log(getData);
  };

  useEffect(() => {
    GetDataAnalytics();
  }, []);

  return (
    <div className="body-flex">
      <Navbar />
      <div className="flex">
        <div className="col-10 p-5 mx-auto">
          <h1 className="py-1 text-center font-weight-bold">DATA ANALYTICS</h1>
          <CButton className="btn btn-danger text-white me-2 mb-4" onClick={showModalAdd}>
            Tambah
          </CButton>

          <Modal show={showAdd} onHide={closeModalAdd}>
            <Modal.Header closeButton>
              <Modal.Title>Form Tambah Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={AddDataAnalytics}>
                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                  <Form.Label>Tanggal</Form.Label>
                  <Form.Control
                    type="date"
                    autoFocus
                    onChange={(e) => setTgl(e.target.value)}
                    value={tgl}
                  /> */}
                {/* </Form.Group> */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Label>Tuliskan Saldo Awal anda :</Form.Label>
                  <Form.Control
                    type="number"
                    autoFocus
                    onChange={(e) => setNewSaldoAwal(e.target.value)}
                    value={newSaldoAwal}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                  <Form.Label>Masukkan jumlah Pemasukan anda :</Form.Label>
                  <Form.Control
                    type="number"
                    autoFocus
                    onChange={(e) => setNewPemasukan(e.target.value)}
                    value={newPemasukan}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                  <Form.Label>Masukkan jumlah Pengeluaran anda :</Form.Label>
                  <Form.Control
                    type="number"
                    autoFocus
                    onChange={(e) => setNewPengeluaran(e.target.value)}
                    value={newPengeluaran}
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
              <Form onSubmit={UpdateDataAnalytics}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"></Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setIdAnalytics(e.target.value)}
                    value={id_analytics}
                  />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                  <Form.Label>Tanggal</Form.Label>
                  <Form.Control
                    type="date"
                    autoFocus
                    onChange={(e) => setTgl(e.target.value)}
                    value={tgl}
                  /> */}
                {/* </Form.Group> */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                  <Form.Label>Saldo Awal</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setSaldoAwal(e.target.value)}
                    value={saldo_awal}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                  <Form.Label>Pemasukan</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setPemasukan(e.target.value)}
                    value={pemasukan}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                  <Form.Label>Pengeluaran</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setPengeluaran(e.target.value)}
                    value={pengeluaran}
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
                      <p className="col-4 card-text">ID</p>
                      <p className="col-6 card-text">: {id_analytics}</p>
                    </div>
                    {/* <div className="row">
                      <p className="col-4 card-text">Tanggal</p>
                      <p className="col-6 card-text">: {tgl}</p>
                    </div> */}
                    <div className="row">
                      <p className="col-4 card-text">Saldo Awal</p>
                      <p className="col-6 card-text">: {saldo_awal}</p>
                    </div>
                    <div className="row">
                      <p className="col-4 card-text">Pemasukan</p>
                      <p className="col-6 card-text">: {pemasukan}</p>
                    </div>
                    <div className="row">
                      <p className="col-4 card-text">Pengeluaran</p>
                      <p className="col-6 card-text">: {pengeluaran}</p>
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
                onClick={DeleteDataAnalytics}
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
              <strong>Tabel Tagihan</strong>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                TABLE INI MENAMPILKAN SEMUA DATA UNTUK MENANALISIS KEUANGAN USER
              </p>

              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                    {/* <CTableHeaderCell scope="col">Tanggal</CTableHeaderCell> */}
                    <CTableHeaderCell scope="col">Saldo Awal</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Pemasukan</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Pengeluaran</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Aksi</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data_login.map((item, index) => {
                    return (
                      <CTableRow key={index}>
                        <CTableHeaderCell>{item.id_analytics}</CTableHeaderCell>
                        {/* <CTableHeaderCell>{item.tgl}</CTableHeaderCell> */}
                        <CTableHeaderCell>{item.saldo_awal}</CTableHeaderCell>
                        <CTableHeaderCell>{item.pemasukan}</CTableHeaderCell>
                        <CTableHeaderCell>{item.pengeluaran}</CTableHeaderCell>
                        
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

export default Analytics;
