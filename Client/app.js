// POST action -- add new movie to list //
(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
        	Director: this["director"].value,
            Genre: this["genre"].value

        };

        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $("#my-table").append("<tr><td>" + dict["Title"] +"</td>" +"<td>" + dict["Director"] + "</td>" + "<td>" + dict["Genre"] + "</td>" +"</tr>")
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit( processForm );


(function($){


    function makeTable(){


        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            type: 'get',
            contentType: 'application/json',
            success: function( data, textStatus, jQxhr ){
                for(let el in data)
                {
                    $("#my-table").append(`<tr id=${data[el].MovieId}><td>${data[el].Title}</td><td> ${data[el].Director}</td><td> ${data[el].Genre}</td><td><span onclick="FindOneMovie(${data[el].MovieId})">Details</span></td></tr>`)
                    console.log(data[el]);
                }

                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    }

    makeTable();

   
})(jQuery);

        



 function FindOneMovie(id){
        //console.log(e)

        $.ajax({
            url: `https://localhost:44352/api/movie/${id}`,
            dataType: 'json',
            type: 'get',
            contentType: 'application/json',
            success: function( data, textStatus, jQxhr ){
                 $("#details-table").append("<tr>");
                    for(let el in data)
                {
                    if(el == data.MovieId)
                    {
                        continue;
                    }
                    else
                    {
                     $("#details-table").append(`<td>${data[el]}</td>`)
                     console.log(data[el]);
                    }
                    
                }
                $("#details-table").append("</tr>");
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    }
        

