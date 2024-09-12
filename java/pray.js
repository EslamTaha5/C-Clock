
// Function to fetch data from the JSON file
async function name1() {
    const response = await fetch("../governorates.json")
    .then(response => response.json())
    .then(response => response[2].data)
    .catch((error)=>{
        console.error(error);
    })
    return response;
}

// Function to show city prayer times
async function show_city(s, city_name = "") {
    const param = {
        country: "EG",
        city: s
    };

    try {
        const res = await fetch(`https://api.aladhan.com/v1/timingsByCity/{date}?country=EG&city=${s}`)
        .then(response=>response.json())
        .then(response => response.data)

        const dt = res;
        const times = dt.timings;
        const dat = dt.date.hijri;

        show_time("Fajr", times.Fajr);
        show_time("Dhuhr", times.Dhuhr);
        show_time("Asr", times.Asr);
        show_time("Maghrib", times.Maghrib);
        show_time("Isha", times.Isha);
        show_hijri("hijri", dat.date);

    } catch (error) {
        console.error('Error fetching prayer times:', error);
    }
    const ct = document.getElementById('city-name');
  
    ct.innerHTML = city_name;

    function show_time(id, time) {
        const gt = document.getElementById(id);
        gt.innerHTML = time;
    }

    function show_hijri(id, time) {
        const gt = document.getElementById(id);
        gt.innerHTML = time;
    }
}
let cities = [1];
// Fetch the city data first and then use it
const sel = document.getElementById("change-city");
async function initialize() {
    const data = await name1();
    for(var i in data){
        const content = `<option>${data[i].governorate_name_ar
        }</option>`;
        sel.innerHTML += content;
        cities.push(data[i]);
    }

    show_city(data[1].governorate_name_en, cities[1].governorate_name_ar);
}

// Initialize the process
initialize();
sel.addEventListener(`change`, function(){
    x = sel.selectedIndex + 1 ;
    show_city(cities[x].governorate_name_en, cities[x].governorate_name_ar);
})
