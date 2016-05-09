var EbeecareEmbedPosition = "1,3,2";
var EbeecareEmbedBookingBBGColor = "#1f7eb7";
var EbeecareEmbedBookingBTextColor = "rgb(255, 255, 255)";
//EbeecareEmbedLink = "https://www.ebeecare.com/booking1";
//EbeecareEmbedLink = "http://192.168.0.194:3000/embed/booking1";
var EbeecareEmbedLink = "http://staging.ebeecare.com/booking1?widget=true&organization=" + EBEECARE_PARTNER_ID;
//var EbeecareEmbedLink = "http://www.sina.com.cn/?widget=true&organization=" + EBEECARE_PARTNER_ID;
var EbeecareEmbedWidgetTitle = "Ebeecare booking";
var EbeecareEmbedWidgetColor = "rgb(0, 0, 0)";
var EbeecareEmbedWidgetBGColor = "#ff9a00";
var EbeecareEmbedWidgetLeft = "right";
var EbeecareEmbedPageName = "'getso'";
var EbeecareStaticFilesUrl = "http://widget.ebeecare.com/";

var SOE = function() {
    this.bookingPos = 1;
    this.phonePos = 2;
    this.link;
    this.btLink;
    this.testLink;
    this.code = "";
    this.bookingCode;
    this.phoneCode;
    this.onclickProperty = 'onclick="soe.toggleDiv(';
    this.onclickProperty += "'EBKWidgetContent','EBKWidgetToggle')" + '"';
    this.bookingBBGColor;
    this.bookingBTextColor;
    this.widgetTitle;
    this.widgetColor;
    this.widgetBGColor;
    this.widgetLeft = "left";
    this.eaid;
    this.pageName = "";
    this.WidgetBoxStyle = "z-index:10000001;text-align: left;font-family: Tahoma, HelveticaNeue, Arial;bottom:0px; margin:0px;padding: 0px; width: 260px; font-size:14px; border: solid 1px #FFF; background-color: #FFF; -webkit-border-top-left-radius: 4px; -webkit-border-top-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px;-webkit-box-shadow: 0px 3px 5px 1px rgba(0,0,0,0.4);box-shadow: 0px 3px 5px 1px rgba(0,0,0,0.4)";
    this.mWidgetBoxStyle = "font-family: Tahoma, HelveticaNeue, Arial;margin: 0px auto;z-index: 10000001;padding: 0px;width: 260px;border: 1px solid #FFF;background-color: #FFF;border-top-left-radius: 4px;border-top-right-radius: 4px;border-bottom-right-radius: 4px;border-bottom-left-radius: 4px;-webkit-box-shadow: 0 0px 9px -1px #000;box-shadow: 0 0px 9px -1px #000;opacity: 1;font-size:14px;top:25%;";
    this.widgetMeinHeadStyle = "padding:0px; margin:0.8em auto;font-size:1em; color:#161616;  font-weight:bold;   display:block;  width:40%;";
    this.displayCount = 3;
    this.postCode;
    this.isMobileView = false;
    this.isLive = true;
    this.divMobileTitle = "";
    this.widgetHeadh5Style;
    this.emptyValue = "''";
    this.isLightBox = false;
    this.calcWindowLeft = (this.getWindowWidth() - 775) / 2;
    this.winHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
    this.minWidthValue = 775;
    this.isWidget = false;
    this.contactUsDiv = "";
    this.prevTop = 0;
    this.prevLeft = 0;
    this.prevHtml = "";
    this.oldScreenCssPixelRatio = -1;
    this.runCode = false;
    this.isLandScape = false;
    this.devicepixelratio = 1;
    this.screenwidth_td = null;
    this.screenwidth_swh = null;
    this.delayLoading = false
};
SOE.prototype.getBookingCode = function() {
    if (this.bookingPos != -1) {
        var bookingButtonStyle = "background-color:" +
            (this.bookingBBGColor == "" ? "#FE9E0C" : this.bookingBBGColor) +
            ";-webkit-border-radius: 4px; border-radius: 4px; color:" +
            (this.bookingBTextColor == "" ? "#000000" : this.bookingBTextColor) +
            "; cursor: pointer;font-size: 1em;font-weight: bold; margin: 0 auto; padding: 0em;width: 100%;text-align:center;-webkit-box-shadow: 0px 1px 2px #000 ;box-shadow: 0px 1px 2px #000;line-height:3em;height:3em;";
        this.bookingCode =
            '<div id="SOBookingDiv" style="display:block;padding:0 0.7em 0 0.7em; margin:0px 0px 1em 0px;">\
        <div style="width:100%;;margin-bottom:0.4em;">\
        <div style="float:right;width:56%">\
    <img src=' + '"' + EbeecareStaticFilesUrl  +'mm.png" style="max-width: 100%; height: auto;"></div>\
        <div style="float:left;margin-top:30px;width:40%;display:inline-block">\
        <p style="' + this.widgetMeinHeadStyle.replace("margin:0.8em auto;", "margin:" + (this.isMobileView ? "1em auto 0 auto;" : "0.8em auto 0.567em auto;")) + '"> ' +
            "Looking" + "</p>" +
            '<p style="' + this.widgetMeinHeadStyle.replace("margin:0.8em auto;", "margin:" + (this.isMobileView ? "1em auto 0 auto;" : "0.8em auto 0.567em auto;")) + '"> ' +
            this.decodeToHTML("for a") + "</p>" +
            '<p style="' + this.widgetMeinHeadStyle.replace("margin:0.8em auto;", "margin:" + (this.isMobileView ? "1em auto 0 auto;" : "0.8em auto 0.567em auto;")) + '"> ' +
            this.decodeToHTML("nurse?") + "</p>" +
            '<div style="padding:0px; margin-top:10px;margin-left:10px; width:100%;">' +
            '<div onclick="soe.toggleLightBox(' + this.pageName + ')" style="text-decoration:none;">\
        <div id="SOBookingButton" style="' + bookingButtonStyle + '">' + "Book" + "</div></div>" +
            "</div>" + '<div style="clear:both;"></div></div></div></div>';
    }
};
SOE.prototype.setLightBoxCode = function(isParameterized) {
    var eleLB = document.getElementById("SOLightBox" + this.pageName.replace(/'/g, ""));
    if (eleLB == null || eleLB === "undefined") {
        eleLB = document.createElement("div");
        eleLB.id = "SOLightBox" + this.pageName.replace(/'/g, "");
        eleLB.Name = "SOLightBox";
        eleLB.style.top = "-10000px";
        eleLB.style.position = "fixed";
        eleLB.style.padding = "0";
        eleLB.style.margin = "0";
        eleLB.innerHTML = '<div id="SOInnerLightBox">' + this.getIframeHTMLCode(this.link, isParameterized) + "</div>";
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(eleLB)
    }
};

SOE.prototype.getWidgetCode = function() {
    var mCalcLeft = this.calcWindowLeft + 250;
    var fontsizeOpenClose = "1.19em";
    var mMarginTop = "";
    var counterLeft = "left";
    var topBottom = "bottom";
    var mLeftValue = "";
    var counterTopBottom = "top";
    var mWidgetHeadStyle = (this.isLive ? "position:fixed;width: 100%;bottom:0;left:0em; " : "position:absolute;width: 291px;bottom:33%;") + " padding: 0px;margin: 0px; height: 2.8em; -webkit-border-top-left-radius: 4px; -webkit-border-top-right-radius: 4px;border-top-left-radius: 4px; border-top-right-radius: 4px;font-family: Tahoma, HelveticaNeue, Arial;font-size:14px;-webkit-box-shadow: 0 -3px 9px -3px #000;box-shadow: 0 -3px 9px -3px #000;z-index: 10000;background-color:" +
        (this.widgetBGColor == "" ? "#333" : this.widgetBGColor) + ";";
    var openCloseHolderClass = "padding: 0px; margin: 0px;width: 1.3em; height: 1.3em;line-height:1.3em;position: absolute;right: 0.8em;top: 0.5em; -webkit-border-radius: 50%; border-radius: 50%;  background-color: #FFF;  cursor: pointer; text-align: center;  font-family: Tahoma, HelveticaNeue, Arial;color: #333;font-size: " + fontsizeOpenClose + ";font-weight: bold;";
    if (this.isMobileView) {
        this.WidgetBoxStyle = this.WidgetBoxStyle.replace("-webkit-border-top-left-radius: 4px; -webkit-border-top-right-radius: 4px;border-top-left-radius: 4px; border-top-right-radius: 4px;",
            "-webkit-border-radius:4px; border-radius: 4px;");
        if (!this.isLive)
            mMarginTop = this.widgetLeft == "left" ? "margin-top:1.8em;" : "margin-top:-0.6em;";
        else {
            mMarginTop = this.widgetLeft == "left" ? "margin-top:1.3em;" : "";
            openCloseHolderClass = openCloseHolderClass.replace("line-height:1.3em;", "line-height:1.14em;")
        }
        this.mWidgetBoxStyle += this.isLive ? "left:" + mCalcLeft + "px;" : "left:26%;"
    } else
        this.WidgetBoxStyle = this.WidgetBoxStyle.replace("-webkit-border-radius:4px; border-radius: 4px;", "-webkit-border-top-left-radius: 4px; -webkit-border-top-right-radius: 4px;border-top-left-radius: 4px; border-top-right-radius: 4px;");
    var widgetHeadStyle = "bottom:0;padding: 0px;margin: 0px; width: 100%; height: 2.8em; position: relative; -webkit-border-top-left-radius: 4px; -webkit-border-top-right-radius: 4px;border-top-left-radius: 4px; border-top-right-radius: 4px;";
    this.widgetHeadh5Style = "padding-left:0.9em; margin:0px;font-size:1em;  font-weight:bold;line-height:2.8em;text-transform: none;letter-spacing: 0px;";

    this.code = '<a href="javascript:void(1);" ' + this.onclickProperty + ' style="text-decoration:none;">\
    <div id="EBKWidgetTitle" style="' + widgetHeadStyle + "background-color:" + (this.widgetBGColor == "" ? "#333" : this.widgetBGColor) + ';">\
    <div align="left" style="float:left;width:80%"><img src=' +'"' + EbeecareStaticFilesUrl  +  'ebk2.png" ></div>' +
        '<div id="EBKWidgetToggle" style="' + openCloseHolderClass + '" >+</div></div></a>';
    this.code += '<div id="EBKWidgetContent" style="height:100%;display:none;margin-top:0.7em;box-sizing:content-box;">';
    this.contactUsDiv = '<div align="left" style="float:left;width:80%"><img src="ebk2.png" >' +
        '</div><div style="' + openCloseHolderClass +
        '" >+</div>';
    this.divMobileTitle = mLeftValue + mWidgetHeadStyle + 'display:none;"';
    if (this.bookingPos == 1)
        this.code += this.bookingCode + "</div>";
    this.setLightBoxCode()
};
SOE.prototype.setWidgetHTML = function() {
    this.getBookingCode();
    this.getWidgetCode();
    var ele = document.getElementById("EBKWidget");
    if (ele == null || ele === "undefined") {
        ele = document.createElement("div");
        ele.id = "EBKWidget"
    }
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(ele);
    if (soe.getIEVersion() < 9)
        try {
            this.isMobileView ? ele.style.position = "absolute" : ele.style.position = "fixed";
            if (this.widgetLeft == "left")
                ele.style.left = "90px";
            else
                ele.style.right = "90px";
            ele.style.fontSize = "14px";
            ele.style.zIndex = "10000";
            ele.style.fontFamily = "Tahoma, HelveticaNeue, Arial";
            ele.style.padding = "0px";
            ele.style.width = "260px";
            ele.style.border = "solid 1px Gray";
            ele.style.backgroundColor = "#FFF";
            if (this.isMobileView) {
                ele.style.margin = "0px auto";
                ele.style.top = "25%";
                ele.style.opacity = "1"
            } else {
                ele.style.textAlign = "left";
                ele.style.margin = "0px";
                ele.style.bottom = "0px"
            }
        } catch (ex) {}
    else
        ele.setAttribute("style", (this.isMobileView ? "position:absolute;" : "position:fixed;" + this.widgetLeft +
            ":90px;") + (this.isMobileView ? this.mWidgetBoxStyle : this.WidgetBoxStyle));
    if (this.isMobileView) {
        ele.innerHTML = this.code;
        var bgEle = document.createElement("div");
        bgEle.id = "EbkWidgetBackground";
        bgEle.setAttribute("style", "position:fixed;top:0px;right:0px;bottom:0px;left:0px;background-color:black;opacity:0.4;display:none;z-index:10000");
        body.insertBefore(bgEle, ele);
        bgEle = document.createElement("div");
        if (this.isLive) {
            bgEle.id = "mEBKWidgetTitle";
            bgEle.setAttribute("style", this.divMobileTitle);
            bgEle.setAttribute("onclick",
                this.onclickProperty.replace("onclick=", "").replace(/"/g, ""));
            bgEle.innerHTML = this.contactUsDiv;
            body.insertBefore(bgEle, ele);
            bgEle = document.createElement("div");
            bgEle.id = "SOmarginDivForMobile";
            bgEle.innerHTML = "&nbsp;";
            bgEle.setAttribute("style", "height:4em;");
            body.appendChild(bgEle)
        }
        document.getElementById("EBKWidgetTitle").style.display = "none";
        document.getElementById("mEBKWidgetTitle").style.display = "block";
        document.getElementById("EBKWidget").style.display = "none";
        document.getElementById("EBKWidget").style.width = "80%";
        document.getElementById("EBKWidget").style.left = "10%";
        setTimeout(function() {
            soe.processOrientationChange(true)
        }, 200)
    } else
        ele.innerHTML = this.code;
    //this.TransitionCode(ele)
};

SOE.prototype.setButtonHTML = function(isParameterized) {
    this.getBookingCode();
    var elemID = "SOLightBox" + this.pageName.replace(/'/g, "");
    var elem = document.getElementById(elemID);
    if (elem)
        elem.parentNode.removeChild(elem);
    this.setLightBoxCode(isParameterized)
};
SOE.prototype.toggleDiv = function(id, obj, hideOnly) {
    var elem = document.getElementById(id);
    if (elem) {
        var widgetDiv = id == "EBKWidgetContent" ? true : false;
        if ((elem.style.display == "none" || (elem.style.display == "" || elem.style.display == "undefined")) && hideOnly == null) {
            elem.style.display = "block";
            if (widgetDiv) {
                if (this.isMobileView) {
                    document.getElementById("mEBKWidgetTitle").style.display = "none";
                    document.getElementById("EBKWidgetTitle").style.display = "block";
                    document.getElementById("EBKWidget").style.display = "block";
                    if (this.isLive) {
                        document.getElementById("EbkWidgetBackground").style.display =
                            "block";
                        window.scrollTo(0, 0)
                    }
                }
                if (obj != null)
                    document.getElementById(obj).innerHTML = "&#8211;"
            }
        } else {
            elem.style.display = "none";
            if (widgetDiv) {
                if (this.isMobileView) {
                    document.getElementById("EBKWidgetTitle").style.display = "none";
                    document.getElementById("mEBKWidgetTitle").style.display = "block";
                    document.getElementById("EBKWidget").style.display = "none";
                    if (this.isLive)
                        document.getElementById("EbkWidgetBackground").style.display = "none";
                    else
                        document.getElementById("mEBKWidgetTitle").style.bottom = "0%"
                }
                if (!this.isLightBox &&
                    !this.isMobileView)
                    this.TransitionCode(document.getElementById("EBKWidget"));
                if (this.prevHtml != "")
                    document.getElementById("EBKWidgetContent").innerHTML = this.prevHtml
            }
            if (obj != null)
                document.getElementById(obj).innerHTML = "+"
        }
    }
};
SOE.prototype.toggleLightBox = function(page) {
    var ieversion = soe.getIEVersion();
    if (this.isMobileView || ieversion < 9) {
        var ele = document.getElementById("SOI_" + page);
        if (ele)
            if (ele.getAttribute("data-mysrc") && this.delayLoading)
                window.open(ele.src = ele.getAttribute("data-mysrc").replace("em=1", "bt=1"));
            else
                window.open(ele.src.replace("em=1", "bt=1"));
        else {
            var allIfrm = document.querySelectorAll("[name*='EbeecareIframe_" + page + "']");
            for (i = 0; i < allIfrm.length; i++) {
                ele = allIfrm[i];
                if (ele.getAttribute("data-mysrc") &&
                    ele) {
                    if (ele.getAttribute("data-mysrc") && this.delayLoading)
                        window.open(ele.src = ele.getAttribute("data-mysrc").replace("em=1", "bt=1"));
                    else
                        window.open(ele.src.replace("em=1", "bt=1"));
                    break
                }
            }
        }
    } else {
        var divStyle;
        var id = "SOLightBox" + page;
        var div = document.getElementById(id);
        var node = document.getElementsByTagName("body")[0];
        if (this.delayLoading)
            soe.setIframeSrc();
        var blanketTop = 0;
        var blueBox = document.getElementById("BlueBox");
        if (blueBox != null)
            blueBox.style.minWidth = "769px";
        if (div.style.top.indexOf("-10000px") >
            -1) {
            var blanket = document.getElementById("SOBlanket");
            if (blanket == null || blanket == "undefined") {
                blanket = document.createElement("div");
                blanket.id = "SOBlanket";
                node.appendChild(blanket)
            }
            node.style.overflow = "hidden";
            this.isLightBox = true;
            this.toggleDiv("EBKWidgetContent", "EBKWidgetToggle", true);
            if (ieversion >= 9) {
                var blanketStyle = "height:100%; width:100%; left:0px;z-index:100000000;position:fixed;background-color:black;opacity:0.6;filter:alpha(opacity=60);top:0px;";
                blanket.setAttribute("style", blanketStyle)
            } else {
                blanket.style.height =
                    "100%";
                blanket.style.width = "100%";
                blanket.style.left = "0px";
                blanket.style.zIndex = "100000000";
                blanket.style.position = "fixed";
                blanket.style.backgroundColor = "black";
                blanket.style.opacity = "0.6";
                blanket.style.filter = "alpha(opacity=60)";
                blanket.style.top = "0px"
            }
            this.toggleDiv("SOBlanket", null);
            blanketTop = blanketTop + 5;
            var _width = this.getWindowWidth() - this.calcWindowLeft;
            _width = (_width < this.minWidthValue ? this.minWidthValue : _width) + "px";
            if (ieversion >= 9) {
                divStyle = "height:100%;display:block;left:" + this.calcWindowLeft +
                    "px;top:" + blanketTop + "px;width:" + _width + ";z-index:10000000001;position:fixed;overflow-y:auto";
                div.setAttribute("style", divStyle)
            } else {
                div.style.height = "100%";
                div.style.display = "block";
                div.style.left = this.calcWindowLeft + "px";
                div.style.top = blanketTop + "px";
                div.style.width = _width;
                div.style.zIndex = "10000000001";
                div.style.position = "fixed";
                div.style.overflowY = "auto"
            }
            var childEle = null;
            var childArr = div.children;
            for (var i = 0; i < childArr.length; i++)
                if (childArr[i].id == "SOInnerLightBox") {
                    childEle = childArr[i];
                    break
                }
            var height =
                "height:" + (childEle != null && (childEle.style && childEle.style.height) ? childEle.style.height : "");
            var topVal = "top:15px;";
            if (ieversion >= 9) {
                divStyle = divStyle.replace("width:" + _width + ";z-index:10000000001;position:fixed;overflow-y:auto", "width:775px;" + topVal).replace("height:100%", height) + "position:absolute;";
                divStyle = divStyle.replace("display:block;left:" + this.calcWindowLeft + "px;top:" + blanketTop + "px;", "");
                childEle.setAttribute("style", divStyle)
            } else {
                childEle.style.width = _width;
                childEle.style.zIndex = "10000000001";
                childEle.style.position = "fixed";
                childEle.style.overflowY = "auto";
                childEle.style.width = "775px";
                childEle.style.top = "15px";
                childEle.style.height = childEle != null && (childEle.style && childEle.style.height) ? childEle.style.height : "";
                childEle.style.position = "absolute";
                childEle.style.display = "block";
                childEle.style.top = blanketTop + "px"
            }
            document.getElementById("SOIC_" + page).style.right = "-9px";
            if (!soe.isLive) {
                document.getElementById("whiteDiv").style.zIndex = "9999";
                document.getElementById("prevDiv").style.zIndex = "9999"
            }
        } else {
            this.toggleDiv("SOBlanket",
                null);
            node.style.overflow = "auto";
            this.isLightBox = false;
            div.style.top = "-10000px";
            if (!soe.isLive) {
                document.getElementById("whiteDiv").style.zIndex = "10000002";
                document.getElementById("prevDiv").style.zIndex = "10000002"
            }
        }
    }
};
SOE.prototype.getIframeHTMLCode = function(_pageLink, isParameterized) {
    var h = "100%";
    var w = "90%";
    var minWidth = "0px";
    var ver = "";
    var style = "border:solid 3px #FFF;background-color:#FFF;";
    var pre = '<div id="SOIC_' + this.pageName.replace(/'/g, "") + '" style="padding: 0px; z-index:100000002; margin: 0px; width: 24px;height: 24px; background-color: #000; border: solid 2px #FFF;color:#FFF;font-size: 18px;font-weight: bold;font-family: tahoma; -webkit-border-radius: 14px; border-radius: 14px; position: absolute; top: 0px; text-align:center; line-height:23px;cursor:pointer;box-sizing:content-box;' + (this.isMobileView ?
        "right:-1.5em;" : "right:-17px;") + '" onclick="soe.toggleLightBox(' + this.pageName + ')">X</div>';
    pre = '<div align="center" style="height:100%; padding-top: 15px; padding-right: 15px; box-sizing: border-box; overflow: hidden;">' + pre;
    var post = "";
    if (!this.isMobileView) {
        h = "535px";
        w = "100%";
        minWidth = "769px";
        ver = "";
        style = "width:" + w + ";height:" + h + ";border-radius: 7px;-webkit-border-radius:7px;min-width:" + minWidth + ";" + style;
        post = "</div>"
    }
    var src = _pageLink;
    var iframesrc = "";
    var mysrc = "";
    if (this.isLive)
        mysrc = src;
    else
        iframesrc = src;
    var _code = pre + '<iframe src="' + iframesrc + '" id="SOI_' + this.pageName.replace(/'/g, "") + '" name="EbeecareIframe" data-mysrc="' + mysrc + '" frameborder="0" hspace="0" marginheight="0" marginwidth="0" height="' + h + '" width="' + w + '" vspace="0" style="' + style + '"></iframe>' + post;
    return _code
};
SOE.prototype.decodeToHTML = function(str) {
    if (str)
        str = str.replace(/&amp;/g, "&").replace(/&#92;/g, "\\").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&gt;/g, ">").replace(/&lt;/g, "<");
    return str
};

SOE.prototype.getWindowWidth = function() {
    var n_win = window.innerWidth ? window.innerWidth : 0;
    var n_docel = document.documentElement ? document.documentElement.clientWidth : 0;
    var n_result = n_win ? n_win : 0;
    return n_docel && (!n_result || n_result > n_docel) ? n_docel : n_result
};
var soe = new SOE;

SOE.prototype.TransitionCode = function(element) {
    if (element == null && this.isMobileView)
        return;
    /*
    var original = parseInt(element.style.bottom.replace("%", ""));
    var number = original - 30;
    element.style.bottom = number + "%";
    setTimeout(function() {
        soe.animateToTransition(number + 1, element, original)
    }, 33)*/
};


SOE.prototype.animateToTransition = function(newValue, element, original) {
    if (newValue < original) {
        element.style.bottom = newValue + "%";
        setTimeout(function() {
            soe.animateToTransition(newValue + 1, element, original)
        }, 33)
    } else
        element.style.bottom = original + "%"
};
SOE.prototype.processOrientationChange = function(updateWidth) {
    soe.setIframeSrc();
    var _width = soe.getWindowWidth();
    soe.calcWindowLeft = (_width - 775) / 2;
    _width = _width - soe.calcWindowLeft;
    if (!soe.isMobileView) {
        soe.calcWindowLeft = soe.calcWindowLeft < 0 ? 0 : soe.calcWindowLeft;
        _width = (_width < soe.minWidthValue ? soe.minWidthValue : _width) + "px";
        var f = document.querySelectorAll("*[id*='SOLightBox']");
        for (var i = 0; i < f.length; i++) {
            f[i].style.left = soe.calcWindowLeft + "px";
            f[i].style.width = _width
        }
    } else if (soe.isLive) {
        var ele =
            document.getElementById("EBKWidget");
        if (ele) {
            var _screenWidth = screen.width;
            var isLandScape = window.orientation == 90 || window.orientation == -90;
            var _windowInnerWidth = window.innerWidth;
            var screenCssPixelRatio = 1;
            var setMultiplier = false;
            var setDivider = false;
            if (window.outerWidth > 0 && _windowInnerWidth > 0)
                screenCssPixelRatio = (window.outerWidth - 8) / _windowInnerWidth;
            if (_windowInnerWidth > _screenWidth)
                setMultiplier = true;
            else if (_windowInnerWidth < _screenWidth)
                setDivider = true;
            var _width = 0.8 * _windowInnerWidth;
            ele.style.width =
                _width + "px";
            var mCalcFont = 14;
            var ceil = _windowInnerWidth == _screenWidth ? null : Math.ceil(screenCssPixelRatio);
            ceil = navigator.userAgent.match(/Windows Phone/i) ? null : ceil;
            if (_screenWidth <= 320) {
                if (ceil != null) {
                    mCalcFont = 14;
                    if (!isLandScape)
                        if (ceil < 2)
                            mCalcFont = 35;
                        else if (ceil <= 4 && ceil >= 2)
                        mCalcFont = 18;
                    else if (ceil > 8 && ceil <= 13)
                        mCalcFont = 9;
                    else if (ceil > 13)
                        mCalcFont = 3;
                    else if (setMultiplier) {
                        mCalcFont = mCalcFont * screenCssPixelRatio * 2.5;
                        mCalcFont = mCalcFont < 14 ? 14 : mCalcFont > 18 ? 18 : mCalcFont
                    } else {
                        if (setDivider) {
                            mCalcFont =
                                Math.round(mCalcFont * (screenCssPixelRatio >= 4.5 ? screenCssPixelRatio - Math.floor(screenCssPixelRatio) : screenCssPixelRatio));
                            mCalcFont = mCalcFont > 14 ? 14 : mCalcFont < 12 ? 12 : mCalcFont
                        }
                    } else if (ceil < 2)
                        mCalcFont = 20;
                    else if (ceil < 4 && ceil > 1)
                        mCalcFont = 16;
                    else if (ceil > 8 && ceil <= 13)
                        mCalcFont = 6;
                    else if (ceil > 13)
                        mCalcFont = 3;
                    else if (setMultiplier) {
                        mCalcFont = mCalcFont * screenCssPixelRatio * 1.5;
                        mCalcFont = mCalcFont < 14 ? 14 : mCalcFont > 16 ? 16 : mCalcFont
                    } else if (setDivider) {
                        mCalcFont = Math.round(mCalcFont * (screenCssPixelRatio >= 4.5 ? screenCssPixelRatio -
                            Math.floor(screenCssPixelRatio) : screenCssPixelRatio));
                        mCalcFont = mCalcFont > 11 ? 11 : mCalcFont < 7 ? 7 : mCalcFont
                    }
                }
            } else if (_screenWidth > 320 && _screenWidth <= 480) {
                mCalcFont = 15;
                if (ceil != null)
                    if (!isLandScape)
                        if (ceil < 2)
                            mCalcFont = 30;
                        else if (ceil < 4 && ceil > 1)
                    mCalcFont = 17;
                else if (ceil > 8 && ceil <= 13)
                    mCalcFont = 6;
                else if (ceil > 13)
                    mCalcFont = 3;
                else if (setMultiplier) {
                    mCalcFont = mCalcFont * screenCssPixelRatio * 1.5;
                    mCalcFont = mCalcFont < 15 ? 15 : mCalcFont > 17 ? 17 : mCalcFont
                } else {
                    if (setDivider) {
                        mCalcFont = Math.round(mCalcFont * (screenCssPixelRatio >=
                            4.5 ? screenCssPixelRatio - Math.floor(screenCssPixelRatio) : screenCssPixelRatio));
                        mCalcFont = mCalcFont > 11 ? 11 : mCalcFont < 7 ? 7 : mCalcFont
                    }
                } else {
                    if (ceil < 3 && ceil > 1)
                        mCalcFont = 17;
                    if (ceil > 5 && ceil <= 9)
                        mCalcFont = 5;
                    else if (ceil > 9)
                        mCalcFont = 4;
                    else if (setMultiplier) {
                        mCalcFont = mCalcFont * screenCssPixelRatio;
                        mCalcFont = mCalcFont < 14 ? 14 : mCalcFont > 17 ? 17 : mCalcFont
                    } else if (setDivider) {
                        mCalcFont = Math.round(mCalcFont * (screenCssPixelRatio >= 4.5 ? screenCssPixelRatio - Math.floor(screenCssPixelRatio) : screenCssPixelRatio));
                        mCalcFont = mCalcFont >
                            10 ? 10 : mCalcFont < 4 ? 4 : mCalcFont
                    }
                }
            } else if (_screenWidth > 480 && _screenWidth <= 800) {
                mCalcFont = 19;
                if (ceil != null)
                    if (!isLandScape) {
                        if (ceil < 3 && ceil > 1)
                            mCalcFont = 24;
                        if (ceil > 5 && ceil <= 9)
                            mCalcFont = 6;
                        else if (ceil > 9)
                            mCalcFont = 4;
                        else if (setMultiplier) {
                            mCalcFont = mCalcFont * screenCssPixelRatio;
                            mCalcFont = mCalcFont < 19 ? 19 : mCalcFont > 21 ? 21 : mCalcFont
                        } else if (setDivider) {
                            mCalcFont = Math.round(mCalcFont * (screenCssPixelRatio >= 4.5 ? screenCssPixelRatio - Math.floor(screenCssPixelRatio) : screenCssPixelRatio));
                            mCalcFont = mCalcFont > 11 ? 11 :
                                mCalcFont < 5 ? 5 : mCalcFont
                        }
                    } else {
                        if (ceil < 3 && ceil > 1)
                            mCalcFont = 14;
                        if (ceil > 5 && ceil <= 9)
                            mCalcFont = 4;
                        else if (ceil > 9)
                            mCalcFont = 3;
                        else if (setMultiplier) {
                            mCalcFont = mCalcFont * screenCssPixelRatio;
                            mCalcFont = mCalcFont < 17 ? 17 : mCalcFont > 20 ? 20 : mCalcFont
                        } else if (setDivider) {
                            mCalcFont = Math.round(mCalcFont * (screenCssPixelRatio >= 4.5 ? screenCssPixelRatio - Math.floor(screenCssPixelRatio) : screenCssPixelRatio));
                            mCalcFont = mCalcFont > 10 ? 10 : mCalcFont < 5 ? 5 : mCalcFont
                        }
                    }
            }
            if (updateWidth) {
                ele.style.fontSize = mCalcFont + "px";
                document.getElementById("mEBKWidgetTitle").style.fontSize =
                    mCalcFont + "px"
            }
        }
    }
};
SOE.prototype.orientationChange = function() {
    setTimeout(function() {
        soe.processOrientationChange(false)
    }, 200)
};
SOE.prototype.zoomChange = function() {
    var ele = document.getElementById("EBKWidget");
    if (ele) {
        var _screenWidth = screen.width;
        var isLandScape = window.orientation == 90 || window.orientation == -90;
        var _windowInnerWidth = window.innerWidth;
        var screenCssPixelRatio = 1;
        var setMultiplier = false;
        var setDivider = false;
        if (window.outerWidth > 0 && _windowInnerWidth > 0)
            screenCssPixelRatio = (window.outerWidth - 8) / _windowInnerWidth;
        if (_windowInnerWidth > _screenWidth)
            setMultiplier = true;
        else if (_windowInnerWidth < _screenWidth)
            setDivider = true;
        var mCalcFont = 14;
        if (soe.runCode && soe.oldScreenCssPixelRatio != screenCssPixelRatio) {
            soe.oldScreenCssPixelRatio = screenCssPixelRatio;
            var ceil = _windowInnerWidth == _screenWidth ? null : Math.ceil(screenCssPixelRatio);
            var _width = 0.8 * _windowInnerWidth;
            ele.style.width = _width + "px";
            if (_screenWidth <= 320) {
                if (ceil != null) {
                    mCalcFont = 14;
                    if (!isLandScape)
                        if (ceil < 2)
                            mCalcFont = 35;
                        else if (ceil <= 4 && ceil >= 2)
                        mCalcFont = 18;
                    else if (ceil > 8 && ceil <= 13)
                        mCalcFont = 9;
                    else if (ceil > 13)
                        mCalcFont = 3;
                    else if (setMultiplier) {
                        mCalcFont = mCalcFont *
                            screenCssPixelRatio * 2.5;
                        mCalcFont = mCalcFont < 14 ? 14 : mCalcFont > 18 ? 18 : mCalcFont
                    } else {
                        if (setDivider) {
                            mCalcFont = Math.round(mCalcFont * (screenCssPixelRatio >= 4.5 ? screenCssPixelRatio - Math.floor(screenCssPixelRatio) : screenCssPixelRatio));
                            mCalcFont = mCalcFont > 14 ? 14 : mCalcFont < 12 ? 12 : mCalcFont
                        }
                    } else if (ceil < 2)
                        mCalcFont = 20;
                    else if (ceil < 4 && ceil > 1)
                        mCalcFont = 16;
                    else if (ceil > 8 && ceil <= 13)
                        mCalcFont = 6;
                    else if (ceil > 13)
                        mCalcFont = 3;
                    else if (setMultiplier) {
                        mCalcFont = mCalcFont * screenCssPixelRatio * 1.5;
                        mCalcFont = mCalcFont < 14 ? 14 :
                            mCalcFont > 16 ? 16 : mCalcFont
                    } else if (setDivider) {
                        mCalcFont = Math.round(mCalcFont * (screenCssPixelRatio >= 4.5 ? screenCssPixelRatio - Math.floor(screenCssPixelRatio) : screenCssPixelRatio));
                        mCalcFont = mCalcFont > 11 ? 11 : mCalcFont < 7 ? 7 : mCalcFont
                    }
                }
            } else if (_screenWidth > 320 && _screenWidth <= 480) {
                mCalcFont = 15;
                if (ceil != null)
                    if (!isLandScape)
                        if (ceil < 2)
                            mCalcFont = 30;
                        else if (ceil < 4 && ceil > 1)
                    mCalcFont = 17;
                else if (ceil > 8 && ceil <= 13)
                    mCalcFont = 6;
                else if (ceil > 13)
                    mCalcFont = 3;
                else if (setMultiplier) {
                    mCalcFont = mCalcFont * screenCssPixelRatio *
                        1.5;
                    mCalcFont = mCalcFont < 15 ? 15 : mCalcFont > 17 ? 17 : mCalcFont
                } else {
                    if (setDivider) {
                        mCalcFont = Math.round(mCalcFont * (screenCssPixelRatio >= 4.5 ? screenCssPixelRatio - Math.floor(screenCssPixelRatio) : screenCssPixelRatio));
                        mCalcFont = mCalcFont > 11 ? 11 : mCalcFont < 7 ? 7 : mCalcFont
                    }
                } else {
                    if (ceil < 3 && ceil > 1)
                        mCalcFont = 17;
                    if (ceil > 5 && ceil <= 9)
                        mCalcFont = 5;
                    else if (ceil > 9)
                        mCalcFont = 4;
                    else if (setMultiplier) {
                        mCalcFont = mCalcFont * screenCssPixelRatio;
                        mCalcFont = mCalcFont < 14 ? 14 : mCalcFont > 17 ? 17 : mCalcFont
                    } else if (setDivider) {
                        mCalcFont = Math.round(mCalcFont *
                            (screenCssPixelRatio >= 4.5 ? screenCssPixelRatio - Math.floor(screenCssPixelRatio) : screenCssPixelRatio));
                        mCalcFont = mCalcFont > 10 ? 10 : mCalcFont < 4 ? 4 : mCalcFont
                    }
                }
            } else if (_screenWidth > 480 && _screenWidth <= 800) {
                mCalcFont = 19;
                if (ceil != null)
                    if (!isLandScape) {
                        if (ceil < 3 && ceil > 1)
                            mCalcFont = 24;
                        if (ceil > 5 && ceil <= 9)
                            mCalcFont = 6;
                        else if (ceil > 9)
                            mCalcFont = 4;
                        else if (setMultiplier) {
                            mCalcFont = mCalcFont * screenCssPixelRatio;
                            mCalcFont = mCalcFont < 19 ? 19 : mCalcFont > 21 ? 21 : mCalcFont
                        } else if (setDivider) {
                            mCalcFont = Math.round(mCalcFont * (screenCssPixelRatio >=
                                4.5 ? screenCssPixelRatio - Math.floor(screenCssPixelRatio) : screenCssPixelRatio));
                            mCalcFont = mCalcFont > 11 ? 11 : mCalcFont < 5 ? 5 : mCalcFont
                        }
                    } else {
                        if (ceil < 3 && ceil > 1)
                            mCalcFont = 14;
                        if (ceil > 5 && ceil <= 9)
                            mCalcFont = 4;
                        else if (ceil > 9)
                            mCalcFont = 3;
                        else if (setMultiplier) {
                            mCalcFont = mCalcFont * screenCssPixelRatio;
                            mCalcFont = mCalcFont < 17 ? 17 : mCalcFont > 20 ? 20 : mCalcFont
                        } else if (setDivider) {
                            mCalcFont = Math.round(mCalcFont * (screenCssPixelRatio >= 4.5 ? screenCssPixelRatio - Math.floor(screenCssPixelRatio) : screenCssPixelRatio));
                            mCalcFont = mCalcFont >
                                10 ? 10 : mCalcFont < 5 ? 5 : mCalcFont
                        }
                    }
            }
            ele.style.fontSize = mCalcFont + "px";
            document.getElementById("mEBKWidgetTitle").style.fontSize = mCalcFont + "px"
        }
    }
};
(function() {
    if (document.querySelectorAll || document.querySelector)
        return;
    var style = document.createStyleSheet(),
        select = function(selector, maxCount) {
            var all = document.all,
                l = all.length,
                i, resultSet = [];
            style.addRule(selector, "*[id*='SOLightBox']");
            for (i = 0; i < l; i += 1)
                if (all[i].id === "SOLightBox") {
                    resultSet.push(all[i]);
                    if (resultSet.length > maxCount)
                        break
                }
            style.removeRule(0);
            return resultSet
        };
    document.querySelectorAll = function(selector) {
        return select(selector, Infinity)
    };
    document.querySelector = function(selector) {
        return select(selector,
            1)[0] || null
    }
})();
SOE.prototype.getIEVersion = function() {
    var ieversion = 999;
    if (navigator.appName == "Microsoft Internet Explorer") {
        var myNav = navigator.userAgent.toLowerCase();
        ieversion = myNav.indexOf("msie") != -1 ? parseInt(myNav.split("msie")[1]) : false
    }
    return ieversion
};
SOE.prototype.setButtonFrameToBottom = function() {
    var f = document.querySelectorAll("*[id*='SOLightBox']");
    for (var i = 0; i < f.length; i++) {
        f[i].style.top = "-10000px";
        var sibling = f[i].parentElement.children;
        var onclickProperty = "soe.toggleLightBox('" + f[i].id.replace("SOLightBox", "") + "')";
        for (var j = 0; j < sibling.length; j++)
            if (sibling[j].getAttribute("onclick") && sibling[j].getAttribute("onclick") == onclickProperty) {
                var child = sibling[j].querySelector("*[type='button']");
                if (child)
                    child.style.backgroundImage = "none";
                document.getElementsByTagName("body")[0].appendChild(f[i]);
                break
            }
    }
};
SOE.prototype.setIframeOnloadEvent = function() {
    var allIfrm = document.querySelectorAll("[name*='EbeecareIframe']");
    if (allIfrm.length > 0)
        for (var i = 0; i < allIfrm.length; i++)
            allIfrm[i].setAttribute("onload", "onIframeLoad(this)")
};
SOE.prototype.setIframeInitialView = function() {
    var allIfrm = document.querySelectorAll("[name*='EbeecareIframe']");
    if (allIfrm.length > 0)
        for (var i = 0; i < allIfrm.length; i++)
            if (allIfrm[i].parentNode.querySelectorAll("*[name='SOLoadingMessage']").length == 0) {
                allIfrm[i].style.display = "none";
                var cssElem = "",
                    head = document.head || document.getElementsByTagName("head")[0],
                    mCss = allIfrm[i].parentNode.offsetWidth <= 540;
                cssElem = ".SOLoadingMessage img#loadingImage{display:none;visibility:hidden;}.SOLoadingMessage #circle{display:inline-block;vertical-align:top;}.SOLoadingMessage .circle{background-color:#fff;float:left;" +
                    (mCss ? "height:9px;margin-right:11px;width:15px;" : "height:10px;margin-right:20px;width:17px;") + '-webkit-animation-name:so_bounce_circle;-webkit-animation-duration:2s;-webkit-animation-iteration-count:infinite;-webkit-animation-direction:linear;-ms-animation-name:so_bounce_circle;-ms-animation-duration:2s;-ms-animation-iteration-count:infinite;-ms-animation-direction:linear;-moz-animation-name:so_bounce_circle;-moz-animation-duration:2s;-moz-animation-iteration-count:infinite;-moz-animation-direction:linear;-o-animation-name:so_bounce_circle;-o-animation-duration:2s;-o-animation-iteration-count:infinite;-o-animation-direction:linear;animation-name:so_bounce_circle;animation-duration:2s;animation-iteration-count:infinite;animation-direction:linear;opacity:0.3;-webkit-animation-fill-mode:backwards}/*@media only screen and (max-width:540px){SOLoadingMessage .circle{height:9px;margin-right:11px;width:15px;}}*/.SOLoadingMessage #circle_1{-webkit-animation-delay:.2s;-ms-animation-delay:.2s;-moz-animation-delay:.2s;-o-animation-delay:.2s;animation-delay:.2s}.SOLoadingMessage #circle_2{-webkit-animation-delay:.4s;-ms-animation-delay:.4s;-moz-animation-delay:.4s;-o-animation-delay:.4s;animation-delay:.4s}.SOLoadingMessage #circle_3{-webkit-animation-delay:.6s;-ms-animation-delay:.6s;-moz-animation-delay:.6s;-o-animation-delay:.6s;animation-delay:.6s}.SOLoadingMessage #circle_4{-webkit-animation-delay:.8s;-ms-animation-delay:.8s;-moz-animation-delay:.8s;-o-animation-delay:.8s;animation-delay:.8s}.SOLoadingMessage #circle_5{-webkit-animation-delay:1s;-ms-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}.SOLoadingMessage #circle_6{-webkit-animation-delay:1.2s;-ms-animation-delay:1.2s;-moz-animation-delay:1.2s;-o-animation-delay:1.2s;animation-delay:1.2s}.SOLoadingMessage #circle_7{-webkit-animation-delay:1.4s;-ms-animation-delay:1.4s;-moz-animation-delay:1.4s;-o-animation-delay:1.4s;animation-delay:1.4s}.SOLoadingMessage #circle_8{-webkit-animation-delay:1.6s;-ms-animation-delay:1.6s;-moz-animation-delay:1.6s;-o-animation-delay:1.6s;animation-delay:1.6s}.SOLoadingMessage #circle_9{-webkit-animation-delay:1.8s;-ms-animation-delay:1.8s;-moz-animation-delay:1.8s;-o-animation-delay:1.8s;animation-delay:1.8s}.SOLoadingMessage #circle_10{-webkit-animation-delay:2s;-ms-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}@-webkit-keyframes "so_bounce_circle"{0%{opacity:1;background-color:#f9a647;}25%{opacity:1;background-color:#f9a647;}50%{opacity:0.5;background-color:#f9a647;}75%{opacity:0.3;background-color:#f9a647;}100%{opacity:0.1;background-color:#f9a647;}}@-ms-keyframes so_bounce_circle{0% { opacity:1;background-color:#f9a647}25%{opacity:1;background-color:#f9a647}50%{opacity:0.5;background-color:#f9a647}75%{opacity:0.3;background-color:#f9a647}100%{opacity:0.1;background-color:#f9a647}}@-moz-keyframes so_bounce_circle{0%{opacity:1;background-color:#f9a647;}25%{opacity:1;background-color:#f9a647;}50%{opacity:0.5;background-color:#f9a647;}75%{opacity:0.3;background-color:#f9a647;}100%{opacity:0.1;background-color:#f9a647;}}@-o-keyframes so_bounce_circle{0%{opacity:1;background-color:#f9a647}25%{opacity:1;background-color:#f9a647}50%{opacity:0.5;background-color:#f9a647}75%{opacity:0.3;background-color:#f9a647}100%{opacity:0.1;background-color:#f9a647}}@keyframes "so_bounce_circle"{0%{opacity:1;background-color:#f9a647;}25%{opacity:1;background-color:#f9a647;}50%{opacity:0.5;background-color:#f9a647;}75%{opacity:0.3;background-color:#f9a647;}100%{opacity:0.1;background-color:#f9a647;}}';
                var style = document.createElement("style");
                style.type = "text/css";
                if (style.styleSheet)
                    style.styleSheet.cssText = cssElem;
                else
                    style.appendChild(document.createTextNode(cssElem));
                head.appendChild(style);
                var loadingDiv = '<div name="SOLoadingMessage" class="SOLoadingMessage" style="box-sizing: border-box;min-height: 356px; margin: 0 auto;left: 0;right: 0; max-width: 796px; position: static; display: block; background-color: white; border-radius: 6px; z-index: 100000000; width: 100%;">';
                loadingDiv += '<div id="BlueBox" class="blueBox gradient" style="height: 356px; border: 2px solid #8caec9; box-sizing: border-box; width: 100%; border-radius: 6px;"><div id="iframeContainer" class="whiteBox" style="  width: 100%; height: 100%; border-radius: 6px; min-width: 223px; box-sizing: content-box;  display: block;  background-color: #fff;"><div id="Navigation"></div><div id="WLoading" class="WLoading" style=" padding-top: 130px;  text-align: left;  cursor: wait;width:100%; max-width:' +
                    (mCss ? 250 : 350) + 'px;  height: 50%;  background-color: #fff;  margin: 0 auto;"><h2 id="LoadingText" style="margin-bottom: 0px; text-align: center;font-size: ' + (mCss ? 16 : 18) + 'px; color: #333 !important;font-family: Tahoma, Verdana, Segoe, sans-serif;letter-spacing: 0rem;">Loading...</h2><div style="height: 20px;"></div><div style="width:100%;"><img id="loadingImage" alt="Loading..." style=" width: 100%; max-width:351px; height: 10px;" src="' +EbeecareStaticFilesUrl + 'load_ani.gif" border="0" width="351" height="10"><div id="circle"><div id="circle_1" class="circle"></div><div id="circle_2" class="circle"></div><div id="circle_3" class="circle"></div><div id="circle_4" class="circle"></div><div id="circle_5" class="circle"></div><div id="circle_6" class="circle"></div><div id="circle_7" class="circle"></div><div id="circle_8" class="circle"></div><div id="circle_9" class="circle"></div><div id="circle_10" style="margin-right: 0px;" class="circle"></div><div class="clearfix"></div></div></div><div style="height: 20px;"></div><div id="timetxt" style="display: none"><span style="color: red;">This may take up to 30 seconds.<br>Do not close or refresh this page.</span></div></div></div></div></div></div></div>';
                allIfrm[i].parentNode.innerHTML = loadingDiv + allIfrm[i].parentNode.innerHTML
            }
};
SOE.prototype.renameDulplicateIframes = function() {
    var allIfrm = document.querySelectorAll("[name*='EbeecareIframe']");
    var allDuplicateIframes = [];
    if (allIfrm.length > 1)
        for (var i = 0; i < allIfrm.length; i++) {
            var iframes = document.querySelectorAll("[id='" + allIfrm[i].id + "']");
            if (iframes.length > 1)
                var index = arrayContainsElement(allDuplicateIframes, allIfrm[i].id);
            else if (iframes.length == 1 && allIfrm[i].name == "EbeecareIframe")
                allIfrm[i].name = allIfrm[i].name + "_" + allIfrm[i].id.substring("SOI_".length);
            if (index >
                -1)
                allDuplicateIframes[index][1] = allDuplicateIframes[index][1] + 1;
            else
                allDuplicateIframes[allDuplicateIframes.length] = [allIfrm[i].id, 1]
        }
    if (allDuplicateIframes.length > 0)
        for (var i = 0; i < allDuplicateIframes.length; i++) {
            var sameDuplicates = document.querySelectorAll("[id='" + allDuplicateIframes[i][0] + "']");
            if (sameDuplicates.length > 1)
                for (var j = 0; j < sameDuplicates.length; j++) {
                    sameDuplicates[j].id = sameDuplicates[j].id + "_" + j;
                    sameDuplicates[j].name = "EbeecareIframe" + "_" + sameDuplicates[j].id.substring("SOI_".length);
                    var parent = sameDuplicates[j].parentNode;
                    parent.removeChild(sameDuplicates[j]);
                    parent.appendChild(sameDuplicates[j])
                }
        }
};

function arrayContainsElement(array_elements, element) {
    if (array_elements.length > 0)
        for (var i = 0; i < array_elements.length; i++)
            if (array_elements[i][0] == element)
                return i;
    return -1
}
if (window.addEventListener)
    window.addEventListener("message", receiveMessage, false);
else if (window.attachEvent)
    window.attachEvent("onmessage", receiveMessage);
else
    window.onmessage = receiveMessage;

function checkDocumentLoaded() {
    return document.readyState === "complete"
}
SOE.prototype.AddEventListners = function(link, embPageName, height, width, isParameterizedUrl) {
    soe.UpdateIframeSource(isParameterizedUrl);
    soe.CheckAndEmbedIframeInDiv(link, embPageName, height, width, isParameterizedUrl);
    var supportOrientation = "onorientationchange" in window,
        orientationEvent = supportOrientation ? "orientationchange" : "resize";
    if (window.addEventListener)
        window.addEventListener(orientationEvent, soe.orientationChange, false);
    else if (window.attachEvent)
        window.attachEvent("on" + orientationEvent, soe.orientationChange);
    if (soe.isMobileView && soe.isLive) {
        var body = document.getElementsByTagName("body")[0];
        body.addEventListener("touchmove", function(evt) {
            if (evt.touches.length > 1)
                soe.runCode = true;
            else
                soe.runCode = false
        });
        body.addEventListener("touchend", soe.zoomChange)
    }
    var f = document.querySelectorAll("[name*='EbeecareIframe']");
    while (f == null || f == "undefined")
        setTimeout(function() {
            f = document.querySelectorAll("[name*='EbeecareIframe']")
        }, 33);
    soe.renameDulplicateIframes();
    var style;
    for (var i = 0; i < f.length; i++) {
        f[i].height =
            soe.isMobileView ? "100%" : "535px";
        style = f[i].getAttribute("style");
        style += "-webkit-box-sizing:content-box;box-sizing:content-box;-moz-box-sizing:content-box;";
        if (document.getElementById)
            if (soe.isMobileView == null && window.innerWidth <= 767)
                soe.isMobileView = true;
        f[i].setAttribute("style", style);
        f[i].width = "100%";
        f[i].style.width = "100%";
        f[i].style.height = soe.isMobileView ? "100%" : "535px"
    }
    soe.setIframeInitialView();
    if (!soe.delayLoading)
        if (!checkDocumentLoaded())
            window.addEventListener("load", soe.setIframeSrc,
                false);
        else
            soe.setIframeSrc();
    soe.setIframeOnloadEvent();
    soe.setSOBookingLink()
};
SOE.prototype.UpdateIframeSource = function(isParameterizedUrl) {
    var allIfrm = document.querySelectorAll("[name*='EbeecareIframe']");
    if (allIfrm.length > 0)
        for (var i = 0; i < allIfrm.length; i++) {
            allIfrm[i].style.maxWidth = "796px";
        }
};
SOE.prototype.CheckAndEmbedIframeInDiv = function(link, embPageName, height, width, isParameterizedUrl) {
    if (typeof embPageName != "undefined" && embPageName.length > 0)
        pageName = embPageName;
    if (typeof pageName != "undefined" && (typeof pageName != null && pageName.length > 0)) {
        var Ifrmcontainer = document.getElementById("SOIDIV_" + pageName);
        if (Ifrmcontainer != null) {
            var iframe = Ifrmcontainer.getElementsByTagName("iframe");
            if (iframe.length == 0)
                if (Ifrmcontainer != null)
                    Ifrmcontainer.innerHTML =
                    soe.getIframeHTML('', link, pageName, height, width)
        }
    }
};
SOE.prototype.getIframeHTML = function(soqueryparam, link, pageName, h, w) {
    if (typeof link != "undefined" && (typeof pageName != undefined && (typeof h != undefined && typeof w != undefined))) {
        EbeecareEmbedLink = link;
        id = "SOI_" + pageName;
        h = h;
        w = w
    }
    style = "width:" + w + ";border-radius: 7px;-webkit-border-radius:7px;";
    if (this.isMobileView)
        EbeecareEmbedLink = EbeecareEmbedLink.replace("&dt=", "&dt=0") + "&m=true";
    var code = '<iframe src="' + EbeecareEmbedLink + soqueryparam + '" id ="' + id + '" name="EbeecareIframe"  scrolling="no" frameborder="0" hspace="0" marginheight="0" marginwidth="0" height="' +
        h + '" width="' + w + '" vspace="0" style="max-width: 796px;position:initial;' + style + '"></iframe>';
    return code
};
SOE.prototype.setIframeSrc = function() {
    var allIfrm = document.querySelectorAll("[name*='EbeecareIframe']");
    if (allIfrm.length > 0)
        for (var i = 0; i < allIfrm.length; i++) {
            var mysrc = allIfrm[i].getAttribute("data-mysrc");
            if (mysrc && allIfrm[i].src.replace(/https?:/i, "") != mysrc)
                allIfrm[i].src = mysrc
        }
};
SOE.prototype.setSOBookingLink = function() {
    var soBookingLinks = document.getElementsByName("SOBookingLink");
    if (soBookingLinks.length > 0)
        for (var j = 0; j < soBookingLinks.length; j++)
            if (soBookingLinks[j] && !soBookingLinks[j].hasAttribute("onclick")) {
                var pageName = soBookingLinks[j].getAttribute("data-page") ? soBookingLinks[j].getAttribute("data-page") : "";
                soBookingLinks[j].setAttribute("onclick", "soe.toggleLightBox('" + pageName + "')");
                var soBookingLinkXbutton = document.getElementById("SOIC_" + pageName);
                if (soBookingLinkXbutton &&
                    !soBookingLinkXbutton.hasAttribute("onclick"))
                    soBookingLinkXbutton.setAttribute("onclick", "soe.toggleLightBox('" + pageName + "')")
            }
};
if (screen.width < 768)
    soe.isMobileView = true;
soe.setButtonFrameToBottom();

try {
    soe.isMobileView = soe.isMobileView ? soe.isMobileView : window.innerWidth <= 767 ? true : false;
    soe.windowWidth = soe.windowWidth ? soe.windowWidth : window.innerWidth;
    if (typeof EbeecareEmbedLink != "undefined" && (EbeecareEmbedLink && typeof EbeecareEmbedPageName != "undefined")) {
        soe.link = EbeecareEmbedLink;
        soe.pageName = soe.decodeToHTML(EbeecareEmbedPageName);
        soe.isWidget = true;
        try {
            soe.screenwidth_swh = window.innerWidth;
            soe.isNewPage = NewPage
        } catch (err) {}
        soe.bookingBBGColor = EbeecareEmbedBookingBBGColor;
        soe.bookingBTextColor = EbeecareEmbedBookingBTextColor;
        if (typeof EbeecareEmbedPosition != "undefined") {
            soe.bookingPos = EbeecareEmbedPosition.split(",")[0];
            soe.phonePos = EbeecareEmbedPosition.split(",")[2];
            soe.displayCount = soe.bookingPos < 1 ? soe.displayCount - 1 : soe.displayCount;
            soe.displayCount = soe.phonePos < 1 ? soe.displayCount - 1 : soe.displayCount;
            soe.widgetTitle = EbeecareEmbedWidgetTitle;
            soe.widgetColor = EbeecareEmbedWidgetColor;
            soe.widgetBGColor = EbeecareEmbedWidgetBGColor;
            soe.widgetLeft = EbeecareEmbedWidgetLeft;
            soe.eaid = typeof EbeecareEmbedAid == "undefined" ? "" : EbeecareEmbedAid;
            soe.setWidgetHTML()
        } else
            soe.setButtonHTML()
    }
} catch (err) {
    if (typeof console ==
        "object")
        console.log(err)
}

function receiveMessage(event) {
    if (event.origin.indexOf("ebeecare") < 0 && (event.origin.indexOf("staticso") < 0 && (event.origin.indexOf("booknow.so") < 0 && (event.origin.indexOf("meetme.so") < 0 && event.origin.indexOf("bookme.so") < 0))))
        return false;
    var tmp = event.data.toString();
    if (tmp.indexOf("EbeecareifrId") > -1) {
        var EbeecareifrId = null;
        var height = 725;
        var recM = false;
        var callSOAfterConfirmationFunction = false;
        var mobileView = soe.isMobileView;
        eval(event.data);
        if (tmp.indexOf("callSOAfterConfirmationFunction") > -1 &&
            callSOAfterConfirmationFunction)
            if (typeof SOAfterConfirmationFunction === "function") {
                SOAfterConfirmationFunction();
                callSOAfterConfirmationFunction = false
            }
        height = isNaN(height) ? 725 : height;
        if (EbeecareifrId != null) {
            var id = "SOI_" + EbeecareifrId;
            if (mobileView == true)
                height = height < 280 ? 280 : height;
            var innerLightBoxHeight = height + 40;
            var SOI_ele = document.querySelectorAll("[name*='EbeecareIframe']");
            if (SOI_ele != null && SOI_ele.length > 0)
                for (var i = 0; i < SOI_ele.length; i++)
                    if (SOI_ele[i].id == id) {
                        mobileView = SOI_ele[i].src.toLowerCase().indexOf("dt=0") >
                            -1 || soe.isMobileView;
                        if (!recM && !mobileView) {
                            SOI_ele[i].height = height + "px";
                            SOI_ele[i].style.height = height + "px";
                            var SOI_lbEle = SOI_ele[i].parentElement.parentElement;
                            if (SOI_lbEle.id == "SOInnerLightBox")
                                SOI_lbEle.style.height = innerLightBoxHeight + "px"
                        } else if (recM && mobileView || soe.isMobileView) {
                            SOI_ele[i].height = innerLightBoxHeight + "px";
                            SOI_ele[i].style.height = innerLightBoxHeight + "px";
                            if (!soe.isLive) {
                                var SOI_lbEle = SOI_ele[i].parentElement;
                                SOI_lbEle.style.height = innerLightBoxHeight + "px"
                            }
                        }
                    }
        }
    }
    return
}

function onIframeLoad(elem) {
    var pNode = elem.parentNode;
    var SOLoadingMessages = pNode.querySelectorAll("*[name='SOLoadingMessage']");
    var count = 0;
    if (SOLoadingMessages.length == 0)
        while (SOLoadingMessages.length == 0 && count <= 2) {
            pNode = pNode.parentNode;
            count++;
            SOLoadingMessages = pNode.querySelectorAll("*[name='SOLoadingMessage']")
        }
    if (SOLoadingMessages.length > 0) {
        SOLoadingMessages[0].style.display = "none";
        elem.style.display = "block"
    }
}

function SOEScriptLoaded() {
    if (typeof soe != 'undefined') {
        soe.AddEventListners();
    } else {
        setTimeout(SOEScriptLoaded, 100);
    }
}
setTimeout(SOEScriptLoaded, 100);
