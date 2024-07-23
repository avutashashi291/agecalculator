function age() {
    var d1 = parseInt(document.getElementById("date").value);  // Convert input to integer
    var m1 = parseInt(document.getElementById("month").value); // Convert input to integer
    var y1 = parseInt(document.getElementById("year").value);  // Convert input to integer

    // Validate input values
    if (d1 <= 0 || d1 > 31 || m1 <= 0 || m1 > 12) {
        alert("Please enter valid day (1-31) and month (1-12) values.");
        return;
    }

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }

    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    document.getElementById("age").innerHTML =
        "Your Age is " + y + " Years " + m + " Months " + d + " Days";
}
