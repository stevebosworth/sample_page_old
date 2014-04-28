'use strict';

var $ = require('jquery');
var _ = require('lodash');

var SurveyController = require('./modules/survey.js');

/**
 *
 *  Global class for handling sitewide JS like initiating breakpoint specific JS
 *
 *  @class Global
 *  @constructor
*/
var Global = function() {

    this.init();

};

Global.prototype = _.create({
    constructor: Global,

    /**
     *  Class Init Function.
     *
     *  @method init
     *
     *  @return {undefined}
     */

    init: function() {

        this.initVariables();
        this.initEvents();

        this.initSurvey();
    },

    initVariables: function() {
        // Initialize your page specific jQuery selectors here.
    },

    initSurvey:  function(){
        SurveyController();
    },

    /**
    *   Initialize page specific events and event listeners.
    *
    *   @method initEvents
    *   @return {undefined}
    */
    initEvents: function() {

    },
});

// Pages are built like classes, but they don't return themselves.
// They instantiate themselves ondomready instead!
$(function() {
    var page = new Global();
});
