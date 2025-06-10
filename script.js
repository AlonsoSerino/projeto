function toggleMode() {
  const html = document.documentElement; //acessar o doctype
  html.classList.toggle("light");
  //( if(html.classList.contains("light")){
  //    html.classList.remove("light");
  //} else{
  //    html.classList.add("light");
  //}
  //) o que o código html.classList.toggle faz
  const img = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Eu de camisa marrom na sacada com taça na mão");
  } else {
    img.setAttribute("src", "./assets/Avatar.png");
    img.attachShadow(
      "alt",
      "Foto do Alonso de camisa branca e fundo com verde",
    );
  }
}
