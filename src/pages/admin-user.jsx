import {React, useEffect, useState } from "react";
import axios from 'axios';
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
} from '@coreui/react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";

function UserPage() {
    const [data_login, setDataLogin] = useState([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [show, setShow] = useState(false);

    const GetDataLogin = async () => {
        const getData = await axios.get(
            'http://localhost:8080/users'
        );
        setDataLogin(getData.data.data);
        console.log(getData);
    };

    useEffect(() => {
        GetDataLogin();
    }, []);

          
    const UpdateDataUser = async (event) => {
        event.preventDefault();
        try {
          const putData = await axios.put(
            `http://localhost:8080/update-user/${id}`,
            {
                name:name,
                phone:phone,
                email:email,
                password:password,
                address:address
            }
          );
          alert(putData.data.messages);
          window.location.reload();
        } catch (error) {
          alert("Data Gagal diubah");
        }
      };
      const showModal = (data) => {
        setId(data.id);
        setName(data.name);
        setPhone(data.phone);
        setEmail(data.email);
        setPassword(data.password);
        setAddress(data.address);
        setShow(true);
      };
      const closeModal = () => {
        setId("");
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setAddress("");
        setShow(false);
      };
    
      // Mendefinisikan state untuk menampilkan atau menyembunyikan modal penghapusan
      const [showDelete, setShowDelete] = useState(false); 
      const showModalDelete = (data) => {
        // Fungsi untuk menampilkan modal penghapusan dengan data mahasiswa yang dipilih
        setId(data.id); // Mengatur ID mahasiswa
        setName(data.name); // Mengatur nama mahasiswa
        setEmail(data.email); // Mengatur NIM mahasiswa
        setShowDelete(true); // Menampilkan modal penghapusan
      };
    
      const closeModalDelete = () => {
        // Fungsi untuk menutup modal penghapusan dan mengatur kembali nilai ID, nama, dan NIM
        setId(""); // Mengatur kembali ID menjadi kosong
        setName(""); // Mengatur kembali nama menjadi kosong
        setEmail(""); // Mengatur kembali NIM menjadi kosong
        setShowDelete(false); // Menyembunyikan modal penghapusan
      };
    
      const DeleteDataUser = async (event) => {
        // Fungsi untuk menghapus data mahasiswa
        event.preventDefault(); // Mencegah perilaku bawaan dari event
        try {
          const deleteData = await axios.delete(
            // Mengirim permintaan penghapusan ke URL yang sesuai dengan ID mahasiswa
            `http://localhost:8080/delete-user/${id}`
          );
          alert(deleteData.data.messages); // Menampilkan pesan yang dikembalikan dalam sebuah alert
          window.location.reload(); // Memuat ulang halaman
        } catch (error) {
          alert("Data Gagal dihapus"); // Menampilkan pesan kesalahan dalam sebuah alert
        }
      };

    return (
        <div className="body-flex">
        <div className="flex">
        <div className="">
        <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Form Update Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={UpdateDataUser}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                ></Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
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
                      <p className="col-4 card-text">Name</p>
                      <p className="col-6 card-text">: {name}</p>
                    </div>
                    <div className="row">
                      <p className="col-4 card-text">Email</p>
                      <p className="col-6 card-text">: {email}</p>
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
                onClick={DeleteDataUser}>Hapus Data
              </Button>
              <Button variant="danger" onClick={closeModalDelete}>Batal
              </Button>
            </Modal.Footer>
          </Modal>

            <h1 className="py-1">
                Data User
            </h1>
            <CCard className="mb-4">
                <CCardHeader>
                    <strong> Tabel User</strong>
                </CCardHeader>
                <CCardBody>
                    <p className="text-medium-emphasis small">
                        Tabel ini menampilkan seluruh data user yang masih aktif
                    </p>
                    <CTable striped>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell 
                                scope="col">Name</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                                <CTableHeaderCell 
                                scope="col">Email</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Password</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {data_login.map ((item, index) => {
                                return (
                                    <CTableRow key={index}>
                                    <CTableDataCell> {item.name} </CTableDataCell>
                                    <CTableDataCell> {item.phone} </CTableDataCell>
                                    <CTableDataCell> {item.email} </CTableDataCell>
                                    <CTableDataCell> {item.password} </CTableDataCell>
                                    <CTableDataCell>
                                        <CButton className='btn btn-primary text-white me-2' onClick={() => showModal(item)}>
                                            Edit
                                        </CButton>
                                        <CButton className="btn btn-danger text-white" onClick={() => showModalDelete(item)}>
                                            Hapus
                                        </CButton>
                                    </CTableDataCell>
                                    </CTableRow>
                                )
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

export default UserPage;