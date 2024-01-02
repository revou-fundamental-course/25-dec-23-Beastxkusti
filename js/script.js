function hitungLuas(event) {
  event.preventDefault(); 

  var alas = parseFloat(document.getElementById("alas").value);
  var tinggi = parseFloat(document.getElementById("tinggi").value);

  var luas = (alas * tinggi) / 2;

  document.getElementById("luas").textContent = "Luas: " + luas.toFixed(2);
  document.getElementById("keliling").textContent = "";
}

function hitungKeliling(event) {
  event.preventDefault(); 

  var sisi1 = parseFloat(document.getElementById("Sisi1").value);
  var sisi2 = parseFloat(document.getElementById("Sisi2").value);
  var sisi3 = parseFloat(document.getElementById("Sisi3").value);

  var keliling = sisi1 + sisi2 + sisi3;

  document.getElementById("keliling").textContent = "Keliling: " + keliling.toFixed(2);
  document.getElementById("luas").textContent = ""; 
}

document.getElementById("mencariluas").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("luasInputs").style.display = "block";
  document.getElementById("kelilingInputs").style.display = "none";
  document.getElementById("triangleForm").addEventListener("submit", hitungLuas);
  document.getElementById("triangleForm").removeEventListener("submit", hitungKeliling);
});

document.getElementById("mencarikeliling").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("kelilingInputs").style.display = "block";
  document.getElementById("luasInputs").style.display = "none";
  document.getElementById("triangleForm").addEventListener("submit", hitungKeliling);
  document.getElementById("triangleForm").removeEventListener("submit", hitungLuas);
});
