//console.log("Script loaded")

// Retrieve JSON chip data
var chipData = window.chipData;

// Loop through data to render page
chipData.forEach((chip, i) => {
    //console.log(chip)
    $("#main").append(`
        <div class="chip-row col-sm-12 row py-3 border-bottom">
            <div class="col-sm-2">${chip.name}</div>
            <div class="col-sm-4">${chip.description}</div>
            <div class="chip-codes col-sm-6 d-flex"></div>
        </div>
    `)

    chip.codes.split("").forEach((code, j) => {
        $($(".chip-codes")[i]).append(`
            <div class="col-sm-2">
                <div class="w-50 d-flex justify-content-between form-check">
                    <label class="form-check-label" for="${chip.name}-${code}">${code}</label>
                    <input class="chip-checkbox form-check-input" type="checkbox" name="${chip.name}-${code}" id="${chip.name}-${code}">
                </div>
            </div>
        `)
    })
})

// Retrieve checkbox inputs on page load
var checked = [];

// Save checkbox inputs
$(".chip-checkbox").on("click", function() {
    //console.log($(this).attr("name"))
    //console.log($(this).is(':checked'))

    let chipName = $(this).attr("name");
    let isChecked = $(this).is(':checked');

    if (isChecked) {
        checked.push(chipName)
    } else {
        checked.splice(checked.indexOf(chipName), 1);
    }

    console.log(checked)

    // console.log(checked)
    // console.log(checked.toString());

    localStorage.setItem("checked", checked.toString())
    countChips();

})

if (localStorage.getItem("checked") != null && localStorage.getItem("checked") != []) {
    checked = localStorage.getItem("checked").split(",");

    console.log(checked)

    checked.forEach(inputName => {
        console.log(inputName)
        $(`.chip-checkbox[name='${inputName}']`).prop("checked", true);
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
    $(".chip-row").toggleClass("col-sm-8");
}