/**
 * Created by nad on 22/03/2017.
 */
var digitSegments = [
    [1,2,3,4,5,6],
    [2,3],
    [1,2,7,5,4],
    [1,2,7,3,4],
    [6,7,2,3],
    [1,6,7,3,4],
    [1,6,5,4,3,7],
    [1,2,3],
    [1,2,3,4,5,6,7],
    [1,2,7,3,6]
]

function startRandSegment() {

    var _panel = document.querySelector(".segment-panel");
    var maxRandom = _panel.getAttribute("data-max-random").split("");
    var digits = maxRandom.length;

    var arrDigits = [];
    for(var i=0; i<digits; i++){
        var node = document.createElement("DIV");
        node.setAttribute("id","_d"+i);
        node.setAttribute("class","digit");
        for(var s=0; s<7; s++){
            var seg = document.createElement("DIV");
            seg.setAttribute("class","segment");
            node.appendChild(seg);
        }
        _panel.appendChild(node);
        arrDigits.push(node);
    }

    for(var i=0; i<digits; i++){
        set(arrDigits[i], parseInt(maxRandom[i]),100, (1000-(i*100+250)), function (digit) {
            setTimeout(function(){
                off(digit);
                digit.classList.add('zoom');
            },250);

        });
    }
};

function set(digit, max, speed, during, callback) {
    setTimeout(function() {
        var random = getRandomInt(0, max);
        setNumber(digit, random, 1);
        speed = speed+50;
        if(speed < during){
            set(digit, max, speed, during, callback);
        }
        else{
            callback(digit);
        }
    },speed);
}

function off(digit) {
    var segments = digit.querySelectorAll('.segment');
    var current = parseInt(digit.getAttribute('data-value'));
    var allSegments = [1,2,3,4,5,6,7];
    allSegments = arr_diff(allSegments,digitSegments[current]);
    allSegments.forEach(function(digitSegment, index) {
        setTimeout(function() {
            segments[digitSegment-1].classList.add('off');
        }, index*45)
    });
}

var setNumber = function(digit, number, on) {
    var segments = digit.querySelectorAll('.segment');
    var current = parseInt(digit.getAttribute('data-value'));

    // only switch if number has changed or wasn't set
    if (!isNaN(current) && current != number) {
        // unset previous number
        digitSegments[current].forEach(function(digitSegment, index) {
            setTimeout(function() {
                segments[digitSegment-1].classList.remove('on');
            }, index*45)
        });
    }

    if (isNaN(current) || current != number) {
        // set new number after
        setTimeout(function() {
            digitSegments[number].forEach(function(digitSegment, index) {
                setTimeout(function() {
                    segments[digitSegment-1].classList.add('on');
                }, index*45)
            });
        }, 250);
        digit.setAttribute('data-value', number);
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function arr_diff (a1, a2) {

    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
};