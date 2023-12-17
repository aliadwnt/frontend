import React from 'react';
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
    CTableRow
} from '@coreui/react';

function Halaman3() {
  return (
    <div>
      <h2>Data Mahasiswa</h2>
      <CCard>
        <CCardHeader>
          <h5>Mahasiswa Table</h5>
        </CCardHeader>
        <CCardBody>
          <CTable striped bordered hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Nama</CTableHeaderCell>
                <CTableHeaderCell>NIM</CTableHeaderCell>
                <CTableHeaderCell>Alamat</CTableHeaderCell>
                <CTableHeaderCell>Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {mahasiswaList.map((mahasiswa) => (
                <CTableRow key={mahasiswa.nim}>
                  <CTableDataCell>{mahasiswa.nama}</CTableDataCell>
                  <CTableDataCell>{mahasiswa.nim}</CTableDataCell>
                  <CTableDataCell>{mahasiswa.alamat}</CTableDataCell>
                  <CTableDataCell>{actionButtons(mahasiswa)}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default MahasiswaList;
