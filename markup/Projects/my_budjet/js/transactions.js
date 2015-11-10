
$(document).ready(function() {
    $(".show_new_transation_menu").click(function() {
        $(".hide_menu").toggleClass('hide');

        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        var day = today.getDate();

        dateInput.value = year + '-' + month + '-' + day;

        return false;
    });
});

function validateNumberInput(value) {
    var regexp = /^([1-9]+[0-9]*)[,.]?[0-9]{0,2}$/;

    if (regexp.test(value)) {
        var last = value.slice(-1);

        if (last.localeCompare('.') == 0) {
            value = value.substring(0, value.length - 1) + ',';
        }

        return value;
    }

    return value.substring(0, value.length - 1);

}

function validateTransactionForm() {
    var valid = true;

    if (dateInput.value.length == 0) {
        alert('false');
        valid = false;
    }

    if (valueInput.value.length == 0) {

        valid = false;
    }

    if (valid) {
        valueInput.value = sign.innerHTML + valueInput.value;
    }

    return valid;
}

function incomeButton() {
    sign.innerHTML = '+';

	return false;
}

function expenseButton() {
    sign.innerHTML = '-';

    return false;
}

function deleteTransaction() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                document.getElementById("1").innerHTML = "";
        }
    }

    xmlhttp.open("GET", "AJAX-TEST.txt", true);
    xmlhttp.send();
}
