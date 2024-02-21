function getElementWidth(content, padding, border) {
  let Widthcontent = parseFloat(content);
  let Widthpadding = parseFloat(padding);
  let Widthborder = parseFloat(border);

  console.log(Widthcontent + Widthpadding * 2 + Widthborder * 2);
}
getElementWidth('50px', '8px', '4px');
getElementWidth('60px', '12px', '8.5px');
getElementWidth('200px', '0px', '0px');
