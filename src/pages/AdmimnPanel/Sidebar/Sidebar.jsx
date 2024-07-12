import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Delete from "/delete.svg";
import Edit from "/Edit.svg";
import Search from "/search.svg";

const Sidebar = () => {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [priceInSale, setPriceInSale] = useState("");
  const [editProductId, setEditProductId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setProducts(response.data);
      setSearchProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchProducts(filteredProducts);
  }, [searchTerm, products]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
        setEditProductId(null);
      } else {
        await axios.post("http://localhost:3000/products", newProduct);
      }
      fetchProducts();
      setName("");
      setCode("");
      setBrand("");
      setPrice("");
      setPriceInSale("");
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleEdit = (product) => {
    setEditProductId(product.id);
    setName(product.name);
    setCode(product.code);
    setBrand(product.brand);
    setPrice(product.price);
    setPriceInSale(product.priceInSale);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      <header className="static top-0 left-0 h-[80px] flex items-center ml-[80px]  bg-white w-[95.8%]">
        <nav className="justify-between ml-[62px] z-10">
          <h3 className="text-[#212121] text-[18px] font-bold">Товары</h3>
          <div className="flex gap-2 text-[#B5B5C3] mt-1">
            <Link to="/">Главная</Link>
            <p className="">/</p>
            <Link to="/">Товары</Link>
          </div>
        </nav>
      </header>
      <div className="pl-[140px] ">
        <div className="bg-white max-w-[1180px] shadow-xl  mt-[20px] rounded-[12px]">
          <div className="flex flex-col gap-4 pt-[30px]">
            <div className="flex mb-[31px] justify-between px-6 relative items-center">
              <h2 className="font-bold">Все товары ({products.length})</h2>
              <img
                src={Search}
                alt=""
                className="absolute right-[235px] top-[11px] z-[1000]"
              />
              <input
                type="text"
                placeholder="Поиск"
                className="bg-[#F7F7FF] py-[10px] pl-14 pr-[25px] rounded-xl outline-none relative"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="pl-6 pb-11">
              <div className="productTop flex pb-[35px]">
                <p className="w-[339px] text-[#B5B5C3] font-bold text-[12p]">
                  Наименование
                </p>
                <p className="w-[210px] text-[#B5B5C3] font-bold text-[12p]">
                  Артикул
                </p>
                <p className="w-[162px] text-[#B5B5C3] font-bold text-[12p]">
                  Бренд
                </p>
                <p className="w-[161px] text-[#B5B5C3] font-bold text-[12p]">
                  Цена
                </p>
                <p className="w-[187px] text-[#B5B5C3] font-bold text-[12p]">
                  Цена со скидкой
                </p>
              </div>
              <div className="Products">
                {searchProducts.map((product) => (
                  <div
                    key={product.id}
                    className="Product flex border-[#E8E8F1] border-y border-solid pb-5 pt-5 items-center">
                    <p className="w-[339px]">{product.name}</p>
                    <p className="w-[210px]">{product.code}</p>
                    <p className="w-[162px]">{product.brand}</p>
                    <p className="w-[161px]">{product.price}</p>
                    <p className="w-[187px]">{product.priceInSale}</p>
                    <button onClick={() => handleEdit(product)}>
                      <img src={Edit} alt="" className="" />
                    </button>
                    <button onClick={() => handleDelete(product.id)}>
                      <img src={Delete} alt="" className="" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between my-[30px] max-w-[1180px] items-center">
          <Link
            to="/admin"
            className="rounded-[6px] bg-[#1BC58D] px-5 py-[10px] font-bold text-white text-sm">
            + Новый товар
          </Link>
          <p className="">© Anymarket 2022</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
