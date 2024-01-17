export default function Admin() {
  return (
    <form>
      <label>Título</label>
      <input type={'text'} placeholder={'Título'}/>
      <label>Descripción</label>
      <input type={'text'} placeholder={'Descripción'}/>
      <label>Imagen</label>
      <input type={'file'}/>
      <button type={'submit'}>Enviar</button>
    </form>
  )
}
