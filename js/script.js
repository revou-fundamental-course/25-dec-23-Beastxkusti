function hitung(event) {
  event.preventDefault(); // Prevents the form from submitting and page reload

  var alas = parseFloat(document.getElementById("alas").value);
  var tinggi = parseFloat(document.getElementById("tinggi").value);
  var sisi1 = parseFloat(document.getElementById("Sisi1").value);
  var sisi2 = parseFloat(document.getElementById("Sisi2").value);
  var sisi3 = parseFloat(document.getElementById("Sisi3").value);

  var luas = (alas * tinggi) / 2;
  var keliling = sisi1 + sisi2 + sisi3;

  document.getElementById("luas").textContent = luas;
  document.getElementById("keliling").textContent = keliling;
}

document.getElementById("triangleForm").addEventListener("submit", hitung);

function resetForm(event) {
  event.preventDefault(); // Prevents the default reset behavior

  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("Sisi1").value = "";
  document.getElementById("Sisi2").value = "";
  document.getElementById("Sisi3").value = "";

  document.getElementById("luas").textContent = "";
  document.getElementById("keliling").textContent = "";
}

document.getElementById("reset").addEventListener("click", resetForm);
