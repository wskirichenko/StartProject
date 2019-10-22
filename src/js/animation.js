(() => {
  $.router.onViewChange((e, viewRoute, route) => {
    if ((route.name === "home")) {
      // console.log('animate');
      $('.nav-scrol').css({ top: '-55px' });
      $('#click_api').click(function () {
        gtag('send', {
          'hitType': 'event',	//pageview (просмотр страницы), screenview (просмотр экрана), event (событие), transaction (транзакция), item (товар), social (социальное взаимодействие), exception (исключение), timing (время).
          'eventCategory': 'Category',
          'eventAction': 'Action',
          'eventValue': 10
        });
        // console.log('event');
      });

      /* ---- Jquery, for a smooth transition to an anchors ---- */
      $("#scroll_page").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
          top = $(id).offset().top;
        $('body,html').animate({
          scrollTop: top
        }, 1000);
      });


      $('.test-color').css('color', 'white');
      var controlTreugol,
        controlSecPartners,
        isIPad = window.matchMedia("only screen and (max-width: 1100px)"),
        isMobail = window.matchMedia("only screen and (max-width: 414px)"),
        offsetY,
        windowHight,
        windowWidth,
        offsetOneScena,
        topScena,
        beginTop,
        phoneHeght,
        macHeight;

      var getSize = () => {
        windowHight = $(window).height();
        windowWidth = $(window).width();
        offsetY = windowHight / 2 - 0;
        offsetOneScena = windowHight / 2
        topScena = 50;
        beginTop = -55,
          phoneHeght = $('#right_9').innerHeight();
        // macHeight  = $('#right_1').innerHeight();
      }

      var clearControllers = () => {
        controlContent.destroy();
        controlCharts.destroy();
      };

      $(window).resize(() => {
        getSize();
        if (isMobail.matches) {
          // console.log('isMobail');
          clearControllers();
          initCSS();
          $('#content_1').css('position', 'relative');
          $('#content_1').css('top', '0');
          animateCharts();
        } else {
          clearControllers();
          getSize();
          animateParallax();
          initCSS();
          chartSetCSS();
        }
      })

      getSize();

      // ---------------------------------------------------------------
      //					Parallax animation
      // ---------------------------------------------------------------
      var initCSS = () => {
        $('#datena_li_2, #datena_li_3, #datena_li_4').css('color', 'black');
        $('#datena_li_2, #datena_li_3, #datena_li_4').css('font-weight', '300');
        $('#b_suite_li_2, #b_suite_li_3').css('color', 'black');
        $('#b_suite_li_2, #b_suite_li_3').css('font-weight', '300');

        $('#right_1, #right_2, #right_3, #right_4, #right_5, #right_6, #right_7, #right_8, #right_9, #right_10').css('opacity', '0');

        $('#scroll_box').css('top', '0');
        $('#left').css('top', (offsetOneScena - 150));
        $('#right_10').css('right', '-150');
        // $('#content_1').css('position', 'relative');
        $('#content_1').css('position', 'fixed');
        $('#content_1').css('top', '92vh');
      }
      // ---------------------------------------------------------------

      var animateParallax = () => {
        controlContent = new ScrollMagic.Controller();

        // Good hands section
        var good_hands_items = [ 0, 10, 25, 45, 70, 100 ];
        good_hands_items.forEach(function(item, key) {
          var good_hand_tween = TweenMax.staggerFromTo("#good_hands_" + key, 1,
            { top: item  },
            { top: 0 },
          0.01);
          var good_hand_scene = new ScrollMagic.Scene({
            triggerElement : "#good_hands_trigger",
            duration       : 500,
            offset         : -100
          }).setTween(good_hand_tween)

          controlCharts.addScene([ good_hand_scene ]);
        })

        var tween1 = TweenMax.staggerFromTo("#content_1", 1,
          { position: 'relative', top: windowHight / 2 + 300 },
          { position: 'fixed', top: windowHight / 2 + 300 },
          0.15);
        var contentScene = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 10, offset: 1
        }).setTween(tween1)
        // .addIndicators({name: "content-1"});

        var tween2 = TweenMax.staggerFromTo("#content_1", 1,
          { top: windowHight / 2 + 300 },
          { top: 0 },
          0.15);
        var contentScene1_2 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: windowHight / 2, offset: 11
        }).setTween(tween2)
        // .addIndicators({name: "content-1-1"});

        // -----
        var tween1_1 = TweenMax.staggerFromTo("#scroll_box", 1,
          // { top: beginTop },
          { top: 0 },
          { top: -(windowHight) },
          0.15);
        var contentScene2 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 2 * offsetOneScena, offset: 6 * offsetOneScena
        }).setTween(tween1_1)
        // .addIndicators({name: "scroll_box"});

        // -----
        var tween1_2 = TweenMax.staggerFromTo("#scroll_box", 1,
          { top: -(windowHight) },
          { top: -(windowHight) },
          0.15);
        var contentScene3 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: offsetOneScena, offset: (8 * offsetOneScena)
        }).setTween(tween1_2)
        // .addIndicators({name: "scroll_box2"});

        // ----
        var tween1_3 = TweenMax.staggerFromTo("#scroll_box", 1,
          { top: -(windowHight) },
          { top: -(2 * windowHight - 100) },
          0.15);
        var contentScene4 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 2 * offsetOneScena, offset: 11 * offsetOneScena
        }).setTween(tween1_3)
        // .addIndicators({name: "scroll_box3"});

        // ---------------------------------------------------------------
        // 			Datena list
        // ---------------------------------------------------------------
        var tweenLi_1 = TweenMax.staggerFromTo("#datena_li_1", 1,
          { fontWeight: 600, color: 'black' },
          { fontWeight: 300, color: 'black' },
          0.15);
        var liScene1 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: (100), offset: 2 * offsetOneScena
        }).setTween(tweenLi_1)

        var tweenLi_2 = TweenMax.staggerFromTo("#datena_li_2", 1,
          { fontWeight: 300, color: 'black' },
          { fontWeight: 600, color: 'black' },
          0.15);
        var liScene2 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: (100), offset: 2 * offsetOneScena
        }).setTween(tweenLi_2)
        // .addIndicators({name: "datena_li_2"});

        var tweenLi_3 = TweenMax.staggerFromTo("#datena_li_3", 1,
          { fontWeight: 300, color: 'black' },
          { fontWeight: 600, color: 'black' },
          0.15);
        var liScene3 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: (100), offset: (3 * offsetOneScena)
        }).setTween(tweenLi_3);

        var tweenLi_2_1 = TweenMax.staggerFromTo("#datena_li_2", 1,
          { fontWeight: 600, color: 'black' },
          { fontWeight: 300, color: 'black' },
          0.15);
        var liScene2_1 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: (100), offset: (3 * offsetOneScena)
        }).setTween(tweenLi_2_1);

        var tweenLi_4 = TweenMax.staggerFromTo("#datena_li_4", 1,
          { fontWeight: 300, color: 'black' },
          { fontWeight: 600, color: 'black' },
          0.15);
        var liScene4 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: (100), offset: (4 * offsetOneScena)
        }).setTween(tweenLi_4);

        var tweenLi_3_1 = TweenMax.staggerFromTo("#datena_li_3", 1,
          { fontWeight: 600, color: 'black' },
          { fontWeight: 300, color: 'black' },
          0.15);
        var liScene3_1 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: (100), offset: (4 * offsetOneScena)
        }).setTween(tweenLi_3_1);

        var tweenLi_5 = TweenMax.staggerFromTo("#datena_li_5", 1,
          { fontWeight: 300, color: 'black' },
          { fontWeight: 600, color: 'black' },
          0.15);
        var liScene5 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: (100), offset: (5 * offsetOneScena)
        }).setTween(tweenLi_5);

        var tweenLi_4_1 = TweenMax.staggerFromTo("#datena_li_4", 1,
          { fontWeight: 600, color: 'black' },
          { fontWeight: 300, color: 'black' },
          0.15);
        var liScene4_1 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: (100), offset: (5 * offsetOneScena)
        }).setTween(tweenLi_4_1);

        // ---------------------------------------------------------------
        // 			B-Sute list
        // ---------------------------------------------------------------
        var tweenBS_li_1 = TweenMax.staggerFromTo("#b_suite_li_1", 1,
          { fontWeight: 600, color: 'blackk' },
          { fontWeight: 300, color: 'black' },
          0.15);
        var liBS_Scene1 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: (100), offset: 9 * offsetOneScena
        }).setTween(tweenBS_li_1)

        var tweenBS_li_2 = TweenMax.staggerFromTo("#b_suite_li_2", 1,
          { fontWeight: 300, color: 'black' },
          { fontWeight: 600, color: 'black' },
          0.15);
        var liBS_Scene2 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: (100), offset: 9 * offsetOneScena
        }).setTween(tweenBS_li_2)
        // .addIndicators({name: "datena_li_2"});

        var tweenBS_li_3 = TweenMax.staggerFromTo("#b_suite_li_3", 1,
          { fontWeight: 300, color: 'black' },
          { fontWeight: 600, color: 'black' },
          0.15);
        var liBS_Scene3 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: (100), offset: (10 * offsetOneScena)
        }).setTween(tweenBS_li_3);

        var tweenBS_li_2_1 = TweenMax.staggerFromTo("#b_suite_li_2", 1,
          { fontWeight: 600, color: 'black' },
          { fontWeight: 300, color: 'black' },
          0.15);
        var liBS_Scene2_1 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: (100), offset: (10 * offsetOneScena)
        }).setTween(tweenBS_li_2_1);

        // ---------------------------------------------------------------
        // 			Points-left animation
        // ---------------------------------------------------------------
        var optionActivePoint = {
          backgroundColor: 'black',
          borderColor: 'transparent'
        }
        var optionPasivePoint = {
          backgroundColor: 'transparent',
          borderColor: 'black'
        }
        var tweenPoint_1 = TweenMax.staggerFromTo(
          "#point_1", 1, optionActivePoint, optionPasivePoint, 0.15
        );
        var pointScene1 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 200, offset: (7 * offsetOneScena - 200)
        }).setTween(tweenPoint_1)

        // ---------------------------------------------------------------
        var tweenPoint_2_1 = TweenMax.staggerFromTo(
          "#point_2", 1, optionActivePoint, optionPasivePoint, 0.15
        );
        var pointScene2_1 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 200, offset: (11 * offsetOneScena - 200)
        }).setTween(tweenPoint_2_1)

        // ---------------------------------------------------------------
        var tweenPoint_2 = TweenMax.staggerFromTo(
          "#point_2", 1, optionPasivePoint, optionActivePoint, 0.15
        );
        var pointScene2 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 200, offset: (7 * offsetOneScena - 200)
        }).setTween(tweenPoint_2)

        // ---------------------------------------------------------------
        var tweenPoint_3 = TweenMax.staggerFromTo(
          "#point_3", 1, optionPasivePoint, optionActivePoint, 0.15
        );
        var pointScene3 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 200, offset: (11 * offsetOneScena - 200)
        }).setTween(tweenPoint_3)

        // ---------------------------------------------------------------
        // 			Pictures first block
        // ---------------------------------------------------------------
        var tweenRight_1 = TweenMax.staggerFromTo("#right_1", 1,
          {
            right: -1050,
            opacity: 0
          },
          {
            right: (windowWidth / 2 - 1050 - 70),
            opacity: 1,
            ease: Circ.ease
          },
          0.15);
        var rightScene_1 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 400, offset: 300
        }).setTween(tweenRight_1);

        // -----
        var tweenRight_2 = TweenMax.staggerFromTo("#right_2", 1,
          { opacity: 0 },
          { opacity: 1, ease: Circ.ease },
          0.15);
        var rightScene_2 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 200, offset: (2 * offsetOneScena)
        }).setTween(tweenRight_2);

        // -----
        var tweenRight_3 = TweenMax.staggerFromTo("#right_3", 1,
          { opacity: 0 },
          { opacity: 1, ease: Circ.ease },
          0.15);
        var rightScene_3 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 200, offset: (3 * offsetOneScena)
        }).setTween(tweenRight_3);

        // -----
        var tweenRight_4 = TweenMax.staggerFromTo("#right_4", 1,
          { opacity: 0 },
          { opacity: 1, ease: Circ.ease },
          0.15);
        var rightScene_4 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 200, offset: (4 * offsetOneScena)
        }).setTween(tweenRight_4);

        // ----- (Disabled) ----
        var tweenRight_5 = TweenMax.staggerFromTo("#right_5", 1,
          { opacity: 0 },
          { opacity: 1, ease: Circ.ease },
          0.15);
        var rightScene_5 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 200, offset: (5 * offsetOneScena)
        }).setTween(tweenRight_5);

        // ---------------------------------------------------------------
        // 			2 Pictures second block
        // ---------------------------------------------------------------
        var tweenRight_6 = TweenMax.staggerFromTo("#right_6", 1,
          { opacity: 0 },
          { opacity: 1, ease: Circ.ease },
          0.15);
        var rightScene_6 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 200, offset: (6 * offsetOneScena)
        }).setTween(tweenRight_6);

        // -----
        var tweenRight_7 = TweenMax.staggerFromTo("#right_7", 1,
          { opacity: 0 },
          { opacity: 1, ease: Circ.ease },
          0.15);
        var rightScene_7 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 200, offset: (9 * offsetOneScena)
        }).setTween(tweenRight_7);

        // -----
        var tweenRight_8 = TweenMax.staggerFromTo("#right_8", 1,
          { opacity: 0 },
          { opacity: 1, ease: Circ.ease },
          0.15);
        var rightScene_8 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 200, offset: (10 * offsetOneScena)
        }).setTween(tweenRight_8);

        // ---------------------------------------------------------------
        // 			3 Pictures therd block
        // ---------------------------------------------------------------
        var tweenRight_9 = TweenMax.staggerFromTo("#right_9", 1,
          {
            opacity: 0,
            right: -1000
          }, {
          opacity: 1,
          right: -150,
          ease: Circ.ease
        },
          0.15);
        var rightScene_9 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 400, offset: (11 * offsetOneScena + 300)
        }).setTween(tweenRight_9);

        // -----
        var tweenRight_10 = TweenMax.staggerFromTo("#right_10", 1,
          { opacity: 0 },
          { opacity: 1, ease: Circ.ease },
          0.15);
        var rightScene_10 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 200, offset: (13 * offsetOneScena)
        }).setTween(tweenRight_10);

        // -----
        var tweenRight_11 = TweenMax.staggerFromTo("#right_11", 1,
          { opacity: 0 },
          { opacity: 1, ease: Circ.ease },
          0.15);
        var rightScene_11 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 200, offset: (14 * offsetOneScena)
        }).setTween(tweenRight_11);

        var tweenRight_12 = TweenMax.staggerFromTo("#right_12", 1,
          { opacity: 0 },
          { opacity: 1, ease: Circ.ease },
          0.15);
        var rightScene_12 = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 200, offset: (15 * offsetOneScena)
        }).setTween(tweenRight_12);

        // -----
        var tweenRightAll = TweenMax.staggerFromTo(["#right_1", "#right_2", "#right_3", "#right_4", "#right_5", "#right_6", "#right_7", "#right_8"], 1,
          {
            opacity: 1,
          }, {
          opacity: 0,
          right: -1050,
          ease: Circ.ease
        },
          0);
        var rightSceneAll = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 500, offset: (11 * offsetOneScena)
        }).setTween(tweenRightAll);

        // ---------------------------------------------------------------
        var tweenLeft = TweenMax.staggerFromTo("#left", 1,
          { left: -110 },
          { left: 40, ease: Circ.ease },
          0.15);
        var leftScene = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: 600, offset: 400
        })
          .setTween(tweenLeft);
        // ---------------------------------------------------------------
        var tweenRightEnd = TweenMax.staggerFromTo(["#right_9", "#right_10", "#right_11", "#right_12"], 1,
          { top: (offsetOneScena - phoneHeght / 2) },
          { top: (-offsetOneScena - 550) },
          0.005);
        var rightSceneEnd = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: (3 * offsetOneScena), offset: (16 * offsetOneScena - 220)
        }).setTween(tweenRightEnd);

        var tweenLeftEnd = TweenMax.staggerFromTo("#left", 1,
          { top: (offsetOneScena - 150) },
          { top: (-offsetOneScena - 150) },
          0.15);
        var leftSceneEnd = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: (3 * offsetOneScena), offset: (16 * offsetOneScena - 220)
        }).setTween(tweenLeftEnd);

        var tweenEnd = TweenMax.staggerFromTo("#content_1", 1,
          { top: 0 },
          { top: (-windowHight) },
          0.15);
        var contentEndScene = new ScrollMagic.Scene({
          triggerElement: "#main_trigger", duration: (3 * offsetOneScena), offset: (16 * offsetOneScena - 220)
        }).setTween(tweenEnd)
        // .addIndicators({name: "content-1-end"});

        controlContent.addScene([
          contentScene, contentScene1_2, contentScene2, contentScene3, contentScene4,
          liScene1, liScene2, liScene3, liScene2_1, liScene3_1, liScene4, liScene4_1, liScene5,
          pointScene1, pointScene2, pointScene3, pointScene2_1,
          liBS_Scene1, liBS_Scene2, liBS_Scene2_1, liBS_Scene3,
          rightScene_1, rightScene_2, rightScene_3, rightScene_4, rightScene_5, rightScene_6, rightScene_7, rightScene_8, rightScene_9, rightScene_10, rightScene_11, rightScene_12, rightSceneAll,
          leftScene, rightSceneEnd, leftSceneEnd, contentEndScene
        ]);
      }

      // ---- Beginning Parallax animation for first loading -------
      if (isMobail.matches) {
        // console.log('mobile');
        clearControllers();
        initCSS();
        $('#content_1').css('position', 'relative');
        $('#content_1').css('top', '0');
      } else {
        // console.log('desctop');
        animateParallax();
        initCSS();
      }

      // ---------------------------------------------------------------------
      //			Appearing / hiding a section of text when a button is pressed
      // ---------------------------------------------------------------------
			let clickFlag = [],
					pHeght = [];
      for (let i = 0; i < 3; i++) {
				clickFlag[i] = 0;
			}
			pHeght[0] = 140;
			pHeght[1] = 190;
			pHeght[2] = 190;

      $('.content__btn').click(e => {
        let target = e.currentTarget.getAttribute('value')
        if (clickFlag[target] == 0) {
					clickFlag[target] = 1;
          $(`.content-p--${target}`).css('opacity', '1');
          $(`.content-p--${target}`).animate({
            height: (pHeght[target])
					}, 400);
          $(`.slayd--${target}`).animate({
            height: (570 + pHeght[target] - 50)
					}, 400);
					$('.sect-horiz-slider__container__content').animate({
            height: (720)
					}, 400);
					$('.sect-horiz-slider__markers').animate({
						marginTop: 370
					}, 400);
        } else {
          clickFlag[target] = 0;
          $(`.content-p--${target}`).animate({
            height: 0,
          }, 400, function () {
            $(`.content-p--${target}`).css('opacity', '0');
          });
          $(`.slayd--${target}`).animate({
            height: (580)
					}, 400);
					$('.sect-horiz-slider__container__content').animate({
            height: (640)
					}, 400);
					$('.sect-horiz-slider__markers').animate({
						marginTop: 340
					}, 400);
        }
      });

      // ---------------------------------------------------------------------
      //			Appearing / hiding a section of text when a button is pressed
      // ---------------------------------------------------------------------
      // let clickFlag = [];
      // for (let i = 0; i < 3; i++) {
      //   clickFlag[i] = 0;
      // }
      // $('.content__btn').click(e => {
      //   let target = e.currentTarget.getAttribute('value')
      //   if (clickFlag[target] == 0) {
      //     clickFlag[target] = 1;
      //     // $(`.content-p--${target}`).removeClass('mobile-hidden');
      //     $(`.content-p--${target}`).css('opacity', '1');
      //     $(`.content-p--${target}`).animate({
      //       height: (170)
      //     }, 400);
      //   } else {
      //     clickFlag[target] = 0;
      //     // $(`.content-p--${target}`).addClass('mobile-hidden');
      //     $(`.content-p--${target}`).animate({
      //       height: 0,
      //     }, 400, function () {
      //       $(`.content-p--${target}`).css('opacity', '0');
      //     });
      //   }
      // });

      // ---------------------------------------------------------------
      //					Chart diagramms for About-us section
      // ---------------------------------------------------------------
      let chartSize = 95,
        chartLineWidth = 4;

      var chartPython = document.querySelector('.chart--python'),
        optionsPython = {
          barColor: '#305F8B',
          trackColor: '#dcdcdc',
          size: chartSize,
          lineWidth: chartLineWidth,
          animate: 1000
        };
      new EasyPieChart(chartPython, optionsPython);

      var chartJS = document.querySelector('.chart--js'),
        optionsJS = {
          barColor: '#F5CE5B',
          trackColor: '#dcdcdc',
          size: chartSize,
          lineWidth: chartLineWidth,
          animate: 1000
        };
      new EasyPieChart(chartJS, optionsJS);

      var chartJava = document.querySelector('.chart--java'),
        optionsJava = {
          barColor: '#EE8D3C',
          trackColor: '#dcdcdc',
          size: chartSize,
          lineWidth: chartLineWidth,
          animate: 1000
        };
      new EasyPieChart(chartJava, optionsJava);

      var chartGraphql = document.querySelector('.chart--graphql'),
        optionsGraphql = {
          barColor: '#D02A81',
          trackColor: '#dcdcdc',
          size: chartSize,
          lineWidth: chartLineWidth,
          animate: 1000
        };
      new EasyPieChart(chartGraphql, optionsGraphql);


      var chartDatascience = document.querySelector('.chart--datascience');
      var optionsDatascience = {
        barColor: '#2c557c',
        trackColor: '#dcdcdc',
        lineCap: 'round',
        lineWidth: chartLineWidth,
        size: chartSize,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
      };
      new EasyPieChart(chartDatascience, optionsDatascience);

      var chartRreact = document.querySelector('.chart--react');
      var optionsRreact = {
        barColor: '#2ECCF1',
        trackColor: '#dcdcdc',
        size: chartSize,
        lineWidth: chartLineWidth,
        animate: 1000
      };
      new EasyPieChart(chartRreact, optionsRreact);

      var chartCucumber = document.querySelector('.chart--cucumber');
      var optionsOTHER = {
            barColor: '#43AACD',
            trackColor: '#dcdcdc',
            size: chartSize,
            lineWidth: chartLineWidth,
            animate: 1000
          };
      new EasyPieChart(chartCucumber, optionsOTHER);

      var chartMicroservices = document.querySelector('.chart--microservices');
      new EasyPieChart(chartMicroservices, optionsOTHER);

      var chartSystems = document.querySelector('.chart--systems');
      new EasyPieChart(chartSystems, optionsOTHER);

      var chartDevops = document.querySelector('.chart--devops4');
      new EasyPieChart(chartDevops, optionsOTHER);

      var chartMLAI = document.querySelector('.chart--mlai');
      new EasyPieChart(chartMLAI, optionsOTHER);

      var chartSecurity = document.querySelector('.chart--security');
      new EasyPieChart(chartSecurity, optionsGraphql);

      // $('.chart--1').on('click', function(e) {
      // 	e.preventDefault();
      // 	var newValue = Math.floor(100 * Math.random());
      // 	$('.chart--1').data('easyPieChart').update(newValue);
      // 	$('span', $('.chart--1')).text(newValue);
      // });


      // ---------------------------------------------------------------
      //					Animate Charts on scroll
      // ---------------------------------------------------------------
      var chartSetCSS = () => {
        $('.chart-l1-1').css('margin-left', '-140px');
        $('.chart-l1-3').css('margin-left', '140px');
        $('.chart-l2-1').css('margin-left', '-60px');
        $('.chart-l2-2').css('margin-left', '60px');
        $('.chart-l3-1').css('margin-left', '-210px');
        $('.chart-l3-2').css({ 'margin-left': '-60px', 'margin-top': '0' });
        $('.chart-l3-3').css({ 'margin-left': '60px', 'margin-top': '0' });
        $('.chart-l3-4').css('margin-left', '210px');
        $('.chart-l4-1').css('margin-left', '-140px');
        $('.chart-l4-3').css('margin-left', '140px');
      }

      var animateCharts = () => {
        controlCharts = new ScrollMagic.Controller();
        let speedAnim = 700;
        let offset2 = $('.sect-about-us__main__right').innerHeight();
        let offsetText = $('#textFix').innerHeight() - 27;
        // let offsetText = $('.sect-about-us__main__right').innerHeight() - 27;
        let offsetContainer = $('#charts_container').innerHeight();
        // let offsetAnimChart = windowHight/2+offset2+27;
				let offsetAnimChart = offsetContainer / 2 + offset2 - offsetText + 54;

				var tweenText = TweenMax.staggerFromTo("#textFix", 1,
				{ position: 'relative', marginTop: 0, top:0 },
				{ position: 'fixed', marginTop: 55, top:0 },
					0.01);
				var animFixedText = new ScrollMagic.Scene({
					triggerElement: "#chart_trigger", duration: 1, offset: (offsetAnimChart + 17)
				}).setTween(tweenText)
				// .addIndicators({name: "textFix"});

        var tweenCont2 = TweenMax.staggerFromTo("#charts_container", 1,
          { position: 'relative' },
          { position: 'fixed' },
          0.01);
        var animTopConteiner = new ScrollMagic.Scene({
					// triggerElement: "#chart_trigger", duration: 1, offset: (offsetAnimChart + windowHight / 2 - offsetContainer / 2) + 27
					triggerElement: "#chart_trigger", duration: 1, offset: (offsetAnimChart + 17)
        }).setTween(tweenCont2)
				// .addIndicators({name: "animFixedConteiner"});

				var tweenCont = TweenMax.staggerFromTo("#charts_container", 1,
					{ top: 0 },
					// { top: (windowHight/2 - offsetContainer / 2) },
					{ top: (windowHight/2 - offsetText - 67) },
					0.01);
				var animFixedConteiner = new ScrollMagic.Scene({
					// triggerElement: "#chart_trigger", duration: (windowHight / 2 - offsetContainer / 2), offset: (offsetAnimChart + 27)
					triggerElement: "#chart_trigger", duration: 1, offset: (offsetAnimChart + 17)
				}).setTween(tweenCont)
				// .addIndicators({name: "animTopConteiner"});

        // ---- Moved section ----
        var tweenContMove = TweenMax.staggerFromTo("#charts_container", 1,
          { top: (windowHight / 2 - offsetContainer / 2 + offsetText) },
          { top: -windowHight / 2 - 100 },
          0.01);
        var moveConteiner = new ScrollMagic.Scene({
          triggerElement: "#chart_trigger", duration: windowHight, offset: offsetAnimChart + 800 +50
        }).setTween(tweenContMove)
					// .addIndicators({name: "Moved"});

        var tweenTextMove = TweenMax.staggerFromTo("#textFix", 1,
          { top: 0 },
          { top: -(offsetText+55) },
          0.01);
        var moveText = new ScrollMagic.Scene({
          triggerElement: "#chart_trigger", duration: offsetText+55, offset: offsetAnimChart + 800 +50
        }).setTween(tweenTextMove)

        $('#charts_container').css('position', 'relative');
        $('#charts_container').css('top', '0');

        // ---- Rotate donuts ----
        var tweenChart_rotate_donuts = TweenMax.staggerFromTo("#charts_container", 1,
          { transform: 'rotate(' + 0 + 'deg)' },
          { transform: 'rotate(' + 60 + 'deg)' },
          0.15);
        var animChart_rotate_donuts = new ScrollMagic.Scene({
          triggerElement: "#chart_trigger", duration: 300, offset: offsetAnimChart + 100
        }).setTween(tweenChart_rotate_donuts)

        // ---- hidden section ----
        var tweenChartHidden = TweenMax.staggerFromTo(".chart", 1,
          { opacity: 1},
          { opacity: 0 },
          0.01);
        var hiddenConteiner = new ScrollMagic.Scene({
          triggerElement: "#chart_trigger", duration: 1, offset: offsetAnimChart + 300 +50
        }).setTween(tweenChartHidden)
          // .addIndicators({name: "hidden"});

         // ---- Show animate ----
        var tweenAminShow = TweenMax.staggerFromTo(".animation-auto", 1,
          { opacity: 0},
          { opacity: 1 },
          0.01);
        var showAnim = new ScrollMagic.Scene({
          triggerElement: "#chart_trigger", duration: 1, offset: offsetAnimChart + 300 +50
        }).setTween(tweenAminShow)
          // .addIndicators({name: "hidden"});


        // ---- Line 1 ----
        var tweenChart1_1 = TweenMax.staggerFromTo(".chart-l1-1", 1,
          { marginTop: -20, marginLeft: -110, transform: 'rotate(' + 0 + 'deg)' },
          { marginTop: 150, marginLeft: 0, transform: 'rotate(' + -90 + 'deg)' },
          0.15);
        var animChart1_1 = new ScrollMagic.Scene({
          triggerElement: "#chart_trigger", duration: speedAnim, offset: offsetAnimChart + 100
        }).setTween(tweenChart1_1)
        // .addIndicators({name: "animChart1_1"});

        var tweenChart1_2 = TweenMax.staggerFromTo(".chart-l1-2", 1,
          { marginTop: -20, marginLeft: 0, transform: 'rotate(' + 0 + 'deg)' },
          { marginTop: 150, marginLeft: 0, transform: 'rotate(' + -90 + 'deg)' },
          0.15);
        var animChart1_2 = new ScrollMagic.Scene({
          triggerElement: "#chart_trigger", duration: speedAnim, offset: offsetAnimChart + 100
        }).setTween(tweenChart1_2)

        var tweenChart1_3 = TweenMax.staggerFromTo(".chart-l1-3", 1,
          { marginTop: -20, marginLeft: 110, transform: 'rotate(' + 0 + 'deg)' },
          { marginTop: 150, marginLeft: 0, transform: 'rotate(' + -90 + 'deg)' },
          0.15);
        var animChart1_3 = new ScrollMagic.Scene({
          triggerElement: "#chart_trigger", duration: speedAnim, offset: offsetAnimChart + 100
        }).setTween(tweenChart1_3)

        // ---- Line 2 ----
        var tweenChart2_1 = TweenMax.staggerFromTo(".chart-l2-1", 1,
          { marginTop: -10, marginLeft: -50, transform: 'rotate(' + 0 + 'deg)' },
          { marginTop: 50, marginLeft: 0, transform: 'rotate(' + -90 + 'deg)' },
          0.15);
        var animChart2_1 = new ScrollMagic.Scene({
          triggerElement: "#chart_trigger", duration: speedAnim, offset: offsetAnimChart + 100
        }).setTween(tweenChart2_1)

        var tweenChart2_2 = TweenMax.staggerFromTo(".chart-l2-2", 1,
          { marginTop: -10, marginLeft: 50, transform: 'rotate(' + 0 + 'deg)' },
          { marginTop: 50, marginLeft: 0, transform: 'rotate(' + -90 + 'deg)' },
          0.15);
        var animChart2_2 = new ScrollMagic.Scene({
          triggerElement: "#chart_trigger", duration: speedAnim, offset: offsetAnimChart + 100
        }).setTween(tweenChart2_2)

        // ---- Line 3 ----
        var tweenChart3_1 = TweenMax.staggerFromTo(".chart-l3-1", 1,
          { marginTop: -60, marginLeft: -130, transform: 'rotate(' + 0 + 'deg)' },
          { marginTop: -50, marginLeft: 0, transform: 'rotate(' + -90 + 'deg)' },
          0.15);
        var animChart3_1 = new ScrollMagic.Scene({
          triggerElement: "#chart_trigger", duration: speedAnim, offset: offsetAnimChart + 100
        }).setTween(tweenChart3_1)

        var tweenChart3_2 = TweenMax.staggerFromTo(".chart-l3-2", 1,
          { marginTop: -10, marginLeft: -50, transform: 'rotate(' + 0 + 'deg)' },
          { marginTop: -50, marginLeft: 0, transform: 'rotate(' + -90 + 'deg)' },
          0.15);
        var animChart3_2 = new ScrollMagic.Scene({
          triggerElement: "#chart_trigger", duration: speedAnim, offset: offsetAnimChart + 100
        }).setTween(tweenChart3_2)

        var tweenChart3_3 = TweenMax.staggerFromTo(".chart-l3-3", 1,
          { marginTop: -10, marginLeft: 50, transform: 'rotate(' + 0 + 'deg)' },
          { marginTop: -50, marginLeft: 0, transform: 'rotate(' + -90 + 'deg)' },
          0.15);
        var animChart3_3 = new ScrollMagic.Scene({
          triggerElement: "#chart_trigger", duration: speedAnim, offset: offsetAnimChart + 100
        }).setTween(tweenChart3_3)

        var tweenChart3_4 = TweenMax.staggerFromTo(".chart-l3-4", 1,
          { marginTop: -60, marginLeft: 130, transform: 'rotate(' + 0 + 'deg)' },
          { marginTop: -50, marginLeft: 0, transform: 'rotate(' + -90 + 'deg)' },
          0.15);
        var animChart3_4 = new ScrollMagic.Scene({
          triggerElement: "#chart_trigger", duration: speedAnim, offset: offsetAnimChart + 100
        }).setTween(tweenChart3_4)

        // ---- Line 4 ----
        var tweenChart4_1 = TweenMax.staggerFromTo(".chart-l4-1", 1,
          { marginTop: 0, marginLeft: -110, transform: 'rotate(' + 0 + 'deg)' },
          { marginTop: -150, marginLeft: 0, transform: 'rotate(' + -90 + 'deg)' },
          0.15);
        var animChart4_1 = new ScrollMagic.Scene({
          triggerElement: "#chart_trigger", duration: speedAnim, offset: offsetAnimChart + 100
        }).setTween(tweenChart4_1)

        var tweenChart4_2 = TweenMax.staggerFromTo(".chart-l4-2", 1,
          { marginTop: 0, marginLeft: 0, transform: 'rotate(' + 0 + 'deg)' },
          { marginTop: -150, marginLeft: 0, transform: 'rotate(' + -90 + 'deg)' },
          0.15);
        var animChart4_2 = new ScrollMagic.Scene({
          triggerElement: "#chart_trigger", duration: speedAnim, offset: offsetAnimChart + 100
        }).setTween(tweenChart4_2)

        var tweenChart4_3 = TweenMax.staggerFromTo(".chart-l4-3", 1,
          { marginTop: 0, marginLeft: 110, transform: 'rotate(' + 0 + 'deg)' },
          { marginTop: -150, marginLeft: 0, transform: 'rotate(' + -90 + 'deg)' },
          0.15);
        var animChart4_3 = new ScrollMagic.Scene({
          triggerElement: "#chart_trigger", duration: speedAnim, offset: offsetAnimChart + 100
        }).setTween(tweenChart4_3)

        // ---- Text opacity ----
        var tweenText = TweenMax.staggerFromTo([".text-appear", ".chart__picture"], 1,
          { opacity: 1 },
          { opacity: 0 },
          0.01);
        var animText = new ScrollMagic.Scene({
          triggerElement: "#chart_trigger", duration: 100, offset: offsetAnimChart + 250
        }).setTween(tweenText)

        // ---- Charts opacity ----
        var chartOpacity = TweenMax.staggerFromTo([".chart"], 1,
          { opacity: 1 },
          { opacity: 0 },
          0.01);
        var chartOpacityAnim = new ScrollMagic.Scene({
          triggerElement: "#chart_trigger", duration: 100, offset: offsetAnimChart + 650
        }).setTween(chartOpacity)

        // ---- Button opacity ----
        // var tweenPict1 = TweenMax.staggerFromTo(".mobile-btn", 1,
        //   { opacity: 0 },
        //   { opacity: 1 },
        //   0.01);
        // var animPict1 = new ScrollMagic.Scene({
        //   triggerElement: "#chart_trigger", duration: 50, offset: offsetAnimChart + 700
        // }).setTween(tweenPict1)
        // .addIndicators({name: "opasity"});

        // var tweenPict2 = TweenMax.staggerFromTo(".mobile-btn", 1,
        //   { width: 80, borderRadius: 70, color: 'transparent' },
        //   { width: 300, borderRadius: 6, color: 'white' },
        //   0.01);
        // var animPict2 = new ScrollMagic.Scene({
        //   triggerElement: "#chart_trigger", duration: 150, offset: offsetAnimChart + 800
        // }).setTween(tweenPict2)
        // .addIndicators({name: "animBtn"});

        controlCharts.addScene([
          animFixedConteiner, animFixedText, animTopConteiner, moveConteiner, moveText,
          animChart_rotate_donuts, 
          hiddenConteiner, showAnim,
          animChart1_1, animChart1_2, animChart1_3,
          animChart2_1, animChart2_2,
          animChart3_1, animChart3_2, animChart3_3, animChart3_4,
          animChart4_1, animChart4_2, animChart4_3,
          animText, chartOpacityAnim
          // , animPict1, animPict2
        ]);
      }

      // ---------------------------------------------------------------------------------
      var beginAnimate = (anim, m_left, m_top) => {
        anim.animate({
          marginLeft: m_left, 
          marginTop: m_top
        }, 2000);
      }
      var endAnimate = (anim, m_left, m_top) => {
        anim.stop();
        anim.clearQueue();
        anim.css('margin-top', m_top);
        anim.css('margin-left', m_left);
      }

      if (isMobail.matches) {
        $(document).scroll(function () {
          if ($(document).scrollTop() > 5660) {
            beginAnimate($('.circle--01'), 0, 150);
            beginAnimate($('.circle--02'), 0, 150);
            beginAnimate($('.circle--03'), 0, 150);
  
            beginAnimate($('.circle--04'), 0, 50);
            beginAnimate($('.circle--05'), 0, 50);
  
            beginAnimate($('.circle--06'), 0, -50);
            beginAnimate($('.circle--07'), 0, -50);
            beginAnimate($('.circle--08'), 0, -50);
            beginAnimate($('.circle--09'), 0, -50);
  
            beginAnimate($('.circle--10'), 0, -150);
            beginAnimate($('.circle--11'), 0, -150);
            beginAnimate($('.circle--12'), 0, -150);
            
            // $('.mobile-btn').animate({
            //   opacity: 1
            // }, 1000, 
            //   function() {
            //     $('.mobile-btn').animate({
            //       width: 300 
            //     }, 1000)
            // });
  
            $('.mobile-btn').animate( {opacity: 1}, 2500 );
            $('.mobile-btn').animate( {width: 300}, 1000 );
   
          } else {
            endAnimate($('.circle--01'), -50, 80);
            endAnimate($('.circle--02'), 0, 80);
            endAnimate($('.circle--03'), 50, 80);
  
            endAnimate($('.circle--04'), -20, 25);
            endAnimate($('.circle--05'), 20, 25);
  
            endAnimate($('.circle--06'), -55, -55);
            endAnimate($('.circle--07'), -20, -30);
            endAnimate($('.circle--08'), 20, -30);
            endAnimate($('.circle--09'), 55, -55);
  
            endAnimate($('.circle--10'), -50, -85);
            endAnimate($('.circle--11'), 0, -85);
            endAnimate($('.circle--12'), 50, -85);
            $('.mobile-btn').stop();
            $('.mobile-btn').clearQueue();
            $('.mobile-btn').css('opacity', 0);
            $('.mobile-btn').css('width', 70);
          }
        });
        animateCharts();

      } else {
        chartSetCSS();
      }

      // ---------------------------------------------------------------
      //					Animate Counter (40+) in About Us section
      // ---------------------------------------------------------------
      /*
        var flag_count = 0;
        var animateCount = function () {
          $('.count').each(function () {
            if (flag_count == 0) {
              $(this).prop('Counter',0).animate({
                  Counter: $(this).text()
              }, {
                  duration: 1500,
                  easing: 'swing',
                  step: function (now) {
                    $(this).text(Math.ceil(now));
                    if ( $(this).text() > 39 ) {
                      $(this).prop('Counter',40).stop();
                      flag_count = 1;
                    }
                  }
              });
            }
          });
        };

        var blokCount = $('.count');
        $(window).scroll(function() {
          if (blokCountIsInVision()) {
            animateCount();
          }
        });

        function blokCountIsInVision() {
          var windowBottom = $(window).scrollTop() + $(window).height();
          var blockBottom = blokCount.offset().top + $(window).height()/3;
          return windowBottom >= blockBottom;
        }
      */
      // ---------------------------------------------------------------
      const optionActivePoint = {
        backgroundColor: '#43AACD',
        borderColor: 'transparent'
      }
      const optionPasivePoint = {
        backgroundColor: 'rgb(176, 176, 176)',
        borderColor: 'rgb(176, 176, 176)'
      }
      $('#marker-1').css(optionActivePoint);
      $('.sect-horiz-slider__container')[0].addEventListener('scroll', function () {
        const positionSectHorizSlider = $('.slayd--1').position().left;
        if (positionSectHorizSlider > 200) {
          $('#marker-1').css(optionActivePoint);
          $('#marker-2').css(optionPasivePoint);
          $('#marker-3').css(optionPasivePoint);
        } else if (positionSectHorizSlider <= 200 && positionSectHorizSlider >= -182) {
          $('#marker-1').css(optionPasivePoint);
          $('#marker-2').css(optionActivePoint);
          $('#marker-3').css(optionPasivePoint);
        } else {
          $('#marker-1').css(optionPasivePoint);
          $('#marker-2').css(optionPasivePoint);
          $('#marker-3').css(optionActivePoint);
        }
      });

      const bg = $('#rostov');
      const contacts = $('#contacts1');
      bg.on('mouseover', () => {
        contacts.addClass('change-bg');
      });
      bg.on('mouseout', () => {
        contacts.removeClass('change-bg');
      });

    }
  });
})();