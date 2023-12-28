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

function Bills() {
  const [id, setid] = useState("");
  const [nama, setNama] = useState("");
  const [nominal, setNominal] = useState("");
  const [show, setShow] = useState(false);

  const [newNama, setNewNama] = useState("");
  const [newNominal, setNewNominal] = useState("");
  const [showAdd, setShowAdd] = useState(false);

  // Function to handle form submission for adding data
  const AddDataBills = async (event) => {
    event.preventDefault();
    try {
      const postData = await axios.post(`http://localhost:8080/create/bills`, {
        nama: newNama,
        nominal: newNominal,
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
    setNewNominal("");
    setShowAdd(false);
  };

  const UpdateDataBills = async (event) => {
    event.preventDefault();
    try {
      const putData = await axios.put(
        `http://localhost:8080/update/bills/${id}`,
        {
          nama: nama,
          nominal: nominal,
        }
      );
      alert(putData.data.messages);
      window.location.reload();
    } catch (error) {
      alert("Data Gagal diubah");
    }
  };

  const showModal = (data) => {
    setid(data.id);
    setNama(data.nama);
    setNominal(data.nominal);
    setShow(true);
  };
  const closeModal = () => {
    setid("");
    setNama("");
    setNominal("");
    setShow(false);
  };

  // Mendefinisikan state untuk menampilkan atau menyembunyikan modal penghapusan
  const [showDelete, setShowDelete] = useState(false);
  const showModalDelete = (data) => {
    // Fungsi untuk menampilkan modal penghapusan
    setid(data.id);
    setNama(data.nama);
    setNominal(data.nominal);
    setShowDelete(true);
  };

  const closeModalDelete = () => {
    // Fungsi untuk menutup modal penghapusan
    setid(""); // Mengatur kembali id menjadi kosong
    setNama(""); // Mengatur kembali menjadi kosong
    setNominal("");
    setShowDelete(false);
  };

  const DeleteDataBills = async (event) => {
    event.preventDefault(); // Mencegah perilaku bawaan dari event
    try {
      const deleteData = await axios.delete(
        // Mengirim permintaan penghapusan ke URL yang sesuai dengan id
        `http://localhost:8080/delete/bills/${id}`
      );
      alert(deleteData.data.messages); // Menampilkan pesan yang dikembalikan dalam sebuah alert
      window.location.reload(); // Memuat ulang halaman
    } catch (error) {
      alert("Data Gagal dihapus");
    }
  };

  const [data_login, setDataBills] = useState([]);

  const GetDataBills = async () => {
    const getData = await axios.get(`http://localhost:8080/bills`);
    setDataBills(getData.data.data);
    console.log(getData);
  };

  useEffect(() => {
    GetDataBills();
  }, []);

  return (
    <div className="body-flex">
      <Navbar/>
      <div className="flex">
        <div className="col-10 p-5 mx-auto">
          <h1 className="py-1">Data Tagihan</h1>
          <CButton className="btn btn-danger text-white me-2 mb-4" onClick={showModalAdd}>Tambah</CButton>

          <Modal show={showAdd} onHide={closeModalAdd}>
            <Modal.Header closeButton>
              <Modal.Title>Form Tambah Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={AddDataBills}>
                <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
                  {/* You can add any additional form fields for adding data */}
                  <Form.Label>Nama Tagihan</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setNewNama(e.target.value)}
                    value={newNama}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
                  <Form.Label>Nominal</Form.Label>
                  <Form.Control
                    type="number"
                    autoFocus
                    onChange={(e) => setNewNominal(e.target.value)}
                    value={newNominal}
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
              <Form onSubmit={UpdateDataBills}>
                <Form.Group
                  className="mb-3"
                  controlid="exampleForm.ControlInput1"
                ></Form.Group>
                <Form.Group
                  className="mb-3"
                  controlid="exampleForm.ControlInput1"
                >
                  <Form.Label>nama</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setNama(e.target.value)}
                    value={nama}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlid="exampleForm.ControlInput1"
                >
                  <Form.Label>nominal</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setNominal(e.target.value)}
                    value={nominal}
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
                      <p className="col-4 card-text">nama User</p>
                      <p className="col-6 card-text">: {nama}</p>
                    </div>
                    <div className="row">
                      <p className="col-4 card-text">nominal</p>
                      <p className="col-6 card-text">: {nominal}</p>
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
                onClick={DeleteDataBills}
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
                Tabel ini menampilkan data dari berbagai tagihan
              </p>

              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Nama Tagihan</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nominal</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Aksi</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data_login.map((item, index) => {
                    return (
                      <CTableRow key={index}>
                        <CTableHeaderCell> {item.nama} </CTableHeaderCell>
                        <CTableHeaderCell> {item.nominal} </CTableHeaderCell>
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

export default Bills;