"use client";

import "./style-specialist.scss";
import React, { useState, useRef } from "react";
import { BASE_URL } from "../../lib";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    email: "",
    password: "",
    number: "",
    category: "",
    img: null,
    price: "",
    location: "",
  });

  const fileInputRef = useRef(null); // ← добавили ref

  async function handleSubmit(e) {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("number", formData.number);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("category", formData.category);
    formDataToSend.append(
      "price",
      Number(formData.price.replace(",", ".")) || 0
    );
    formDataToSend.append("location", formData.location);

    // Отправляем фото только если файл реально выбран
    if (formData.img instanceof File) {
      formDataToSend.append("img", formData.img, formData.img.name);
      console.log("Фото отправляется:", formData.img.name);
    }

    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const result = await response.json();
        alert("Специалист успешно зарегистрирован!");
        console.log("Успех:", result);

        // Сбрасываем форму
        setFormData({
          name: "",
          description: "",
          email: "",
          password: "",
          number: "",
          category: "",
          img: null,
          price: "",
          location: "",
        });

        // КРИТИЧЕСКИ ВАЖНО: сбрасываем input file вручную!
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }

        window.location.href = "/";
      } else {
        const error = await response.json();
        console.error("Ошибка:", error);
        alert("Ошибка: " + JSON.stringify(error));
      }
    } catch (err) {
      console.error("Ошибка сети:", err);
      alert("Не удалось отправить данные");
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        img: file,
      });
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Имя</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <label htmlFor="description">Описание</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <label htmlFor="number">Телефон</label>
        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <label htmlFor="img">Фотография</label>
        <input
          type="file"
          name="img"
          ref={fileInputRef}
          onChange={handleFileChange}
          placeholder="Img"
          required
        />
        <label htmlFor="price">Цена</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          // required
        />
        <label htmlFor="category">Категория</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Категория</option>
          <option value="Сантехник">Сантехник</option>
          <option value="Дизайнер">Дизайнер</option>
          <option value="Садовник">Садовник</option>
          <option value="Фотограф">Фотограф</option>
          <option value="Бухгалтер">Бухгалтер</option>
          <option value="Юрисконсульт">Юрисконсульт</option>
          <option value="Преподаватель">Преподаватель</option>
          <option value="Психолог">Психолог</option>
          <option value="Врач">Врач</option>
          <option value="Стоматолог">Стоматолог</option>
          <option value="Другое">Другое</option>
        </select>
        <label htmlFor="location">Регион</label>
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        >
          <option value="Tashkent">Ташкентская область</option>
          <option value="Andijan">Андижанская область</option>
          <option value="Bukhara">Бухарская область</option>
          <option value="Fergana">Ферганская область</option>
          <option value="Jizzakh">Джизакская область</option>
          <option value="Namangan">Наманганская область</option>
          <option value="Navoiy">Навоийская область</option>
          <option value="Kashkadarya">Кашкадарьинская область</option>
          <option value="Samarkand">Самаркандская область</option>
          <option value="Sirdarya">Сырдарьинская область</option>
          <option value="Surkhandarya">Сурхандарьинская область</option>
          <option value="Khorezm">Хорезмская область</option>
          <option value="Karakalpakstan">Республика Каракалпакстан</option>
        </select>
        <button type="submit">Завершить</button>
        <a href="/" className="back">
          Отменить
        </a>
      </form>
    </main>
  );
};

export default RegistrationForm;
