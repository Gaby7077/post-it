var request = require("request");


var status;

// DHL
var options = { method: 'GET',
  url: 'http://www.dhl.com/shipmentTracking',
  qs: { AWB: '8646843041' }};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  status = {
    tracking : JSON.parse(body).results[0].id,
    carrier : "DHL",
    shipperCity : (JSON.parse(body).results[0].origin.value).split("-")[0],
    shipperCountry : (JSON.parse(body).results[0].origin.value).split("-")[2],
    recipientCity : (JSON.parse(body).results[0].destination.value).split("-")[0],
    recipientCountry : (JSON.parse(body).results[0].destination.value).split("-")[2],
    status : JSON.parse(body).results[0].delivery.status
   };
 //console.log(status);
});



// FEDEX
var options = { method: 'POST',
  url: 'https://www.fedex.com/trackingCal/track',
  headers: 
   { 'Postman-Token': 'dd3d4849-aff5-464f-9e17-c1daa1029142',
     'Cache-Control': 'no-cache',
     'Content-Type': 'application/x-www-form-urlencoded' },
  form: 
   { data: '{"TrackPackagesRequest":{"trackingInfoList":[{"trackNumberInfo":{"trackingNumber":"781980226662"}}]}}',
     action: 'trackpackages' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  status = {
   tracking : JSON.parse(body).TrackPackagesResponse.packageList[0].trackingNbr,
   carrier : JSON.parse(body).TrackPackagesResponse.packageList[0].trackingCarrierDesc,
   shipperCity : JSON.parse(body).TrackPackagesResponse.packageList[0].shipperCity,
   shipperCountry : JSON.parse(body).TrackPackagesResponse.packageList[0].shipperCntryCD,
   recipientCity : JSON.parse(body).TrackPackagesResponse.packageList[0].recipientCity,
   recipientCountry :JSON.parse(body).TrackPackagesResponse.packageList[0].recipientCntryCD,
   status : JSON.parse(body).TrackPackagesResponse.packageList[0].keyStatus
  };
 // console.log(status);
});

//UPS
var request = require("request");

var options = { method: 'POST',
  url: 'https://wwwcie.ups.com/rest/Track',
  body: 
   { UPSSecurity: 
      { UsernameToken: { Username: 'jjalanis', Password: 'kLW928u?' },
        ServiceAccessToken: { AccessLicenseNumber: '7D4AD99F0828674C' } },
     TrackRequest: 
      { Request: 
         { RequestOption: '1',
           TransactionReference: { CustomerContext: 'Tracking UPS' } },
        InquiryNumber: '1ZW7W8710334752865' } },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  status = {
   tracking : body.TrackResponse.Shipment.InquiryNumber.Value,
   carrier : "UPS",
   shipperCity : body.TrackResponse.Shipment.ShipmentAddress[0].Address.City,
   shipperCountry : body.TrackResponse.Shipment.ShipmentAddress[0].Address.CountryCode,
   recipientCity : body.TrackResponse.Shipment.ShipmentAddress[1].Address.City,
   recipientCountry :body.TrackResponse.Shipment.ShipmentAddress[1].Address.CountryCode,
   status : body.TrackResponse.Shipment.Package.Activity[0].Status.Description
  };
  //console.log(status);
});

