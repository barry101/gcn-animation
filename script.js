
(function($) {
  var container = $("#container"),
      blogcontainer = $("#blog-container"),
      blogbackground = $(".st12"),
      blogheading = $("#blog-container .st11"),
      blogsubheading = $("#blog-container .st10"),
      searchbar = $("#search-bar_1_"),
      headericon = $("#header-icons"),
      nav = $("#nav"),
      irishflag = $("#irish-flag"),
      form = $("#form"),
      maggradient = $("#magazine-gradient-shelf_2_"),
      maggradient2 = $("#magazine-gradient-shelf_1_"),
      gcnlogo = $("#gcn-logo_4_"),
      blogcolor = $("#blog-entry-1_1_"),
      blogcolortext = $("#blog-entry-1_1_ .st10, #blog-entry-1_1_ .st11"),
      rightsidebar = $("#right-sidebar"),
      c1 = $("#c1"),
      c2 = $("#c2"),
      c3 = $("#c3"),
      c4 = $("#right-sidebar .st18"),
      magazine = $("#magazine"),
      magazinebackground = $(".st23"),
      subscribebtn = $("#subscribe-button_1_"),
      news = $("#section-latest-news_1_"),
      phonescroll = $([blogcolor, magazine, form, subscribebtn, blogcontainer, rightsidebar]),
      tlDesktopIn = new TimelineMax({repeat:-1}),
      tlmap = new TimelineMax({repeat:-1})
      ;
// onComplete: reverse
      tlmap
          .to(c1,.8,{opacity:.8, ease:Power1.easeInOut})
          .to(c1,.8,{opacity:.6, ease:Power1.easeInOut})
          .to(c3,.8,{opacity:.8, ease:Power1.easeInOut})
          .to(c3,.8,{opacity:.6, ease:Power1.easeInOut})
          .to(c2,.8,{opacity:.9, ease:Power1.easeInOut})
          .to(c2,.8,{opacity:.6, ease:Power1.easeInOut})
          ;

  tlDesktopIn
      .add("time2")
      .from(magazine, .7 ,{y:200, autoAlpha: 0, ease: Power3.easeInOut},"time2")
      .from(blogcolor, .5 ,{y:200, autoAlpha: 0, ease: Power3.easeInOut})
      .from([rightsidebar, form], .7 ,{y:200, autoAlpha: 0, ease: Power3.easeInOut},"time2")
      .from(news, 1 ,{ autoAlpha: 0,  ease: Elastic.easeInOut.config(1.2, 0.5),  y: -200},"time2")
      .from(blogcontainer, 1,{ ease: Elastic.easeInOut.config(1.2, 0.5), y: -100, autoAlpha:0 })
      .from([irishflag, nav, searchbar, headericon], 1,{ ease: Back.easeOut.config(.2), y: -200, autoAlpha:0 },"-=1.9")
      .from(subscribebtn, .4, { ease: Power1.easeOut, x: 200, autoAlpha:0 },"-=.7")

      // resize tablet
      .add("time1", "+=2.5")
      .to(container, 1.75, {width:265, height:318, ease: Power2.easeInOut},"time1")
      .to(container, 1, {attr:{viewBox:"0 109 408 250"}, marginTop: -30, ease: Power3.easeInOut},"time1")
      //header
      .to(irishflag, .8, { y: -10, autoAlpha: 0, ease: Power2.easeInOut},"time1")
      .to(searchbar, .8, { y: -10, autoAlpha: 0, ease: Power2.easeInOut},"time1")
      .to(nav, .8, { y: -3, x: 108, scaleX:1.4,scaleY:1.5, transformOrigin: '50% 0%', ease: Power2.easeInOut},"time1")
      .to(gcnlogo, .8, { y: 12, x: 10, scale:2, transformOrigin: '50% 0%', ease: Power2.easeInOut},"time1")
      .to(headericon, .8, { y: -4, x: 50, scaleX:1.5,scaleY:1.5, transformOrigin: '50% 0%', ease: Power2.easeInOut},"time1")

      //blog
      .to(blogbackground, .8, {scaleY:.67, transformOrigin: '0 0'},"time1")
      .to(blogheading, .5, {x: 8, scaleX: 1.3, scaleY:.8, stroke:"#7B8A9E", opacity: .6},"time1")
      .to(blogsubheading, .5, {x: 8, scaleX: 1.3, stroke:"#7B8A9E", opacity: .3},"time1")
      .to(blogcolor, .9,{ scaleX: 1.95, scaleY: 1.5, transformOrigin: '50% 0', ease: Power3.easeInOut},"time1")
      .to(blogcontainer, .5, {x: 0, y: 100,scaleX: .7, transformOrigin: '50% 50%', scaleY: 1.2, ease: Power2.easeInOut},"time1")
      //blog scroll
      // .to(blogcontainer, .8, {y: -40,ease: Back.easeInOut.config(1.4)})
      // .to(blogcontainer, .8, {y: 100,ease: Back.easeInOut.config(1.4)})
      // //left
      .to(maggradient, .7, { y: 60, autoAlpha: 0, ease: Power2.easeInOut},"time1")
      .to(maggradient2, .25, { y: -40, autoAlpha: 0, ease: Power2.easeInOut},"time1")
      .to(form, .75, { y: -55.2, x: 11.2, scaleX: 1.17, scaleY:5, transformOrigin: '0% 0%', ease: Power2.easeInOut},"time1")
      .to(magazinebackground, .1, { opacity: 1, ease: Power2.easeInOut},"time1")
      .to(magazine, 1, { y: 240, x: -22.5, scaleX: 1.37, scaleY:1.3, transformOrigin: '0% 50%', ease: Power2.easeInOut},"time1")
      //right
      .to(rightsidebar, .5, { y: 154.5, x: 4.5, scaleX:1.4,scaleY: 1.45, transformOrigin: '100% 0%', ease: Power2.easeInOut},"time1")
      .to(subscribebtn, .5, { y: 13, x: -11, scaleX:1.4,scaleY: 1.4, transformOrigin: '100% 0%', ease: Power2.easeInOut},"time1")

      .to(subscribebtn, .5, {x:150, autoAlpha:0, ease: Power2.easeInOut},"+=1.5")

      .to(headericon, .4, { x: 42,y:-100, ease: Power3.easeInOut},"-=.5")
      .set(headericon, { transformOrigin: '100% 0',scaleY: 4.6, scaleX: 5})

      .add("time3")
      // resize phone
      .to(rightsidebar, .8,{x: 150, autoAlpha:0,ease: Power4.easeIn},"time3")
      .to(container, 2, {attr:{viewBox:"0 172 408 250"},marginTop: 90, width:130, height:212, ease: Power2.easeInOut},"time3")
      // .to(container, 1, {, ease: Power3.easeInOut},"time3")
      .to(headericon, .4, { x: 42, y: -22, ease:Back.easeOut.config(1)})
      .to(gcnlogo, 1.5,{x: 20, y: -5, scaleY: 3.5, scaleX: 3.5,  transformOrigin: '0 0',  ease: Power3.easeOut},"-=1")
      .to(blogcolor, 1, { x: 30, y:10, scaleY: 2, scaleX: 2.2,  transformOrigin: '50% 0',  ease: Power3.easeInOut},"time3")
      //remove these
      .to([nav, searchbar, irishflag], .5, { y: -20, autoAlpha: 0, ease: Power2.easeInOut},"time3")

      .to(blogcolortext, .8, {y:40, x: 15, scaleY: 1.4,opacity:.8, stroke:"#7B8A9E"} ,"time3")
      .to($("#blog-entry-1_1_ .st10"), .8, {opacity:.5},"time3")
      .to(form, 1, {rotation: 180, x:150, y: 840,scaleX: 5, scaleY:6.5, transformOrigin: "50% 50"}, "time3")
      .to(magazine, 1.5, {x: -95, y: 340, scaleX: 3.5, scaleY:3.5, transformOrigin: "0 0"}, "time3")
      .set(subscribebtn,{x: 0, y: 800, scaleX: 6.5, scaleY:5}, "time3")
      .to(blogcontainer, .8, {x: 0, y: 1490, scaleX: 2.2, scaleY:4}, "time3")
      // .to(              , .8, {x: 0, y: 1490, scaleX: 2.2, scaleY:4}, "time3")
      .set($("#blog-entry_2, #blog-entry_3"), {autoAlpha: 0}, "time3")
      .set(rightsidebar, {autoAlpha: 1,x: 6, y: 1870, scaleX: 4.8, scaleY:4.8})

      //phone scroll
      .set($("#navbackground rect"), {opacity:1})
      .to(phonescroll, 1.5, {y: "-=1000px", ease: Back.easeInOut.config(.5)})
      .to(phonescroll, 2.5, {y: "-=1050px", ease: Back.easeInOut.config(.5)})
      .to(phonescroll, 1.5, {y: "+=2070px", ease: Back.easeInOut.config(.3)})


      //phone out
      .to([gcnlogo, headericon], .4, {autoAlpha: 0, y:-100, ease:Back.easeInOut.config(1)},"+=.9")
      .to(blogcolor, .8, {autoAlpha: 0, y:-500, ease:Back.easeInOut.config(1)},"-=.5")
      .to(magazine, .8, {autoAlpha: 0, y:500, ease:Back.easeInOut.config(1.5)},"-=.7")
      .to(form, .5, {autoAlpha: 0, bottom: 100, ease:Back.easeInOut.config(.8)},"-=.8")
      .set(container, {attr:{viewBox:"0 4 408 450"}})
      .to(container,.8, {
                                width:486,
                                height:295,
                                marginTop: 0,
                                ease:Power1.easeInOut,
                                delay:.2
                                        });
      ;
      function reverse (){
        TweenMax.to(container,.8, {attr:{viewBox:"0 4 408 450"},
                                  width:486,
                                  height:297,
                                  marginTop: 0,
                                  ease:Power4.easeInOut,
                                  delay:1
                                });
        ;
      }
  })(jQuery);
