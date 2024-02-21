function getElementWidth(content, padding, border) {
  let Widthcontent = parseFloat(content);
  let Widthpadding = parseFloat(padding);
  let Widthborder = parseFloat(border);

  return Widthcontent + Widthpadding * 2 + Widthborder * 2;
}
console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
