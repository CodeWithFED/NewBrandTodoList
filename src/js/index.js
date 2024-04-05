let input = document.getElementById("box");
let btn = document.getElementById("create");
let list = document.getElementById("list");

btn.onclick = () => {
  let newElement = document.createElement('div');
  newElement.classList.add('task');
  newElement.innerHTML = `
  <div>${input.value}</div>
  <div id="midcon">
  <div>
  <select name="" id="">
  <option value="1">Busy</option>
  <option value="2">Away</option>
  <option value="3">Free</option>
  </select>
  </div>
  <div><input type="date" name="" id="" /></div>
  </div>
  <button class="btn btn__tick">Done</button>`;
  list.appendChild(newElement);
  // Add event listener for the "Done" button of the newly added list item
  let donebtn = newElement.querySelector('.btn__tick');
  donebtn.onclick = () => {
    newElement.innerHTML = `<div>Done</div> 
    <button class="btn btn__rm">Remove</button>`;
    newElement.classList.toggle('btn__done');
    
    // Remove the focus state from the "Done" button
    donebtn.blur();
    
    let rmbtn = newElement.querySelector('.btn__rm');
    rmbtn.onclick = () => {
      list.removeChild(newElement);
    }
  }
  
  input.value = '';
  btn.blur();
}