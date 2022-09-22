function gridRow() {
    document.getElementById("imagegrid").innerHTML +=
        `<div id="column">`;
    for (var i = 0; i < 4; i++) {
        document.getElementById("column").innerHTML +=
            `<img width="200px" src="/images/` + (i + 1) + `.png">`;
    }
}

function showComments() {
    document.getElementById("comments").innerHTML +=
        `<div id="comments">`;
    for (var i = 0; i < 4; i++) {
        document.getElementById("column").innerHTML +=
            `<p>`;
    }
}