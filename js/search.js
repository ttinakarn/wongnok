$(function () {

    $('#search').click(function(){
        $('#searchresult').empty();
        var keyword = $('#keyword').val();
        var type = $('#type').val();
        var radius = $('#radius').val();

        $('#searchresult').html('<div class="col-12"><h4>Result</h4></div>');

        PlaceSearch.Search(keyword, type, radius).then(function(data){
            for(var i=0;i<data.length;i++)
            {   
                var rating = data[i].rating;
                if(rating == undefined)
                {
                    rating = 0;
                }
                var row = 
                '<div class="col-12 col-md-6 col-lg-4 text-center">'+
                    '<div class="jumbotron">' +
                        '<div><img src=' + data[i].photo + ' class="thumbnail" /></div><br>' +
                        '<div><h5>' + data[i].name + '</h5></div><br>' +
                        '<div><center><span class="rating-static rating-'+ rating*10+'"></span></center></div><br>' +
                        '<p class="lead"><a class="btn btn-warning btn-lg" href="detail.html?placeid=' + data[i].id + '" role="button">View Detail</a></p>' +
                    '<div>' +
                '<div>';
                $('#searchresult').append(row);
            }
        });
    });    
});