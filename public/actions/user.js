const base_url = 'http://localhost:3000';

let form = document.getElementById('new_user')
form.addEventListener('submit', function(event) {
   event.preventDefault()
   console.log("click");
   const email = document.querySelector('#new-mail').value;
   const password = document.querySelector('#new-pass').value;
   const name = document.querySelector('#new-name').value;
   const lastname = document.querySelector('#new-lastname').value;

    const data = {
        email,
        password,
        name,
        lastname
    };
    newUser(data);
})

const newUser = async (data) => {
    try {
        const resp = await axios.post(`${base_url}/users/`, data);
        if(resp.data) {
            if(resp.data.length !== 0 ) {
                window.location.href = '/';
            }
        }
    } catch (e) {
        console.error(e);
    }
}

const getUsers = async () => {
    try {
        const res = await axios.get(`${base_url}/users/`);
        const users = res.data;
        if(res.data) {
            if(res.data.length === 0 ) { 
                let selectedDiv = document.getElementById('list-users');
                let err = document.createElement('p');
                let textErr = document.createTextNode('No existen usuarios en el sistema');
                err.appendChild(textErr)
                selectedDiv.appendChild(err);
            } else {
                $(function() {
                    $('<tr>').addClass('center aligned').append(
                        $('<th>').text('Nombre'),
                        $('<th>').text('Apellido'),
                        $('<th>').text('Email')
                    ).appendTo('#users_table thead');
                    $.each(res.data, function(i, item) {
                        $('<tr>').addClass('center aligned').append(
                            $('<td>').text(item.name),
                            $('<td>').text(item.lastname.replace(/ñ/gi,"n")),
                            $('<td>').text(item.email)
                        ).appendTo('#users_table tbody');
                    });
                });
            }
        }
    } catch (e) {
        console.error(e);
    }
};

getUsers();