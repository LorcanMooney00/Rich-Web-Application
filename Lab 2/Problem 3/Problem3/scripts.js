function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
var form = document.getElementById("SearchBar")
form.addEventListener('submit', function(e) {
    removeElementsByClass("user")
    e.preventDefault()
    var search = document.getElementById("search").value
    var NameCheck = search.split(' ').join('')
    fetch("https://api.github.com/users/"+NameCheck)
        .then((result) => result.json())
        .then((data) => {
            let UserImage = data.avatar_url
            let Username = data.login
            let UserEmail = data.email
            let UserLocation = data.location
            let UserGistsLists = data.public_gists
            let userTemplate = `<div class="InformationOfUser">
                                    <img src="${UserImage}">
                                    <h2>User Name: </h2>
                                    <p>${Username}</p>
                                    <h2>Email: </h2>
                                    <p>${UserEmail}</p>
                                    <h2>Location: </h2>
                                    <p>${UserLocation}</p>
                                    <h2>Number of Gists: </h2>
                                    <p>${UserGistsLists}</p>
                                </div>`
            document.getElementById("GitUserInfo").insertAdjacentHTML('beforeend', userTemplate)

            var GitURL = data.repos_url
            console.log(GitURL)
            fetch(GitURL)
                .then((result) => result.json())
                .then((newdata) => {
                    let tablecreated = `<thead>
                                     <tr>
                                        <th>Repo Name</th>
                                        <th>Description</th>
                                     </tr>
                                     </thead>
                                     <tbody id="ContentInTable">  
                                     </tbody>`
                    document.getElementById("Table").insertAdjacentHTML('beforeend', tablecreated)
                    for(let i=0; i<newdata.length; i++) {
                        let title = newdata[i].name
                        let desc = newdata[i].description
                        let repoTemplate = `<tr class="repo">
                                                <td>${title}</td>
                                                <td>${desc}</td>
                                            </tr>`
                        document.getElementById("ContentInTable").insertAdjacentHTML('beforeend', repoTemplate)
                    }
                })
        })
})