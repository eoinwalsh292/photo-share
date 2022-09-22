var counter = 0;

function gridRow() {
    document.getElementById("imagegrid").innerHTML +=
        `<div class="row" id="row`+counter+`">`;

    for (var i = 0; i < 8; i++) {
        document.getElementById("row"+counter).innerHTML +=
            `<img class="gridImg" src="/images/` + (i + 1) + `.png">`;
    }
    counter++;
}