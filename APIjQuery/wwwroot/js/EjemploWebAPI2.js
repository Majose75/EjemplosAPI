$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/photos/",
        dataType: "json",
        success: function (data) {
            $.each(data, function (i, item) {

                var row = "<tr>" +
                    "<td>" + item.id + "</td>" +
                    "<td>" + item.title + "</td>" +
                    //"<td><img src='" + item.url + "'</td>" +
                    ///*"<td><img src='" + item.thumbnailUrl + "'</td>" +*/
                    //"<td><img src='" + item.thumbnailUrl + "' onmouseover=this.src='" + item.url + "'></td>" +
                    //"<td><img src='" + item.thumbnailUrl + "' onmouseover=this.src='" + item.url + "'; onmouseout=this.src='" + item.thumbnailUrl + "'>;</td>" +
                    '<td><img src="' + item.thumbnailUrl + '" onmouseover=this.src="' + item.url + '"; onmouseout=this.src="' + item.thumbnailUrl + '">;</td>' +
                    "</tr>";
                $("#tabla>tbody").append(row);
            });
        }, //End of AJAX Success function  
    });

   



}); 