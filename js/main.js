var myApp = angular.module('myApp',[]);

/**
 * Factorys (aka serivce)
 * You can include calls to a service and return it's JSON message
 */
myApp.factory('Avengers', function  () {
	var Avengers = {};
	Avengers.cast = [
	{
		name: "Robert Downey Jr.",
		character: "Tony Stark / Iron Man"
	},
	{
		name: "Chris Evans",
		character: "Steve Rogers / Captain America"
	},
	{
		name: "Mark Ruffalo",
		character: "Bruce Banner / The Hulk"
	},
	{
		name: "Chris Hemsworth",
		character: "Thor"
	},
	{
		name: "Scarlett Johansson",
		character: "Natasha Romanoff / Black Widow"
	},
	{
		name: "Jeremy Renner",
		character: "Clint Barton / Hawkeye"
	},
	{
		name: "Tom Hiddleston",
		character: "Loki"
	},
	{
		name: "Clark Gregg",
		character: "Agent Phil Coulson"
	},
	{
		name: "Cobie Smulders",
		character: "Agent Maris Hill"
	},
	{
		name: "Stellan Skarsgard",
		character: "Selvig"
	},
	{
		name: "Samuel L. Jackson",
		character: "Nick Fury"
	},
	{
		name: "Gwyneth Paltrow",
		character: "Pepper Potts"
	},
	{
		name: "Paul Bettany",
		character: "Jarvis (voice)"
	},
	{
		name: "Alexis Denisof",
		character: "The Other"
	},
	{
		name: "Tina Benko",
		character: "NASA Scientist"
	},
	{
		name: "Henry Jiang",
		character: "Peter Parker / Spider Man"
	},
	{
		name: "Dwayne Harris",
		character: "IP Man"
	},
	{
		name: "Sai Vemuri",
		character: "Wonder Woman"
	},
	{
		name: "Shaekar Krishna",
		character: "Superman"
	}];
	return Avengers;
});

/*
 * Directives
 */
myApp.directive('searchbox', function  () {
	return {
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		restrict: 'E',
		link: function($scope, iElm, iAttrs, controller) {
			console.log("I am searchbox.");
		}
	};
})
.directive('search_suggestions', function () {
	// Runs during compile
	return {
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		link: function($scope, iElm, iAttrs, controller) {
			console.log('I am search_suggestions');
		}
	};
})
.directive('typing', function  () {
	return function ($scope, element) {
		element.bind('keyup', function () {
			if (element.val() != "") {
				$("#"+element.attr('typing')).removeAttr('disabled');
			} else {
				$("#"+element.attr('typing')).attr('disabled',true);
			}
		});
	};
});

/**
 * Template Filters
 */
myApp.filter('reverse', function () {
	return function (text) {
		return text.split("").reverse().join("");
	}
})
.filter('all_caps', function () {
	return function (text) {
		return text.toUpperCase();
	}
})
.filter('capitalize', function() {
	return function (text) {
		return (text.length > 0) ? text[0].toUpperCase() + text.slice(1) : "";
	}
});

/**
 * Controllers
 */
function AvengersCtrl($scope, Avengers){
	$scope.avengers = Avengers;
}