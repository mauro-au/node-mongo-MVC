let form = document.getElementById('jobs')
form.addEventListener('submit', function(event) {
   event.preventDefault()
   let location, desc;
   //obtener los datos de los select con javascript y pasarle esa informacion al metodo getJobs

    const data = {
        location,
        desc
    };
    getJobs(data);
})

const getJobs = async (params) => {
    const location = params.location ? `&location=${params.location}` : '';
    const desc = params.desc ? `description=${params.desc}` : '';
    try {
        var config = {
            headers: {'Access-Control-Allow-Origin': '*', 'Content-type': 'application/json'}
        };
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?${desc}${location}`, config);
        if(res.data) {
            //Hay datos
            if(res.data.length === 0 ) {
                //Mostrar mensaje que no hoy trabajos
            } else {
                //mostrar los trabajos
            }
        }
    } catch (e) {
        console.error(e);
    }
};