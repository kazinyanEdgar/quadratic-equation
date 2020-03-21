var x1, x2;

function way() {
    var choice = document.getElementById('choice').value;
    if (choice === 'discriminant') {
        document.getElementById('solveTheQuadraticEquation').style.display = "inline";
        document.getElementById('getTheQuadraticEquation').style.display = "none";
    } else {
        document.getElementById('solveTheQuadraticEquation').style.display = "none";
        document.getElementById('getTheQuadraticEquation').style.display = "inline";
    }
}

function discriminant() {

    var a, b, c;

    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    c = document.getElementById('c').value;

    if (parseInt(a) === 0) {
        alert('a=0. Это не квадратное уравнение');
        return;
    }
    if (a === '' || b === '' || c === '') {
        alert('Заполните все поля');
        return;
    }

    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    var outDiscriminant = document.getElementById('outDiscriminant');

    var discriminantValue = b * b - 4 * a * c;
    if (discriminantValue < 0) {
        outDiscriminant.innerHTML = 'Дискриминант < 0, поэтому корней нет';
    } else {
        x1 = (-b + Math.sqrt(discriminantValue)) / 2 / a;
        if (discriminantValue === 0) {
            outDiscriminant.innerHTML = 'Дискриминант = 0, поэтому квадратное уравнение имеет 1 корень:<br><br>';
            outDiscriminant.innerHTML += 'x = ' + x1;
        } else {
            x2 = (-b - Math.sqrt(discriminantValue)) / 2 / a;
            outDiscriminant.innerHTML = 'Дискриминант > 0, поэтому квадратное уравнение имеет 2 корня:<br><br>';
            outDiscriminant.innerHTML += 'x<sub>1</sub> = ' + x1 + '<br>';
            outDiscriminant.innerHTML += 'x<sub>2</sub> = ' + x2;
        }
    }
}

function vietasFormulas() {

    x1 = document.getElementById('x1').value;
    x2 = document.getElementById('x2').value;

    if (x1 === '' || x2 === '') {
        alert('Заполните все поля');
        return;
    }

    x1 = parseInt(x1);
    x2 = parseInt(x2);

    var outVietasFormulas = document.getElementById('outVietasFormulas');
    var p, q;

    p = -(x1 + x2);
    q = x1 * x2;

    outVietasFormulas.innerHTML = 'x<sup>2</sup>';
    if (p >= 0)
        outVietasFormulas.innerHTML += '+';
    outVietasFormulas.innerHTML += p + 'x';
    if (q >= 0)
        outVietasFormulas.innerHTML += '+';
    outVietasFormulas.innerHTML += q + '=0';

}