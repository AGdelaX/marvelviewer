"use strict";

var marvelViewer=angular.module("MarvelViewer", [])

marvelViewer.controller("testing", function($scope){
	$scope.phrase = {};
	$scope.phrase.title="Testing";
});