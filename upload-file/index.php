
<html lang="en"  ng-app="uploadFileApp">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Demo upload file</title>
    <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
     <div ng-controller="ModalController">
        <script type="text/ng-template" id="myModalContent.html">
            <div class="modal-header">
                <h3>Upload file</h3>
            </div>
            <div class="modal-body" ng-controller="UploadController">
            <div class="row">
              <div class="col-md-6">
                <label>HTTP Options:</label> <select  ng-model="httpOption" ng-options="opt for opt in httpOptions"></select>
               </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label>Seledted HTTP Option: {{httpOption}}</label>
               </div>
            </div>

            choose a single file: <input type="file" ng-file-select="onFileSelect($files)">
            <br/>
            Progress:
                <br/>
                <div ng-show="selectedFiles != null">
                  <div class="sel-file" ng-repeat="f in selectedFiles">
                    <img ng-show="dataUrls[$index]" ng-src="{{dataUrls[$index]}}">
                    <button ng-click="start($index)" ng-show="progress[$index] < 0">Start</button>
                       
                     <progressbar ng-show="progress[$index] >= 0" max="max" value="dynamic"><span style="color:black; white-space:nowrap;">{{dynamic}} %</span></progressbar>
                    
                    </span>       
                    <button class="button" ng-click="abort($index)" ng-show="hasUploader($index) && progress[$index] < 100">Abort</button>
                    {{f.name}} - size: {{f.size}}B - type: {{f.type}}
                  </div>
                </div>
           
              <div class="response" ng-show="uploadResult.length > 0">
              <br/>
              Server Response:
              <ul>
                <li ng-repeat="result in uploadResult">
                  <ul>
                    <li ng-repeat="item in result.result">
                      <div data-ng-show="item.name">file name: {{item.name}}</div>
                      <div data-ng-show="item.fieldName">name: {{item.fieldName}}</div>
                      <div data-ng-show="item.size">size on the serve: {{item.size}}</div>
                      <div data-ng-show="item.value">value: {{item.value}}</div>
                    </li>
                  </ul>
                  <div data-ng-show="result.requestHeaders" class="reqh">request headers: {{result.requestHeaders}}</div>
                </li>
              </ul>
            </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" ng-click="ok()">OK</button>
                <button class="btn btn-warning" ng-click="cancel()">Cancel</button>
            </div>
        </script>

        <button class="btn btn-default" ng-click="open()">Open Dialog!</button>
    </div>

    <script src="lib/angular-file-upload/angular-file-upload-shim.js"></script>
    <script src="lib/angular/angular.js"></script>
    <script src="lib/angular/ui-bootstrap-tpls-0.10.0.min.js"></script>
    <script src="lib/angular-file-upload/angular-file-upload.js"></script>
    <script src="js/controller.js"></script>
    <script src="js/upload.js"></script>
  </body>
</html>
