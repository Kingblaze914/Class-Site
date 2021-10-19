function toggle() {
  var element = document.getElementById("box");
  element.classList.toggle("active");
}

/**
 * Example of starting a plugin with options.
 * I am just passing some of the options in the following example.
 * you can also start the plugin using $('.marquee').marquee(); with defaults
 */
$('.marquee').marquee({
  duration: 15000,
  gap: 50,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
  startVisible: true,
  pauseOnHover: true
});
