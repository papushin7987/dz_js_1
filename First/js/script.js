a = prompt("Первое слово");
b = prompt("Второе слово");

function anagram(a, b){
  if (a.length !== b.length) {
    return "Эти слова не анаграммы";
  }
  if (a === b) {
    return "Эти слова анаграммы";
  }

  var c = '',
  i = 0,
  match = 0,
  id;
  while(i < a.length){
    c = a.substr(i++, 1);
    id = b.indexOf(c);
    if (id > -1) {
      match++;
      b = b.substr(0, id) + b.substr(id + 1);
    }
    else return "Эти слова не анаграммы";
  }
  if (match === a.length) return "Эти слова анаграммы";
  else return "Эти слова не анаграммы";
}
alert(anagram(a, b));