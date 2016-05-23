$(document).ready(function()
{
  // Side Menu Trigger Function
    $("button.toggle-nav").click(function(){
        $("#sidenav").toggle();
    });
  // Swap Hamburger for X
  $("button.toggle-nav").on("click", function() {
    var el = $(this);
    if (el.text() == el.data("text-swap")) {
      el.text(el.data("text-original"));
    } else {
      el.data("text-original", el.text());
      el.text(el.data("text-swap"));
    }
  });
});
