const btn=document.querySelector("#throttle");
const throttleFunction=(func, delay)=>{
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if(now - prev> delay){
      prev = now;
      return func(...args); 
    }
  }
}

document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets)=>{
        var img = document.createElement("img")
        var div = document.createElement("div")
        var imageArray = [
          "./spider.jpg",
          "./strange.jpg",
          "./3211411.jpg",
          "./3211450.jpg",
          "./3211451.jpg",
          "./coffee-black-cup-with-coffee-gray-background-coffee-concepts.jpg",
          "./istockphoto-465528647-1024x1024.jpg",
          "./pexels-chris-f-1283219.jpg",
      "https://plus.unsplash.com/premium_photo-1679355750936-77b24a624ed2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1940&q=80",
      "./wallpaperflare.com_wallpaper (1).jpg",
  "./wallpaperflare.com_wallpaper (2).jpg",
  "https://images.unsplash.com/photo-1694607140414-f8bfb76dfb22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  "https://plus.unsplash.com/premium_photo-1661344235865-7d203ccabebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1694537745659-65925587aa9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
  "https://plus.unsplash.com/premium_photo-1694074422763-9ddc6d3ae085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
  "https://plus.unsplash.com/premium_photo-1679355750936-77b24a624ed2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1940&q=80",
  "https://plus.unsplash.com/premium_photo-1692878409547-b86910e68d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1694240347927-0c6165b7a5e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1694472655847-2211d724c48d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  
        ]
          div.classList.add("imagediv")
          div.style.left = dets.clientX + "px";
          div.style.top = dets.clientY + "px";
          div.appendChild(img)
          img.style.borderRadius = "20px";
          var ro = Math.floor(Math.random()*2);
          if(0 === ro){
            img.style.rotate = "10deg";
          }
          if(1 === ro){
            img.style.rotate = "350deg";
          }
          // console.log(ro);
          var rn = Math.floor(Math.random() * imageArray.length);
          var pics = imageArray[rn];
          img.setAttribute("src",pics)
          document.body.appendChild(div)
          setTimeout(function(){
              div.remove()
          },2000)
      }, 180));