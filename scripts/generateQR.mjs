// scripts/generateQR.mjs
import QRCode from "qrcode";

const url = "https://reydereyeslibreria.com/redes";
const outputPath = "./public/qr-redes.png";

QRCode.toFile(
  outputPath,
  url,
  {
    width: 300,
    color: { dark: "#000000", light: "#ffffff" },
  },
  (err) => {
    if (err) throw err;
    console.log("QR generado en:", outputPath);
  }
);
