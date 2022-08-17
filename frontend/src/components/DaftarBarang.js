import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const DaftarBarang = () => {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    tampilProduk();
  }, []);

  const tampilProduk = async () => {
    const response = await axios.get("http://localhost:5000/daftarproduks");
    setProduk(response.data);
  };

  const deleteProduk = async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/daftarproduks/${id}`
    );
    tampilProduk();
  };

  return (
    <div>
      <h1>Daftar Barang</h1>

      <Link to="/tambahbarang" type="button" class="btn btn-primary mb-2">
        Tambah Produk
      </Link>

      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Barang</th>
              <th>Harga Barang</th>
              <th>Stok Barang</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {produk.map((produk, index) => (
              <tr key={index.id}>
                <td>{index + 1}</td>
                <td>{produk.nama}</td>
                <td>{produk.harga}</td>
                <td>{produk.stok}</td>
                <td>
                  <Link
                    to={`/editbarang/${produk.id}`}
                    type="button"
                    class="btn btn-warning m-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={(e) => deleteProduk(produk.id)}
                    type="button"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default DaftarBarang;
