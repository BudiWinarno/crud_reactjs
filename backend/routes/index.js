import express from "express";
import {
  getAllProduk,
  getAllProdukById,
  createProduk,
  updateProduk,
  deleteProduk,
} from "../controllers/porductController.js";

const router = express.Router();

router.get("/daftarproduks", getAllProduk);
router.post("/daftarproduks", createProduk);
router.get("/daftarproduks/:id", getAllProdukById);
router.patch("/daftarproduks/:id", updateProduk);
router.delete("/daftarproduks/:id", deleteProduk);

export default router;
