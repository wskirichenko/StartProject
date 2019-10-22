(() => {
  $.router.onViewChange((e, viewRoute, route) => {
    if ( (route.name === "contact") ) {
      $(document).ready(function() {
        $(window).scrollTop(0);
        $('.test-color').css('color', 'black');

      });

      // ---------------------------------------------------------------
      //					Buttons click
      // ---------------------------------------------------------------
      // ---- First line buttons --------------------
      let org_value = null;
      $('.btn-s').click(e => {
        $('.activ-first-btn').removeClass('activ-first-btn');
        $(`.org-${e.currentTarget.getAttribute('value')}`).addClass('activ-first-btn');
        org_value = e.currentTarget.getAttribute('value');
      });

      // ---- Second line buttons ------------------
      // let flag_custom = null;
      let techn_value = null;
      $('.btn_custom').click(e => {
        $('.activ-second-btn').removeClass('activ-second-btn');
        $(`.org-${e.currentTarget.getAttribute('value')}`).addClass('activ-second-btn');
        // flag_custom = e.currentTarget.getAttribute('value');
        techn_value = e.currentTarget.getAttribute('value');
      });

      // ---- Disable field 'State' if field 'Country' /= 'US' --------
      stateChouse = () => {
        var USselect = $('#select').find(':selected').val();
        if ( USselect == "US") {
          // console.log( "USselect=", USselect );
          $('#state').prop( "disabled", false );
          $('#state').css('border-color', 'rgb(86, 87, 91)');
        } else {
          $('#state').prop( "disabled", true );
          $('#state').css('border-color', 'gray');
        }
      }

      // ---------------------------------------------------------------
      //					Validate Form (Approve.js)
			// ---------------------------------------------------------------
			disabledSubmit = () => {
				$("#submit_lead").attr("disabled", true);
				$('#submit_lead').css('background-color', 'gray');
			}
			enabledSubmit = () => {
				$("#submit_lead").attr("disabled", false);
				$('#submit_lead').css('background-color', '#40A5D9');
			}

      $('#contact_form [data-validate]').blur(function () {
        validate(this);
      });
      function validate(item) {
        if ($(item).is('form')) {
          $.each($('#contact_form [data-validate]'), function () {validate(this)});
          return;
        }
        var result = approve.value(getValue(item), $(item).data('validate'));
        if (!result.approved) {
          var errors = "";
          for (var error in result.errors) {
            errors = result.errors[error] + "<br/>";
          }
          var errorDiv = $("<div class='control-label error-text' style='font-size: 1.4rem; color: #fa1134;'></div>").html(errors);
          $(item).closest('.input-block').find('.error-text').remove();
					$(item).closest('.input-block').append(errorDiv).addClass('has-error');
					disabledSubmit();
        } else {
					$(item).closest('.input-block').removeClass('has-error').find('.error-text').remove();
					enabledSubmit();
        }
      }

      function getValue(item) {
        // input types button, reset, submit, hidden, and image don't really make sense to validate, so I didn't test them

        // radio buttons
        if ($(item).is('[type=radio]')) {
          var name = $(item).attr('name');
          return $('input[name=' + name + ']:checked').val();
        }

        // checkboxes
        if ($(item).is('[type=checkbox]')) {
          return $(item).is(':checked');
        }

        // textarea, select, input(text, checkbox, color, date, datetime-local, email, file, month, number, password, range, search, tel, time, url, week)
        return $(item).val();
      };

    }
  });
})();