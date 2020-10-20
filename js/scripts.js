function convertToC () 
{
  const cTemp = parseInt(document.getElementById('cTemp').value);
  const cToFahr = (cTemp * (9 / 5)) + 32;
  console.log('cTemp')
  //comment
  // console.log('cTemp').value = cTemp;
  // return false;// git branch 
}
function convertToF ()
{
  const fTemp = parseInt(document.getElementById('fTemp').value);
  const fToCel = (fTemp - 32) * (5 / 9);
  console.log(cTemp);
  console.log('fTemp')
  //comment return false;//
}