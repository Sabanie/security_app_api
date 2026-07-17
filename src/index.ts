import express from "express";
import authRouter from "./routes/auth/index";
import usersRouter from "./routes/user/index";
import suratMasukRouter from "./routes/suratMasuk/index";
import suratKeluarRouter from "./routes/suratKeluar/index";
import guestRouter from "./routes/guest/index";
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
