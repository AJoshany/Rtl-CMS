import React, { Children, useEffect, useState } from "react";
import "./ProductTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailModal from "../DetailModal/DetailModal";
import EditModal from "../EditModal/EditModal";
import Errorbox from "../Errorbox/Errorbox";
import { AiOutlineDollarCircle } from "react-icons/ai";

export default function ProductTable() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const [allProducts, setAllProducts] = useState([]);
  const [productID, setProductID] = useState(null);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((product) => {
        setAllProducts(product);
      });
  };

  const deleteModalCancelAction = () => {
    console.log("Cancel");
    setIsShowDeleteModal(false);
  };

  const deleteModalSubmitAction = () => {
    console.log("Submit");
    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowDeleteModal(false);
        getAllProducts();
      });
    setIsShowDeleteModal(false);
  };

  const closeDetailModalHandler = () => {
    console.log("Detail Modal Closed");
    setIsShowDetailModal(false);
  };

  const updateProductInfos = (event) => {
    event.preventDefault();
    console.log("Product Edited");
  };

  return (
    <>
      {allProducts.length ? (
        <table className="products-table">
          <thead>
            <tr className="products-table-heading-tr">
              <th>عکس</th>
              <th>اسم</th>
              <th>قیمت</th>
              <th>موجودی</th>
            </tr>
          </thead>

          <tbody>
            {allProducts.map((product) => (
              <tr className="products-table-tr" key={product.id}>
                <td>
                  <img
                    src={product.img}
                    alt={product.title}
                    className="products-table-img"
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price} تومان</td>
                <td>{product.count}</td>
                <td>
                  <button
                    className="products-table-btn"
                    onClick={() => setIsShowDetailModal(true)}
                  >
                    جزئیات
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setProductID(product.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => setIsShowEditModal(true)}
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیچ محصولی یافت نشد" />
      )}

      {isShowDeleteModal && (
        <DeleteModal
          submitAction={deleteModalSubmitAction}
          cancelAction={deleteModalCancelAction}
        />
      )}

      {isShowDetailModal && <DetailModal onHide={closeDetailModalHandler} />}

      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={() => updateProductInfos()}
        >
          {/* {Children} */}

          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>

          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>

          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>

          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
            />
          </div>
        </EditModal>
      )}
    </>
  );
}
