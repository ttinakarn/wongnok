$(function () 
{
    var placeid = getUrlParameter('placeid');

    PlaceSearch.Detail(placeid).then(function(data){
        console.log(data);
        $('#gallery').empty();
        $('#placename').html(data.name);  
        
        var address = 'Address: ' + data.address;
        $('#address').append(address);

        var open;
        if(data.open_now == true)
        {
            open = "Status: Open";
            $('#opennow').append(open);
        }
        else
        {
            open = "Status: Close";
            $('#opennow').append(open);
        }

        var rating = '<div><center><span class="rating-static rating-'+ rating*10+'"></span></center></div>';
        $('#rating').append(rating);

        var tel = 'Tel: ' + data.phone;
        $('#phone').append(tel);
  
        for(var i=0;i<data.photos.length;i++)
        {
            if(i==0)
            {
                var row = '<div class="carousel-item active">' +
                            '<img  class="d-block w-100" src=' + data.photos[i] + ' />' +
                          '</div>';
                $('#gallery').append(row);
            }
            else
            {
                var row = '<div class="carousel-item ">' +
                            '<img  class="d-block w-100" src=' + data.photos[i] + ' />' +
                          '</div>';
              $('#gallery').append(row);
            }
        }      
    });  

    //Get URL parameter
    function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }
});