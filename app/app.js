function initListeners() {
  $(".links-ul a").click(function (e) {
    let buttonId = e.currentTarget.id;
    MODEL.changePageContent(buttonId);
    console.log(buttonId);
  });
}
$(document).ready(function () {
  MODEL.changePageContent("home");
  initListeners();
});
