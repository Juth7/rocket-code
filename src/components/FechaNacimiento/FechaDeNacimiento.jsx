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
} from "../ProjectStyles";

const FechaDeNacimiento = () => {
  const [inputBirth, setInputBirth] = useState({
    dia: "",
    mes: "",
    año: "",
  });

  const handleChangeContacto = (e) => {
    setInputBirth({
      ...inputBirth,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    window.sessionStorage.setItem("birth", Object.values(inputBirth));
  }, [inputBirth]);

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
            <HeaderTitle>¿Cuál es tu Fecha de Nacimiento?</HeaderTitle>
          </TitleContent>
          <InputContainer>
            <Input
              min="1"
              max="31"
              type="number"
              name="dia"
              placeholder="Día"
              value={inputBirth.dia}
              onChange={handleChangeContacto}
              required
            />
            <Input
              type="text"
              name="mes"
              placeholder="Mes"
              value={inputBirth.mes}
              onChange={handleChangeContacto}
              required
            />
            <Input
              type="number"
              name="año"
              placeholder="Año"
              value={inputBirth.año}
              onChange={handleChangeContacto}
              required
            />
          </InputContainer>
        </Card>
      </GridContainer2>
      {Object.values(inputBirth).some((value) => value !== "") && (
        <DataEntered>
          {Object.values(inputBirth).map((value, index) => {
            if (value !== "") {
              return (
                <p key={index}>
                  {value}
                  <br />
                </p>
              );
            }
          })}
        </DataEntered>
      )}
    </>
  );
};

export default FechaDeNacimiento;
