function setMap(){
      var mapOptions = {
          center: new google.maps.LatLng(51.508742, -0.120850),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.HYBRID
      };
      var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
$(document).ready(function () {
      $("#map").on("click", () => {
        setMap();
    })
})