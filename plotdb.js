function deepEq$(e, t, a) {
    function n(e, t, o) {
        var u, d, c, s, p, f, h, b;
        if (null == e || null == t) return e === t;
        if (e.__placeholder__ || t.__placeholder__) return !0;
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (u = r.call(e), r.call(t) != u) return !1;
        switch (u) {
            case "[object String]":
                return e == String(t);
            case "[object Number]":
                return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (d = o.length; d--;)
            if (o[d] == e) return !0;
        if (o.push(e), c = 0, s = !0, "[object Array]" == u) {
            if (p = e.length, f = t.length, l) {
                switch (a) {
                    case "===":
                        s = p === f;
                        break;
                    case "<==":
                        s = p <= f;
                        break;
                    case "<<=":
                        s = p < f
                }
                c = p, l = !1
            } else s = p === f, c = p;
            if (s)
                for (; c-- && (s = c in e == c in t && n(e[c], t[c], o)););
        } else {
            if ("constructor" in e != "constructor" in t || e.constructor != t.constructor) return !1;
            for (h in e)
                if (i(e, h) && (c++, !(s = i(t, h) && n(e[h], t[h], o)))) break;
            if (s) {
                b = 0;
                for (h in t) i(t, h) && ++b;
                l ? s = "<<=" === a ? c < b : "<==" === a ? c <= b : c === b : (l = !1, s = c === b)
            }
        }
        return o.pop(), s
    }
    var r = {}.toString,
        o = {}.hasOwnProperty,
        i = function (e, t) {
            return o.call(e, t)
        },
        l = !0;
    return n(e, t, [])
}

function in$(e, t) {
    for (var a = -1, n = t.length >>> 0; ++a < n;)
        if (e === t[a]) return !0;
    return !1
}

function import$(e, t) {
    var a = {}.hasOwnProperty;
    for (var n in t) a.call(t, n) && (e[n] = t[n]);
    return e
}

function import$(e, t) {
    var a = {}.hasOwnProperty;
    for (var n in t) a.call(t, n) && (e[n] = t[n]);
    return e
}

function import$(e, t) {
    var a = {}.hasOwnProperty;
    for (var n in t) a.call(t, n) && (e[n] = t[n]);
    return e
}

function import$(e, t) {
    var a = {}.hasOwnProperty;
    for (var n in t) a.call(t, n) && (e[n] = t[n]);
    return e
}

function import$(e, t) {
    var a = {}.hasOwnProperty;
    for (var n in t) a.call(t, n) && (e[n] = t[n]);
    return e
}

function import$(e, t) {
    var a = {}.hasOwnProperty;
    for (var n in t) a.call(t, n) && (e[n] = t[n]);
    return e
}
var plotdb;
plotdb = {}, "undefined" != typeof window && null !== window && (window.plotdb = plotdb),
    function () {
        if (null == Array.from) Array.from = function () {
            var e, t, a, n, r;
            return e = Object.prototype.toString, t = function (t) {
                    return "function" == typeof t || deepEq$(e.call(t), "[object Function]", "===")
                }, a = function (e) {
                    var t;
                    return t = Number(e), isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
                }, n = Math.pow(2, 53) - 1, r = function (e) {
                    var t;
                    return t = a(e), Math.min(Math.max(t, 0), n)
                },
                function (e) {
                    var a, n, o, i, l, u, d, c;
                    if (a = this, n = Object(e), null === e) throw new TypeError("Array.from requires an array-like object");
                    if (o = arguments.length > 1 ? arguments[1] : void 0, !deepEq$(typeof o, "undefined", "===")) {
                        if (!t(o)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                        arguments.length > 2 && (i = arguments[2])
                    }
                    for (l = r(n.length), u = t(a) ? Object(new a(l)) : new Array(l), d = 0; d < l;) c = n[d], u[d] = o ? void 0 === i ? o(c, d) : o.call(i, c, d) : c, d += 1;
                    return u.length = l, u
                }
        }()
    }();
var plotdb;
void 0 !== plotdb && null !== plotdb || (plotdb = {}), plotdb.String = {
        name: "String",
        default: "",
        level: 2,
        basetype: [],
        test: function () {
            return !0
        },
        parse: function (e) {
            return e || ""
        }
    }, plotdb.Order = {
        name: "Order",
        default: function (e, t, a) {
            return a
        },
        level: 4,
        basetype: [plotdb.String],
        test: function (e) {
            return !!plotdb.OrderTypes.map(function (t) {
                return t.test(e)
            }).filter(function (e) {
                return e
            })[0]
        },
        parse: function (e) {
            return e
        },
        order: {
            Ascending: function (e, t) {
                return t > e ? -1 : t < e ? 1 : 0
            },
            Descending: function (e, t) {
                return t > e ? 1 : t < e ? -1 : 0
            }
        },
        sort: function (e, t, a) {
            var n, r, o, i, l, u, d, c, s, p;
            for (null == a && (a = !0), n = t ? e.map(function (e) {
                    return e[t]
                }) : e, r = plotdb.OrderTypes.map(function (e) {
                    return e
                }), o = 0, i = n.length; o < i; ++o) {
                for (l = o, u = 0, d = r.length; u < d; ++u) r[c = u].test(n[l]) || (r[c] = null);
                r = r.filter(function (e) {
                    return e
                })
            }
            if (s = r[0], p = ((s || {}).order || this.order)[a ? "Ascending" : "Descending"], t) {
                if (s)
                    for (o = 0, i = e.length; o < i; ++o) e[l = o][t] = s.parse(e[l][t]);
                return e.sort(function (e, a) {
                    return p(e[t], a[t])
                })
            }
            if (s)
                for (o = 0, i = e.length; o < i; ++o) e[l = o] = s.parse(e[l]);
            return e.sort(p)
        }
    }, plotdb.Boolean = {
        name: "Boolean",
        default: !0,
        level: 8,
        basetype: [plotdb.Order],
        test: function (e) {
            return !!/^(true|false|yes|no|[yntf01])$/.exec(e)
        },
        parse: function (e) {
            return e && "string" == typeof e ? !!/^(yes|true|[yt])$/.exec(e.trim()) || !(!/\d+/.exec(e.trim()) || "0" === e.trim()) : !!e
        },
        order: {
            Descending: function (e, t) {
                return t - e
            },
            Ascending: function (e, t) {
                return e - t
            },
            index: function (e) {
                return e ? 1 : 0
            }
        }
    }, plotdb.Bit = {
        name: "Bit",
        default: 0,
        level: 10,
        basetype: [plotdb.Boolean],
        test: function (e) {
            return !!/^[01]$/.exec(e)
        },
        parse: function (e) {
            return e && "0" !== e ? 1 : 0
        },
        order: {
            Descending: function (e, t) {
                return t - e
            },
            Ascending: function (e, t) {
                return e - t
            },
            index: function (e) {
                return e
            }
        }
    }, plotdb.Numstring = {
        name: "Numstring",
        default: "",
        level: 6,
        basetype: [plotdb.Order],
        test: function (e) {
            return !!e && ("object" == typeof e && "Numstring" === e.type || /\d+/.exec(e + ""))
        },
        parse: function (e) {
            var t, a, n, r, o;
            if (!e) return null;
            if (e && "object" == typeof e && "Numstring" === e.type) return e;
            for (t = [], n = 0, r = (a = e.split ? e.split(/\.?[^0-9.]+/g) : [e]).length; n < r; ++n) a[o = n] && t.push(parseFloat(a[o]));
            return new plotdb.Numstring.object({
                raw: e,
                numbers: t,
                len: t.length
            })
        },
        order: {
            Ascending: function (e, t) {
                var a, n, r, o, i, l;
                if (!e) return t ? -1 : 0;
                for (a = e.numbers, n = t.numbers, r = 0, o = e.len; r < o; ++r)
                    if (i = r, l = a[i] - n[i]) return l;
                return e.len - t.len
            },
            Descending: function (e, t) {
                return plotdb.Numstring.order.Ascending(t, e)
            },
            index: function (e) {
                return e.numbers[0]
            }
        },
        object: function (e) {
            var t, a, n;
            return t = e.raw, a = e.numbers, n = e.len, this.raw = t + "", this.numbers = a, this.len = n, this.type = "Numstring", this
        }
    }, plotdb.Numstring.object.prototype.toString = function () {
        return this.raw
    }, plotdb.Number = {
        name: "Number",
        default: 0,
        level: 8,
        basetype: [plotdb.Numstring],
        test: function (e) {
            return !isNaN(+((e || "") + "").replace(/,/g, "").replace(/%$/, ""))
        },
        parse: function (e) {
            return "string" == typeof e && (e = parseFloat(e.replace(/,/g, "")), /%$/.exec(e) && (e = +e.replace(/%$/, "") / 100)), +e
        },
        order: {
            Ascending: function (e, t) {
                return e - t
            },
            Descending: function (e, t) {
                return t - e
            },
            index: function (e) {
                return e
            }
        }
    }, plotdb.Date = {
        name: "Date",
        default: "1970/1/1",
        level: 8,
        basetype: [plotdb.Numstring],
        test: function (e) {
            return !!e && ("object" == typeof e && "Date" === e.type || !(/^\d*$/.exec(e) || !this.parse(e)))
        },
        parse: function (e) {
            var t, a, n;
            if (!e) return null;
            if ("object" == typeof e && "Date" === e.type) return e;
            if (t = /^(\d{2,3})\/([01]?\d)(?:\/([0123]?\d))?$/.exec(e), !((a = t ? new Date(t[1], t[2], t[3]) : new Date(e)) instanceof Date) || isNaN(a.getTime())) {
                if (!(n = /^(\d{1,2})[/-](\d{4})$/.exec(e))) return null;
                a = new Date(n[2], parseInt(n[1]) - 1)
            }
            return new plotdb.Date.object({
                raw: e,
                parsed: a
            })
        },
        order: {
            Ascending: function (e, t) {
                return e.parsed.getTime() - t.parsed.getTime()
            },
            Descending: function (e, t) {
                return t.parsed.getTime() - e.parsed.getTime()
            },
            index: function (e) {
                return e.parsed.getTime()
            }
        },
        object: function (e) {
            var t, a;
            return t = e.raw, a = e.parsed, this.raw = t + "", this.parsed = a, this.type = "Date", this
        }
    }, plotdb.Date.object.prototype.toString = function () {
        return this.raw
    }, plotdb.Weekday = {
        name: "Weekday",
        default: "Mon",
        level: 8,
        basetype: [plotdb.Order],
        values: {
            abbr: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
            en: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
            zh: ["週一", "週二", "週三", "週四", "週五", "週六", "週日"]
        },
        test: function (e) {
            var t, a, n, r;
            t = "string" == typeof e ? e.toLowerCase() : e;
            for (a in n = this.values)
                if (r = n[a], r.indexOf(t) >= 0) return !0;
            return !1
        },
        parse: function (e) {
            return e
        },
        order: {
            index: function (e) {
                var t, a, n, r, o;
                t = e.toLowerCase();
                for (a in n = plotdb.Weekday.values)
                    if (r = n[a], (o = r.indexOf(t)) >= 0) return o;
                return -1
            },
            Ascending: function (e, t) {
                return e = plotdb.Weekday.order.index(e), t = plotdb.Weekday.order.index(t), e - t
            },
            Descending: function (e, t) {
                return e = plotdb.Weekday.order.index(e), (t = plotdb.Weekday.order.index(t)) - e
            }
        }
    }, plotdb.Month = {
        name: "Month",
        default: "Jan",
        level: 8,
        basetype: [plotdb.Order],
        values: {
            abbr: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
            en: ["january", "feburary", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
            zh: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
        },
        test: function (e) {
            var t, a, n, r;
            t = "string" == typeof e ? e.toLowerCase() : e;
            for (a in n = this.values)
                if (r = n[a], r.indexOf(t) >= 0) return !0;
            return !1
        },
        parse: function (e) {
            return e
        },
        order: {
            index: function (e) {
                var t, a, n, r, o;
                t = e.toLowerCase();
                for (a in n = plotdb.Month.values)
                    if (r = n[a], (o = r.indexOf(t)) >= 0) return o;
                return -1
            },
            Ascending: function (e, t) {
                return e = plotdb.Month.order.index(e), t = plotdb.Month.order.index(t), e - t
            },
            Descending: function (e, t) {
                return e = plotdb.Month.order.index(e), (t = plotdb.Month.order.index(t)) - e
            }
        }
    }, plotdb.Range = {
        name: "Range",
        default: [0, 1],
        test: function (e) {
            return !!plotdb.Range.parse(e)
        },
        parse: function (e) {
            if ("string" == typeof e) try {
                e = JSON.parse(e)
            } catch (e) {
                return e, !1
            }
            return Array.isArray(e) && 2 === e.length ? (e[0] = parseFloat(e[0]), e[1] = parseFloat(e[1]), isNaN(e[0]) || isNaN(e[1]) ? null : e) : null
        }
    }, plotdb.Choice = function (e) {
        return {
            default: "",
            name: "Choice",
            level: 20,
            test: function (t) {
                return e && e.length && in$(t, e)
            },
            values: e
        }
    }, plotdb.EditableChoice = function (e) {
        return {
            default: "",
            name: "EditableChoice",
            level: 20,
            test: function (t) {
                return e && e.length && in$(t, e)
            },
            values: e
        }
    }, plotdb.Color = {
        name: "Color",
        level: 10,
        test: function (e) {
            return !/(rgba?|hsla?)\([0-9.,]+\)|#[0-9a-f]{3,6}|[a-z0-9]+/.exec(e.trim())
        },
        default: "#dc4521",
        Gray: "#cccccc",
        Positive: "#3f7ab5",
        Negative: "#d93510",
        Neutral: "#cccccc",
        Empty: "#ffffff",
        subtype: {
            negative: "negative",
            positive: "positive",
            neutral: "neutral"
        }
    }, plotdb.Palette = {
        name: "Palette",
        level: 30,
        re: /^((rgb|hsl)\((\s*[0-9.]+\s*,){2}\s*[0-9.]+\s*\)|(rgb|hsl)a\((\s*[0-9.]+\s*,){3}\s*[0-9.]+\s*\)|\#[0-9a-f]{3}|\#[0-9a-f]{6}|[a-zA-Z][a-zA-Z0-9]*)$/,
        test: function (e) {
            var t = this;
            if (!e) return !0;
            if ("string" == typeof e)
                if ("[" !== e.charAt(0)) e = e.split(",");
                else try {
                    e = JSON.parse(e)
                } catch (e) {
                    return e, !1
                } else {
                    if (Array.isArray(e)) return !e.filter(function (e) {
                        return !t.re.exec(e.trim())
                    }).length;
                    if ("object" == typeof e) {
                        if (null == e.colors) return !0;
                        if (e.colors.filter(function (e) {
                                return !e.hex
                            }).length) return !0
                    }
                }
            return !1
        },
        parse: function (e) {
            if (!e) return e;
            if (Array.isArray(e)) return e;
            if ("string" == typeof e) try {
                return JSON.parse(e)
            } catch (t) {
                return t, e.split(",").map(function (e) {
                    return {
                        hex: e.trim()
                    }
                })
            }
            return e
        },
        default: {
            colors: ["#1d3263", "#226c87", "#f8d672", "#e48e11", "#e03215", "#ab2321"].map(function (e) {
                return {
                    hex: e
                }
            })
        },
        plotdb: {
            colors: ["#ed1d78", "#c59b6d", "#8cc63f", "#28aae2"].map(function (e) {
                return {
                    hex: e
                }
            })
        },
        qualitative: {
            colors: ["#c05ae0", "#cf2d0c", "#e9ab1e", "#86ffb5", "#64dfff", "#003f7d"].map(function (e) {
                return {
                    hex: e
                }
            })
        },
        binary: {
            colors: ["#ff8356", "#0076a1"].map(function (e) {
                return {
                    hex: e
                }
            })
        },
        sequential: {
            colors: ["#950431", "#be043e", "#ec326d", "#fc82a9", "#febed2", "#fee6ee"].map(function (e) {
                return {
                    hex: e
                }
            })
        },
        diverging: {
            colors: ["#74001a", "#cd2149", "#f23971", "#ff84ab", "#ffc3d7", "#f2f2dd", "#b8d9ed", "#81b1d0", "#3d8bb7", "#0071a8", "#003558"].map(function (e) {
                return {
                    hex: e
                }
            })
        },
        subtype: {
            qualitative: "qualitative",
            binary: "binary",
            sequential: "sequential",
            diverging: "diverging"
        },
        scale: {
            auto: function (e, t, a) {
                var n, r, o, i, l, u, d, c, s, p, f, h, b, m;
                if (null == t && (t = []), Array.isArray(t) || (t = [t]), n = plotdb.Types.taxonomy((t[0] || {}).datatype), r = e.colors, "quantative" === n)
                    for (o = r.map(function (e) {
                            return null == e.keyword || "" === e.keyword ? "" : +e.keyword
                        }), i = r.map(function (e) {
                            return e.hex
                        }), l = 0, u = [Math.min.apply(null, t.map(function (e) {
                            return Math.min.apply(null, e.data || [])
                        })), Math.max.apply(null, t.map(function (e) {
                            return Math.max.apply(null, e.data || [])
                        }))], null == o[0] && (o[0] = u[0]), o[o.length - 1] || (o[o.length - 1] = u[1]), d = 0, c = o.length; d < c; ++d) {
                        if (s = d, o[s] && s > l + 1)
                            for (p = 1, f = s - l; p < f; ++p) o[(h = p) + l] = o[l] + h * ((o[s] - o[l]) / (s - l));
                        o[s] && (l = s)
                    } else b = {}, o = r.map(function (e) {
                        return e.keyword
                    }).filter(function (e) {
                        return e
                    }), t.map(function (e) {
                        return (e.data || []).map(function (e) {
                            if (!in$(e, o)) return b[e] = 1
                        })
                    }), o = o.concat(function () {
                        var e = [];
                        for (m in b) e.push(m);
                        return e
                    }()), i = r.filter(function (e) {
                        return e.keyword
                    }).map(function (e) {
                        return e.hex
                    }).concat(r.filter(function (e) {
                        return !e.keyword
                    }).map(function (e) {
                        return e.hex
                    }));
                return a || (a = "quantative" === n ? d3.scale.linear() : d3.scale.ordinal()), a.domain(o).range(i)
            },
            ordinal: function (e, t, a) {
                var n, r;
                return n = e.colors, r = n.filter(function (e) {
                    return e.keyword
                }).map(function (e) {
                    return e.hex
                }).concat(n.filter(function (e) {
                    return !e.keyword
                }).map(function (e) {
                    return e.hex
                })), t || (t = a ? a.domain() : n.map(function (e) {
                    return e.keyword
                }).filter(function (e) {
                    return e
                })), a || (a = d3.scale.ordinal()), a.domain(t).range(r)
            },
            linear: function (e, t, a) {
                var n, r;
                return n = e.colors, r = n.filter(function (e) {
                    return e.keyword
                }).map(function (e) {
                    return e.hex
                }).concat(n.filter(function (e) {
                    return !e.keyword
                }).map(function (e) {
                    return e.hex
                })), t || (t = a ? a.domain() : n.map(function (e) {
                    return e.keyword
                }).filter(function (e) {
                    return null != e
                })), a || (a = d3.scale.linear()), 1 === r.length && r.push(r[0]), 2 === t.length && r.length > 2 && (t = d3.range(r.length).map(function (e) {
                    return (t[1] - t[0]) * e / (r.length - 1 || 1) + t[0]
                })), a.domain(t).range(r)
            }
        }
    }, plotdb.OrderTypes = [plotdb.Number, plotdb.Date, plotdb.Numstring, plotdb.Month, plotdb.Weekday, plotdb.Boolean, plotdb.Bit], plotdb.QuantativeTypes = [plotdb.Number, plotdb.Date, plotdb.Numstring], plotdb.Types = {
        list: ["Number", "Numstring", "Weekday", "Month", "Date", "Boolean", "Bit", "Order"],
        taxonomy: function (e) {
            return "string" == typeof e && (e = plotdb[e]), in$(e, plotdb.QuantativeTypes) ? "quantative" : in$(e, plotdb.OrderTypes) ? "ordinal" : "nominal"
        },
        resolveArray: function (e) {
            var t, a, n, r, o, i, l, u, d;
            for (t = [
                    [0, "String"]
                ], a = 0, n = this.list.length; a < n; ++a) {
                for (r = a, o = plotdb[this.list[r]], i = !0, l = 0, u = e.length; l < u; ++l)
                    if (d = l, !o.test(e[d])) {
                        i = !1;
                        break
                    } i && t.push([plotdb[this.list[r]].level, this.list[r]])
            }
            return t.sort(function (e, t) {
                return t[0] - e[0]
            }), o = (t[0] || [0, "String"])[1]
        },
        resolveValue: function (e) {
            var t, a, n, r;
            for (t = [
                    [0, "String"]
                ], a = 0, n = this.list.length; a < n; ++a) r = a, plotdb[this.list[r]].test(e) && t.push([plotdb[this.list[r]].level, this.list[r]]);
            return t.sort(function (e, t) {
                return t[0] - e[0]
            }), (t[0] || [0, "String"])[1]
        },
        resolve: function (e) {
            var t, a, n, r, o, i, l, u, d, c, s, p, f, h, b;
            if (Array.isArray(e)) return this.resolveArray(e);
            if ("object" != typeof e) return this.resolveValue(e);
            for (t = e.headers, a = e.rows, e.fields, n = [], r = 0, o = t.length; r < o; ++r) {
                for (i = r, l = [], u = 0, d = this.list.length; u < d; ++u) {
                    for (c = u, s = plotdb[this.list[c]], p = !0, f = 0, h = a.length; f < h; ++f)
                        if (b = f, !s.test(a[b][i])) {
                            p = !1;
                            break
                        } p && l.push([plotdb[this.list[c]].level, this.list[c]])
                }
                l.sort(function (e, t) {
                    return t[0] - e[0]
                }), s = (l[0] || [0, "String"])[1], n.push(s)
            }
            return n
        }
    }, plotdb.chart = {
        corelib: {},
        create: function (e) {
            return import$(import$({}, this.base), e)
        },
        base: {
            dimension: {
                value: {
                    type: [],
                    require: !1
                }
            },
            config: {
                padding: {}
            },
            init: function () {},
            bind: function () {},
            resize: function () {},
            render: function () {}
        },
        fieldsFromDimension: function (e) {
            var t, a;
            return function () {
                var n, r = [];
                for (t in n = e) a = n[t], r.push([t, a]);
                return r
            }().map(function (e) {
                var t;
                return ((t = e[1]).fields || (t.fields = [])).map(function (t) {
                    return t.bind = e[0]
                }), e[1].fields
            }).reduce(function (e, t) {
                return e.concat(t)
            }, [])
        },
        dataFromDimension: function (e) {
            var t, a, n, r, o, i, l, u, d, c, s, p, f, h, b, m, g;
            a = (t = [{},
                []
            ])[0], n = t[1], r = Math.max.apply(null, function () {
                var t, a = [];
                for (o in t = e) i = t[o], a.push(i);
                return a
            }().reduce(function (e, t) {
                return e.concat(t.fields || [])
            }, []).filter(function (e) {
                return e.data
            }).map(function (e) {
                return e.data.length
            }).concat([0]));
            for (o in e) {
                for ((i = e[o]).multiple ? i.fieldName = (i.fields || (i.fields = [])).map(function (e) {
                        return e.name
                    }) : i.fieldName = (l = (i.fields || (i.fields = []))[0]) ? l.name : null, u = 0, d = (t = i.fields || (i.fields = [])).length; u < d; ++u)(c = t[u]).datatype || (c.datatype = plotdb.Types.resolve(c.data));
                s = (plotdb[p = ((i.type || (i.type = []))[0] || {}).name] || (plotdb[p] = {})).parse || null, a[o] = i.fields.length ? i.fields.map(function (e) {
                    var t;
                    return s || (plotdb[t = e.datatype] || (plotdb[t] = {})).parse || function (e) {
                        return e
                    }
                }) : [s || function (e) {
                    return e
                }]
            }
            for (u = 0; u < r; ++u) {
                f = u, h = {};
                for (o in e) {
                    for (((i = e[o]).fields || (i.fields = [])).length ? h[o] = (i.fields || (i.fields = [])).map(function (e) {
                            return (e.data || (e.data = []))[f]
                        }) : (h[o] = [
                            [i.type[0] || plotdb.String].default
                        ], "function" == typeof h[o] && (h[o] = h[o](o, i, f))), b = 0, m = (h[o] || []).length; b < m; ++b) g = b, h[o][g] = a[o][g](h[o][g]);
                    i.multiple || (h[o] = h[o][0])
                }
                n.push(h)
            }
            return n
        },
        dataConvert: {
            fromDimension: function (e) {
                var t, a, n;
                t = {};
                for (a in e) n = e[a], t[a] = n.fields;
                return t
            },
            byMapping: function (e, t) {
                var a, n, r, o, i, l, u;
                a = {};
                for (n in t) {
                    for (o = [], i = 0, l = (r = t[n]).length; i < l; ++i) u = r[i], o.push({
                        name: u,
                        data: e.map(function (e) {
                            return e[u]
                        })
                    });
                    a[n] = o
                }
                return a
            }
        },
        dataFromHash: function (e, t) {
            var a;
            if (!e || !t) return [];
            if (Array.isArray(t)) return t;
            "function" == typeof t && (t = t());
            for (a in e) e[a].fields = t[a] || [];
            return plotdb.chart.dataFromDimension(e)
        },
        getSampleData: function (e, t) {
            return null == t && (t = null), plotdb.chart.dataFromHash(t || e.dimension, e.sample)
        },
        updateData: function (e) {
            return e.data = plotdb.chart.dataFromDimension(e.dimension)
        },
        updateDimension: function (e) {
            var t, a, n, r = [];
            for (t in a = e.dimension) n = a[t], Array.isArray(n.type) && r.push(n.type = n.type.map(function (e) {
                return "object" == typeof e ? e : plotdb[e] || {}
            }));
            return r
        },
        updateAssets: function (e, t) {
            var a, n, r, o, i, l, u, d, c;
            for (null == t && (t = []), a = {}, n = 0, r = t.length; n < r; ++n) {
                for (o = t[n], i = atob(o.content), l = new Uint8Array(i.length), u = 0, d = i.length; u < d; ++u) l[c = u] = i.charCodeAt(c);
                o.blob = new Blob([l], {
                    type: o.type
                }), o.url = URL.createObjectURL(o.blob), o.datauri = ["data:", o.type, ";charset=utf-8;base64,", o.content].join(""), a[o.name] = o
            }
            return e.assets = a
        },
        updateConfig: function (e, t) {
            var a, n, r, o, i = [];
            for (a in n = e.config) r = n[a], o = (e.config[a].type || []).map(function (e) {
                return e.name
            }), null == t[a] ? t[a] = r.default : null == t[a].value ? t[a] = (r || t[a]).default : t[a] = t[a].value, o[0] && plotdb[o[0]].parse && i.push(t[a] = plotdb[o[0]].parse(t[a]));
            return i
        },
        add: function (e, t) {
            var a;
            return ((a = plotdb.chart.add).list || (a.list = {}))[e] = t
        },
        get: function (e) {
            var t, a, n, r, o, i;
            if ((t = ((a = plotdb.chart.add).list || (a.list = {}))[e]) || "number" != typeof e || (t = function () {
                    var e, t, a = [];
                    for (n in e = (t = plotdb.chart.add).list || (t.list = {})) r = e[n], a.push({
                        k: n,
                        v: r
                    });
                    return a
                }().filter(function () {
                    return r.key === e
                })[0]), !t) return null;
            o = {};
            for (n in a = t.code.content) "function" == typeof (r = a[n]) && (o[n] = r);
            i = JSON.parse(JSON.stringify(t.code.content));
            for (n in o) r = o[n], i[n] = r;
            return t = JSON.parse(JSON.stringify(t)), new plotdb.view.chart(t, {
                code: i
            })
        },
        list: function () {
            var e, t = [];
            for (e in plotdb.chart.add.list) t.push(e);
            return t
        }
    }, plotdb.chart.config = {
        update: function (e) {
            var t, a, n, r = [];
            t = this.parse(this.preset(e));
            for (a in t) n = t[a], r.push(e[a] = n);
            return r
        },
        preset: function (e) {
            var t, a, n, r, o, i;
            for (t in a = e || {}) {
                if (n = a[t], e[n.extend]) r = e[n.extend];
                else if (plotdb.config[n.extend]) r = plotdb.config[n.extend];
                else {
                    if (!plotdb.config[t]) continue;
                    r = plotdb.config[t]
                }
                for (o in r) i = r[o], null == n[o] && (n[o] = i)
            }
            return e
        },
        parse: function (e) {
            var t, a, n, r, o, i, l, u, d;
            t = {};
            for (a in n = e || {}) {
                for (null == (r = n[a]) && (e[a] = {}), null == r.value && (r.value = r.default || 0), o = 0, l = (i = r.type || []).length; o < l; ++o) {
                    u = i[o];
                    try {
                        if ((u = plotdb[u.name]).test && u.parse && u.test(r.value)) {
                            r.value = u.parse(r.value);
                            break
                        }
                    } catch (e) {
                        d = e, console.log("chart config: type parsing exception ( " + a + " / " + u + " )"), console.log(d.stack + "")
                    }
                }
                t[a] = e[a].value
            }
            return t
        }
    }, plotdb.theme = {
        create: function (e) {
            return import$(import$({}, this.base), e)
        },
        base: {
            palette: {
                default: [],
                diverging: [],
                sequential: [],
                binary: [],
                qualitative: [],
                binaryDiverge: [],
                sequentialQualitative: [],
                sequentialSequential: [],
                divergingDiverging: []
            },
            config: {
                padding: {
                    type: [plotdb.Number],
                    default: 10
                }
            }
        }
    }, plotdb.data = {
        sample: {
            country: ["Afghanistan", "Albania", "Antarctica", "Algeria", "American Samoa", "Andorra", "Angola", "Antigua and Barbuda", "Azerbaijan", "Argentina", "Australia", "Austria", "Bahamas", "Bahrain", "Bangladesh", "Armenia", "Barbados", "Belgium", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "Belize", "British Indian Ocean Territory", "Solomon Islands", "British Virgin Islands", "Brunei", "Bulgaria", "Myanmar", "Burundi", "Belarus", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Sri Lanka", "Chad", "Chile", "China", "Taiwan", "Christmas Island", "Cocos Keeling Islands", "Colombia", "Comoros", "Mayotte", "Congo, Rep.", "Congo, Dem. Rep.", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Benin", "Denmark", "Dominica", "Dominican Republic", "Ecuador", "El Salvador", "Equatorial Guinea", "Ethiopia", "Eritrea", "Estonia", "Faroe Islands", "Falkland Islands", "SGSSI", "Fiji", "Finland", "Åland Islands", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Djibouti", "Gabon", "Georgia", "Gambia", "Palestine", "Germany", "Ghana", "Gibraltar", "Kiribati", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guyana", "Haiti", "HIMI", "Holy See", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Cote d'Ivoire", "Jamaica", "Japan", "Kazakhstan", "Jordan", "Kenya", "North Korea", "South Korea", "Kuwait", "Kyrgyz Republic", "Lao", "Lebanon", "Lesotho", "Latvia", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Martinique", "Mauritania", "Mauritius", "Mexico", "Monaco", "Mongolia", "Moldova", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Oman", "Namibia", "Nauru", "Nepal", "Netherlands", "Curaçao", "Aruba", "Sint Maarten", "Bonaire, Sint Eustatius and Saba", "New Caledonia", "Vanuatu", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Norway", "Northern Mariana Islands", "United States Minor Outlying Islands", "Micronesia, Fed. Sts.", "Marshall Islands", "Palau", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Guinea-Bissau", "Timor-Leste", "Puerto Rico", "Qatar", "Réunion", "Romania", "Russia", "Rwanda", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Anguilla", "St. Lucia", "Saint Martin", "Saint Pierre and Miquelon", "St. Vincent and the Grenadines", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovak Republic", "Vietnam", "Slovenia", "Somalia", "South Africa", "Zimbabwe", "Spain", "South Sudan", "Sudan", "Western Sahara", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syria", "Tajikistan", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "United Arab Emirates", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "Macedonia, FYR", "Egypt", "United Kingdom", "Guernsey", "Jersey", "Isle of Man", "Tanzania", "United States", "Virgin Islands", "Burkina Faso", "Uruguay", "Uzbekistan", "Venezuela", "Wallis and Futuna", "Samoa", "Yemen", "Zambia"],
            continent: ["Asia", "Europe", "America", "Oceania", "Australia", "Africa"],
            category: ["IT", "RD", "GM", "FIN", "LEGAL", "HR", "SALES", "BD"],
            name: ["James", "Joe", "Amelie", "Yale", "Doraemon", "Cindy", "David", "Frank", "Kim", "Ken", "Leland", "Mike", "Nick", "Oliver", "Randy", "Andy", "Angelica", "Zack", "Alfred", "Edward", "Thomas", "Percy", "Frankenstein", "Mary", "Toby", "Tim", "Timonthy", "Smith", "Karen", "Kenny", "Jim", "Victor", "Xavier", "Jimmy", "Bob", "Cynthia", "Dory", "Dolce", "Kirby", "Gabriel", "Gabby", "Watson", "Wade", "Wallace", "Gasper", "Karmen", "Ian", "Larry", "Rachel", "Parker", "Parry", "Eagle", "Falcon", "Hades", "Helen", "Sabrinaa", "Oscar", "Victoria"],
            fruit: ["Apple", "Orange", "Banana", "Grape", "Longan", "Litchi", "Peach", "Guava", "Melon", "Pineapple", "Pomelo", "Durian", "Berry", "Pear"],
            weekday: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            generate: function (e) {
                var t, a, n, r, o, i;
                for (t = [], a = 0, n = parseInt(10 * Math.random() + 10); a < n; ++a) {
                    a,
                    r = {};
                    for (o in e)(i = e[o]).type && i.type.length ? r[o] = parseInt(8 * Math.random()) + 2 : r[o] = this.name[parseInt(Math.random() * this.name.length)];t.push(r)
                }
                return t
            }
        }
    },
    function () {
        var e, t, a;
        e = {
                get: function (e) {
                    return this[e % this.length]
                },
                order: function (e) {
                    var t, a, n;
                    for (t = new Array(e), a = 0; a < e; ++a) t[n = a] = this[n % this.length];
                    return t
                },
                rand: function () {
                    return this[parseInt(Math.random() * this.length)]
                },
                rands: function (e) {
                    var t, a;
                    for (t = new Array(e), a = 0; a < e; ++a) t[a] = this[parseInt(Math.random() * this.length)];
                    return t
                }
            }, t = ["name", "country", "category", "fruit", "weekday", "month", "continent"],
            function () {
                var t = [];
                for (a in e) t.push(a);
                return t
            }().map(function (a) {
                return t.map(function (t) {
                    return plotdb.data.sample[t][a] = e[a]
                })
            })
    }(), import$(plotdb.data.sample, {
        crimeanWar: {
            month: {
                name: "month",
                data: ["01/04/1854", "01/05/1854", "01/06/1854", "01/07/1854", "01/08/1854", "01/09/1854", "01/10/1854", "01/11/1854", "01/12/1854", "01/01/1855", "01/02/1855", "01/03/1855", "01/04/1855", "01/05/1855", "01/06/1855", "01/07/1855", "01/08/1855", "01/09/1855", "01/10/1855", "01/11/1855", "01/12/1855", "01/01/1856", "01/02/1856", "01/03/1856"]
            },
            "army size": {
                name: "army size",
                data: [8571, 23333, 28333, 28722, 30246, 30290, 30643, 29736, 32779, 32393, 30919, 30107, 32252, 35473, 38863, 42647, 44614, 47751, 46852, 37853, 43217, 44212, 43485, 46140]
            },
            "death number by zymotic": {
                name: "death number by zymotic",
                data: [1, 12, 11, 359, 828, 788, 503, 844, 1725, 2761, 2120, 1205, 477, 508, 802, 382, 483, 189, 128, 178, 91, 42, 24, 15]
            },
            "death number by wound": {
                name: "death number by wound",
                data: [0, 0, 0, 0, 1, 81, 132, 287, 114, 83, 42, 32, 48, 49, 209, 134, 164, 276, 53, 33, 18, 2, 0, 0]
            },
            "death number by other": {
                name: "death number by other",
                data: [5, 9, 6, 23, 30, 70, 128, 106, 131, 324, 361, 172, 57, 37, 31, 33, 25, 20, 18, 32, 28, 48, 19, 35]
            },
            "zymotic rate(‰)": {
                name: "zymotic rate(‰)",
                data: [1.4, 6.2, 4.7, 150, 328.5, 312.2, 197, 340.6, 631.5, 1022.8, 822.8, 480.3, 177.5, 171.8, 247.6, 107.5, 129.9, 47.5, 32.8, 56.4, 25.3, 11.4, 6.6, 3.9]
            },
            "wound rate(‰)": {
                name: "wound rate(‰)",
                data: [0, 0, 0, 0, .4, 32.1, 51.7, 115.8, 41.7, 30.7, 16.3, 12.8, 17.9, 16.6, 64.5, 37.7, 44.1, 69.4, 13.6, 10.5, 5, .5, 0, 0]
            },
            "other rate(‰)": {
                name: "other rate(‰)",
                data: [7, 4.6, 2.5, 9.6, 11.9, 27.7, 50.1, 42.8, 48, 120, 140.1, 68.6, 21.2, 12.5, 9.6, 9.3, 6.7, 5, 4.6, 10.1, 7.8, 13, 5.2, 9.1]
            }
        },
        lifeExpectancy: {
            1985: {
                name: "1985",
                data: ["42.8", "72.2", "67.7", "80", "50", "73.1", "71.9", "70.5", "75.7", "74", "66.2", "67.2", "71.5", "55.8", "73.3", "71.1", "74.6", "71.1", "55", "56", "59.8", "71.5", "67.5", "67.4", "72.9", "71.3", "52", "49.8", "56.3", "58.2", "76.5", "67.2", "49.1", "53.4", "71.8", "66.4", "70.3", "55.4", "52.9", "56.6", "76.3", "57.7", "71.6", "74.3", "76.7", "71.1", "74.7", "60.6", "73.1", "70.5", "70", "61.1", "67.8", "51.9", "50.2", "70.4", "46.3", "64.1", "74.7", "75.7", "60.6", "56.6", "70.2", "74.6", "58.7", "76", "69.1", "62.8", "50.7", "50.5", "65", "53.4", "67.6", "68.9", "77.6", "55.9", "63.4", "63.6", "68.5", "73.7", "74.9", "75.7", "72.6", "77.8", "69.3", "66.4", "63.1", "56.4", "65.9", "69.5", "74.6", "64.7", "54.3", "70.1", "65.3", "60.4", "54.5", "71.9", "71.2", "73.8", "72", "54.5", "50.8", "70.5", "62.7", "46.9", "75.2", "64", "58.9", "67.8", "69.7", "61.8", "66", "60.8", "73.1", "66.1", "47", "56.7", "61.4", "55.2", "76.4", "74.2", "64.9", "45", "55.5", "76.1", "68.4", "61.1", "75.1", "56", "73.1", "67.2", "66", "70.7", "73.1", "75", "69.7", "68.2", "50.3", "69.5", "69.3", "67.5", "62.5", "71.8", "55.8", "72.6", "69.9", "49.5", "73.1", "70.8", "71.8", "60.2", "52.8", "62.8", "76.6", "70.5", "54.9", "68.5", "60", "76.9", "76.9", "68.5", "73", "64.4", "57.9", "70.4", "55.8", "57.5", "68", "68.5", "69.8", "65.2", "62", "52.3", "70", "71.9", "74.7", "74.8", "72.1", "67", "62.3", "72.2", "69.1", "67.4", "57.8", "56.9", "63.5", "51.1"]
            },
            2000: {
                name: "2000",
                data: ["51", "74.2", "73.2", "82.7", "52.6", "73.9", "74.3", "71.4", "79.7", "78.2", "68", "70.3", "73.6", "65.8", "74.3", "68.2", "77.8", "69", "59.2", "63.9", "67.6", "75.2", "51.6", "71.9", "75.5", "71.7", "53.3", "47.5", "60.9", "55", "79.3", "70.1", "46.7", "52.4", "77.2", "71.5", "72.5", "60.2", "52.5", "52.6", "77.7", "52.8", "74.7", "75.9", "79.1", "75", "76.9", "59.6", "73.3", "72.7", "73.2", "68.9", "72.9", "52.4", "49.3", "70.1", "52.5", "64.2", "77.8", "79.1", "58", "60", "72.3", "78.1", "60.2", "78", "70.5", "68.5", "55.6", "51.7", "64.4", "58.6", "68.8", "71.8", "79.9", "61.1", "68.3", "71.2", "69.1", "76.7", "78.8", "79.6", "72.7", "81.1", "73.1", "63.6", "57.4", "59.5", "63.2", "76.3", "77.5", "65.8", "59.5", "70.1", "76.2", "49.8", "55.9", "74.6", "72", "78.2", "73.9", "60.5", "46.3", "73.8", "72.6", "51.1", "79.7", "63.8", "61.8", "71", "75.1", "64.5", "69.3", "61.4", "72", "71.3", "53.6", "61.4", "55", "64.9", "78.1", "78.5", "73.9", "53", "55.8", "78.7", "73.7", "62.6", "76.9", "56.9", "74.1", "74.3", "69", "73.8", "76.7", "77.2", "70.8", "65.4", "50", "72", "69.8", "69.9", "65.3", "76.1", "60", "74.7", "70.9", "52.2", "78.6", "73.3", "75.8", "61.7", "54.3", "57.1", "79.3", "72.4", "64.4", "68.8", "48.7", "79.7", "80", "73.8", "76", "66.3", "54.8", "71.3", "63.6", "59", "69.1", "69.4", "75", "71.5", "63.1", "50", "67.5", "73.8", "77.8", "77.1", "74.6", "67.4", "63", "74.3", "73.5", "72.6", "63.5", "45.7", "50.8", "54.1"]
            },
            2015: {
                name: "2015",
                data: ["57.63", "76", "76.5", "84.1", "61", "75.2", "76.2", "74.4", "81.8", "81", "72.9", "72.3", "79.2", "70.1", "75.8", "70.4", "80.4", "70", "65.5", "70.2", "72.3", "77.9", "66.4", "75.6", "78.7", "74.9", "62.8", "60.4", "68.4", "59.5", "81.7", "74.6", "53.8", "57.7", "79.3", "76.9", "75.8", "64.1", "58.3", "61.9", "80", "60.33", "78", "78.5", "82.6", "78.6", "80.1", "64.63", "74.6", "73.8", "75.2", "71.3", "74.1", "60.63", "62.9", "76.8", "63.6", "66.3", "80.8", "81.9", "60.53", "65.1", "73.3", "81.1", "65.5", "79.8", "71.7", "73.1", "60.8", "53.4", "64.4", "65.3", "72.4", "76.2", "82.8", "66.8", "70.9", "78.5", "72.1", "80.4", "82.4", "82.1", "75.5", "83.5", "78.3", "68.2", "66.63", "62.4", "71.4", "80.7", "80.7", "69", "66.4", "75.7", "78.5", "48.5", "63.9", "76.2", "75.4", "81.1", "77", "64.7", "60.22", "75.1", "79.5", "57.6", "82.1", "65.1", "65.7", "73.9", "74.5", "67", "72.7", "65.3", "75.8", "74.7", "56.4", "67.9", "61", "71.2", "80.6", "80.6", "76.8", "62.2", "61.33", "81.6", "75.7", "66.5", "78.2", "60.6", "73.9", "77.5", "70.2", "77.3", "79.8", "82", "76.8", "73.13", "66.53", "74.5", "72.9", "72.2", "68.8", "78.1", "66.1", "78.1", "73.7", "58.5", "82.1", "76.4", "80.2", "64.1", "58.7", "63.72", "81.7", "76.5", "69.5", "70.5", "51.5", "82", "82.9", "70.26", "79.7", "71", "63.43", "75.1", "72.4", "64.23", "70.5", "71.4", "77.3", "76.5", "67.9", "60.8", "72.1", "76.6", "81.4", "79.1", "77.3", "70.1", "65", "75.8", "75.2", "76.5", "67.6", "58.96", "60.01", "58"]
            },
            Country: {
                name: "Country",
                data: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Dem. Rep.", "Congo, Rep.", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "North Korea", "South Korea", "Kuwait", "Kyrgyz Republic", "Lao", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Macedonia, FYR", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Fed. Sts.", "Moldova", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "St. Lucia", "St. Vincent and the Grenadines", "Samoa", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovak Republic", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "West Bank and Gaza", "Vietnam", "Yemen", "Zambia", "Zimbabwe", "South Sudan"]
            },
            Continent: {
                name: "Continent",
                data: ["Asia", "Europe", "Africa", "Europe", "Africa", "North America", "South America", "Europe", "Oceania", "Europe", "Europe", "North America", "Asia", "Asia", "North America", "Europe", "Europe", "North America", "Africa", "Asia", "South America", "Europe", "Africa", "South America", "Asia", "Europe", "Africa", "Africa", "Asia", "Africa", "North America", "Africa", "Africa", "Africa", "South America", "Asia", "South America", "Africa", "Africa", "Africa", "North America", "Africa", "Europe", "North America", "Europe", "Europe", "Europe", "Africa", "North America", "North America", "South America", "Africa", "North America", "Africa", "Africa", "Europe", "Africa", "Oceania", "Europe", "Europe", "Africa", "Africa", "Europe", "Europe", "Africa", "Europe", "North America", "North America", "Africa", "Africa", "South America", "North America", "North America", "Europe", "Europe", "Asia", "Asia", "Asia", "Asia", "Europe", "Asia", "Europe", "North America", "Asia", "Asia", "Asia", "Africa", "Oceania", "Asia", "Asia", "Asia", "Asia", "Asia", "Europe", "Asia", "Africa", "Africa", "Africa", "Europe", "Europe", "Europe", "Africa", "Africa", "Asia", "Asia", "Africa", "Europe", "Oceania", "Africa", "Africa", "North America", "Oceania", "Europe", "Asia", "Europe", "Africa", "Africa", "Asia", "Africa", "Asia", "Europe", "Oceania", "North America", "Africa", "Africa", "Europe", "Asia", "Asia", "North America", "Oceania", "South America", "South America", "Asia", "Europe", "Europe", "Asia", "Europe", "Asia", "Africa", "North America", "North America", "Oceania", "Africa", "Asia", "Africa", "Europe", "Africa", "Africa", "Asia", "Europe", "Europe", "Oceania", "Africa", "Africa", "Europe", "Asia", "Africa", "South America", "Africa", "Europe", "Europe", "Asia", "Asia", "Asia", "Africa", "Asia", "Asia", "Africa", "Oceania", "North America", "Africa", "Asia", "Asia", "Africa", "Europe", "Asia", "Europe", "North America", "South America", "Asia", "Oceania", "South America", "Asia", "Asia", "Asia", "Africa", "Africa", "Africa"]
            }
        },
        oldFaithful: {
            eruptions: {
                name: "eruptions",
                data: [3.6, 1.8, 3.333, 2.283, 4.533, 2.883, 4.7, 3.6, 1.95, 4.35, 1.833, 3.917, 4.2, 1.75, 4.7, 2.167, 1.75, 4.8, 1.6, 4.25, 1.8, 1.75, 3.45, 3.067, 4.533, 3.6, 1.967, 4.083, 3.85, 4.433, 4.3, 4.467, 3.367, 4.033, 3.833, 2.017, 1.867, 4.833, 1.833, 4.783, 4.35, 1.883, 4.567, 1.75, 4.533, 3.317, 3.833, 2.1, 4.633, 2, 4.8, 4.716, 1.833, 4.833, 1.733, 4.883, 3.717, 1.667, 4.567, 4.317, 2.233, 4.5, 1.75, 4.8, 1.817, 4.4, 4.167, 4.7, 2.067, 4.7, 4.033, 1.967, 4.5, 4, 1.983, 5.067, 2.017, 4.567, 3.883, 3.6, 4.133, 4.333, 4.1, 2.633, 4.067, 4.933, 3.95, 4.517, 2.167, 4, 2.2, 4.333, 1.867, 4.817, 1.833, 4.3, 4.667, 3.75, 1.867, 4.9, 2.483, 4.367, 2.1, 4.5, 4.05, 1.867, 4.7, 1.783, 4.85, 3.683, 4.733, 2.3, 4.9, 4.417, 1.7, 4.633, 2.317, 4.6, 1.817, 4.417, 2.617, 4.067, 4.25, 1.967, 4.6, 3.767, 1.917, 4.5, 2.267, 4.65, 1.867, 4.167, 2.8, 4.333, 1.833, 4.383, 1.883, 4.933, 2.033, 3.733, 4.233, 2.233, 4.533, 4.817, 4.333, 1.983, 4.633, 2.017, 5.1, 1.8, 5.033, 4, 2.4, 4.6, 3.567, 4, 4.5, 4.083, 1.8, 3.967, 2.2, 4.15, 2, 3.833, 3.5, 4.583, 2.367, 5, 1.933, 4.617, 1.917, 2.083, 4.583, 3.333, 4.167, 4.333, 4.5, 2.417, 4, 4.167, 1.883, 4.583, 4.25, 3.767, 2.033, 4.433, 4.083, 1.833, 4.417, 2.183, 4.8, 1.833, 4.8, 4.1, 3.966, 4.233, 3.5, 4.366, 2.25, 4.667, 2.1, 4.35, 4.133, 1.867, 4.6, 1.783, 4.367, 3.85, 1.933, 4.5, 2.383, 4.7, 1.867, 3.833, 3.417, 4.233, 2.4, 4.8, 2, 4.15, 1.867, 4.267, 1.75, 4.483, 4, 4.117, 4.083, 4.267, 3.917, 4.55, 4.083, 2.417, 4.183, 2.217, 4.45, 1.883, 1.85, 4.283, 3.95, 2.333, 4.15, 2.35, 4.933, 2.9, 4.583, 3.833, 2.083, 4.367, 2.133, 4.35, 2.2, 4.45, 3.567, 4.5, 4.15, 3.817, 3.917, 4.45, 2, 4.283, 4.767, 4.533, 1.85, 4.25, 1.983, 2.25, 4.75, 4.117, 2.15, 4.417, 1.817, 4.467]
            },
            waiting: {
                name: "waiting",
                data: [79, 54, 74, 62, 85, 55, 88, 85, 51, 85, 54, 84, 78, 47, 83, 52, 62, 84, 52, 79, 51, 47, 78, 69, 74, 83, 55, 76, 78, 79, 73, 77, 66, 80, 74, 52, 48, 80, 59, 90, 80, 58, 84, 58, 73, 83, 64, 53, 82, 59, 75, 90, 54, 80, 54, 83, 71, 64, 77, 81, 59, 84, 48, 82, 60, 92, 78, 78, 65, 73, 82, 56, 79, 71, 62, 76, 60, 78, 76, 83, 75, 82, 70, 65, 73, 88, 76, 80, 48, 86, 60, 90, 50, 78, 63, 72, 84, 75, 51, 82, 62, 88, 49, 83, 81, 47, 84, 52, 86, 81, 75, 59, 89, 79, 59, 81, 50, 85, 59, 87, 53, 69, 77, 56, 88, 81, 45, 82, 55, 90, 45, 83, 56, 89, 46, 82, 51, 86, 53, 79, 81, 60, 82, 77, 76, 59, 80, 49, 96, 53, 77, 77, 65, 81, 71, 70, 81, 93, 53, 89, 45, 86, 58, 78, 66, 76, 63, 88, 52, 93, 49, 57, 77, 68, 81, 81, 73, 50, 85, 74, 55, 77, 83, 83, 51, 78, 84, 46, 83, 55, 81, 57, 76, 84, 77, 81, 87, 77, 51, 78, 60, 82, 91, 53, 78, 46, 77, 84, 49, 83, 71, 80, 49, 75, 64, 76, 53, 94, 55, 76, 50, 82, 54, 75, 78, 79, 78, 78, 70, 79, 70, 54, 86, 50, 90, 54, 54, 77, 79, 64, 75, 47, 86, 63, 85, 82, 57, 82, 67, 74, 54, 83, 73, 73, 88, 80, 71, 83, 56, 79, 78, 84, 58, 83, 43, 60, 75, 81, 46, 90, 46, 74]
            }
        }
    }), plotdb.config = {
        language: {
            name: "Language",
            type: [plotdb.Choice([{
                name: "正體中文",
                value: "zh-tw"
            }, {
                name: "English",
                value: "en"
            }])],
            default: {
                name: "English",
                value: "en"
            },
            rebindOnChange: !0,
            category: "Global Settings"
        },
        fontFamily: {
            name: "Font",
            type: [plotdb.EditableChoice(["Arial", "Helvetica", "Tahoma", "Consolas", "Century Gothic", "Courier New"])],
            default: "Arial",
            category: "Global Settings"
        },
        fontSize: {
            name: "Font Size",
            type: [plotdb.Number],
            default: 13,
            category: "Global Settings"
        },
        background: {
            name: "Background",
            type: [plotdb.Color],
            default: "#ffffff",
            category: "Global Settings"
        },
        textFill: {
            name: "Text Color",
            type: [plotdb.Color],
            default: "#000000",
            category: "Global Settings"
        },
        textFillInverse: {
            name: "Text Color (Inverse)",
            type: [plotdb.Color],
            default: "#ffffff",
            category: "Global Settings"
        },
        margin: {
            name: "Margin",
            type: [plotdb.Number],
            default: 10,
            category: "Global Settings",
            min: 0,
            max: 20
        },
        padding: {
            name: "Padding",
            type: [plotdb.Number],
            default: 10,
            category: "Global Settings"
        },
        boxRoundness: {
            name: "Block Roundness",
            type: [plotdb.Number],
            default: 0,
            category: "Global Settings"
        },
        palette: {
            name: "Palette",
            type: [plotdb.Palette],
            subtype: plotdb.Palette.subtype.Qualitative,
            default: {
                colors: [{
                    hex: "#f4502a"
                }, {
                    hex: "#f1c227"
                }, {
                    hex: "#008a6d"
                }, {
                    hex: "#00acdb"
                }, {
                    hex: "#0064a8"
                }]
            },
            category: "Global Settings"
        },
        colorNegative: {
            name: "Negative",
            type: [plotdb.Color],
            desc: "Color for negative values",
            default: plotdb.Color.Negative,
            subtype: plotdb.Color.subtype.Negative,
            category: "Global Settings"
        },
        colorPositive: {
            name: "Positive",
            type: [plotdb.Color],
            desc: "Color for positive values",
            default: plotdb.Color.Positive,
            subtype: plotdb.Color.subtype.Positive,
            category: "Global Settings"
        },
        colorNeutral: {
            name: "Neutral",
            type: [plotdb.Color],
            desc: "Color for neutral values",
            default: plotdb.Color.Neutral,
            subtype: plotdb.Color.subtype.Neutral,
            category: "Global Settings"
        },
        colorEmpty: {
            name: "Empty",
            type: [plotdb.Color],
            desc: "Color for 'no values'",
            default: plotdb.Color.Empty,
            subtype: plotdb.Color.subtype.Empty,
            category: "Global Settings"
        },
        colorPast: {
            name: "Past",
            type: [plotdb.Color],
            desc: "Color for values in past",
            subtype: plotdb.Color.subtype.Fade,
            category: "Global Settings"
        },
        fill: {
            name: "Fill",
            type: [plotdb.Color],
            default: "#e03f0e",
            category: "Global Settings"
        },
        fillOpacity: {
            name: "Fill Opacity",
            type: [plotdb.Number],
            default: .6,
            category: "Global Settings"
        },
        stroke: {
            name: "Stroke",
            type: [plotdb.Color],
            desc: "Stroke Color",
            default: "#999",
            category: "Global Settings"
        },
        strokeWidth: {
            name: "Stroke Width",
            type: [plotdb.Number],
            desc: "Default Stroke width",
            default: "2",
            category: "Global Settings"
        },
        strokeDashArray: {
            name: "Stroke Dash Style",
            type: [plotdb.Number],
            default: "2",
            desc: "SVG style dash array. '2 4' means 2px line and 4px space.",
            category: "Global Settings"
        },
        animationDuration: {
            name: "Animation Duration",
            type: [plotdb.Number],
            default: 500,
            desc: "Animation Duration, in millisecond (e.g., 500)",
            category: "Animation",
            i18n: {
                zh: {
                    name: "動畫長度",
                    desc: "用來設定動畫長度，以千分之一秒為單位"
                }
            }
        },
        animationTiming: {
            name: "Animation Timing",
            type: [plotdb.Choice(["linear", "quad", "quad-in", "quad-out", "quad-in-out", "elastic", "elastic-in", "elastic-out", "elastic-in-out", "bounce", "bounce-in", "bounce-out", "bounce-in-out"])],
            default: "linear",
            desc: "timing function, which controls animation acceleration",
            i18n: {
                zh: {
                    name: "轉場效果",
                    desc: "用來設定動畫的速度變化模式"
                }
            },
            category: "Animation"
        },
        aspectRatio: {
            name: "Aspect Ratio",
            type: [plotdb.Boolean],
            default: !0,
            category: "Layout"
        },
        popupShow: {
            name: "show Popup",
            desc: "show Popup when user hovers over elements",
            type: [plotdb.Boolean],
            default: !0,
            category: "Popup",
            rebindOnChange: !0
        },
        geoFill: {
            name: "Fill Color",
            type: [plotdb.Color],
            desc: "Default color for filling geographic path",
            default: "#eee",
            category: "Geography"
        },
        geoStroke: {
            name: "Stroke Color",
            type: [plotdb.Color],
            desc: "Default color for outline of geographic path",
            default: "#919191",
            category: "Geography"
        },
        geoStrokeWidth: {
            name: "Stroke Width",
            type: [plotdb.Number],
            desc: "geographic path outline width",
            default: "1",
            category: "Geography"
        },
        hoverFill: {
            name: "Hovering Fill Color",
            type: [plotdb.Color],
            desc: "Fill color when hovering element",
            default: "#aaa",
            category: "Color"
        },
        hoverStroke: {
            name: "Hovering Stroke Color",
            type: [plotdb.Color],
            desc: "Stroke color when hovering element",
            default: "#fff",
            category: "Color"
        },
        connectFill: {
            name: "Fill Color",
            type: [plotdb.Color],
            desc: "Fill color between connection path of data node",
            default: "#aaa",
            category: "Line"
        },
        connectStroke: {
            name: "Stroke Color",
            type: [plotdb.Color],
            desc: "Stroke color between connection path of data node",
            default: "#aaa",
            category: "Line"
        },
        connectStrokeWidth: {
            name: "Stroke width",
            type: [plotdb.Number],
            desc: "Stroke size between connection path of data node",
            default: 2,
            category: "Line"
        },
        connectDashArray: {
            name: "Dash Array",
            type: [plotdb.String],
            desc: "SVG style dash array. '2 4' means 2px line and 4px space.",
            default: "2 2",
            category: "Line"
        },
        lineSmoothing: {
            name: "Line Smoothing",
            default: "cardinal",
            type: [plotdb.Choice(["linear", "step", "step-before", "step-after", "basis", "bundle", "cardinal", "monotone"])],
            category: "Line"
        },
        lineStroke: {
            name: "Line Color",
            type: [plotdb.Color],
            default: "#999",
            category: "Line"
        },
        lineStrokeWidth: {
            name: "Line Width",
            type: [plotdb.Number],
            default: 1,
            category: "Line"
        },
        lineDashArray: {
            name: "Line Dash Array",
            type: [plotdb.String],
            default: "4 4",
            category: "Line"
        },
        gridShow: {
            name: "Show Grid",
            type: [plotdb.Boolean],
            default: !0,
            category: "Grid"
        },
        gridBackground: {
            name: "Background",
            type: [plotdb.Color],
            default: "rgba(255,255,255,0)",
            category: "Grid"
        },
        gridStroke: {
            name: "Color",
            type: [plotdb.Color],
            default: "#ccc",
            category: "Grid"
        },
        gridStrokeWidth: {
            name: "Stroke Width",
            type: [plotdb.Number],
            default: 1,
            category: "Grid"
        },
        gridFrameStroke: {
            name: "Frame Color",
            type: [plotdb.Color],
            default: "#ccc",
            category: "Grid"
        },
        gridFrameStrokeWidth: {
            name: "Frame Width",
            type: [plotdb.Number],
            default: 3,
            category: "Grid"
        },
        gridDashArray: {
            name: "Dash Style",
            type: [plotdb.String],
            default: "2 4",
            category: "Grid",
            desc: "SVG style dash array. '2 4' means 2px line and 4px space."
        },
        bubbleSizeMin: {
            name: "Min Size",
            type: [plotdb.Number],
            default: 0,
            category: "Bubble"
        },
        bubbleSizeMax: {
            name: "Max Size",
            type: [plotdb.Number],
            default: 20,
            category: "Bubble"
        },
        bubbleFill: {
            name: "Fill Color",
            type: [plotdb.Color],
            default: "#ffaaaa",
            category: "Bubble"
        },
        bubbleFillOpacity: {
            name: "Fill Opacity",
            type: [plotdb.Number],
            default: .5,
            category: "Bubble"
        },
        bubbleStroke: {
            name: "Stroke Color",
            type: [plotdb.Color],
            default: "#c01d1d",
            category: "Bubble"
        },
        bubbleStrokeWidth: {
            name: "Stroke Width",
            type: [plotdb.Number],
            default: "1",
            category: "Bubble"
        },
        bubblePadding: {
            name: "Bubble Padding",
            type: [plotdb.Number],
            default: 5,
            category: "Bubble"
        },
        barThick: {
            name: "Bar Thickness",
            type: [plotdb.Number],
            default: 10,
            category: "Layout"
        },
        lineThick: {
            name: "Line Thickness",
            type: [plotdb.Number],
            default: 10,
            category: "Layout"
        },
        legendShow: {
            name: "Show Legend",
            type: [plotdb.Boolean],
            default: !0,
            category: "Legend"
        },
        legendLabel: {
            name: "Label",
            type: [plotdb.String],
            category: "Legend"
        },
        legendPosition: {
            name: "Position",
            type: [plotdb.Choice(["top", "left", "right", "bottom"])],
            default: "right",
            category: "Legend"
        },
        otherLabel: {
            name: "Label for 'other'",
            type: [plotdb.String],
            default: "Other",
            category: "Label"
        },
        showLabel: {
            name: "Show Data Label",
            type: [plotdb.Boolean],
            default: !1,
            category: "Label"
        },
        labelShadowSize: {
            name: "Label Shadow Size",
            type: [plotdb.Number],
            default: 2,
            category: "Label"
        },
        labelShow: {
            name: "Show Data Label",
            type: [plotdb.Boolean],
            default: !1,
            category: "Label"
        },
        labelShowValue: {
            name: "Show Value",
            type: [plotdb.Boolean],
            desc: "Show value labels in chart",
            default: !1,
            rebindOnChange: !0,
            category: "Label"
        },
        labelShowOverflow: {
            name: "Show Overflow Label",
            type: [plotdb.Boolean],
            desc: "Show all label, even if they are too long.",
            default: !1,
            category: "Label"
        },
        labelPosition: {
            name: "Label Position",
            type: [plotdb.Choice(["in", "out"])],
            default: "out",
            category: "Label"
        },
        showPercent: {
            name: "Percentage in Label",
            type: [plotdb.Boolean],
            desc: "Show percentage in data label",
            default: !0,
            category: "Label"
        },
        nodeShow: {
            name: "Show Data Dot",
            type: [plotdb.Boolean],
            default: !0,
            category: "Dot"
        },
        nodeSize: {
            name: "Dot Size",
            type: [plotdb.Number],
            default: 6,
            category: "Dot"
        },
        nodeFill: {
            name: "Fill Color",
            type: [plotdb.Color],
            desc: "fill Dot with this color",
            default: "#eee",
            category: "Dot"
        },
        nodeStroke: {
            name: "Stroke Color",
            type: [plotdb.Color],
            desc: "draw Dot outline with this color",
            default: "#919191",
            category: "Dot"
        },
        nodeStrokeWidth: {
            name: "Stroke Width",
            type: [plotdb.Number],
            default: "1",
            category: "Dot"
        },
        aggregateShow: {
            name: "Show Aggregated Bubbles",
            desc: "After aggregating, show the result bubble ? ",
            type: [plotdb.Boolean],
            default: !0,
            category: "Aggregate",
            rebindOnChange: !0
        },
        aggregateThreshold: {
            name: "Merge Small Bubbles",
            desc: "Merge small bubbles into one bubble with its value this percent of total values",
            type: [plotdb.Number],
            category: "Aggregate",
            min: 0,
            max: 100,
            rebindOnChange: !0
        },
        aggregateMethod: {
            name: "Aggregate Method for Small Bubbles",
            desc: "How to aggregate small bubbles' values? You can choose 'Sum' or 'Average'",
            type: [plotdb.Choice(["Sum", "Average"])],
            category: "Aggregate",
            default: "Sum",
            rebindOnChange: !0
        },
        aggregateName: {
            name: "Label for Aggregated Bubble",
            desc: "this name will be shown as the label of bubble.",
            type: [plotdb.String],
            default: "Other",
            rebindOnChange: !0,
            category: "Aggregate"
        },
        unit: {
            name: "Unit",
            type: [plotdb.String],
            default: "",
            desc: "Unit of value",
            category: "Value"
        },
        xScaleRange: {
            name: "Data Range in X axis",
            type: [plotdb.Range],
            desc: "Enforce chart rendering within this range, in x axis",
            default: [0, 1],
            category: "Value"
        },
        yScaleRange: {
            name: "Data Range in Y axis",
            type: [plotdb.Range],
            desc: "Enforce chart rendering within this range, in y axis",
            default: [0, 1],
            category: "Value"
        },
        rScaleRange: {
            name: "Data Range in Circle Radius",
            type: [plotdb.Range],
            desc: "Enforce chart rendering within this range, in circle radius",
            default: [0, 1],
            category: "Value"
        },
        threshold: {
            name: "Threshold",
            type: [plotdb.Number],
            desc: "data larger than this value will be treated as positive, vice versa.",
            default: 0,
            category: "Value"
        },
        sort: {
            name: "Sort data",
            type: [plotdb.Choice(["Ascending", "Descending", "None"])],
            default: "Descending",
            category: "Value"
        },
        emptyAs0: {
            name: "Empty as 0",
            type: [plotdb.Boolean],
            desc: "Treat undefined data as 0",
            default: !0,
            category: "Value"
        },
        otherLimit: {
            name: "Small Data Threshold",
            type: [plotdb.Number],
            desc: "Data smaller than this value will be clustered into one set of data",
            default: 0,
            category: "Value"
        },
        zeroBaseline: {
            name: "Zero Baseline",
            desc: "y Axis starts with zero",
            type: [plotdb.Boolean],
            default: !0,
            rebindOnChange: !0,
            category: "Y Axis"
        },
        yAxisZeroBaseline: {
            name: "Zero Baseline",
            desc: "y Axis starts with zero",
            type: [plotdb.Boolean],
            default: !0,
            rebindOnChange: !0,
            category: "Y Axis"
        }
    }, ["X", "Y", "Radial", "Angular"].forEach(function (e) {
        var t, a, n, r;
        return t = e.charAt(0).toLowerCase() + "Axis", a = e + " Axis", n = [plotdb.Boolean], e = [plotdb.Number], r = [plotdb.Color], plotdb.config[t + "Show"] = {
            name: "Show Axis",
            type: n,
            default: !0,
            category: a
        }, plotdb.config[t + "ShowDomain"] = {
            name: "Show Basline",
            type: n,
            default: !0,
            category: a
        }, plotdb.config[t + "TickSizeInner"] = {
            name: "Inner Tick Size",
            type: e,
            default: 4,
            category: a
        }, plotdb.config[t + "TickSizeOuter"] = {
            name: "Outer Tick Size",
            type: e,
            default: 0,
            category: a
        }, plotdb.config[t + "TickPadding"] = {
            name: "Tick Padding",
            type: e,
            default: 4,
            category: a
        }, plotdb.config[t + "Stroke"] = {
            name: "Stroke Color",
            type: r,
            default: "#000",
            category: a
        }, plotdb.config[t + "Label"] = {
            name: "Label",
            type: [plotdb.String],
            default: "",
            category: a
        }, plotdb.config[t + "TickCount"] = {
            name: "Tick Count",
            type: e,
            default: 6,
            category: a,
            desc: "Hint on number of tick. Actual number will be decided by program"
        }, plotdb.config[t + "LabelPosition"] = {
            name: "Label Position",
            type: [plotdb.Choice(["in", "center"])],
            default: "center",
            category: a
        }, plotdb.config[t + "TickDirection"] = {
            name: "Tick Direction",
            type: [plotdb.Choice(["vertical", "horizontal"])],
            default: "horizontal",
            category: a
        }, plotdb.config[t + "HandleOverlap"] = {
            name: "Overlap Ticks",
            type: [plotdb.Choice(["none", "hidden", "offset"])],
            default: "hidden",
            category: a,
            desc: "How should overlapped ticks be taken care?"
        }
    }), plotdb.config.yAxisHandleOverlap.type = [plotdb.Choice(["none", "hidden"])], import$(plotdb.config, {
        yAxisPosition: {
            name: "Axis Position",
            type: [plotdb.Choice(["left", "right"])],
            default: "left",
            category: "Y Axis"
        },
        xAxisPosition: {
            name: "Axis Position",
            type: [plotdb.Choice(["top", "bottom"])],
            default: "bottom",
            category: "X Axis"
        }
    }), plotdb.util = {}, plotdb.util.trackResizeEvent = function (e, t) {
        var a, n, r, o, i, l, u, d, c, s, p;
        return a = {
            basic: {
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            },
            hide: {
                "z-index": -1,
                overflow: "hidden",
                visibility: "hidden"
            },
            child: {
                position: "absolute",
                left: 0,
                top: 0,
                transition: "0s"
            }
        }, import$(a.basic, a.hide), n = [0, 0, 0, 0, 0, 0].map(function () {
            return document.createElement("div")
        }), r = n[0].style, r.position = "absolute", r.top = 0, r.left = 0, r.width = "100%", r.height = "100%", r["z-index"] = import$(-1, a.hide), import$(n[1].style, a.basic), import$(n[2].style, a.basic), import$(n[3].style, a.basic), import$(n[4].style, a.child), r = import$(n[5].style, a.child), r.width = "200%", r.height = "200%", n[0].appendChild(n[1]), n[1].appendChild(n[2]), n[1].appendChild(n[3]), n[2].appendChild(n[4]), n[3].appendChild(n[5]), e.appendChild(n[0]), 1e9, (o = function () {
            var e;
            return e = n[4].style, e.width = 1e9 + "px", e.height = 1e9 + "px", e = n[2], e.scrollLeft = 1e9, e.scrollTop = 1e9, e = n[3], e.scrollLeft = 1e9, e.scrollTop = 1e9, e
        })(), r = [0, 0, 0, 0, 0], i = r[0], l = r[1], u = r[2], d = r[3], c = r[4], s = function () {
            return c = 0, i = u, l = d, t()
        }, p = function () {
            return u = n[0].offsetWidth, d = n[0].offsetHeight, (u !== i || d !== l) && !c && (c = requestAnimationFrame(s)), o()
        }, n[2].addEventListener("scroll", p), n[3].addEventListener("scroll", p)
    },
    function () {
        var e;
        if (e = {
                domain: "localhost",
                domainIO: "localhost.io",
                urlschema: "http://",
                name: "plotdb",
                debug: !0,
                facebook: {
                    clientID: "1546734828988373"
                },
                google: {
                    clientID: "1003996266757-4gv30no8ije0sd8d8qsd709dluav0676.apps.googleusercontent.com"
                },
                mode: 0,
                plan: {
                    sizeLimits: [1e6, 5e7, 1e9]
                }
            }, "undefined" != typeof module && null !== module) module.exports = e;
        else if ("undefined" != typeof angular && null !== angular) try {
            angular.module("plotDB").service("plConfig", [].concat(function () {
                return e
            }))
        } catch (e) {
            e
        }
        if ("undefined" != typeof window && null !== window) window.plConfig = e
    }(), plotdb.view = {
        host: plConfig.urlschema + "" + plConfig.domain,
        loader: function (e, t) {
            var a;
            return a = new XMLHttpRequest, a.onload = function () {
                var a, n;
                try {
                    return a = JSON.parse(this.responseText), t(Array.isArray(a) ? a.map(function (e) {
                        return new plotdb.view.chart(e, {})
                    }) : new plotdb.view.chart(a, {}))
                } catch (t) {
                    return n = t, console.error("load chart " + e + " failed when parsing response: "), console.error(n)
                }
            }, "number" == typeof e ? a.open("get", this.host + "/d/chart/" + e, !0) : "string" == typeof e && a.open("get", e, !0), a.send()
        },
        chart: function (chart, arg$) {
            var ref$, theme, fields, root, data, code, eventbus;
            return ref$ = null != arg$ ? arg$ : {}, theme = ref$.theme, fields = ref$.fields, root = ref$.root, data = ref$.data, code = ref$.code, this._ = {
                handler: {},
                _chart: JSON.stringify(chart),
                fields: fields,
                root: root,
                inited: !1,
                config: null
            }, chart && (code || (code = chart.code.content), "string" == typeof code ? (code = "{" === code[0] ? "(function() { return " + code + "; })();" : "(function() { " + code + "; return module.exports; })();", this._.chart = chart = import$(eval(code), chart)) : (this._.chart = chart = import$(code, chart), this._.code = code)), this._.config = chart.config, !chart.dimension && ((ref$ = chart.code || (chart.code = {})).content || (ref$.content = {})).dimension && (chart.dimension = chart.code.content.dimension), plotdb.chart.updateDimension(chart), plotdb.chart.updateConfig(chart, chart.config), plotdb.chart.updateAssets(chart, chart.assets), data && this.data(data), fields && this.sync(fields), data || null != fields && fields.length || this.data(chart.sample), null != theme && this.theme(theme), null != fields && this.sync(fields), root && this.attach(root), chart.saveLocal = function (e, t) {
                return function (a) {
                    var n;
                    return n = new XMLHttpRequest, n.onload = function () {
                        if (a) return a()
                    }, n.open("put", plConfig.urlschema + "" + plConfig.domain + "/e/chart/" + t + "/local", !0), n.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), n.send(JSON.stringify(e.local))
                }
            }(chart, chart.key), eventbus = { in: {},
                out: {}
            }, chart.fire = function (e, t) {
                var a;
                return ((a = eventbus.out)[e] || (a[e] = [])).forEach(function (e) {
                    return e(t)
                })
            }, this.fire = function (e, t) {
                var a;
                return ((a = eventbus.in)[e] || (a[e] = [])).forEach(function (e) {
                    return e(t)
                })
            }, this.handle = function (e, t) {
                var a;
                return ((a = eventbus.out)[e] || (a[e] = [])).push(t)
            }, chart.handle = function (e, t) {
                var a;
                return ((a = eventbus.in)[e] || (a[e] = [])).push(t)
            }, this
        }
    }, import$(plotdb.view.chart.prototype, {
        update: function () {
            var e = this;
            return ["resize", "bind", "render"].map(function (t) {
                if (e._.chart[t]) return e._.chart[t]()
            })
        },
        loadlib: function (e) {
            return this._.chart.library || []
        },
        attach: function (e) {
            var t, a, n, r, o, i, l, u, d, c, s, p, f;
            "string" == typeof e && (e = document.querySelector(e)), this._.root = t = e, a = {
                chart: (a = this._).chart,
                theme: a.theme
            }, n = a.chart, r = a.theme, e.setAttribute("class", (e.getAttribute("class") || "").split(" ").filter(function (e) {
                return "pdb-root" !== e
            }).concat(["pdb-root"]).join(" ")), n.metashow && (o = (a = [0, 0, 0, 0].map(function () {
                return document.createElement("div")
            }))[0], i = a[1], l = a[2], u = a[3], l.appendChild(u), (a = l.style).position = "absolute", a.left = "0", a.right = "0", (a = u.style).width = "100%", a.height = "100%", (a = i.style).position = "absolute", a.bottom = "0", [o, l, i].map(function (t) {
                return e.appendChild(t)
            }), c = (d = n.config.margin || 10) - 10 > 10 ? d - 10 : d / 2, import$(o.style, {
                position: "relative",
                "z-index": 999,
                "text-align": "center",
                margin: c + "px 0 0",
                "font-family": n.config.fontFamily || "initial"
            }), import$(i.style, {
                left: d + "px",
                bottom: c + "px"
            }), o.innerHTML = ["<h2 style='margin:0'>" + n.name + "</h2>", "<p style='margin:0'>" + n.description + "</p>"].join(""), n.footer && (i.innerHTML = "<small>" + n.footer + "</small>"), import$(l.style, {
                top: o.getBoundingClientRect().height + "px",
                bottom: i.getBoundingClientRect().height + "px"
            }), e = u), e.innerHTML = [n && n.style ? "<style type='text/css'>/* <![CDATA[ */" + ((n.style || (n.style = {})).content || "") + "/* ]]> */</style>" : void 0, r && r.style ? "<style type='text/css'>/* <![CDATA[ */" + ((r.style || (r.style = {})).content || "") + "/* ]]> */</style>" : void 0, "<div style='position:relative;width:100%;height:100%;'><div style='height:0;'>&nbsp;</div>", (n.doc || (n.doc = {})).content || "", "</div>", r && (r.doc || (r.doc = {})).content ? (r.doc || (r.doc = {})).content : void 0].join(""), n.root = e.querySelector("div:first-of-type"), s = function () {
                return s.handle && clearTimeout(s.handle), s.handle = setTimeout(function () {
                    if (s.handle = null, n.resize && n.resize(), n.render) return n.render()
                }, 10)
            }, plotdb.util.trackResizeEvent(e, function () {
                return s()
            }), p = (t.getAttribute("class") || "").split(" ").filter(function (e) {
                return "loading" !== e
            }).join(" ").trim();
            try {
                n.init && n.init(), n.parse && n.parse(), n.resize && n.resize(), n.bind && n.bind(), n.render && n.render()
            } catch (e) {
                f = e, p += " error", console.error(f)
            }
            return t.setAttribute("class", p), this.inited = !0
        },
        config: function (e, t, a) {
            var n, r, o, i, l, u;
            if (null == t && (t = !1), n = this._.chart, import$(n.config, e), t) return r = [n.config, this._.config], o = r[0], i = r[1], (a = null != a ? a : function () {
                var t, a = [];
                for (l in t = e) u = t[l], a.push([l, u]);
                return a
            }().filter(function () {
                return o[l] !== u && i[l].rebindOnChange
            })) && n.parse(), n.resize(), a && n.bind(), n.render()
        },
        init: function (e) {
            return this._.chart.init()
        },
        parse: function () {
            return this._.chart.parse()
        },
        resize: function () {
            return this._.chart.resize()
        },
        bind: function () {
            return this._.chart.bind()
        },
        render: function () {
            return this._.chart.render()
        },
        destroy: function () {
            if (this._.chart.destroy) return this._.chart.destroy()
        },
        clone: function () {
            var e, t, a, n, r, o;
            if (e = null, this._.code && "object" == typeof this._.code) {
                e = {};
                for (t in a = this._.code) "function" == typeof (n = a[t]) && (e[t] = n)
            }
            return new plotdb.view.chart(JSON.parse(this._._chart), (o = {}, o.theme = (r = this._).theme, o.fields = r.fields, a = o, a.code = e, a))
        },
        on: function (e, t) {
            var a;
            return ((a = this._.handler)[e] || (a[e] = [])).push(t)
        },
        theme: function (theme) {
            return this._.theme = import$(eval(theme.code.content), theme)
        },
        refresh: function () {
            return this._.chart.parse(), this._.chart.resize(), this._.chart.bind(), this._.chart.render()
        },
        data: function (e, t, a) {
            var n, r;
            return null == e ? this._.data : (a && (e = plotdb.chart.dataConvert.byMapping(e, a)), Array.isArray(e) || typeof e != typeof {} || (n = function () {
                var t = [];
                for (r in e) t.push(r);
                return t
            }()[0], Array.isArray(e[n]) || (e = plotdb.chart.dataConvert.fromDimension(e))), this._.data = e, this.sync(), this.inited && t ? this.refresh() : void 0)
        },
        sync: function (e) {
            var t, a, n, r, o, i, l;
            if (null == e && (e = []), this._.data) return this._.chart.data = plotdb.chart.dataFromHash(this._.chart.dimension, this._.data);
            for (t = {}, a = 0, n = e.length; a < n; ++a) r = e[a], t[r.key] = r;
            for (o in i = this._.chart.dimension)(l = i[o]).fields = (l.fields || []).map(function (e) {
                return t[e.key]
            }).filter(function (e) {
                return e
            });
            return plotdb.chart.updateData(this._.chart), this.inited && this._.chart.parse ? this._.chart.parse() : void 0
        }
    }), plotdb.load = function (e, t) {
        return plotdb.view.loader(e, t)
    }, plotdb.render = function (e, t) {
        return plotdb.view.render(e, t)
    };