(function () {

    function findAxe(data, nameEnding)  {
        console.log("findAxe", data);
        var attachments = [];
        if (data.testStage) {
            attachments = findAxeInSteps(data.testStage, attachments, nameEnding);
        }
        return attachments;
    };

    function findAxeInSteps(step, attachments, nameEnding)  {
        attachments = [...attachments, ...step.attachments.filter(function (a) {
            return a.name.endsWith(nameEnding);
        })];
        step.steps.forEach(substep => attachments = [...attachments, ...findAxeInSteps(substep, attachments, nameEnding)]);
        return attachments;
    };

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
        template: function (data) {
            console.log(data);
            console.log(this);
            return '<div class="axe-report-view">HIIIIIIIIIIIERRERERER</div>';
        },
        onRender: function () {
            console.log("onRender", this.options);
            this.renderAxeReportView(this.options);
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
            console.log("renderAxeReportView", data);
            this.showChildView(
                'subView',
                new AxeReportView(data),
            );
        },
    });

    var AxeReportView = Backbone.Marionette.View.extend({
        className: 'pane__section',
        initialize: function (options) {
            this.axeReport = options;
        },
        templateContext: function () {
            return {
                axeReport: this.axeReport,
            };
        },
        template: function (data) {
            console.log("AxeReportView render", data);
            if (!data.axeReport) {
                return '';
            }

            return (
                '<iframe id="axeReportIframe" src="plugin/seleniumToolkit-axe-viewer/index.html?file=../../'+data.axeReport.sourceUrl+'" width="100%" style="border:none;"></iframe>'

            );
        },
        onRender: function () {
            const waitForIframe = () => {
                const iframe = document.getElementById("axeReportIframe");

                if (!iframe) {
                    requestAnimationFrame(waitForIframe);
                    return;
                }

                // Funktion zur Anpassung der Höhe
                function adjustIframeHeight() {
                    iframe.style.height = iframe.contentWindow.document.documentElement.scrollHeight + "px";
                }

                // Anpassung beim Laden und Überwachung der Höhe
                iframe.onload = function () {
                    adjustIframeHeight();

                    // Observer zur Überwachung von Änderungen im iframe-Inhalt
                    const observer = new iframe.contentWindow.MutationObserver(adjustIframeHeight);

                    observer.observe(iframe.contentWindow.document.body, {
                        childList: true,       // überwacht hinzugefügte/entfernte Knoten
                        subtree: true,         // überwacht alle Nachfahren
                        attributes: true,      // überwacht Attributänderungen
                        characterData: true    // überwacht Textänderungen
                    });
                };
            };

            requestAnimationFrame(waitForIframe);
        }
    });
    allure.api.addAttachmentViewer('application/vnd.allure.axe.view', {
        View: AttachmentView,
        icon: 'fa fa-eye',
    });
})();
