// const trackLocation = ({ onSuccess, onError = () => { } }) => {
//   if ('geolocation' in navigator === false) {
//     return onError(new Error('Geolocation is not supported by your browser.'));
//   }
//
//   return navigator.geolocation.watchPosition(onSuccess, onError, {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//   });
// };
//
// // const createMap = ({ lat, lng }) => {
// //   return new google.maps.Map(document.getElementById('map'), {
// //     center: { lat, lng },
// //     zoom: 15,
// //     styles: [
// //             {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
// //             {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'},{visibility: 'off'}]},
// //             {elementType: 'labels.text.fill', stylers: [{color: '#746855'},{visibility: 'off'}]},
// //             {
// //               featureType: 'administrative.locality',
// //               elementType: 'labels.text.fill',
// //               stylers: [{color: '#d59563'},{visibility: 'off'}]
// //             },
// //             {
// //               featureType: 'poi',
// //               elementType: 'labels.text.fill',
// //               stylers: [{color: '#d59563'},{visibility: 'off'}]
// //             },
// //             {
// //               featureType: 'poi.park',
// //               elementType: 'geometry',
// //               stylers: [{color: '#263c3f'},{visibility: 'off'}]
// //             },
// //             {
// //               featureType: 'poi.park',
// //               elementType: 'labels.text.fill',
// //               stylers: [{color: '#6b9a76'},{visibility: 'off'}]
// //             },
// //             {
// //               featureType: 'road',
// //               elementType: 'geometry',
// //               stylers: [{color: '#38414e'}]
// //             },
// //             {
// //               featureType: 'road',
// //               elementType: 'geometry.stroke',
// //               stylers: [{color: '#212a37'}]
// //             },
// //             {
// //               featureType: 'road',
// //               elementType: 'labels.text.fill',
// //               stylers: [{color: '#9ca5b3'},{visibility: 'off'}]
// //             },
// //             {
// //               featureType: 'road.highway',
// //               elementType: 'geometry',
// //               stylers: [{color: '#746855'}]
// //             },
// //             {
// //               featureType: 'road.highway',
// //               elementType: 'geometry.stroke',
// //               stylers: [{color: '#1f2835'}]
// //             },
// //             {
// //               featureType: 'road.highway',
// //               elementType: 'labels.text.fill',
// //               stylers: [{color: '#f3d19c'},{visibility: 'off'}]
// //             },
// //             {
// //               featureType: 'transit',
// //               elementType: 'geometry',
// //               stylers: [{color: '#2f3948'},{visibility: 'off'}]
// //             },
// //             {
// //               featureType: 'transit.station',
// //               elementType: 'labels.text.fill',
// //               stylers: [{color: '#d59563'},{visibility: 'off'}]
// //             },
// //             {
// //               featureType: 'water',
// //               elementType: 'geometry',
// //               stylers: [{color: '#17263c'}]
// //             },
// //             {
// //               featureType: 'water',
// //               elementType: 'labels.text.fill',
// //               stylers: [{color: '#515c6d'},{visibility: 'off'}]
// //             },
// //             {
// //               featureType: 'water',
// //               elementType: 'labels.text.stroke',
// //               stylers: [{color: '#17263c'},{visibility: 'off'}]
// //             }
// //           ]
// //   });
// // };
//
// const createMap = ({ lat, lng }) => {
//   return new google.maps.Map(document.getElementById('map'), {
//     center: { lat, lng },
//     zoom: 15
//   });
// };
//
// const createMarker = ({ map, position, icon }) => {
//   return new google.maps.Marker({ map, position, icon });
// };
//
// // const getCurrentPosition = ({ onSuccess, onError = () => { } }) => {
// //   if ('geolocation' in navigator === false) {
// //     return onError(new Error('Geolocation is not supported by your browser.'));
// //   }
// //
// //   return navigator.geolocation.getCurrentPosition(onSuccess, onError);
// // };
//
//
// function init() {
//   // let deliveryCoordinates = []
//   // const initialPosition = { lat: 30.315801, lng: 81.454568 };
//   let positionStore = { lat: 30.315801, lng: 81.454568 }
//   let positionCustomer = { lat: 30.319223, lng: -81.460903 }
//   let positionDriver = {lat: 30.315801, lng: 81.454568 }
//
//
//   let map = createMap(positionStore);
//   //stores position is retirved from DB
//   // const markerStore = createMarker({ map, position: positionStore, icon: "https://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png" });
//
//   //customer and driver postition is updated
//   // const markerCustomer = createMarker({ map, position: positionCustomer, icon: 'https://maps.google.com/mapfiles/kml/pal3/icon23.png' });
//
//   //each movement is saved in DB
//   // const markerDriver = createMarker({ map, position: positionDriver, icon: "https://maps.google.com/mapfiles/dir_0.png"});
//   // deliveryCoordinates.push(initialPosition)
//
//   //track customer
//   // trackLocation({
//   //   onSuccess: ({ coords: { latitude: lat, longitude: lng } }) => {
//   //     markerCustomer.setPosition({ lat, lng });
//   //   },
//   //   onError: err =>
//   //     alert(`Error: ${getPositionErrorMessage(err.code) || err.message}`)
//   // });
//
//   //track driver
//   // trackLocation({
//   //   onSuccess: ({ coords: { latitude: lat, longitude: lng } }) => {
//   //     markerDriver.setPosition({ lat, lng });
//   //     // map.panTo({ lat, lng });
//   //     // deliveryCoordinates.push({lat,lng})
//   //   },
//   //   onError: err =>
//   //     alert(`Error: ${getPositionErrorMessage(err.code) || err.message}`)
//   // });
// }

const getPositionErrorMessage = code => {
  switch (code) {
    case 1:
      return 'Permission denied.';
    case 2:
      return 'Position unavailable.';
    case 3:
      return 'Timeout reached.';
    default:
      return null;
  }
}

function init() {

  let custPosition = { lat: 30.314797, lng: -81.464557 }
  let driverPosition = { lat: 30.319223, lng: -81.460903 }
  let storePosition = { lat: 30.317219, lng: -81.477174 }

  const map = new google.maps.Map(document.getElementById('map'), {
    center: custPosition,
    zoom: 15,
    styles: mapStyles
  });

  let custMarker = new google.maps.Marker({ map, position: custPosition, icon: 'https://maps.google.com/mapfiles/kml/pal3/icon23.png' });
  let driverMarker = new google.maps.Marker({ map, position: driverPosition, icon: 'https://maps.google.com/mapfiles/dir_0.png' });
  let storeMarker = new google.maps.Marker({ map, position: storePosition, icon: 'https://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png' });

  // Get user's location
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(`Lat: ${position.coords.latitude} Lng: ${position.coords.longitude}`)
        // Set marker's position.
        custMarker.setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      err => alert(`Error (${err.code}): ${err.message}`)
    );
  } else {
    alert('Geolocation is not supported by your browser.');
  }
}



const mapStyles = [
      { elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'},{visibility: 'off'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'},{visibility: 'off'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.attraction',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.business',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.government',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.medical',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.school',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.sports_complex',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi.place_of_worship',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'},{visibility: 'off'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'},{visibility: 'off'}]
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'all',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'},{visibility: 'off'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'},{visibility: 'off'}]
      }
  ]
