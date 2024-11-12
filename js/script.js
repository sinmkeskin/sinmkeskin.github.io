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

function warningForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var text = document.getElementById("mesaj").value;

  if (name === "") {
    alert("İsminizi giriniz!");
  } else if (email === "") {
    alert("E-mailinizi giriniz!");
  } else if (text === "") {
    alert("Mesajınızı giriniz!");
  } else {
    alert(
      "Mesajınız gönderildi. En kısa süre içinde geri dönüş sağlanacaktır:)"
    );
  }
}
