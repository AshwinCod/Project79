menu_list_array = ["Veg Margherita Pizza","Chicken Pizza","Cheese Pizza","Vegetable Pizza","Margherita Pizza","Hawaiian Pizza"];

function getmenu(){
var htmldata="";
menu_list_array.sort();
        for(var i = 0; i < menu_list_array.length; i++){
            htmldata=htmldata + menu_list_array[i] + "<br>";
        }
        document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
    var htmldata="";
    menu_list_array.sort();
    for(var i = 0; i < menu_list_array.length; i++){
        htmldata = htmldata + menu_list_array[i] + "<br>";
    }
    document.getElementById("display_addedmenu").innerHTML = htmldata;
var htmldata;
var item=document.getElementById("add_item").value;
        menu_list_array.sort();
        htmldata="";
        for(var i = 0; i < menu_list_array.length; i++){
            htmldata = htmldata + img + menu_list_array[i] + '<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;	
         console.log(htmldata);	
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
