



function MakeDictionary() {
    var house = {
        Sqft: 3000,
        Acres: 0.6,
        Bedrooms: 4,
        Bathrooms: 3,
        hoa: false,
        Price: "High",
        Year_Built: 1987,
        Style: "Colonial",
        Price: "Very High" // Adding duplicate key. No error raised. This replaced first one.
    };
    delete house.Year_Built; // Deleting KVP
    document.getElementById("house_price").innerHTML = house.Price;
    document.getElementById("house_year").innerHTML = house.Year_Built; // Returns 'undefined'.

}



