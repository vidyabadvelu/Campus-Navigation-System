// Show sections

function showSection(sectionId) {

    let sections = document.querySelectorAll(".section");

    sections.forEach(function(section) {
        section.classList.add("hidden");
    });

    document.getElementById(sectionId).classList.remove("hidden");

    window.scrollTo(0, 0);
}


// Search locations

function searchLocations() {

    let search =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    let locations =
        document.querySelectorAll(".location-card");


    locations.forEach(function(location) {

        let text =
            location.innerText.toLowerCase();


        if (text.includes(search)) {

            location.style.display = "block";

        } else {

            location.style.display = "none";

        }

    });
}


// Filter locations

function filterLocations(category) {

    let locations =
        document.querySelectorAll(".location-card");


    locations.forEach(function(location) {

        let locationCategory =
            location.getAttribute("data-category");


        if (
            category === "all" ||
            locationCategory === category
        ) {

            location.style.display = "block";

        } else {

            location.style.display = "none";

        }

    });

}


// Show route

function showRoute(route) {

    document
        .getElementById("routeText")
        .innerHTML = route
        .replaceAll("→", " → ");

    document
        .getElementById("routeBox")
        .classList.remove("hidden");

}


// Close route

function closeRoute() {

    document
        .getElementById("routeBox")
        .classList.add("hidden");

}