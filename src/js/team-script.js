(() => {
  $.router.onViewChange((e, viewRoute, route) => {
    if (route.name === "team") {
      // console.log('team - script');
      controlContent.destroy();
      $('.nav-scrol').css({ top: '-55px' });

      $('.test-color').css('color', 'black');
      $('#toTop2').css('right', '2rem');
      $('#toTop2').css('bottom', '2rem');
      // $('.copyright').css('color', 'white');


      // ---- for animation svg ------------------------
      var isMobail = window.matchMedia("only screen and (max-width: 414px)");
      if (isMobail.matches) {
        $('svg').attr('viewBox', '0 0 1120 310');
        $('.test-color').css('color', 'white');
      } else {
        $('svg').removeAttr('viewBox');
      }


      // ---------------------------------------------------------------
      //					Buttons click
      // ---------------------------------------------------------------
      // ---- Engineer Teams buttons --------------------
      let org_value = null;
      $('.btn-s').click(e => {
        $('.active-org-class').removeClass('active-org-class');
        $(`.org-${e.currentTarget.getAttribute('value')}`).addClass('active-org-class');
        org_value = e.currentTarget.getAttribute('value');
      });

      // ---- Technology goal buttons ------------------
      // let flag_custom = null;
      let techn_value = null;
      $('.btn_custom').click(e => {
        $('.active-btn-class').removeClass('active-btn-class');
        $(`.org-${e.currentTarget.getAttribute('value')}`).addClass('active-btn-class');
        techn_value = e.currentTarget.getAttribute('value');
      });



    }
  });
})();