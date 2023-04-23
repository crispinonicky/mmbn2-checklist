// Retrieve JSON chip data
var chipData = window.chipData;

// Loop through data to render page
chipData.forEach((chip, i) => {
    $("#main").append(`
        <div class="chip-row col-sm-12 row py-3 border-bottom">
            <div class="col-sm-2">${chip.name}</div>
            <div class="col-sm-4">${chip.description}</div>
            <div class="chip-codes col-sm-6 d-flex justify-content-start"></div>
        </div>
    `)

    chip.codes.split("").forEach((code, j) => {
        $($(".chip-codes")[i]).append(`
            <div class="code-input form-check form-check-reverse col-sm-2">
                <label class="form-check-label" for="${chip.name}-${code}">${code}</label>
                <input class="chip-checkbox form-check-input" type="checkbox" name="${chip.name}-${code}" id="${chip.name}-${code}">
            </div>
        `)
    })
})

// Retrieve checkbox inputs on page load
var checkedChips = [];

// Save chip checkbox inputs
$(".chip-checkbox").on("click", function() {

    let chipName = $(this).attr("name");
    let isChecked = $(this).is(':checked');

    if (isChecked) {
        checkedChips.push(chipName)
    } else {
        checkedChips.splice(checkedChips.indexOf(chipName), 1);
    }

    localStorage.setItem("checked", checkedChips.toString())
    countChips();

})

// Check chip code checkboxes on page load
if (localStorage.getItem("checked") != null && localStorage.getItem("checked") != []) {
    checkedChips = localStorage.getItem("checked").split(",");
    checkedChips.forEach(inputName => {
        $(`.chip-checkbox[name='${inputName}']`).prop("checked", true);
    })
}

// Retrieve checkbox inputs on page load
var checkedLocations = [];

// Save location checkbox inputs
$("#location-sidebar input").on("click", function() {

    let locationName = $(this).attr("name");
    let isChecked = $(this).is(':checked');

    if (isChecked) {
        checkedLocations.push(locationName)
    } else {
        checkedLocations.splice(checkedLocations.indexOf(locationName), 1);
    }

    localStorage.setItem("checkedLocations", checkedLocations.toString())
    countChips();

})

// Check location checkboxes on page load
if (localStorage.getItem("checkedLocations") != null && localStorage.getItem("checkedLocations") != []) {
    checkedLocations = localStorage.getItem("checkedLocations").split(",");
    checkedLocations.forEach(inputName => {
        $(`#location-sidebar input[name='${inputName}']`).prop("checked", true);
    })
}

// Show completion on page load
function countChips() {
    let numCollected = 0;
    
    $(".chip-row").each(function(i) {
        if ($(this).find(".chip-checkbox").is(':checked')) {
            numCollected++;
        }
    })
    
    $("#num-collected").html(numCollected);
}

countChips();

// Sidebar toggle
function toggleLocations() {
    $("#location-sidebar").toggleClass("d-none");
    $(".chip-row").toggleClass("col-sm-12");
    $(".chip-row").toggleClass("col-sm-9");
}