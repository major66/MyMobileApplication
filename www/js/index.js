var pictureSource;   // picture source
var destinationType; // sets the format of returned value

// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
    var returnHomeLink = document.getElementById("return-home");
    returnHomeLink.addEventListener("click", returnHome, false);

    $(".filter-btn").hide();
    $("#images").hide();
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;

    var screenHeight = window.innerHeight;
    $("button").height(screenHeight / 3);
    $(".ui-content").height(screenHeight / 1.055);
}

// Called when a photo is successfully retrieved
//
function onPhotoDataSuccess(imageData) {


    // Get image handle
    //

    $("#buttons").hide();
    $("#images").show();
    var smallImage = document.getElementById('editor-window');

    // Unhide image elements
    //
    smallImage.style.display = 'block';

    // Show the captured photo
    // The in-line CSS rules are used to resize the image
    //
    smallImage.src = "data:image/jpeg;base64," + imageData;
}

// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imageURI) {
    // Uncomment to view the image file URI
    // console.log(imageURI);

    // Get image handle
    //
    $("#buttons").hide();
    $("#images").show();
    var largeImage = document.getElementById('editor-window');

    // Unhide image elements
    //
    largeImage.style.display = 'block';

    // Show the captured photo
    // The in-line CSS rules are used to resize the image
    //
    largeImage.src = imageURI;
}

// A button will call this function
//
function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {quality: 50,
        destinationType: destinationType.DATA_URL});

}

// A button will call this function
//
function capturePhotoEdit() {
    // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL});
}

// A button will call this function
//
function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source});
}

// Called if something bad happens.
//
function onFail(message) {
    //salert('Failed because: ' + message);
}

function returnHome() {
    $("#images").hide();
    $("#buttons").show();
}