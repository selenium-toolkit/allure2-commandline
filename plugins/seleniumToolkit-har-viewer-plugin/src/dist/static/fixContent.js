(
    function () {
        function fixContent(){
            const dragDropArea = document.evaluate("//*[contains(text(), 'Drag and drop HAR file here, or click to select file')]", document, null, XPathResult.ANY_TYPE, null ).iterateNext();
            if(dragDropArea && dragDropArea != null && document.seleniumToolkitHarErrorDisplayed == false){
                const div = document.createElement("div");
                const span = document.createElement("span");
                span.innerText = "Har File is Empty"
                div.append(span);
                div.style.margin = "1rem";
                div.style.color = "#7f8892";
                div.style.display = "flex";
                div.style.flexDirection = "column";
                div.style.alignItems = "center";
                div.style.fontWeight = "bold";
                dragDropArea.parentNode.append(div);
                dragDropArea.parentNode.onclick=()=>{ return false}
                dragDropArea.style.display = "none"
                const fileInputArea = document.evaluate("//*[contains(text(), 'OR add HAR file URL in the below input box')]", document, null, XPathResult.ANY_TYPE, null ).iterateNext();
                fileInputArea.parentNode.style.display = "none"
                document.seleniumToolkitHarErrorDisplayed = true;
            }
        }
        document.seleniumToolkitHarErrorDisplayed = false;
        setTimeout(fixContent, 0);
        setTimeout(fixContent, 1000);
        setTimeout(fixContent, 2000);
        setTimeout(fixContent, 5000);
    }

)();