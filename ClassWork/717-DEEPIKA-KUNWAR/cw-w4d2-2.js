//Filter arrays of object

const students = [
{name: "Deepika", dreamCompany: "Google", houseNo:5},
{name: "Deepika", dreamCompany: "Google", houseNo:5},
{name: "Deepika", dreamCompany: "Google", houseNo:5},
{name: "Deepika", dreamCompany: "Google", houseNo:5},
{name: "Deepika", dreamCompany: "Google", houseNo:5}];

//Students want to want in "Nvidia"
const wantToWorkInGoogle = students.filter(s => s.dreamCompany==="Google");
console.log(wantToWorkInGoogle);