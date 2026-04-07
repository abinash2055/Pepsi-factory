import React from "react";
import { products } from "../../data/Products";

const ProductCard = ({ product, reverse }) => {
  const titleColor =
    product.name === "7-UP" || product.name === "Mountain Dew"
      ? "text-green-500"
      : product.name === "Mirinda" || product.name === "Slice"
        ? "text-orange-500"
        : product.name === "Aquafina"
          ? "text-gray-500"
          : "text-red-500";

  const descColor =
    product.name === "7-UP" || product.name === "Mountain Dew"
      ? "text-green-700"
      : product.name === "Mirinda" || product.name === "Slice"
        ? "text-orange-700"
        : product.name === "Aquafina"
          ? "text-gray-700"
          : "text-gray-700";

  const headerBg =
    product.name === "7-UP" || product.name === "Mountain Dew"
      ? "bg-green-500"
      : product.name === "Mirinda" || product.name === "Slice"
        ? "bg-orange-500"
        : product.name === "Aquafina"
          ? "bg-gray-500"
          : "bg-red-500";

  const innerBg =
    product.name === "7-UP" || product.name === "Mountain Dew"
      ? "bg-green-50"
      : product.name === "Mirinda" || product.name === "Slice"
        ? "bg-orange-50"
        : product.name === "Aquafina"
          ? "bg-gray-50"
          : "bg-red-50";

  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center md:justify-between bg-white shadow-md rounded-2xl p-8 my-8 ${reverse ? "md:flex-row-reverse" : ""
        }`}
    >
      <div className="md:w-1/2 flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-64 h-64 md:w-80 md:h-80 object-contain transform transition-transform duration-300 
               hover:scale-110"
        />
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10 md:pr-10 text-xl">
        <h2 className={`text-3xl font-semibold mb-3 ${titleColor}`}>
          {product.name}
        </h2>
        <p className={`mb-6 ${descColor}`}>{product.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
          {/* Ingredients */}
          <div>
            <h3
              className={`text-white font-semibold px-3 py-1 rounded-t-lg ${headerBg}`}
            >
              Ingredients
            </h3>
            <div className={`${innerBg} p-3 rounded-b-lg space-y-2`}>
              {product.ingredients.map((item, idx) => (
                <p
                  key={idx}
                  className="text-gray-700 bg-white px-2 py-1 rounded shadow-sm text-sm sm:text-base"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Nutrition */}
          <div>
            <h3
              className={`text-white font-semibold px-3 py-1 rounded-t-lg ${headerBg}`}
            >
              Nutrition
            </h3>
            <div className={`${innerBg} p-3 rounded-b-lg space-y-2`}>
              {product.nutrition.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between text-gray-700 bg-white px-2 py-1 rounded shadow-sm text-sm sm:text-base"
                >
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Product = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 mt-12">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Products
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Explore our wide range of refreshing beverages crafted with quality
            and care.
          </p>
        </div>

        {/* Product Cards */}
        {products.map((product, idx) => (
          <ProductCard
            key={product.name}
            product={product}
            reverse={idx % 2 !== 0}
          />
        ))}
      </div>
      {/* Highlight */}
      <div className="mt-10 bg-blue-100 border-l-4 border-blue-500 p-5 rounded-lg shadow-sm max-w-6xl justify-center items-center mx-auto mb-4">
        <p className="text-gray-800 text-sm md:text-base">
          ⚠️ <strong>Note:</strong> By using our products, you agree to follow
          all usage guidelines. The company is not responsible for issues
          arising from misuse or non-compliance.
        </p>
      </div>
    </>
  );
};

export default Product;
