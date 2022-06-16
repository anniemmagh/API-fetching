document.getElementById('mybtn').addEventListener('click', getData);

function getData() {
    ///Get API
    fetch('https://randomuser.me/api?results=50')
        .then(res => res.json())
        .then(data => {
            let gender = data.results;
            ////get data value
            let output = "<h2><center>Get users Data</cener></h2>"

            ////get data loop through
            gender.forEach(function (lists) {
                output += `
               <div class="container">
               <div class="card mt-4 bg-light">
               <ul class="list-group">
               <li class="list-group-item">
               <h2> Name: ${lists.name.first} </h2>
               </li>
               <li class="list-group-item">
               <img src="${lists.picture.medium}" alt="">
               </li>
               <li class="list-group-item">
              <h2> Email: ${lists.email} </h2>
               </li>
               <li class="list-group-item">
               <h2> Phone: ${lists.phone} </h2>
                </li>
                <h2> Address: ${lists.location.street} </h2>
               </ul>

               </div>
              </div> `;
            })
            //// show on the screen
            document.getElementById('output').innerHTML = output;

        });
};