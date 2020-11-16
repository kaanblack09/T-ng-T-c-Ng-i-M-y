const showlistkv = () => {
    document.getElementById('sl_rap').style.display = "block";
}
const showlistfilm = () => {
    document.getElementById('listfilm').style.display = "block";
}
window.addEventListener('load', function () {
    document.getElementById('listfilm').style.display = "none";
    document.getElementById('sl_rap').style.display = "none";
});