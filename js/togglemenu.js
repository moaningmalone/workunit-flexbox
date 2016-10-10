$(document).ready(function()
{
    $("button.toggle-nav").click(function(){
    // Side Menu Trigger Function
        $("#main-nav").toggle();
        $("#main-nav").prependTo("#mobilenav");

  // Swap Hamburger for X
    var el = $(this);
    if (el.text() == el.data("text-swap")) {
      el.text(el.data("text-original"));
    } else {
      el.data("text-original", el.text());
      el.text(el.data("text-swap"));
    }

  });
  // end button toggle
});
