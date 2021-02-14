window.onload = function () {
  /*---------------Change lang--------------------*/
  const langLabel = document.getElementById("lang");
  const langValue = document.querySelector(".lang__value");
  const langDropDown = document.querySelector(".lang-dropDown");
  const langButton = document.querySelectorAll(".lang-dropDown__button");

  const toggleDropDown = () => {
    langDropDown.classList.toggle("lang-dropDown__isOpen");
  };

  langLabel.addEventListener("click", function () {
    toggleDropDown();
  });

  langButton.forEach((el) => {
    el.addEventListener("click", function () {
      langValue.innerHTML = el.dataset.lang;
    });
  });

  /*----------------Menu dropdown---------------------*/
  const btnMenu = document.querySelector(".btn-menu");
  const dropDownMenu = document.querySelector(".drop-menu");
  btnMenu.addEventListener("click", function () {
    dropDownMenu.classList.toggle("isOpen");
  });


  /*----------------Smooth scroll---------------------*/

/* */  const scrollLinks = document.querySelectorAll (".scroll")/* (".top-menu li") */;
  scrollLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const section = document.getElementById(link.dataset.section);
      if (section) {
        scrollToElement(section, {
          offset: 0,
          ease: "linear",
          duration: 1000,
        });
      }
    });
  }); 



};
/* =============================================== */ 
const scrollTab = document.getElementById("scrollTable-range");
const panel1 = document.getElementById("scroll-content");
scrollTab.oninput = function () {
	
	
	const total1 = panel1.scrollWidth - panel1.offsetWidth;
	const percentage1 = total1*(this.value/100);
	
	panel1.scrollLeft = percentage1;
 
  
}



/* ================================================== */

 const scroll = document.getElementById("scroll-range");
	const panel2 = document.getElementById("scrolling-container");
scroll.oninput = function () {

	
	const total2 = panel2.scrollWidth - panel2.offsetWidth;
	const percentage2 = total2*(this.value/100);
	

	panel2.scrollLeft = percentage2;
	
} 

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  panel1.classList.add('mobile');
  scrollTab.classList.add('off');
  panel2.classList.add('mobile');
  scroll.classList.add('off');
}
  /*----------------Map---------------------*/
  function initMap() {
    const point = { lat: 55.75891952693745, lng: 37.59045935989981 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: point,
      styles : [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#121925"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d6d7d9"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#212121"
            },
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d6d7d9"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d6d7d9"
            }
          ]
        },
        {
          "featureType": "poi.business",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#121925"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d6d7d9"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1b1b1b"
            },
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#4e535b"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d6d7d9"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#4e535b"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#4e535b"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#4e535b"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d9d7d9"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#121925"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        }
      ]
    });
    const marker = new google.maps.Marker({
      position: point,
      map: map,
    });
  }