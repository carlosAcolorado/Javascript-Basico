function toUpper(string) {
    return string.toUpperCase();
  }
  
  const cats = ["Leopardo", "Serval", "Jaguar", "Tigre", "Caracal", "León"];
  
  const upperCats = cats.map(toUpper);
  
  console.log(upperCats);
  // [ "LEOPARDO", "SERVAL", "JAGUAR", "TIGRE", "CARACAL", "LEÓN" ]