

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
            success: function( data ){
                $("#my-table").append("<tr><td>" + dict["Title"] +"</td>" +"<td>" + dict["Director"] + "</td>" + "<td>" + dict["Genre"] + "</td>" +"</tr>")
            },
            error: function( errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit( processForm );

    function makeTable(){

        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            type: 'get',
            contentType: 'application/json',
            success: function( data ){
                for(let el in data)
                {
                    $("#my-table").append(`<tr id=${data[el].MovieId}>
                        <td contenteditable id= "Title${data[el].MovieId}">${data[el].Title}</td>
                        <td contenteditable id= "Director${data[el].MovieId}"> ${data[el].Director}</td>
                        <td contenteditable id = "Genre${data[el].MovieId}"> ${data[el].Genre}</td>
                        <td><button type = "button" onclick="FindOneMovie(${data[el].MovieId})">Details</button></td>
                        <td><button type = "button" onclick="EditMovie(${data[el].MovieId})">Submit Changes</button></td></tr>`)
                    console.log(data[el]);
                }

                $('#response pre').html( data );
            },
            error: function( errorThrown ){
                console.log( errorThrown );
            }
        });
    }

    makeTable();

   
})(jQuery);

 function FindOneMovie(id){
       
        var obj = {
            Title : document.getElementById(`Title${id}`).innerText,
            Director: document.getElementById(`Director${id}`).innerText,
            Genre: document.getElementById(`Genre${id}`).innerText
        };
        $.ajax({
            url: `https://localhost:44352/api/movie/${id}`,
            dataType: 'json',
            type: 'get',
            contentType: 'application/json',
            data: JSON.stringify(obj),
            success: function( data ){
                //  $("#details-table").append("<tr>");
                //      $("#details-table").append(`<td>${data.Title}</td><td>${data.Director}</td><td>${data.Genre}</td>`)
                //      // console.log(data[el].Title);
                // $("#details-table").append("</tr>");
                // // $('#response pre').html( data );
                document.getElementById('details-row').innerHTML = (`<td>${data.Title}</td><td>${data.Director}</td><td>${data.Genre}</td>`)
            },
            error: function( errorThrown ){
                console.log( errorThrown );
            }
        });
    }


    function EditMovie(id){
        var obj = {
            Title : document.getElementById(`Title${id}`).innerText,
            Director: document.getElementById(`Director${id}`).innerText,
            Genre: document.getElementById(`Genre${id}`).innerText
        };
    
        $.ajax({
            url: `https://localhost:44352/api/movie/${id}`,
            dataType: 'json',
            type: 'put',
            contentType: 'application/json',
            data: JSON.stringify(obj),
            success: function( data ){
       
                $("#details-table").append("</tr>");
                $('#response pre').html( data );
            },
            error: function( errorThrown ){
                console.log( errorThrown );
            }
        });
    }
       


