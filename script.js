function display(val) {
  document.getElementById("output").value += val;
  return val;
}

function result() {
  let x = document.getElementById("output").value;
  let y = eval(x);
  document.getElementById("output").value = y;
  return y;
}

function reset() {
  document.getElementById("output").value = "";
}
