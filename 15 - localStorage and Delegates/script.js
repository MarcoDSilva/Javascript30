const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  //e.preventDefault(); //prevents the page refresh

  //this represents what is inside the form from the btn that deployed this event
  const text = (this.querySelector("[name=item]")).value;

  const item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items)); //key,value
  this.reset();
}

//plates has a placeholder of an empty array, in case the array is not passed, so the loop goes through an empty array
//to avoid errors
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
      //the index is used for the item id, for the "click"
    return `
        <li>
            <input text="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} /> 
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
  }).join(''); //transforms the array returned from map into a string , because of innerHTML
}

//we give the delegate to the ul, which passes the click to the child
function toggleDone(e) {
  if(!e.target.matches('input')) return; //used to skip the click if it's not the input
  const index = e.target.dataset.index;
  items[index].done = !items[index].done;
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

populateList(items,itemsList);