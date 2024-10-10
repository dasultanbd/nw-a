// 1 create lode btn  categroies
const lodeCategroies = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/categories`
  );
  const data = await res.json();
  displayCategroies(data.categories);
};
lodeCategroies();

// loding spinner
const handleSearch2 = () => {
  document.getElementById("spinner").classList.add("hidden");
  document.getElementById("allimge-section").style.display = "block";
};

// active function remove
const removeActiveClass = () => {
  const buttons = document.getElementsByClassName("category-btn");
  for (let btn of buttons) {
    btn.classList.remove("active");
  }
};

//  lode Categroies Videos
const lodeCategroiesVideos = async (id) => {
  document.getElementById("spinner").classList.remove("hidden");
  document.getElementById("allimge-section").style.display = "none";
  setTimeout(function () {
    handleSearch2();
  }, 2000);

  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/category/${id}`
  );
  const data = await res.json();

  {
    // active class remove
    removeActiveClass();
    // active class add
    const activeBtn = document.getElementById(`btn-${id}`);
    activeBtn.classList.add("active");
    displayAllVideos(data.data);
  }
};

// 2 create 4 btn display categroies
const displayCategroies = (categories) => {
  const categoriesContaner = document.getElementById("categories-contaner");
  categories.forEach((item) => {
    // dtn create
    const buttonContaner = document.createElement("div");
    buttonContaner.innerHTML = `
            <div id="btn-${item.category}"
               class="box-content h-10 w-full md:w-72 p-3 border-2 rounded-3xl flex justify-center text-center category-btn">
                <div class="object-cover flex justify-center text-center font-Inter text-2xl font-extrabold gap-2" >
                    <img class="w-full h-full" src=${item.category_icon} alt="" />
                    <button onclick="lodeCategroiesVideos('${item.category}')">${item.category}</button>
                 
                </div>
            </div>       
             `;
    categoriesContaner.appendChild(buttonContaner);
  });
};

// loding spinner
const handleSearch = () => {
  document.getElementById("spinner").classList.remove("hidden");
  document.getElementById("allimge-section").style.display = "none";
  setTimeout(function () {
    lodeAllVideos();
  }, 2000);
};
handleSearch();

// lode All Pets videos
const lodeAllVideos = async () => {
  document.getElementById("spinner").classList.add("hidden");
  document.getElementById("allimge-section").style.display = "block";
  // create All Pets lodevideos
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pets`
  );
  const data = await res.json();
  displayAllVideos(data.pets);
};
// details remove active class
const detailsRemoveActiveClass = () => {
  const detailButtons = document.getElementsByClassName("btns-active");
  for (let detail of detailButtons) {
    detail.classList.remove("active2");
    detail.classList.add("text-[#0E7A81]");
  }
};
// lode details
const lodeDetails = async (videoId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pet/${videoId}`
  );
  const data = await res.json();
  {
    // active class remove
    detailsRemoveActiveClass();
    // active class add

    const activeBtn2 = document.getElementById(`Details-btn-${videoId}`);
    activeBtn2.classList.add("active2");
    activeBtn2.classList.remove("text-[#0E7A81]");
    displayDetails(data.petData);
  }
};
// display details Videos show
const displayDetails = (video) => {
  console.log(video);
  const modalContener = document.getElementById("modal-contener");
  modalContener.innerHTML = `
  <img class="w-full" src=${video.image}/>
   <div class="py-7 space-y-3">
                  <h2 class="text-xl font-extrabold">${video.pet_name}</h2>
                  <div class="flex items-center gap-2">
                  <i class="fa-solid fa-border-all"></i>
                    <p>Breed : ${
                      video.breed === undefined
                        ? " Not available "
                        : video.breed
                    }</p>
                  </div>
                  <div class="flex items-center gap-2">
                  <i class="fa-solid fa-calendar-days"></i>
                    <p>Birth:${
                      Boolean(video.date_of_birth) === false
                        ? " Not available "
                        : video.date_of_birth
                    } </p>
                  </div>
                  <div class="flex items-center gap-2">
                  <i class="fa-solid fa-mercury"></i>
                    <p>Gender: ${
                      video.gender === undefined
                        ? " Not available "
                        : video.gender
                    }</p>
                  </div>
                  <div class="flex items-center gap-2">
                  <i class="fa-solid fa-dollar-sign"></i>
                    <p>Price : ${
                      video.price === null ? " Not available " : video.price
                    }</p>
                  </div>
                  <div class="divider"></div>
                  <h1 class="text-2xl font-black">Detail in formation</h1>
                  <p>${video.pet_details}</p>
  `;
  document.getElementById("custonModel").showModal();
};

