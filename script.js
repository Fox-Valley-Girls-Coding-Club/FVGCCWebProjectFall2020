/* The $( document ).ready() function runs when all the HTML elements on the page are ready for jQuery to run on them
  It is a great place to set the starting state of the Web page
  And a great place to attach functions to elements on the page
*/
$(document).ready(function () {
  $(".candy").hide();  //select all elements with class "candy" and hide them
  
  // attach a function to the click event of each img within a candy class element
  $(".candy img").click(function () {
    $(this).attr('src', 'images/Reeses.png')
  });
});

function swapStyleSheet(sheet) {
  document.getElementById("pagestyle").setAttribute("href", sheet);
  localStorage.setItem("newstyle", sheet);
  //  document.getElementById('pagestyle').innerHTML = localStorage.getItem('newstyle');
}

function loadcss() {
  var x = localStorage.getItem("newstyle");
  if (x != null) {
    document.getElementById("pagestyle").setAttribute("href", x);
  }
}

function swapCandyBar(source) {
  $(".candy img").attr('src', source);

}

function fillthebag() {
  /*
  The virtual trick or treat bag is pre-filled with candy but it is hidden! 
  Each time the button is clicked, advance the progress bar and reveal one candy bar
  */

  var progBar = document.getElementById("henry"); 
  
  if (progBar.value < progBar.max) {
    progBar.value += 10;
    // use JQuery to select the element having both the class "candy" AND
    // a class named to match the progress bar value; for example, when progress bar 
    // value equals 10, select the element with class "10"
    $(".candy." + progBar.value).show();  
  } else {
    alert("Your candy bag is full!");
  }
}
