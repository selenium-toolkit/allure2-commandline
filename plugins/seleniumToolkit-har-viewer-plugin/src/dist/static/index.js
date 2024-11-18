(function () {

    function findHar(data)  {
        var attachments = [];
        if (data.testStage) {
            attachments = findHarInSteps(data.testStage, attachments);
        }
        return attachments;
    };

    function findHarInSteps(step, attachments)  {
        attachments = [...attachments, ...step.attachments.filter(function (a) {
            return a.name.endsWith(".har");
        })];
        step.steps.forEach(substep => attachments = [...attachments, ...findHarInSteps(substep, attachments)]);
        return attachments;
    };

    var settings = allure.getPluginSettings('har', {});

    var HarView = Backbone.Marionette.View.extend({
        className: 'pane__section',
        events: {
        },
        templateContext: function () {
        },
        template: function (data) {
            var hars = findHar(data);
            if(hars.length <1){
                return '';
            }
            var content = '<h3 class="pane__section-title">HAR</h3>';
            hars.forEach((har, index) => {
                content = content +
                    '<!-- Button trigger modal -->\n' +
                    '<button type="button" class="btn btn-primary harModalButton" style="margin-bottom: 5px;" data-toggle="modal" data-target="#exampleModal'+har.name.replaceAll('.','')+index+'">\n' +
                    '  Open '+har.name+' in HAR-Viewer\n' +
                    '</button>\n' +
                    '\n' +
                    '<!-- Modal -->\n' +
                    '<div class="modal fade" id="exampleModal'+har.name.replaceAll('.','')+index+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n' +
                    '  <div class="modal-dialog" style="max-width: 95%;height: 90%;" role="document">\n' +
                    '    <div class="modal-content" style="height: 100%;">\n' +
                    '      <div class="modal-body" style="max-height: 100%;">\n' +
                    '           <iframe src="plugin/seleniumToolkit-har-viewer/index.html?file=../../data/attachments/'+har.source+'" width="100%" height="100%"></iframe>\n'+
                    '      </div>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '</div>';
            })
            return content;
        },
     
    });
    allure.api.addTestResultBlock(HarView, {position: 'before'});
})();
