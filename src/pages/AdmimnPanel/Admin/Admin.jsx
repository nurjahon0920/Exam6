import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admin = ({ handleEdit, editProductId, productData }) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [priceInSale, setPriceInSale] = useState("");

  useEffect(() => {
    if (editProductId) {
      setName(productData.name);
      setCode(productData.code);
      setBrand(productData.brand);
      setPrice(productData.price);
      setPriceInSale(productData.priceInSale);
    }
  }, [editProductId, productData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      code,
      brand,
      price,
      priceInSale,
    };
    try {
      if (editProductId) {
        await axios.put(
          `http://localhost:3000/products/${editProductId}`,
          newProduct
        );
        handleEdit(null);
      } else {
        await axios.post("http://localhost:3000/products", newProduct);
      }
      setName("");
      setCode("");
      setBrand("");
      setPrice("");
      setPriceInSale("");
    } catch (error) {
      console.log("Error saving product:", error);
    }
  };

  return (
    <div>
      <header className="static top-0 left-0 h-[80px] flex items-center ml-[80px]  bg-white w-[95.8%]">
        <nav className="justify-between ml-[62px] z-10">
          <h3 className="text-[#212121] text-[18px] font-bold">Новый товар</h3>
          <div className="flex gap-2 text-[#B5B5C3] mt-1">
            <Link to="/">Главная</Link>
            <p className="">/</p>
            <Link to="/">Товары</Link>
            <p className="">/</p>
            <Link to="/admin">Новый товар</Link>
          </div>
        </nav>
      </header>
      <div className="bg-white max-w-[1180px] shadow-xl  mt-[20px] rounded-[12px] ml-[140px] pl-6 pt-px">
        <p className="bg-[#F0F0F6] px-4 rounded-[5px] py-[14px] max-w-[104px] font-semibold">
          Основные
        </p>
        <form onSubmit={handleSubmit} className="">
          <div className="flex flex-col gap-[30px] px-6 pt-4 border-[1px] max-w-[1130px] rounded-[9px] mt-[5.7px] pb-8 mb-14">
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="font-bold">
                Название <span className="text-[#F1419D]">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-[764px] bg-[#F6F6FB] rounded-[6px] h-11 pl-3 outline-none"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="flex gap-10">
              <div className="flex flex-col gap-3">
                <label htmlFor="brand" className="font-bold">
                  Бренд <span className="text-[#F1419D]">*</span>
                </label>
                <input
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="w-[362px] bg-[#F6F6FB] rounded-[6px] h-11 pl-3 outline-none"
                  name="brand"
                  id="brand"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="code" className="font-bold">
                  Артикул производителя{" "}
                  <span className="text-[#F1419D]">*</span>
                </label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-[362px] bg-[#F6F6FB] rounded-[6px] h-11 pl-3 outline-none"
                  name="code"
                  id="code"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex gap-10 mb-[50px]">
            <div className="flex flex-col gap-3">
              <label htmlFor="price" className="font-bold">
                Цена
              </label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-[161px] bg-[#F6F6FB] rounded-[6px] h-11 pl-3 outline-none"
                name="price"
                id="price"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="priceInSale" className="font-bold">
                Цена со скидкой
              </label>
              <input
                type="text"
                value={priceInSale}
                onChange={(e) => setPriceInSale(e.target.value)}
                className="w-[187px] bg-[#F6F6FB] rounded-[6px] h-11 pl-3 outline-none"
                name="priceInSale"
                id="priceInSale"
                required
              />
            </div>
          </div>
          <div className="btns flex gap-2 justify-center">
            <button
              type="submit"
              onClick={location.reload}
              className="submit bg-[#1BC58D] text-white px-5 py-[10px] my-5 rounded-md font-bold">
              {editProductId ? "изменить" : "Сохранить"}
            </button>
            <button
              type="reset"
              className="bg-[#F7F7FF] text-[#80809B] px-5 py-[10px] my-5 rounded-md font-bold">
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
