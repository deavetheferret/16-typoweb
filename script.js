function ToggleItalic() {
  document.getElementById("toggle-italic").classList.add('italic-active');
}

function ItalicToggle() {
  document.getElementById("italic-toggle").classList.add('italic-active');
}

function ItalicToggleNone() {
  document.getElementById("italic-toggle").classList.remove('italic-active')
}

function ToggleItalicNone() {
  document.getElementById("toggle-italic").classList.remove('italic-active')
}

function WidthModifier() {
  document.getElementById("editable-content").style.fontVariationSettings('"wdth" 80')
}

function MenuSliderOpen() {
  document.getElementsById("menu-slider").classList.add('open')
}

ActiveRange() {
  document.getElementById('range-setting').classList.add('active-range')
}