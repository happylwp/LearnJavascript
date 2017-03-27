function changeText(input) {
    var content = document.getElementById("answer");
    var result = document.getElementById("display");
    var text = input.innerText;
    console.log(content.innerText.substr(1, content.innerHTML.length));
    if (text === "CE") {
        if (content.innerText.length > 0) {
            content.innerText = "";
            result.innerText = "";
            // content.innerText = content.innerText.substring(0, content.innerText.length - 1);
        }
    } else if (text === "AC") {
        content.innerText = "";

    } else if (text === "=") {
        // content.innerText = content.substring(1, content.innerText.length - 1);
        var resultText = parse(content.innerText);
        result.innerText = content.innerText + "=" + resultText;
        content.innerText = "";
    } else {
        if (content.innerText.substr(0, 1) === 0) {
            content.innerText = content.innerText.substr(1, content.innerText.length - 1);
        } else {
            content.innerText = content.innerText + text;
        }
    }
}

function parse(content) {
    var index = content.indexOf("+");
    if (index > -1) { //判断有加
        return parse(content.substring(0, index)) + parse(content.substring(index + 1));
    }
    index = content.lastIndexOf("-");
    if (index > -1) { //判断有减法
        return parse(content.substring(0, index)) - parse(content.substring(index + 1));
    }

    index = content.lastIndexOf("X");
    if (index > -1) {
        return parse(content.substring(0, index)) * parse(content
            .substring(index + 1));
    }

    index = content.lastIndexOf("/");
    if (index > -1) {
        return parse(content.substring(0, index)) / parse(content.substring(index + 1));
    }

    if ("" === content) {
        return 0;
    } else {
        return content - 1 + 1;
    }
}