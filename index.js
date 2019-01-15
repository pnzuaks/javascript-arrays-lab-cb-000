var kittens = ["Milo", "Otis", "Garfield"]//define your array here

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens

}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens

}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens

}

function appendKitten(name) {
  var array = kittens.concat(name)
  return array
}
function prependKitten(name) {
  kittens.push(name)
  return kittens
}
function removeLastKitten(name) {
  kittens.push(name)
  return kittens
}
function removeFirstKitten(name) {
  kittens.push(name)
  return kittens
}
