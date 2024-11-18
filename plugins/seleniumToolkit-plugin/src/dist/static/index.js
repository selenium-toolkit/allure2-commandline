var sboxLoaded = false;
var stk_data_folder = "selenium-toolkit-data";

const text ={
    'license.company': "Company",
    'title': "Selenium Toolkit License Information",
    'license.parallelization': "Max parallel Sessions",
    'license.mobile': "Mobile Support",
    'license.exp': "Expiration",
    'license.neoload': "Neoload Support",
    'license.reportingAdvanced': "Advanced Reporting",
    'license.screenshotAdvanced': "Advanced Screenshot",
    'license.multipleBrowser': "Multiple Browser allowed",
    'support.email': "Send Support-Requests to",
    'license.maxTestCase': "Maximal allowed Testcases",
}

const ignoredFields = [
    "license.exp.boolean",
]

const getText = function(key) {
    let transateText = text[key];
    return transateText ? transateText :'['+key+']';
}

const getCode = function(value){
    var code = '';
    if(value === 'true' || value === 'false'){
        code =
            '<label class="switch">\n' +
            '  <input type="checkbox" '+ (value ==='true'? 'checked':'')+' disabled>\n' +
            '  <span class="slider round"></span>\n' +
            '</label>'
    } else {
        code = '<input type="text" value="'+ value+'" disabled />'
    }
    console.log(code);
    return code;
}



var ToolkitTabModel = Backbone.Collection.extend({
    url: 'data/'+stk_data_folder+'/toolkit.json'
})

var FileDataModel = Backbone.Collection.extend({
    url: 'data/' + stk_data_folder + '/fileList.json'
});


class ToolkitLayout extends allure.components.AppLayout {

    initialize() {
        this.model = new ToolkitTabModel();
        this.fileDataModel = new FileDataModel();
    }

    loadData() {
        return Promise.all([this.model.fetch(), this.fileDataModel.fetch()]);
    }

    /*getLogData(){
        return new Promise(resolve => {
            fetch('data/log.csv')
                .then(response => response.text()).then(data => resolve(data));
        });
    }*/

    /*getContentView() {
        return this.getLogData().then(logdata =>{
            return new ToolkitView({items: this.model.models, logdata: logdata});
        });

    }*/
    getContentView() {
        return new ToolkitView(
            {
                items: this.model.models,
                fileData: this.fileDataModel.models.map(model => model.toJSON())
            }
        );
    }
}

const toolkitTemplate = function (data) {
    console.debug(data)
    let html = '<div class="toolkitDiv"><h3 class="pane__title"><span class="title">'+getText('title')+'</span></h3>';
    html += getToolkitDataInfoHtml(data);
    html += getFileInfoHtml(data);
    html +='</div>';
    return html;
}

var getToolkitDataInfoHtml = function(data){
    var html ='<div class="container">';
    for (var item of data.items) {
        for (var key of Object.keys(item.attributes)) {
            console.log(key, item.attributes[key])
            if(!ignoredFields.includes(key)
                && item.attributes[key] != null
                && item.attributes[key] != ""
                && !(key == "license.maxTestCase" && item.attributes[key] == 0)
            ){
                html += '<div class="row">' +
                    '    <div class="col">' +
                    getText(key) +
                    '    </div>' +
                    '    <div class="col">' +
                    getCode(item.attributes[key]) +
                    '    </div>' +
                    '  </div>'
            }
        }
    }
    html +='</div>';
    return html;
}
var getFileInfoHtml = function(data){
    var html ='<div class="container">';
    html +='<h3 class="pane__title"><span class="title">Files</span></h3>';
    for (var item of data.fileData) {
        html += '<div><a href="'+item.link+'" target="_blank">'+item.name+'</a></div>';
    }
    html +='</div>';
    return html;
}

var ToolkitView = Backbone.Marionette.View.extend({
    template: toolkitTemplate,

    render: function () {
        this.$el.html(this.template(this.options));
        return this;
    }
})
allure.api.addTab('toolkitTab', {
    title: 'Toolkit Tab', icon: 'toolkitIcon',
    route: 'toolkitTab',
    onEnter: (function () {
        return new ToolkitLayout()
    })
});




var SboxTabModel = Backbone.Collection.extend({
    url: 'data/toolkit.json'
})

class SboxLayout extends allure.components.AppLayout {

    initialize() {
        this.model = new SboxTabModel();
    }

    loadData() {
        return this.model.fetch();
    }

    getContentView() {
        return new SboxView({items: this.model.models});
    }
}

const sboxTemplate = function (data) {
    html = '<h3 class="pane__title">SeleniumBox</h3>';
    return html;
}

var SboxView = Backbone.Marionette.View.extend({
    template: sboxTemplate,

    render: function () {
        this.$el.html(this.template(this.options));
        return this;
    }
})

const loadSbox = function (){
    allure.api.addTab('sBoxTab', {
        title: 'SeleniumBox Tab', icon: 'fa fa-trophy',
        route: 'sBoxTab',
        onEnter: (function () {
            return new SboxLayout()
        })
    });
}




new ToolkitLayout().initialize();

(function () {
    // Funktion, die ausgeführt wird, wenn die gesuchten Elemente gefunden werden
    function handleWidgetTitle(iteration = 0, max = 10) {
        setTimeout(function () {
            var widgetTitleElement = document.querySelector(".widget__title");
            if (widgetTitleElement) {
                widgetTitleElement.innerHTML = widgetTitleElement.innerHTML.replaceAll("Allure", "STK");
            } else {
                if (iteration < max) {
                    handleWidgetTitle(iteration + 1);
                }
            }
        }, 10);
    }
    function handleElements() {
        var element = document.querySelector('[data-tooltip="Change language"]');
        if (element) {
            element.innerHTML = "<span class='ligh-mode-toggle'><span class='icon'></span></span>";
        }
        var titleElement = document.querySelector(".side-nav__brand");
        if (titleElement) {
            titleElement.href = "http://www.selenium-toolkit.com";
            titleElement.target = "_blank";
            titleElement.innerHTML = " <span class=\"side-nav__brand-text\">STK</span>";
        }
        handleWidgetTitle();
    }

// MutationObserver-Callback-Funktion
    var observerCallback = function(mutationsList, observer) {
        // Überprüfe, ob das gesuchte Element jetzt vorhanden ist
        if (document.querySelector('[data-tooltip="Change language"]')) {
            handleElements(); // Führe die gewünschte Aktion aus
            observer.disconnect(); // Stoppe den Observer, wenn nicht mehr benötigt
        }
    };

// Konfiguration des Observers: beobachte das Hinzufügen von Child-Elementen zum body (und Sub-Bäumen)
    var observerOptions = {
        childList: true,
        subtree: true
    };

// Erstelle eine neue Instanz des MutationObserver mit der Callback-Funktion
    var observer = new MutationObserver(observerCallback);

// Beginne mit der Beobachtung des Dokuments
    observer.observe(document.body, observerOptions);

    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("icon")) {
            // do stuff
            document.body.classList.toggle('is-dark');
        }
    });
    window.addEventListener(
        "hashchange",
        () => {
            var observer = new MutationObserver(observerCallback);
            observer.observe(document.body, observerOptions);
        },
        false,
    );
})();
