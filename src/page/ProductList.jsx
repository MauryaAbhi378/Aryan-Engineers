import React, { useState, useEffect } from "react";
import "./ProductList.css";
import products from "../products";

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [productsPerPage, setProductsPerPage] = useState(9); // Default to 9 products per page

  // Update productsPerPage based on screen size
  useEffect(() => {
    const updateProductsPerPage = () => {
      if (window.innerWidth <= 480) {
        setProductsPerPage(3); // 4 products per page for mobile
      } else {
        setProductsPerPage(9); // Default for larger screens
      }
    };

    updateProductsPerPage();
    window.addEventListener("resize", updateProductsPerPage);

    return () => window.removeEventListener("resize", updateProductsPerPage);
  }, []);

  // Get unique categories from products
  const categories = ["All", ...new Set(products.map((product) => product.category))];

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Logic for displaying current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Total pages based on filtered products
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1); // Reset to first page when filtering
  };

  return (
    <div className="product-list">
      {/* Filter Dropdown */}
      <div className="filter-container">
        <label htmlFor="category-filter">Filter by Category:</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category, index) => (
            <option value={category} key={index}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {currentProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <h2 className="product-title">{product.name}</h2>
            <img
              src={product.img}
              alt={product.name}
              className="product-image"
            />
            {/* Uncomment this line if you want to display the category */}
            {/* <p className="product-category">{product.category}</p> */}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
