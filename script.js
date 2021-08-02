const borderRadius = document.querySelector(".border-radius")
const box = document.querySelector(".box")
const offsetX = document.querySelector(".offsetX")
const offsetY = document.querySelector(".offsetY")
const blur = document.querySelector(".blur")
const spread = document.querySelector(".spread")
const shadowColor = document.querySelector(".shadow-color")
const colorBox = document.querySelector(".color-box")
const out = document.querySelector(".out")
const outset = document.querySelector(".outset")
const inset = document.querySelector(".inset")
const output = document.getElementById("demo");
const output2 = document.getElementById("demo-offsetX")
const output3 = document.getElementById("demo-offsetY")
const output4 = document.getElementById("demo-blur")
const output5 = document.getElementById("demo-spread")

// onchange
//oninput

borderRadius.oninput = cssGenerator
offsetX.oninput = cssGenerator
offsetY.oninput = cssGenerator
blur.oninput = cssGenerator
spread.oninput = cssGenerator
shadowColor.oninput = cssGenerator
colorBox.oninput = cssGenerator
out.oninput = cssGenerator
outset.oninput = cssGenerator
inset.oninput = cssGenerator


function cssGenerator() {
    console.log(outset.checked)
    let shadow = outset.checked ? "" : "inset"
    box.style.borderRadius = borderRadius.value + "%";
    box.style.boxShadow = `${offsetX.value}px  ${offsetY.value}px  ${blur.value}px  ${spread.value}px  ${shadowColor.value}  ${shadow}`;
    box.style.backgroundColor = `${colorBox.value}`;
    out.innerHTML = `box-shadow: ${offsetX.value}px  ${offsetY.value}px  ${blur.value}px  ${spread.value}px  ${shadowColor.value} ${shadow};<br>`;
    out.innerHTML = out.innerHTML + `-webkit-box-shadow: ${offsetX.value}px  ${offsetY.value}px  ${blur.value}px  ${spread.value}px  ${shadowColor.value} ${shadow};<br>`;
    out.innerHTML = out.innerHTML + `-moz-box-shadow: ${offsetX.value}px  ${offsetY.value}px  ${blur.value}px  ${spread.value}px  ${shadowColor.value} ${shadow};`;
    output.innerHTML = borderRadius.value;
    output2.innerHTML = offsetX.value
    output3.innerHTML = offsetY.value
    output4.innerHTML = blur.value
    output5.innerHTML = spread.value
}

console.log(colorBox.value)

cssGenerator()
