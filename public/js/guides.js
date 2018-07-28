$(document).ready(function () {

    var carrierInput = $("#carrier");
    var trackingNum = $("#tracking");
    var trackContainer = $(".track-container");

    $(document).on("submit", "#new-guide", handleAuthorFormSubmit);
    $(document).on("click", ".delete-track", handleDeleteButtonPress);
    
    getTracks();

    function handleAuthorFormSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if (!carrierInput.val().trim().trim()||!trackingNum.val().trim().trim())  {
          return;
        }
      
        writeTrack({
          carrier: carrierInput.val().trim(),
          track: trackingNum.val().trim()
        });
      }

      function writeTrack(trackData) {
        $.post("/api/tracks", trackData)
          .then(getTracks);
      }


    function getTracks() {
        $.get("/api/tracks", renderTracksList);
      }
      






  










});