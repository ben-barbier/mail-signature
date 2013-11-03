'use strict';

angular.module('mailSignatureApp')
  .controller('MainCtrl', function ($scope) {

    $scope.name = "My Name";
    $scope.company = "My company";
    $scope.job = "My job";
    $scope.phone = "+33 6 00 00 00 00";
    $scope.email = "name.firstname@company.com";
    $scope.photo_URL = "http://agent-22.github.io/mail-signature/img/avatar.jpg";
    $scope.company_logo_URL = "http://agent-22.github.io/mail-signature/img/ineat.jpg";

  });
