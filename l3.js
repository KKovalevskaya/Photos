function checkCapacity(A, H, R, M) {
  // Вычисляем объемы обеих ёмкостей
  var volumeCube = Math.pow(A, 3);
  var volumeCylinder = Math.PI * Math.pow(R, 2) * H;

  // Проверяем, какие ёмкости можно заполнить
  var canFillFirst = M <= volumeCube;
  var canFillSecond = M <= volumeCylinder;

  // Возвращаем результат
  if (canFillFirst && canFillSecond) {
    return "Можно заполнить обе ёмкости";
  } else if (canFillFirst) {
    return "Можно заполнить первую ёмкость";
  } else if (canFillSecond) {
    return "Можно заполнить вторую ёмкость";
  } else {
    return "Нельзя заполнить ни одну ёмкость";
  }
}

var A = 5;
var H = 3;
var R = 2;
var M = 1;

var result = checkCapacity(A, H, R, M);
console.log(result);