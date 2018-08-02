
function add_list_component(lolist, block_name, data)
{
    if (data == null)
        data = "Unknown";
    lolist.innerHTML += "<tr><td>" + block_name + "</td><td>" + data + "</td>";
}

function fill_document ()
{
    var xmlhttp = new XMLHttpRequest();
    var loli;

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            loli = JSON.parse(this.responseText).characters[0];
        }
    };
    xmlhttp.open("GET", "http://localhost:8888/search?name=" + new URL(window.location.href).searchParams.get("name"), false);
    xmlhttp.send();
    var lolist = document.getElementById("lolist");

    document.getElementById("lolimage").src = loli.image;
    add_list_component(lolist, "Name", loli.name);
    add_list_component(lolist, "Translated Name", loli.translatedname);
    add_list_component(lolist, "Nickname", loli.nickname);
    add_list_component(lolist, "Is loli", loli.isloli);
    add_list_component(lolist, "Rating", loli.rating);
    add_list_component(lolist, "Birthdate", loli.birthdate);
    add_list_component(lolist, "Height", loli.height);
    add_list_component(lolist, "Weight", loli.weight);
    add_list_component(lolist, "3 sizes (Bust, Waist, Hips)", loli.sizes);
    add_list_component(lolist, "Birthplace", loli.birthplace);
    add_list_component(lolist, "Blood type", loli.bloodtype);
    add_list_component(lolist, "Source", loli.source);
    add_list_component(lolist, "Description", loli.description);
    add_list_component(lolist, "Hair color", loli.haircolor);
    add_list_component(lolist, "Left eye color", loli.lefteyecolor);
    add_list_component(lolist, "Right eye color", loli.righteyecolor);
}

fill_document();