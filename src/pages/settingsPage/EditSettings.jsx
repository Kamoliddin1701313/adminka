import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TbTopologyStar3 } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEdit } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "white",
  borderRadius: 8,
  boxShadow: 24,
  p: 4,
};

function EditSettings({ getCategories, Id, editName_en, editName_ru }) {
  const [editId, setEditId] = useState(Id);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);

  const [nameEn, setNameEn] = useState();
  const [nameRu, setNameRu] = useState();
  const [file, setFile] = useState();

  const editCategory = (e) => {
    e.preventDefault();

    const editToken = localStorage.getItem("token");

    const formdata = new FormData();
    formdata.append("name_en", nameEn);
    formdata.append("name_ru", nameRu);
    formdata.append("images", file);

    fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/categories/${editId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${editToken}`,
      },
      body: formdata,
    })
      .then((respons) => respons.json())
      .then((elements) => {
        if (elements.success) {
          toast.success(elements?.message);
          <ToastContainer />;
          getCategories();
          handleClose();
        } else {
          toast.error(elements?.message);
        }
      });
  };

  return (
    <div>
      <div onClick={handleOpen}>
        <FaRegEdit className="text-[20px] mt-[5px] text-white" />
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="flex justify-between items-center mb-5">
            <p className="font-semibold">Vertically centered modal dialog</p>
            <MdClose
              className="text-[24px] opacity-50 cursor-pointer"
              onClick={handleClose}
            />
          </div>

          <form className="grid grid-cols-1">
            <div className="grid grid-cols-1 gap-y-8">
              <div className="grid grid-cols-1 gap-y-3">
                <div className="flex items-center gap-2">
                  <TbTopologyStar3 className="text-yellow-900 w-[13px]" />
                  <label htmlFor="name_en">name_en</label>
                </div>
                <input
                  defaultValue={editName_en}
                  onChange={(e) => setNameEn(e.target.value)}
                  type="text"
                  id="name_en"
                  className="w-full border-[1px] px-5 py-2 rounded-[10px] outline-none border-[#d9d9d9] focus:border-[#4576e8]"
                />
              </div>

              <div className="grid grid-cols-1 gap-y-3">
                <div className="flex items-center gap-2">
                  <TbTopologyStar3 className="text-yellow-900 w-[13px]" />
                  <label htmlFor="name_ru">name_ru</label>
                </div>
                <input
                  defaultValue={editName_ru}
                  onChange={(e) => setNameRu(e.target.value)}
                  type="text"
                  id="name_ru"
                  className="w-full border-[1px] px-5 py-2 rounded-[10px] outline-none border-[#d9d9d9] focus:border-[#4576e8]"
                />
              </div>

              <div className="flex justify-between items-end gap-y-3">
                <div className="grid grid-cols-1 ">
                  <div className="flex mb-5 items-center gap-2">
                    <TbTopologyStar3 className="text-yellow-900 w-[13px]" />
                    <label htmlFor="file">Upload Image</label>
                  </div>
                  <input
                    onChange={(e) => setFile(e.target.files[0])}
                    type="file"
                    id="file"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleClose}
                    className="text-black px-3 border-[1px] border-solid border-gray-500 py-1 rounded-[8px]"
                  >
                    Cansel
                  </button>
                  <button
                    onClick={editCategory}
                    className="bg-blue-700 text-white px-3 py-1 rounded-[8px]"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>

            {/*  */}
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default EditSettings;
