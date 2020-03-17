import React from 'react';
import './App.css';
import LazyLoad from 'react-lazyload';
import WOW from 'react-wow';
import Flickity from 'react-flickity-component';
import Typist from 'react-typist';


function App() {
  return (
    <div className="App">

      
    </div>
  );

}

export default App;


let mainNavLinks = document.querySelectorAll(".scroll-nav__item>a");
let mainSections = document.querySelectorAll(".sectionHead");


var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy"
  // ... more custom settings?
});


let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    // console.log(link)
    let section = document.querySelector(link.hash);
    // console.log(section)
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.setAttribute("id","scroll-nav__item--active");
    } else {
      link.removeAttribute("id");
    }
  });
});



var flkty = [];


///////MULTIPLE
var galleryElems = document.querySelectorAll('.main-carousel');

for ( var i=0, len = galleryElems.length; i < len; i++ ) {
  var galleryElem = galleryElems[i];
  var instance = new Flickity( galleryElem, {
    // options...
    cellAlign: 'left',
    lazyLoad: true,
    imagesLoaded: true,
    contain: true
  });
 
  flkty.push(instance);
}


document.addEventListener("DOMContentLoaded", function() {
    window.dispatchEvent(new Event('resize'));

    // console.log(flkty);

    for (i=0; i < flkty.length; i++){

      console.log (flkty[i]);
      flkty[i].resize();
      // flkty[i].flickity()
    }
});



