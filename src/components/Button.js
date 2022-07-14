import { TextField, Button, Dialog, DialogContent } from "@mui/material";
import React from "react";
import { useState } from "react";

const ButtonAdd = (props) => {
  const [open, setOpen] = useState(false);
  const [ values, setValues ] = useState({
    id: "",
    name: "",
    edad: "",
  })

  const fetchHandleDialog = () => {
    setOpen(!open);
  };
  const handleChangeInput= (e) => {
    const { name, value } = e.target;
    setValues({
        ...values, 
        [name]: value,
    });
  }

  const saveChild = (e) => {
    console.log("values", values)
    props.savePadre(values)
    fetchHandleDialog();
  }


  return (
    <>
      <Button onClick={fetchHandleDialog}>Agregar</Button>
      <Dialog open={open} onClose={fetchHandleDialog}>
        <DialogContent>
          <TextField label="ingrese id:" name="id" onChange={handleChangeInput} />
          <TextField label="ingrese name:" name="name" onChange={handleChangeInput} />
          <TextField label="ingrese edad:" name="edad" onChange={handleChangeInput} />
          <Button onClick={saveChild}>Save</Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ButtonAdd;
