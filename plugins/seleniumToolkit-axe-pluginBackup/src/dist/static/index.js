(function () {

    function findImage(data, nameEnding) {
        if (data.testStage && data.testStage.attachments) {
            var matchedImage = data.testStage.attachments.filter(function (attachment) {
                return attachment.name.endsWith(nameEnding);
            })[0];
            if (matchedImage) {
                return 'data/attachments/' + matchedImage.source;
            }
        }
        return null;
    }


    var TestResultView = Backbone.Marionette.View.extend({
        regions: {
            subView: '.axe-report-view',
        },
        template: function () {
            return '<div class="axe-report-view"></div>';
        },
        onRender: function () {
            var data = this.model.toJSON();
            var axeReport = findImage(data, '.axe.json');
            if (!axeReport || testType.value !== 'screenshotDiff') {
                return;
            }
            this.showChildView(
                'subView',
                new AxeReportView({
                    axeReport: axeReport,
                }),
            );
        },
    });
    var ErrorView = Backbone.Marionette.View.extend({
        templateContext: function () {
            return this.options;
        },
        template: function (data) {
            return '<pre class="axe-report-error">' + data.error + '</pre>';
        },
    });
    var AttachmentView = Backbone.Marionette.View.extend({
        regions: {
            subView: '.axe-report-view',
        },
        template: function () {
            return '<div class="axe-report-view"></div>';
        },
        onRender: function () {
            jQuery
                .getJSON(this.options.sourceUrl)
                .then(this.renderAxeReportView.bind(this), this.renderErrorView.bind(this));
        },
        renderErrorView: function (error) {
            console.log(error);
            this.showChildView(
                'subView',
                new ErrorView({
                    error: error.statusText,
                }),
            );
        },
        renderAxeReportView: function (data) {
            this.showChildView(
                'subView',
                new AxeReportView({
                    diffImage: data.diff,
                    actualImage: data.actual,
                    expectedImage: data.expected,
                }),
            );
        },
    });

    var AxeReportView = Backbone.Marionette.View.extend({
        className: 'pane__section',
        initialize: function (options) {
            this.diffImage = options.axeReport;
        },
        templateContext: function () {
            return {
                axeReport: this.axeReport,
            };
        },
        template: function (data) {
            if (!data.axeReport) {
                return '';
            }

            return (
                '<h3 class="pane__section-title">Axe Report</h3>'

            );
        },
    });
    allure.api.addTestResultBlock(TestResultView, { position: 'before' });
    allure.api.addAttachmentViewer('application/vnd.allure.axe.view', {
        View: AttachmentView,
        icon: 'fa fa-eye',
    });
})();
