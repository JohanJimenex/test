var userAgent = navigator.userAgent || navigator.vendor || window.opera;

if (/android/i.test(userAgent)) {
  alert("estas en android ")
}

if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
  alert("estas en iphone ")
}