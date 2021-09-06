function runList() {
  var select = document.getElementById("list");
  var newOption = document.createElement("option");

  newOption.text = document.getElementById("txtbox").value;
  select.add(newOption);
}
