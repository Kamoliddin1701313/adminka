import { useEffect, useState } from "react";
import AddSettings from "./AddSettings";

import { MdDeleteForever } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditSettings from "./EditSettings";

const Settings = () => {
  const [categories, setCategories] = useState();
  const deleteToken = localStorage.getItem("token");

  const getCategories = () => {
    fetch("https://autoapi.dezinfeksiyatashkent.uz/api/categories")
      .then((respons) => respons.json())
      .then((elements) => setCategories(elements.data));
  };

  const deleteCategory = (id) => {
    fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/categories/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${deleteToken}`,
      },
    })
      .then((respons) => respons.json())
      .then((elements) => {
        if (elements.success) {
          toast.success(elements?.message);
          getCategories();
        } else {
          toast.error(elements?.message);
        }
        // console.log(elements);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="w-full">
      <form className="flex relative items-center border-[1px] border-solid border-gray-400 w-2/5 mb-[30px] rounded-[12px] gap-3">
        <IoSearch className="ml-3 text-[18px]" />
        <input
          type="text"
          placeholder="large size"
          className="px-4 py-1 rounded-r-[12px] w-full border-none outline-none"
        />
      </form>
      <table className="w-full bg-white rounded-[12px]">
        <thead className="text-left">
          <tr className="h-[70px]">
            <th className="w-1/5 pl-5">name_en</th>
            <th className="w-1/5">name_ru</th>
            <th className="w-1/5">Image</th>
            <th className="w-1/5">Action</th>
            <th className="text-right pr-5">
              <AddSettings getCategories={getCategories} />
            </th>
          </tr>
        </thead>

        <tbody>
          {categories?.map((val, index) => (
            <tr key={index} className="hover:bg-slate-200 h-[100px]">
              <td className="w-1/5 pl-5">{val?.name_en}</td>
              <td className="w-1/5">{val?.name_ru}</td>
              <td className="w-1/5">
                <img
                  className="h-[100px] w-[95px]"
                  src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${val?.image_src}`}
                  alt={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${val?.created_at}`}
                />
              </td>
              <td className="w-[60%] flex gap-4 pt-9">
                <button className="bg-blue-600 px-3 mx-auto w-[50%] hover:bg-blue-500 ease-out duration-500 rounded-[8px]">
                  <EditSettings
                    editCategoriya={{
                      editId: val.id,
                      editName_en: val.name_en,
                      editName_ru: val.name_ru,
                      editImg: val.image_src,
                    }}
                    getCategories={getCategories}
                  />
                </button>

                <button
                  onClick={() => deleteCategory(val.id)}
                  className="bg-red-600 w-1/2 py-[5px] px-3 hover:bg-red-500 ease-out duration-500 rounded-[8px]"
                >
                  <MdDeleteForever className="text-[22px] mx-auto text-white" />
                </button>
              </td>
              <td className="w-1/5 pr-5"></td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default Settings;
