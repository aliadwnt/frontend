import Navbar from '../components/Navbar';
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

function Transaction() {
  const [id, setId] = useState("");
  const [nama_transaksi, setNamaTransaksi] = useState("");
  const [tanggal_transaksi, setTanggalTransaksi] = useState("");
  const [jumlah_transaksi, setJumlahTransaksi] = useState("");
  const [struk, setStruk] = useState("");
  const [show, setShow] = useState(false);

  const [newNamaTransaksi, setNewNamaTransaksi] = useState("");
  const [newTanggalTransaksi, setNewTanggalTransaksi] = useState("");
  const [newJumlahTransaksi, setNewJumlahTransaksi] = useState("");
  const [newStruk, setNewStruk] = useState(null);
  const [showAdd, setShowAdd] = useState(false);


  // const AddDataTransactions = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const postData = await axios.post(`http://localhost:8080/create/transaction`, {
  //       nama_transaksi: newNamaTransaksi,
  //       tanggal_transaksi: newTanggalTransaksi,
  //       jumlah_transaksi: newJumlahTransaksi,
  //       struk: newStruk,
  //     });
  //     alert(postData.data.messages);
  //     window.location.reload();
  //   } catch (error) {
  //     alert("Data Gagal ditambahkan");
  //   }
  // };

  const AddDataTransactions = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('nama_transaksi', newNamaTransaksi);
      formData.append('tanggal_transaksi', newTanggalTransaksi);
      formData.append('jumlah_transaksi', newJumlahTransaksi);
      formData.append('struk', newStruk);

      const postData = await axios.post(`http://localhost:8080/create/transaction`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (postData.data && postData.data.messages) {
        alert(postData.data.messages);
        window.location.reload();
      } else {
        alert('Data Gagal ditambahkan');
      }
    } catch (error) {
      console.error('Error Adding Data:', error);
      alert('Data Gagal ditambahkan');
    }
  };

  const showModalAdd = () => {
    setShowAdd(true);
  };

  const closeModalAdd = () => {
    setNewNamaTransaksi("");
    setNewTanggalTransaksi("");
    setNewJumlahTransaksi("");
    setNewStruk(null);
    setShowAdd(false);
  };

  const UpdateDataTransactions = async (event) => {
    event.preventDefault();
    console.log('Before Update:', { id, nama_transaksi, tanggal_transaksi, jumlah_transaksi, struk });

    try {
      const formData = new FormData();
      formData.append('nama_transaksi', nama_transaksi);
      formData.append('tanggal_transaksi', tanggal_transaksi);
      formData.append('jumlah_transaksi', jumlah_transaksi);
      formData.append('struk', struk);

      console.log('FormData:', formData);

      const putData = await axios.put(
        `http://localhost:8080/update/transaction/${id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('After Update:', { id, nama_transaksi, tanggal_transaksi, jumlah_transaksi, struk });

      alert(putData.data.messages);
      window.location.reload();
    } catch (error) {
      console.error('Error Updating Data:', error);
      alert('Data Gagal diubah');
    }
  };

  useEffect(() => {
    console.log('State Updated:', { id, nama_transaksi, tanggal_transaksi, jumlah_transaksi, struk });
  }, [id, nama_transaksi, tanggal_transaksi, jumlah_transaksi, struk]);

  const showModal = (data) => {
    setId(data.id_transaksi);
    setNamaTransaksi(data.nama_transaksi);
    setTanggalTransaksi(data.tanggal_transaksi);
    setJumlahTransaksi(data.jumlah_transaksi);
    setStruk(data.struk);
    setShow(true);
  };

  const closeModal = () => {
    setId("");
    setNamaTransaksi("");
    setTanggalTransaksi("");
    setJumlahTransaksi("");
    setStruk("");
    setShow(false);
  };

  const [showDelete, setShowDelete] = useState(false);

  const showModalDelete = (data) => {
    setId(data.id_transaksi);
    setNamaTransaksi(data.nama_transaksi);
    setTanggalTransaksi(data.tanggal_transaksi);
    setJumlahTransaksi(data.jumlah_transaksi);
    setStruk(data.struk);
    setShowDelete(true);
  };

  const closeModalDelete = () => {
    setId("");
    setNamaTransaksi("");
    setTanggalTransaksi("");
    setJumlahTransaksi("");
    setStruk("");
    setShowDelete(false);
  };

  const DeleteDataTransactions = async (event) => {
    event.preventDefault();
    try {
      const deleteData = await axios.delete(
        `http://localhost:8080/delete/transaction/${id}`
      );
      alert(deleteData.data.messages);
      window.location.reload();
    } catch (error) {
      console.error('Error Deleting Data:', error);
      alert('Data Gagal dihapus');
    }
  };

  const [data_transactions, setDataTransactions] = useState([]);

  const GetTransactions = async () => {
    try {
      const getData = await axios.get(`http://localhost:8080/transaction`);
      setDataTransactions(getData.data.data);
      console.log(getData);
    } catch (error) {
      console.error('Error Fetching Data:', error);
    }
  };

  useEffect(() => {
    GetTransactions();
  }, []);

  return (
    <div className="body-flex">
      <Navbar />
      <div className="flex">
        <div className="col-10 p-5 mx-auto">
        <h1 className="py-1 text-center font-weight-bold">DATA TRANSAKSI</h1>

          <CButton className="btn btn-danger text-white me-2 mb-4" onClick={showModalAdd}>Tambah</CButton>

          <Modal show={showAdd} onHide={closeModalAdd}>
            <Modal.Header closeButton>
              <Modal.Title>Form Tambah Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={AddDataTransactions}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Nama Transaksi</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setNewNamaTransaksi(e.target.value)}
                    value={newNamaTransaksi}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Label>Tanggal Transaksi</Form.Label>
                  <Form.Control
                    type="date"
                    autoFocus
                    onChange={(e) => setNewTanggalTransaksi(e.target.value)}
                    value={newTanggalTransaksi}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                  <Form.Label>Jumlah Transaksi</Form.Label>
                  <Form.Control
                    type="number"
                    autoFocus
                    onChange={(e) => setNewJumlahTransaksi(e.target.value)}
                    value={newJumlahTransaksi}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                  <Form.Label>Struk (File Gambar)</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => setNewStruk(e.target.files[0])}
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
              <Form onSubmit={UpdateDataTransactions}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                  <Form.Label>Nama Transaksi</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setNamaTransaksi(e.target.value)}
                    value={nama_transaksi}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                  <Form.Label>Tanggal Transaksi</Form.Label>
                  <Form.Control
                    type="date"
                    autoFocus
                    onChange={(e) => setTanggalTransaksi(e.target.value)}
                    value={tanggal_transaksi}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                  <Form.Label>Jumlah Transaksi</Form.Label>
                  <Form.Control
                    type="number"
                    autoFocus
                    onChange={(e) => setJumlahTransaksi(e.target.value)}
                    value={jumlah_transaksi}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
                  <Form.Label>Struk (File Gambar)</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => setStruk(e.target.files[0])}
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
                      <p className="col-4 card-text">Nama Transaksi</p>
                      <p className="col-6 card-text">: {nama_transaksi}</p>
                    </div>
                    <div className="row">
                      <p className="col-4 card-text">Tanggal Transaksi</p>
                      <p className="col-6 card-text">: {tanggal_transaksi}</p>
                    </div>
                    <div className="row">
                      <p className="col-4 card-text">Jumlah Transaksi</p>
                      <p className="col-6 card-text">: {jumlah_transaksi}</p>
                    </div>
                    <div className="row">
                      <p className="col-4 card-text">Struk</p>
                      <p className="col-6 card-text">: {struk}</p>
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
                onClick={DeleteDataTransactions}
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
              <strong>Tabel Transaksi</strong>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                TABLE INI MENAMPILKAN DATA TRANSAKSI YANG TELAH DILAKUKAN OLEH USER
              </p>

              <CTable striped>
              <CTableHead>
  <CTableRow>
    <CTableHeaderCell scope="col">ID</CTableHeaderCell>
    <CTableHeaderCell scope="col">Tanggal Transaksi</CTableHeaderCell>
    <CTableHeaderCell scope="col">Nama Transaksi</CTableHeaderCell>
    <CTableHeaderCell scope="col">Jumlah Transaksi</CTableHeaderCell>
    <CTableHeaderCell scope="col">Struk</CTableHeaderCell>
    <CTableHeaderCell scope="col">Aksi</CTableHeaderCell>
  </CTableRow>
</CTableHead>
<CTableBody>
  {data_transactions.map((item, index) => {
    return (
      <CTableRow key={index}>
  <CTableDataCell> {item.id_transaksi} </CTableDataCell>
  <CTableDataCell> {item.tanggal_transaksi} </CTableDataCell>
  <CTableDataCell> {item.nama_transaksi} </CTableDataCell>
  <CTableDataCell> {item.jumlah_transaksi} </CTableDataCell>
  <CTableDataCell>
  <img src={`http://localhost:8080/path/to/image/${item.struk}.jpg`} alt="Struk" width="50" height="50" />
  </CTableDataCell>
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

export default Transaction;