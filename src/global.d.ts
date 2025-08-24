// src/global.d.ts
export {};

declare global {
  interface Post {
    id: string;
    text: string;
    image?: string; // opcional (base64)
    likes?: number;
  }
}