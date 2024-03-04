function lCat(cat) {
    return cat.startsWith("L");
  }
  
  const cats = ["Leopardo", "Serval", "Jaguar", "Tigre", "Caracal", "León"];
  
  const filtered = cats.filter(lCat);
  
  console.log(filtrado);
  // [ "Leopardo", "León" ]