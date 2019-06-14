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
  return document.querySelectorAll('input');
  
}

function clearEmployeeListOnLinkClick() {
  document.body.querySelector('a').addEventListener('click', function(event) {
    document.querySelector('employee-list').
  });
}