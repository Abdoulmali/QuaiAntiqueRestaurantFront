const galerieImage = document.getElementById("allImage");

let titre = '<img src=x onerror="window.location.replace(\'https://google.com\')"/>';
let imgSource = "../image/chef-cuisteau .jpg";

let monImage = getImage(titre, imgSource);

//Récupérer les informations des
galerieImage.innerHTML = monImage;


function getImage(titre, urlImage){
 titre = sanitazeHtml(titre);
 urlImage = sanitazeHtml(urlImage);
  return  `<div class="col p-3">
                  <div class="image-card text-white">
                    <img src="${urlImage}" class="round w-100" />
                    <p class="titre-image">${titre}</p>
                    <div class="action-image-buttons" data-show="admin">
                      <button type="button" class="btn btn-outline-light">
                        <i class="bi bi-pencil-square" data-bs-toggle="modal"
                        data-bs-target="#EditionPhotoModal"></i>
                      </button>
                      <button type="button" class="btn btn-outline-light">
                        <i class="bi bi-trash" data-bs-toggle="modal"
                        data-bs-target="#DeletePhotoModal"></i>
                      </button>
                    </div>
                  </div>  `;
}