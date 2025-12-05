function newItem() {
  //javascript
  //1. Adding a new item to the list of items:
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    let list = $('#list');
    list.append(li);
  }

  //2. Crossing out an item from the list of items:
  function crossOut() {
    li.toggleClass('strike');
  }

  li.dblclick(crossOut);

  //3(i). Adding the delete button "X":
  let xBtn = $('<crossOutButton></crossOutButton>');
  xBtn.append();
  xBtn.text('X');
  li.append(xBtn);

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  function deleteListItem() {
    li.addClass('delete');
  }

  xBtn.click(deleteListItem);

  $('#input').val('');

  // 4. Reordering the items:
  $('#list').sortable();
}