// display All Pets Videos show
const displayAllVideos = (videos) => {
  const videoContaner = document.getElementById("videos");
  videoContaner.innerHTML = "";
  if (videos.length === 0) {
    videoContaner.innerHTML = `
    <div class="bg-[#13131308] grid col-span-3 p-10 ">
    <div class="mx-auto">
     <img class="block ml-auto mr-auto" src="../images/error.webp"/>
     <h2 class="text-xl font-extrabold text-center">No Information Available</h2>
     <p class="text-center">We have no birds here. 
        No information <br/> can be found on the bird.</p>
    </div>
   
    </div>
    `;
  }
  videos.forEach((video) => {
    const div = document.createElement("div");
    div.classList =
      "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:gap-4 gap-y-3";
    div.innerHTML = `
      <div class="col-span-3">
            <div
              class="card bg-base-100 shadow-xl border-2 p-2"
            >
              <div class="card p-3">
                <figure>
                  <img
                    src=${video.image}
                    alt="Shoes"
                  />
                </figure>
                <div class="py-7 space-y-3">
                  <h2 class="text-xl font-extrabold">${video.pet_name}</h2>
                  <div class="flex items-center gap-2">
                  <i class="fa-solid fa-border-all"></i>
                    <p>Breed : ${
                      video.breed === undefined
                        ? " Not available "
                        : video.breed
                    }</p>
                  </div>
                  <div class="flex items-center gap-2">
                  <i class="fa-solid fa-calendar-days"></i>
                    <p>Birth:${
                      Boolean(video.date_of_birth) === false
                        ? " Not available "
                        : video.date_of_birth
                    } </p>
                  </div>
                  <div class="flex items-center gap-2">
                  <i class="fa-solid fa-mercury"></i>
                    <p>Gender: ${
                      video.gender === undefined
                        ? " Not available "
                        : video.gender
                    }</p>
                  </div>
                  <div class="flex items-center gap-2">
                  <i class="fa-solid fa-dollar-sign"></i>
                    <p>Price : ${
                      video.price === null ? " Not available " : video.price
                    }</p>
                  </div>
                  <div class="divider"></div>
                  <div class="space-x-3">
                    <button onclick="likeImg('${video.petId}')"
                      class="px-4 py-2 outline outline-[#0E7A8126] rounded-lg text-sm text-[#0E7A81] font-black"
                    >
                      <i class="fa-regular fa-thumbs-up"></i>
                    </button>
                    <button id="adopt-btn-${video.petId}" onclick="lodeAdopt('${
      video.petId
    }')"
                      class="px-4 py-2 outline outline-[#0E7A8126] rounded-lg text-sm text-[#0E7A81] font-black adopt-active"
                    >
                      Adopt
                    </button>
                    <button id="Details-btn-${
                      video.petId
                    }" onclick="lodeDetails('${video.petId}')"
                      class="px-4 py-2 outline outline-[#0E7A8126] rounded-lg text-sm text-[#0E7A81] font-black Details-btn-active btns-active"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

    `;
    videoContaner.append(div);
  });
};

const likeImg = async (likeId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pet/${likeId}`
  );
  const data = await res.json();
  displayLikeImg(data.petData);
};

const displayLikeImg = (Likes) => {
  const likeImgContaner = document.getElementById("like-img-contaner");
  const div = document.createElement("div");
  div.classList = "";
  div.innerHTML = `
  <img src=${Likes.image}/>
  `;
  likeImgContaner.appendChild(div);
  console.log(Likes);
};

// lode Adopt remove active class
const lodeAdoptRemoveActiveClass = () => {
  const detailButtons = document.getElementsByClassName("adopt-active");
  for (let detail of detailButtons) {
    detail.classList.remove("active2");
    detail.classList.add("text-[#0E7A81]");
  }
};
// lode Adopt
const lodeAdopt = async (videoId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pet/${videoId}`
  );
  const data = await res.json();
  {
    // active class remove
    lodeAdoptRemoveActiveClass();
    // active class add

    const activeBtn2 = document.getElementById(`adopt-btn-${videoId}`);
    activeBtn2.classList.add("active2");
    activeBtn2.classList.remove("text-[#0E7A81]");
    displayAdopt(data.petData);
  }
};

// loding spinner
const handleSearch3 = () => {
  document.getElementById("spinner").classList.add("hidden");
  document.getElementById("allimge-section").style.display = "block";
};
// display Adopt details Videos show
let counter = 3;
const displayAdopt = () => {
  let countdown;
  countdown = setInterval(function () {
    document.getElementById("countdown").textContent = counter;
    counter--;

    if (counter <= 0) {
      clearInterval(countdown);

      console.log(counter);
    }
  }, 1000);

  const modalContener = document.getElementById("modal-contener");
  modalContener.innerHTML = `
  <div class="flex flex-col items-center space-y-3">
  <i class="fa-brands fa-codepen text-4xl text-[#0E7A81]"></i>
     <h2 class="text-4xl font-black ">Congrates</h2>
     <p class="text-xl font-semibold">Adoption Process is Start For your pet</p>
     <div id="countdown">3</div>
   </div>
 `;

  document.getElementById("custonModel").showModal();
};

// Sort by
const getSortby = async () => {
  document.getElementById("spinner").classList.remove("hidden");
  document.getElementById("allimge-section").style.display = "none";
  setTimeout(function () {
    handleSearch3();
  }, 2000);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pets`
  );
  const data = await res.json();
  let product = data.pets;
  product.sort((a, b) => a.price - b.price);
  displayAllVideos(product);
};
