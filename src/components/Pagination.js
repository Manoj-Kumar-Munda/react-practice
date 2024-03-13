import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    setProducts(data?.products);
    console.log(data);
  };

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="my-5">
      {products.length > 0 && (
        <div className="mx-auto grid grid-cols-4 gap-4 max-w-7xl">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <div
                key={prod?.id}
                className="inline-flex flex-col space-y-2 border border-transparent cursor-pointer hover:border hover:border-slate-200 p-2 hover:shadow-lg"
              >
                <div className="max-w-xs h-44">
                  <img
                    src={prod?.thumbnail}
                    className="w-full h-full object-cover object-center"
                    alt={prod?.title}
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <h1>{prod?.title}</h1>

                    <div>
                      <button className="bg-blue-700 text-white px-4 text-sm py-2 rounded-xl">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className={"my-4 flex justify-center space-x-6 "}>
          <span
            className="cursor-pointer"
            onClick={() => selectPageHandler(page - 1)}
          >
            ⬅️
          </span>
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                onClick={() => selectPageHandler(i + 1)}
                className={
                  " border w-6 text-center cursor-pointer " +
                  (page === i + 1 && "bg-slate-400")
                }
              >
                {i + 1}
              </span>
            );
          })}

          <span
            className={
              "cursor-pointer " + (page >= products.length / 10 && "opacity-0")
            }
            onClick={() => selectPageHandler(page + 1)}
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
