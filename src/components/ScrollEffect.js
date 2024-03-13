import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Shimmer from "./Shimmer";
import Modal from "./Modal";
const ScrollEffect = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [isShowingModal, setShowingModal] = useState(false);

  const showModal = () => {
    setShowingModal(true);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const fetchProducts = async () => {
    const data = await fetch(
      "https://dummyjson.com/products?limit=10&skip=" + (page - 1) * 10
    );
    const json = await data.json();
    console.log(json);
    if (!total) {
      setTotal(json?.total);
    }
    console.log(total);
    setProducts(products.concat(json?.products));
  };

  const changePage = () => {
    setPage(page + 1);
  };

 


  const closeModal = () => {
    setShowingModal(false);
  }

  return (
    <>
    {
      (isShowingModal && <Modal close={closeModal} />)
    }
      <div className="mx-auto lg:px-12 my-6">
        <div>
          <button
            className="bg-slate-600 px-4 py-2 font-semibold text-white"
            onClick={() => showModal()}
          >
            Click me
          </button>
        </div>
        <div className="product-container">
          <InfiniteScroll
            className="product-container"
            dataLength={products.length}
            next={changePage}
            hasMore={total > (page - 1) * 10}
            loader={[1, 2, 3, 4, 5].map((i) => (
              <Shimmer key={i} />
            ))}
          >
            {products.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="flex flex-col space-y-2 text-center hover:shadow-md"
                >
                  <div>
                    <img
                      className="w-full h-60 object-cover object-center"
                      src={item?.thumbnail}
                      alt="item"
                    />
                  </div>
                  <span>{item?.title}</span>
                  <span>{item?.brand}</span>
                  <span>Rs. {item?.price}</span>
                </div>
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default ScrollEffect;
