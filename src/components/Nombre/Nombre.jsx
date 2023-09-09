import React, { useEffect, useState } from "react";
import {
  Card,
  DataEntered,
  GridContainer2,
  HeaderTitle,
  Img,
  ImgContainer,
  Input,
  InputContainer,
  TitleContent,
  Write,
} from "../ProjectStyles";

const Nombre = () => {
  const [inputName, setInputName] = useState({
    nombre: "",
    segundoNombre: "",
    apellidoMaterno: "",
    apellidoPaterno: "",
  });

  const handleChangeName = (e) => {
    setInputName({
      ...inputName,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    window.sessionStorage.setItem("name", Object.values(inputName));
  }, [inputName]);

  return (
    <>
      <GridContainer2>
        <ImgContainer>
          <Img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
            alt="Avatar"
          />
        </ImgContainer>
        <Card>
          <TitleContent>
            <HeaderTitle>¿Cuál es tu nombre?</HeaderTitle>
          </TitleContent>
          <InputContainer>
            <Input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={inputName.nombre}
              onChange={handleChangeName}
              required
            />
            <Input
              type="text"
              name="segundoNombre"
              placeholder="Segundo Nombre"
              value={inputName.segundoNombre}
              onChange={handleChangeName}
              required
            />
            <Input
              type="text"
              name="apellidoPaterno"
              placeholder="Apellido paterno"
              value={inputName.apellidoPaterno}
              onChange={handleChangeName}
              required
            />
            <Input
              type="text"
              name="apellidoMaterno"
              placeholder="Apellido materno"
              value={inputName.apellidoMaterno}
              onChange={handleChangeName}
              required
            />
          </InputContainer>
        </Card>
      </GridContainer2>
      {Object.values(inputName).some((value) => value !== "") && (
        <DataEntered>
          {Object.values(inputName).map((value, index) => {
            if (value !== "") {
              return <Write key={index}>{value}</Write>;
            }
          })}
        </DataEntered>
      )}
    </>
  );
};

export default Nombre;
