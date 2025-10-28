"use client";

import React from "react";
import { Container, Typography, Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";

const Redes = () => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        textAlign: "center",
        p: 3,
        bgcolor: "#ffffff",
      }}
    >
      <Image
        src="/images/logo-libreria-black.png"
        alt="Librería Rey de Reyes"
        width={300}
        height={120}
        style={{ marginBottom: "25px" }}
      />

      <Typography
        variant="body1"
        color="text.secondary"
        gutterBottom
        sx={{
          fontSize: "1.2rem",
          lineHeight: 1.3,
        }}
      >
        Síguenos en nuestras redes sociales y mantente al tanto de nuestras novedades.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          mt: 3,
          mb: 4,
        }}
      >
        <IconButton
          href="https://www.facebook.com/profile.php?id=61552164058644"
          target="_blank"
          rel="noopener"
          sx={{
            color: "#1877F2",
            transform: "scale(2.0)",
          }}
        >
          <FacebookIcon fontSize="large" />
        </IconButton>

        <IconButton
          href="https://www.instagram.com/libreria_rey_de_reyes?igsh=MTZjOG9xNGgzNG9tMA=="
          target="_blank"
          rel="noopener"
          sx={{
            color: "#E4405F",
            transform: "scale(2.0)",
          }}
        >
          <InstagramIcon fontSize="large" />
        </IconButton>

      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
            mt: 4,
            fontStyle: "italic",
            fontSize: "1.2rem",
            lineHeight: 1.6,
        }}
        >
        “Todo lo que respira alabe al Señor.” <br />
        — Salmo 150:6 ✝️
        </Typography>

    </Container>
  );
};

export default Redes;
