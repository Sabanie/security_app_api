import express from "express";
import authRouter from "./routes/auth/index.js";
import usersRouter from "./routes/user/index.js";
import suratMasukRouter from "./routes/suratMasuk/index.js";
import suratKeluarRouter from "./routes/suratKeluar/index.js";
import guestRouter from "./routes/guest/index.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware umum
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "https://security-app-roan.vercel.app/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(cookieParser());
app.use(express.json());

// roter auth
app.use("/api", authRouter);
// router user,
app.use("/api/users", usersRouter);
// router guest
app.use("/api/guests", guestRouter);
// router surat masuk
app.use("/api/surat-masuk", suratMasukRouter);
// router surat keluar
app.use("/api/surat-keluar", suratKeluarRouter);

export default app;
