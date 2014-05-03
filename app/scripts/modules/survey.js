'use strict';

var $ = require('jquery');
var _ = require('lodash');


module.exports = function(){

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
        console.log('woot');
        this.init();

        this.isInit = true;
    };

    SurveyController.prototype = {
        constructor: SurveyController,

        /**
        *   Initialize any variables needed, meaning mainly "wrap elements with jQuery."
        *
        *   @method initVariables
        *   @return {undefined}
        */
        initVariables: function() {
            this.$form                   = $('.form-survey');
            this.$inputs                 = this.$form.find('label');
            this.$selectedItems          = this.$form.find('input:checked');
            this.$surveyFormContainer    = $('.survey-form-container');
            this.$surveySummaryContainer = $('.survey-form-summary-container');
            this.isFormValid             = false;
        },

        /**
        *   Initialize this module
        *
        *   @method init
        *   @return {undefined}
        */
        init: function() {
            console.log('woot survey');
            this.initVariables();
            this.initEvents();
        },

        /**
        *   Initialize events and event listeners.
        *
        *   @method initEvents
        *   @return {undefined}
        */
        initEvents: function() {
            this.$form.on('click', this.$inputs, this.onFormUpdate);
        },


        validateForm: function() {

        },

        onFormUpdate: function() {

            console.log(this.$selectedItems);
            if(this.$selectedItems.length >= 4 ){
                event.preventDefault();
            } else {
                this.validateForm();
            }
        },

        sendForm: function() {

        },

        updateView: function() {

        },

    };

    $(function() {
        var component = new SurveyController();
    });
};
