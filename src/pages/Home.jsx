import React from "react";
import { FaClipboardQuestion } from "react-icons/fa6";
import { LuTimer } from "react-icons/lu";
import { DatosDeContacto, FechaDeNacimiento, Nombre } from "../components";
import {
  ButtonInit,
  ClipBoard,
  ConfirmationCard,
  FieldSet,
  FinalData,
  Form,
  GridContainer,
  HeaderForm,
  HeaderText,
  HeaderTitle,
  Write,
} from "../components/ProjectStyles";

const Home = () => {
  const [storedName, setStoredName] = React.useState("");
  const [storedBirth, setStoredBirth] = React.useState("");
  const [storedContact, setStoredContact] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStoredName(sessionStorage.getItem("name"));
    setStoredBirth(sessionStorage.getItem("birth"));
    setStoredContact(sessionStorage.getItem("contact"));
  };

  return (
    <Form id="formularios" action="" method="POST" autoComplete="off">
      <FieldSet>
        <HeaderForm>
          <ClipBoard>
            <HeaderTitle title="title">Título de formulario</HeaderTitle>
            <FaClipboardQuestion />
          </ClipBoard>
          <HeaderText>
            <h3>
              <LuTimer />
              En menos de 5 minutos
            </h3>
          </HeaderText>
        </HeaderForm>
        <GridContainer>
          <Nombre />
          <FechaDeNacimiento />
          <DatosDeContacto />
          <ConfirmationCard>
            Si tus datos son correctos, por favor continuemos
          </ConfirmationCard>
          <ButtonInit type="submit" value="Iniciar" onClick={handleSubmit} />
          {storedBirth !== "" && storedContact !== "" && storedName !== "" && (
            <FinalData>
              <Write>{`Fecha de nacimiento: ${
                storedBirth && storedBirth.split(",").join(" ")
              }`}</Write>
              <Write>{`Correo Electrónico: ${
                storedContact && storedContact.split(",")[0]
              }`}</Write>
              <Write>{`Telefono Celular: ${
                storedContact && storedContact.split(",")[1]
              }`}</Write>
              <Write>{`Nombre: ${
                storedName && storedName.split(",").join(" ")
              }`}</Write>
            </FinalData>
          )}
        </GridContainer>
      </FieldSet>
    </Form>
  );
};

export default Home;
