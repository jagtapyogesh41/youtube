const apikey = "AIzaSyAPz3T_kBgNOp0-TC7EK0O2ZnPb2LabBiM";

let def = async () => {
  let most =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyAPz3T_kBgNOp0-TC7EK0O2ZnPb2LabBiM`

  let res = await fetch(most)
  let data = await res.json();
  AppendMovie(data.items)
}
def()





let main = async () => {
  let query = document.getElementById("query").value
  // let query = "thor";

  let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyAPz3T_kBgNOp0-TC7EK0O2ZnPb2LabBiM`;

  console.log(url);
  let res = await fetch(url);
  let data = await res.json();
  AppendMovie(data.items);
};
// main();

let AppendMovie = (data) => {
  console.log(data);
  let container = document.getElementById("results");
container.innerHTML=null;
  data.forEach(({ id: { videoId }, snippet: { title, thumbnails } }) => {
    console.log(videoId);
    console.log(title);
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = thumbnails.default.url;
    
    let h3 = document.createElement("h3");
    h3.innerText = title;

    div.append(image, h3);
    let video = {
      title,
      videoId,
    };

    div.onclick = () => {
      playVideo(video);
    };

    container.append(div);
  });
}

let playVideo = (video) => {
 localStorage.setItem("video", JSON.stringify(video));
  window.location.href = "video.html";
};
