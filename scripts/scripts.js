export function createDiv(name) {
  const div = document.createElement('div');
  div.className = name;
  // div.id = name;
  return div;
}
export function createImage(imagePath, altText, name) {
  const image = document.createElement('img');
  image.src = imagePath;
  image.alt = altText;
  image.className = name;
  return image;
}
export function createP(name, content) {
  const p = document.createElement('p');
  p.className = name;
  // p.id = name;
  p.innerHTML = content;
  return p;
}
export function createButton(name, content) {
  const button = document.createElement('button');
  button.className = name;
  button.innerHTML = content;
  button.type = 'button';
  return button;
}
export function createHR(name) {
  const hr = document.createElement('hr');
  hr.className = name;
  return hr;
}