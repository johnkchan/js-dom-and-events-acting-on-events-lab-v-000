function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  document.querySelector('.employee-list').appendChild(li);
}

function addNewLiOnClick() {
  let button = document.querySelector('input[value="Add Employee"]')
  return document.querySelectorAll('input');
  
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(event) {
    let list = document.querySelector('.employee-list');
    
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
  });
}