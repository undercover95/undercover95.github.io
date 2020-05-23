const app = document.getElementById("app");
const setBgImageCss = (url, bgSize = "cover") => `background: url('${url}') no-repeat center; background-size: ${bgSize}`;
const background = document.createElement("div");
background.style = `width: 600px; height: 400px; ${setBgImageCss("https://img.siepomaga.pl/uploads/cause/main_photo/21753/big_59aab805-ed84-460d-9215-3793549fba68.jpg")}; display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(4, 1fr); grid-gap: 8px`;
const boxes = Array(16).fill().map(e => document.createElement("div")).map(box => {
    box.style = `${setBgImageCss('virus.png', "contain")}; filter: hue-rotate(${Math.random() * 360}deg); saturate(${Math.random() * 100}); cursor: pointer;`;
    box.addEventListener("click", function () { this.style["visibility"] = "hidden"; checkFoot(); });
    return box;
});
background.append(...boxes);
app.append(background);
function checkFoot() {
    if (boxes.filter(e => e.style["visibility"] !== "hidden").length === 0)
        document.getElementById("foot").style["display"] = "block";
}