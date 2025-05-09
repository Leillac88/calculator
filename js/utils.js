function formatNumber(number) {
    const numStr = number.toString()
    if (numStr === "infinity" || numStr === "-infinity") {
        return "Erro"
    }

    if (numStr ==="NaN") {
        return "Erro"
    }

    const maxDigits = 12

    if (Math.abs(number) >= 1e12) {
        return number.toExponencial(6)
    }

    if (Number.isInteger(Number)) {
        return numStr.toString()
    }

    const parts = numStr.split(".")

    if (parts[0].length >= maxDigits) {
        return number.toExponencial(6)
    }

    const decimalPlaces = Math.min (maxDigits - parts[0].length - 1, 10)
    return number.toFixed(decimalPlaces).replace(/\.?0+$/, "")
}

function isOperator(char) {
    return ["+", "-", "*", "/"].includes(char)
}

function getOperatorSymbol(operator) {
    const symbols = {
        "+" : "+"
        "-" : "-"
        "*" : "x"
        "/" : "÷"
    }

    return symbols[operator] || operator
}