 let bookCart = []
let ul = document.querySelector('.miLista')
 let input= document.querySelector('.entrada');
 let boton = document.querySelector('.boton')
const ADD_TO_CART_ACTION = 'addToCart'
const REMOVE_FROM_CART_ACTION = 'removeFromCart'
const VIEW_CART_ACTION = 'removeFromCart'

/*function viewCart(){
    ul.textContent = ''
    bookCart.forEach((item)=>{
        let li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
})
    }*/

    function viewCart(){
        // Limpiar el contenido actual de la lista
        ul.innerHTML = '';
    
        // Mostrar las tareas nuevamente sin repetir las anteriores
        bookCart.forEach((item, index) => {
            let li = document.createElement("li");
            let imagen = document.createElement("img")
            imagen.src = "./book-3_icon-icons.com_49257.png"
            li.classList.add('libros');
            li.textContent = item;
            
    
            // Crear un botón de eliminación
            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Eliminar";
            deleteButton.addEventListener('click', function() {
                // Eliminar la tarea correspondiente del array bookCart
                bookCart.splice(index, 1);
                // Volver a mostrar la lista actualizada
                viewCart();
            });
    
            // Agregar el botón de eliminación al elemento de lista
            li.appendChild(deleteButton);
            li.appendChild(imagen)
    
            // Agregar el elemento de lista a la lista ul
            ul.appendChild(li);
        });
    }

function agregar(){
    bookCart.push(input.value)
    viewCart()
    input.value = ''
}

boton.addEventListener('click',agregar)

/*function performCartActions (action,newBook){
    switch (action){
        case ADD_TO_CART_ACTION :
            
            break;
        case REMOVE_FROM_CART_ACTION :
            if (bookCart.length === 0){
                console.log('Cart is empty. No books to remove.')
            }
            
        else{
            const removedBook = bookCart.pop()
            console.log(`Removed book from the cart: ${removedBook}`)
        }
        break;
        case VIEW_CART_ACTION:
            viewCart()
            break;
        default:
        console.log('Invalid action. Please choose a valid option.')
           
    }
}
*/  



