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
  let ul = document.createElement('li');
  document.querySelector('.employee-list').appendChild();
}

function addNewLiOnClick() {
  
}

function clearEmployeeListOnLinkClick() {
  
}