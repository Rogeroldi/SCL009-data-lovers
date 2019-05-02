/* Manejo de data */
//declaramos variable 
 HEAD

const filterType = (codePoke, condition) => {
  /* Acá va tu código */
  let filterType = codePoke.filter(element => {
    //el filter pasa por todos los elementos del array
    //element va a tomar ese valor en cada vuelta
    return element.type.includes(condition);
  })
  return resultFilterType;
}
window.filterType = filterType;
window.win.onload =function getAllPokemon()
{
