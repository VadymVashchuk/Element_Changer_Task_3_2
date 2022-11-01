let mainEl = document.getElementById('mainEl');

const widthChooser = document.getElementById('widthChooser');
const heightChooser = document.getElementById('heightChooser');
const borderRadiusChooser = document.getElementById('borderRadiusChooser');

const newProperties = {
  width: document.getElementById('widthEl'),
  height: document.getElementById('heightEl'),
  bgColor: document.getElementById('bgColorEl'),
  borderColor: document.getElementById('borderColorEl'),
  borderRadius: document.getElementById('borderRadiusEl'),
  fontColor: document.getElementById('fontColorEl'),
}

function acceptChanges() {
  mainEl.style.width = newProperties.width.value + widthChooser.value;
  mainEl.style.height = newProperties.height.value + heightChooser.value;
  mainEl.style.backgroundColor = newProperties.bgColor.value;
  mainEl.style.borderColor = newProperties.borderColor.value;
  mainEl.style.borderRadius = newProperties.borderRadius.value + borderRadiusChooser.value;
  mainEl.style.color = newProperties.fontColor.value;
}

function clearAllChanges() {
  widthChooser.value = "px";
  heightChooser.value = "px";
  borderRadiusChooser.value = "%";
  newProperties.width.value = "";
  newProperties.height.value = "";
  newProperties.bgColor.value = "#9d92ac";
  newProperties.borderColor.value = "#42167a";
  newProperties.borderRadius.value = "";
  newProperties.fontColor.value = "#222222";

  mainEl.style.width = "300px";
  mainEl.style.height = "300px";
  mainEl.style.backgroundColor = "rgb(157, 146, 172)";
  mainEl.style.borderColor = "rgb(66, 22, 122)";
  mainEl.style.borderRadius = "";
  mainEl.style.color = "rgb(34, 34, 34)";
}
