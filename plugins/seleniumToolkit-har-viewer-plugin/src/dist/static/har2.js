(this["webpackJsonpnetwork-viewer-example"] = this["webpackJsonpnetwork-viewer-example"] || []).push([[0], {
    108: function (e, t, a) {
        e.exports = {brandBlue: "#1395f0", footer: "Footer_footer__2z7ZP", link: "Footer_link__1Ho9O"}
    }, 175: function (e, t, a) {
        "use strict";

        function r(e) {
            return e && "object" === typeof e && "default" in e ? e.default : e
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o = a(1), l = r(o), n = r(a(0)), i = r(a(102)), s = a(197), _ = r(a(198)), c = a(215), d = a(430),
            u = r(a(220)), p = a(103), m = a(429);

        function f(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }

        function y() {
            return (y = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
                }
                return e
            }).apply(this, arguments)
        }

        function h(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, r)
            }
            return a
        }

        function b(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(a), !0).forEach((function (t) {
                    f(e, t, a[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : h(Object(a)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }))
            }
            return e
        }

        function T(e, t) {
            if (null == e) return {};
            var a, r, o = function (e, t) {
                if (null == e) return {};
                var a, r, o = {}, l = Object.keys(e);
                for (r = 0; r < l.length; r++) a = l[r], t.indexOf(a) >= 0 || (o[a] = e[a]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) a = l[r], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (o[a] = e[a])
            }
            return o
        }

        function w(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var a = [], r = !0, o = !1, l = void 0;
                try {
                    for (var n, i = e[Symbol.iterator](); !(r = (n = i.next()).done) && (a.push(n.value), !t || a.length !== t); r = !0) ;
                } catch (s) {
                    o = !0, l = s
                } finally {
                    try {
                        r || null == i.return || i.return()
                    } finally {
                        if (o) throw l
                    }
                }
                return a
            }(e, t) || v(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function g(e) {
            return function (e) {
                if (Array.isArray(e)) return C(e)
            }(e) || function (e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || v(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function v(e, t) {
            if (e) {
                if ("string" === typeof e) return C(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? C(e, t) : void 0
            }
        }

        function C(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
            return r
        }

        var k = Object.freeze({
            file: Object.freeze({key: "filename", name: "File"}),
            status: Object.freeze({key: "status", name: "Status"}),
            method: Object.freeze({key: "method", name: "Method"}),
            domain: Object.freeze({key: "domain", name: "Domain"}),
            type: Object.freeze({key: "type", name: "Type"}),
            size: Object.freeze({key: "size", name: "Size"}),
            time: Object.freeze({key: "time", name: "Time"})
        }), x = [{name: "All", filterBy: {name: null, value: null}}, {
            name: "XHR",
            filterBy: {name: "type", value: ["xhr", "XHR"]}
        }, {
            name: "JS",
            filterBy: {name: "type", value: ["script", "javascript", "x-javascript", "json"]}
        }, {name: "CSS", filterBy: {name: "type", value: ["stylesheet", "css"]}}, {
            name: "Img",
            filterBy: {name: "type", value: ["image", "png", "jpeg", "svg+xml", "gif"]}
        }, {name: "Media", filterBy: {name: "type", value: ["media"]}}, {
            name: "Font",
            filterBy: {name: "type", value: ["font", "woff2"]}
        }, {name: "Doc", filterBy: {name: "type", value: ["document", "html"]}}, {
            name: "WS",
            filterBy: {name: "type", value: ["websocket"]}
        }, {name: "Manifest", filterBy: {name: "type", value: ["manifest.json"]}}], E = {
            queueing: {dataKey: "_blocked_queueing", fill: "#ccc", name: "Queueing"},
            blocked: {dataKey: "blocked", fill: "#A1000C", name: "Stalled"},
            dns: {dataKey: "dns", fill: "#DCC9E5", name: "DNS Lookup"},
            ssl: {dataKey: "ssl", fill: "#E78057", name: "SSL"},
            connect: {dataKey: "connect", fill: "#DB8553", name: "Initial Connection"},
            send: {dataKey: "send", fill: "#3C96C4", name: "Request Sent"},
            wait: {dataKey: "wait", fill: "#7CA0BF", name: "Waiting (TTFB)"},
            receive: {dataKey: "receive", fill: "#65B955", name: "Content Downloaded"}
        }, N = {
            width: "100%",
            height: "20",
            viewBox: "0 0 250 20",
            version: "1.1",
            preserveAspectRatio: "xMinYMin meet"
        }, R = {height: 16, y: 3.5}, S = Object.freeze({
            url: Object.freeze({key: "url", name: "Request URL"}),
            method: Object.freeze({key: "method", name: "Request Method"}),
            status: Object.freeze({key: "status", name: "Status Code"}),
            serverIPAddress: Object.freeze({key: "serverIPAddress", name: "Remote Address"})
        }), O = Object.freeze({
            general: Object.freeze({key: "general", name: "General"}),
            response: Object.freeze({key: "response", name: "Response Headers"}),
            request: Object.freeze({key: "request", name: "Request Headers"}),
            queryString: Object.freeze({key: "queryString", name: "Query String Parameters"}),
            formData: Object.freeze({key: "formaData", name: "Form Data"})
        }), q = {showImportHAR: !0, showTimeline: !1}, D = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, a = Math.pow(10, t);
            return Math.round(e * a) / a
        }, z = function (e) {
            return e < 1024 ? "".concat(D(e), " B") : e < Math.pow(1024, 2) ? "".concat(D(e / 1024), " KB") : "".concat(D(e / Math.pow(1024, 2)), " MB")
        }, P = function (e) {
            return e < 1e3 ? "".concat(Math.round(e), "ms") : e < 6e4 ? "".concat(Math.ceil(e / 10) / 100, "s") : "".concat(100 * Math.ceil(e / 6e4) / 100, "m")
        }, A = function (e) {
            var t = new URL(e), a = t.pathname.split("/"),
                r = (a[a.length - 1].trim() ? a[a.length - 1] : a[a.length - 2]) + t.search;
            return {domain: t.host, filename: r || t.href, url: t.href}
        }, H = function (e) {
            var t = e.bodySize, a = e._transferSize, r = e.headers, o = e.content;
            if (o && o.size) return z(o.size);
            if (a > -1) return z(a);
            if (t > -1) return z(t);
            var l = r.find((function (e) {
                var t = e.name;
                return ["content-length", "Content-Length"].includes(t)
            }));
            return l ? z(l.value) : 0
        }, j = function (e) {
            var t = e.find((function (e) {
                var t = e.name;
                return ["content-type", "Content-Type"].includes(t)
            }));
            if (!t) return "";
            var a = t.value.split(";")[0].split("/");
            return a.length > 1 ? a[1] : a[0]
        }, L = function (e, t) {
            var a = e.startedDateTime;
            return b(b({}, e.timings), {}, {startTime: new Date(a).getTime() - new Date(t).getTime()})
        }, I = function (e) {
            var t = e.mimeType, a = e.text;
            if ("application/json" === t) {
                var r = a;
                try {
                    r = JSON.stringify(JSON.parse(a), null, 2)
                } catch (o) {
                    r = a
                }
                return r
            }
            return a
        }, B = function (e) {
            var t = e.response, a = t.bodySize, r = t._transferSize;
            return r > -1 ? r : a > -1 ? a : -1
        }, U = function (e) {
            var t = e.response, a = t.bodySize, r = t._transferSize, o = t.content.size;
            return o > 0 ? o : r > -1 ? r : a > -1 ? a : -1
        }, F = function (e, t) {
            return e.name < t.name ? -1 : e.name > t.name ? 1 : 0
        }, Y = function (e) {
            return {
                request: e.request.headers.sort(F),
                response: e.response.headers.sort(F),
                queryString: e.request.queryString,
                postData: e.request.postData
            }
        }, M = function (e) {
            var t = e.startedDateTime, a = e.time, r = e.timings;
            return new Date(t).getTime() + a + r._blocked_queueing
        }, G = function (e) {
            var t = e.response;
            return t && t._error ? t._error : null
        }, X = function (e) {
            if (!e.length) return {
                totalNetworkTime: 0,
                data: [],
                totalRequests: 0,
                totalTransferredSize: 0,
                totalUncompressedSize: 0,
                finishTime: 0
            };
            var t = e[0].startedDateTime, a = M(e[e.length - 1]), r = 0, o = 0, l = e.filter((function (e) {
                return e.response && A(e.request.url).domain
            })).map((function (e, l) {
                r += B(e), o += U(e);
                var n = M(e);
                return a = a < n ? n : a, b({
                    index: l,
                    status: e.response.status,
                    method: e.request.method,
                    size: H(e.response),
                    startedDateTime: new Date(e.startedDateTime).getTime(),
                    type: e._resourceType || j(e.response.headers),
                    timings: L(e, t),
                    body: I(e.response.content),
                    time: e.time,
                    serverIPAddress: e.serverIPAddress || ":80",
                    headers: Y(e),
                    transferredSize: B(e),
                    uncompressedSize: U(e),
                    error: G(e)
                }, A(e.request.url))
            })), n = l.length, i = a - new Date(t).getTime(), s = function (e) {
                var t = e.map((function (e) {
                    var t = e.timings;
                    return Object.values(t).reduce((function (e, t) {
                        /*Anpassung von SeleniumConsulting start*/
                        /*return e + (t > -1 ? t : 0)*/
                        return parseFloat(e) + (t > -1 ? t : 0)
                        /*ENDE*/
                    }), 0)
                }));
                return Math.max.apply(Math, g(t))
            }(l);
            return {
                totalNetworkTime: i,
                data: l,
                totalRequests: n,
                totalTransferredSize: r,
                totalUncompressedSize: o,
                finishTime: s
            }
        }, K = function (e, t) {
            var a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return e.sort((function (e, r) {
                return e[t] < r[t] ? a ? -1 : 1 : e[t] > r[t] ? 1 : 0
            }))
        }, J = function (e) {
            var t = e.filter, a = e.info;
            switch (t.name) {
                case"error":
                    return a.status >= 400 || a.error;
                case"type":
                default:
                    return t.value.includes(a[t.name])
            }
        }, V = function (e) {
            var t = e.data, a = e.errorFilter, r = e.filter, o = void 0 === r ? {} : r, l = e.search,
                n = void 0 === l ? {} : l, i = n.value && n.value.trim();
            return i || o.name || a ? t.filter((function (e) {
                var t = !i || e[n.name] && e[n.name].includes(i), r = !a || J({filter: {name: "error"}, info: e}),
                    l = !o.name || J({filter: o, info: e});
                return t && r && l
            })) : t
        }, W = function (e) {
            return e ? e > 1e3 ? "".concat((Number(e) / 1e3).toFixed(2), " s") : "".concat(Number(e).toFixed(2), " ms") : e
        }, Q = function (e) {
            return Object.keys(e).filter((function (e) {
                return !["_blocked_queueing", "startTime"].includes(e)
            })).reduce((function (t, a) {
                return t + e[a]
            }), 0)
        }, Z = function (e) {
            var t = e.status, a = e.error;
            return 0 !== t || a ? t >= 400 || a ? "error" : "info" : "pending"
        }, $ = function (e, t, a, r) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, l = e.startTime / t * 100,
                n = 0, i = 0, s = [];
            return Object.keys(E).forEach((function (a) {
                var _ = E[a], c = e[_.dataKey];
                c <= 0 || (n += i || l, i = c > 0 ? c / t * 100 : 0, s.push({
                    width: "".concat(i, "%"),
                    y: r ? r % 10 * 3 + 40 : o,
                    x: "".concat(n, "%"),
                    fill: _.fill,
                    key: a
                }))
            })), s
        }, ee = function (e) {
            var t = e.data, a = e.timestamp;
            switch (e.position) {
                case"before":
                    return function (e, t) {
                        var a = e.reverse().findIndex((function (e) {
                            return e.startedDateTime <= t
                        }));
                        return a < 0 ? 0 : e.size - (a + 1)
                    }(t, a);
                case"after":
                    return function (e, t) {
                        return e.findIndex((function (e) {
                            return e.startedDateTime >= t
                        }))
                    }(t, a);
                case"near":
                default:
                    return function (e, t) {
                        return e.reduce((function (e, a) {
                            var r = e.value, o = e.index, l = a.startedDateTime, n = a.index;
                            return Math.abs(l - t) < Math.abs(r - t) ? {value: l, index: n} : {value: r, index: o}
                        }), {value: 0, index: 0}).index
                    }(t, a)
            }
        }, te = function (e) {
            return e.reduce((function (e, t) {
                var a = e.DOMContentLoaded, r = e.onLoad, o = t.pageTimings;
                return {DOMContentLoaded: a + o.onContentLoad, onLoad: r + o.onLoad}
            }), {DOMContentLoaded: 0, onLoad: 0})
        }, ae = function (e) {
            return e.reduce((function (e, t) {
                return e.totalTransferredSize += t.transferredSize, e.totalUncompressedSize += t.uncompressedSize, e
            }), {totalTransferredSize: 0, totalUncompressedSize: 0, totalRequests: e.size})
        }, re = "FETCH_FILE_REQUEST", oe = "FETCH_FILE_SUCCESS", le = "FETCH_FILE_FAILURE", ne = new s.Map({
            data: new s.List,
            actualData: new s.List,
            totalNetworkTime: null,
            dataSummary: new s.Map,
            sort: {key: "startedDateTime", isAcs: !0},
            search: {name: "url", value: ""},
            filter: {name: null, value: null},
            errorFilter: !1,
            error: null,
            loading: !1,
            scrollToIndex: null,
            selectedReqIndex: null,
            showReqDetail: !1,
            reqDetail: null
        }), ie = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
                t = arguments.length > 1 ? arguments[1] : void 0, a = t.type, r = t.payload;
            switch (a) {
                case"UPDATE_DATA":
                    return e.withMutations((function (t) {
                        var a = e.get("sort"), o = X(r.entries), l = o.data, n = o.totalNetworkTime,
                            i = o.totalRequests, _ = o.totalTransferredSize, c = o.totalUncompressedSize,
                            d = o.finishTime, u = new s.List(K(l, a.key, a.isAcs));
                        t.set("error", null).set("data", u).set("actualData", u).set("totalNetworkTime", n).set("dataSummary", new s.Map({
                            totalRequests: i,
                            totalTransferredSize: _,
                            totalUncompressedSize: c,
                            finishTime: d,
                            timings: te(r.pages),
                            finish: d
                        }))
                    }));
                case"UPDATE_SEARCH":
                    return e.withMutations((function (t) {
                        var a = V({
                            data: e.get("actualData"),
                            filter: e.get("filter"),
                            search: r,
                            errorFilter: e.get("errorFilter")
                        }), o = ae(a);
                        t.set("search", r).set("data", a).setIn(["dataSummary", "totalRequests"], o.totalRequests).setIn(["dataSummary", "totalTransferredSize"], o.totalTransferredSize).setIn(["dataSummary", "totalUncompressedSize"], o.totalUncompressedSize)
                    }));
                case"UPDATE_FILTER":
                    return e.withMutations((function (t) {
                        var a = V({
                            data: e.get("actualData"),
                            filter: r,
                            search: e.get("search"),
                            errorFilter: e.get("errorFilter")
                        }), o = ae(a);
                        t.set("filter", r).set("data", a).setIn(["dataSummary", "totalRequests"], o.totalRequests).setIn(["dataSummary", "totalTransferredSize"], o.totalTransferredSize).setIn(["dataSummary", "totalUncompressedSize"], o.totalUncompressedSize)
                    }));
                case"UPDATE_ERROR_FILTER":
                    return e.withMutations((function (t) {
                        var a = V({
                            data: e.get("actualData"),
                            filter: e.get("filter"),
                            search: e.get("search"),
                            errorFilter: r
                        }), o = ae(a);
                        t.set("errorFilter", r).set("data", a).setIn(["dataSummary", "totalRequests"], o.totalRequests).setIn(["dataSummary", "totalTransferredSize"], o.totalTransferredSize).setIn(["dataSummary", "totalUncompressedSize"], o.totalUncompressedSize)
                    }));
                case"UPDATE_SORT":
                    return e.withMutations((function (t) {
                        t.set("sort", r).set("data", K(e.get("data"), r.key, r.isAcs))
                    }));
                case re:
                    return e.withMutations((function (e) {
                        e.set("error", null).set("loading", !0)
                    }));
                case oe:
                    return e.withMutations((function (e) {
                        e.set("error", null).set("loading", !1)
                    }));
                case le:
                case"UPDATE_ERROR_MESSAGE":
                    return e.withMutations((function (e) {
                        e.set("error", r).set("loading", !1)
                    }));
                case"UPDATE_SCROLL_TO_INDEX":
                    return e.withMutations((function (e) {
                        e.set("selectedReqIndex", r ? r.index : null).set("reqDetail", r)
                    }));
                case"SELECT_REQUEST":
                    return e.withMutations((function (e) {
                        e.set("selectedReqIndex", r ? r.index : null).set("reqDetail", r).set("showReqDetail", !!r)
                    }));
                case"RESET":
                    return ne;
                default:
                    return e
            }
        }, se = function (e) {
            return function (t) {
                return e({type: "UPDATE_DATA", payload: t})
            }
        }, _e = function (e) {
            return function (t) {
                return e({type: "UPDATE_SEARCH", payload: t})
            }
        }, ce = function (e) {
            return function (t) {
                return e({type: "UPDATE_SORT", payload: t})
            }
        }, de = function (e) {
            return function (t) {
                return e({type: "UPDATE_FILTER", payload: t})
            }
        }, ue = function (e) {
            return function (t) {
                return e({type: "UPDATE_ERROR_FILTER", payload: t})
            }
        }, pe = function (e) {
            return function (t) {
                return e({type: re, payload: t})
            }
        }, me = function (e) {
            return function (t) {
                return e({type: oe, payload: t})
            }
        }, fe = function (e) {
            return function (t) {
                return e({type: le, payload: t})
            }
        }, ye = function (e) {
            return function (t) {
                return e({type: "UPDATE_ERROR_MESSAGE", payload: t})
            }
        }, he = function (e) {
            return function (t) {
                return e({type: "UPDATE_SCROLL_TO_INDEX", payload: t})
            }
        }, be = function (e) {
            return function (t) {
                return e({type: "SELECT_REQUEST", payload: t})
            }
        }, Te = function (e) {
            return function (t) {
                return e({type: "RESET", payload: t})
            }
        }, we = l.createContext(), ge = function () {
            var e = o.useContext(we);
            if (!e) throw new Error("useNetwork must be used within a NetworkProvider");
            var t = w(e, 2), a = t[0], r = t[1];
            return {
                state: a, dispatch: r, actions: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return function (t, a) {
                        return Object.keys(e).reduce((function (r, o) {
                            return b(b({}, r), {}, f({}, o, e[o](t, a)))
                        }), {})
                    }
                }({
                    updateData: se,
                    updateSearch: _e,
                    updateSort: ce,
                    updateFilter: de,
                    updateErrorMessage: ye,
                    selectRequest: be,
                    updateScrollToIndex: he,
                    updateErrorFilter: ue,
                    resetState: Te
                })(r, a)
            }
        }, ve = function (e) {
            var t = e.data, a = e.file, r = e.fetchOptions, n = e.scrollTimeStamp, i = e.scrollRequestPosition,
                s = e.autoHighlightChange, c = e.onDataLoaded, d = w(o.useReducer(ie, ne), 2), u = d[0], p = d[1],
                m = o.useMemo((function () {
                    return [u, p]
                }), [u]), f = m[0].get("selectedReqIndex"), h = m[0].get("data"), b = m[0].get("showReqDetail"),
                T = m[0].get("actualData");
            return o.useEffect((function () {
                t && t.log && t.log.entries && se(p)({entries: t.log.entries, pages: t.log.pages})
            }), [t]), o.useEffect((function () {
                a && function (e) {
                    return function (t) {
                        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {withCredentials: !0};
                        pe(e)(), _.get(t, a).then((function (t) {
                            var a = t.data;
                            a && a.log && se(e)(a.log), me(e)()
                        })).catch((function (t) {
                            return fe(e)({title: "Error while fetching file", description: t.message})
                        }))
                    }
                }(p)(a, r)
            }), [a]), o.useEffect((function () {
                T.size && c && c(T)
            }), [T]), o.useEffect((function () {
                if (n && (!b || s)) {
                    var e = ee({data: h, timestamp: n, position: i});
                    (e || 0 === e) && he(p)(h.get(e))
                }
            }), [n, T]), o.useEffect((function () {
                f && setTimeout((function () {
                    var e = document.getElementById("network-viewer-table-row-" + f);
                    e && e.scrollIntoView({alignToTop: !0, behavior: "smooth"})
                }), 300)
            }), [f]), l.createElement(we.Provider, y({value: m}, e))
        };

        function Ce(e, t) {
            void 0 === t && (t = {});
            var a = t.insertAt;
            if (e && "undefined" !== typeof document) {
                var r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
                o.type = "text/css", "top" === a && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
            }
        }

        ve.propTypes = {
            autoHighlightChange: n.bool,
            data: n.object,
            fetchOptions: n.object,
            file: n.string,
            onDataLoaded: n.func,
            scrollRequestPosition: n.oneOf(["before", "after", "near"]),
            scrollTimeStamp: n.number
        }, ve.defaultProps = {
            autoHighlightChange: !1,
            data: null,
            fetchOptions: {withCredentials: !0},
            file: null,
            onDataLoaded: null,
            scrollRequestPosition: "near",
            scrollTimeStamp: null
        };
        var ke = "ImportHAR-styles__drag-drop__3I6Pe";
        Ce(".ImportHAR-styles__drag-drop__3I6Pe{display:flex;height:100%;min-height:300px;align-items:center;justify-content:center;border:2px dashed #ccc;border-radius:4px;font-size:18px;margin:1rem;cursor:pointer;color:#7f8892}.ImportHAR-styles__drag-drop__3I6Pe:hover{border-color:#bfbfbf;color:#555}");
        Ce(".Button-styles__btn__2qZbU{display:inline-block;font-weight:400;text-align:center;vertical-align:middle;cursor:pointer;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:11px 32px;font-size:1rem;line-height:1.5;text-decoration:none;text-shadow:none;text-transform:none;box-sizing:border-box;margin:0;background-image:none;background-color:#1395f0;color:#fff;border:1px solid transparent;border-radius:4px;transition:background-color .2s}.Button-styles__btn__2qZbU:hover{text-decoration:none}.Button-styles__btn__2qZbU:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.Button-styles__btn__2qZbU[disabled]{cursor:not-allowed;color:#d8dde3;border-color:#d8dde3}.Button-styles__btn__2qZbU[disabled] svg{fill:#d8dde3}.Button-styles__btn__2qZbU[disabled]:hover{border-color:#bac3ce}.Button-styles__btn-sm__1uF90{padding:8px 16px;font-size:.9rem;height:26px}.Button-styles__btn-md-default__3h9sN{display:inline-flex;align-items:center;font-weight:400;height:36px;line-height:1;letter-spacing:0;overflow:hidden;vertical-align:middle;will-change:box-shadow;text-decoration:none;border-radius:2px;transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1)}.Button-styles__active__l-2CD.Button-styles__btn-md-default__3h9sN,.Button-styles__btn-md-default__3h9sN,.Button-styles__btn-md-default__3h9sN:active,.Button-styles__btn-md-default__3h9sN:disabled,.Button-styles__btn-md-default__3h9sN:focus,.Button-styles__btn-md-default__3h9sN:hover{background-color:transparent;border-color:transparent;outline:none}.Button-styles__btn-md-default__3h9sN:disabled{color:#555}.Button-styles__btn-md-default__3h9sN:hover{background-color:hsla(0,0%,62%,.2)}.Button-styles__btn-md-default__3h9sN:active{background-color:hsla(0,0%,62%,.4)}.Button-styles__btn-md-default__3h9sN:focus:not(:active){background-color:rgba(0,0,0,.12)}.Button-styles__btn-md-default__3h9sN svg{fill:currentColor}.Button-styles__btn-md-raised__3D_5d{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.Button-styles__btn-md-raised__3D_5d:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 2px 12px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.Button-styles__btn-md-default__3h9sN{color:#7f8892}.Button-styles__btn-md-default-raised__r1o6a{color:#fff;background:#7f8892}.Button-styles__btn-md-default-raised__r1o6a:active,.Button-styles__btn-md-default-raised__r1o6a:focus:not(:active),.Button-styles__btn-md-default-raised__r1o6a:hover{background:#7f8892}.Button-styles__btn-md-default__3h9sN.Button-styles__btn-sm__1uF90{height:26px}");
        var xe = i.bind({
            brandBlue: "#1395f0",
            btn: "Button-styles__btn__2qZbU",
            "btn-sm": "Button-styles__btn-sm__1uF90",
            "btn-md-default": "Button-styles__btn-md-default__3h9sN",
            active: "Button-styles__active__l-2CD",
            "btn-md-raised": "Button-styles__btn-md-raised__3D_5d",
            "btn-md-default-raised": "Button-styles__btn-md-default-raised__r1o6a"
        }), Ee = function (e) {
            var t, a = e.category, r = e.children, o = e.className, n = e.disabled, i = e.href, s = e.material,
                _ = e.raised, c = e.size,
                d = T(e, ["category", "children", "className", "disabled", "href", "material", "raised", "size"]),
                u = xe("btn", o, (f(t = {}, "btn-".concat(c), c), f(t, s ? "btn-md-".concat(a) : "btn-".concat(a), !0), f(t, "btn-md-".concat(a, "-raised"), _), f(t, "btn-md-raised", _), t)),
                p = i && !n ? "a" : "button";
            return l.createElement(p, y({className: u, disabled: n, href: i}, d), r)
        };
        Ee.propTypes = {
            category: n.oneOf(["default"]),
            children: n.node.isRequired,
            className: n.any,
            disabled: n.bool,
            href: n.string,
            material: n.bool,
            raised: n.bool,
            size: n.oneOf([!1, "sm"]),
            type: n.oneOf(["submit", "reset", "button", "menu"])
        }, Ee.defaultProps = {
            category: "default",
            className: null,
            disabled: !1,
            href: null,
            material: !1,
            raised: !1,
            size: !1,
            type: "button"
        };
        var Ne = {accept: ".har", multiple: !1}, Re = function (e) {
            var t = e.showButton, a = e.className, r = ge().actions, o = r.updateErrorMessage,
                n = d.useDropzone(b(b({}, Ne), {}, {
                    onDrop: function (e) {
                        var t = new FileReader;
                        t.onabort = function () {
                            return o({title: "file reading was aborted"})
                        }, t.onerror = function () {
                            return o({title: "file reading has failed"})
                        }, t.onload = function () {
                            try {
                                var e = JSON.parse(t.result);
                                a = e, r.updateData({entries: a.log.entries, pages: a.log.pages})
                            } catch (l) {
                                o({title: "Error while parsing HAR file"})
                            }
                            var a
                        }, t.readAsText(e[0])
                    }
                })), i = n.getRootProps, s = n.getInputProps;
            return l.createElement("div", i(), l.createElement("input", s()), t ? l.createElement(Ee, {
                category: "default",
                className: a,
                material: !0,
                raised: !0,
                size: "sm"
            }, "Import HAR") : l.createElement("p", {className: ke}, "Drag and drop HAR file here, or click to select file"))
        };
        Re.propTypes = {className: n.string, showButton: n.bool}, Re.defaultProps = {className: null, showButton: !0};
        var Se = {
            brandBlue: "#1395f0",
            "search-container": "Search-styles__search-container__1GtPv",
            "prepend-dropdown": "Search-styles__prepend-dropdown__1EV-n"
        };
        Ce(".Search-styles__search-container__1GtPv{margin:0;position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.Search-styles__search-container__1GtPv .Search-styles__prepend-dropdown__1EV-n{display:flex;margin-right:-1px}.Search-styles__search-container__1GtPv input{border-radius:.2rem;border-top-left-radius:0;border-bottom-left-radius:0;height:26px;padding:.25rem .5rem;font-size:.875rem;line-height:1.5;position:relative;flex:1 1 auto;width:1%;margin-bottom:0;color:#646464;background-color:#fff;background-clip:padding-box;border:1px solid #ccc}");
        var Oe = {
            brandBlue: "#1395f0",
            "dropdown-container": "Dropdown-styles__dropdown-container__14JiD",
            "dropdown-toggle": "Dropdown-styles__dropdown-toggle__N8nwZ",
            active: "Dropdown-styles__active__3sdPa",
            list: "Dropdown-styles__list__26z00",
            "list-item": "Dropdown-styles__list-item__2IKv5",
            "item-text": "Dropdown-styles__item-text__1HTaj"
        };
        Ce('.Dropdown-styles__dropdown-container__14JiD{position:relative}.Dropdown-styles__dropdown-container__14JiD .Dropdown-styles__dropdown-toggle__N8nwZ{border:1px solid #ccc;text-transform:uppercase}.Dropdown-styles__dropdown-container__14JiD .Dropdown-styles__dropdown-toggle__N8nwZ.Dropdown-styles__active__3sdPa{border-color:transparent}.Dropdown-styles__dropdown-container__14JiD .Dropdown-styles__dropdown-toggle__N8nwZ:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent;box-sizing:border-box}.Dropdown-styles__dropdown-container__14JiD .Dropdown-styles__list__26z00{z-index:1000;float:left;min-width:10rem;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border-radius:.25rem;position:absolute;will-change:transform;top:0;left:0;transform:translate3d(-1px,23px,0);list-style:none;padding:0}.Dropdown-styles__dropdown-container__14JiD .Dropdown-styles__list-item__2IKv5{padding:0;display:block;width:100%;clear:both;font-weight:400;text-align:inherit;white-space:nowrap;background:transparent;border:0}.Dropdown-styles__dropdown-container__14JiD .Dropdown-styles__list-item__2IKv5.Dropdown-styles__active__3sdPa{background:#7f8892;color:#fff}.Dropdown-styles__dropdown-container__14JiD .Dropdown-styles__item-text__1HTaj{display:block;cursor:pointer;padding:.25rem 1.5rem;text-transform:uppercase}');
        var qe = i.bind(Oe), De = function (e) {
            var t = e.items, a = e.selected, r = e.onChange, n = e.className, i = w(o.useState(!1), 2), s = i[0],
                _ = i[1], c = w(o.useState(null !== a ? a : t[0]), 2), d = c[0], u = c[1], p = o.useRef(null),
                m = o.useRef(s), f = function (e) {
                    _(e), m.current = e
                }, y = function (e) {
                    var t = e.target;
                    m.current && !p.current.contains(t) && f(!1)
                };
            return o.useEffect((function () {
                return window.addEventListener("click", y), function () {
                    window.removeEventListener("click", y)
                }
            }), []), l.createElement("span", {
                ref: p,
                className: qe("dropdown-container", n, {expanded: s})
            }, l.createElement(Ee, {
                category: "default",
                className: qe("dropdown-toggle", {active: s}),
                material: !0,
                onClick: function () {
                    return f(!s)
                },
                raised: s,
                size: "sm"
            }, d), s && l.createElement("ul", {className: Oe.list}, t.map((function (e, t) {
                return l.createElement("li", {
                    key: e,
                    className: qe("list-item", {active: e === d})
                }, l.createElement("span", {
                    className: Oe["item-text"], onClick: function () {
                        return u(t = e), r(t), void f(!1);
                        var t
                    }, role: "button", tabIndex: t
                }, e))
            }))))
        };
        De.propTypes = {
            className: n.string,
            items: n.array.isRequired,
            onChange: n.func.isRequired,
            selected: n.oneOfType([n.number, n.string])
        }, De.defaultProps = {className: null, selected: null};
        var ze = ["url", "body"], Pe = function (e) {
            var t = e.name, a = e.value, r = e.onChange;
            return l.createElement("div", {className: Se["search-container"]}, l.createElement(De, {
                className: Se["prepend-dropdown"],
                items: ze,
                onChange: function (e) {
                    r({name: e, value: a})
                },
                selected: "url"
            }), l.createElement("input", {
                className: Se.input, onChange: function (e) {
                    var a = e.target;
                    r({name: t, value: a.value})
                }, placeholder: "Filter", type: "text", value: a
            }))
        };
        Pe.propTypes = {
            name: n.string.isRequired,
            onChange: n.func.isRequired,
            value: n.string
        }, Pe.defaultProps = {value: ""};
        var Ae = {
            brandBlue: "#1395f0",
            "filters-container": "FilterContainer-styles__filters-container__d2ms5",
            "filters-button-group": "FilterContainer-styles__filters-button-group__3bOC-",
            "filter-button": "FilterContainer-styles__filter-button__1_3tn",
            "addon-action-button": "FilterContainer-styles__addon-action-button__a_eze",
            "selected-filter": "FilterContainer-styles__selected-filter__eCIzJ"
        };
        Ce(".FilterContainer-styles__filters-container__d2ms5{background:#f7f7f7;padding:8px 16px;border-bottom:1px solid #ccc}.FilterContainer-styles__filters-button-group__3bOC-{display:inline-flex;justify-content:flex-end;vertical-align:middle;width:100%}.FilterContainer-styles__filters-button-group__3bOC- .FilterContainer-styles__addon-action-button__a_eze,.FilterContainer-styles__filters-button-group__3bOC- .FilterContainer-styles__filter-button__1_3tn{flex:1 1 auto;padding:.25rem .5rem;justify-content:center}.FilterContainer-styles__filters-button-group__3bOC- .FilterContainer-styles__filter-button__1_3tn{color:#7f8892}.FilterContainer-styles__filters-button-group__3bOC- .FilterContainer-styles__addon-action-button__a_eze{margin-left:16px}.FilterContainer-styles__filters-button-group__3bOC- .FilterContainer-styles__selected-filter__eCIzJ{background:#ccc!important;box-shadow:none}");
        var He = l.createContext(q), je = function () {
            var e = o.useContext(He);
            if (!e) throw new Error("useTheme must be used within a ThemeContext");
            return e
        }, Le = function (e) {
            var t = e.options, a = b(b({}, q), t);
            return l.createElement(He.Provider, y({value: a}, e))
        };
        Le.propTypes = {options: n.object}, Le.defaultProps = {options: q};
        var Ie = {
            brandBlue: "#1395f0",
            "checkbox-container": "Checkbox-styles__checkbox-container__14zzo",
            "checkbox-label": "Checkbox-styles__checkbox-label__1XXJb",
            checkbox: "Checkbox-styles__checkbox__2VBTh"
        };
        Ce(".Checkbox-styles__checkbox-container__14zzo{padding:2px 0 0 24px;text-align:right;min-width:110px}.Checkbox-styles__checkbox-container__14zzo .Checkbox-styles__checkbox-label__1XXJb{font-style:normal;font-weight:400;color:#7f8892;cursor:pointer;text-transform:none;margin:0}.Checkbox-styles__checkbox-container__14zzo .Checkbox-styles__checkbox__2VBTh{margin-right:4px;cursor:pointer}");
        var Be = i.bind(Ie), Ue = function (e) {
            var t = e.containerClassName, a = e.isChecked, r = e.onChange, o = e.children, n = e.title;
            return l.createElement("div", {className: Be("checkbox-container", t)}, l.createElement("label", {
                className: Ie["checkbox-label"],
                title: n
            }, l.createElement("input", {checked: a, className: Ie.checkbox, onChange: r, type: "checkbox"}), o))
        };
        Ue.propTypes = {
            children: n.any.isRequired,
            containerClassName: n.string,
            isChecked: n.bool,
            onChange: n.func.isRequired,
            title: n.string
        }, Ue.defaultProps = {containerClassName: "", isChecked: !1, title: ""};
        var Fe = function (e) {
            var t = e.isError, a = e.onChange;
            return l.createElement(Ue, {
                isChecked: t, onChange: function () {
                    a(!t)
                }, title: "error"
            }, "Errors Only")
        };
        Fe.propTypes = {isError: n.bool.isRequired, onChange: n.func.isRequired};
        var Ye = function (e) {
            var t = e.className, a = e.onReset;
            return l.createElement(Ee, {
                category: "default", className: t, material: !0, onClick: function () {
                    window.history.pushState({}, document.title, "/"), a()
                }, raised: !0, size: "sm"
            }, "Reset")
        };
        Ye.propTypes = {className: n.string, onReset: n.func.isRequired}, Ye.defaultProps = {className: ""};
        var Me = i.bind(Ae), Ge = function () {
            var e = ge(), t = e.state, a = e.actions, r = je().showImportHAR, o = t.get("filter"),
                n = t.get("errorFilter");
            return l.createElement("section", {className: Ae["filters-container"]}, l.createElement(c.Row, null, l.createElement(c.Col, {
                md: 5,
                sm: 4,
                xs: 12
            }, l.createElement(Pe, y({}, t.get("search"), {onChange: a.updateSearch}))), l.createElement(c.Col, {
                md: 7,
                sm: 8,
                xs: 12
            }, l.createElement("div", {className: Ae["filters-button-group"]}, x.map((function (e) {
                var t = e.name, r = e.filterBy, n = r.value === o.value,
                    i = Me("filter-button", {"selected-filter": n});
                return l.createElement(Ee, {
                    key: t,
                    category: "default",
                    className: i,
                    material: !0,
                    onClick: function () {
                        return a.updateFilter(r)
                    },
                    raised: n,
                    size: "sm"
                }, t)
            })), l.createElement(Fe, {
                isError: n,
                onChange: a.updateErrorFilter
            }), r && l.createElement(l.Fragment, null, l.createElement(Re, {className: Ae["addon-action-button"]}), l.createElement(Ye, {
                className: Ae["addon-action-button"],
                onReset: a.resetState
            }))))))
        }, Xe = {
            brandBlue: "#1395f0",
            "value-cell": "NetworkTableHeader-styles__value-cell__3cYwS",
            "value-text": "NetworkTableHeader-styles__value-text__2j6c-",
            thead: "NetworkTableHeader-styles__thead__3yU_z",
            filename: "NetworkTableHeader-styles__filename__2g5vE",
            domain: "NetworkTableHeader-styles__domain__2x8Yp",
            "timeline-header": "NetworkTableHeader-styles__timeline-header__2tIGm",
            "network-table-row": "NetworkTableHeader-styles__network-table-row__1WaPe",
            pending: "NetworkTableHeader-styles__pending__3QqQp",
            error: "NetworkTableHeader-styles__error__3zf2U",
            highlight: "NetworkTableHeader-styles__highlight__1E9Nq",
            tooltip: "NetworkTableHeader-styles__tooltip__1d3Jl",
            "url-tooltip": "NetworkTableHeader-styles__url-tooltip__QHFP_"
        };
        Ce(".NetworkTableHeader-styles__value-cell__3cYwS .NetworkTableHeader-styles__value-text__2j6c-{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;word-break:break-all}.NetworkTableHeader-styles__thead__3yU_z tr th{text-align:left;height:32px}.NetworkTableHeader-styles__value-cell__3cYwS{width:7%;box-sizing:border-box;height:32px}.NetworkTableHeader-styles__value-cell__3cYwS.NetworkTableHeader-styles__filename__2g5vE{width:30%}.NetworkTableHeader-styles__value-cell__3cYwS.NetworkTableHeader-styles__domain__2x8Yp{max-width:10%}.NetworkTableHeader-styles__value-cell__3cYwS .NetworkTableHeader-styles__value-text__2j6c-{display:inline-block;width:100%}.NetworkTableHeader-styles__timeline-header__2tIGm{width:25%}tbody .NetworkTableHeader-styles__network-table-row__1WaPe{cursor:pointer}tbody .NetworkTableHeader-styles__network-table-row__1WaPe:nth-of-type(odd){background-color:#f7f7f7}tbody .NetworkTableHeader-styles__network-table-row__1WaPe.NetworkTableHeader-styles__pending__3QqQp{color:#aaa}tbody .NetworkTableHeader-styles__network-table-row__1WaPe.NetworkTableHeader-styles__error__3zf2U{color:#eb3f47}tbody .NetworkTableHeader-styles__network-table-row__1WaPe:hover{background:#e6e6e6}tbody .NetworkTableHeader-styles__network-table-row__1WaPe.NetworkTableHeader-styles__highlight__1E9Nq{background:#5c7288;color:#fff}.NetworkTableHeader-styles__tooltip__1d3Jl,.NetworkTableHeader-styles__url-tooltip__QHFP_{display:block;width:auto;max-width:300px;height:auto;background:#fff;border:1px solid #e6e6e6;border-radius:3px;color:#333;font-size:12px;padding:8px;opacity:1;word-break:break-all}.NetworkTableHeader-styles__url-tooltip__QHFP_{background:#000;color:#fff}");
        var Ke = i.bind(Xe), Je = function (e) {
            var t = e.showAllCols;
            return l.createElement("thead", {className: Xe.thead}, t ? l.createElement("tr", null, Object.entries(k).map((function (e) {
                var t = w(e, 2), a = t[0], r = t[1], o = r.key, n = r.name;
                return l.createElement("th", {key: a, className: Ke("value-cell", o)}, n)
            })), l.createElement("th", {className: Xe["timeline-header"]}, "Waterfall")) : l.createElement("tr", null, l.createElement("th", {className: Xe["name-header"]}, k.file.name)))
        };
        Je.propTypes = {showAllCols: n.bool.isRequired};
        var Ve = {
            brandBlue: "#1395f0",
            tooltip: "TimeChartTooltip-styles__tooltip__3wPai",
            "tooltip-info": "TimeChartTooltip-styles__tooltip-info__G5Dxy",
            "time-info": "TimeChartTooltip-styles__time-info__hi2h6",
            "waterfall-tooltip-table": "TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY",
            "waterfall-tooltip-tbody": "TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k",
            "waterfall-tooltip-value": "TimeChartTooltip-styles__waterfall-tooltip-value__2UdbA",
            "waterfall-tooltip-key": "TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs",
            "waterfall-tooltip-th": "TimeChartTooltip-styles__waterfall-tooltip-th__3f0tI",
            "waterfall-tooltip-thead": "TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9",
            "waterfall-tooltip-tr": "TimeChartTooltip-styles__waterfall-tooltip-tr__3J2Oz",
            blocked: "TimeChartTooltip-styles__blocked__6wb18",
            dns: "TimeChartTooltip-styles__dns__1FT8l",
            ssl: "TimeChartTooltip-styles__ssl__1uR9J",
            connect: "TimeChartTooltip-styles__connect__1v_2x",
            send: "TimeChartTooltip-styles__send__LV5fC",
            wait: "TimeChartTooltip-styles__wait__1v8j_",
            receive: "TimeChartTooltip-styles__receive__2LaWR",
            queueing: "TimeChartTooltip-styles__queueing__36Nu9"
        };
        Ce('.TimeChartTooltip-styles__tooltip__3wPai{display:block;width:300px;height:auto;background:#fff;border:1px solid #ccc;border-radius:3px;color:#555;font-size:12px;padding:8px;opacity:1}.Popover-tip{display:none}.TimeChartTooltip-styles__tooltip-info__G5Dxy{margin-bottom:16px}.TimeChartTooltip-styles__tooltip-info__G5Dxy .TimeChartTooltip-styles__time-info__hi2h6{margin:0}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY{border:0;width:100%}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-th__3f0tI,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-value__2UdbA,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-th__3f0tI,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-value__2UdbA{padding:0;border:0;background:transparent;font-weight:400;text-align:left}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-value__2UdbA,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-value__2UdbA{text-align:right}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-tr__3J2Oz:nth-of-type(odd),.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-tr__3J2Oz:nth-of-type(odd){background-color:#fff}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs{font-weight:700;padding:0 16px;position:relative}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs:before,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs:before{content:"";position:absolute;left:0;top:4px;width:8px;height:8px}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__blocked__6wb18,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__blocked__6wb18{color:#a1000c}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__blocked__6wb18:before,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__blocked__6wb18:before{background:#a1000c}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__dns__1FT8l,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__dns__1FT8l{color:#dcc9e5}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__dns__1FT8l:before,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__dns__1FT8l:before{background:#dcc9e5}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__ssl__1uR9J,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__ssl__1uR9J{color:#e78057}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__ssl__1uR9J:before,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__ssl__1uR9J:before{background:#e78057}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__connect__1v_2x,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__connect__1v_2x{color:#db8553}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__connect__1v_2x:before,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__connect__1v_2x:before{background:#db8553}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__send__LV5fC,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__send__LV5fC{color:#3c96c4}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__send__LV5fC:before,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__send__LV5fC:before{background:#3c96c4}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__wait__1v8j_,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__wait__1v8j_{color:#7ca0bf}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__wait__1v8j_:before,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__wait__1v8j_:before{background:#7ca0bf}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__receive__2LaWR,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__receive__2LaWR{color:#65b955}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__receive__2LaWR:before,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__receive__2LaWR:before{background:#65b955}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__queueing__36Nu9,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__queueing__36Nu9{color:#ccc}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody__11K0k .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__queueing__36Nu9:before,.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key__2SOfs.TimeChartTooltip-styles__queueing__36Nu9:before{background:#ccc}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-th__3f0tI{padding-bottom:8px;color:grey}.TimeChartTooltip-styles__waterfall-tooltip-table__1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead__A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-th__3f0tI:nth-child(2){text-align:right}');
        var We = i.bind(Ve), Qe = [{title: "Resource Scheduling", category: ["queueing"]}, {
            title: "Connection Start",
            category: ["blocked", "dns", "ssl", "connect"]
        }, {title: "Request/Response", category: ["send", "wait", "receive"]}], Ze = function (e) {
            var t = e.data, a = o.useMemo((function () {
                return t ? function (e) {
                    return b({
                        queuedAt: W(e.startTime),
                        startedAt: W(e.startTime + e._blocked_queueing),
                        totalTime: W(Q(e))
                    }, Object.keys(e).reduce((function (t, a) {
                        return t[a] = W(e[a]), t
                    }), {}))
                }(t) : null
            }), [t]);
            return a ? l.createElement("div", {className: Ve.tooltip}, l.createElement("section", {className: Ve["tooltip-info"]}, l.createElement("p", {className: Ve["time-info"]}, "Queued at ".concat(a.queuedAt)), l.createElement("p", {className: Ve["time-info"]}, "Started at ".concat(a.startedAt))), Qe.map((function (e) {
                var t = e.title, r = e.category;
                return l.createElement("section", {
                    key: t,
                    className: Ve["tooltip-info"]
                }, l.createElement("table", {className: Ve["waterfall-tooltip-table"]}, l.createElement("thead", {className: Ve["waterfall-tooltip-thead"]}, l.createElement("tr", {className: Ve["waterfall-tooltip-tr"]}, l.createElement("th", {className: Ve["waterfall-tooltip-th"]}, t), l.createElement("th", {className: Ve["waterfall-tooltip-th"]}, "DURATION"))), l.createElement("tbody", {className: Ve["waterfall-tooltip-tbody"]}, r.map((function (e) {
                    return l.createElement("tr", {
                        key: e,
                        className: Ve["waterfall-tooltip-tr"]
                    }, l.createElement("td", {className: We("waterfall-tooltip-key", e)}, E[e].name), l.createElement("td", {className: Ve["waterfall-tooltip-value"]}, a[E[e].dataKey]))
                })))))
            })), l.createElement("section", {className: Ve["tooltip-info"]}, l.createElement("p", {className: Ve["time-info"]}, "Total time ".concat(a.totalTime)))) : null
        };
        Ze.propTypes = {data: n.object.isRequired};
        var $e = function (e) {
            var t = e.timings, a = e.maxTime, r = o.useMemo((function () {
                return $(t, a)
            }), [t, a]), n = w(o.useState(!1), 2), i = n[0], s = n[1];
            return l.createElement(u, {
                body: l.createElement(Ze, {data: t}),
                isOpen: i,
                preferPlace: "below"
            }, l.createElement("div", {
                onMouseOut: function () {
                    return s(!1)
                }, onMouseOver: function () {
                    return s(!0)
                }
            }, l.createElement("svg", N, l.createElement("g", null, r.map((function (e) {
                return l.createElement("rect", y({key: e.key}, e, R))
            }))))))
        };
        $e.propTypes = {maxTime: n.number.isRequired, timings: n.object.isRequired};
        var et = i.bind(Xe), tt = function (e) {
            var t = e.datakey, a = e.unit, r = e.payload, n = w(o.useState(!1), 2), i = n[0], s = n[1],
                _ = function (e, t, a) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    switch (e) {
                        case"time":
                            return 0 !== t || r.error ? W(t) : "Pending";
                        case"status":
                            return r.error ? "(failed)" : 0 === t ? "Pending" : t;
                        default:
                            return a ? "".concat(t, " ").concat(a) : t
                    }
                }(t, r[t], a, r);
            return t === k.file.key || r.error ? l.createElement("td", {className: et("value-cell", t)}, l.createElement(u, {
                body: l.createElement("span", {className: Xe["url-tooltip"]}, t === k.file.key ? r.url : r.error ? r.error : _),
                isOpen: i,
                preferPlace: "below"
            }, l.createElement("span", {
                className: Xe["value-text"], onMouseOut: function () {
                    return s(!1)
                }, onMouseOver: function () {
                    return s(!0)
                }
            }, _))) : l.createElement("td", {className: et("value-cell", t)}, l.createElement("span", {className: Xe["value-text"]}, _))
        };
        tt.propTypes = {
            datakey: n.string.isRequired,
            payload: n.object,
            unit: n.string
        }, tt.defaultProps = {payload: {}, unit: null};
        var at = i.bind(Xe), rt = function (e) {
            var t = e.payload, a = e.maxTime, r = e.scrollHighlight, o = e.showAllCols, n = e.onSelect, i = {
                className: at("network-table-row", Z(t), {highlight: r}),
                id: "network-viewer-table-row-" + t.index,
                onClick: function () {
                    n(t)
                }
            };
            return o ? l.createElement("tr", i, Object.entries(k).map((function (e) {
                var a = w(e, 2), r = a[0], o = a[1], n = o.key, i = o.unit;
                return l.createElement(tt, {key: r, datakey: n, payload: t, unit: i})
            })), l.createElement("td", {className: Xe["timeline-header"]}, t.time ? l.createElement($e, {
                maxTime: a,
                timings: t.timings
            }) : "")) : l.createElement("tr", i, l.createElement(tt, {datakey: "filename", payload: t}))
        };
        rt.propTypes = {
            maxTime: n.number.isRequired,
            onSelect: n.func.isRequired,
            payload: n.object.isRequired,
            scrollHighlight: n.bool.isRequired,
            showAllCols: n.bool.isRequired
        };
        var ot = {
            brandBlue: "#1395f0",
            "table-container": "NetworkTableContainer-styles__table-container__1wuhD",
            "limited-cols": "NetworkTableContainer-styles__limited-cols__2gXPL",
            table: "NetworkTableContainer-styles__table__ucpm3"
        };
        Ce(".NetworkTableContainer-styles__table-container__1wuhD{flex:1 1 auto;height:100%;overflow:auto}.NetworkTableContainer-styles__table-container__1wuhD.NetworkTableContainer-styles__limited-cols__2gXPL{max-width:300px}.NetworkTableContainer-styles__table-container__1wuhD.NetworkTableContainer-styles__limited-cols__2gXPL .NetworkTableContainer-styles__table__ucpm3 td,.NetworkTableContainer-styles__table-container__1wuhD.NetworkTableContainer-styles__limited-cols__2gXPL .NetworkTableContainer-styles__table__ucpm3 th{border-right:0}.NetworkTableContainer-styles__table-container__1wuhD .NetworkTableContainer-styles__table__ucpm3{width:100%;border-right:0;border-collapse:collapse;table-layout:fixed}.NetworkTableContainer-styles__table-container__1wuhD .NetworkTableContainer-styles__table__ucpm3 td,.NetworkTableContainer-styles__table-container__1wuhD .NetworkTableContainer-styles__table__ucpm3 th{padding:.3rem}.NetworkTableContainer-styles__table-container__1wuhD .NetworkTableContainer-styles__table__ucpm3 thead th{vertical-align:bottom;color:#aaa}");
        var lt = "ErrorMessage-styles__error-container__2f0is", nt = "ErrorMessage-styles__title__1Sa7F";
        Ce(".ErrorMessage-styles__error-container__2f0is{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:1rem;width:100%}.ErrorMessage-styles__error-container__2f0is .ErrorMessage-styles__title__1Sa7F{color:red;font-weight:300}");
        var it = function (e) {
            var t = e.title, a = e.description;
            return l.createElement("div", {className: lt}, t && l.createElement("h4", {className: nt}, t), a && l.createElement("p", null, a))
        };
        it.propTypes = {description: n.any, title: n.any}, it.defaultProps = {description: null, title: null};
        var st = "InputHAR-styles__input-har-container__2zXPh", _t = "InputHAR-styles__input-har-text__QPljy",
            ct = "InputHAR-styles__example-url__cUs_t";
        Ce(".InputHAR-styles__input-har-container__2zXPh{margin:1rem;color:#7f8892;display:flex;flex-direction:column;align-items:center}.InputHAR-styles__input-har-container__2zXPh .InputHAR-styles__input-har-text__QPljy{font-size:18px;font-weight:400}.InputHAR-styles__input-har-container__2zXPh .InputHAR-styles__example-url__cUs_t{padding-left:4px;text-decoration:none}");
        var dt = "URLInput-styles__url-input-container__2MlSR", ut = "URLInput-styles__postpend-button__YSAFG",
            pt = "URLInput-styles__input__2PhRW";
        Ce(".URLInput-styles__url-input-container__2MlSR{margin:0;position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%;max-width:992px}.URLInput-styles__url-input-container__2MlSR .URLInput-styles__postpend-button__YSAFG{display:flex;margin-left:-1px;height:auto}.URLInput-styles__url-input-container__2MlSR .URLInput-styles__input__2PhRW{border-radius:.2rem;border-top-right-radius:0;border-bottom-right-radius:0;height:26px;padding:.25rem .5rem;font-size:.875rem;line-height:1.5;position:relative;flex:1 1 auto;width:1%;margin-bottom:0;color:#646464;background-color:#fff;background-clip:padding-box;border:1px solid #ccc}");
        var mt = "CORSCheckbox-styles__cors-container__3WSOL";
        Ce(".CORSCheckbox-styles__cors-container__3WSOL{display:flex;min-width:50px;width:auto;padding:0 1rem 0 0;align-items:center}");
        var ft = function (e) {
            var t = e.isEnabled, a = e.onChange;
            return l.createElement(Ue, {
                containerClassName: mt, isChecked: t, onChange: function () {
                    a(!t)
                }, title: "CORS Enable"
            }, "CORS")
        };
        ft.propTypes = {isEnabled: n.bool.isRequired, onChange: n.func.isRequired};
        var yt = function (e) {
            var t = e.onSubmit, a = w(o.useState(""), 2), r = a[0], n = a[1], i = w(o.useState(!1), 2), s = i[0],
                _ = i[1];
            return l.createElement("div", {className: dt}, l.createElement(ft, {
                isEnabled: s,
                onChange: _
            }), l.createElement("input", {
                className: pt, onChange: function (e) {
                    var t = e.target;
                    n(t.value)
                }, placeholder: "HAR file URL", type: "text", value: r
            }), l.createElement(Ee, {
                category: "default", className: ut, material: !0, onClick: function () {
                    t({file: r, isCORSEnabled: s})
                }, raised: !0, size: "sm"
            }, "GO"))
        };
        yt.propTypes = {onSubmit: n.func.isRequired};
        var ht = "https://raw.githubusercontent.com/saucelabs/network-viewer/master/examples/src/data/network.har",
            bt = function () {
                return l.createElement("div", {className: st}, l.createElement("h4", {className: _t}, "OR add HAR file URL in the below input box"), l.createElement(yt, {
                    onSubmit: function (e) {
                        var t = document.location, a = t.origin, r = t.pathname,
                            o = "".concat(a).concat(r, "?").concat(p.stringify(e));
                        document.location.href = o
                    }
                }), l.createElement("p", null, l.createElement("span", null, "For Example use this har file"), l.createElement("a", {
                    className: ct,
                    href: ht,
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, ht)))
            }, Tt = i.bind(ot), wt = function (e) {
                var t = e.onRequestSelect, a = ge(), r = a.state, o = a.actions, n = je().showImportHAR,
                    i = r.get("actualData"), s = r.get("data"), _ = r.get("totalNetworkTime"), c = r.get("error"),
                    d = r.get("selectedReqIndex"), u = !r.get("showReqDetail"),
                    p = Tt("table-container", {"limited-cols": !u}), m = function (e) {
                        o.updateScrollToIndex(e.index), o.selectRequest(e), t(e)
                    };
                return c ? l.createElement(it, c) : i.size ? l.createElement("section", {className: p}, l.createElement("table", {className: ot.table}, l.createElement(Je, {
                    maxTime: _,
                    showAllCols: u
                }), l.createElement("tbody", {className: ot["table-content"]}, Array.from(s).map((function (e) {
                    return l.createElement(rt, {
                        key: e.index,
                        maxTime: _,
                        onSelect: m,
                        payload: e,
                        scrollHighlight: d === e.index,
                        showAllCols: u
                    })
                }))))) : l.createElement("section", {className: ot["table-container"]}, n && l.createElement(l.Fragment, null, l.createElement(Re, {showButton: !1}), l.createElement(bt, null)))
            };
        wt.propTypes = {onRequestSelect: n.func}, wt.defaultProps = {
            onRequestSelect: function () {
            }
        };
        var gt = {
            "loader-container": "LoaderContainer-styles__loader-container__2eluA",
            spin: "LoaderContainer-styles__spin__3BhKg",
            load: "LoaderContainer-styles__load__3IUlP",
            text: "LoaderContainer-styles__text__1LDLu"
        };
        Ce(".LoaderContainer-styles__loader-container__2eluA{display:flex;align-items:center;justify-content:center;min-height:200px}.LoaderContainer-styles__spin__3BhKg{width:3rem;height:3rem;transform:translateZ(0);line-height:0}.LoaderContainer-styles__spin__3BhKg svg{-webkit-animation:LoaderContainer-styles__load__3IUlP 1.4s linear infinite;animation:LoaderContainer-styles__load__3IUlP 1.4s linear infinite}.LoaderContainer-styles__text__1LDLu{padding-left:15px}@-webkit-keyframes LoaderContainer-styles__load__3IUlP{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes LoaderContainer-styles__load__3IUlP{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}");
        var vt = function (e) {
            var t = e.children, a = e.show, r = e.text, o = gt.brandBlue,
                n = "Gradient-".concat(Math.round(1e7 * Math.random()));
            return a ? l.createElement("section", {className: gt["loader-container"]}, l.createElement("div", {className: gt.spin}, l.createElement("svg", {
                viewBox: "0 0 100 100",
                xmlns: "http://www.w3.org/2000/svg"
            }, l.createElement("defs", null, l.createElement("linearGradient", {id: n}, l.createElement("stop", {
                offset: "0%",
                stopColor: o
            }), l.createElement("stop", {
                offset: "75%",
                stopColor: o,
                stopOpacity: "0"
            }), l.createElement("stop", {
                offset: "100%",
                stopColor: o,
                stopOpacity: "0"
            }))), l.createElement("circle", {
                cx: "50",
                cy: "50",
                fill: "transparent",
                r: "43",
                stroke: "url(#".concat(n, ")"),
                strokeWidth: "14"
            }))), r && l.createElement("p", {className: gt.text}, r)) : t
        };
        vt.propTypes = {
            children: n.node,
            show: n.bool,
            text: n.oneOfType([n.string, n.node])
        }, vt.defaultProps = {children: null, show: !0, text: null};
        var Ct = "ReqDetailContainer-styles__req-detail-container__2hR_V",
            kt = "ReqDetailContainer-styles__nav-tabs__2Kgb_", xt = "ReqDetailContainer-styles__tab-link__1V-Fu",
            Et = "ReqDetailContainer-styles__active__2Y1lp", Nt = "ReqDetailContainer-styles__close-button__1B4_y",
            Rt = "ReqDetailContainer-styles__close-icon__2YKhN",
            St = "ReqDetailContainer-styles__tabs-container__1Ue2M";
        Ce(".ReqDetailContainer-styles__req-detail-container__2hR_V{flex:1 1 auto;height:100%;overflow:auto;background:#fff;position:relative;width:calc(100% - 300px);border-left:1px solid #ccc}.ReqDetailContainer-styles__req-detail-container__2hR_V .ReqDetailContainer-styles__nav-tabs__2Kgb_{padding-left:35px;border:0}.ReqDetailContainer-styles__req-detail-container__2hR_V .ReqDetailContainer-styles__tab-link__1V-Fu{color:#555;border:0;border-bottom:2px solid transparent}.ReqDetailContainer-styles__req-detail-container__2hR_V .ReqDetailContainer-styles__tab-link__1V-Fu:hover{text-decoration:none}.ReqDetailContainer-styles__req-detail-container__2hR_V .ReqDetailContainer-styles__tab-link__1V-Fu.ReqDetailContainer-styles__active__2Y1lp{border:0;color:#333;border-bottom:2px solid #333}.ReqDetailContainer-styles__req-detail-container__2hR_V .ReqDetailContainer-styles__close-button__1B4_y{position:absolute;left:8px;top:8px;cursor:pointer;background:transparent;border:0}.ReqDetailContainer-styles__req-detail-container__2hR_V .ReqDetailContainer-styles__close-button__1B4_y .ReqDetailContainer-styles__close-icon__2YKhN{height:8px;width:8px}.ReqDetailContainer-styles__req-detail-container__2hR_V .ReqDetailContainer-styles__close-button__1B4_y .ReqDetailContainer-styles__close-icon__2YKhN g{stroke:#555}.ReqDetailContainer-styles__req-detail-container__2hR_V .ReqDetailContainer-styles__close-button__1B4_y:hover .ReqDetailContainer-styles__close-icon__2YKhN g{stroke:#000}.ReqDetailContainer-styles__req-detail-container__2hR_V .ReqDetailContainer-styles__tabs-container__1Ue2M{display:flex;width:100%;padding:16px;height:calc(100% - 35px);overflow:auto}");
        var Ot = {
            brandBlue: "#1395f0",
            "nav-tabs": "Tabs-styles__nav-tabs__36Cdr",
            "tab-item": "Tabs-styles__tab-item__3_I_3",
            active: "Tabs-styles__active__22W8M"
        };
        Ce(".Tabs-styles__nav-tabs__36Cdr{border-bottom:1px solid #e6e6e6;display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.Tabs-styles__tab-item__3_I_3{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem;margin-bottom:-1px;display:block;padding:.5rem 1rem;color:#007bff;text-decoration:none;background-color:transparent;cursor:pointer}.Tabs-styles__tab-item__3_I_3:active,.Tabs-styles__tab-item__3_I_3:focus{outline:none}.Tabs-styles__tab-item__3_I_3.Tabs-styles__active__22W8M{color:#646464;background-color:#fff;border-color:#e6e6e6 #e6e6e6 #fff}");
        var qt = i.bind(Ot), Dt = function (e) {
            var t = e.onUpdate, a = e.selectedKey, r = e.defaultSelectedKey, n = e.children, i = e.navTabsClassName,
                s = e.tabsContainerClassName, _ = e.navLinkClassName, c = e.activeClassName, d = w(o.useState([]), 2),
                u = d[0], p = d[1];
            o.useEffect((function () {
                var e = [];
                l.Children.forEach(n, (function (t) {
                    if (l.isValidElement(t)) {
                        var a = t.props, r = a.name, o = a.eventKey, n = a.children;
                        e.push({name: r, key: o, component: n})
                    }
                })), p(e)
            }), [n]);
            var m = w(o.useState(r || (u && u.length ? u[0].key : null)), 2), y = m[0], h = m[1];
            return l.createElement(l.Fragment, null, l.createElement("nav", {className: qt("nav-tabs", i)}, u.map((function (e, a) {
                var r = e.key, o = e.name;
                return l.createElement("a", {
                    key: r,
                    className: qt("tab-item", _, f({}, c || Ot.active, y === r)),
                    onClick: function () {
                        return h(e = r), void (t && t(e));
                        var e
                    },
                    role: "tab",
                    tabIndex: a
                }, o)
            }))), l.createElement("section", {className: qt(s)}, function () {
                var e = u.find((function (e) {
                    return e.key === (a || y)
                }));
                return e ? e.component : null
            }()))
        };
        Dt.propTypes = {
            activeClassName: n.string,
            children: n.node.isRequired,
            defaultSelectedKey: n.string,
            navLinkClassName: n.string,
            navTabsClassName: n.string,
            onUpdate: n.func,
            selectedKey: n.string,
            tabsContainerClassName: n.string
        }, Dt.defaultProps = {
            activeClassName: null,
            defaultSelectedKey: null,
            navLinkClassName: null,
            navTabsClassName: null,
            onUpdate: null,
            selectedKey: null,
            tabsContainerClassName: null
        };
        var zt = function (e) {
            return e.children
        };
        zt.propTypes = {children: n.node.isRequired};
        var Pt = {
            brandBlue: "#1395f0",
            "headers-container": "Headers-styles__headers-container__Pii4i",
            "header-info": "Headers-styles__header-info__1-twg",
            active: "Headers-styles__active__69MTu",
            "caret-icon": "Headers-styles__caret-icon__3wwr3",
            "header-title": "Headers-styles__header-title__1uyNJ",
            "encode-url": "Headers-styles__encode-url__1JVy5",
            "header-detail": "Headers-styles__header-detail__2YJju",
            "info-row": "Headers-styles__info-row__seABz",
            "info-caption": "Headers-styles__info-caption__2tB9Y",
            "info-value": "Headers-styles__info-value__2PlYe"
        };
        Ce(".Headers-styles__headers-container__Pii4i{width:100%}.Headers-styles__headers-container__Pii4i .Headers-styles__header-info__1-twg{border-bottom:1px solid #e6e6e6;margin-bottom:16px;padding-bottom:16px}.Headers-styles__headers-container__Pii4i .Headers-styles__header-info__1-twg:last-child{margin-bottom:0}.Headers-styles__headers-container__Pii4i .Headers-styles__header-info__1-twg.Headers-styles__active__69MTu .Headers-styles__caret-icon__3wwr3{transform:translateY(-1px) translateX(-5px) rotate(180deg)}.Headers-styles__header-title__1uyNJ{margin:0;cursor:pointer;display:inline-block}.Headers-styles__header-title__1uyNJ .Headers-styles__caret-icon__3wwr3{display:inline-block;height:8px;transform:translateY(-1px) translateX(-5px) rotate(90deg);width:8px}.Headers-styles__header-title__1uyNJ .Headers-styles__encode-url__1JVy5{margin-left:8px;font-size:12px}.Headers-styles__header-title__1uyNJ:focus,.Headers-styles__header-title__1uyNJ span:focus{outline:none}.Headers-styles__header-detail__2YJju{padding:16px 0 0 16px}.Headers-styles__header-detail__2YJju .Headers-styles__info-row__seABz{margin:0;font-size:12px;padding-bottom:8px}.Headers-styles__header-detail__2YJju .Headers-styles__info-row__seABz:last-child{padding-bottom:0}.Headers-styles__header-detail__2YJju .Headers-styles__info-caption__2tB9Y{font-weight:700;padding-right:8px}.Headers-styles__header-detail__2YJju .Headers-styles__info-value__2PlYe{word-break:break-all}");
        var At = function (e) {
            var t = e.data;
            return l.createElement("div", {className: Pt["header-detail"]}, Object.entries(S).map((function (e) {
                var a = w(e, 2), r = a[0], o = a[1], n = o.key, i = o.name;
                return l.createElement("p", {
                    key: r,
                    className: Pt["info-row"]
                }, l.createElement("span", {className: Pt["info-caption"]}, "".concat(i, ":")), l.createElement("span", {className: Pt["info-value"]}, "status" === n && t.error ? t.error : t[n]))
            })))
        };
        At.propTypes = {data: n.object}, At.defaultProps = {data: null};
        var Ht = function (e) {
            var t = e.data;
            return l.createElement("div", {className: Pt["header-detail"]}, t.headers.response.map((function (e, t) {
                var a = e.name, r = e.value;
                return l.createElement("p", {
                    key: "".concat(a, "-").concat(t),
                    className: Pt["info-row"]
                }, l.createElement("span", {className: Pt["info-caption"]}, "".concat(a, ":")), l.createElement("span", {className: Pt["info-value"]}, r))
            })))
        };
        Ht.propTypes = {data: n.object}, Ht.defaultProps = {data: null};
        var jt = function (e) {
            var t = e.data;
            return l.createElement("div", {className: Pt["header-detail"]}, t.headers.request.map((function (e, t) {
                var a = e.name, r = e.value;
                return l.createElement("p", {
                    key: "".concat(a, "-").concat(t),
                    className: Pt["info-row"]
                }, l.createElement("span", {className: Pt["info-caption"]}, "".concat(a, ":")), l.createElement("span", {className: Pt["info-value"]}, r))
            })))
        };
        jt.propTypes = {data: n.object}, jt.defaultProps = {data: null};
        var Lt = function (e) {
            var t = e.data, a = e.isURLEncoded;
            return l.createElement("div", {className: Pt["header-detail"]}, t.headers.queryString.map((function (e, t) {
                var r = e.name, o = e.value;
                return l.createElement("p", {
                    key: "".concat(r, "-").concat(t),
                    className: Pt["info-row"]
                }, l.createElement("span", {className: Pt["info-caption"]}, "".concat(r, ":")), l.createElement("span", {className: Pt["info-value"]}, a ? decodeURIComponent(o) : o))
            })))
        };
        Lt.propTypes = {data: n.object, isURLEncoded: n.bool.isRequired}, Lt.defaultProps = {data: null};
        var It = function (e) {
            var t = e.data, a = e.isURLEncoded;
            return l.createElement("div", {className: Pt["header-detail"]}, t.headers.postData.params.map((function (e, t) {
                var r = e.name, o = e.value;
                return l.createElement("p", {
                    key: "".concat(r, "-").concat(t),
                    className: Pt["info-row"]
                }, l.createElement("span", {className: Pt["info-caption"]}, "".concat(r, ":")), l.createElement("span", {className: Pt["info-value"]}, a ? decodeURIComponent(o) : o))
            })))
        };
        It.propTypes = {data: n.object, isURLEncoded: n.bool.isRequired}, It.defaultProps = {data: null};
        var Bt = function (e) {
            var t = e.className;
            return l.createElement("svg", {
                className: t,
                height: "8",
                preserveAspectRatio: "xMidYMid",
                viewBox: "0 0 13 8",
                width: "13",
                xmlns: "http://www.w3.org/2000/svg"
            }, l.createElement("g", null, l.createElement("path", {
                d: "M11.547,8.008 C11.547,8.008 6.500,2.919 6.500,2.919 C6.500,2.919 1.453,8.008 1.453,8.008 C1.453,8.008 0.011,6.554 0.011,6.554 C0.011,6.554 6.500,0.011 6.500,0.011 C6.500,0.011 12.989,6.554 12.989,6.554 C12.989,6.554 11.547,8.008 11.547,8.008 Z",
                fillRule: "evenodd"
            })))
        };
        Bt.propTypes = {className: n.string}, Bt.defaultProps = {className: ""};
        var Ut = {true: "URL encoded", false: "decoded"}, Ft = function (e) {
            var t = e.onClick, a = e.eventKey, r = e.supportEncode, o = e.onChangeEncode, n = e.isURLEncoded;
            return l.createElement("div", {className: Pt["header-title"]}, l.createElement("span", {
                onClick: function () {
                    return t(O[a].key)
                }, role: "button", tabIndex: 0
            }, l.createElement(Bt, {className: Pt["caret-icon"]}), O[a].name), r && l.createElement("span", {
                className: Pt["encode-url"],
                onClick: o,
                role: "button",
                tabIndex: 0
            }, "view ".concat(Ut[n])))
        };
        Ft.propTypes = {
            eventKey: n.string.isRequired,
            isURLEncoded: n.bool,
            onChangeEncode: n.func.isRequired,
            onClick: n.func.isRequired,
            supportEncode: n.bool
        }, Ft.defaultProps = {isURLEncoded: !0, supportEncode: !1};
        var Yt = i.bind(Pt), Mt = function (e) {
            var t = e.eventKey, a = e.data, r = e.component, n = e.supportEncode, i = w(o.useState(!0), 2), s = i[0],
                _ = i[1], c = w(o.useState(!0), 2), d = c[0], u = c[1], p = function () {
                    return u(!d)
                }, m = function () {
                    return r({data: a, isURLEncoded: d, onChangeEncode: p})
                };
            return l.createElement("div", {className: Yt("header-info", {active: s})}, l.createElement(Ft, {
                eventKey: t,
                isURLEncoded: d,
                onChangeEncode: p,
                onClick: function () {
                    return _(!s)
                },
                supportEncode: n
            }), s && l.createElement(m, null))
        };
        Mt.propTypes = {
            component: n.func.isRequired,
            data: n.object,
            eventKey: n.string.isRequired,
            supportEncode: n.bool
        }, Mt.defaultProps = {data: null, supportEncode: !1};
        var Gt = function (e) {
            var t = e.data;
            return t ? l.createElement("section", {className: Pt["headers-container"]}, l.createElement(Mt, {
                component: At,
                data: t,
                eventKey: "general"
            }), l.createElement(Mt, {component: Ht, data: t, eventKey: "response"}), l.createElement(Mt, {
                component: jt,
                data: t,
                eventKey: "request"
            }), t.headers.queryString && t.headers.queryString.size && l.createElement(Mt, {
                component: Lt,
                data: t,
                eventKey: "queryString",
                supportEncode: !0
            }), t.headers.postData && t.headers.postData.params && l.createElement(Mt, {
                component: It,
                data: t,
                eventKey: "formData",
                supportEncode: !0
            })) : null
        };
        Gt.propTypes = {data: n.object}, Gt.defaultProps = {data: null};
        var Xt = function (e) {
            var t = e.className;
            return l.createElement("svg", {
                className: t,
                height: "16",
                viewBox: "0 0 17 16",
                width: "17"
            }, l.createElement("g", {
                fill: "none",
                fillRule: "evenodd",
                stroke: "#ACB2B8",
                strokeLinecap: "round",
                transform: "translate(1)"
            }, l.createElement("path", {d: "M0 0L15.2460858 15.2460858M15.2460858 0L0 15.2460858"})))
        };
        Xt.propTypes = {className: n.string}, Xt.defaultProps = {className: ""};
        var Kt = {
            brandBlue: "#1395f0",
            "no-response": "Response-styles__no-response__2CGBc",
            "response-content": "Response-styles__response-content__1SG-3"
        };
        Ce(".Response-styles__no-response__2CGBc{display:flex;align-items:center;justify-content:center;font-size:18px;width:100%;color:#7f8892}.Response-styles__response-content__1SG-3{font-size:12px;width:100%}");
        var Jt = function () {
            return l.createElement("h4", {className: Kt["no-response"]}, "This request has no response data available.")
        }, Vt = function (e) {
            var t = e.data, a = t && t.body ? t.body : null;
            /*Anpassung von SeleniumConsulting start*/
            /*return a ? l.createElement("div", {className: Kt["response-content"]}, l.createElement("pre", {className: Kt["log-body-colorless"]}, a)) : l.createElement(Jt, null)*/
            return a ? l.createElement("div", {className: Kt["response-content"]}, l.createElement("pre", {className: Kt["log-body-colorless"]}, ["png"].includes(t.type)?[l.createElement("h4", {}, "Content:"),a,l.createElement("h4", {}, "Preview:"),l.createElement("img", {src:"data:image/png;base64, ".concat(a)})]:a)) : l.createElement(Jt, null)
            /*ENDE*/
        };
        Vt.propTypes = {data: n.object}, Vt.defaultProps = {data: null};
        var Wt = function () {
            var e = ge(), t = e.actions, a = e.state.get("reqDetail");
            return l.createElement("div", {className: Ct}, l.createElement("button", {
                className: Nt,
                onClick: function () {
                    t.selectRequest(null)
                },
                type: "button"
            }, l.createElement(Xt, {className: Rt})), l.createElement(Dt, {
                activeClassName: Et,
                defaultSelectedKey: "headers",
                navLinkClassName: xt,
                navTabsClassName: kt,
                tabsContainerClassName: St
            }, l.createElement(zt, {
                eventKey: "headers",
                name: "Headers"
            }, l.createElement(Gt, {data: a})), l.createElement(zt, {
                eventKey: "response",
                name: "Response"
            }, l.createElement(Vt, {data: a}))))
        }, Qt = "MainContainer-styles__main-container__1OaeJ";
        Ce(".MainContainer-styles__main-container__1OaeJ{display:flex;flex-wrap:wrap;flex-direction:row;height:calc(100% - 76px)}");
        var Zt = "TimelineContainer-styles__timeline-container__2Wcfe";
        Ce(".TimelineContainer-styles__timeline-container__2Wcfe{width:100%;border-bottom:1px solid #d8dde3}");
        var $t = "TimelineChart-styles__chart-container__1GiMD", ea = "TimelineChart-styles__scatter-chart__1XfAv";
        Ce(".TimelineChart-styles__chart-container__1GiMD{margin:0 8px}.TimelineChart-styles__scatter-chart__1XfAv tspan{font-size:10px;fill:grey}");
        var ta = function (e) {
            var t = e.payload, a = e.maxTime, r = e.cx, n = e.cy, i = e.index, s = t.timings,
                _ = o.useMemo((function () {
                    return $(s, a, r, i, n)
                }), [s, a]);
            return t ? l.createElement("g", null, _.map((function (e) {
                return l.createElement("rect", y({key: e.key}, e, {height: 2}))
            }))) : null
        };
        ta.propTypes = {
            cx: n.number,
            cy: n.number,
            index: n.number,
            maxTime: n.number.isRequired,
            payload: n.object
        }, ta.defaultProps = {cx: 0, cy: 0, index: 0, payload: null};
        var aa = "TimelineTooltip-styles__tooltip__1dJW9", ra = "TimelineTooltip-styles__content__3PpYM";
        Ce(".TimelineTooltip-styles__tooltip__1dJW9{display:block;width:300px;height:auto;background:#fff;border:1px solid #e6e6e6;border-radius:3px;color:#555;font-size:12px;padding:8px;opacity:1}.TimelineTooltip-styles__content__3PpYM{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}");
        var oa = function (e) {
            var t = e.payload;
            return t && t.length ? l.createElement("div", {className: aa}, l.createElement("div", {className: ra}, t[0].payload.filename), l.createElement("div", null, "Started at: ".concat(P(t[0].payload.timings.startTime)))) : null
        };
        oa.propTypes = {payload: n.array}, oa.defaultProps = {payload: null};
        var la = function (e) {
            var t = e.chartData, a = e.totalNetworkTime;
            return l.createElement("div", {className: $t}, l.createElement(m.ResponsiveContainer, {
                height: 100,
                width: "100%"
            }, l.createElement(m.ScatterChart, {className: ea}, l.createElement(m.XAxis, {
                axisLine: !1,
                dataKey: "timings.startTime",
                domain: [0, a],
                interval: "preserveStartEnd",
                orientation: "top",
                tickCount: 10,
                tickFormatter: P,
                tickLine: !1,
                type: "number"
            }), l.createElement(m.YAxis, {
                dataKey: "index",
                domain: ["min", "max"],
                hide: !0,
                reversed: !0
            }), l.createElement(m.Tooltip, {content: l.createElement(oa, null)}), l.createElement(m.Scatter, {
                data: t,
                shape: l.createElement(ta, {maxTime: a})
            }))))
        };
        la.propTypes = {chartData: n.array.isRequired, totalNetworkTime: n.number.isRequired};
        var na = function () {
            var e = ge().state, t = e.get("data"), a = e.get("actualData"), r = e.get("error"),
                o = e.get("totalNetworkTime");
            return r || !a.size ? null : l.createElement("section", {className: Zt}, l.createElement(la, {
                chartData: t.toArray(),
                totalNetworkTime: o
            }))
        };
        Ce(".NetworkTableFooter-styles__footer__3FJ4U{border-top:1px solid #ccc;position:absolute;bottom:0;width:100%;background:#f7f7f7;padding:8px;display:inline-flex;vertical-align:middle}.NetworkTableFooter-styles__footer__3FJ4U span{flex:1 1 auto;justify-content:center;display:inline-flex;align-items:center;border-right:1px solid #ccc}.NetworkTableFooter-styles__footer__3FJ4U span:last-child{border-right:none}");
        var ia = i.bind({brandBlue: "#1395f0", footer: "NetworkTableFooter-styles__footer__3FJ4U"}), sa = function (e) {
            var t = e.dataSummary, a = e.showAllInfo;
            return l.createElement("div", {className: ia("footer")}, a ? l.createElement(l.Fragment, null, l.createElement("span", null, "".concat(t.get("totalRequests"), " requests")), l.createElement("span", null, "".concat(z(t.get("totalTransferredSize")), " transferred")), l.createElement("span", null, "".concat(z(t.get("totalUncompressedSize")), " resources")), l.createElement("span", null, "Finished: ".concat(P(t.get("finish")))), l.createElement("span", null, "DOMContentLoaded: ".concat(P(t.get("timings").DOMContentLoaded))), l.createElement("span", null, "Load: ".concat(P(t.get("timings").onLoad)))) : l.createElement("span", null, "".concat(t.get("totalRequests"), " requests")))
        };
        sa.propTypes = {dataSummary: n.object.isRequired, showAllInfo: n.bool}, sa.defaultProps = {showAllInfo: !0};
        var _a = function (e) {
            var t = e.onRequestSelect, a = ge().state, r = je().showTimeline, o = a.get("loading"),
                n = a.get("showReqDetail"), i = a.get("dataSummary"), s = a.get("actualData");
            return l.createElement(l.Fragment, null, l.createElement(vt, {
                show: o,
                text: "Please wait, Fetching file is in progress."
            }, r && l.createElement(na, null), l.createElement(Ge, null), l.createElement("section", {className: Qt}, l.createElement(wt, {onRequestSelect: t}), n && l.createElement(Wt, null)), s.size ? l.createElement(sa, {dataSummary: i}) : null))
        };
        _a.propTypes = {onRequestSelect: n.func}, _a.defaultProps = {
            onRequestSelect: function () {
            }
        };
        Ce(".NetworkViewer-styles__network-viewer__2ML38{height:100%}.NetworkViewer-styles__network-viewer__2ML38 *{box-sizing:border-box}");
        var ca = i.bind({"network-viewer": "NetworkViewer-styles__network-viewer__2ML38"}), da = function (e) {
            var t = e.file, a = e.data, r = e.fetchOptions, o = e.scrollTimeStamp, n = e.options, i = e.onRequestSelect,
                s = e.scrollRequestPosition, _ = e.autoHighlightChange, c = e.onDataLoaded, d = e.containerClassName;
            return l.createElement("section", {className: ca("network-viewer", d)}, l.createElement(Le, {options: n}, l.createElement(ve, {
                autoHighlightChange: _,
                data: a,
                fetchOptions: r,
                file: t,
                onDataLoaded: c,
                scrollRequestPosition: s,
                scrollTimeStamp: o
            }, l.createElement(_a, {onRequestSelect: i}))))
        };
        da.propTypes = {
            autoHighlightChange: n.bool,
            containerClassName: n.string,
            data: n.object,
            fetchOptions: n.object,
            file: n.string,
            onDataLoaded: n.func,
            onRequestSelect: n.func,
            options: n.object,
            scrollRequestPosition: n.oneOf(["before", "after", "near"]),
            scrollTimeStamp: n.number
        }, da.defaultProps = {
            autoHighlightChange: !1,
            containerClassName: null,
            data: null,
            fetchOptions: {withCredentials: !0},
            file: null,
            onDataLoaded: null,
            onRequestSelect: function () {
            },
            options: null,
            scrollRequestPosition: "near",
            scrollTimeStamp: null
        }, t.NetworkViewer = da
    }, 190: function (e, t, a) {
        e.exports = a(431)
    }, 428: function (e, t, a) {
    }, 431: function (e, t, a) {
        "use strict";
        a.r(t);
        var r = a(1), o = a.n(r), l = a(40), n = a.n(l), i = a(109), s = a(102), _ = a.n(s), c = a(175), d = a(62),
            u = a.n(d), p = a(108), m = a.n(p), f = function () {
                return o.a.createElement("footer", {className: m.a.footer}, o.a.createElement("span", null, "For more information please check"), o.a.createElement("a", {
                    className: m.a.link,
                    href: "//github.com/saucelabs/network-viewer",
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, "Github"))
            }, y = a(103), h = _.a.bind(u.a), b = function () {
                var e = Object(r.useState)(!1), t = Object(i.a)(e, 2), a = t[0], l = t[1], n = Object(r.useState)(null),
                    s = Object(i.a)(n, 2), _ = s[0], d = s[1],
                    p = h("network-container", {"network-container-data-loaded": a});
                return Object(r.useState)((function () {
                    var e = function () {
                        var e = Object(y.parse)(document.location.search, {ignoreQueryPrefix: !0});
                        return e && Object.keys(e).length ? {
                            file: e.file,
                            fetchOptions: {withCredentials: "true" === e.isCORSEnabled}
                        } : null
                    }();
                    e && d(e)
                }), []), o.a.createElement("section", {className: u.a["app-container"]}, o.a.createElement("div", {className: p}, o.a.createElement(c.NetworkViewer, Object.assign({
                    onDataLoaded: function () {
                        return l(!0)
                    }
                }, _))), !a && o.a.createElement("div", {className: u.a["app-info"]}, o.a.createElement(f, null)))
            };
        a(428);
        n.a.render(o.a.createElement(b, null), document.getElementById("root"))
    }, 62: function (e, t, a) {
        e.exports = {
            brandBlue: "#1395f0",
            "app-container": "App_app-container__RxDqx",
            "network-container": "App_network-container__8rwSL",
            "network-container-data-loaded": "App_network-container-data-loaded__1PQDw"
        }
    }
}, [[190, 1, 2]]]);
//# sourceMappingURL=main.9d852b79.chunk.js.map
