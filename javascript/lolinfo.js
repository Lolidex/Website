
var loli_dummy = new Loli("Illyasviel von Einzbern", 18, "white", 1.33, 34, "Germany", "B61 W47 H62", null, "Fate", "https://vignette.wikia.nocookie.net/typemoon/images/6/6f/PrismaIllyaUniform.png/revision/latest?cb=20160229201545", "Often referred as \"Illya\", she is the master of \"Berserker\" in the Fifth Holy Grail War of Fate/stay night. She is the daughter of Kiritsugu Emiya and Irisviel von Einzbern, both whom participated in the Fourth Holy Grail War, and the adoptive older sister of Shirou Emiya.");
var json_string = JSON.stringify(loli_dummy);

function add_list_component(lolist, block_name, data)
{
    if (data != null)
        lolist.innerHTML += "<li class=\"list-group-item\">" + block_name + ": " + data + "</li>";
}

function fill_document ()
{
    var loli = JSON.parse(json_string);
    var lolist = document.getElementById("lolist");

    //document.getElementById("lolimage").src = loli.image_url;
    add_list_component(lolist, "Name", loli.name);
    add_list_component(lolist, "Age", loli.age);
    add_list_component(lolist, "Hair color", loli.hair_color);
    add_list_component(lolist, "Height", loli.height);
    add_list_component(lolist, "Weight", loli.weight);
    add_list_component(lolist, "Place of birth", loli.place_of_birth);
    add_list_component(lolist, "3 sizes", loli._3sizes);
    add_list_component(lolist, "Blood type", loli.blood_type);
    add_list_component(lolist, "Source", loli.source);
    add_list_component(lolist, "Description", loli.description);
}

fill_document();