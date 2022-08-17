import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TambahBarang = () => {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");
  const history = useNavigate();

  const simpanProduk = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/daftarproduks", {
      nama: nama,
      harga: harga,
      stok: stok,
    });
    history("/");
  };

  return (
    <div>
      <h1>Tambah Barang</h1>
      <Container>
        <Form onSubmit={simpanProduk}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nama Barang</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan Nama Barang"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Harga Barang</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan Harga Barang"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Stock Barang</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan Stock Barang"
              value={stok}
              onChange={(e) => setStok(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default TambahBarang;
