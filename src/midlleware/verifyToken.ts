import type { Request, Response, NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import type { Role, Plant } from "../types/enums";

// custom payload jwt
interface MyJwtPayload extends JwtPayload {
  id: string;
  role: Role;
  name: string;
  plant: Plant;
}

// extend Request
export interface AuthRequest extends Request {
  user?: MyJwtPayload;
}

export const verifyAccessToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Access token tidak ditemukan!" });
    }

    const secret = process.env.ACCESS_TOKEN_SECRET as string;
    const decoded = jwt.verify(token, secret) as MyJwtPayload;

    req.user = decoded;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res
        .status(401)
        .json({ message: "Access token sudah kadaluarsa!" });
    }
    return res.status(403).json({ message: "Access token tidak valid!" });
  }
};

export const verifyRefreshToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.refreshToken;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Refresh token tidak ditemukan!" });
    }

    const secret = process.env.REFRESH_TOKEN_SECRET as string;
    const decoded = jwt.verify(token, secret) as MyJwtPayload;

    req.user = decoded;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res
        .status(401)
        .json({ message: "Refresh token sudah kadaluarsa!" });
    }

    return res.status(403).json({ message: "Refresh token tidak valid!" });
  }
};
