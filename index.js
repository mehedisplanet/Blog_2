const getValue = (id) => {
  const value = document.getElementById(id).value;
  return value;
};


const search= () =>{
  const val = getValue("search");
  console.log(val);
  fetch(`https://blog-mkrf.onrender.com/blog/list/?search=${val}`)
    .then((res) => res.json())
    .then((data) => {console.log(data) 
      return displayReview(data)})
    .catch((error) => console.log(error));
};

const search2= () =>{
  const val = getValue("search2");
  console.log(val);
  fetch(`https://blog-mkrf.onrender.com/blog/list/?search=${val}`)
    .then((res) => res.json())
    .then((data) => {console.log(data) 
      return displayReview(data)})
    .catch((error) => console.log(error));
};


const loadReview = () => {
  fetch("https://blog-mkrf.onrender.com/blog/list/")
    .then((res) => res.json())
    .then((data) => {console.log(data) 
      return displayReview(data)})
    .catch((error) => console.log(error));
};

const displayReview = (posts) => {
  const parent = document.getElementById("blog");
  parent.innerHTML=``;
  if (posts === null || posts.length === 0) {
    console.log("No posts");
    const div = document.createElement("div");
    div.innerHTML = `<h1>No Data Found</h1>`;
    parent.appendChild(div);
  }
  else{
    posts.forEach((post) => {
      const div = document.createElement("div");
      div.classList.add("col-lg-4", "col-md-6", "col-12");
      div.innerHTML = `
        <div class="shop-single-blog">
          <img src="${post.image}" alt="" />
          <div class="content">
          <h6 class="btn-info">${post.topic}</h6>
            <h4>${post.title}</h4>
            <p>${post.body.slice(0, 150)}</p>
            <button  onclick="details('${post.id}')" class="more-btn">Continue Reading</button>
          </div>
        </div>
      `;
      parent.appendChild(div);
    });
  }
};

const details=(id)=>{
  console.log("successfully",id)
  fetch(`https://blog-mkrf.onrender.com/blog/list/${id}`)
    .then((res) => res.json())
    .then((data) => {console.log(data) 
      return detailData(data)})
    .catch((error) => console.log(error));
}

const detailData=(post)=>{
  const parent = document.getElementById("blog");
  parent.innerHTML=``;
  const div = document.createElement("div");
  div.innerHTML=`
  <div class="container">
    <div class="image">
        <img src="${post.image}" alt="#">
    </div>
    <div class="blog-detail mt-3">
        <h2 class="blog-title">${post.title}</h2>
        <div class="blog-meta mt-2">
            <span class="author"><i class="fa fa-user"></i><span class="ml-2">By Admin</span><i class="fa fa-calendar ml-2"></i><span class="ml-2">${post.date}</span></span>
        </div>
        <div class="content">
            <p>${post.body}</p>
        </div>
    </div>
  </div>
  `;
  parent.appendChild(div);
}






loadReview();