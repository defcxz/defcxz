'use client'

import axios from 'axios';
import { useState } from 'react';

export default function Admin() {
  const [formState, setFormState] = useState({
    foto: null,
    descripcion: '',
    fecha: '',
    titulo: ''
  });

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleFileChange = (event) => {
    setFormState({
      ...formState,
      foto: event.target.files[0]
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    Object.keys(formState).forEach(key => {
      formData.append(key, formState[key]);
    });

    try {
      const response = await axios.post('/photography/api/', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={'p-36'}>
      <label>Foto:</label><br/>
      <input type="file" id="foto" name="foto" onChange={handleFileChange}></input><br/>
      <label>Descripción:</label><br/>
      <input type="text" id="descripcion" name="descripcion" onChange={handleInputChange}></input><br/>
      <label>Fecha:</label><br/>
      <input type="date" id="fecha" name="fecha" onChange={handleInputChange}></input><br/>
      <label>Título:</label><br/>
      <input type="text" id="titulo" name="titulo" onChange={handleInputChange}></input><br/>
      <input type="submit" value="Subir foto"></input>
    </form>
  )
}