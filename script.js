let mainEl = document.getElementById('mainEl');

const newProperties = {
  width: document.getElementById('widthEl'),
  height: document.getElementById('heightEl'),
  bgColor: document.getElementById('bgColorEl'),
  borderColor: document.getElementById('borderColorEl'),
  borderRadius: document.getElementById('borderRadiusEl'),
  fontColor: document.getElementById('fontColorEl'),
}

function acceptChanges() {
  mainEl.style.width = newProperties.width.value;
  mainEl.style.height = newProperties.height.value;
  mainEl.style.backgroundColor = newProperties.bgColor.value;
  mainEl.style.borderColor = newProperties.borderColor.value;
  mainEl.style.borderRadius = newProperties.borderRadius.value;
  mainEl.style.color = newProperties.fontColor.value;
}

function clearAllChanges() {
  newProperties.width.value = "";
  newProperties.height.value = "";
  newProperties.bgColor.value = "";
  newProperties.borderColor.value = "";
  newProperties.borderRadius.value = "";
  newProperties.fontColor.value = "";

  mainEl.style.width = "300px";
  mainEl.style.height = "300px";
  mainEl.style.backgroundColor = "rgb(157, 146, 172)";
  mainEl.style.borderColor = "rgb(66, 22, 122)";
  mainEl.style.borderRadius = "";
  mainEl.style.color = "rgb(34, 34, 34)";
}
