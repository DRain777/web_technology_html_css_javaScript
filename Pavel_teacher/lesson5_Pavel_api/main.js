const paginationButtonEls = document.querySelectorAll(".pagination");
// console.log(paginationButtonEls);
for (let i = 0; i < paginationButtonEls.length; i++) {
    const button = paginationButtonEls[i];
    button.addEventListener('click', async function () {
        // alert("hello");
        // из кнопки дай значения data-page
        const page = button.getAttribute("data-page");     // дай значения отрибута 
        const users =  await fetchUsers(page); 
        //console.log(users)
        renderUsers(users); 
        
        
        
        
    });
    
}

async function fetchUsers(page) {
    const response = await fetch('https://reqres.in/api/users?page=${page}');
    const json = await response.json();
    return json.data;
}


function renderUsers(users) {
  let content = "";
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    content += `
            <div>
                <img src="${user.avatar}" alt="Avatar">
                <p>${user.first_name} ${user.last_name}</p>
            </div>
        `;
  }
  document.querySelector("#app").innerHTML = content;
}
