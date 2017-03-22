document.addEventListener('DOMContentLoaded', function() {
    const _setButton = document.getElementById("setMax");
    const _toolbox = document.querySelector(".toolbox");
    const _number = document.querySelector(".toolbox input");
    const _panel = document.querySelector(".segment-panel");
    _setButton.addEventListener("click", function (ev) {
        _panel.innerHTML = "";
        _panel.setAttribute("data-max-random",_number.value);
        _toolbox.classList.add("hide");
        startRandSegment();
    });

});

document.addEventListener ('keydown',  reportKeyEvent);

function reportKeyEvent (zEvent) {
    if (zEvent.ctrlKey  &&  zEvent.altKey  &&  zEvent.code === "KeyT") {
        const _toolbox = document.querySelector(".toolbox");
        _toolbox.classList.remove("hide");
    }
}