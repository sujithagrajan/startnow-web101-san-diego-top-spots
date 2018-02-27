$(document).ready(function() {
// write your code here
    $.getJSON("data.json", function(data) { 
        var topSpot = '';  
        $.each(data, function(key, value){      
            topSpot += '<tr>';             
            topSpot += '<td>'+ value.name + '</td>';     
            topSpot += '<td>'+ value.description + '</td>';
            var link= 'https://www.google.com/maps?q=' + value.location[0] + ',' + value.location[1];    
            topSpot += '<td>'+ '<a class="btn" href="'+link+'">Google Maps location</a>' + '</td>'; 
            topSpot += '</tr>'; 
        }); 
        $('#table').append(topSpot); 
    });

});
