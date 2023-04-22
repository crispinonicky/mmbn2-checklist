/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
// function openNav() {
//     document.getElementById("location-sidebar").style.width = "250px";
//     document.getElementById("main").style.marginRight = "250px";
    
//     $("#location-sidebar").removeClass("d-none");

// }

// /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
// function closeNav() {
//     document.getElementById("location-sidebar").style.width = "0";
//     document.getElementById("main").style.marginRight = "0";

//     $("#location-sidebar").addClass("d-none");

// }

function toggleLocations() {

    // if ($("#location-sidebar").hasClass("d-none")) {
    //     document.getElementById("location-sidebar").style.width = "250px";
    //     document.getElementById("main").style.marginRight = "250px";
    // } else {
    //     document.getElementById("location-sidebar").style.width = "0";
    //     document.getElementById("main").style.marginRight = "0";
    // }

    $("#location-sidebar").toggleClass("d-none");
    $(".chip-row").toggleClass("col-sm-12");
    $(".chip-row").toggleClass("col-sm-8");

}