function adicionarVideo() {
    var link = document.getElementById("linkDoVideo").value;
    if (isValidLink(link)) {
      var videoId = retornaIdVideo(link);
      if (isValidId(videoId)) {
        if (isDuplicateId(videoId) == false) {
          listarVideosNaTela(videoId);
        }
      }
    }
    return false;
  }
  
  function isDuplicateId(videoId) {
    var aux = document.getElementById(videoId);
    if (aux == null) {
      return false;
    } else {
      document.getElementById("linkDoVideo").value = "";
      document.getElementById("linkDoVideo").placeholder = "Esse vídeo ja foi inserido";
      return true;
    }
  }
  
  function isValidLink(link) {
    if (link.includes("watch?v=")) {
      return true;
    } else {
      if (document.getElementById("linkDoVideo").value == "") {
        return false;
      } else {
        document.getElementById("linkDoVideo").value = "";
        document.getElementById("linkDoVideo").placeholder =
          "Digite um link válido";
        return false;
      }
    }
  }
  
  function isValidId(videoID) {
    if (videoID.length == 11) {
      return true;
    } else {
      return false;
    }
  }
  
  function retornaIdVideo(nomeVideo) {
    const previusLength = 8;
    const idSize = 11;
    var idVideo = "";
    var i = nomeVideo.lastIndexOf("watch?v=") + previusLength;
    tam = i + idSize;
    for (i = i; i < tam; i++) {
      idVideo = idVideo + nomeVideo.charAt(i);
    }
    return idVideo;
  }
  
  function listarVideosNaTela(videoId) {
    document.getElementById("linkDoVideo").value = "";
    var listaDeVideos = document.querySelector("#listaVideos");
    var elementoVideo =
      '<iframe id="' +
      videoId +
      '" width="560" height="315" src= "https://www.youtube.com/embed/' +
      videoId +
      '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    listaVideos.innerHTML = listaVideos.innerHTML + elementoVideo;
  }
  