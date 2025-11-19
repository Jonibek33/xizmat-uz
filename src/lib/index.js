"use client";

const BASE_URL = "http://127.0.0.1:8000/api/product/";

async function getProducts() {
  const res = await fetch(BASE_URL, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Ошибка при получении продуктов");
  }

  return res.json();
}

export {
  getProducts,
  BASE_URL,
}