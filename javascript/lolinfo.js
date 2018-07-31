
var loli_dummy = new Character("Illyasviel von Einzbern", null, null, true, 0, null, null, null, "B61 W47 H62", "Germany", null, "Fate", "https://vignette.wikia.nocookie.net/typemoon/images/6/6f/PrismaIllyaUniform.png/revision/latest?cb=20160229201545", "Often referred as \"Illya\", she is the master of \"Berserker\" in the Fifth Holy Grail War of Fate/stay night. She is the daughter of Kiritsugu Emiya and Irisviel von Einzbern, both whom participated in the Fourth Holy Grail War, and the adoptive older sister of Shirou Emiya.", null, null, null);
var json_string = JSON.stringify(loli_dummy);

function add_list_component(lolist, block_name, data)
{
    if (data == null)
        data = "Unknown";
    lolist.innerHTML += "<tr><td>" + block_name + "</td><td>" + data + "</td>";
}

function fill_document ()
{
    var loli = JSON.parse(json_string);
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