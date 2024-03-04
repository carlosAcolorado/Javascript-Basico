const contacts = [
    "Chris:2232322",
    "Sarah:3453456",
    "Bill:7654322",
    "Mary:9998769",
    "Dianne:9384975",
  ];
  const para = document.querySelector("p");
  const input = document.querySelector("input");
  const btn = document.querySelector("button");
  
  btn.addEventListener("click", () => {
    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";
    for (const contact of contacts) {
      const splitContact = contact.split(":");
      if (splitContact[0].toLowerCase() === searchName) {
        para.textContent = `El número de ${splitContact[0]} es ${splitContact[1]}.`;
        break;
      }
    }
    if (para.textContent === "") {
      para.textContent = "Contacto no encontrado.";
    }
  });