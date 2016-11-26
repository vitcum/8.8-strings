var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var greentext = 'Zielone słonie koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
greentext = greentext.toUpperCase();
var changeText = text.replace('Papugi', 'Animal');

console.log(greentext.substring(0, greentext.length/2));
console.log(changeText);