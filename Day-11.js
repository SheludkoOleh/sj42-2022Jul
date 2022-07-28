//https://www.codewars.com/kata/588502f87987a27f690001f7/train/javascript

function areEqual(s1, s2) {
  return [...s1].every((x) => s2.has(x)) && [...s2].every((x) => s1.has(x));
}

function notEqual(s1, s2) {
  return !areEqual(s1, s2);
}
