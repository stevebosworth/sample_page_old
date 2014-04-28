'use strict';

var $ = require('jquery');
var _ = require('lodash');

  /**
    *   AdditionalProductInfo is a module.
    *   The constructor sets up jQuery elements and event listeners, then
    *   fires the component ready event.
    *
    *   Please include any special notes about the module and its constructor here, or
    *   remove these two lines.
    *
    *   @class AdditionalProductInfo
    *   @extends EGroceryModule
    *   @constructor
    */
var SurveyController = function() {
    this.initVariables();
    this.init();
    this.initEvents();

    this.isInit = true;
};

SurveyController.prototype = _.create({
    constructor: SurveyController,

    /**
    *   Initialize any variables needed, meaning mainly "wrap elements with jQuery."
    *
    *   @method initVariables
    *   @return {undefined}
    */
    initVariables: function() {

    },

    /**
    *   Initialize this module
    *
    *   @method init
    *   @return {undefined}
    */
    init: function() {
    },

    /**
    *   Initialize events and event listeners.
    *
    *   @method initEvents
    *   @return {undefined}
    */
    initEvents: function() {

    },
});

module.exports = function(){
    new SurveyController();
};
