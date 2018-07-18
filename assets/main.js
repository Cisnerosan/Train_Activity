var config = {
    apiKey: "AIzaSyDsWLHYYRyzGM1r_nGCFVJFfSqA8unc_Zw",
    authDomain: "train-activitysmu.firebaseapp.com",
    databaseURL: "https://train-activitysmu.firebaseio.com",
    projectId: "train-activitysmu",
    storageBucket: "train-activitysmu.appspot.com",
    messagingSenderId: "855199837975"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  
  var trainName;
  var destination;
  var firstTrainTime;
  var frequency;
  var empCount = 0;
  var minAway = 0;
  
  var nameDisplay = $('.name');
  
  $('#add').on('click', function(e) {
    empCount++;
    e.preventDefault();
    trainName = $('#trainName')
      .val()
      .trim();
    destination = $('#destination')
      .val()
      .trim();
    firstTrainTime = $('#firstTrainTime')
      .val()
      .trim();
    frequency = $('#frequency')
      .val()
      .trim();
  
    $('#trainName').val('');
    $('#destination').val('');
    $('#firstTrainTime').val('');
    $('#frequency').val('');
  
//   minAway=moment(firstTrainTime).from(moment());
moment(firstTrainTime).from(moment());

    
    var output = $(
      `<tr id="td"${empCount}>
        <td class="trainName"${empCount}>${trainName}</td>
        <td class="destination"${empCount}>${destination}</td>
        <td class="firstTrainTime"${empCount}>${firstTrainTime}</td>
        <td class="frequency"${empCount}>${frequency}</td>
     </tr>`
    );
  
    $('#tbody').append(output);
    console.log(trainName, destination, firstTrainTime,frequency,);


     });
  