function addToHTML(data) {
    let courses = data["courses"];

    let res1 = `<div id="carouselExampleControls" class="carousel slide"
    data-bs-ride="carousel">
    <div class="carousel-inner">`;

    for (var i = 0; i < courses.length; i++) {
        let author = courses[i]["author"];
        let image = courses[i]["image"];
        let price = courses[i]["price"];
        let rating = courses[i]["rating"];
        let title = courses[i]["title"];
        if (i == 0) {
            res1 += `<div class="carousel-item active">
                    <div class="item-container">`;
        }else if(i % 4 == 0 && i != courses.length - 1){
            res1 += ` </div>
                      </div>`;
            res1 +=`<div class="carousel-item">
                    <div class="item-container">`;
        }
        res1 += `
            <div class="grid-item index-${i%4}">
            <img src="${image}" alt="c1" class="c1">
            <h5 class = "title">${title}</h3>
            <p>${author}</p>
            <h5>&euro; ${price}</h3>
            </div>
            `;

    }
    res1 += `</div>`;
    res1 += `
    </div >
        <button class="carousel-control-prev" type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div >
            `;

    document.getElementsByClassName("c-div")[0].innerHTML = res1;
}

function filterFunction() {

    var input, filter, a;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();

    a = document.getElementsByClassName("c-div")[0].getElementsByClassName("grid-item");

    for (var i = 0; i < a.length; i++) {
        txtValue = a[i].getElementsByClassName("title")[0].innerHTML;
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