(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
  "use strict";
  
  var mainNavLinks = document.querySelectorAll(".scroll-nav__item>a");
  var mainSections = document.querySelectorAll(".sectionHead");
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy" // ... more custom settings?
  
  });
  var lastId;
  var cur = [];
  window.addEventListener("scroll", function (event) {
    var fromTop = window.scrollY;
    mainNavLinks.forEach(function (link) {
      // console.log(link)
      var section = document.querySelector(link.hash); // console.log(section)
  
      if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        link.setAttribute("id", "scroll-nav__item--active");
      } else {
        link.removeAttribute("id");
      }
    });
  });
  var flkty = []; ///////MULTIPLE
  
  var galleryElems = document.querySelectorAll('.main-carousel');
  
  for (var i = 0, len = galleryElems.length; i < len; i++) {
    var galleryElem = galleryElems[i];
    var instance = new Flickity(galleryElem, {
      // options...
      cellAlign: 'left',
      lazyLoad: true,
      imagesLoaded: true,
      contain: true
    });
    flkty.push(instance);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    window.dispatchEvent(new Event('resize')); // console.log(flkty);
  
    for (i = 0; i < flkty.length; i++) {
      console.log(flkty[i]);
      flkty[i].resize(); // flkty[i].flickity()
    }
  });
  
  },{}]},{},[1])
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixxQkFBMUIsQ0FBbkI7QUFDQSxJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBbkI7QUFHQSxJQUFJLGdCQUFnQixHQUFHLElBQUksUUFBSixDQUFhO0FBQ2xDLEVBQUEsaUJBQWlCLEVBQUUsT0FEZSxDQUVsQzs7QUFGa0MsQ0FBYixDQUF2QjtBQU9BLElBQUksTUFBSjtBQUNBLElBQUksR0FBRyxHQUFHLEVBQVY7QUFFQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsVUFBQSxLQUFLLEVBQUk7QUFDekMsTUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQXJCO0FBRUEsRUFBQSxZQUFZLENBQUMsT0FBYixDQUFxQixVQUFBLElBQUksRUFBSTtBQUMzQjtBQUNBLFFBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQUksQ0FBQyxJQUE1QixDQUFkLENBRjJCLENBRzNCOztBQUNBLFFBQ0UsT0FBTyxDQUFDLFNBQVIsSUFBcUIsT0FBckIsSUFDQSxPQUFPLENBQUMsU0FBUixHQUFvQixPQUFPLENBQUMsWUFBNUIsR0FBMkMsT0FGN0MsRUFHRTtBQUNBLE1BQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsSUFBbEIsRUFBdUIsMEJBQXZCO0FBQ0QsS0FMRCxNQUtPO0FBQ0wsTUFBQSxJQUFJLENBQUMsZUFBTCxDQUFxQixJQUFyQjtBQUNEO0FBQ0YsR0FaRDtBQWFELENBaEJEO0FBbUJBLElBQUksR0FBSixHQUFVLElBQVY7QUFFQSxJQUFJLEtBQUssR0FBRyxFQUFaLEMsQ0FHQTs7QUFDQSxJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBQW5COztBQUVBLEtBQU0sSUFBSSxDQUFDLEdBQUMsQ0FBTixFQUFTLEdBQUcsR0FBRyxZQUFZLENBQUMsTUFBbEMsRUFBMEMsQ0FBQyxHQUFHLEdBQTlDLEVBQW1ELENBQUMsRUFBcEQsRUFBeUQ7QUFDdkQsTUFBSSxXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUQsQ0FBOUI7QUFDQSxNQUFJLFFBQVEsR0FBRyxJQUFJLFFBQUosQ0FBYyxXQUFkLEVBQTJCO0FBQ3hDO0FBQ0EsSUFBQSxTQUFTLEVBQUUsTUFGNkI7QUFHeEMsSUFBQSxRQUFRLEVBQUUsSUFIOEI7QUFJeEMsSUFBQSxZQUFZLEVBQUUsSUFKMEI7QUFLeEMsSUFBQSxPQUFPLEVBQUU7QUFMK0IsR0FBM0IsQ0FBZjtBQVFBLEVBQUEsS0FBSyxDQUFDLElBQU4sQ0FBVyxRQUFYO0FBQ0Q7O0FBR0QsUUFBUSxDQUFDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0FBQ3JELEVBQUEsTUFBTSxDQUFDLGFBQVAsQ0FBcUIsSUFBSSxLQUFKLENBQVUsUUFBVixDQUFyQixFQURxRCxDQUdyRDs7QUFFQSxPQUFLLENBQUMsR0FBQyxDQUFQLEVBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFwQixFQUE0QixDQUFDLEVBQTdCLEVBQWdDO0FBRTlCLElBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBYSxLQUFLLENBQUMsQ0FBRCxDQUFsQjtBQUNBLElBQUEsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTLE1BQVQsR0FIOEIsQ0FJOUI7QUFDRDtBQUNKLENBWEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJsZXQgbWFpbk5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zY3JvbGwtbmF2X19pdGVtPmFcIik7XG5sZXQgbWFpblNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWN0aW9uSGVhZFwiKTtcblxuXG52YXIgbGF6eUxvYWRJbnN0YW5jZSA9IG5ldyBMYXp5TG9hZCh7XG4gIGVsZW1lbnRzX3NlbGVjdG9yOiBcIi5sYXp5XCJcbiAgLy8gLi4uIG1vcmUgY3VzdG9tIHNldHRpbmdzP1xufSk7XG5cblxuXG5sZXQgbGFzdElkO1xubGV0IGN1ciA9IFtdO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBldmVudCA9PiB7XG4gIGxldCBmcm9tVG9wID0gd2luZG93LnNjcm9sbFk7XG5cbiAgbWFpbk5hdkxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cobGluaylcbiAgICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobGluay5oYXNoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzZWN0aW9uKVxuICAgIGlmIChcbiAgICAgIHNlY3Rpb24ub2Zmc2V0VG9wIDw9IGZyb21Ub3AgJiZcbiAgICAgIHNlY3Rpb24ub2Zmc2V0VG9wICsgc2VjdGlvbi5vZmZzZXRIZWlnaHQgPiBmcm9tVG9wXG4gICAgKSB7XG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImlkXCIsXCJzY3JvbGwtbmF2X19pdGVtLS1hY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmsucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5cbm5ldyBXT1coKS5pbml0KCk7XG5cbnZhciBmbGt0eSA9IFtdO1xuXG5cbi8vLy8vLy9NVUxUSVBMRVxudmFyIGdhbGxlcnlFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLWNhcm91c2VsJyk7XG5cbmZvciAoIHZhciBpPTAsIGxlbiA9IGdhbGxlcnlFbGVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgdmFyIGdhbGxlcnlFbGVtID0gZ2FsbGVyeUVsZW1zW2ldO1xuICB2YXIgaW5zdGFuY2UgPSBuZXcgRmxpY2tpdHkoIGdhbGxlcnlFbGVtLCB7XG4gICAgLy8gb3B0aW9ucy4uLlxuICAgIGNlbGxBbGlnbjogJ2xlZnQnLFxuICAgIGxhenlMb2FkOiB0cnVlLFxuICAgIGltYWdlc0xvYWRlZDogdHJ1ZSxcbiAgICBjb250YWluOiB0cnVlXG4gIH0pO1xuIFxuICBmbGt0eS5wdXNoKGluc3RhbmNlKTtcbn1cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGZsa3R5KTtcblxuICAgIGZvciAoaT0wOyBpIDwgZmxrdHkubGVuZ3RoOyBpKyspe1xuXG4gICAgICBjb25zb2xlLmxvZyAoZmxrdHlbaV0pO1xuICAgICAgZmxrdHlbaV0ucmVzaXplKCk7XG4gICAgICAvLyBmbGt0eVtpXS5mbGlja2l0eSgpXG4gICAgfVxufSk7XG5cblxuIl19
  
 
