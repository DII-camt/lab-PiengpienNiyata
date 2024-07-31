//5
const d1 = new Date('2024-01-01');
const d2 = new Date();

const A = (d1,d2) =>{
    const oneDay = 24 * 60 * 60 * 1000; // Hours * minutes * seconds * milliseconds
    return Math.round(Math.abs((d2 - d1) / oneDay));
  };
  
  console.log(A(d1, d2));

  //6
const d11 = new Date('2023-01-01');
const AA = (d11) =>{
    const today = new Date();
    let age = today.getFullYear() - d11.getFullYear();
    const monthDifference = today.getMonth() - d11.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < d11.getDate())) {
      age--;
    }
    return age;
  };
  
  console.log(AA(d11));