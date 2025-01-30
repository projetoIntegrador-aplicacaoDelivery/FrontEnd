import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";
import "./ModalProduto.css";
import FormProduto from "../formproduto/FormProduto";



function ModalProduto() {
  return (
    <>
      <Popup
        trigger={
          <button className="border rounded-full px-2 mb-4  hover:cursor-pointer hover:scale-110 text-green-400 font-bold">
            + Cadastrar Produto
          </button>
        }
        modal
      >
        <FormProduto />
      </Popup>
    </>
  );
}

export default ModalProduto;
