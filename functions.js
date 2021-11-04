$( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "bounce",
        duration: 1000
      },
      hide: {
        effect: "bounce",
        duration: 1000
      }
    });

    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );
