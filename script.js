/* THe next line will show a popup message */
// alert ('Hellow rold!') // see?it works!
const FIRST_NAME = 'Captain'
const LAST_NAME = 'Jack Sparrow'
//declare a variabe name "fullname"
//it's value should be your first name <SPACE>your last name
//e.g "Pepito Lokito Boogabooga"
let fullName = FIRST_NAME +" " + LAST_NAME


const myAddress = 'Boulevard Sunset, 77\n10149 Los Angeles (LA)\nU.S.A.'
document.write(myAddress);

const comma = ','
const Space = ' ' 
const street ='Boulevard Sunset'
const streetNumber = '77'
const zip = '10149' 
const city = 'Los Angeles '
const province = '(LA)'
const country = 'U.S.A'
const address = street + comma + Space + streetNumber + Space + Space + '\n'+ zip + Space + city + province +'\n' + country
let admin
let name ='John'
admin = name;
// alert(admin);
let earth;
let visitor;

const newAddress = `${street}, ${streetNumber}  
${zip} ${Space} ${city} ${province}
${country
}`
const softSkills = 'Effective communication , teamworking , time management , flexibility'
const spokenLanguages = 'French , English , Russian and Arabic'
const workExperience = 'more than 10 years as a freelance on the IT field'
const studies = 'English literature and foreign languages'
const CV = `${studies} 
${workExperience} 
${spokenLanguages} 
${softSkills}`
console.log(CV)
console.log(myAddress)
console.log(fullName)
// 'Via Val DElla Torrre, 39\n10149 Torino (TO)\nItaly';
/*
An adress usaully consists of steet name , civic number,zip code,
city,province, and country.
Declare a constant for every piece of the address and then concatenate all in a òultiline string called 'address'.
*/
console.log(myAddress)