$(document).ready(function()
{
    $("button.toggle-nav").click(function(){
    // Side Menu Trigger Function
        $("#sidenav").toggle();

  // Swap Hamburger for X
    var el = $(this);
    if (el.text() == el.data("text-swap")) {
      el.text(el.data("text-original"));
    } else {
      el.data("text-original", el.text());
      el.text(el.data("text-swap"));
    }
    // Make Main Content opaque
    $("#main").toggleClass("opaque");


  });
  // end button toggle
});
