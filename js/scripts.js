function convertToF(celsius) 
{
  const cTemp = celsius (prompt("Enter a Celsius temperature to convert to Fahrenheit:"));
  const cToFahr = cTemp * 9 / 5 + 32;
  const result = '{cTemp} \ xBOC is {cToFahr} \ xBOF.';
    alert(result);
}
 
function convertTOC(fahrenheit)
{
const fTemp = fahreneheit;
const fToCel = (fTemp - 32) * 5 / 9;
const result = '{fTemp} \ xBOF is {fToCel} \ xBOC.';
  alert(result);
}
convertToF(60);
convertToC(45);
