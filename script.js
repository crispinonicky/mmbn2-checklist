console.log("Script loaded")

// Retrieve JSON chip data
var chipData = window.chipData;

// Loop through data to render page
chipData.forEach((chip, i) => {
    console.log(chip)
    $("#main").append(`
        <div class="row my-2">
            <div class="col-sm-2">${chip.name}</div>
            <div class="col-sm-5">${chip.description}</div>
            <div class="chip-codes col-sm d-flex"></div>
        </div>
    `)

    chip.codes.split("").forEach((code, j) => {
        $($(".chip-codes")[i]).append(`
            <div class="col-sm-2">
                <div class="w-50 d-flex justify-content-between">
                    <label for="${chip.name}">${code}</label>
                    <input type="checkbox" name="${chip.name}-${code}">
                </div>
            </div>
        `)
    })
})

// Retrieve checkbox inputs on page load
var checked = [];

if (localStorage.getItem("checked") != null) {
    checked = localStorage.getItem("checked").split(",");

    checked.forEach(inputName => {
        console.log(inputName)
        $(`input[name*='${inputName}']`).prop("checked", true);
    })
}

// Save checkbox inputs
$("input").on("click", function() {
    console.log($(this).attr("name"))
    console.log($(this).is(':checked'))

    let chipName = $(this).attr("name");
    let isChecked = $(this).is(':checked');

    if (isChecked) {
        checked.push(chipName)
    } else {
        checked.splice(checked.indexOf(chipName), 1);
    }

    console.log(checked)
    console.log(checked.toString());

    localStorage.setItem("checked", checked.toString())

})
