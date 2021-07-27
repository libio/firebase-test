import React, { Fragment } from "react";
import Linksfrom from "./Linksfrom";
import { db } from "../Firebase";
const Links = () => {
  const AddUser = async (data) => {
    await db.collection("my-data").doc().set({
      DNI: data.dni,
      Cod_Verificacion: data.cui,
      Nombres: data.name,
      Ap_Paterno: data.first_name,
      Ap_Materno: data.last_name,
    });
    console.log("Los datos se almacenaron exitosamente en Firebase");
  };
  return (
    <Fragment>
      <Linksfrom Agregar={AddUser} />
    </Fragment>
  );
};
export default Links;
