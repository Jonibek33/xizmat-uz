"use client";

import { useEffect, useState } from "react";
import { getProducts } from "../../lib/index";
import Image from "next/image";
import "./style.scss";
import Navbar from "../components/Navbar/page";

import { Button, Select } from "antd";

export default function ServicesPage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getProducts();
      setServices(data);
    }
    load();
  }, []);

  function handleSearch(e) {
    e.preventDefault();
  }

  async function selrctOnChange(value) {
    const data = await getProducts();
    if (value === "Все") {
      setServices(data);
      return;
    }
    setServices(data.filter((s) => s.profrssion === value));
  }

  return (
    <main>
      <Navbar />
      <div className="filter-search">
        {/* <form onSubmit={handleSearch}>
          <input className="search" type="text" placeholder="Поиск услуг..." />
          <button className="search-btn">Найти</button>
        </form> */}
        <div className="filter">
          <Select
            className="filter-select"
            placeholder="Фильтр"
            onChange={selrctOnChange}
            options={[
              { value: "Все" },
              { value: "Повар" },
              { value: "Авто механик" },
              { value: "Сантехник" },
              { value: "Учитель" },
              { value: "Садовник" },
              { value: "Электрик" },
              { value: "worker" },
            ]}
          />
        </div>
      </div>
      <div className="services">
        {services.map((s) => (
          <div key={s.id} className="service">
            <div className="img">
              <img src={s.img} alt={s.name} width={250} height={250} />
            </div>
            <div className="card-info">
              <h1 className="name">{s.name}</h1>
              <p className="profession">{s.profrssion}</p>
              <p className="description">{s.description}</p>
              <p className="location">{s.location}</p>
              <p className="rating">⭐0.0 (0 отзывов)</p>
              <p className="price">Цена: {s.price} сум</p>

              <div className="btns">
                <button className="more-btn">Подробнее</button>
                <button className="edit-btn">Редактировать</button>
              </div>
              <p className="liked">❤</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
