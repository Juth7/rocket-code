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

const DatosDeContacto = () => {
  const [inputContact, setInputContact] = useState({
    correoElectronico: "",
    telefonoCelular: "",
  });

  const handleChangeBirth = (e) => {
    setInputContact({
      ...inputContact,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    window.sessionStorage.setItem("contact", Object.values(inputContact));
  }, [inputContact]);
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
            <HeaderTitle>Datos de Contacto</HeaderTitle>
          </TitleContent>
          <InputContainer>
            <Input
              type="email"
              name="correoElectronico"
              placeholder="Correo Electrónico"
              value={inputContact.correoElectronico}
              onChange={handleChangeBirth}
              required
            />
            <Input
              minLength="6"
              type="tel"
              name="telefonoCelular"
              placeholder="Teléfono Celular"
              value={inputContact.telefonoCelular}
              onChange={handleChangeBirth}
              required
            />
          </InputContainer>
        </Card>
      </GridContainer2>
      {Object.values(inputContact).some((value) => value !== "") && (
        <DataEntered>
          {Object.values(inputContact).map((value, index) => {
            if (value !== "") {
              return (
                <p key={index}>
                  {index === 0
                    ? "Correo Electrónico: " + value
                    : "Teléfono Celular: " + value}
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

export default DatosDeContacto;
