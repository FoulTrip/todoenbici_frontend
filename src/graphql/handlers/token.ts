import jwt, { Secret } from "jsonwebtoken";

const SECRET_KEY: Secret = process.env.JWT_SECRET as string; // Reemplaza esto con tu propia clave secreta

interface User {
  id: string;
  username: string;
}

export function generateToken(user: User): object | string {
  return jwt.sign(user, SECRET_KEY, { expiresIn: "1d" });
}

export function verifyToken(token: string): string | object | null {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (e) {
    return null;
  }
}
