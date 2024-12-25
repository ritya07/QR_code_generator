function generateQRCode() {
  const qrcodeContainer = document.getElementById("qrcode");
  const text = document.getElementById("text").value;

  // Clear the previous QR code
  qrcodeContainer.innerHTML = "";

  if (text) {
    // Generate QR code
    new QRCode(qrcodeContainer, {
      text: text,
      width: 128,
      height: 128,
    });
  } else {
    alert("Please enter a valid text or URL");
  }
}
