export default function Upload() {
return (
    <form action={'/api/'} className={'p-36'}>
      <label>Foto:</label><br/>
      <input type="file" id="foto" name="foto"></input><br/>
      <label>Descripción:</label><br/>
      <input type="text" id="descripcion" name="descripcion"></input><br/>
      <label>Fecha:</label><br/>
      <input type="date" id="fecha" name="fecha"></input><br/>
      <label>Título:</label><br/>
      <input type="text" id="titulo" name="titulo"></input><br/>
      <input type="submit" value="Subir foto"></input>
    </form>
  )
}