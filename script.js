function addToHTML(data) {
    let courses = data["courses"];

    let res1 = "", res2 = "";

    for (var i = 0; i < courses.length; i++) {
        let author = courses[i]["author"];
        let image = courses[i]["image"];
        let price = courses[i]["price"];
        let rating = courses[i]["rating"];
        let title = courses[i]["title"];

        res1 += '<div class = "grid-item">';
        res1 += `<img src="${image}" alt="c1" class="c1">
                <h3>${title}</h3>
                <p>${author}</p>
                <h3>&euro; ${price}</h3>`;
        res1 += "</div>";

        res2 += `<a href="#">${title}</a>`;
    }
    document.getElementsByClassName("c-div")[0].innerHTML = res1;
    document.getElementById("myDropdown").innerHTML = res2;
}

function filterFunction() {

    var input, filter, a;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();

    a = document.getElementById("myDropdown").getElementsByTagName("a");

    if (filter == ""){
        document.getElementById("myDropdown").style.display = "none";
    }else{
        document.getElementById("myDropdown").style.display = "block";
    }

    for (var i = 0; i < a.length; i++) {
        txtValue = a[i].innerHTML;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }

}


fetch('https://api.jsonbin.io/v3/b/62f5ba62e13e6063dc76baff?meta=false')
    .then((response) => response.json())
    .then((data) => addToHTML(data));
