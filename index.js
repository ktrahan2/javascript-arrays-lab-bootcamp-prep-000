var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(array, element) {
  array.push(element)
}
function destructivelyPrependKitten(array, element) {
  array.unshift(element)
  return array
}
