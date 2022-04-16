var data = [
    {
      name: "SAMSUNG Galaxy F12",
      rating: 4,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kn22m4w0/mobile/a/q/8/galaxy-f12-sm-f127gzgiins-samsung-original-imagftmjw3xqg4yk.jpeg?q=70",
      price: 11499,
    },
    {
      name: "SAMSUNG Galaxy F42",
      rating: 4.2,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/v/5/e/galaxy-f42-5g-sm-e426bzahins-samsung-original-imag7anfwxsgumgz.jpeg?q=70",
      price: 12199,
    },
    {
      name: "Apple Iphone 12",
      rating: 4.6,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8dqgncgbcb.jpeg?q=70",
      price: 59999,
    },
    {
      name: "APPLE iPhone 12 Mini",
      rating: 4.5,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/d/g/b/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfhfevaajh.jpeg?q=70",
      price: 49999,
    },
    {
      name: "OPPO A12",
      rating: 3.8,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kb1470w0/mobile/q/g/g/oppo-a12-cph2083-original-imafsh2hfkyamqyt.jpeg?q=70",
      price: 9490,
    },
    {
      name: "ASUS ROG Phone 3",
      rating: 4.9,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kcuug7k0/mobile/g/h/e/asus-rog-phone-3-zs661ks-6a006in-original-imaftwc6nmyuyekd.jpeg?q=70",
      price: 46999,
    },
    {
      name: "DIZO Star 300",
      rating: 3.4,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kqpj4i80/mobile/e/i/r/star-300-dh2001-dizo-original-imag4nmpv7zahzs2.jpeg?q=70",
      price: 1299,
    },
    {
      name: "Micromax IN Note 1 ",
      rating: 4.4,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/ku5ufm80/mobile/v/t/1/in-note-1-e7746-micromax-original-imag7cdgz6tqychm.jpeg?q=70",
      price: 10999,
    },
    {
      name: "SAMSUNG Galaxy Z Fold3 5G",
      rating: 4,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/ksqeky80/mobile/x/7/1/galaxy-z-fold3-5g-sm-f926bzgdinu-samsung-original-imag68q6hpdwmngw.jpeg?q=70",
      price: 149999,
    },
  ];


  data.forEach((ele)=>{

    var img = document.createElement("img");
    img.src = ele.image_url;

    var rat = document.createElement("p");
    rat.innerText = ele.rating;

    var name = document.createElement("p");
    name.innerText = ele.name;

    var price = document.createElement("P");
    price.innerText = ele.price;
    var but = document.createElement('button');
    but.innerText = "add to cart";

    but.addEventListener('click', function() {
        cartData.push(data);
          console.log(cartData);
          alert("item added successfuly to cart");
          localStorage.setItem('cartData', JSON.stringify(cartData));
      });
    








    var box = document.createElement('div');
    box.append(img,name,rat,price,but)


    document.querySelector('#allMobile').append(box);




  })


//   function phl(){
//     data.sort(function (a,b){
//         return a.price - b.price;
//     });
//   }
//   function plh(){
//     data.sort(function (a,b){
//         return b.price - a.price;
//     });
//   }
//    var  alldata  = JSON.parse(JSON.stringify(data));

   var data = JSON.parse(JSON.stringify(data));
  document.querySelector('#sortInput').addEventListener('change', function() {
    var sortType = document.querySelector('#sortInput').value;
    if(sortType === 'none') {
      displayData(data);
    } else {
      filteredData.sort(function(a, b) {
        if(sortType === 'lowToHigh') {
          return a.price - b.price;
        } 
        return b.price - a.price;
      });
      displayData(data);
    }
  });


