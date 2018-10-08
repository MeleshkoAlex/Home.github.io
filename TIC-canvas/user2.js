(function() {
    var canvas = document.querySelector('#can'),
        ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#B70A02';
    var posArr = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    var stepCount = 0;
    var coordinat = {
        zero: [50, 50],
        one: [150, 50],
        two: [250, 50],
        three: [50, 150],
        four: [150, 150],
        five: [250, 150],
        six: [50, 250],
        seven: [150, 250],
        eight: [250, 250],
    };
    var coordinateMouse = {
        zero: [100, 100],
        one: [200, 100],
        two: [300, 100],
        three: [100, 200],
        four: [200, 200],
        five: [300, 200],
        six: [100, 300],
        seven: [200, 300],
        eight: [300, 300],
    }
    ctx.strokeRect(1, 1, 300, 300);
    ctx.moveTo(100, 1);
    ctx.lineTo(100, 300);
    ctx.stroke();
    ctx.moveTo(200, 1);
    ctx.lineTo(200, 300);
    ctx.stroke();
    ctx.moveTo(1, 100);
    ctx.lineTo(300, 100);
    ctx.stroke();
    ctx.moveTo(1, 200);
    ctx.lineTo(300, 200);
    ctx.stroke();
    //______)
    function drawX(x, y) {
        console.log(' kord x y ' + x, y);
        ctx.moveTo(x - 10, y - 10);
        ctx.lineTo(x + 10, y + 10);
        ctx.stroke();
        ctx.moveTo(x + 10, y - 10);
        ctx.lineTo(x - 10, y + 10);
        ctx.stroke();
    };

    function drawEllipse(x, y) {
        var a = 8;
        var b = 16;
        ctx.beginPath();
        ctx.translate(x, y);
        ctx.scale(a / b, 1);
        // Рисуем окружность, которая благодаря масштабированию станет эллипсом
        ctx.arc(0, 0, b, 0, Math.PI * 2, true);
        // Восстанавливаем СК и масштаб
        ctx.restore();
        ctx.closePath();
        ctx.stroke();
    }

    function getMousePos(canvas, event) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }
    canvas.addEventListener('click', function(event) {
        var mousePos = getMousePos(canvas, event);
        CheckPos(mousePos.x, mousePos.y);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        console.log(message);
    }, false);

    function CheckPos(x, y) {
        console.log(x, y);
        if (x < coordinateMouse.zero[0] && y < coordinateMouse.zero[1]) {
            if (posArr[0][0] == null) {
                if (stepCount % 2 == 0) {
                    drawX(coordinat.zero[0], coordinat.zero[1]);
                    posArr[0][0] = 1;
                    stepCount++;
                    return;
                } else {
                    drawEllipse(coordinat.zero[0], coordinat.zero[1])
                    posArr[0][0] = 0;
                    stepCount++;
                    return;
                }
            }
        }
        if (x < coordinateMouse.one[0] && y < coordinateMouse.one[1] && x > coordinateMouse.zero[0]) {
            if (posArr[0][1] == null) {
                if (stepCount % 2 == 0) {
                    drawX(coordinat.one[0], coordinat.one[1]);
                    posArr[0][1] = 1;
                    stepCount++;
                    return;
                } else {
                    drawEllipse(coordinat.one[0], coordinat.one[1])
                    posArr[0][1] = 0;
                    stepCount++;
                    return;
                }
            }
        }
        if (x < coordinateMouse.two[0] && y < coordinateMouse.two[1] && x > coordinateMouse.one[0]) {
            if (posArr[0][2] == null) {
                if (stepCount % 2 == 0) {
                    drawX(coordinat.two[0], coordinat.two[1]);
                    posArr[0][2] = 1;
                    stepCount++;
                    return;
                } else {
                    drawEllipse(coordinat.two[0], coordinat.two[1])
                    posArr[0][2] = 0;
                    stepCount++;
                    return;
                }
            }
        }
    }

    function checkWon() {
        // == x
        if (posArr[0][0] == 1 && posArr[0][1] == 1 && posArr[0][2] == 1) {
            alert('won x');
            location.reload();
        }
        if (posArr[1][0] == 1 && posArr[1][1] == 1 && posArr[1][2] == 1) {
            alert('won x');
            location.reload();
        }
        if (posArr[2][0] == 1 && posArr[2][1] == 1 && posArr[2][2] == 1) {
            alert('won x');
            location.reload();
        }
        if (posArr[0][0] == 1 && posArr[1][0] == 1 && posArr[2][0] == 1) {
            alert('won x');
            location.reload();
        }
        if (posArr[0][1] == 1 && posArr[1][1] == 1 && posArr[2][1] == 1) {
            alert('won x');
            location.reload();
        }
        if (posArr[0][2] == 1 && posArr[1][2] == 1 && posArr[2][2] == 1) {
            alert('won x');
            location.reload();
        }
        if (posArr[0][0] == 1 && posArr[1][1] == 1 && posArr[2][2] == 1) {
            alert('won x');
            location.reload();
        }
        if (posArr[0][2] == 1 && posArr[1][1] == 1 && posArr[2][0] == 1) {
            alert('won x');
            location.reload();
        }
        // == 0
        if (posArr[0][0] == 0 && posArr[0][1] == 0 && posArr[0][2] == 0) {
            alert('won x');
            location.reload();
        }
        if (posArr[1][0] == 0 && posArr[1][1] == 0 && posArr[1][2] == 0) {
            alert('won x');
            location.reload();
        }
        if (posArr[2][0] == 0 && posArr[2][1] == 0 && posArr[2][2] == 0) {
            alert('won x');
            location.reload();
        }
        if (posArr[0][0] == 0 && posArr[1][0] == 0 && posArr[2][0] == 0) {
            alert('won x');
            location.reload();
        }
        if (posArr[0][1] == 0 && posArr[1][1] == 0 && posArr[2][1] == 0) {
            alert('won x');
            location.reload();
        }
        if (posArr[0][2] == 0 && posArr[1][2] == 0 && posArr[2][2] == 0) {
            alert('won x');
            location.reload();
        }
        if (posArr[0][0] == 0 && posArr[1][1] == 0 && posArr[2][2] == 0) {
            alert('won x');
            location.reload();
        }
        if (posArr[0][2] == 0 && posArr[1][1] == 0 && posArr[2][0] == 0) {
            alert('won x');
            location.reload();
        }
    }
})();