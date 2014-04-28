'use strict';

var $ = require('jquery');
var _ = require('lodash');

var SurveyController = require('./modules/survey.js');

/**
*   Global is the page level script file for the Global page.
*   The constructor sets up jQuery elements, event listeners, and inits the Analytics
*   mediator.
*
*   This file is the global JS controller that handles global submodules, polyfills
*   and is the master of our domain. Specifically it loads the AdaptiveImageController,
*   the IEFixController, the FormValidator module, etc.
*
*   @class Global
*   @extends EGroceryPage
*   @constructor
*/
var Global = function() {

    this.init();

};

Global.prototype = _.create({
    constructor: Global,

    /**
    *   This function acts as the actual constructor setup, because the constructor
    *   itself needs to check for IE 8 and require the IE polyfill script inline,
    *   so that we don't load all the polyfills on any other browsers.
    *
    *   This function either gets called from the constructor, or passed as the callback
    *   to requiring the IE polyfill controller.
    */
    init: function() {

        this.initVariables();
        this.initEvents();

        this.initSurvey();
    },

    /**
    *   Initialize any variables needed, meaning mainly "wrap elements with jQuery."
    *
    *   @method initVariables
    *   @return {undefined}
    */
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

        // Click handler for anything that should invoke the ModalHeaderFlow
        // When user is non-localized this will include all buttons like "Add to Cart", links to PDP
        // links to Category pages from the nav, etc. etc.
        // When user is localized, this is used on several pages
    },
});

// Pages are built like classes, but they don't return themselves.
// They instantiate themselves ondomready instead!
$(function() {
    var page = new Global();
});
