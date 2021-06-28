// I was inspired by https://henriqueperoni.github.io/CI-MS2-Magic-Island/ Things To Do Section to assist me in creating the code below -*/

function initMap() {
  const ibiza = { lat: 38.98, lng: 1.43 };

 const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: ibiza,
  });
  
  const beachFlag =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

  var markers = [
    {
      coords: { lat: 38.967778, lng: 1.239722 },
      content:
        "<h2>Cala Bassa</h2><p>07820 Ibiza, Balearic Islands</p>",
      iconImage: beachFlag,
    },
    {
      coords: { lat: 39.112355, lng: 1.517744 },
      content:
        "<h2>Portinatx</h2><p>07810 Ibiza, Balearic Islands</p>",
      iconImage: beachFlag,
    },
    {
      coords: { lat: 39.016667, lng: 1.593889 },
      content:
        "<h2>Cala Llenya</h2><p>07850 Ibiza, Balearic Islands</p>",
      iconImage: beachFlag,
    },
    {
      coords: { lat: 38.916286, lng: 1.453882 },
      content:
        "<h2>Talamanca</h2><p>07800 Ibiza, Balearic Islands</p>",
      iconImage: beachFlag,
    },
    {
      coords: { lat: 38.957778, lng: 1.408056 },
      content:
        "<h2>Privilege</h2><p>07816 Ibiza, Balearic Islands</p>",
    },
    {
      coords: { lat: 38.947778, lng: 1.408056 },
      content:
        "<h2>Amnesia</h2><p>07816 Ibiza, Balearic Islands</p>",
    },
    {
      coords: { lat: 38.9184428246, lng: 1.44331217743 },
      content: "<h2>Pacha</h2><p>07800 Ibiza, Balearic Islands</p>",
    },
    {
      coords: { lat: 38.8843, lng: 1.4050 },
      content:
        "<h2>Ushuaïa Beach Club</h2><p>07817 Ibiza, Balearic Islands</p>",
    },
    {
      coords: { lat: 38.980556, lng: 1.296111 },
      content:
        "<h2>Sunsets</h2><p>07820 Ibiza, Balearic Islands</p>",
    },
    {
      coords: { lat: 39.0345, lng: 1.5657 },
      content:
        "<h2>Hiking</h2><p>07850 Ibiza, Balearic Islands</p>",
    },
    {
      coords: { lat: 38.9125, lng: 1.435278 },
      content: "<h2>Boat Trips</h2><p>07800 Ibiza, Balearic Islands</p>",
    },
    {
      coords: { lat: 38.751389, lng: 1.433333 },
      content: "<h2>Formentera</h2><p>07871, Balearic Islands</p>",
    },
  ];

  for (var i = 0; i < markers.length; i++) {
    // Add marker
    addMarker(markers[i]);
  }

  function addMarker(props) {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });

    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }

    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });
    }

    marker.addListener("click", function () {
      map.setZoom(12);
      infoWindow.open(map, marker);
    });

    map.addListener("click", function () {
      if (infoWindow) infoWindow.close();
    });
  }

  $(".choices-btn").click(function () {
    map.setCenter(new google.maps.LatLng(this.dataset.lat, this.dataset.lng));
    map.setZoom(13);
  });

  const locations = [
    ["Cala Bassa", 38.967778, 1.239722],
    ["Portinatx", 39.112355, 1.517744],
    ["Cala Llenya", 39.016667, 1.593889],
    ["Talamanca", 38.916286, 1.453882],
    ["Privilege", 38.957778, 1.408056],
    ["Amnesia", 38.947778, 1.408056],
    ["Pacha", 38.918442, 1.443312],
    ["Ushuaïa", 38.8843, 1.4050],
    ["Sunsets", 38.980556, 1.296111],
    ["Hiking", 39.0345, 1.5657],
    ["Boat Trips", 38.9125, 1.435278],
    ["Formentera", 38.751389, 1.433333],
  ];
}
