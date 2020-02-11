function printMultiple(n, c) {
    let spaces = ""
    for (let i = 0; i < n; i++) {
        spaces += c
    }
    return spaces
}

function triangle(rows) {
    let n = 1;
    for (let spaces = rows - 1; spaces > 0; spaces--) {
        console.log(printMultiple(spaces, " ") + printMultiple(n, "*"))
        n += 2
    }
}

triangle(10)