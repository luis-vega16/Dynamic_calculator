const item_list = "item_list";
let total = 0;

function elemento_li(name, price) {
  return `<li class="added-item">name: ${name} price: <span class="span-price">${price}</span><button class="remove-item">remove</button></li>`;
}

let agregar_elemento = (template_function) => {
  return (event) => {
    let color = "";
    const nombre = document.getElementById("item-name").value.trim();
    const item_value = parseFloat(
      document.getElementById("item-value").value.trim()
    );
    if (!isNaN(item_value) && nombre != "") {
      color = "white";
      const new_item_element = template_function(nombre, item_value);
      document.getElementById(item_list).innerHTML += new_item_element;

      let remove_buttons = document.getElementsByClassName("remove-item");
      for (let i = 0; i < remove_buttons.length; i++) {
        remove_buttons[i].addEventListener("click", (event) =>
          remove_item(event.target.parentNode)
        );
      }

    
        total += item_value;
      
      document.getElementById("total").innerHTML = `Total: ${total}`;
    
    } else {
      color = "red";
    }
    document.getElementById("container").style.border = `thick solid ${color}`;
  };
};

let remove_item = (node_to_remove) => {
  const list_of_items = document.getElementById(item_list);
 
  const span_price = node_to_remove.children[0].innerHTML;
  const removed_value = parseFloat(span_price);
  
  total -= removed_value;
  document.getElementById("total").innerHTML = `Total: ${total}`;
  list_of_items.removeChild(node_to_remove);
};

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("total").innerHTML = "Total: 0";
  const event_handler = agregar_elemento(elemento_li);
  document.getElementById("add-item").addEventListener("click", event_handler);
});