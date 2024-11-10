// Saat
function updateTime() {
  const saatElem = document.getElementById("saat");
  const now = new Date();
  saatElem.textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);

// Daha Fazla Göster / Daha Az Göster
let isExpanded = false;

function toggleText() {
  const aboutMeParagraph = document.getElementById("intro");

  if (isExpanded) {
    aboutMeParagraph.textContent =
      "Bilgisayar mühendisliği öğrencisiyim. Yazılım geliştirme, algoritma tasarımı ve veri analizi konularına...";
  } else {
    aboutMeParagraph.textContent =
      "Bilgisayar mühendisliği öğrencisiyim. Yazılım geliştirme, algoritma tasarımı ve veri analizi konularına meraklıyım. Takım çalışmalarında başarılı ve liderlik yeteneklerimle öne çıkan biriyim. Projelerimde titiz, detay odaklı ve yaratıcı bir yaklaşım benimsiyorum. Yeni teknolojileri öğrenmek ve uygulamak için sürekli kendimi geliştirmekteyim. İş hayatında takım çalışmasına, etkili iletişime ve sürekli öğrenmeye önem veriyorum.";
  }

  isExpanded = !isExpanded;
}
