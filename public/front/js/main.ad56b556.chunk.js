(window.webpackJsonp = window.webpackJsonp || []).push([
   [0],
   {
      178: function (e, t, a) {
         e.exports = a.p + "static/media/paper-plane.80e4510c.png";
      },
      264: function (e, t, a) {
         e.exports = a.p + "static/media/bdx-merignac.00e00757.webp";
      },
      265: function (e, t, a) {
         e.exports = a.p + "static/media/bdx-stJean.78f4ac36.webp";
      },
      266: function (e, t, a) {
         e.exports = a.p + "static/media/lyon-stEx.e894d14c.webp";
      },
      267: function (e, t, a) {
         e.exports = a.p + "static/media/lyon-stEx-station.af622fe5.webp";
      },
      268: function (e, t, a) {
         e.exports = a.p + "static/media/mrs-provence.74f82d55.webp";
      },
      269: function (e, t, a) {
         e.exports = a.p + "static/media/aix-provence-station.2d766965.webp";
      },
      270: function (e, t, a) {
         e.exports = a.p + "static/media/nantes.82435d51.webp";
      },
      271: function (e, t, a) {
         e.exports = a.p + "static/media/nice.b222e3c0.webp";
      },
      272: function (e, t, a) {
         e.exports = a.p + "static/media/paris-cdg.30f996e6.webp";
      },
      273: function (e, t, a) {
         e.exports = a.p + "static/media/paris-orly.dff1b5eb.webp";
      },
      274: function (e, t, a) {
         e.exports = a.p + "static/media/toulouse-blagnac.7fde0d8d.webp";
      },
      299: function (e, t, a) {
         e.exports = a.p + "static/media/plane.9b9e635f.png";
      },
      300: function (e, t, a) {
         e.exports = a.p + "static/media/rocket.1721c49f.png";
      },
      303: function (e, t, a) {
         e.exports = a(559);
      },
      305: function (e, t, a) {},
      559: function (e, t, a) {
         "use strict";
         a.r(t);
         var n = {};
         a.r(n),
            a.d(n, "FETCH_SITES", function () {
               return Pe;
            }),
            a.d(n, "FETCH_SITES_SUCCESS", function () {
               return Be;
            }),
            a.d(n, "ARRIVAL_SITES_FILTERED", function () {
               return Ye;
            }),
            a.d(n, "filterArrivalSites", function () {
               return Ve;
            }),
            a.d(n, "fetchSites", function () {
               return Ze;
            });
         var r = {};
         a.r(r),
            a.d(r, "DEPARTURE_CHANGED", function () {
               return qe;
            }),
            a.d(r, "ARRIVAL_CHANGED", function () {
               return Qe;
            }),
            a.d(r, "INVALID_ARRIVAL_TRIP", function () {
               return Xe;
            }),
            a.d(r, "departureChanged", function () {
               return nt;
            }),
            a.d(r, "arrivalChanged", function () {
               return rt;
            }),
            a.d(r, "invalidArrivalTrip", function () {
               return it;
            }),
            a.d(r, "changeDeparture", function () {
               return ot;
            }),
            a.d(r, "changeArrival", function () {
               return ct;
            });
         var i = {};
         a.r(i),
            a.d(i, "FETCH_INFORMATIONS", function () {
               return _n;
            }),
            a.d(i, "FETCH_INFORMATIONS_SUCCESS", function () {
               return wn;
            }),
            a.d(i, "FETCH_INFORMATIONS_ABORT", function () {
               return Ln;
            }),
            a.d(i, "SELECT_INFORMATIONS", function () {
               return Tn;
            }),
            a.d(i, "FORCE_INFORMATIONS", function () {
               return Nn;
            }),
            a.d(i, "TOGGLE_UNKNOWN_INFORMATIONS", function () {
               return Dn;
            }),
            a.d(i, "CLEAR_INFORMATIONS", function () {
               return An;
            }),
            a.d(i, "fetchTripInfos", function () {
               return Mn;
            }),
            a.d(i, "selectTripInfos", function () {
               return Fn;
            }),
            a.d(i, "forceTripInfos", function () {
               return Rn;
            }),
            a.d(i, "toggleUnknownTripInfos", function () {
               return xn;
            }),
            a.d(i, "clearTripInfos", function () {
               return Hn;
            });
         a(304), a(305), a(306), a(316), a(499), a(502), a(503);
         var o = a(2),
            c = a.n(o),
            s = a(1),
            l = a(5),
            u = a.n(l);
         function d(e) {
            var t =
               arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            try {
               var a = Object(s.a)({ event: e }, t);
               0, window.dataLayer.push(a);
            } catch (n) {
               console.warn("GTM does not seem to be available.", n);
            }
         }
         var p = function () {
            return new Promise(function (e, t) {
               var a = Date.now();
               !(function n() {
                  Date.now() - a > 3e3
                     ? t(new Error("Timeout. Google analytics not injected!"))
                     : window.ga
                     ? e(window.ga)
                     : setTimeout(n, 500);
               })();
            });
         };
         function m(e) {
            if (0 !== e.length)
               try {
                  p()
                     .then(function (t) {
                        t(function (t) {
                           var a = t.get("clientId");
                           c()("<input>")
                              .attr({
                                 type: "hidden",
                                 id: "gaClientId",
                                 name: "gaClientId",
                                 value: a,
                              })
                              .appendTo(e);
                        });
                     })
                     .catch(function (e) {
                        console.warn("GA does not seem to be available.", e);
                     });
               } catch (t) {
                  console.warn("GA does not seem to be available.", t);
               }
         }
         var f = a(92),
            v = a(249),
            b = a.n(v),
            g = a(250),
            h = a(251),
            E = a(252),
            O = function () {
               return f.a.language;
            };
         f.a
            .use(g.a)
            .use(b.a)
            .init({
               fallbackLng: "fr",
               debug: !1,
               react: { transKeepBasicHtmlNodesFor: ["br", "span", "strong"] },
               detection: {
                  order: ["cookie", "navigator"],
                  lookupCookie: "PLAY_LANG",
               },
               backend: {
                  backends: [h.a, E.a],
                  backendOptions: [
                     {
                        prefix: "bv_i18n_",
                        expirationTime: 1,
                        versions: {
                           fr: "v4",
                           en: "v4",
                           es: "v4",
                           nl: "v4",
                           it: "v4",
                        },
                     },
                     {
                        withCredentials: !0,
                        allowMultiLoading: !1,
                        loadPath: "/locales/{{lng}}.json",
                     },
                  ],
               },
            });
         var C = f.a,
            y = a(253),
            k = a.n(y),
            S = a(10),
            j = a(22),
            _ = a(80),
            w = a.n(_),
            L = a(15),
            T = a(16),
            N = a(91);
         var D = (function () {
               for (
                  var e = 3, t = document.createElement("b"), a = t.all || [];
                  (t.innerHTML =
                     "\x3c!--[if gt IE " + ++e + "]><i><![endif]--\x3e"),
                     a[0];

               );
               return e > 4 ? e : document.documentMode;
            })(),
            A = (function (e) {
               Object(L.a)(a, e);
               var t = Object(T.a)(a);
               function a(e, n) {
                  var r;
                  return (
                     Object(S.a)(this, a),
                     ((r = t.call(this, "Error fetching url ".concat(e))).url =
                        e),
                     (r.res = n),
                     (r.name = "FetchError"),
                     r
                  );
               }
               return a;
            })(Object(N.a)(Error)),
            I = function (e) {
               if (!D) return e;
               var t = Date.now().toString();
               return w()(e).addQuery(t).toString();
            },
            M = function (e) {
               var t = e;
               return D
                  ? (t.headers || (t.headers = {}),
                    (t.headers["X-Requested-With"] = "XMLHttpRequest"),
                    (t.headers.Expires = "-1"),
                    (t.headers["Cache-Control"] =
                       "no-cache,no-store,must-revalidate,max-age=-1,private"),
                    t)
                  : t;
            };
         function F(e) {
            var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                     ? arguments[1]
                     : {},
               a = Object(s.a)({ credentials: "same-origin" }, t);
            return fetch(I(e), M(a)).then(function (t) {
               if (t.status < 400) return t;
               throw new A(e, t);
            });
         }
         var R,
            x = function (e) {
               var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                     ? arguments[1]
                     : {};
               return F(
                  e,
                  Object(s.a)(
                     Object(s.a)({}, t),
                     {},
                     {
                        headers: {
                           Accept: "application/json",
                           "Content-Type": "application/json",
                        },
                     }
                  )
               ).then(function (e) {
                  return e.json();
               });
            },
            H = function (e, t) {
               var a =
                  arguments.length > 2 && void 0 !== arguments[2]
                     ? arguments[2]
                     : {};
               return x(
                  e,
                  Object(s.a)(
                     Object(s.a)({}, a),
                     {},
                     { method: "POST", body: JSON.stringify(t) }
                  )
               );
            },
            P = a(9),
            B = function () {
               return (
                  document.cookie.split(";").reduce(function (e, t) {
                     var a = e,
                        n = t.split("="),
                        r = Object(P.a)(n, 2),
                        i = r[0],
                        o = r[1];
                     return i && o && (a[i.trim()] = o), a;
                  }, {}).PLAY_LANG || "fr"
               );
            },
            Y = function (e) {
               return u()(e).format("DD/MM/YYYY");
            },
            U = [
               { start: "EJU", replace: "EZY" },
               { start: "EZS", replace: "EZY" },
               { start: "CE", replace: "CE0" },
               { start: "EK", replace: "EK0" },
               { start: "I2", replace: "IB" },
            ],
            V = (function () {
               function e() {
                  Object(S.a)(this, e);
               }
               return (
                  Object(j.a)(e, null, [
                     {
                        key: "getSites",
                        value: function () {
                           var e = B();
                           return x("/sites.json?lang=".concat(e));
                        },
                     },
                     {
                        key: "getSiteDepartureSlots",
                        value: function (e, t, a) {
                           var n = a ? "&order_id=".concat(a) : "";
                           return x(
                              "/sites/slots/departure.json?site="
                                 .concat(e, "&date=")
                                 .concat(Y(t))
                                 .concat(n)
                           );
                        },
                     },
                     {
                        key: "getSiteArrivalSlots",
                        value: function (e, t, a) {
                           var n = a ? "&order_id=".concat(a) : "";
                           return x(
                              "/sites/slots/arrival.json?site="
                                 .concat(e, "&date=")
                                 .concat(Y(t))
                                 .concat(n)
                           );
                        },
                     },
                     {
                        key: "getServices",
                        value: function (e, t, a, n, r, i) {
                           var o =
                                 a && n
                                    ? "&start_date="
                                         .concat(a, "&end_date=")
                                         .concat(n)
                                    : "",
                              c = r ? "&business_id=".concat(r) : "",
                              s = i ? "&worker_id=".concat(i.id) : "";
                           return x(
                              "/services.json?start_site="
                                 .concat(e, "&end_site=")
                                 .concat(t)
                                 .concat(o)
                                 .concat(c)
                                 .concat(s)
                           );
                        },
                     },
                     {
                        key: "getCompanies",
                        value: function () {
                           return F("/business/companies.json", {
                              method: "GET",
                              headers: { Accept: "application/json" },
                           });
                        },
                     },
                     {
                        key: "getSummary",
                        value: function () {
                           return F("/cart/summary.json", {
                              method: "GET",
                              headers: { Accept: "application/json" },
                           });
                        },
                     },
                     {
                        key: "estimate",
                        value: function (e, t) {
                           return H(
                              "/orders/estimate",
                              Object(s.a)(Object(s.a)({}, e), t)
                           );
                        },
                     },
                     {
                        key: "getValidateForm",
                        value: function (e) {
                           var t =
                                 c()("#CurrentCart").hasClass("display-error"),
                              a = new w.a(
                                 "/cart/validate.html?display_errors=".concat(t)
                              );
                           e && a.addQuery("worker", e);
                           var n = new FormData(c()("#ValidateForm")[0]);
                           return F(a.toString(), {
                              method: "POST",
                              body: n,
                              headers: { Cache: "no-cache" },
                           }).then(function (e) {
                              return 200 === e.status ? e.text() : null;
                           });
                        },
                     },
                     {
                        key: "saveCart",
                        value: function (e) {
                           return F("/cart", {
                              method: "PUT",
                              body: e,
                              headers: { "Content-Type": "application/json" },
                           });
                        },
                     },
                     {
                        key: "getQuery",
                        value: function (e, t, a, n) {
                           var r = new w.a("/transport/".concat(e, ".json"));
                           r.addQuery("site", t), r.addQuery("date", a);
                           var i = n;
                           if (i) {
                              i = i.toUpperCase();
                              var o = U.find(function (e) {
                                 return i.startsWith(e.start);
                              });
                              o &&
                                 !i.match(o.replace) &&
                                 (i = i.replace(o.start, o.replace));
                           }
                           return r.addQuery("query", i), r;
                        },
                     },
                     {
                        key: "getTripInfos",
                        value: function (e, t, a, n, r) {
                           var i = this.getQuery(e, t, a, n);
                           return x(i, { method: "GET", signal: r });
                        },
                     },
                     {
                        key: "simulateUpdate",
                        value: function (e, t) {
                           return H("/orders/".concat(e, "/simulate"), t);
                        },
                     },
                  ]),
                  e
               );
            })(),
            Z = function (e, t) {
               return function (a) {
                  a({ type: "FETCH_DEPARTURE_SLOTS" }),
                     V.getSiteDepartureSlots(e, t).then(function (e) {
                        return a(
                           (function (e) {
                              return {
                                 type: "FETCH_DEPARTURE_SLOTS_SUCCESS",
                                 slots: e,
                              };
                           })(e)
                        );
                     });
               };
            },
            G = function (e, t) {
               return function (a) {
                  a({ type: "FETCH_ARRIVAL_SLOTS" }),
                     V.getSiteArrivalSlots(e, t).then(function (e) {
                        return a(
                           (function (e) {
                              return {
                                 type: "FETCH_ARRIVAL_SLOTS_SUCCESS",
                                 slots: e,
                              };
                           })(e)
                        );
                     });
               };
            },
            z = function () {
               return { type: "ARRIVAL_SLOT_AVAILABLE" };
            },
            K = function () {
               return { type: "ARRIVAL_SLOT_UNAVAILABLE" };
            },
            J = { mode: "cart" },
            W = function (e, t) {
               return function (a) {
                  return function (n, r) {
                     r().config.mode === e && a(t)(n, r);
                  };
               };
            },
            q = function (e) {
               return { type: "FETCH_SERVICES_SUCCESS", services: e };
            },
            Q = function (e) {
               return e.site && e.date && e.hour;
            },
            X = function (e) {
               if (e.date && e.hour) {
                  var t = u()(e.date).format("DD/MM/YYYY");
                  return "".concat(t, " ").concat(e.hour);
               }
               return null;
            },
            $ = function () {
               return function (e, t) {
                  var a = t();
                  if (!a.services.isFetching) {
                     var n = a.booking,
                        r = n.departure,
                        i = n.arrival,
                        o = a.cart,
                        c = o.business,
                        s = o.worker;
                     if (Q(r) && Q(i)) {
                        e({ type: "FETCH_SERVICES" });
                        var l = X(r),
                           u = X(i);
                        V.getServices(r.site, i.site, l, u, c, s).then(
                           function (t) {
                              e(q(t));
                           }
                        );
                     } else e(q([])), e(Ne());
                  }
               };
            },
            ee = function () {
               return W("cart")($);
            },
            te = function (e) {
               return { type: "FETCH_COMPANIES_SUCCES", companies: e };
            },
            ae = a(173),
            ne = a.n(ae),
            re = a(38),
            ie = a.n(re),
            oe = a(60),
            ce = a(17),
            se = { Airport: "airport", Station: "station" },
            le =
               ((R = {}),
               Object(ce.a)(R, se.Airport, 45),
               Object(ce.a)(R, se.Station, 30),
               R),
            ue = { minPromotionAmount: 3, minPromotionCoeff: 0.04 };
         ne.a.RM = 1;
         var de = function (e, t) {
               var a = !!t && t.toString().length > 0;
               return e && !a;
            },
            pe = function (e) {
               return e ? u()(e).format("DD/MM/YYYY") : "";
            },
            me = function (e) {
               var t =
                     arguments.length > 1 &&
                     void 0 !== arguments[1] &&
                     arguments[1],
                  a = new ne.a(e).toFixed(2).toString();
               return t ? a.replace(".00", "") : a;
            },
            fe = function (e, t) {
               return e.find(function (e) {
                  return e.id.toString() === t;
               });
            },
            ve = function (e, t) {
               if (!e || !t) return null;
               var a = t
                  .map(function (t) {
                     return [t, e[t]];
                  })
                  .filter(function (e) {
                     return void 0 !== Object(P.a)(e, 2)[1];
                  });
               return Object.fromEntries(a);
            },
            be = function (e, t) {
               var a = function (e, t) {
                  return Object.keys(e).reduce(function (a, n) {
                     var r,
                        i = Object(s.a)({}, a),
                        o = e[n];
                     return (
                        (i[t + ((r = n).charAt(0).toUpperCase() + r.slice(1))] =
                           (function (e) {
                              return "string" === typeof e && e.length > 0
                                 ? e
                                 : e instanceof Date
                                 ? pe(e)
                                 : e instanceof Object && !ie()(e)
                                 ? e
                                 : void 0;
                           })(o)),
                        i
                     );
                  }, {});
               };
               return { start: a(e, "start"), end: a(t, "end") };
            },
            ge = function (e) {
               var t = function (t) {
                     var a = e.find('input[name="'.concat(t, '"]')).val();
                     if (void 0 !== a && a.length > 0) return a;
                  },
                  a = function (t) {
                     var a = e.find('input[name="'.concat(t, '"]')).val();
                     return void 0 !== a && a.length > 0 ? JSON.parse(a) : {};
                  },
                  n = function (e) {
                     if (e) return u()(e, "DD/MM/YYYY").toDate();
                  },
                  r = {
                     site: t("startSite"),
                     checkpoint: t("startCheckpoint"),
                     date: n(t("startDate")),
                     hour: t("startHour"),
                     tripNumber: t("startTripNumber"),
                     tripDetail: a("startTripDetail"),
                  },
                  i = {
                     site: t("endSite"),
                     checkpoint: t("endCheckpoint"),
                     date: n(t("endDate")),
                     hour: t("endHour"),
                     tripNumber: t("endTripNumber"),
                     tripDetail: a("endTripDetail"),
                  },
                  o = t("voucher"),
                  c = t("business");
               return {
                  booking: { departure: r, arrival: i },
                  cart: {
                     options: oe.Set(
                        (t("services") || "")
                           .split(",")
                           .map(Number)
                           .filter(function (e) {
                              return e > 0;
                           })
                     ),
                     voucher: o,
                     business: c,
                     worker: (function () {
                        var t = e.find('input[name="business"]');
                        if (t && t.val() && t[0].hasAttribute("data-id"))
                           return {
                              id: t.attr("data-id"),
                              business: t.attr("data-name"),
                              name: t.attr("data-worker"),
                           };
                     })(),
                  },
               };
            },
            he = function (e, t, a) {
               if (a.isBefore(t)) return [];
               var n = u()(e.startTime, "HH:mm"),
                  r = u()(e.endTime, "HH:mm"),
                  i = u.a.range(n, r),
                  o = Array.from(i.by("minutes", { step: e.step })).map(
                     function (t, a) {
                        var n = t.format("HH:mm");
                        return {
                           slot: t,
                           value: n,
                           isUnavailable: -1 !== e.unavailables.indexOf(a),
                        };
                     }
                  );
               return t.isValid()
                  ? o.filter(function (e) {
                       var n = e.slot;
                       return (
                          n.isSame(t) ||
                          n.isSame(a) ||
                          (n.isAfter(t) && n.isBefore(a))
                       );
                    })
                  : o;
            },
            Ee = function (e, t) {
               return void 0 !== e && void 0 !== t
                  ? e.getTime() !== t.getTime()
                  : e !== t;
            },
            Oe = function (e, t) {
               var a = u()(e.arrivalTime, "DD/MM/YYYY HH:mm"),
                  n = a.clone().subtract(2, "m"),
                  r = a.clone().add(2, "m");
               return t.find(function (e) {
                  var t = u()(e.value, "HH:mm");
                  return a
                     .clone()
                     .hour(t.hour())
                     .minute(t.minute())
                     .isBetween(n, r, "minutes", "[]");
               });
            },
            Ce = function (e, t) {
               var a =
                  arguments.length > 2 && void 0 !== arguments[2]
                     ? arguments[2]
                     : ue;
               if (e) {
                  var n = e - t >= a.minPromotionAmount,
                     r =
                        Number(((e - t) / e).toFixed(2)) >= a.minPromotionCoeff;
                  return n && r;
               }
               return !1;
            },
            ye = function (e, t) {
               return e ? Number((((e - t) / e) * 100).toFixed(0)) : 0;
            },
            ke = "TOGGLE_OPTION",
            Se = "CART_PERSISTED",
            je = "FETCH_SUMMARY_SUCCESS",
            _e = function (e) {
               return { type: "FETCH_SUMMARY_FAILURE", error: e };
            },
            we = function () {
               return function (e) {
                  try {
                     V.getSummary()
                        .then(function (t) {
                           200 === t.status &&
                              t.json().then(function (t) {
                                 return e(
                                    (function (e) {
                                       return { type: je, summary: e };
                                    })(t)
                                 );
                              });
                        })
                        .catch(function (t) {
                           t.res.json().then(function (t) {
                              return e(_e(t));
                           });
                        });
                  } catch (t) {
                     e(_e(t));
                  }
               };
            },
            Le = function (e) {
               return { type: "REMOVE_OPTION", option: e };
            },
            Te = function (e, t) {
               return function (a, n) {
                  var r,
                     i = n().services.services,
                     o =
                        ((r = e),
                        i.find(function (e) {
                           return e.id.toString() === r.toString();
                        }));
                  o &&
                     (a({ type: ke, option: e, previous: t }),
                     o.isExclusiveWith &&
                        i
                           .filter(function (e) {
                              return e.id.toString() !== o.id.toString();
                           })
                           .filter(function (e) {
                              return e.isExclusiveWith === o.isExclusiveWith;
                           })
                           .map(function (e) {
                              return e.id;
                           })
                           .map(function (e) {
                              return a(Le(e));
                           }));
               };
            },
            Ne = function () {
               return { type: "CLEAR_OPTIONS" };
            },
            De = function (e) {
               return { type: Se, summary: e };
            },
            Ae = function (e) {
               return { type: "CART_PERSIST_ERROR", error: e };
            },
            Ie = function () {
               return function (e, t) {
                  var a = t(),
                     n = a.booking,
                     r = n.departure,
                     i = n.arrival,
                     o = a.cart,
                     c = o.options,
                     l = o.voucher,
                     u = o.business,
                     d = o.worker,
                     p = be(r, i),
                     m = p.start,
                     f = p.end,
                     v = JSON.stringify(
                        Object(s.a)(
                           Object(s.a)(Object(s.a)({}, m), f),
                           {},
                           {
                              services: c ? c.toArray() : void 0,
                              voucher: l,
                              business: u,
                              isSubstituted: !!d,
                           }
                        )
                     );
                  V.saveCart(v)
                     .then(function (t) {
                        200 === t.status
                           ? t.json().then(function (t) {
                                return e(De(t));
                             })
                           : e(De());
                     })
                     .catch(function (t) {
                        try {
                           t.res.json().then(function (t) {
                              return e(Ae(t));
                           });
                        } catch (a) {
                           e(Ae(a));
                        }
                     });
               };
            },
            Me = k()(function (e) {
               return e(Ie());
            }, 600),
            Fe = { isFetching: !1, services: [] },
            Re = function (e) {
               return e.services.services;
            },
            xe = function (e, t) {
               return Re(e).find(function (e) {
                  return e.id.toString() === t.toString();
               });
            },
            He = a(28),
            Pe = "FETCH_SITES",
            Be = "FETCH_SITES_SUCCESS",
            Ye = "ARRIVAL_SITES_FILTERED",
            Ue = function (e) {
               return { type: Ye, sites: e };
            },
            Ve = function (e) {
               return function (t, a) {
                  var n = a().sites,
                     r = n.sites,
                     i = n.switches;
                  if (e) {
                     var o = r.filter(function (t) {
                        return (
                           (function (t) {
                              return (
                                 void 0 !==
                                 i.find(function (a) {
                                    return (
                                       a.from.toString() === e &&
                                       a.to.toString() === t.id.toString()
                                    );
                                 })
                              );
                           })(t) ||
                           (function (t) {
                              return t.id.toString() === e;
                           })(t)
                        );
                     });
                     t(Ue(o));
                  } else t(Ue(r));
               };
            },
            Ze = function () {
               return function (e, t) {
                  t().sites.isFetchingSites ||
                     (e({ type: Pe }),
                     V.getSites().then(function (t) {
                        e(
                           (function (e) {
                              var t = e.sites,
                                 a = e.switches;
                              return { type: Be, sites: t, switches: a };
                           })(t)
                        ),
                           e(function (e, t) {
                              var a = t().booking.departure;
                              a && a.site && e(Ve(a.site));
                           });
                     }));
               };
            },
            Ge = ["site", "date", "hour"],
            ze = function () {
               var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
               return function (t, a) {
                  var n = a(),
                     r = n.estimate,
                     i = r.isFetching,
                     o = r.hasBeenSubmit,
                     c = r.estimation;
                  if (!i) {
                     e || t({ type: "SUBMIT_ESTIMATE" });
                     var s = !e || (e && !!c),
                        l = n.booking,
                        u = l.departure,
                        d = l.arrival,
                        p = ve(u, Ge),
                        m = ve(d, Ge),
                        f = function (e) {
                           return (
                              !!e &&
                              Object.keys(e).length === Ge.length &&
                              ((t = e),
                              !Object.values(t).some(function (e) {
                                 return (
                                    void 0 === e ||
                                    null === e ||
                                    0 === e.toString().length
                                 );
                              }))
                           );
                           var t;
                        };
                     if (f(p) && f(m) && s) {
                        t({ type: "ESTIMATE_BOOKING" });
                        var v = be(p, m),
                           b = v.start,
                           g = v.end;
                        V.estimate(b, g)
                           .then(function (e) {
                              return t(
                                 (function (e) {
                                    return {
                                       type: "ESTIMATE_BOOKING_SUCCESS",
                                       estimation: e,
                                    };
                                 })(e)
                              );
                           })
                           .catch(function (e) {
                              return t(
                                 (function (e) {
                                    return {
                                       type: "ESTIMATE_BOOKING_FAILURE",
                                       error: e,
                                    };
                                 })(e)
                              );
                           });
                     } else {
                        t({
                           type: "DISPLAY_FORM_VALIDATION_ERRORS",
                           value: !e || o || !!c,
                        });
                     }
                  }
               };
            },
            Ke = function () {
               var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
               return W("estimate", e)(ze);
            },
            Je = {
               isFetchingSites: !1,
               sites: [],
               switches: [],
               arrivalSites: [],
            },
            We = function (e) {
               return e.sites.sites;
            },
            qe = "DEPARTURE_CHANGED",
            Qe = "ARRIVAL_CHANGED",
            Xe = "INVALID_ARRIVAL_TRIP",
            $e = function (e, t) {
               return function (a) {
                  t.site && t.date
                     ? (e.site === t.site && e.date === t.date) ||
                       a(G(t.site, t.date))
                     : a({ type: "CLEAR_ARRIVAL_SLOTS" });
               };
            },
            et = function (e) {
               return function (t) {
                  var a = Object(s.a)({}, t),
                     n = (function (e, t) {
                        return e.sites.sites.find(function (e) {
                           return e.id.toString() === t;
                        });
                     })(e, t.site);
                  return (
                     n &&
                        1 === n.checkpoints.length &&
                        (a.checkpoint =
                           a.checkpoint || n.checkpoints[0].id.toString()),
                     a
                  );
               };
            },
            tt = function (e) {
               return function (t) {
                  return e.checkpoint && !t.checkpoint
                     ? Object(s.a)(
                          Object(s.a)({}, t),
                          {},
                          { checkpoint: e.checkpoint }
                       )
                     : t;
               };
            },
            at = function (e) {
               return function (t) {
                  return e.site !== t.site
                     ? Object(s.a)(
                          Object(s.a)({}, t),
                          {},
                          { checkpoint: void 0 }
                       )
                     : t;
               };
            },
            nt = function (e) {
               return { type: qe, departure: e };
            },
            rt = function (e) {
               return { type: Qe, arrival: e };
            },
            it = function () {
               return { type: Xe };
            },
            ot = function (e, t) {
               return function (a, n) {
                  a(Ve(e.site));
                  var r,
                     i,
                     o = n(),
                     c = o.booking,
                     l = c.departure,
                     d = c.arrival,
                     p = Object(He.d)(et(o), at(l))(e),
                     m = u()(l.date),
                     f = u()(p.date),
                     v = u()(d.date),
                     b = l.site !== p.site,
                     g = l.checkpoint !== p.checkpoint,
                     h = !m.isSame(f);
                  if (v.isBefore(f)) a(it());
                  else if (v.isSame(f)) {
                     var E = u()(p.hour, "HH:mm");
                     u()(d.hour, "HH:mm").isBefore(E) && a(it());
                  }
                  if (((b || h) && (p.tripDetail = {}), a(nt(p)), b)) {
                     var O = Object(s.a)(
                           Object(s.a)({}, d),
                           {},
                           { checkpoint: void 0 }
                        ),
                        C = Object(He.d)(
                           tt(p),
                           (function (e, t, a) {
                              return function (n) {
                                 var r = Object(s.a)({}, n),
                                    i = (function (e) {
                                       return e.sites.arrivalSites;
                                    })(e),
                                    o =
                                       n.site &&
                                       null !=
                                          i.find(function (e) {
                                             return e.id.toString() === n.site;
                                          });
                                 return (
                                    1 === i.length
                                       ? (r.site = i[0].id.toString())
                                       : i.length > 1 &&
                                         (r.site =
                                            (o && !a && n.site) || t.site),
                                    r
                                 );
                              };
                           })(o, p, t)
                        )(O);
                     a(rt(C)), a($e(d, C));
                  } else if (g) {
                     var y = Object(He.d)(tt(p))(d);
                     a(rt(y));
                  }
                  a(
                     ((r = l),
                     (i = p),
                     function (e) {
                        i.site && i.date
                           ? (r.site === i.site && r.date === i.date) ||
                             e(Z(i.site, i.date))
                           : e({ type: "CLEAR_DEPARTURE_SLOTS" });
                     })
                  ),
                     a(Ke(!0)),
                     a(ee());
               };
            },
            ct = function (e) {
               return function (t, a) {
                  var n = a(),
                     r = n.booking.arrival,
                     i = Object(He.d)(et(n), at(r))(e),
                     o = u()(r.date),
                     c = u()(i.date),
                     s = r.site !== i.site,
                     l = !o.isSame(c);
                  (s || l) && (i.tripDetail = {}),
                     t(rt(i)),
                     t($e(r, i)),
                     t(Ke(!0)),
                     t(ee());
               };
            },
            st = {
               departure: {},
               arrival: {},
               isArrivalSlotAvailable: !1,
               isFetchingDepartureSlots: !1,
               isFetchingArrivalSlots: !1,
            },
            lt = function (e) {
               var t = Object(s.a)({}, e.booking);
               return { departure: t.departure, arrival: t.arrival };
            },
            ut = {},
            dt = function (e) {
               return e.cart.options;
            },
            pt = function (e) {
               return e.cart.summary;
            },
            mt = function (e) {
               return e.cart.voucher;
            },
            ft = function (e) {
               return e.cart.business;
            },
            vt = function (e) {
               return e.cart.worker;
            },
            bt = function (e) {
               return e.cart.error;
            };
         function gt(e, t) {
            var a = e.find(function (e) {
               return e.id.toString() === t;
            });
            return a ? a.name : "";
         }
         function ht(e, t) {
            var a = function (e) {
                  return e.date ? u()(e.date).format("DDMMYYYY") : "";
               },
               n = function (e) {
                  return e.hour ? u()(e.hour, "HH:mm").format("HHmm") : "";
               };
            return {
               start_place_label: gt(e, t.departure.site),
               start_date: a(t.departure),
               start_timeslot: n(t.departure),
               end_place_label: gt(e, t.arrival.site),
               end_date: a(t.arrival),
               end_timeslot: n(t.arrival),
            };
         }
         function Et(e, t) {
            var a = t.option,
               n = t.previous,
               r = (function (t) {
                  var a = e.getState();
                  return xe(a, t);
               })(a);
            r &&
               !n &&
               (d("addToCart", {
                  ecommerce: {
                     currencyCode: "EUR",
                     add: {
                        products: [
                           { name: r.label, price: r.price, quantity: 1 },
                        ],
                     },
                  },
               }),
               r.isInsurance
                  ? (function (e) {
                       d("add_cancel_option", { name: e.label });
                    })(r)
                  : (function (e) {
                       d("add_service_to_cart", {
                          currency: "EUR",
                          value: e.price,
                          name: e.label,
                       });
                    })(r));
         }
         function Ot(e, t) {
            switch (t.type) {
               case ke:
                  Et(e, t);
                  break;
               case Se:
               case je:
                  !(function (e) {
                     var t = e.getState(),
                        a = We(t),
                        n = lt(t),
                        r = pt(t);
                     if (r) {
                        var i = ht(a, n);
                        d(
                           "bookingForm",
                           Object(s.a)(
                              Object(s.a)({}, i),
                              {},
                              { nb_days_reservation: r.durationInDays }
                           )
                        );
                     }
                  })(e);
            }
         }
         function Ct(e) {
            d("newsletter_subscription", { lang: O(), from: e });
         }
         var yt,
            kt = a(0),
            St = a.n(kt),
            jt = a(21),
            _t = a.n(jt),
            wt = a(4),
            Lt = a(26);
         function Tt() {
            return (Tt =
               Object.assign ||
               function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                     var a = arguments[t];
                     for (var n in a)
                        Object.prototype.hasOwnProperty.call(a, n) &&
                           (e[n] = a[n]);
                  }
                  return e;
               }).apply(this, arguments);
         }
         function Nt(e, t) {
            if (null == e) return {};
            var a,
               n,
               r = (function (e, t) {
                  if (null == e) return {};
                  var a,
                     n,
                     r = {},
                     i = Object.keys(e);
                  for (n = 0; n < i.length; n++)
                     (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                  return r;
               })(e, t);
            if (Object.getOwnPropertySymbols) {
               var i = Object.getOwnPropertySymbols(e);
               for (n = 0; n < i.length; n++)
                  (a = i[n]),
                     t.indexOf(a) >= 0 ||
                        (Object.prototype.propertyIsEnumerable.call(e, a) &&
                           (r[a] = e[a]));
            }
            return r;
         }
         var Dt = function (e) {
               var t = e.svgRef,
                  a = Nt(e, ["svgRef"]);
               return St.a.createElement(
                  "svg",
                  Tt(
                     {
                        width: 17,
                        height: 16,
                        viewBox: "0 0 17 16",
                        fill: "none",
                        ref: t,
                     },
                     a
                  ),
                  yt ||
                     (yt = St.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.56184 0L6.54323 5.98351L0.230957 6.1703L5.29801 9.93924L3.52493 16L8.67526 12.3457L13.8915 15.9049L12.0073 9.8775L17.0044 6.01631L10.6898 5.9456L8.56184 0Z",
                        fill: "#2CD5C4",
                     }))
               );
            },
            At = St.a.forwardRef(function (e, t) {
               return St.a.createElement(Dt, Tt({ svgRef: t }, e));
            }),
            It =
               (a.p,
               function (e) {
                  var t = e.rating,
                     a = Math.round(t);
                  return St.a.createElement(
                     "div",
                     { className: "starsContainer" },
                     Object(Lt.a)(Array(5)).map(function (e, t) {
                        var n = t + 1 > a;
                        return St.a.createElement(At, {
                           className: "star ".concat(n ? "unfilled" : ""),
                           key: t,
                        });
                     })
                  );
               });
         function Mt() {
            var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                     ? arguments[0]
                     : "fr",
               t =
                  "en" === e
                     ? "trustpilot.com"
                     : "".concat(e, ".trustpilot.com");
            return [
               {
                  name: "Google",
                  rate: 4.6,
                  reviewAmount: 2900,
                  link: "https://g.co/kgs/cB2dRL",
               },
               {
                  name: "Trustpilot",
                  rate: 4.5,
                  reviewAmount: 2400,
                  link: "https://".concat(t, "/review/bluevalet.fr"),
               },
            ];
         }
         var Ft = Object(wt.d)()(function (e) {
               var t = e.t,
                  a = Mt(e.i18n.language);
               return St.a.createElement(
                  "div",
                  { className: "reviewsContainer" },
                  a.map(function (e, a) {
                     return St.a.createElement(
                        "a",
                        { key: a, target: "blank", href: e.link },
                        St.a.createElement(
                           "div",
                           { className: "review" },
                           St.a.createElement(
                              "div",
                              { className: "ratingContainer" },
                              St.a.createElement(
                                 "p",
                                 { className: "rateAmount" },
                                 e.rate
                              ),
                              St.a.createElement(It, { rating: e.rate })
                           ),
                           St.a.createElement(
                              "p",
                              { className: "totalReviews" },
                              "+",
                              e.reviewAmount,
                              " ",
                              t("reviews"),
                              " ",
                              St.a.createElement("span", null, e.name)
                           )
                        )
                     );
                  })
               );
            }),
            Rt = a(32),
            xt = a.n(Rt),
            Ht = a(49),
            Pt = a(174),
            Bt = a.n(Pt),
            Yt = function () {
               Bt.a.get("confirm") || c()(".cookies").addClass("show"),
                  c()(".cookies .close").bind("click", function (e) {
                     e.preventDefault(),
                        c()(".cookies").removeClass("show"),
                        Bt.a.set("confirm", "true", { expires: 360 });
                  });
            },
            Ut =
               (a(528),
               function () {
                  (c.a.fn.datepicker.languages["fr-FR"] = {
                     format: "dd/mm/yyyy",
                     days: [
                        "Dimanche",
                        "Lundi",
                        "Mardi",
                        "Mercredi",
                        "Jeudi",
                        "Vendredi",
                        "Samedi",
                     ],
                     daysShort: [
                        "Dim",
                        "Lun",
                        "Mar",
                        "Mer",
                        "Jeu",
                        "Ven",
                        "Sam",
                     ],
                     daysMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
                     months: [
                        "Janvier",
                        "F\xe9vrier",
                        "Mars",
                        "Avril",
                        "Mai",
                        "Juin",
                        "Juillet",
                        "Ao\xfbt",
                        "Septembre",
                        "Octobre",
                        "Novembre",
                        "D\xe9cembre",
                     ],
                     monthsShort: [
                        "Jan",
                        "Fev",
                        "Mar",
                        "Avr",
                        "Mai",
                        "Jun",
                        "Jui",
                        "Ao\xfb",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                     ],
                  }),
                     (c.a.fn.datepicker.languages["es-ES"] = {
                        format: "dd/mm/yyyy",
                        days: [
                           "Domingo",
                           "Lunes",
                           "Martes",
                           "Mi\xe9rcoles",
                           "Jueves",
                           "Viernes",
                           "S\xe1bado",
                        ],
                        daysShort: [
                           "Dom",
                           "Lun",
                           "Mar",
                           "Mie",
                           "Jue",
                           "Vie",
                           "Sab",
                        ],
                        daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
                        months: [
                           "Enero",
                           "Febrero",
                           "Marzo",
                           "Abril",
                           "Mayo",
                           "Junio",
                           "Julio",
                           "Agosto",
                           "Septiembre",
                           "Octubre",
                           "Noviembre",
                           "Diciembre",
                        ],
                        monthsShort: [
                           "Ene",
                           "Feb",
                           "Mar",
                           "Abr",
                           "May",
                           "Jun",
                           "Jul",
                           "Ago",
                           "Sep",
                           "Oct",
                           "Nov",
                           "Dic",
                        ],
                     }),
                     (c.a.fn.datepicker.languages["it-IT"] = {
                        format: "dd/mm/yyyy",
                        days: [
                           "Domenica",
                           "Luned\xec",
                           "Marted\xec",
                           "Mercoled\xec",
                           "Gioved\xec",
                           "Venerd\xec",
                           "Sabato",
                        ],
                        daysShort: [
                           "Dom",
                           "Lun",
                           "Mar",
                           "Mer",
                           "Gio",
                           "Ven",
                           "Sab",
                        ],
                        daysMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
                        months: [
                           "Gennaio",
                           "Febbraio",
                           "Marzo",
                           "Aprile",
                           "Maggio",
                           "Giugno",
                           "Luglio",
                           "Agosto",
                           "Settembre",
                           "Ottobre",
                           "Novembre",
                           "Dicembre",
                        ],
                        monthsShort: [
                           "Gen",
                           "Feb",
                           "Mar",
                           "Apr",
                           "Mag",
                           "Giu",
                           "Lug",
                           "Ago",
                           "Set",
                           "Ott",
                           "Nov",
                           "Dic",
                        ],
                     }),
                     (c.a.fn.datepicker.languages["nl-NL"] = {
                        format: "dd/mm/yyyy",
                        days: [
                           "Zondag",
                           "Maandag",
                           "Dinsdag",
                           "Woensdag",
                           "Donderdag",
                           "Vrijdag",
                           "Zaterdag",
                        ],
                        daysShort: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
                        daysMin: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
                        months: [
                           "Januari",
                           "Februari",
                           "Maart",
                           "April",
                           "Mei",
                           "Juni",
                           "Juli",
                           "Augustus",
                           "September",
                           "Oktober",
                           "November",
                           "December",
                        ],
                        monthsShort: [
                           "Jan",
                           "Feb",
                           "Mar",
                           "Apr",
                           "Mei",
                           "Jun",
                           "Jul",
                           "Aug",
                           "Sep",
                           "Okt",
                           "Nov",
                           "Dec",
                        ],
                     }),
                     (c.a.fn.datepicker.languages["pt-BR"] = {
                        format: "dd/mm/yyyy",
                        days: [
                           "Domingo",
                           "Segunda",
                           "Ter\xe7a",
                           "Quarta",
                           "Quinta",
                           "Sexta",
                           "S\xe1bado",
                        ],
                        daysShort: [
                           "Dom",
                           "Seg",
                           "Ter",
                           "Qua",
                           "Qui",
                           "Sex",
                           "S\xe1b",
                        ],
                        daysMin: ["D", "S", "T", "Q", "Q", "S", "S"],
                        months: [
                           "Janeiro",
                           "Fevereiro",
                           "Mar\xe7o",
                           "Abril",
                           "Maio",
                           "Junho",
                           "Julho",
                           "Agosto",
                           "Setembro",
                           "Outubro",
                           "Novembro",
                           "Dezembro",
                        ],
                        monthsShort: [
                           "Jan",
                           "Fev",
                           "Mar",
                           "Abr",
                           "Mai",
                           "Jun",
                           "Jul",
                           "Ago",
                           "Set",
                           "Out",
                           "Nov",
                           "Dez",
                        ],
                     });
               }),
            Vt = function () {
               c()('form input[type="checkbox"]').on("change", function (e) {
                  var t = c()(e.currentTarget);
                  e.currentTarget.checked ? t.val("true") : t.val("false");
               });
            },
            Zt = function () {
               !(function () {
                  if (
                     (c()("form .field input.error").on(
                        "change keyup",
                        function (e) {
                           var t = c()(e.target),
                              a = e.target.value;
                           a && a.length && t.removeClass("error");
                        }
                     ),
                     /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                        !window.MSStream)
                  ) {
                     var e = c()(document).scrollTop();
                     c()(document).scroll(function () {
                        e = c()(void 0).scrollTop();
                     }),
                        c()(".form.login input").focus(function (t) {
                           t.preventDefault(), c()(document).scrollTop(e);
                        });
                  }
               })(),
                  c()("form").submit(function () {
                     return (
                        c()(void 0).submit(function () {
                           return !1;
                        }),
                        !0
                     );
                  });
            },
            Gt = function () {
               var e = document.querySelector("header"),
                  t = document.querySelector("nav"),
                  a = document.getElementById("hamburger");
               e &&
                  t &&
                  a &&
                  (a.addEventListener("click", function (a) {
                     a.stopPropagation(),
                        c()(e).toggleClass("nav-open"),
                        c()(t).toggleClass("show");
                  }),
                  c()("#Header nav > ul > li.with-arrow > a").click(function (
                     e
                  ) {
                     c()(window).width() < 960 &&
                        (e.stopPropagation(),
                        e.preventDefault(),
                        c()(e.currentTarget).next().toggleClass("show"));
                  }),
                  c()("#Header nav > ul").click(function (e) {
                     e.stopPropagation();
                  }),
                  c()(window).click(function () {
                     c()(t).hasClass("show") && c()(t).removeClass("show");
                  }));
            };
         function zt(e) {
            var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                     ? arguments[1]
                     : "slow",
               a = e;
            a instanceof HTMLElement && (a = c()(a)),
               a.length > 0 &&
                  c()("html, body").animate(
                     {
                        scrollTop: a.offset().top - c()("#Header").height() - 5,
                     },
                     t
                  );
         }
         var Kt = function () {
               !(function () {
                  var e = window.location.hash;
                  if (e && e.length && "#ValidateForm" !== e)
                     try {
                        var t = c()("".concat(e));
                        setTimeout(function () {
                           return zt(t, 0);
                        }, 100);
                     } catch (a) {}
               })(),
                  c()('a[href^="#"]:not([href="#"])').click(function (e) {
                     var t = c()(e.currentTarget).attr("href");
                     return zt(c()(t)), !1;
                  });
            },
            Jt =
               (a(132),
               function () {
                  var e = c()("#SponsorshipModal"),
                     t = c()("#ScrollableMenu");
                  e &&
                     e.length &&
                     (e.find(".js-close-popup").on("click", function () {
                        return c.a.magnificPopup.close();
                     }),
                     c.a.magnificPopup.open({
                        items: { src: e },
                        callbacks: {
                           open: function () {
                              t.css("top", "0px");
                           },
                           close: function () {
                              t.css("top", "");
                           },
                        },
                     }));
               }),
            Wt = a(259),
            qt = a.n(Wt),
            Qt = function () {
               new qt.a({
                  daysHidden: 15,
                  daysReminder: 90,
                  title: "Bluevalet",
                  author: "Bluevalet",
                  button: "T\xe9l\xe9charger",
                  store: { ios: "l'App Store", android: " Google Play" },
                  price: { ios: "Gratuit", android: "Gratuit" },
                  theme: "ios",
               });
            },
            Xt = ["#contact-object", "#contact-site"],
            $t = function (e) {
               "" === e.val() ? e.addClass("empty") : e.removeClass("empty");
            },
            ea = function () {
               Xt.map(function (e) {
                  return c()(e);
               }).forEach(function (e) {
                  e &&
                     ($t(e),
                     e.change(function () {
                        $t(c()(void 0));
                     }));
               });
            },
            ta = a(260),
            aa = a.n(ta),
            na = a(261),
            ra = a.n(na),
            ia = function () {
               switch (B()) {
                  case "fr":
                     return "FR";
                  case "es":
                     return "ES";
                  case "nl":
                     return "BE";
                  case "pt":
                     return "PT";
                  default:
                     return "auto";
               }
            },
            oa = function (e, t, a, n, r) {
               var i = e.isValidNumber();
               return (
                  !r || i ? a.val(e.getNumber()) : a.val(t.val()),
                  i && t.val(e.getNumber(2)),
                  n.val(i || r ? "true" : "false"),
                  i
               );
            },
            ca = function () {
               c()(".intl-phoneNumber").each(function (e, t) {
                  !(function (e) {
                     if (e) {
                        var t = c()(e),
                           a = aa()(t[0], {
                              initialCountry: ia(),
                              preferredCountries: [
                                 "FR",
                                 "ES",
                                 "BE",
                                 "PT",
                                 "GB",
                                 "DE",
                              ],
                              utilsScript: ra.a,
                              separateDialCode: !0,
                              autoPlaceholder: "aggressive",
                           }),
                           n = t.attr("name");
                        t.removeAttr("name");
                        var r = t
                              .clone()
                              .attr("name", n)
                              .attr("type", "hidden")
                              .removeAttr("id")
                              .removeAttr("class")
                              .insertAfter(t),
                           i = c()(
                              '<input type="hidden" name="'.concat(
                                 n,
                                 '-valid"/>'
                              )
                           ).insertAfter(r),
                           o = (function () {
                              var e = t.attr("data-initial-value");
                              return null != e && e.length > 0
                                 ? "true" === e
                                 : t.val().length > 0;
                           })();
                        oa(a, t, r, i, o),
                           t.on("blur", function () {
                              return oa(a, t, r, i, !1);
                           });
                     }
                  })(t);
               });
            },
            sa = a(14),
            la = a.n(sa);
         function ua(e) {
            var t = e.review;
            return St.a.createElement(
               "div",
               { className: "review" },
               St.a.createElement(
                  "div",
                  { className: "header" },
                  St.a.createElement(
                     "div",
                     { className: "authorWithRating" },
                     St.a.createElement(
                        "div",
                        { className: "review-rating" },
                        St.a.createElement(It, { rating: t.score })
                     ),
                     St.a.createElement(
                        "p",
                        { className: "author" },
                        t.customerAnonymous || t.author
                     )
                  ),
                  St.a.createElement("p", { className: "date" }, t.date)
               ),
               St.a.createElement(
                  "p",
                  { className: "content" },
                  "\xab ",
                  t.content,
                  " \xbb"
               )
            );
         }
         function da(e) {
            var t = e.siteCode,
               a = Object(wt.c)().t,
               n = function (e) {
                  return a(
                     "lp-parking-".concat(t, "-reviews-").concat(e, "-content")
                  );
               };
            return St.a.createElement(
               "div",
               { className: "customerReviewsContainer" },
               [1, 2, 3].map(function (e) {
                  return St.a.createElement(ua, {
                     review: {
                        author:
                           ((r = e),
                           a(
                              "lp-parking-"
                                 .concat(t, "-reviews-")
                                 .concat(r, "-name")
                           )),
                        content: n(e),
                        reviewScore: 5,
                     },
                  });
                  var r;
               })
            );
         }
         function pa() {
            var e = document.getElementById("ReviewsRoot");
            if (e) {
               var t = e.getAttribute("data-site-code");
               _t.a.render(
                  St.a.createElement(
                     St.a.Suspense,
                     { fallback: St.a.createElement("div", null) },
                     St.a.createElement(
                        wt.a,
                        { i18n: C },
                        St.a.createElement(da, { siteCode: t })
                     )
                  ),
                  e
               );
            }
         }
         var ma = a(262),
            fa = a.n(ma),
            va = a(263),
            ba = a.n(va),
            ga = a(90),
            ha = a.n(ga);
         var Ea,
            Oa,
            Ca = Object(wt.d)()(function (e) {
               var t = e.t,
                  a = e.siteCode,
                  n = [
                     {
                        title: t("landing-bubble_info_price_title"),
                        icon: ba.a,
                        content: t(
                           "landing-bubble_info_".concat(a, "_price_content")
                        ),
                     },
                     {
                        title: t("landing-bubble_info_location_title"),
                        icon: fa.a,
                        content: t(
                           "landing-bubble_info_".concat(a, "_location_content")
                        ),
                     },
                     {
                        title: t("landing-bubble_info_openingTime_title"),
                        icon: ha.a,
                        content: t(
                           "landing-bubble_info_".concat(
                              a,
                              "_openingTime_content"
                           )
                        ),
                     },
                  ];
               return St.a.createElement(
                  "div",
                  { className: "boxsInfos" },
                  n.map(function (e) {
                     var t = e.icon;
                     return St.a.createElement(
                        "div",
                        { key: e.title, className: "box" },
                        St.a.createElement(t, null),
                        St.a.createElement(
                           "div",
                           { className: "text-container" },
                           St.a.createElement(
                              "p",
                              { className: "title" },
                              e.title
                           ),
                           St.a.createElement("p", null, e.content)
                        )
                     );
                  })
               );
            }),
            ya = function () {
               var e = document.getElementById("LandingSiteInfoRoot");
               if (e) {
                  var t = e.getAttribute("data-site-code");
                  _t.a.render(
                     St.a.createElement(
                        St.a.Suspense,
                        {
                           fallback: St.a.createElement("div", {
                              className: "fallback",
                           }),
                        },
                        St.a.createElement(
                           wt.a,
                           { i18n: C },
                           St.a.createElement(Ca, { siteCode: t })
                        )
                     ),
                     e
                  );
               }
            },
            ka = a(7);
         function Sa() {
            return (Sa =
               Object.assign ||
               function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                     var a = arguments[t];
                     for (var n in a)
                        Object.prototype.hasOwnProperty.call(a, n) &&
                           (e[n] = a[n]);
                  }
                  return e;
               }).apply(this, arguments);
         }
         function ja(e, t) {
            if (null == e) return {};
            var a,
               n,
               r = (function (e, t) {
                  if (null == e) return {};
                  var a,
                     n,
                     r = {},
                     i = Object.keys(e);
                  for (n = 0; n < i.length; n++)
                     (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                  return r;
               })(e, t);
            if (Object.getOwnPropertySymbols) {
               var i = Object.getOwnPropertySymbols(e);
               for (n = 0; n < i.length; n++)
                  (a = i[n]),
                     t.indexOf(a) >= 0 ||
                        (Object.prototype.propertyIsEnumerable.call(e, a) &&
                           (r[a] = e[a]));
            }
            return r;
         }
         var _a,
            wa,
            La,
            Ta = function (e) {
               var t = e.svgRef,
                  a = ja(e, ["svgRef"]);
               return St.a.createElement(
                  "svg",
                  Sa(
                     {
                        width: "33px",
                        height: "35px",
                        viewBox: "0 0 33 35",
                        ref: t,
                     },
                     a
                  ),
                  Ea || (Ea = St.a.createElement("title", null, "Path")),
                  Oa ||
                     (Oa = St.a.createElement(
                        "g",
                        {
                           id: "Symbols",
                           stroke: "none",
                           strokeWidth: 1,
                           fill: "none",
                           fillRule: "evenodd",
                        },
                        St.a.createElement(
                           "g",
                           {
                              id: "Icons/Simple/Flight",
                              transform: "translate(-7.000000, -7.000000)",
                              fill: "#000000",
                              fillRule: "nonzero",
                           },
                           St.a.createElement(
                              "g",
                              {
                                 id: "flight_black_24dp",
                                 transform: "translate(7.000000, 7.000000)",
                              },
                              St.a.createElement("path", {
                                 d: "M33,24.5 L33,21 L19.1052632,12.25 L19.1052632,2.625 C19.1052632,1.1725 17.9415789,0 16.5,0 C15.0584211,0 13.8947368,1.1725 13.8947368,2.625 L13.8947368,12.25 L0,21 L0,24.5 L13.8947368,20.125 L13.8947368,29.75 L10.4210526,32.375 L10.4210526,35 L16.5,33.25 L22.5789474,35 L22.5789474,32.375 L19.1052632,29.75 L19.1052632,20.125 L33,24.5 Z",
                                 id: "Path",
                              })
                           )
                        )
                     ))
               );
            },
            Na = St.a.forwardRef(function (e, t) {
               return St.a.createElement(Ta, Sa({ svgRef: t }, e));
            });
         a.p;
         function Da() {
            return (Da =
               Object.assign ||
               function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                     var a = arguments[t];
                     for (var n in a)
                        Object.prototype.hasOwnProperty.call(a, n) &&
                           (e[n] = a[n]);
                  }
                  return e;
               }).apply(this, arguments);
         }
         function Aa(e, t) {
            if (null == e) return {};
            var a,
               n,
               r = (function (e, t) {
                  if (null == e) return {};
                  var a,
                     n,
                     r = {},
                     i = Object.keys(e);
                  for (n = 0; n < i.length; n++)
                     (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                  return r;
               })(e, t);
            if (Object.getOwnPropertySymbols) {
               var i = Object.getOwnPropertySymbols(e);
               for (n = 0; n < i.length; n++)
                  (a = i[n]),
                     t.indexOf(a) >= 0 ||
                        (Object.prototype.propertyIsEnumerable.call(e, a) &&
                           (r[a] = e[a]));
            }
            return r;
         }
         var Ia = function (e) {
               var t = e.svgRef,
                  a = Aa(e, ["svgRef"]);
               return St.a.createElement(
                  "svg",
                  Da(
                     {
                        width: "29px",
                        height: "34px",
                        viewBox: "0 0 29 34",
                        ref: t,
                     },
                     a
                  ),
                  _a || (_a = St.a.createElement("title", null, "Group 7")),
                  wa ||
                     (wa = St.a.createElement(
                        "defs",
                        null,
                        St.a.createElement("polygon", {
                           id: "path-1",
                           points: "0 34 29 34 29 0 0 0",
                        })
                     )),
                  La ||
                     (La = St.a.createElement(
                        "g",
                        {
                           id: "Symbols",
                           stroke: "none",
                           strokeWidth: 1,
                           fill: "none",
                           fillRule: "evenodd",
                        },
                        St.a.createElement(
                           "g",
                           {
                              id: "Icons/Simple/Train",
                              transform: "translate(-9.000000, -7.000000)",
                           },
                           St.a.createElement(
                              "g",
                              {
                                 id: "Group-7",
                                 transform: "translate(9.000000, 7.000000)",
                              },
                              St.a.createElement("path", {
                                 d: "M8.5,20 C9.881,20 11,21.119 11,22.5 C11,23.881 9.881,25 8.5,25 C7.119,25 6,23.881 6,22.5 C6,21.119 7.119,20 8.5,20",
                                 id: "Fill-1",
                                 fill: "#000000",
                              }),
                              St.a.createElement("path", {
                                 d: "M20.5,20 C21.881,20 23,21.119 23,22.5 C23,23.881 21.881,25 20.5,25 C19.119,25 18,23.881 18,22.5 C18,21.119 19.119,20 20.5,20",
                                 id: "Fill-3",
                                 fill: "#000000",
                              }),
                              St.a.createElement(
                                 "mask",
                                 { id: "mask-2", fill: "white" },
                                 St.a.createElement("use", {
                                    xlinkHref: "#path-1",
                                 })
                              ),
                              St.a.createElement("g", { id: "Clip-6" }),
                              St.a.createElement("path", {
                                 d: "M16.3122961,14.3163546 L25.3743203,14.3163546 L25.3743203,8.94799002 L16.3122961,8.94799002 L16.3122961,14.3163546 Z M25.3743203,24.1576404 C25.3743203,25.6436038 24.1606855,26.8418227 22.6556043,26.8418227 L6.34330821,26.8418227 C4.83931451,26.8418227 3.62459219,25.6436038 3.62459219,24.1576404 L3.62459219,17.8949064 L25.3743203,17.8949064 L25.3743203,24.1576404 Z M3.62459219,14.3163546 L12.6866164,14.3163546 L12.6866164,8.94799002 L3.62459219,8.94799002 L3.62459219,14.3163546 Z M14.4994563,3.57962548 C20.8612517,3.57962548 23.4897064,4.4385638 24.5956801,5.36836454 L4.40431995,5.36836454 C5.51029362,4.4385638 8.13766078,3.57962548 14.4994563,3.57962548 L14.4994563,3.57962548 Z M14.4994563,0 C7.25027187,0 0,0.895443206 0,7.15817728 L0,24.1576404 C0,27.6116462 2.84595193,30.4214482 6.34330821,30.4214482 L3.62459219,33.1056305 L3.62459219,34 L7.25027187,34 L10.8748641,30.4214482 L18.1251359,30.4214482 L21.7497281,34 L25.3743203,34 L25.3743203,33.1056305 L22.6556043,30.4214482 C26.1540481,30.4214482 29,27.6116462 29,24.1576404 L29,7.15817728 C29,0.895443206 21.7497281,0 14.4994563,0 L14.4994563,0 Z",
                                 id: "Fill-5",
                                 fill: "#000000",
                                 mask: "url(#mask-2)",
                              })
                           )
                        )
                     ))
               );
            },
            Ma = St.a.forwardRef(function (e, t) {
               return St.a.createElement(Ia, Da({ svgRef: t }, e));
            }),
            Fa = (a.p, a(264)),
            Ra = a.n(Fa),
            xa = a(265),
            Ha = a.n(xa),
            Pa = a(266),
            Ba = a.n(Pa),
            Ya = a(267),
            Ua = a.n(Ya),
            Va = a(268),
            Za = a.n(Va),
            Ga = a(269),
            za = a.n(Ga),
            Ka = a(270),
            Ja = a.n(Ka),
            Wa = a(271),
            qa = a.n(Wa),
            Qa = a(272),
            Xa = a.n(Qa),
            $a = a(273),
            en = a.n($a),
            tn = a(274),
            an = a.n(tn),
            nn = [
               {
                  siteKey: "BOD",
                  siteName: "Bordeaux M\xe9rignac",
                  rating: 4.7,
                  type: "airport",
                  img: { src: Ra.a, height: 450, width: 307 },
                  url: "bordeaux-airport",
               },
               {
                  siteKey: "BODG",
                  siteName: "Bordeaux Saint-Jean",
                  rating: 4.7,
                  type: "station",
                  img: { src: Ha.a, height: 450, width: 307 },
                  url: "bordeaux-station",
               },
               {
                  siteKey: "ORY",
                  siteName: "Paris Orly",
                  rating: 4.5,
                  type: "airport",
                  img: { src: en.a, height: 450, width: 307 },
                  url: "orly-airport",
               },
               {
                  siteKey: "CDG",
                  siteName: "Paris Charles de Gaulle",
                  rating: 4.8,
                  type: "airport",
                  img: { src: Xa.a, height: 450, width: 307 },
                  url: "roissy-airport",
               },
               {
                  siteKey: "LYS",
                  siteName: "Lyon Saint Exup\xe9ry",
                  rating: 4.7,
                  type: "airport",
                  img: { src: Ba.a, height: 450, width: 307 },
                  url: "lyon-airport",
               },
               {
                  siteKey: "LYSG",
                  siteName: "Lyon Saint Exup\xe9ry",
                  rating: 4.7,
                  type: "station",
                  img: { src: Ua.a, height: 450, width: 307 },
                  url: "lyon-station",
               },
               {
                  siteKey: "TLS",
                  siteName: "Toulouse Blagnac",
                  rating: 4.8,
                  type: "airport",
                  img: { src: an.a, height: 450, width: 307 },
                  url: "toulouse-airport",
               },
               {
                  siteKey: "MRS",
                  siteName: "Marseille Provence",
                  rating: 4.7,
                  type: "airport",
                  img: { src: Za.a, height: 450, width: 307 },
                  url: "marseille-airport",
               },
               {
                  siteKey: "AIX",
                  siteName: "Aix-en-Provence",
                  rating: 4.8,
                  type: "station",
                  img: { src: za.a, height: 450, width: 307 },
                  url: "aix-station",
               },
               {
                  siteKey: "NCE",
                  siteName: "Nice",
                  rating: 4.8,
                  type: "airport",
                  img: { src: qa.a, height: 450, width: 307 },
                  url: "nice-airport",
               },
               {
                  siteKey: "NTE",
                  siteName: "Nantes",
                  rating: 4.7,
                  type: "airport",
                  img: { src: Ja.a, height: 450, width: 307 },
                  url: "nantes-airport",
               },
            ];
         var rn = Object(wt.d)()(function (e) {
               var t = e.t,
                  a = e.i18n,
                  n = e.siteKey,
                  r = e.customClass,
                  i = void 0 === r ? "" : r,
                  o = e.withLink,
                  c = void 0 === o || o,
                  s = nn.find(function (e) {
                     return e.siteKey === n;
                  });
               if (s) {
                  var l = s.siteName,
                     u = s.type,
                     d = s.rating,
                     p = s.img,
                     m = s.url,
                     f = St.a.createElement(
                        St.a.Fragment,
                        null,
                        St.a.createElement("img", {
                           height: p.height,
                           width: p.width,
                           loading: "lazy",
                           className: "backgroundImage",
                           src: p.src,
                           alt: "".concat(l, " ").concat(u),
                        }),
                        St.a.createElement(
                           "div",
                           { className: "card" },
                           St.a.createElement(
                              "div",
                              { className: "iconContainer ".concat(u) },
                              "station" === u
                                 ? St.a.createElement(Ma, null)
                                 : St.a.createElement(Na, null)
                           ),
                           St.a.createElement(
                              "div",
                              { className: "itemsContainer" },
                              St.a.createElement(
                                 "div",
                                 { className: "ratingContainer" },
                                 St.a.createElement(
                                    "p",
                                    { className: "rateAmount" },
                                    "".concat(d, "/5")
                                 ),
                                 St.a.createElement(
                                    "div",
                                    { className: "starsContainer" },
                                    St.a.createElement(It, { rating: d })
                                 )
                              ),
                              St.a.createElement(
                                 "p",
                                 { className: "title" },
                                 St.a.createElement(wt.b, {
                                    i18nKey:
                                       "customer_reviews_lp_sites_".concat(u),
                                    values: { siteName: l },
                                 })
                              ),
                              c
                                 ? St.a.createElement(ka.Button, {
                                      withArrow: !0,
                                      label: t("book"),
                                      primary: !0,
                                      small: !0,
                                   })
                                 : St.a.createElement(St.a.Fragment, null)
                           )
                        )
                     );
                  return c
                     ? St.a.createElement(
                          "a",
                          {
                             className: "siteCard ".concat(i),
                             href: (function (e) {
                                return "/"
                                   .concat(a.language, "/landing/")
                                   .concat(e);
                             })(m),
                          },
                          f
                       )
                     : St.a.createElement(
                          "div",
                          { className: "siteCard ".concat(i) },
                          f
                       );
               }
            }),
            on = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            cn = function () {
               return window.innerWidth > 992;
            },
            sn = a(58),
            ln = a(179);
         a(547), a(548), a(549);
         var un = function (e) {
               var t = e.isLgUp,
                  a = Object(kt.useState)(0),
                  n = Object(P.a)(a, 2),
                  r = n[0],
                  i = n[1],
                  o = t() ? 4 : 1;
               return St.a.createElement(
                  ln.a,
                  {
                     slidesPerView: "auto",
                     spaceBetween: 20,
                     slidesPerGroup: o,
                     speed: 400,
                     navigation: !0,
                     pagination: { clickable: !0 },
                     watchSlidesProgress: !0,
                     modules: [sn.b, sn.a],
                     className: "mySwiper",
                     onSlideChange: function (e) {
                        return i(e.activeIndex);
                     },
                  },
                  St.a.createElement(
                     St.a.Fragment,
                     null,
                     nn.map(function (e, t) {
                        var a = e.siteKey,
                           n = t === (r % o === 0 ? r + o : r - 1);
                        return St.a.createElement(
                           ln.b,
                           { key: t },
                           St.a.createElement(rn, {
                              siteKey: a,
                              customClass: "redirectOnLp ".concat(
                                 n ? "nextGroupPreview" : ""
                              ),
                           })
                        );
                     })
                  )
               );
            },
            dn = function (e) {
               var t = document.getElementById(e);
               t &&
                  _t.a.render(
                     St.a.createElement(
                        St.a.Suspense,
                        { fallback: St.a.createElement("div", null) },
                        St.a.createElement(
                           wt.a,
                           { i18n: C },
                           St.a.createElement(un, { isLgUp: cn })
                        )
                     ),
                     t
                  );
            };
         function pn() {
            var e = document.getElementById("ExternalRatingsRoot");
            e &&
               _t.a.render(
                  St.a.createElement(
                     St.a.Suspense,
                     { fallback: St.a.createElement("div", null) },
                     St.a.createElement(
                        wt.a,
                        { i18n: C },
                        St.a.createElement(Ft, null)
                     )
                  ),
                  e
               );
         }
         var mn = function () {
               var e = c()(".homeSlider"),
                  t = e.height();
               function a() {
                  var a = c()(window).width(),
                     n = c()(window).height(),
                     r = c()("#Header").height() - 1,
                     i = n - r < t ? t : n - r;
                  e.height(i).width(a);
               }
               c()(window).width() > 480 && a(),
                  c()(window).resize(function () {
                     a();
                  });
            },
            fn = a(13),
            vn = function (e) {
               return function (t) {
                  return function (a) {
                     if ((t(a), "ESTIMATE_BOOKING_SUCCESS" === a.type)) {
                        var n = e.getState(),
                           r = We(n),
                           i = lt(n);
                        !(function (e, t, a) {
                           var n = ht(e, a);
                           d(
                              "bookingForm",
                              Object(s.a)(
                                 Object(s.a)({}, n),
                                 {},
                                 { nb_days_reservation: t.durationInDays }
                              )
                           ),
                              d("updatevirtualpath", {
                                 virtualDocumentPath: "/".concat(O(), "/popin"),
                                 virtualDocumentTitle: "Pop-In R\xe9servation",
                              }),
                              d("simulate_price", {
                                 currency: "EUR",
                                 value: t.total,
                                 departure_location: gt(e, a.departure.site),
                                 duration: t.durationInDays,
                              });
                        })(r, a.estimation, i);
                     }
                  };
               };
            },
            bn = a(275),
            gn = a(113),
            hn = a(276),
            En = a.n(hn);
         var On = {
               isFetching: !1,
               hasBeenSubmit: !1,
               displayFormValidationErrors: !1,
            },
            Cn = function (e) {
               return e.estimate.isFetching;
            },
            yn = function (e) {
               return e.estimate.displayFormValidationErrors;
            },
            kn = function (e) {
               return e.estimate.estimation;
            },
            Sn = { isFetching: !1, companies: [] },
            jn = function (e) {
               return e.business.companies;
            },
            _n = "FETCH_INFORMATIONS",
            wn = "FETCH_INFORMATIONS_SUCCESS",
            Ln = "FETCH_INFORMATIONS_ABORT",
            Tn = "SELECT_INFORMATIONS",
            Nn = "FORCE_INFORMATIONS",
            Dn = "TOGGLE_UNKNOWN_INFORMATIONS",
            An = "CLEAR_INFORMATIONS",
            In = function (e, t) {
               return { type: wn, prefix: e, results: t };
            },
            Mn = function (e, t, a, n, r) {
               return function (i) {
                  i({ type: _n, prefix: e, tripNumber: n });
                  var o = "start" === e ? "departure" : "arrival";
                  n &&
                     a &&
                     t &&
                     V.getTripInfos(o, t, a, n, r)
                        .then(function (t) {
                           i(In(e, [t]));
                        })
                        .catch(function (t) {
                           "AbortError" !== t.name && i(In(e, []));
                        });
               };
            },
            Fn = function (e, t) {
               return { type: Tn, prefix: e, details: t };
            },
            Rn = function (e) {
               return { type: Nn, prefix: e };
            },
            xn = function (e) {
               return { type: Dn, prefix: e };
            },
            Hn = function (e) {
               return { type: An, prefix: e };
            },
            Pn = {
               start: {
                  results: [],
                  isFetchingInformations: !1,
                  isValid: !1,
                  isForced: !1,
                  isUnknown: !1,
               },
               end: {
                  results: [],
                  isFetchingInformations: !1,
                  isValid: !1,
                  isForced: !1,
                  isUnknown: !1,
               },
            },
            Bn = Object(He.c)({
               booking: function () {
                  var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                           ? arguments[0]
                           : st,
                     t = arguments.length > 1 ? arguments[1] : void 0;
                  switch (t.type) {
                     case qe:
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           { departure: t.departure }
                        );
                     case "FETCH_DEPARTURE_SLOTS":
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           { isFetchingDepartureSlots: !0 }
                        );
                     case "CLEAR_DEPARTURE_SLOTS":
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           {
                              isFetchingDepartureSlots: !1,
                              departureSlots: void 0,
                           }
                        );
                     case "FETCH_DEPARTURE_SLOTS_SUCCESS":
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           {
                              departureSlots: t.slots,
                              isFetchingDepartureSlots: !1,
                           }
                        );
                     case Qe:
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           { arrival: t.arrival }
                        );
                     case "FETCH_ARRIVAL_SLOTS":
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           { isFetchingArrivalSlots: !0 }
                        );
                     case "CLEAR_ARRIVAL_SLOTS":
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           { isFetchingArrivalSlots: !1, arrivalSlots: void 0 }
                        );
                     case "FETCH_ARRIVAL_SLOTS_SUCCESS":
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           { arrivalSlots: t.slots, isFetchingArrivalSlots: !1 }
                        );
                     case "ARRIVAL_SLOT_AVAILABLE":
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           { isArrivalSlotAvailable: !0 }
                        );
                     case "ARRIVAL_SLOT_UNAVAILABLE":
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           { isArrivalSlotAvailable: !1 }
                        );
                     default:
                        return e;
                  }
               },
               sites: function () {
                  var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                           ? arguments[0]
                           : Je,
                     t = arguments.length > 1 ? arguments[1] : void 0;
                  switch (t.type) {
                     case Pe:
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           { isFetchingSites: !0 }
                        );
                     case Be:
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           {
                              sites: t.sites,
                              switches: t.switches,
                              arrivalSites: t.sites,
                              isFetchingSites: !1,
                           }
                        );
                     case Ye:
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           { arrivalSites: t.sites }
                        );
                     default:
                        return e;
                  }
               },
               estimate: function () {
                  var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                           ? arguments[0]
                           : On,
                     t = arguments.length > 1 ? arguments[1] : void 0;
                  switch (t.type) {
                     case "SUBMIT_ESTIMATE":
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           { hasBeenSubmit: !0 }
                        );
                     case "DISPLAY_FORM_VALIDATION_ERRORS":
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           {
                              displayFormValidationErrors: t.value,
                              estimation: t.value ? void 0 : e.estimation,
                           }
                        );
                     case "ESTIMATE_BOOKING":
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           { isFetching: !0 }
                        );
                     case "ESTIMATE_BOOKING_SUCCESS":
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           { estimation: t.estimation, isFetching: !1 }
                        );
                     case "ESTIMATE_BOOKING_FAILURE":
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           { esimation: void 0, isFetching: !1 }
                        );
                     default:
                        return e;
                  }
               },
               services: function () {
                  var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                           ? arguments[0]
                           : Fe,
                     t = arguments.length > 1 ? arguments[1] : void 0;
                  switch (t.type) {
                     case "FETCH_SERVICES":
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           { isFetching: !0 }
                        );
                     case "FETCH_SERVICES_SUCCESS":
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           { isFetching: !1, services: t.services }
                        );
                     default:
                        return e;
                  }
               },
               cart: function () {
                  var e,
                     t =
                        arguments.length > 0 && void 0 !== arguments[0]
                           ? arguments[0]
                           : ut,
                     a = arguments.length > 1 ? arguments[1] : void 0;
                  switch (a.type) {
                     case ke:
                        var n = t.options
                           ? (e = t.options).has(a.option)
                              ? e.delete(a.option)
                              : e.add(a.option)
                           : (function () {
                                var e = t.summary
                                      ? t.summary.services
                                           .map(function (e) {
                                              return e.id;
                                           })
                                           .filter(function (e) {
                                              return (
                                                 !a.previous || e !== a.option
                                              );
                                           })
                                      : [],
                                   n = oe.Set(e);
                                return a.previous ? n : n.add(a.option);
                             })();
                        return Object(s.a)(
                           Object(s.a)({}, t),
                           {},
                           { options: n }
                        );
                     case "REMOVE_OPTION":
                        var r = t.options;
                        return r
                           ? Object(s.a)(
                                Object(s.a)({}, t),
                                {},
                                { options: r.delete(a.option) }
                             )
                           : t;
                     case "CLEAR_OPTIONS":
                        return Object(s.a)(
                           Object(s.a)({}, t),
                           {},
                           { options: void 0 }
                        );
                     case "UPDATE_VOUCHER":
                        return Object(s.a)(
                           Object(s.a)({}, t),
                           {},
                           { voucher: a.voucher }
                        );
                     case "UPDATE_BUSINESS":
                        return Object(s.a)(
                           Object(s.a)({}, t),
                           {},
                           { business: a.business }
                        );
                     case je:
                     case Se:
                        return Object(s.a)(
                           Object(s.a)({}, t),
                           {},
                           { summary: a.summary, error: void 0 }
                        );
                     case "CART_PERSIST_ERROR":
                     case "FETCH_SUMMARY_FAILURE":
                        return Object(s.a)(
                           Object(s.a)({}, t),
                           {},
                           { summary: void 0, error: a.error.displayMessage }
                        );
                     default:
                        return t;
                  }
               },
               business: function () {
                  var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                           ? arguments[0]
                           : Sn,
                     t = arguments.length > 1 ? arguments[1] : void 0;
                  switch (t.type) {
                     case "FETCH_COMPANIES":
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           { isFetching: !0 }
                        );
                     case "FETCH_COMPANIES_SUCCES":
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           { isFetching: !1, companies: t.companies }
                        );
                     default:
                        return e;
                  }
               },
               config: function () {
                  return arguments.length > 0 && void 0 !== arguments[0]
                     ? arguments[0]
                     : J;
               },
               trip: function () {
                  var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                           ? arguments[0]
                           : Pn,
                     t = arguments.length > 1 ? arguments[1] : void 0,
                     a = t.prefix;
                  switch (t.type) {
                     case _n:
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           Object(ce.a)(
                              {},
                              a,
                              Object(s.a)(
                                 Object(s.a)({}, e[a]),
                                 {},
                                 {
                                    isValid: !1,
                                    isForced: !1,
                                    isUnknown: !1,
                                    isFetchingInformations: !0,
                                 }
                              )
                           )
                        );
                     case wn:
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           Object(ce.a)(
                              {},
                              a,
                              Object(s.a)(
                                 Object(s.a)({}, e[a]),
                                 {},
                                 {
                                    isFetchingInformations: !1,
                                    results: t.results,
                                 }
                              )
                           )
                        );
                     case Tn:
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           Object(ce.a)(
                              {},
                              a,
                              Object(s.a)(
                                 Object(s.a)({}, e[a]),
                                 {},
                                 { isValid: !0, isForced: !1, isUnknown: !1 }
                              )
                           )
                        );
                     case Nn:
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           Object(ce.a)(
                              {},
                              a,
                              Object(s.a)(
                                 Object(s.a)({}, e[a]),
                                 {},
                                 { isValid: !1, isUnknown: !1, isForced: !0 }
                              )
                           )
                        );
                     case Dn:
                        var n = e[a].isUnknown;
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           Object(ce.a)(
                              {},
                              a,
                              Object(s.a)(
                                 Object(s.a)({}, e[a]),
                                 {},
                                 {
                                    results: [],
                                    isValid: !1,
                                    isForced: !1,
                                    isUnknown: !n,
                                 }
                              )
                           )
                        );
                     case An:
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           Object(ce.a)({}, a, Object(s.a)({}, Pn[a]))
                        );
                     case Xe:
                        return Object(s.a)(
                           Object(s.a)({}, e),
                           {},
                           {
                              end: Object(s.a)(
                                 Object(s.a)({}, e.end),
                                 {},
                                 { isValid: !1 }
                              ),
                           }
                        );
                     default:
                        return e;
                  }
               },
            }),
            Yn = Object(gn.a)(
               function (e) {
                  return Object(s.a)({}, e);
               },
               function (e) {
                  var t = e.departure.date && new Date(e.departure.date),
                     a = e.arrival.date && new Date(e.arrival.date);
                  return Object(s.a)(
                     Object(s.a)({}, e),
                     {},
                     {
                        departure: Object(s.a)(
                           Object(s.a)({}, e.departure),
                           {},
                           { date: t }
                        ),
                        arrival: Object(s.a)(
                           Object(s.a)({}, e.arrival),
                           {},
                           { date: a }
                        ),
                     }
                  );
               },
               { whitelist: ["booking"] }
            ),
            Un = Object(gn.a)(
               function (e) {
                  return Object(s.a)(
                     Object(s.a)({}, e),
                     {},
                     { options: e.options && e.options.toArray() }
                  );
               },
               function (e) {
                  return Object(s.a)(
                     Object(s.a)({}, e),
                     {},
                     { options: oe.Set(e.options) }
                  );
               },
               { whitelist: ["cart"] }
            ),
            Vn = {
               key: "root",
               storage: En.a,
               stateReconciler: function (e, t, a, n) {
                  n.debug;
                  var r = Object(s.a)({}, a);
                  return (
                     e &&
                        "object" === typeof e &&
                        Object.keys(e).forEach(function (n) {
                           if ("_persist" !== n) {
                              if (
                                 (t[n],
                                 a[n],
                                 null !== (i = a[n]) &&
                                    !Array.isArray(i) &&
                                    "object" === typeof i)
                              )
                                 return "cart" === n
                                    ? void (r[n] = Object(s.a)(
                                         Object(s.a)({}, r[n]),
                                         t[n]
                                      ))
                                    : void (r[n] = Object(s.a)(
                                         Object(s.a)({}, r[n]),
                                         e[n]
                                      ));
                              var i;
                              r[n] = e[n];
                           }
                        }),
                     r
                  );
               },
               whitelist: ["booking", "cart"],
               transforms: [Yn, Un],
            },
            Zn = Object(gn.b)(Vn, Bn),
            Gn = function (e) {
               var t =
                     arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : void 0,
                  a =
                     arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [],
                  n = [bn.a].concat(Object(Lt.a)(a)),
                  r = [He.a.apply(void 0, Object(Lt.a)(n))],
                  i = Object(s.a)(
                     Object(s.a)({}, t),
                     {},
                     { config: { mode: e } }
                  ),
                  o = He.d,
                  c = Object(He.e)(Zn, i, o.apply(void 0, r));
               return { store: c, persistor: Object(gn.c)(c) };
            },
            zn = a(57),
            Kn = function (e) {
               return Object(s.a)({}, e.sites);
            },
            Jn = function (e) {
               return Object(He.b)(n, e);
            },
            Wn = function (e) {
               var t = (function (t) {
                  Object(L.a)(n, t);
                  var a = Object(T.a)(n);
                  function n() {
                     return Object(S.a)(this, n), a.apply(this, arguments);
                  }
                  return (
                     Object(j.a)(n, [
                        {
                           key: "componentDidMount",
                           value: function () {
                              (0, this.props.fetchSites)();
                           },
                        },
                        {
                           key: "render",
                           value: function () {
                              var t = this.props,
                                 a = t.sites,
                                 n = t.switches,
                                 r = t.arrivalSites;
                              return St.a.createElement(
                                 e,
                                 Object.assign({}, this.props, {
                                    sites: a,
                                    switches: n,
                                    arrivalSites: r,
                                 })
                              );
                           },
                        },
                     ]),
                     n
                  );
               })(kt.PureComponent);
               return (
                  (t.displayName = "HOC(withSites)"), Object(fn.b)(Kn, Jn)(t)
               );
            },
            qn = function (e) {
               return Object(s.a)(
                  Object(s.a)({}, e.booking),
                  {},
                  { trip: Object(s.a)({}, e.trip) }
               );
            },
            Qn = function (e) {
               return Object(He.b)(Object(s.a)(Object(s.a)({}, r), i), e);
            },
            Xn = function (e) {
               var t = (function (t) {
                  Object(L.a)(n, t);
                  var a = Object(T.a)(n);
                  function n() {
                     return Object(S.a)(this, n), a.apply(this, arguments);
                  }
                  return (
                     Object(j.a)(n, [
                        {
                           key: "render",
                           value: function () {
                              var t = this.props,
                                 a = t.departure,
                                 n = t.departureSlots,
                                 r = t.changeDeparture,
                                 i = t.arrival,
                                 o = t.arrivalSlots,
                                 c = t.changeArrival,
                                 s = t.isFetchingDepartureSlots,
                                 l = t.isFetchingArrivalSlots,
                                 u = t.trip,
                                 d = {
                                    fetchTripInfos: t.fetchTripInfos,
                                    selectTripInfos: t.selectTripInfos,
                                    forceTripInfos: t.forceTripInfos,
                                    toggleUnknownTripInfos:
                                       t.toggleUnknownTripInfos,
                                    clearTripInfos: t.clearTripInfos,
                                 };
                              return St.a.createElement(
                                 e,
                                 Object.assign({}, this.props, {
                                    departure: a,
                                    departureSlots: n,
                                    onDepartureChanged: r,
                                    isFetchingDepartureSlots: s,
                                    arrival: i,
                                    arrivalSlots: o,
                                    onArrivalChanged: c,
                                    isFetchingArrivalSlots: l,
                                    trip: u,
                                    tripActions: d,
                                 })
                              );
                           },
                        },
                     ]),
                     n
                  );
               })(kt.PureComponent);
               return (
                  (t.displayName = "HOC(WithOrder)"), Object(fn.b)(qn, Qn)(t)
               );
            },
            $n = (a(555), a(556), a(557), a(558), a(27)),
            er = a.n($n),
            tr = { id: er.a.number, name: er.a.string },
            ar =
               (er.a.number,
               er.a.string,
               er.a.number,
               er.a.arrayOf(er.a.shape(tr)),
               er.a.string,
               er.a.string,
               er.a.arrayOf(er.a.object),
               er.a.objectOf(
                  er.a.oneOfType([er.a.string, er.a.number, er.a.object])
               ),
               er.a.bool,
               er.a.bool,
               er.a.bool,
               er.a.bool,
               function (e) {
                  var t = e.t,
                     a = e.prefix,
                     n = e.name,
                     r = e.label,
                     i = e.sites,
                     o = e.value,
                     c = e.trip,
                     s = e.fastBooking,
                     l = e.forceValidation,
                     u = e.onChange,
                     d = c[a],
                     p = i.filter(function (e) {
                        return "airport" === e.type;
                     }),
                     m = i.filter(function (e) {
                        return "station" === e.type;
                     }),
                     f = i.find(function (e) {
                        return e.id === +o;
                     }),
                     v = !s && (d.isValid || d.isForced),
                     b = de(l, o),
                     g = {
                        "data-cy": "".concat(a, "-site"),
                        disabled: v,
                        success: v,
                        error: b,
                        message: b ? t("error-required") : "",
                     };
                  return St.a.createElement(
                     ka.InputSelect,
                     Object.assign(
                        {
                           className: "site-dropdown",
                           id: "".concat(a, "-site"),
                           name: n,
                           label: r,
                           value: o,
                           title: f && f.name,
                           onChange: u,
                           placeholder: t("select"),
                        },
                        g
                     ),
                     p.length &&
                        St.a.createElement(
                           "optgroup",
                           { label: t("site-type_airport") },
                           p.map(function (e) {
                              return St.a.createElement(
                                 "option",
                                 { key: e.id, value: e.id },
                                 e.name
                              );
                           })
                        ),
                     m.length &&
                        St.a.createElement(
                           "optgroup",
                           { label: t("site-type_station") },
                           m.map(function (e) {
                              return St.a.createElement(
                                 "option",
                                 { key: e.id, value: e.id },
                                 e.name
                              );
                           })
                        )
                  );
               });
         ar.defaultProps = { value: "", fastBooking: !1, forceValidation: !1 };
         var nr = Object(fn.b)(function (e) {
               return { trip: e.trip };
            })(Object(wt.d)()(ar)),
            rr = function (e) {
               var t = e.t,
                  a = e.prefix,
                  n = e.name,
                  r = e.label,
                  i = e.items,
                  o = e.value,
                  c = e.trip,
                  s = e.fastBooking,
                  l = e.forceValidation,
                  u = e.onChange,
                  d = c[a],
                  p = !s && "" !== o && (d.isValid || d.isForced),
                  m = i.find(function (e) {
                     return e.id === +o;
                  }),
                  f = de(l, o),
                  v = {
                     "data-cy": "".concat(a, "-checkpoint"),
                     success: p,
                     error: f,
                     message: f ? t("error-required") : "",
                  };
               return St.a.createElement(
                  ka.InputSelect,
                  Object.assign(
                     {
                        id: "".concat(a, "-checkpoint"),
                        name: n,
                        label: r,
                        value: o,
                        title: m && m.name,
                        onChange: u,
                        placeholder: t("select"),
                     },
                     v
                  ),
                  i.map(function (e) {
                     return St.a.createElement(
                        "option",
                        { key: e.id, value: e.id },
                        e.name
                     );
                  })
               );
            };
         rr.defaultProps = { value: "", fastBooking: !1, forceValidation: !1 };
         var ir = Object(fn.b)(function (e) {
               return { trip: e.trip };
            })(Object(wt.d)()(rr)),
            or = a(71),
            cr = a(142),
            sr = a.n(cr),
            lr = Object(or.extendMoment)(u.a),
            ur = function (e) {
               switch (e) {
                  case "fr":
                     return "fr-FR";
                  case "en":
                     return "en-GB";
                  case "es":
                     return "es-ES";
                  case "nl":
                     return "nl-NL";
                  case "pt":
                     return "pt-BR";
                  case "it":
                     return "it-IT";
                  default:
                     return "en-GB";
               }
            },
            dr = (function (e) {
               Object(L.a)(a, e);
               var t = Object(T.a)(a);
               function a(e) {
                  var n;
                  return (
                     Object(S.a)(this, a),
                     ((n = t.call(this, e)).onDateChange = function (e) {
                        (0, n.props.onDateChange)(new Date(e.date));
                     }),
                     (n.onChangeDate = function (e) {
                        var t = e.target.value,
                           a = n.props,
                           r = a.departure.date,
                           i = a.onDateChange,
                           o = lr(r),
                           c = lr(t, "DD/MM/YYYY", !0);
                        c.isValid() &&
                           c.isSameOrAfter(o, "day") &&
                           i(new Date(c));
                     }),
                     (n.refName = "".concat(e.prefix, "Input")),
                     (n[n.refName] = St.a.createRef()),
                     n
                  );
               }
               return (
                  Object(j.a)(a, [
                     {
                        key: "componentDidMount",
                        value: function () {
                           var e = this.props,
                              t = e.date,
                              a = e.departure,
                              n = e.arrival,
                              r = e.i18n,
                              i = e.prefix,
                              o = c()(this[this.refName].current);
                           if (
                              (o.datepicker(
                                 Object(s.a)(
                                    Object(s.a)(
                                       {},
                                       (function (e) {
                                          return {
                                             language: ur(e.language),
                                             format: "dd/mm/yyyy",
                                             startDate: new Date(),
                                             weekStart: 1,
                                             autoHide: !0,
                                             startView: 0,
                                             endView: 0,
                                          };
                                       })(r)
                                    ),
                                    {},
                                    { pick: this.onDateChange }
                                 )
                              ),
                              t)
                           ) {
                              o.datepicker("setDate", t, !0);
                              var l = o.datepicker("formatDate", t);
                              o.datepicker("setValue", l);
                           }
                           "start" === i &&
                              n.date &&
                              o.datepicker("setEndDate", n.date),
                              "end" === i &&
                                 a.date &&
                                 (o.datepicker("setStartDate", a.date),
                                 o.datepicker("setViewDate", a.date));
                        },
                     },
                     {
                        key: "componentDidUpdate",
                        value: function (e) {
                           var t = this.props,
                              a = t.prefix,
                              n = t.departure,
                              r = t.arrival,
                              i = c()(this[this.refName].current),
                              o = n.date,
                              s = r.date;
                           "start" === a &&
                              Ee(s, e.arrival.date) &&
                              i.datepicker("setEndDate", s),
                              "end" === a &&
                                 Ee(o, e.departure.date) &&
                                 (i.datepicker("setStartDate", o),
                                 e.date || i.datepicker("setViewDate", o));
                        },
                     },
                     {
                        key: "render",
                        value: function () {
                           var e = this.props,
                              t = e.t,
                              a = e.prefix,
                              n = e.label,
                              r = e.date,
                              i = e.trip,
                              o = e.tripDetail,
                              s = e.fastBooking,
                              l = e.forceValidation,
                              u = de(l, r),
                              d = {
                                 success: !1,
                                 error: u,
                                 message: u ? t("error-required") : "",
                              };
                           if (!s)
                              if (i.isValid && !i.isForced) {
                                 var p = lr(r),
                                    m =
                                       "start" === a
                                          ? o.departureTime
                                          : o.arrivalTime,
                                    f = lr(m, "DD/MM/YYYY HH:mm");
                                 p.isSame(f, "day")
                                    ? (d.success = !0)
                                    : (d.error = !0);
                              } else
                                 i.isForced &&
                                    ((d.success = !0),
                                    (d.error = !1),
                                    (d.message = ""));
                           c()(this[this.refName].current).prop(
                              "disabled",
                              d.success
                           );
                           var v = "".concat(a, "-date");
                           return St.a.createElement(
                              "div",
                              { className: "DayPicker" },
                              St.a.createElement(
                                 ka.Input,
                                 Object.assign(
                                    {
                                       ref: this[this.refName],
                                       "data-cy": v,
                                       id: v,
                                       name: "date",
                                       label: n,
                                       type: "text",
                                       placeholder: t("date"),
                                       autoComplete: "off",
                                       onChange: this.onChangeDate,
                                       icon: St.a.createElement(sr.a, null),
                                       inputMode: "none",
                                    },
                                    d
                                 )
                              )
                           );
                        },
                     },
                  ]),
                  a
               );
            })(kt.PureComponent),
            pr = Object(fn.b)(function (e, t) {
               var a = e.booking;
               return {
                  departure: a.departure,
                  arrival: a.arrival,
                  trip: e.trip[t.prefix],
               };
            })(Object(wt.d)()(dr)),
            mr = a(62),
            fr = a.n(mr),
            vr = Object(or.extendMoment)(u.a),
            br = (function (e) {
               Object(L.a)(a, e);
               var t = Object(T.a)(a);
               function a(e) {
                  var n;
                  return (
                     Object(S.a)(this, a),
                     ((n = t.call(this, e)).onHourChange = function (e) {
                        (0, n.props.onHourChange)(e);
                     }),
                     (n.isDeparture = function () {
                        return "start" === n.props.prefix;
                     }),
                     (n.isArrival = function () {
                        return "end" === n.props.prefix;
                     }),
                     (n.refName = "".concat(e.prefix, "Input")),
                     (n[n.refName] = St.a.createRef()),
                     n
                  );
               }
               return (
                  Object(j.a)(a, [
                     {
                        key: "componentDidUpdate",
                        value: function (e) {
                           var t = this.props,
                              a = t.date,
                              n = t.hour,
                              r = t.tripDetail,
                              i = t.isHourForced,
                              o = t.setArrivalSlotAvailable,
                              c = t.setArrivalSlotUnAvailable;
                           if (
                              this.isDeparture() &&
                              !ie()(r) &&
                              !i &&
                              void 0 !== n &&
                              n.length > 0
                           ) {
                              var s = vr(a),
                                 l = n.split(":"),
                                 u = Object(P.a)(l, 2),
                                 d = u[0],
                                 p = u[1];
                              s.set({ hours: d, minutes: p });
                              var m = vr(r.departureTime, "DD/MM/YYYY HH:mm");
                              s.isAfter(m) && this.onHourChange("");
                           }
                           if (this.isArrival() && !ie()(r) && !i) {
                              var f = this.getDisplayedSlots(),
                                 v = Oe(r, f);
                              if (
                                 (ie()(v) ||
                                    v.isUnavailable ||
                                    (void 0 === n && this.onHourChange(v.value),
                                    o()),
                                 void 0 !== n && n.length > 0)
                              ) {
                                 var b = vr(a),
                                    g = n.split(":"),
                                    h = Object(P.a)(g, 2),
                                    E = h[0],
                                    O = h[1];
                                 b.set({ hours: E, minutes: O });
                                 var C = vr(r.arrivalTime, "DD/MM/YYYY HH:mm");
                                 (b.isBefore(C) ||
                                    (b.isAfter(C) &&
                                       void 0 === e.tripDetail.arrivalTime)) &&
                                    this.onHourChange("");
                              }
                           }
                           if (this.isArrival() && r !== e.tripDetail) {
                              var y = this.getDisplayedSlots(),
                                 k = Oe(r, y);
                              ie()(k) || k.isUnavailable
                                 ? c()
                                 : this.onHourChange(k.value);
                           }
                        },
                     },
                     {
                        key: "getDisplayedSlots",
                        value: function () {
                           var e = [],
                              t = this.props,
                              a = t.date,
                              n = t.departure,
                              r = t.arrival,
                              i = t.slots,
                              o = t.tripDetail;
                           if (i) {
                              var c = vr(r.date).isSame(a, "day"),
                                 s = vr(n.date).isSame(a, "day"),
                                 l = i.startTime,
                                 u = i.endTime;
                              ie()(o)
                                 ? (this.isDeparture() &&
                                      c &&
                                      r.hour &&
                                      (u = vr(r.hour, "HH:mm").format("HH:mm")),
                                   this.isArrival() &&
                                      s &&
                                      n.hour &&
                                      (l = vr(n.hour, "HH:mm")
                                         .add(i.step, "minutes")
                                         .format("HH:mm")))
                                 : this.isDeparture()
                                 ? (u = vr(o.departureTime, "DD/MM/YYYY HH:mm")
                                      .subtract(i.step, "minutes")
                                      .format("HH:mm"))
                                 : (l = vr(o.arrivalTime, "DD/MM/YYYY HH:mm")
                                      .subtract(i.step, "minutes")
                                      .format("HH:mm")),
                                 (l = vr(l, "HH:mm")),
                                 (u = vr(u, "HH:mm")),
                                 (e = he(i, l, u));
                           }
                           return e;
                        },
                     },
                     {
                        key: "render",
                        value: function () {
                           var e = this.props,
                              t = e.t,
                              a = e.prefix,
                              n = e.label,
                              r = e.date,
                              i = e.hour,
                              o = e.notice,
                              c = e.trip,
                              s = e.tripDetail,
                              l = e.fastBooking,
                              u = e.forceValidation,
                              d = e.isFetchingSlots,
                              p = e.isHourForced,
                              m = e.siteType,
                              f = this.getDisplayedSlots(),
                              v =
                                 -1 ===
                                 f
                                    .filter(function (e) {
                                       return e.isUnavailable;
                                    })
                                    .map(function (e) {
                                       return e.value;
                                    })
                                    .indexOf(i)
                                    ? i
                                    : null,
                              b = {
                                 success: !1,
                                 warning: !1,
                                 error: de(u, v),
                                 message: "",
                              };
                           if (
                              this.isDeparture() &&
                              !l &&
                              !c.isForced &&
                              c.isValid
                           ) {
                              var g = vr(r);
                              if (i) {
                                 var h = i.split(":"),
                                    E = Object(P.a)(h, 2),
                                    O = E[0],
                                    C = E[1];
                                 g.set({ hours: O, minutes: C });
                              }
                              var y = vr(s.departureTime, "DD/MM/YYYY HH:mm"),
                                 k = le[m];
                              i &&
                                 i.length > 0 &&
                                 (g.isBefore(y, "minute")
                                    ? g.diff(y, "minute") > -k
                                       ? ((b.warning = !0),
                                         (b.message = t(
                                            "booking-trip_warning_hours",
                                            { n: k }
                                         )))
                                       : (b.success = !0)
                                    : (b.error = !0));
                           }
                           if (
                              (this.isArrival() &&
                                 void 0 !== i &&
                                 i.length > 0 &&
                                 c.isValid &&
                                 (b.success = !0),
                              this.isArrival() &&
                                 !l &&
                                 !c.isForced &&
                                 c.isValid)
                           ) {
                              var S = vr(r);
                              if (i) {
                                 var j = i.split(":"),
                                    _ = Object(P.a)(j, 2),
                                    w = _[0],
                                    L = _[1];
                                 S.set({ hours: w, minutes: L });
                              }
                              var T = vr(s.arrivalTime, "DD/MM/YYYY HH:mm");
                              i && i.length > 0
                                 ? S.isSameOrAfter(T)
                                    ? (b.success = !0)
                                    : (b.error = !0)
                                 : !i && s && s.arrivalTime && (b.error = !0);
                           }
                           var N = "".concat(a, "-time"),
                              D = this.isArrival() && p && c.isValid,
                              A = fr()("HourPicker", {
                                 hidden:
                                    !l &&
                                    !c.isValid &&
                                    !c.isForced &&
                                    !c.isUnknown,
                              });
                           return St.a.createElement(
                              "div",
                              { className: A },
                              d &&
                                 !D &&
                                 St.a.createElement(ka.InputSelect, {
                                    id: "loading",
                                    name: "loading",
                                    label: "".concat(t(n)),
                                    placeholder: t("hour"),
                                    loading: !0,
                                 }),
                              D &&
                                 St.a.createElement(ka.Fixed, {
                                    dark: !0,
                                    label: "".concat(t(n)),
                                    value: i,
                                 }),
                              !d &&
                                 !D &&
                                 St.a.createElement(
                                    ka.InputSelect,
                                    {
                                       "data-cy": N,
                                       id: N,
                                       name: N,
                                       label: "".concat(t(n)),
                                       value: v || "",
                                       onChange: this.onHourChange,
                                       placeholder: t("hour"),
                                       success: b.success,
                                       warning: b.warning,
                                       error: b.error,
                                       message: b.message,
                                       icon: St.a.createElement(ha.a, null),
                                       notice: o
                                          ? { question: !0, content: t(o) }
                                          : null,
                                    },
                                    f &&
                                       f.map(function (e) {
                                          return St.a.createElement(
                                             "option",
                                             {
                                                key: e.value,
                                                value: e.value,
                                                disabled: e.isUnavailable,
                                             },
                                             e.isUnavailable
                                                ? ""
                                                     .concat(e.value, " (")
                                                     .concat(t("full"), ")")
                                                : e.value
                                          );
                                       })
                                 )
                           );
                        },
                     },
                  ]),
                  a
               );
            })(kt.PureComponent),
            gr = Object(fn.b)(
               function (e, t) {
                  var a = e.trip,
                     n = e.booking;
                  return {
                     departure: n.departure,
                     arrival: n.arrival,
                     isHourForced: n.isArrivalSlotAvailable,
                     trip: a[t.prefix],
                  };
               },
               function (e) {
                  return Object(He.b)(
                     {
                        setArrivalSlotAvailable: z,
                        setArrivalSlotUnAvailable: K,
                     },
                     e
                  );
               }
            )(Object(wt.d)()(br)),
            hr = "tripNumber",
            Er = "arrivalSite",
            Or = (function (e) {
               Object(L.a)(a, e);
               var t = Object(T.a)(a);
               function a(e) {
                  var n;
                  return (
                     Object(S.a)(this, a),
                     ((n = t.call(this, e)).valueChanged = function (e) {
                        return function (t) {
                           var a = n.props.content;
                           n.onFormChanged(
                              Object(s.a)(
                                 Object(s.a)({}, a),
                                 {},
                                 Object(ce.a)({}, e, t)
                              )
                           );
                        };
                     }),
                     (n.onFormChanged = function (e) {
                        var t = e.site,
                           a = e.checkpoint,
                           r = e.date,
                           i = e.hour,
                           o = e.tripNumber,
                           c = e.tripDetail;
                        (0, n.props.onChange)({
                           site: t,
                           checkpoint: a,
                           date: r,
                           hour: i,
                           tripNumber: o,
                           tripDetail: c,
                        });
                     }),
                     (n.onChangeTripNumber = function (e) {
                        var t = e.target.value,
                           a = n.props,
                           r = a.prefix,
                           i = a.content,
                           o = a.content,
                           c = o.site,
                           l = o.date,
                           d = a.actions.fetchTripInfos;
                        n.state.controller.abort(),
                           n.setState(
                              { controller: new AbortController() },
                              function () {
                                 var e = n.state.controller.signal,
                                    a = u()(l).format("DD/MM/YYYY");
                                 d(r, c, a, t, e),
                                    n.onFormChanged(
                                       Object(s.a)(
                                          Object(s.a)({}, i),
                                          {},
                                          { tripNumber: t, tripDetail: {} }
                                       )
                                    );
                              }
                           );
                     }),
                     (n.onClearTripNumber = function () {
                        var e = n.props,
                           t = e.prefix,
                           a = e.content,
                           r = e.trip,
                           i = e.actions.clearTripInfos;
                        r.isUnknown ||
                           (i(t),
                           n.onFormChanged(
                              Object(s.a)(
                                 Object(s.a)({}, a),
                                 {},
                                 {
                                    hour: void 0,
                                    tripNumber: "",
                                    tripDetail: {},
                                 }
                              )
                           ));
                     }),
                     (n.onSelectItemTrip = function (e) {
                        var t = n.props,
                           a = t.prefix,
                           r = t.content,
                           i = t.actions.selectTripInfos;
                        e !== r.tripDetail &&
                           (i(a, e),
                           n.onFormChanged(
                              Object(s.a)(
                                 Object(s.a)({}, r),
                                 {},
                                 { tripNumber: e.number, tripDetail: e }
                              )
                           ));
                     }),
                     (n.onForceItemTrip = function () {
                        var e = n.props,
                           t = e.prefix,
                           a = e.content;
                        (0, e.actions.forceTripInfos)(t),
                           n.onFormChanged(
                              Object(s.a)(
                                 Object(s.a)({}, a),
                                 {},
                                 { tripNumber: a.tripNumber.toUpperCase() }
                              )
                           );
                     }),
                     (n.onToggleUnknownTrip = function () {
                        var e = n.props,
                           t = e.t,
                           a = e.prefix,
                           r = e.content,
                           i = e.trip,
                           o = e.actions.toggleUnknownTripInfos,
                           c = i.isUnknown
                              ? ""
                              : t("booking-trip_unknown_number_sel");
                        o(a),
                           n.onFormChanged(
                              Object(s.a)(
                                 Object(s.a)({}, r),
                                 {},
                                 { tripNumber: c, tripDetail: {} }
                              )
                           ),
                           n.hideModal(hr);
                     }),
                     (n.getStatus = function () {
                        var e = "",
                           t = n.props,
                           a = t.trip,
                           r = t.content.tripNumber;
                        return (
                           a.isFetchingInformations
                              ? (e = "loading")
                              : "" !== r &&
                                !a.isFetchingInformations &&
                                a.results &&
                                (e = "loaded"),
                           e
                        );
                     }),
                     (n.getInputProps = function () {
                        var e = n.props,
                           t = e.t,
                           a = e.prefix,
                           r = e.trip,
                           i = e.forceValidation,
                           o = e.content,
                           c = o.site,
                           s = o.date,
                           l = o.tripNumber,
                           d = i && !l,
                           p = "booking-trip_informations_".concat(a);
                        return {
                           "data-cy": "".concat(a, "-trip-informations"),
                           disabled: !c || !s || r.isUnknown,
                           success: r.isValid,
                           error: d,
                           message: d ? t("error-required") : "",
                           onFocus: function () {
                              if (
                                 "" !== l &&
                                 !r.isFetchingInformations &&
                                 !r.isValid &&
                                 !r.isForced
                              ) {
                                 var e = n.props.actions.fetchTripInfos,
                                    t = u()(s).format("DD/MM/YYYY");
                                 e(a, c, t, l);
                              }
                           },
                           notice: { content: t(p) },
                        };
                     }),
                     (n.openModal = function (e) {
                        n.modalRefs[e] && n.modalRefs[e].current.openModal();
                     }),
                     (n.hideModal = function (e) {
                        n.modalRefs[e] && n.modalRefs[e].current.closeModal();
                     }),
                     (n.modalRefs = {}),
                     (n.modalRefs[hr] = St.a.createRef()),
                     (n.modalRefs[Er] = St.a.createRef()),
                     (n.state = { controller: new AbortController() }),
                     n
                  );
               }
               return (
                  Object(j.a)(a, [
                     {
                        key: "render",
                        value: function () {
                           var e = this,
                              t = this.props,
                              a = t.t,
                              n = t.prefix,
                              r = t.siteTitle,
                              i = t.dateTitle,
                              o = t.fastBooking,
                              c = t.hasMultipleArrivalSite,
                              s = t.notice,
                              l = t.sites,
                              u = t.slots,
                              d = t.forceValidation,
                              p = t.displayNotice,
                              m = t.isFetchingSlots,
                              f = t.trip,
                              v = t.content,
                              b = v.site,
                              g = v.checkpoint,
                              h = v.date,
                              E = v.hour,
                              C = v.tripNumber,
                              y = v.tripDetail,
                              k = "",
                              S = O();
                           b && l.length > 0 && (k = fe(l, b).name);
                           var j = fe(l, b),
                              _ = (j && j.type) || se.Airport,
                              w = _ === se.Station ? "train" : "flight",
                              L = i;
                           o || (L = "fullbooking-".concat(n, "_date"));
                           var T = "booking-trip_"
                                 .concat(n, "_")
                                 .concat(w, "_number"),
                              N = "booking-trip_unknown_".concat(w, "_number"),
                              D =
                                 "start" === n
                                    ? "booking-hour_start_label"
                                    : "booking-hour_end_".concat(w, "_label"),
                              A = f.isUnknown
                                 ? a("booking-trip_unknown_number_sel")
                                 : C,
                              I = "start" === n ? "departure" : "arrival";
                           return St.a.createElement(
                              St.a.Fragment,
                              null,
                              St.a.createElement(
                                 "div",
                                 { className: "form" },
                                 (!o || "start" === n) &&
                                    St.a.createElement(
                                       St.a.Fragment,
                                       null,
                                       St.a.createElement(nr, {
                                          name: "site",
                                          label: "".concat(a(r)),
                                          prefix: n,
                                          sites: l,
                                          value: b,
                                          fastBooking: o,
                                          forceValidation: d,
                                          onChange: this.valueChanged("site"),
                                       }),
                                       o &&
                                          c &&
                                          !!b &&
                                          St.a.createElement(
                                             "button",
                                             {
                                                className: "arrivalSiteText",
                                                type: "button",
                                                onClick: function () {
                                                   return e.openModal(Er);
                                                },
                                             },
                                             a(
                                                "booking-arrival_site_modal_title"
                                             )
                                          )
                                    ),
                                 !o &&
                                    St.a.createElement(ir, {
                                       name: "checkpoint",
                                       label: "".concat(a("checkpoint")),
                                       prefix: n,
                                       items: (function () {
                                          if (b && b.length > 0) {
                                             var e = fe(l, b);
                                             return e ? e.checkpoints : [];
                                          }
                                          return [];
                                       })(),
                                       value: g,
                                       fastBooking: o,
                                       forceValidation: d,
                                       onChange:
                                          this.valueChanged("checkpoint"),
                                    }),
                                 St.a.createElement(pr, {
                                    prefix: n,
                                    date: h,
                                    label: "".concat(a(L)),
                                    tripDetail: y,
                                    fastBooking: o,
                                    forceValidation: d,
                                    onDateChange: this.valueChanged("date"),
                                 }),
                                 o
                                    ? ""
                                    : St.a.createElement(
                                         "div",
                                         { className: "trip-informations" },
                                         St.a.createElement(
                                            ka.TravelInformations,
                                            {
                                               type: I,
                                               name: "".concat(n, "TripNumber"),
                                               label: "".concat(a(T)),
                                               site: k,
                                               message: a(
                                                  "booking-trip_travel_not_found"
                                               ),
                                               value: A,
                                               onChange:
                                                  this.onChangeTripNumber,
                                               onClearValue:
                                                  this.onClearTripNumber,
                                               onSelectItem: function (t) {
                                                  return e.onSelectItemTrip(t);
                                               },
                                               forceSelectItem: function () {
                                                  return e.onForceItemTrip();
                                               },
                                               status: this.getStatus(),
                                               results: f.results,
                                               inputProps: this.getInputProps(),
                                               lang: S,
                                            }
                                         ),
                                         St.a.createElement(ka.Switch, {
                                            "data-cy": "unknown-trip-".concat(
                                               n
                                            ),
                                            id: "unknown-trip-".concat(n),
                                            name: "unknown-trip-".concat(n),
                                            label: a(N),
                                            onChange: function () {
                                               f.isUnknown
                                                  ? e.onToggleUnknownTrip()
                                                  : e.openModal(hr);
                                            },
                                            checked: f.isUnknown,
                                         })
                                      ),
                                 St.a.createElement(gr, {
                                    prefix: n,
                                    date: h,
                                    hour: E,
                                    label: D,
                                    slots: u,
                                    tripDetail: y,
                                    fastBooking: o,
                                    forceValidation: d,
                                    notice: p ? s : void 0,
                                    onHourChange: this.valueChanged("hour"),
                                    isFetchingSlots: m,
                                    siteType: _,
                                 })
                              ),
                              St.a.createElement(ka.Modal, {
                                 id: "".concat(n).concat(hr, "Modal"),
                                 ref: this.modalRefs[hr],
                                 title: a("booking-trip_unknown_modal_title"),
                                 content: a(
                                    "booking-trip_unknown_modal_content"
                                 ),
                                 primaryText: a("modal_confirm"),
                                 secondaryText: a("modal_cancel"),
                                 onClickPrimary: this.onToggleUnknownTrip,
                                 onClickSecondary: function () {
                                    return e.hideModal(hr);
                                 },
                              }),
                              St.a.createElement(ka.Modal, {
                                 id: "".concat(n).concat(Er, "Modal"),
                                 ref: this.modalRefs[Er],
                                 title: a("booking-arrival_site_modal_title"),
                                 content: a(
                                    "booking-arrival_site_modal_content"
                                 ),
                                 primaryText: a(
                                    "booking-arrival_site_modal_button"
                                 ),
                                 onClickPrimary: function () {
                                    return e.hideModal(Er);
                                 },
                              })
                           );
                        },
                     },
                  ]),
                  a
               );
            })(kt.PureComponent),
            Cr = Object(wt.d)()(Or);
         var yr = Object(fn.b)(function (e) {
            return { trip: e.trip.start };
         })(function (e) {
            return St.a.createElement(
               Cr,
               Object.assign(
                  {
                     siteTitle: "booking-departure_site",
                     dateTitle: "booking-departure_date",
                     prefix: "start",
                     notice: "booking-departure_notice",
                  },
                  e
               )
            );
         });
         var kr,
            Sr = Object(fn.b)(function (e) {
               return { trip: e.trip.end };
            })(function (e) {
               return St.a.createElement(
                  Cr,
                  Object.assign(
                     {
                        siteTitle: "booking-arrival_site",
                        dateTitle: "booking-arrival_date",
                        prefix: "end",
                        notice: "booking-arrival_notice",
                     },
                     e
                  )
               );
            }),
            jr = function (e) {
               var t = e.price,
                  a = e.daysDuration,
                  n = e.language,
                  r = void 0 === n ? "fr" : n,
                  i = e.isCrossedOutPrice,
                  o = e.isDiscountPrice,
                  c = e.discount,
                  s = function (e) {
                     return !Number.isNaN(Number(e));
                  };
               if (s(a) && s(t)) {
                  var l = t / a,
                     u = { minimumFractionDigits: 2, maximumFractionDigits: 2 },
                     d = new Intl.NumberFormat(r, u).format(l),
                     p = new Intl.NumberFormat(r, u).format(t),
                     m = i ? "crossedOut" : o && "discount";
                  return St.a.createElement(
                     "div",
                     { className: "priceSumUp ".concat(m || "") },
                     o &&
                        St.a.createElement(
                           "p",
                           { className: "discountLabel" },
                           St.a.createElement(wt.b, {
                              i18nKey: "booking-sum_up-promo_label",
                              values: { discount: c },
                           })
                        ),
                     St.a.createElement(
                        "p",
                        {
                           "data-cy": "estimation-total",
                           className: "totalPrice",
                        },
                        "".concat(p, " \u20ac")
                     ),
                     St.a.createElement(
                        "p",
                        {
                           className: "pricePerDay",
                           "data-cy": "estimation-price-per-day",
                        },
                        St.a.createElement(wt.b, {
                           i18nKey: "booking-sum_up-price_per_day",
                           values: { pricePerDay: d },
                        })
                     )
                  );
               }
               return null;
            },
            _r = Object(wt.d)()(function (e) {
               var t = e.t,
                  a = e.departure,
                  n = e.arrival,
                  r = e.estimation,
                  i = e.i18n,
                  o = Object(kt.useRef)(null),
                  c = r || {},
                  s = c.durationInDays,
                  l = c.total,
                  u = c.totalWithoutPromotion;
               Object(kt.useEffect)(
                  function () {
                     if (l && s) {
                        var e = document.querySelector(
                           "#estimationSummaryForm"
                        );
                        "function" !== typeof e.scrollIntoView || on
                           ? zt(o.current)
                           : e.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                             });
                     }
                  },
                  [l, s]
               );
               if (l && s) {
                  var p = pe(a.date),
                     m = pe(n.date);
                  return St.a.createElement(
                     "form",
                     {
                        method: "POST",
                        id: "estimationSummaryForm",
                        action: "/orders/book",
                        onSubmit: function () {
                           !(function (e) {
                              d("start_booking", {
                                 currency: "EUR",
                                 value: e.total,
                              });
                           })(r);
                        },
                     },
                     St.a.createElement("input", {
                        type: "hidden",
                        name: "startSite",
                        value: a.site,
                     }),
                     St.a.createElement("input", {
                        type: "hidden",
                        name: "startDate",
                        value: p,
                     }),
                     St.a.createElement("input", {
                        type: "hidden",
                        name: "startHour",
                        value: a.hour,
                     }),
                     St.a.createElement("input", {
                        type: "hidden",
                        name: "endSite",
                        value: n.site,
                     }),
                     St.a.createElement("input", {
                        type: "hidden",
                        name: "endDate",
                        value: m,
                     }),
                     St.a.createElement("input", {
                        type: "hidden",
                        name: "endHour",
                        value: n.hour,
                     }),
                     St.a.createElement(
                        "div",
                        {
                           ref: o,
                           className: "result show ".concat(
                              u ? "withPromo" : ""
                           ),
                        },
                        St.a.createElement(
                           "p",
                           {
                              className: "servicesIncludedSummary",
                              "data-cy": "estimation-summary",
                           },
                           St.a.createElement(wt.b, {
                              i18nKey: "booking-sum_up-services_included",
                              values: {
                                 totalDays:
                                    null === r || void 0 === r
                                       ? void 0
                                       : r.durationInDays,
                              },
                           })
                        ),
                        St.a.createElement(
                           "div",
                           { className: "priceSumUpContainer" },
                           Ce(u, l) &&
                              St.a.createElement(jr, {
                                 isCrossedOutPrice: !0,
                                 daysDuration: s,
                                 price: u,
                                 language:
                                    null === i || void 0 === i
                                       ? void 0
                                       : i.language,
                              }),
                           St.a.createElement(jr, {
                              isDiscountPrice: Ce(u, l),
                              discount: ye(u, l),
                              daysDuration: s,
                              price: l,
                              language:
                                 null === i || void 0 === i
                                    ? void 0
                                    : i.language,
                           })
                        ),
                        St.a.createElement(
                           "div",
                           { className: "simulatePrice" },
                           St.a.createElement(ka.Button, {
                              "data-cy": "estimation-submit",
                              type: "submit",
                              primary: !0,
                              label: t("booking-sum_up-cta"),
                           })
                        )
                     )
                  );
               }
               return null;
            }),
            wr = Object(zn.a)(
               Xn,
               Wn,
               Object(fn.b)(
                  function (e) {
                     return {
                        isFetchingEstimation: Cn(e),
                        estimation: kn(e),
                        forceValidation: yn(e),
                     };
                  },
                  { onEstimatePrice: Ke }
               ),
               Object(wt.d)()
            )(function (e) {
               var t = e.t,
                  a = e.sites,
                  n = e.arrivalSites,
                  r = e.departure,
                  i = e.departureSlots,
                  o = e.isFetchingDepartureSlots,
                  c = e.arrival,
                  s = e.arrivalSlots,
                  l = e.isFetchingArrivalSlots,
                  u = e.isFetchingEstimation,
                  d = e.estimation,
                  p = e.forceValidation,
                  m = e.onDepartureChanged,
                  f = e.onArrivalChanged,
                  v = e.onEstimatePrice;
               return St.a.createElement(
                  St.a.Fragment,
                  null,
                  St.a.createElement(
                     "form",
                     { id: "bookingHome" },
                     St.a.createElement(
                        "div",
                        { className: "search" },
                        St.a.createElement(
                           "div",
                           { className: "title" },
                           t("booking-departure")
                        ),
                        St.a.createElement(yr, {
                           fastBooking: !0,
                           displayNotice: !0,
                           content: r,
                           sites: a,
                           slots: i,
                           forceValidation: p,
                           onChange: function (e) {
                              return m(e, !0);
                           },
                           isFetchingSlots: o,
                           hasMultipleArrivalSite: n.length > 1,
                        })
                     ),
                     St.a.createElement("div", {
                        className: "BookingHomeSeparator",
                     }),
                     St.a.createElement(
                        "div",
                        { className: "search" },
                        St.a.createElement(
                           "div",
                           { className: "title" },
                           t("booking-arrival")
                        ),
                        St.a.createElement(Sr, {
                           fastBooking: !0,
                           displayNotice: !0,
                           content: c,
                           sites: n,
                           slots: s,
                           forceValidation: p,
                           onChange: f,
                           isFetchingSlots: l,
                        })
                     ),
                     St.a.createElement(
                        "div",
                        { className: "otps-form" },
                        St.a.createElement(ka.Button, {
                           "data-cy": "submit-fast-booking",
                           primary: !0,
                           label: t("booking-get_price"),
                           onClick: function () {
                              return v();
                           },
                           loading: u,
                           disabled: !!(null === d || void 0 === d
                              ? void 0
                              : d.total),
                        })
                     )
                  ),
                  St.a.createElement(_r, {
                     sites: a,
                     estimation: d,
                     departure: r,
                     arrival: c,
                  })
               );
            }),
            Lr = function () {
               var e = document.getElementById("FastBookingRoot");
               if (e) {
                  var t = e.getAttribute("data-site") || "",
                     a = Gn(
                        "estimate",
                        {
                           booking: {
                              departure: { site: t },
                              arrival: { site: t },
                           },
                        },
                        [vn]
                     ),
                     n = new URLSearchParams(window.location.search);
                  (n.has("keep") && "true" === n.get("keep")) ||
                     a.persistor.purge(),
                     _t.a.render(
                        St.a.createElement(
                           St.a.Suspense,
                           {
                              fallback: St.a.createElement("div", {
                                 className: "fallback",
                              }),
                           },
                           St.a.createElement(
                              fn.a,
                              { store: a.store },
                              St.a.createElement(
                                 wt.a,
                                 { i18n: C },
                                 St.a.createElement(wr, {
                                    persistor: a.persistor,
                                 })
                              )
                           )
                        ),
                        e
                     );
               }
            };
         function Tr() {
            return (Tr =
               Object.assign ||
               function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                     var a = arguments[t];
                     for (var n in a)
                        Object.prototype.hasOwnProperty.call(a, n) &&
                           (e[n] = a[n]);
                  }
                  return e;
               }).apply(this, arguments);
         }
         function Nr(e, t) {
            if (null == e) return {};
            var a,
               n,
               r = (function (e, t) {
                  if (null == e) return {};
                  var a,
                     n,
                     r = {},
                     i = Object.keys(e);
                  for (n = 0; n < i.length; n++)
                     (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                  return r;
               })(e, t);
            if (Object.getOwnPropertySymbols) {
               var i = Object.getOwnPropertySymbols(e);
               for (n = 0; n < i.length; n++)
                  (a = i[n]),
                     t.indexOf(a) >= 0 ||
                        (Object.prototype.propertyIsEnumerable.call(e, a) &&
                           (r[a] = e[a]));
            }
            return r;
         }
         var Dr = function (e) {
               var t = e.svgRef,
                  a = Nr(e, ["svgRef"]);
               return St.a.createElement(
                  "svg",
                  Tr(
                     {
                        width: "700px",
                        height: "650px",
                        viewBox: "0 0 700 650",
                        ref: t,
                     },
                     a
                  ),
                  kr ||
                     (kr = St.a.createElement(
                        "g",
                        {
                           id: "MAP",
                           stroke: "none",
                           strokeWidth: 1,
                           fill: "none",
                           fillRule: "evenodd",
                           transform: "translate(-150,-40)",
                        },
                        St.a.createElement(
                           "g",
                           {
                              id: "MAP",
                              transform: "translate(0.000000, 36.000000)",
                           },
                           St.a.createElement("path", {
                              d: "M713.064,324.456 C740.256,293.832 756.36,257.4 772.728,217.272 C789.36,176.616 772.464,175.824 751.872,168.96 C675.576,143.088 605.352,103.224 541.464,48.312 C517.176,27.192 496.32,34.056 494.472,68.904 C492.624,102.96 481.008,114.84 454.344,115.104 C443.784,115.368 433.224,119.064 428.472,131.472 C412.896,172.392 390.984,153.912 371.976,138.072 C361.944,129.624 354.816,118.008 341.88,128.304 C327.36,139.656 336.336,151.008 341.88,163.416 C357.984,199.056 350.592,204.864 315.48,202.752 C308.352,202.224 302.28,199.056 296.736,195.624 C287.496,189.816 279.312,182.952 267.96,186.384 C257.928,189.288 248.16,192.984 237.864,194.568 C224.136,196.944 205.656,189.024 206.184,217.008 C206.448,241.032 212.52,258.456 236.544,265.32 C276.144,276.672 304.128,283.008 331.584,332.64 C348.744,364.056 363,382.8 358.512,419.496 C354.024,454.872 354.552,493.152 339.504,525.888 C328.68,549.12 348.216,561 358.512,567.864 C400.224,595.584 446.952,586.344 487.344,597.432 C517.704,605.88 562.056,639.672 570.504,562.848 C572.088,549.12 590.568,545.16 604.824,544.632 C627.528,543.576 647.856,558.888 668.976,567.864 C697.488,579.744 736.032,558.096 750.288,528.792 C751.08,527.208 751.872,525.624 752.4,524.04 C757.416,510.576 741.576,495.792 732.336,490.248 C707.256,475.728 728.112,460.416 734.184,431.112 C735.768,423.72 736.032,416.064 734.976,408.936 C732.6,390.984 722.304,374.616 702.768,366.168 C677.16,355.344 707.52,330.792 713.064,324.456 Z",
                              id: "Path",
                              fill: "#4169E1",
                              fillRule: "nonzero",
                           })
                        ),
                        St.a.createElement(
                           "g",
                           {
                              id: "LOCATIONS",
                              transform: "translate(5.000000, 205.000000)",
                              fill: "#FFFFFF",
                              fillRule: "nonzero",
                           },
                           St.a.createElement("path", {
                              d: "M524.5,-3.55271368e-15 C529.406505,-3.55271368e-15 534.112052,1.94910155 537.581475,5.41852455 C541.050898,8.88794755 543,13.5934949 543,18.5 C543,28.7172679 534.717268,37 524.5,37 C514.282732,37 506,28.7172679 506,18.5 C506,8.28273213 514.282732,-3.55271368e-15 524.5,-3.55271368e-15 Z M530.920183,3.00281961 C524.652998,0.406006667 517.438629,1.84030205 512.641326,6.63685639 C507.844023,11.4334107 506.408601,18.6475553 509.004436,24.9151461 C511.60027,31.1827369 517.716118,35.2693886 524.5,35.2693886 C533.761901,35.2693886 541.270561,27.7619011 541.272007,18.5 C541.273066,11.7161183 537.187369,5.59963255 530.920183,3.00281961 Z M524.5,4.1319797 C527.785822,4.15044468 530.978919,5.22791217 533.609137,7.20573548 L533.609137,7.20573548 L528.035,18.501 L533.609137,29.796773 C528.318432,33.8186445 521.04298,33.8904636 515.681392,30.0122304 L515.390863,29.796773 L520.972,18.512 L515.390863,7.20573548 C517.911405,5.31016183 520.949028,4.24161299 524.089785,4.13976984 Z M521.933,20.457 L517.611837,29.2134436 C519.696972,30.4553804 522.075534,31.1199582 524.502619,31.1394816 C526.926863,31.1140087 529.302009,30.4507869 531.390782,29.2160713 L531.390782,29.2160713 L527.067,20.462 L527.037153,20.5235909 C527.037153,20.5235909 525.994717,22.7263206 524.662717,22.902539 L524.494763,22.9137056 C523.083489,22.9137056 521.965466,20.5235909 521.965466,20.5235909 L521.965466,20.5235909 L521.933,20.457 Z M524.507857,15.8888347 C524.093799,16.2787988 523.756227,16.7431365 523.512609,17.2578194 L523.512609,17.2578194 L522.9,18.497 L523.536458,19.7847326 C523.732729,20.201717 523.99029,20.5860968 524.300078,20.9251794 L524.492145,21.1230916 C524.906038,20.7328222 525.243506,20.2681795 525.487107,19.75318 L525.487107,19.75318 L526.102,18.507 L525.476914,17.2394261 C525.280921,16.8165062 525.019919,16.4277825 524.703952,16.0872554 Z M524.5,5.87000585 C522.076348,5.89475887 519.701699,6.55848171 517.613817,7.79471862 L517.613817,7.79471862 L521.941,16.554 L521.975213,16.4853021 C521.975213,16.4853021 523.013121,14.2743766 524.342801,14.0975026 L524.510476,14.0862944 C525.919538,14.0862944 527.040501,16.4853021 527.040501,16.4853021 L527.040501,16.4853021 L527.07,16.545 L531.39142,7.78945985 C529.426454,6.62205806 527.20447,5.96669648 524.927522,5.87965282 Z",
                              id: "PARIS",
                           }),
                           St.a.createElement("path", {
                              d: "M348.5,126 C353.406505,126 358.112052,127.949102 361.581475,131.418525 C365.050898,134.887948 367,139.593495 367,144.5 C367,154.717268 358.717268,163 348.5,163 C338.282732,163 330,154.717268 330,144.5 C330,134.282732 338.282732,126 348.5,126 Z M354.920183,129.00282 C348.652998,126.406007 341.438629,127.840302 336.641326,132.636856 C331.844023,137.433411 330.408601,144.647555 333.004436,150.915146 C335.60027,157.182737 341.716118,161.269389 348.5,161.269389 C357.761901,161.269389 365.270561,153.761901 365.272007,144.5 C365.273066,137.716118 361.187369,131.599633 354.920183,129.00282 Z M348.5,130.13198 C351.785822,130.150445 354.978919,131.227912 357.609137,133.205735 L357.609137,133.205735 L352.035,144.501 L357.609137,155.796773 C352.318432,159.818644 345.04298,159.890464 339.681392,156.01223 L339.390863,155.796773 L344.972,144.512 L339.390863,133.205735 C341.911405,131.310162 344.949028,130.241613 348.089785,130.13977 Z M345.933,146.457 L341.611837,155.213444 C343.696972,156.45538 346.075534,157.119958 348.502619,157.139482 C350.926863,157.114009 353.302009,156.450787 355.390782,155.216071 L355.390782,155.216071 L351.067,146.462 L351.037153,146.523591 C351.037153,146.523591 349.994717,148.726321 348.662717,148.902539 L348.494763,148.913706 C347.083489,148.913706 345.965466,146.523591 345.965466,146.523591 L345.965466,146.523591 L345.933,146.457 Z M348.507857,141.888835 C348.093799,142.278799 347.756227,142.743136 347.512609,143.257819 L347.512609,143.257819 L346.9,144.497 L347.536458,145.784733 C347.732729,146.201717 347.99029,146.586097 348.300078,146.925179 L348.492145,147.123092 C348.906038,146.732822 349.243506,146.268179 349.487107,145.75318 L349.487107,145.75318 L350.102,144.507 L349.476914,143.239426 C349.280921,142.816506 349.019919,142.427783 348.703952,142.087255 Z M348.5,131.870006 C346.076348,131.894759 343.701699,132.558482 341.613817,133.794719 L341.613817,133.794719 L345.941,142.554 L345.975213,142.485302 C345.975213,142.485302 347.013121,140.274377 348.342801,140.097503 L348.510476,140.086294 C349.919538,140.086294 351.040501,142.485302 351.040501,142.485302 L351.040501,142.485302 L351.07,142.545 L355.39142,133.78946 C353.426454,132.622058 351.20447,131.966696 348.927522,131.879653 Z",
                              id: "NANTES",
                           }),
                           St.a.createElement("path", {
                              d: "M373.5,263 C378.406505,263 383.112052,264.949102 386.581475,268.418525 C390.050898,271.887948 392,276.593495 392,281.5 C392,291.717268 383.717268,300 373.5,300 C363.282732,300 355,291.717268 355,281.5 C355,271.282732 363.282732,263 373.5,263 Z M379.920183,266.00282 C373.652998,263.406007 366.438629,264.840302 361.641326,269.636856 C356.844023,274.433411 355.408601,281.647555 358.004436,287.915146 C360.60027,294.182737 366.716118,298.269389 373.5,298.269389 C382.761901,298.269389 390.270561,290.761901 390.272007,281.5 C390.273066,274.716118 386.187369,268.599633 379.920183,266.00282 Z M373.5,267.13198 C376.785822,267.150445 379.978919,268.227912 382.609137,270.205735 L382.609137,270.205735 L377.035,281.501 L382.609137,292.796773 C377.318432,296.818644 370.04298,296.890464 364.681392,293.01223 L364.390863,292.796773 L369.972,281.512 L364.390863,270.205735 C366.911405,268.310162 369.949028,267.241613 373.089785,267.13977 Z M370.933,283.457 L366.611837,292.213444 C368.696972,293.45538 371.075534,294.119958 373.502619,294.139482 C375.926863,294.114009 378.302009,293.450787 380.390782,292.216071 L380.390782,292.216071 L376.067,283.462 L376.037153,283.523591 C376.037153,283.523591 374.994717,285.726321 373.662717,285.902539 L373.494763,285.913706 C372.083489,285.913706 370.965466,283.523591 370.965466,283.523591 L370.965466,283.523591 L370.933,283.457 Z M373.507857,278.888835 C373.093799,279.278799 372.756227,279.743136 372.512609,280.257819 L372.512609,280.257819 L371.9,281.497 L372.536458,282.784733 C372.732729,283.201717 372.99029,283.586097 373.300078,283.925179 L373.492145,284.123092 C373.906038,283.732822 374.243506,283.268179 374.487107,282.75318 L374.487107,282.75318 L375.102,281.507 L374.476914,280.239426 C374.280921,279.816506 374.019919,279.427783 373.703952,279.087255 Z M373.5,268.870006 C371.076348,268.894759 368.701699,269.558482 366.613817,270.794719 L366.613817,270.794719 L370.941,279.554 L370.975213,279.485302 C370.975213,279.485302 372.013121,277.274377 373.342801,277.097503 L373.510476,277.086294 C374.919538,277.086294 376.040501,279.485302 376.040501,279.485302 L376.040501,279.485302 L376.07,279.545 L380.39142,270.78946 C378.426454,269.622058 376.20447,268.966696 373.927522,268.879653 Z",
                              id: "BORDEAUX",
                           }),
                           St.a.createElement("path", {
                              d: "M472.5,345 C477.406505,345 482.112052,346.949102 485.581475,350.418525 C489.050898,353.887948 491,358.593495 491,363.5 C491,373.717268 482.717268,382 472.5,382 C462.282732,382 454,373.717268 454,363.5 C454,353.282732 462.282732,345 472.5,345 Z M478.920183,348.00282 C472.652998,345.406007 465.438629,346.840302 460.641326,351.636856 C455.844023,356.433411 454.408601,363.647555 457.004436,369.915146 C459.60027,376.182737 465.716118,380.269389 472.5,380.269389 C481.761901,380.269389 489.270561,372.761901 489.272007,363.5 C489.273066,356.716118 485.187369,350.599633 478.920183,348.00282 Z M472.5,349.13198 C475.785822,349.150445 478.978919,350.227912 481.609137,352.205735 L481.609137,352.205735 L476.035,363.501 L481.609137,374.796773 C476.318432,378.818644 469.04298,378.890464 463.681392,375.01223 L463.390863,374.796773 L468.972,363.512 L463.390863,352.205735 C465.911405,350.310162 468.949028,349.241613 472.089785,349.13977 Z M469.933,365.457 L465.611837,374.213444 C467.696972,375.45538 470.075534,376.119958 472.502619,376.139482 C474.926863,376.114009 477.302009,375.450787 479.390782,374.216071 L479.390782,374.216071 L475.067,365.462 L475.037153,365.523591 C475.037153,365.523591 473.994717,367.726321 472.662717,367.902539 L472.494763,367.913706 C471.083489,367.913706 469.965466,365.523591 469.965466,365.523591 L469.965466,365.523591 L469.933,365.457 Z M472.507857,360.888835 C472.093799,361.278799 471.756227,361.743136 471.512609,362.257819 L471.512609,362.257819 L470.9,363.497 L471.536458,364.784733 C471.732729,365.201717 471.99029,365.586097 472.300078,365.925179 L472.492145,366.123092 C472.906038,365.732822 473.243506,365.268179 473.487107,364.75318 L473.487107,364.75318 L474.102,363.507 L473.476914,362.239426 C473.280921,361.816506 473.019919,361.427783 472.703952,361.087255 Z M472.5,350.870006 C470.076348,350.894759 467.701699,351.558482 465.613817,352.794719 L465.613817,352.794719 L469.941,361.554 L469.975213,361.485302 C469.975213,361.485302 471.013121,359.274377 472.342801,359.097503 L472.510476,359.086294 C473.919538,359.086294 475.040501,361.485302 475.040501,361.485302 L475.040501,361.485302 L475.07,361.545 L479.39142,352.78946 C477.426454,351.622058 475.20447,350.966696 472.927522,350.879653 Z",
                              id: "TOULOUSE",
                           }),
                           St.a.createElement("path", {
                              d: "M655.5,351 C660.406505,351 665.112052,352.949102 668.581475,356.418525 C672.050898,359.887948 674,364.593495 674,369.5 C674,379.717268 665.717268,388 655.5,388 C645.282732,388 637,379.717268 637,369.5 C637,359.282732 645.282732,351 655.5,351 Z M661.920183,354.00282 C655.652998,351.406007 648.438629,352.840302 643.641326,357.636856 C638.844023,362.433411 637.408601,369.647555 640.004436,375.915146 C642.60027,382.182737 648.716118,386.269389 655.5,386.269389 C664.761901,386.269389 672.270561,378.761901 672.272007,369.5 C672.273066,362.716118 668.187369,356.599633 661.920183,354.00282 Z M655.5,355.13198 C658.785822,355.150445 661.978919,356.227912 664.609137,358.205735 L664.609137,358.205735 L659.035,369.501 L664.609137,380.796773 C659.318432,384.818644 652.04298,384.890464 646.681392,381.01223 L646.390863,380.796773 L651.972,369.512 L646.390863,358.205735 C648.911405,356.310162 651.949028,355.241613 655.089785,355.13977 Z M652.933,371.457 L648.611837,380.213444 C650.696972,381.45538 653.075534,382.119958 655.502619,382.139482 C657.926863,382.114009 660.302009,381.450787 662.390782,380.216071 L662.390782,380.216071 L658.067,371.462 L658.037153,371.523591 C658.037153,371.523591 656.994717,373.726321 655.662717,373.902539 L655.494763,373.913706 C654.083489,373.913706 652.965466,371.523591 652.965466,371.523591 L652.965466,371.523591 L652.933,371.457 Z M655.507857,366.888835 C655.093799,367.278799 654.756227,367.743136 654.512609,368.257819 L654.512609,368.257819 L653.9,369.497 L654.536458,370.784733 C654.732729,371.201717 654.99029,371.586097 655.300078,371.925179 L655.492145,372.123092 C655.906038,371.732822 656.243506,371.268179 656.487107,370.75318 L656.487107,370.75318 L657.102,369.507 L656.476914,368.239426 C656.280921,367.816506 656.019919,367.427783 655.703952,367.087255 Z M655.5,356.870006 C653.076348,356.894759 650.701699,357.558482 648.613817,358.794719 L648.613817,358.794719 L652.941,367.554 L652.975213,367.485302 C652.975213,367.485302 654.013121,365.274377 655.342801,365.097503 L655.510476,365.086294 C656.919538,365.086294 658.040501,367.485302 658.040501,367.485302 L658.040501,367.485302 L658.07,367.545 L662.39142,358.78946 C660.426454,357.622058 658.20447,356.966696 655.927522,356.879653 Z",
                              id: "MARSEILLE",
                           }),
                           St.a.createElement("path", {
                              d: "M718.5,342 C723.406505,342 728.112052,343.949102 731.581475,347.418525 C735.050898,350.887948 737,355.593495 737,360.5 C737,370.717268 728.717268,379 718.5,379 C708.282732,379 700,370.717268 700,360.5 C700,350.282732 708.282732,342 718.5,342 Z M724.920183,345.00282 C718.652998,342.406007 711.438629,343.840302 706.641326,348.636856 C701.844023,353.433411 700.408601,360.647555 703.004436,366.915146 C705.60027,373.182737 711.716118,377.269389 718.5,377.269389 C727.761901,377.269389 735.270561,369.761901 735.272007,360.5 C735.273066,353.716118 731.187369,347.599633 724.920183,345.00282 Z M718.5,346.13198 C721.785822,346.150445 724.978919,347.227912 727.609137,349.205735 L727.609137,349.205735 L722.035,360.501 L727.609137,371.796773 C722.318432,375.818644 715.04298,375.890464 709.681392,372.01223 L709.390863,371.796773 L714.972,360.512 L709.390863,349.205735 C711.911405,347.310162 714.949028,346.241613 718.089785,346.13977 Z M715.933,362.457 L711.611837,371.213444 C713.696972,372.45538 716.075534,373.119958 718.502619,373.139482 C720.926863,373.114009 723.302009,372.450787 725.390782,371.216071 L725.390782,371.216071 L721.067,362.462 L721.037153,362.523591 C721.037153,362.523591 719.994717,364.726321 718.662717,364.902539 L718.494763,364.913706 C717.083489,364.913706 715.965466,362.523591 715.965466,362.523591 L715.965466,362.523591 L715.933,362.457 Z M718.507857,357.888835 C718.093799,358.278799 717.756227,358.743136 717.512609,359.257819 L717.512609,359.257819 L716.9,360.497 L717.536458,361.784733 C717.732729,362.201717 717.99029,362.586097 718.300078,362.925179 L718.492145,363.123092 C718.906038,362.732822 719.243506,362.268179 719.487107,361.75318 L719.487107,361.75318 L720.102,360.507 L719.476914,359.239426 C719.280921,358.816506 719.019919,358.427783 718.703952,358.087255 Z M718.5,347.870006 C716.076348,347.894759 713.701699,348.558482 711.613817,349.794719 L711.613817,349.794719 L715.941,358.554 L715.975213,358.485302 C715.975213,358.485302 717.013121,356.274377 718.342801,356.097503 L718.510476,356.086294 C719.919538,356.086294 721.040501,358.485302 721.040501,358.485302 L721.040501,358.485302 L721.07,358.545 L725.39142,349.78946 C723.426454,348.622058 721.20447,347.966696 718.927522,347.879653 Z",
                              id: "NICE",
                           }),
                           St.a.createElement("path", {
                              d: "M648.5,246 C653.406505,246 658.112052,247.949102 661.581475,251.418525 C665.050898,254.887948 667,259.593495 667,264.5 C667,274.717268 658.717268,283 648.5,283 C638.282732,283 630,274.717268 630,264.5 C630,254.282732 638.282732,246 648.5,246 Z M654.920183,249.00282 C648.652998,246.406007 641.438629,247.840302 636.641326,252.636856 C631.844023,257.433411 630.408601,264.647555 633.004436,270.915146 C635.60027,277.182737 641.716118,281.269389 648.5,281.269389 C657.761901,281.269389 665.270561,273.761901 665.272007,264.5 C665.273066,257.716118 661.187369,251.599633 654.920183,249.00282 Z M648.5,250.13198 C651.785822,250.150445 654.978919,251.227912 657.609137,253.205735 L657.609137,253.205735 L652.035,264.501 L657.609137,275.796773 C652.318432,279.818644 645.04298,279.890464 639.681392,276.01223 L639.390863,275.796773 L644.972,264.512 L639.390863,253.205735 C641.911405,251.310162 644.949028,250.241613 648.089785,250.13977 Z M645.933,266.457 L641.611837,275.213444 C643.696972,276.45538 646.075534,277.119958 648.502619,277.139482 C650.926863,277.114009 653.302009,276.450787 655.390782,275.216071 L655.390782,275.216071 L651.067,266.462 L651.037153,266.523591 C651.037153,266.523591 649.994717,268.726321 648.662717,268.902539 L648.494763,268.913706 C647.083489,268.913706 645.965466,266.523591 645.965466,266.523591 L645.965466,266.523591 L645.933,266.457 Z M648.507857,261.888835 C648.093799,262.278799 647.756227,262.743136 647.512609,263.257819 L647.512609,263.257819 L646.9,264.497 L647.536458,265.784733 C647.732729,266.201717 647.99029,266.586097 648.300078,266.925179 L648.492145,267.123092 C648.906038,266.732822 649.243506,266.268179 649.487107,265.75318 L649.487107,265.75318 L650.102,264.507 L649.476914,263.239426 C649.280921,262.816506 649.019919,262.427783 648.703952,262.087255 Z M648.5,251.870006 C646.076348,251.894759 643.701699,252.558482 641.613817,253.794719 L641.613817,253.794719 L645.941,262.554 L645.975213,262.485302 C645.975213,262.485302 647.013121,260.274377 648.342801,260.097503 L648.510476,260.086294 C649.919538,260.086294 651.040501,262.485302 651.040501,262.485302 L651.040501,262.485302 L651.07,262.545 L655.39142,253.78946 C653.426454,252.622058 651.20447,251.966696 648.927522,251.879653 Z",
                              id: "LYON",
                           })
                        )
                     ))
               );
            },
            Ar = St.a.forwardRef(function (e, t) {
               return St.a.createElement(Dr, Tr({ svgRef: t }, e));
            });
         a.p;
         var Ir = function () {
               c()(".establishment h2").click(function (e) {
                  c()(e.currentTarget).parent().toggleClass("open");
               }),
                  (function () {
                     var e = document.getElementById(
                        "svg-establishments-map-container"
                     );
                     e &&
                        _t.a.render(
                           St.a.createElement(Ar, {
                              width: "100%",
                              height: "100%",
                           }),
                           e
                        );
                  })();
            },
            Mr = a(112);
         function Fr(e) {
            var t = e.find("#NewsletterContainer");
            t &&
               t.length &&
               F("/newsletter/status", { method: "GET" })
                  .then(function (e) {
                     return e.text();
                  })
                  .then(function (e) {
                     return t.html(e);
                  })
                  .catch(function () {});
         }
         var Rr = a(278),
            xr = a.n(Rr),
            Hr = a(177),
            Pr = a.n(Hr),
            Br = a(143),
            Yr = a.n(Br),
            Ur = a(279),
            Vr = a.n(Ur);
         var Zr = Object(wt.d)()(function (e) {
               var t = e.t,
                  a = [
                     {
                        id: 1,
                        label: St.a.createElement(
                           ka.ButtonIcon,
                           { light: !0, "data-cy": "button-icon-2" },
                           St.a.createElement(xr.a, { size: 24 }),
                           St.a.createElement(
                              "span",
                              null,
                              t("booking-menu_order")
                           )
                        ),
                        anchor: "order-detail",
                        offsetTop: -500,
                        offsetBottom: 125,
                     },
                     {
                        id: 2,
                        label: St.a.createElement(
                           ka.ButtonIcon,
                           { light: !0, "data-cy": "button-icon-2" },
                           St.a.createElement(Yr.a, { size: 24 }),
                           St.a.createElement(
                              "span",
                              null,
                              t("booking-menu_services")
                           )
                        ),
                        anchor: "order-services",
                        offsetTop: -140,
                        offsetBottom: 125,
                     },
                  ],
                  n = document.getElementById("LoginForm"),
                  r = document.getElementById("ValidateForm");
               return (
                  n
                     ? a.push({
                          id: 3,
                          label: St.a.createElement(
                             ka.ButtonIcon,
                             { light: !0, "data-cy": "button-icon-2" },
                             St.a.createElement(Pr.a, { size: 24 }),
                             St.a.createElement(
                                "span",
                                null,
                                t("booking-menu_signin")
                             )
                          ),
                          anchor: "LoginForm",
                          offsetTop: -140,
                          offsetBottom: 125,
                       })
                     : r &&
                       a.push(
                          {
                             id: 3,
                             label: St.a.createElement(
                                ka.ButtonIcon,
                                { light: !0, "data-cy": "button-icon-2" },
                                St.a.createElement(Pr.a, { size: 24 }),
                                St.a.createElement(
                                   "span",
                                   null,
                                   t("booking-menu_informations")
                                )
                             ),
                             anchor: "order-informations",
                             offsetTop: -140,
                             offsetBottom: 165,
                          },
                          {
                             id: 4,
                             label: St.a.createElement(
                                ka.ButtonIcon,
                                { light: !0, "data-cy": "button-icon-2" },
                                St.a.createElement(Vr.a, { size: 24 }),
                                St.a.createElement(
                                   "span",
                                   null,
                                   t("booking-menu_options")
                                )
                             ),
                             anchor: "order-options",
                             offsetTop: -140,
                             offsetBottom: 125,
                          }
                       ),
                  St.a.createElement(
                     "div",
                     { className: "ScrollMenu" },
                     St.a.createElement(ka.Scrollable, {
                        items: a,
                        defaultActiveLink: "order-detail",
                        scrollAfter: function () {},
                        validatePreviousAnchors: function () {},
                     })
                  )
               );
            }),
            Gr = a(111),
            zr = a.n(Gr),
            Kr = a(280),
            Jr = a.n(Kr),
            Wr = a(281),
            qr = a.n(Wr),
            Qr = a(282),
            Xr = a.n(Qr),
            $r = a(283),
            ei = a.n($r),
            ti = a(284),
            ai = a.n(ti),
            ni = a(285),
            ri = a.n(ni),
            ii = a(286),
            oi = a.n(ii),
            ci = a(287),
            si = a.n(ci),
            li = a(288),
            ui = a.n(li),
            di = a(289),
            pi = a.n(di),
            mi = a(290),
            fi = a.n(mi),
            vi = a(291),
            bi = a.n(vi),
            gi = a(292),
            hi = a.n(gi),
            Ei = a(293),
            Oi = a.n(Ei),
            Ci = function (e, t, a) {
               switch (e.name) {
                  case "asssurance.jpg":
                     return St.a.createElement(Xr.a, { size: t, disabled: a });
                  case "pression-pneu.jpg":
                     return St.a.createElement(ei.a, { size: t, disabled: a });
                  case "parking-couvert.jpg":
                     return St.a.createElement(ai.a, { size: t, disabled: a });
                  case "lave-vitre.jpg":
                     return St.a.createElement(ri.a, { size: t, disabled: a });
                  case "recharge-vehicule.jpg":
                     return St.a.createElement(oi.a, { size: t, disabled: a });
                  case "lavage-interieur.jpg":
                     return St.a.createElement(si.a, { size: t, disabled: a });
                  case "lavage-exterieur.jpg":
                     return St.a.createElement(Yr.a, { size: t, disabled: a });
                  case "lavage-integral.jpg":
                     return St.a.createElement(ui.a, { size: t, disabled: a });
                  case "dessablage.jpg":
                     return St.a.createElement(pi.a, { size: t, disabled: a });
                  case "VIREX.jpg":
                     return St.a.createElement(bi.a, { size: t, disabled: a });
                  case "OZONETECH.jpg":
                     return St.a.createElement(fi.a, { size: t, disabled: a });
                  case "lavage-rouleau.jpg":
                     return St.a.createElement(hi.a, { size: t, disabled: a });
                  case "parking-exterieur.jpg":
                     return St.a.createElement(Oi.a, { size: t, disabled: a });
                  default:
                     return "";
               }
            },
            yi = Object(wt.d)()(function (e) {
               var t = e.t,
                  a = e.service,
                  n = e.selected,
                  r = e.enabledByDefault,
                  i = e.onToggleService,
                  o = Object(kt.useRef)(null),
                  c = function () {
                     return i(a.id, n);
                  },
                  s =
                     0 === a.price
                        ? t("included")
                        : "".concat(a.price, "\u20ac"),
                  l = a.isDisabled,
                  u = fr()("service", { disabled: l, selected: n }),
                  d = t(
                     n
                        ? "booking-services_remove_service"
                        : "booking-services_add_service"
                  );
               return St.a.createElement(
                  "div",
                  {
                     className: u,
                     onClick: c,
                     role: "button",
                     "aria-pressed": n,
                     tabIndex: "0",
                  },
                  St.a.createElement(
                     "div",
                     { className: "informations" },
                     a.image && Ci(a.image, 35, l),
                     St.a.createElement("h4", null, a.label),
                     l &&
                        St.a.createElement(ka.Tooltip, {
                           label: t("unavailable"),
                           type: "blue",
                        }),
                     St.a.createElement(
                        "span",
                        {
                           role: "presentation",
                           className: "see-more",
                           onClick: function (e) {
                              e.preventDefault(),
                                 e.stopPropagation(),
                                 o.current.openModal();
                           },
                        },
                        St.a.createElement(
                           "span",
                           null,
                           t("booking-know_more")
                        ),
                        St.a.createElement(zr.a, { size: 16 })
                     )
                  ),
                  St.a.createElement(
                     "div",
                     { className: "choose" },
                     St.a.createElement("span", { className: "price" }, s),
                     n
                        ? St.a.createElement(
                             ka.ButtonIcon,
                             null,
                             St.a.createElement(qr.a, {
                                size: 18,
                                width: "100%",
                             })
                          )
                        : St.a.createElement(
                             ka.ButtonIcon,
                             { disabled: a.isDisabled },
                             St.a.createElement(Jr.a, {
                                size: 18,
                                width: "100%",
                             })
                          )
                  ),
                  St.a.createElement(ka.ModalService, {
                     ref: o,
                     icon: Ci(a.image, 45),
                     name: a.label,
                     price: s,
                     description: a.description,
                     isDisabled: l,
                     buttonProps: !r && {
                        label: d,
                        handleClick: function () {
                           o.current.closeModal(), c();
                        },
                     },
                  })
               );
            }),
            ki = Object(wt.d)()(function (e) {
               var t = e.t,
                  a = e.services,
                  n = e.summary,
                  r = e.enabled,
                  i = e.onToggleService,
                  o = e.departure,
                  c = e.arrival,
                  s = Object(kt.useState)(1),
                  l = Object(P.a)(s, 2),
                  u = l[0],
                  d = (l[1], Math.ceil(a.length / 6)),
                  p = a,
                  m = function (e) {
                     var t = !!r && r.has(e.id),
                        a =
                           !!n &&
                           n.services
                              .map(function (e) {
                                 return e.id;
                              })
                              .indexOf(e.id) > -1;
                     return t || a;
                  },
                  f =
                     (fr()("previous-page", { disabled: 1 === u }),
                     fr()("next-page", { disabled: u === d }),
                     function (e) {
                        return e && "" !== e;
                     });
               return St.a.createElement(
                  "div",
                  { className: "AvailableServices ".concat("") },
                  a && a.length > 0
                     ? St.a.createElement(
                          St.a.Fragment,
                          null,
                          St.a.createElement(
                             "div",
                             { className: "services" },
                             p.map(function (e) {
                                return St.a.createElement(yi, {
                                   key: e.id,
                                   service: e,
                                   selected: m(e),
                                   onToggleService: i,
                                   enabledByDefault: e.enabledByDefault,
                                });
                             })
                          ),
                          St.a.createElement(St.a.Fragment, null)
                       )
                     : St.a.createElement(
                          "div",
                          { className: "no-services" },
                          f(o.site) &&
                             f(o.date) &&
                             f(o.hour) &&
                             f(c.site) &&
                             f(c.date) &&
                             f(c.hour)
                             ? t("booking-services_no-services-available")
                             : t("booking-services_fill-details-before")
                       )
               );
            }),
            Si = function (e) {
               var t = e.t,
                  a = e.worker;
               return St.a.createElement(
                  "div",
                  null,
                  St.a.createElement("h3", null, t("booking-worker")),
                  St.a.createElement(
                     "div",
                     { className: "message-highlight grey" },
                     St.a.createElement(
                        "p",
                        null,
                        t("booking-you_will_order_for_worker"),
                        " ",
                        a.name,
                        ", ",
                        a.business
                     )
                  ),
                  St.a.createElement("hr", null)
               );
            },
            ji = function (e) {
               var t = e.t,
                  a = e.companies,
                  n = e.business,
                  r = e.worker,
                  i = e.onBusinessSelected;
               if (r) return St.a.createElement(Si, { t: t, worker: r });
               if (a.length) {
                  var o = function (e) {
                     return e.id.toString() === n;
                  };
                  return St.a.createElement(
                     "div",
                     null,
                     St.a.createElement("h3", null, t("booking-trip_type")),
                     St.a.createElement(
                        "div",
                        { className: "tripsType" },
                        St.a.createElement(
                           "div",
                           { className: "radio" },
                           St.a.createElement(
                              "label",
                              { htmlFor: "business_perso" },
                              St.a.createElement("input", {
                                 type: "radio",
                                 id: "business_perso",
                                 name: "business",
                                 value: "personnal",
                                 onChange: function () {
                                    return i();
                                 },
                                 checked: 0 === a.filter(o).length,
                              }),
                              St.a.createElement("span", {
                                 className: "checkmark",
                              }),
                              t("booking-personal")
                           )
                        ),
                        a.map(function (e, a) {
                           return St.a.createElement(
                              "div",
                              { className: "radio", key: e.id },
                              St.a.createElement(
                                 "label",
                                 { htmlFor: "business_".concat(a) },
                                 St.a.createElement("input", {
                                    type: "radio",
                                    id: "business_".concat(a),
                                    name: "business",
                                    value: e.id,
                                    onChange: function () {
                                       return i(e.id.toString());
                                    },
                                    checked: o(e),
                                 }),
                                 St.a.createElement("span", {
                                    className: "checkmark",
                                 }),
                                 "".concat(t("booking-for"), " ").concat(e.name)
                              )
                           );
                        })
                     )
                  );
               }
               return null;
            },
            _i = function (e) {
               var t = e.error;
               return t
                  ? St.a.createElement("div", { className: "message alert" }, t)
                  : null;
            },
            wi = (function (e) {
               Object(L.a)(a, e);
               var t = Object(T.a)(a);
               function a() {
                  var e;
                  Object(S.a)(this, a);
                  for (
                     var n = arguments.length, r = new Array(n), i = 0;
                     i < n;
                     i++
                  )
                     r[i] = arguments[i];
                  return (
                     ((e = t.call.apply(t, [this].concat(r))).isTripValid =
                        function (t) {
                           var a = (0, e.props.t)(
                              "booking-trip_unknown_number_sel"
                           );
                           return (
                              !!t.tripNumber &&
                              t.tripNumber !== a &&
                              !ie()(t.tripDetail)
                           );
                        }),
                     (e.isTripForced = function (t) {
                        var a = (0, e.props.t)(
                           "booking-trip_unknown_number_sel"
                        );
                        return (
                           !!t.tripNumber &&
                           t.tripNumber !== a &&
                           ie()(t.tripDetail)
                        );
                     }),
                     (e.isTripUnknown = function (t) {
                        var a = (0, e.props.t)(
                           "booking-trip_unknown_number_sel"
                        );
                        return (
                           !!t.tripNumber &&
                           t.tripNumber === a &&
                           ie()(t.tripDetail)
                        );
                     }),
                     e
                  );
               }
               return (
                  Object(j.a)(a, [
                     {
                        key: "componentDidMount",
                        value: function () {
                           var e = this,
                              t = this.props,
                              a = t.departure,
                              n = t.arrival,
                              r = t.fetchPrerequisites,
                              i = t.persistCart,
                              o = t.tripActions,
                              s = o.fetchTripInfos,
                              l = o.selectTripInfos,
                              p = o.forceTripInfos,
                              m = o.toggleUnknownTripInfos;
                           i(),
                              r(),
                              s(
                                 "start",
                                 a.site,
                                 u()(a.date).format("DD/MM/YYYY"),
                                 a.tripNumber
                              ),
                              s(
                                 "end",
                                 n.site,
                                 u()(n.date).format("DD/MM/YYYY"),
                                 n.tripNumber
                              ),
                              this.isTripValid(a) && l("start"),
                              this.isTripForced(a) && p("start"),
                              this.isTripUnknown(a) && m("start"),
                              this.isTripValid(n) && l("end"),
                              this.isTripForced(n) && p("end"),
                              this.isTripUnknown(n) && m("end"),
                              c()("#ScrollableMenu .ScrollableLink")[0].click(),
                              setTimeout(function () {
                                 window.dispatchEvent(
                                    new CustomEvent("disableLink", {
                                       detail: "order-services",
                                    })
                                 ),
                                    window.dispatchEvent(
                                       new CustomEvent("disableLink", {
                                          detail: "LoginForm",
                                       })
                                    ),
                                    window.dispatchEvent(
                                       new CustomEvent("disableLink", {
                                          detail: "order-informations",
                                       })
                                    ),
                                    window.dispatchEvent(
                                       new CustomEvent("disableLink", {
                                          detail: "order-options",
                                       })
                                    );
                              }, 200),
                              setTimeout(function () {
                                 var t =
                                    document.querySelector("#ValidateForm");
                                 t &&
                                    t.addEventListener("submit", function () {
                                       !(function (e) {
                                          var t, a;
                                          d("start_checkout", {
                                             currency: "EUR",
                                             value: e.total,
                                             coupon:
                                                "Valid" ===
                                                (null === (t = e.voucher) ||
                                                void 0 === t
                                                   ? void 0
                                                   : t.status)
                                                   ? null === (a = e.voucher) ||
                                                     void 0 === a
                                                      ? void 0
                                                      : a.code
                                                   : null,
                                          });
                                       })(e.props.summary);
                                    });
                              }, 1e3);
                        },
                     },
                     {
                        key: "componentDidUpdate",
                        value: function (e) {
                           var t = this.props,
                              a = t.departure,
                              n = t.arrival,
                              r = t.options,
                              i = t.business,
                              o = t.persistCart,
                              c = t.fetchServices;
                           (e.departure === a &&
                              e.arrival === n &&
                              e.options === r &&
                              e.business === i) ||
                              (o(), e.business !== i && c());
                        },
                     },
                     {
                        key: "render",
                        value: function () {
                           var e = this.props,
                              t = e.t,
                              a = e.sites,
                              n = e.arrivalSites,
                              r = e.services,
                              i = e.departure,
                              o = e.departureSlots,
                              c = e.arrival,
                              s = e.arrivalSlots,
                              l = e.options,
                              u = e.worker,
                              d = e.business,
                              p = e.companies,
                              m = e.error,
                              f = e.forceValidation,
                              v = e.summary,
                              b = e.toggleOption,
                              g = e.isFetchingDepartureSlots,
                              h = e.isFetchingArrivalSlots,
                              E = e.trip,
                              O = e.tripActions,
                              C = e.onDepartureChanged,
                              y = e.onArrivalChanged,
                              k = e.updateBusiness,
                              S = r.filter(function (e) {
                                 return !e.isInsurance;
                              });
                           return St.a.createElement(
                              "div",
                              { className: "booking" },
                              St.a.createElement(
                                 "div",
                                 {
                                    id: "order-detail",
                                    className: "order-content",
                                 },
                                 St.a.createElement(
                                    "h2",
                                    null,
                                    "1. ".concat(t("booking-your_order"))
                                 ),
                                 St.a.createElement(
                                    "div",
                                    { className: "booking-content" },
                                    St.a.createElement(_i, { error: m }),
                                    St.a.createElement(
                                       "div",
                                       { className: "travel" },
                                       St.a.createElement(
                                          "div",
                                          { className: "departure" },
                                          St.a.createElement(
                                             "div",
                                             { className: "title-form" },
                                             St.a.createElement(
                                                "h3",
                                                null,
                                                t("booking-departure")
                                             )
                                          ),
                                          St.a.createElement(yr, {
                                             content: i,
                                             sites: a,
                                             slots: o,
                                             forceValidation: f,
                                             onChange: function (e) {
                                                return C(e, !1);
                                             },
                                             isFetchingSlots: g,
                                             trip: E.start,
                                             actions: O,
                                          })
                                       ),
                                       St.a.createElement(
                                          "div",
                                          {
                                             className: "arrival ".concat(
                                                u || p.length
                                                   ? ""
                                                   : " no-border"
                                             ),
                                          },
                                          St.a.createElement(
                                             "div",
                                             { className: "title-form" },
                                             St.a.createElement(
                                                "h3",
                                                null,
                                                t("booking-arrival")
                                             )
                                          ),
                                          St.a.createElement(Sr, {
                                             content: c,
                                             sites: n,
                                             slots: s,
                                             forceValidation: f,
                                             onChange: y,
                                             isFetchingSlots: h,
                                             trip: E.end,
                                             actions: O,
                                          })
                                       )
                                    ),
                                    St.a.createElement(ji, {
                                       t: t,
                                       companies: p,
                                       business: d,
                                       worker: u,
                                       onBusinessSelected: k,
                                    })
                                 )
                              ),
                              St.a.createElement(
                                 "div",
                                 {
                                    id: "order-services",
                                    className: "order-content",
                                 },
                                 !m &&
                                    St.a.createElement(
                                       St.a.Fragment,
                                       null,
                                       St.a.createElement(
                                          "h2",
                                          null,
                                          "2. ".concat(t("booking-services"))
                                       ),
                                       St.a.createElement(
                                          "div",
                                          { className: "booking-content" },
                                          St.a.createElement(ki, {
                                             departure: i,
                                             arrival: c,
                                             services: S,
                                             enabled: l,
                                             summary: v,
                                             onToggleService: b,
                                          })
                                       )
                                    )
                              )
                           );
                        },
                     },
                  ]),
                  a
               );
            })(kt.PureComponent),
            Li = Object(zn.a)(
               Xn,
               Wn,
               Object(fn.b)(
                  function (e) {
                     return {
                        services: Re(e),
                        options: dt(e),
                        worker: vt(e),
                        business: ft(e),
                        summary: pt(e),
                        companies: jn(e),
                        error: bt(e),
                     };
                  },
                  {
                     fetchPrerequisites: function () {
                        return function (e) {
                           e(function (e, t) {
                              var a = t().booking,
                                 n = a.departure,
                                 r = a.arrival;
                              n.site && n.date && e(Z(n.site, n.date)),
                                 r.site && r.date && e(G(r.site, r.date));
                           }),
                              e(ee()),
                              e(function (e, t) {
                                 t().business.isFetching ||
                                    (e({ type: "FETCH_COMPANIES" }),
                                    V.getCompanies().then(function (t) {
                                       200 === t.status
                                          ? t.json().then(function (t) {
                                               return e(te(t));
                                            })
                                          : e(te([]));
                                    }));
                              }),
                              e(we());
                        };
                     },
                     fetchServices: ee,
                     toggleOption: Te,
                     persistCart: Ie,
                     updateBusiness: function (e) {
                        return { type: "UPDATE_BUSINESS", business: e };
                     },
                  }
               ),
               Object(wt.d)()
            )(wi),
            Ti = a(294),
            Ni = a.n(Ti),
            Di = a(295),
            Ai = a.n(Di),
            Ii = a(296),
            Mi = a.n(Ii),
            Fi = a(297),
            Ri = a.n(Fi),
            xi = Object(wt.d)()(function (e) {
               var t = e.t,
                  a = e.sites,
                  n = e.departure,
                  r = e.arrival,
                  i = fe(a, n.site),
                  o = fe(a, r.site);
               if (i || o) {
                  var c = function (e) {
                        return e.date ? pe(e.date) : "-";
                     },
                     s = function (e) {
                        return e.hour || "-";
                     };
                  return St.a.createElement(
                     "ul",
                     { className: "travel" },
                     i &&
                        St.a.createElement(
                           "li",
                           { className: i.type },
                           i &&
                              o &&
                              St.a.createElement("span", {
                                 className: "travel-bar",
                              }),
                           "airport" === i.type &&
                              St.a.createElement(Ai.a, { size: 20 }),
                           "station" === i.type &&
                              St.a.createElement(Ri.a, { size: 20 }),
                           St.a.createElement(
                              "span",
                              { className: "travel-name" },
                              i.name
                           ),
                           St.a.createElement(
                              "em",
                              null,
                              St.a.createElement("strong", null, c(n)),
                              " ",
                              t("booking-at"),
                              " ",
                              St.a.createElement("strong", null, s(n))
                           )
                        ),
                     o &&
                        St.a.createElement(
                           "li",
                           { className: o.type },
                           "airport" === o.type &&
                              St.a.createElement(Ni.a, { size: 20 }),
                           "station" === o.type &&
                              St.a.createElement(Mi.a, { size: 20 }),
                           St.a.createElement(
                              "span",
                              { className: "travel-name" },
                              o.name
                           ),
                           St.a.createElement(
                              "em",
                              null,
                              St.a.createElement("strong", null, c(r)),
                              " ",
                              t("booking-at"),
                              " ",
                              St.a.createElement("strong", null, s(r))
                           )
                        )
                  );
               }
               return null;
            }),
            Hi = Object(wt.d)()(function (e) {
               var t,
                  a = e.t,
                  n = e.departure,
                  r = e.arrival,
                  i = e.sites,
                  o = e.summary,
                  c = o && o.isDiscountSitePromotion,
                  s = c && Ce(o.baseWithoutDiscount, o.base),
                  l = s ? "price-amount without-promotion" : "price-amount",
                  u = s ? "price-span promotion-span" : "price-span";
               return St.a.createElement(
                  "div",
                  { className: "price" },
                  St.a.createElement(
                     "span",
                     { className: "parking-title" },
                     a("booking-park_price")
                  ),
                  St.a.createElement(xi, {
                     sites: i,
                     departure: n,
                     arrival: r,
                  }),
                  St.a.createElement(
                     "span",
                     { className: u },
                     St.a.createElement(
                        "strong",
                        { className: l },
                        "".concat(
                           (function () {
                              if (c) {
                                 var e = s ? o.baseWithoutDiscount : o.base;
                                 return me(e);
                              }
                              return o && !c ? me(o.baseWithoutDiscount) : "--";
                           })(),
                           " \u20ac"
                        )
                     ),
                     s &&
                        St.a.createElement(function () {
                           return St.a.createElement(
                              "strong",
                              { className: "price-amount promotion" },
                              "".concat(me(o.base), " \u20ac")
                           );
                        }, null)
                  ),
                  o &&
                     ((t = o.switch),
                     function (e) {
                        return null != t ? e(t) : null;
                     })(function (e) {
                        return St.a.createElement(
                           "span",
                           { className: "switch-price" },
                           St.a.createElement(
                              "span",
                              { className: "switch-title" },
                              "+ ".concat(a("booking-switch_price"))
                           ),
                           St.a.createElement(
                              "strong",
                              null,
                              "".concat(me(e), " \u20ac")
                           )
                        );
                     })
               );
            }),
            Pi = a(298),
            Bi = a.n(Pi),
            Yi = function (e) {
               var t = e.t,
                  a = e.service,
                  n = e.onUnchecked;
               return St.a.createElement(
                  "li",
                  { className: "service" },
                  St.a.createElement(Bi.a, {
                     size: 18,
                     onClick: function () {
                        return n(a.id);
                     },
                  }),
                  St.a.createElement("h3", null, a.label),
                  St.a.createElement(
                     "div",
                     { className: "service-price" },
                     0 === a.price
                        ? t("included")
                        : "+".concat(me(a.price), " \u20ac")
                  )
               );
            },
            Ui = Object(wt.d)()(function (e) {
               var t = e.t,
                  a = e.services,
                  n = e.onUnchecked;
               return a.length > 0
                  ? St.a.createElement(
                       "ul",
                       { className: "services" },
                       a.map(function (e) {
                          return St.a.createElement(Yi, {
                             t: t,
                             key: e.id,
                             service: e,
                             onUnchecked: n,
                          });
                       })
                    )
                  : St.a.createElement(
                       "ul",
                       { className: "services" },
                       St.a.createElement(
                          "li",
                          { className: "service no-services" },
                          St.a.createElement(
                             "h3",
                             null,
                             t("booking-no_selected_services")
                          )
                       )
                    );
            }),
            Vi = function (e) {
               return e && "Valid" !== e.status;
            },
            Zi = Object(wt.d)()(function (e) {
               var t,
                  a = e.t,
                  n = e.value,
                  r = e.status,
                  i = e.onChange,
                  o = n && n.length > 0 && (t = r) && "Valid" === t.status,
                  c = n && n.length > 0 && Vi(r);
               return St.a.createElement(
                  "div",
                  { className: "booking-voucher" },
                  St.a.createElement(ka.InputCode, {
                     id: "voucher",
                     name: "voucher",
                     label: a("booking-voucher"),
                     placeholder: a("booking-voucher_placeholder"),
                     value: n || "",
                     onChange: function (e) {
                        e.target instanceof HTMLInputElement &&
                           i(e.target.value);
                     },
                     promo: o && me(r.discount),
                     success: o,
                     fail: c,
                  }),
                  r &&
                     n &&
                     n.length > 0 &&
                     (function (e, t) {
                        return Vi(t)
                           ? St.a.createElement(
                                "em",
                                null,
                                (function (e, t) {
                                   switch (t) {
                                      case "RequireAuthentication":
                                         return e(
                                            "booking-voucher_error_require_auth"
                                         );
                                      case "AlreadyUsed":
                                         return e(
                                            "booking-voucher_error_already_used"
                                         );
                                      case "NotApplicable":
                                         return e(
                                            "booking-voucher_not_applicable"
                                         );
                                      case "NotFound":
                                      default:
                                         return e(
                                            "booking-voucher_error_not_found"
                                         );
                                   }
                                })(e, t.status)
                             )
                           : null;
                     })(a, r)
               );
            }),
            Gi = Object(wt.d)()(function (e) {
               var t = e.t,
                  a = e.discount,
                  n = e.isDiscountSitePromotion;
               return a && !n
                  ? St.a.createElement(
                       "div",
                       { className: "business-voucher" },
                       St.a.createElement(
                          "div",
                          { className: "voucher-content" },
                          St.a.createElement(
                             "span",
                             { className: "code" },
                             t("booking-business_discount")
                          ),
                          St.a.createElement(
                             "div",
                             { className: "voucher-price" },
                             "- ".concat(me(a), " \u20ac")
                          )
                       )
                    )
                  : "";
            }),
            zi = function (e, t) {
               return e.services
                  .map(function (e) {
                     return t.find(function (t) {
                        return t.id === e.id;
                     });
                  })
                  .filter(function (e) {
                     return void 0 !== e;
                  });
            },
            Ki = function (e) {
               var t = "--",
                  a = "--";
               if (e) {
                  var n = me(e.total).split("."),
                     r = Object(P.a)(n, 2);
                  (t = r[0]), (a = r[1]);
               }
               return St.a.createElement(
                  "h3",
                  null,
                  St.a.createElement("em", null, t),
                  ",",
                  St.a.createElement("small", null, a),
                  " \u20ac"
               );
            };
         var Ji = Object(zn.a)(
               Object(fn.b)(
                  function (e) {
                     return Object(s.a)(
                        Object(s.a)(Object(s.a)({}, e.sites), e.booking),
                        {},
                        {
                           services: Re(e),
                           options: dt(e),
                           business: ft(e),
                           summary: pt(e),
                           voucher: mt(e),
                        }
                     );
                  },
                  {
                     toggleOption: Te,
                     updateVoucher: function (e) {
                        return function (t) {
                           t({ type: "UPDATE_VOUCHER", voucher: e }), Me(t);
                        };
                     },
                  }
               ),
               Object(wt.d)()
            )(function (e) {
               var t = e.t,
                  a = e.sites,
                  n = e.services,
                  r = e.departure,
                  i = e.arrival,
                  o = e.options,
                  c = e.summary,
                  s = e.business,
                  l = e.voucher,
                  u = e.toggleOption,
                  d = e.updateVoucher,
                  p = c
                     ? zi(c, n)
                     : n.filter(function (e) {
                          return o && o.has(e.id);
                       }),
                  m =
                     c && p && p.length > 0
                        ? t("booking-total_notice_with_services")
                        : t("booking-total_notice");
               return St.a.createElement(
                  "div",
                  { className: "FullBookingSummary" },
                  St.a.createElement("h2", null, t("booking-summary_title")),
                  St.a.createElement(
                     "div",
                     { className: "summary show" },
                     St.a.createElement(
                        "div",
                        { className: "content" },
                        St.a.createElement("h2", null, t("booking-your_trip")),
                        St.a.createElement(Hi, {
                           sites: a,
                           departure: r,
                           arrival: i,
                           summary: c,
                        }),
                        St.a.createElement(
                           "h2",
                           null,
                           t("booking-your_services")
                        ),
                        St.a.createElement(Ui, { services: p, onUnchecked: u }),
                        !s &&
                           St.a.createElement(Zi, {
                              value: l,
                              status: c && c.voucher,
                              onChange: d,
                           }),
                        c &&
                           c.valetDiscount &&
                           St.a.createElement(Gi, {
                              discount: c.valetDiscount,
                              isDiscountSitePromotion:
                                 c.isDiscountSitePromotion,
                           })
                     ),
                     St.a.createElement(
                        "div",
                        { className: "content final-price" },
                        St.a.createElement(
                           "h4",
                           null,
                           t("booking-total_amount"),
                           St.a.createElement("span", null, m)
                        ),
                        Ki(c)
                     )
                  )
               );
            }),
            Wi = a(178),
            qi = a.n(Wi),
            Qi = a(299),
            Xi = a.n(Qi),
            $i = a(300),
            eo = a.n($i),
            to = function (e) {
               var t = e.optionType,
                  a = (function () {
                     var e = { logoName: "", logoSrc: "" };
                     switch (t) {
                        case "basic":
                           (e.logoName = "paper-plane"), (e.logoSrc = qi.a);
                           break;
                        case "comfort":
                           (e.logoName = "plane"), (e.logoSrc = Xi.a);
                           break;
                        case "premium":
                           (e.logoName = "rocket"), (e.logoSrc = eo.a);
                           break;
                        default:
                           (e.logoName = "paper-plane"), (e.logoSrc = qi.a);
                     }
                     return e;
                  })();
               return St.a.createElement(
                  "div",
                  { className: "optionLogo" },
                  St.a.createElement("img", { src: a.logoSrc, alt: a.logoName })
               );
            },
            ao = Object(wt.d)()(function (e) {
               var t = e.t,
                  a = e.optionType,
                  n = e.isRecommanded,
                  r = "option-".concat(a, "-title"),
                  i = "option-".concat(a, "-recommanded");
               return St.a.createElement(
                  "div",
                  { className: "optionTitle" },
                  St.a.createElement(
                     "span",
                     { "data-cy": r },
                     t("booking-options_".concat(a))
                  ),
                  n &&
                     St.a.createElement(
                        "div",
                        { className: "optionRecommand", "data-cy": i },
                        t("tooltip-recommanded")
                     )
               );
            }),
            no = function (e) {
               var t = e.optionType,
                  a = e.price,
                  n = "option-".concat(t, "-price");
               return St.a.createElement(
                  "div",
                  { className: "optionPriceWrapper" },
                  St.a.createElement(
                     "div",
                     { className: "optionPrice", "data-cy": n },
                     me(a, !0),
                     "\u20ac"
                  )
               );
            },
            ro = Object(wt.d)()(function (e) {
               var t = e.t,
                  a = e.optionType;
               return St.a.createElement(
                  "ul",
                  { className: "optionDetails" },
                  St.a.createElement(
                     "li",
                     null,
                     St.a.createElement(
                        "span",
                        { className: "optionDetailsCheck" },
                        St.a.createElement(
                           "svg",
                           {
                              className: "icon icon-tick",
                              width: "14px",
                              height: "14px",
                              viewBox: "0 0 24 24 ",
                           },
                           St.a.createElement(
                              "g",
                              null,
                              St.a.createElement("path", {
                                 d: "M7.448 16.102l-4.16-3.966L1 14.316l5.49 5.235.007-.007 1.002.956L23 5.723 20.668 3.5z",
                              })
                           )
                        )
                     ),
                     St.a.createElement(
                        "span",
                        { className: "optionDetailsContent" },
                        t("booking-options_label_parking")
                     )
                  ),
                  St.a.createElement(
                     "li",
                     null,
                     St.a.createElement(
                        "span",
                        { className: "optionDetailsCheck" },
                        St.a.createElement(
                           "svg",
                           {
                              className: "icon icon-tick",
                              width: "14px",
                              height: "14px",
                              viewBox: "0 0 24 24 ",
                           },
                           St.a.createElement(
                              "g",
                              null,
                              St.a.createElement("path", {
                                 d: "M7.448 16.102l-4.16-3.966L1 14.316l5.49 5.235.007-.007 1.002.956L23 5.723 20.668 3.5z",
                              })
                           )
                        )
                     ),
                     St.a.createElement(
                        "span",
                        { className: "optionDetailsContent" },
                        t("booking-options_label_valet")
                     )
                  ),
                  St.a.createElement(
                     "li",
                     null,
                     St.a.createElement(
                        function () {
                           switch (a) {
                              case "basic":
                                 return St.a.createElement(
                                    "span",
                                    {
                                       className: "optionDetailsCheck no-check",
                                    },
                                    St.a.createElement(
                                       "svg",
                                       {
                                          className: "icon icon-close",
                                          width: "14px",
                                          height: "14px",
                                          viewBox: "0 0 24 24 ",
                                       },
                                       St.a.createElement(
                                          "g",
                                          null,
                                          St.a.createElement("path", {
                                             d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
                                          })
                                       )
                                    )
                                 );
                              case "comfort":
                              case "premium":
                                 return St.a.createElement(
                                    "span",
                                    { className: "optionDetailsCheck" },
                                    St.a.createElement(
                                       "svg",
                                       {
                                          className: "icon icon-tick",
                                          width: "14px",
                                          height: "14px",
                                          viewBox: "0 0 24 24 ",
                                       },
                                       St.a.createElement(
                                          "g",
                                          null,
                                          St.a.createElement("path", {
                                             d: "M7.448 16.102l-4.16-3.966L1 14.316l5.49 5.235.007-.007 1.002.956L23 5.723 20.668 3.5z",
                                          })
                                       )
                                    )
                                 );
                              default:
                                 return null;
                           }
                        },
                        { optionType: a }
                     ),
                     St.a.createElement(
                        "span",
                        { className: "optionDetailsContent" },
                        t("booking-options_label_option_".concat(a))
                     )
                  )
               );
            }),
            io = (function (e) {
               Object(L.a)(a, e);
               var t = Object(T.a)(a);
               function a(e) {
                  var n;
                  return (
                     Object(S.a)(this, a),
                     ((n = t.call(this, e)).onClickToggleOption = function () {
                        var e = n.props.toggleOption;
                        n.setState({ isLoading: !0 }),
                           "function" === typeof e && e();
                     }),
                     (n.onClickRemoveOption = function () {
                        var e = n.props.removeOption;
                        n.setState({ isLoading: !0 }),
                           "function" === typeof toggleOption && e();
                     }),
                     (n.state = { isLoading: !1 }),
                     n
                  );
               }
               return (
                  Object(j.a)(a, [
                     {
                        key: "componentWillReceiveProps",
                        value: function (e) {
                           this.state.isLoading &&
                              !e.isSelected &&
                              this.setState({ isLoading: !1 });
                        },
                     },
                     {
                        key: "render",
                        value: function () {
                           var e = this.props,
                              t = e.t,
                              a = e.optionType,
                              n = e.isSelected,
                              r = "option-".concat(a, "-selected-button"),
                              i = "option-".concat(a, "-unselected-button"),
                              o = this.onClickToggleOption,
                              c = this.onClickRemoveOption,
                              s = this.state.isLoading;
                           function l() {
                              return St.a.createElement(
                                 "div",
                                 { className: "optionButton" },
                                 St.a.createElement(
                                    "button",
                                    {
                                       type: "button",
                                       className: "ButtonIcon selected",
                                       onClick: c,
                                       "data-cy": r,
                                    },
                                    St.a.createElement(
                                       "svg",
                                       {
                                          className: "icon icon-tick",
                                          width: "18px",
                                          height: "18px",
                                          viewBox: "0 0 24 24 ",
                                       },
                                       St.a.createElement(
                                          "g",
                                          null,
                                          St.a.createElement("path", {
                                             d: "M7.448 16.102l-4.16-3.966L1 14.316l5.49 5.235.007-.007 1.002.956L23 5.723 20.668 3.5z",
                                          })
                                       )
                                    )
                                 )
                              );
                           }
                           function u() {
                              return !n && s
                                 ? St.a.createElement(
                                      "div",
                                      { className: "optionButton" },
                                      St.a.createElement(
                                         "button",
                                         {
                                            type: "button",
                                            className:
                                               "Button loading with-arrow",
                                         },
                                         St.a.createElement("div", {
                                            className: "loader",
                                         }),
                                         St.a.createElement(
                                            "svg",
                                            {
                                               className: "icon icon-arrow",
                                               width: "18px",
                                               height: "18px",
                                               viewBox: "0 0 24 24 ",
                                            },
                                            St.a.createElement(
                                               "g",
                                               null,
                                               St.a.createElement("path", {
                                                  d: "M16.898 10.43l-4.782-4.71L14.37 3.5l6.376 6.28L23 12l-8.63 8.5-2.254-2.22 4.782-4.71H1v-3.14h15.898z",
                                               })
                                            )
                                         )
                                      )
                                   )
                                 : St.a.createElement(
                                      "div",
                                      { className: "optionButton" },
                                      St.a.createElement(
                                         "button",
                                         {
                                            type: "button",
                                            className: "Button",
                                            "data-service-id": "",
                                            onClick: o,
                                            "data-cy": i,
                                         },
                                         St.a.createElement(
                                            "span",
                                            null,
                                            " ",
                                            t("select")
                                         )
                                      )
                                   );
                           }
                           return n
                              ? St.a.createElement(l, null)
                              : St.a.createElement(u, null);
                        },
                     },
                  ]),
                  a
               );
            })(St.a.Component),
            oo = Object(wt.d)()(io),
            co = Object(wt.d)()(function (e) {
               var t = e.t,
                  a = e.optionType,
                  n = e.showMoreInformation,
                  r = "option-".concat(a, "-show-more-button");
               return St.a.createElement(
                  "span",
                  {
                     className: "optionShowMore",
                     onClick: n,
                     role: "button",
                     tabIndex: 0,
                     onKeyDown: n,
                     "data-cy": r,
                  },
                  St.a.createElement("span", null, t("booking-know_more")),
                  St.a.createElement(
                     "svg",
                     {
                        className: "icon icon-chevron",
                        width: "16px",
                        height: "16px",
                        viewBox: "0 0 24 24 ",
                     },
                     St.a.createElement(
                        "g",
                        null,
                        St.a.createElement("path", {
                           d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",
                        })
                     )
                  )
               );
            }),
            so = Object(wt.d)()(function (e) {
               var t = e.t,
                  a = e.optionType,
                  n = e.isMoreInfoExpanded,
                  r = "option-".concat(a, "-know-more");
               return n
                  ? St.a.createElement(
                       "p",
                       { className: "optionMore", "data-cy": r },
                       t("booking-options_know_more_".concat(a))
                    )
                  : null;
            }),
            lo = (function (e) {
               Object(L.a)(a, e);
               var t = Object(T.a)(a);
               function a(e) {
                  var n;
                  return (
                     Object(S.a)(this, a),
                     ((n = t.call(this, e)).showMore = function () {
                        n.setState(function (e) {
                           return { isMoreInfoExpanded: !e.isMoreInfoExpanded };
                        });
                     }),
                     (n.state = { isMoreInfoExpanded: !1 }),
                     n
                  );
               }
               return (
                  Object(j.a)(a, [
                     {
                        key: "render",
                        value: function () {
                           var e = this,
                              t = this.props,
                              a = t.addOption,
                              n = t.removeOption,
                              r = t.optionType,
                              i = t.price,
                              o = t.hasOption,
                              c = t.cancelServiceId,
                              s = t.isRecommanded,
                              l = this.state.isMoreInfoExpanded;
                           return St.a.createElement(
                              "div",
                              {
                                 className: (function () {
                                    switch (r) {
                                       case "basic":
                                          return "option optionBasic";
                                       case "comfort":
                                          return "option optionComfort";
                                       case "premium":
                                          return "option optionPremium";
                                       default:
                                          return "option";
                                    }
                                 })(),
                                 onClick: function () {
                                    c ? a(c, !1) : n();
                                 },
                                 role: "button",
                                 tabIndex: "0",
                                 "aria-pressed": o,
                              },
                              St.a.createElement(to, { optionType: r }),
                              St.a.createElement(ao, {
                                 optionType: r,
                                 isRecommanded: s,
                              }),
                              St.a.createElement(no, {
                                 optionType: r,
                                 price: i,
                              }),
                              St.a.createElement(ro, { optionType: r }),
                              St.a.createElement(oo, {
                                 optionType: r,
                                 isSelected: o,
                              }),
                              St.a.createElement("div", {
                                 className: "optionButtonSpacer",
                              }),
                              St.a.createElement(co, {
                                 optionType: r,
                                 showMoreInformation: function (t) {
                                    t.preventDefault(),
                                       t.stopPropagation(),
                                       e.showMore();
                                 },
                              }),
                              St.a.createElement(so, {
                                 optionType: r,
                                 isMoreInfoExpanded: l,
                              })
                           );
                        },
                     },
                  ]),
                  a
               );
            })(St.a.Component),
            uo = Object(wt.d)()(lo),
            po = (function (e) {
               Object(L.a)(a, e);
               var t = Object(T.a)(a);
               function a(e) {
                  var n;
                  return (
                     Object(S.a)(this, a),
                     ((n = t.call(this, e)).toggleSelectedOption = function (
                        e
                     ) {
                        (0, n.props.addOption)(e),
                           n.setState({ isBasicSelectOverriden: !1 });
                     }),
                     (n.removeSelectedOption = function () {
                        var e = n.props,
                           t = e.removeOption,
                           a = e.summary,
                           r = "";
                        a.hasCancellationOption &&
                           !a.isCancellationOptionFree &&
                           (r = a.cancellationOptionId),
                           t(r),
                           a.isCancellationOptionFree ||
                              n.setState({ isBasicSelectOverriden: !0 });
                     }),
                     (n.state = { isBasicSelectOverriden: !1 }),
                     (n.type = { basic: "basic", premium: "premium" }),
                     n
                  );
               }
               return (
                  Object(j.a)(a, [
                     {
                        key: "render",
                        value: function () {
                           var e = this.props,
                              t = e.summary,
                              a = e.services,
                              n = this.removeSelectedOption,
                              r = this.toggleSelectedOption,
                              i = this.state.isBasicSelectOverriden,
                              o = this.type,
                              c = a.filter(function (e) {
                                 return t.services
                                    .map(function (e) {
                                       return e.id;
                                    })
                                    .includes(e.id);
                              });
                           function s(e) {
                              return e
                                 ? !!t &&
                                      c
                                         .map(function (e) {
                                            return e.id;
                                         })
                                         .indexOf(e) > -1
                                 : !!t && 0 === c.length;
                           }
                           var l = !i && s(t.cancellationOptionId) && !s(""),
                              u = i || (s("") && !s(t.cancellationOptionId));
                           return St.a.createElement(
                              "div",
                              { className: "optionSelection" },
                              !t.isCancellationOptionFree &&
                                 St.a.createElement(uo, {
                                    optionType: o.basic,
                                    price: t.totalBasic,
                                    hasOption: u,
                                    addOption: r,
                                    removeOption: n,
                                    cancelServiceId: "",
                                 }),
                              St.a.createElement(uo, {
                                 optionType: o.premium,
                                 price: t.totalWithCancellation,
                                 hasOption: l,
                                 addOption: r,
                                 removeOption: n,
                                 cancelServiceId: t.cancellationOptionId,
                                 isRecommanded: !0,
                              })
                           );
                        },
                     },
                  ]),
                  a
               );
            })(St.a.Component),
            mo = Object(wt.d)()(po),
            fo = a(301),
            vo = a.n(fo);
         var bo = function (e) {
            var t = e.addOption,
               a = Object(wt.c)().t;
            return St.a.createElement(
               "div",
               { className: "grey-container-modal" },
               St.a.createElement(
                  "div",
                  { className: "upsellingModal" },
                  St.a.createElement(
                     "div",
                     { className: "upsellingModalTitle" },
                     St.a.createElement(vo.a, { size: 30 }),
                     St.a.createElement(
                        "p",
                        null,
                        a("booking-modal_upselling_insurance_title")
                     )
                  ),
                  St.a.createElement(
                     "p",
                     { className: "upsellingModalDescription" },
                     a("booking-modal_upselling_insurance_description")
                  ),
                  St.a.createElement(
                     "div",
                     { className: "upsellingModalCtaContainer" },
                     St.a.createElement(ka.Button, {
                        onClick: t,
                        primary: !0,
                        label: a(
                           "booking-modal_upselling_insurance_cta_accepted"
                        ),
                     }),
                     St.a.createElement(ka.Button, {
                        type: "submit",
                        secondary: !0,
                        label: a(
                           "booking-modal_upselling_insurance_cta_denied"
                        ),
                     })
                  )
               )
            );
         };
         var go = Object(zn.a)(
               Object(fn.b)(
                  function (e) {
                     return {
                        services: Re(e),
                        summary: pt(e),
                        businessId: ft(e),
                     };
                  },
                  { fetchServices: ee, toggleOption: Te, removeOption: Le }
               ),
               Object(wt.d)()
            )(function (e) {
               var t = e.t,
                  a = e.summary,
                  n = e.toggleOption,
                  r = e.removeOption,
                  i = e.services,
                  o = e.businessId,
                  c = Object(kt.useState)(!1),
                  s = Object(P.a)(c, 2),
                  l = s[0],
                  u = s[1],
                  d = i.filter(function (e) {
                     return e.isInsurance;
                  });
               return (
                  Object(kt.useEffect)(
                     function () {
                        var e = function (e) {
                              var t = a.isAnyInsuranceAvailable,
                                 n = a.hasCancellationOption,
                                 r = a.cancellationOptionId;
                              t && !n && r && !o && (e.preventDefault(), u(!0));
                           },
                           t = setTimeout(function () {
                              var t =
                                 document.querySelector("#validateBooking");
                              t && t.addEventListener("click", e);
                           }, 1e3);
                        return function () {
                           clearTimeout(t);
                        };
                     },
                     [a, o]
                  ),
                  a && a.isAnyInsuranceAvailable
                     ? St.a.createElement(
                          St.a.Fragment,
                          null,
                          l &&
                             St.a.createElement(bo, {
                                addOption: function () {
                                   n(
                                      null === a || void 0 === a
                                         ? void 0
                                         : a.cancellationOptionId,
                                      !1
                                   ),
                                      u(!1);
                                },
                             }),
                          St.a.createElement(
                             "div",
                             { id: "order-options", className: "orderOptions" },
                             St.a.createElement(
                                "h2",
                                null,
                                t("booking-options_title")
                             ),
                             St.a.createElement(mo, {
                                summary: a,
                                addOption: n,
                                removeOption: r,
                                services: d,
                             })
                          )
                       )
                     : null
               );
            }),
            ho = Object(wt.d)()(function (e) {
               var t = e.t,
                  a = e.sites,
                  n = e.departure,
                  r = e.arrival;
               if (n.site || r.site) {
                  var i = (function (e, t, a) {
                     var n = fe(e, t),
                        r = fe(e, a),
                        i = [
                           null === n || void 0 === n ? void 0 : n.maxHeight,
                           null === r || void 0 === r ? void 0 : r.maxHeight,
                        ].filter(function (e) {
                           return !!e;
                        });
                     return i.length > 0
                        ? Math.min.apply(Math, Object(Lt.a)(i))
                        : null;
                  })(a, n.site, r.site);
                  if (i) {
                     var o = me(i);
                     return St.a.createElement(
                        "div",
                        { className: "site-info" },
                        St.a.createElement(
                           "svg",
                           null,
                           St.a.createElement("use", {
                              xlinkHref: "#icon__info",
                           })
                        ),
                        ""
                           .concat(t("booking-park_max_height"), ": ")
                           .concat(o, " m. ")
                           .concat(t("booking-park_max_height_info"))
                     );
                  }
               }
               return null;
            }),
            Eo = function () {
               return c()("#ValidateForm");
            },
            Oo = function () {
               return c()("#order-informations");
            },
            Co = function () {
               return c()("#order-total");
            };
         function yo() {
            var e = c()("#LoginForm"),
               t = c()("#SignupForm"),
               a = function (a) {
                  a.preventDefault(),
                     e.hasClass("active")
                        ? (e.removeClass("active"), t.addClass("active"))
                        : (e.addClass("active"), t.removeClass("active"));
               };
            t.find(".link a").on("click", a),
               e.find(".link a").on("click", function (e) {
                  d("sign_up_cart", {}), a(e);
               }),
               c()("#CartSignInForm").on("submit", function () {
                  d("login_cart", {});
               }),
               c()("#CartSignUpForm").on("submit", function () {
                  d("sign_up_cart_process_end", {});
               });
         }
         function ko() {
            var e = Eo().find(".paymentOptions"),
               t = e.find(".creditCard"),
               a = e.find(".useCredit"),
               n = c()("#CreditsCount"),
               r = n.attr("data-available") || "0",
               i = n.find('input[name="creditsCount"]'),
               o = c()("#CartPrice"),
               s = o.find(".byCard"),
               l = o.find(".byCredits"),
               u = function (e, t) {
                  e.removeClass("active"), t.addClass("active");
               },
               d = function (e, t, a) {
                  return (
                     !t.hasClass("active") &&
                     (e.removeClass("active"),
                     t.addClass("active"),
                     a ? i.val(r) : i.val("0"),
                     !0)
                  );
               };
            t.on("click", function () {
               d(a, t, !1), u(l, s), n.hide();
            }),
               a.on("click", function () {
                  d(t, a, !0), u(s, l), n.show();
               });
         }
         function So() {
            Fr(Eo());
         }
         function jo() {
            m(Eo());
         }
         function _o() {
            var e = Eo();
            e.on("submit", function () {
               c()("button").prop("disabled", !0);
            });
            var t = e.find('button[type="submit"]'),
               a = c()("#ConfirmModal");
            if (a && a.length) {
               a
                  .find(".js-close-popup")
                  .off("click")
                  .on("click", function () {
                     return c.a.magnificPopup.close();
                  }),
                  a
                     .find(".js-submit-popup")
                     .off("click")
                     .on("click", function () {
                        return e.submit();
                     });
               var n = c()("#business_perso");
               t.on("click", function (e) {
                  return (
                     !(n && n[0] && !n[0].checked) ||
                     (e.preventDefault(),
                     c.a.magnificPopup.open({ items: { src: a } }),
                     !1)
                  );
               });
            }
         }
         function wo(e) {
            var t = e.getState().cart.business;
            V.getValidateForm(t)
               .then(function (e) {
                  if (e) {
                     var t = c()(e);
                     Eo().show();
                     var a = t.find("#order-informations");
                     Oo().replaceWith(a).show();
                     var n = t.find("#order-total");
                     Co().replaceWith(n).show(),
                        No(),
                        Vt(),
                        ca(),
                        ko(),
                        So(),
                        jo(),
                        _o(),
                        Zt();
                  }
               })
               .catch(function () {});
         }
         var Lo = function (e) {
            return function (t) {
               return function (a) {
                  switch ((t(a), a.type)) {
                     case "persist/REHYDRATE":
                     case Se:
                        wo(e);
                        break;
                     case "CART_PERSIST_ERROR":
                     case "FETCH_SUMMARY_FAILURE":
                        Eo().find("#order-informations").hide(),
                           Eo().find("#order-total").hide();
                  }
                  Ot(e, a);
               };
            };
         };
         function To() {
            if (!window.CART_STORE) {
               var e = c()("#CurrentCart"),
                  t = ge(e);
               window.CART_STORE = Gn("cart", t, [Lo]);
            }
            return window.CART_STORE;
         }
         function No() {
            var e = document.getElementById("SiteInfoRoot");
            if (e) {
               var t = To(),
                  a = Object(zn.a)(
                     Object(fn.b)(function (e) {
                        return Object(s.a)(Object(s.a)({}, e.sites), e.booking);
                     }),
                     Object(wt.d)()
                  )(ho);
               _t.a.render(
                  St.a.createElement(
                     St.a.Suspense,
                     { fallback: St.a.createElement("div", null) },
                     St.a.createElement(
                        fn.a,
                        { store: t.store },
                        St.a.createElement(
                           Mr.a,
                           { loading: null, persistor: t.persistor },
                           St.a.createElement(
                              wt.a,
                              { i18n: C },
                              St.a.createElement(a, null)
                           )
                        )
                     )
                  ),
                  e
               );
            }
         }
         function Do() {
            var e = document.getElementById("FullBookingRoot"),
               t = document.getElementById("order-summary"),
               a = document.getElementById("FullBookingOptions"),
               n = c()("#CurrentCart");
            !(function () {
               var e = c()('input[name="overrideLocalStorage"]');
               e &&
                  "true" === e.val() &&
                  localStorage.removeItem("persist:root");
            })();
            var r = n.hasClass("display-error"),
               i = To();
            wo(i.store),
               e &&
                  _t.a.render(
                     St.a.createElement(
                        St.a.Suspense,
                        { fallback: St.a.createElement("div", null) },
                        St.a.createElement(
                           fn.a,
                           { store: i.store },
                           St.a.createElement(
                              Mr.a,
                              { loading: null, persistor: i.persistor },
                              St.a.createElement(
                                 wt.a,
                                 { i18n: C },
                                 St.a.createElement(Li, { forceValidation: r })
                              )
                           )
                        )
                     ),
                     e
                  ),
               t &&
                  _t.a.render(
                     St.a.createElement(
                        St.a.Suspense,
                        { fallback: St.a.createElement("div", null) },
                        St.a.createElement(
                           fn.a,
                           { store: i.store },
                           St.a.createElement(
                              Mr.a,
                              { loading: null, persistor: i.persistor },
                              St.a.createElement(
                                 wt.a,
                                 { i18n: C },
                                 St.a.createElement(Ji, null)
                              )
                           )
                        )
                     ),
                     t
                  ),
               a &&
                  _t.a.render(
                     St.a.createElement(
                        St.a.Suspense,
                        { fallback: St.a.createElement("div", null) },
                        St.a.createElement(
                           fn.a,
                           { store: i.store },
                           St.a.createElement(
                              Mr.a,
                              { loading: null, persistor: i.persistor },
                              St.a.createElement(
                                 wt.a,
                                 { i18n: C },
                                 St.a.createElement(go, null)
                              )
                           )
                        )
                     ),
                     a
                  ),
               c()("#Loader").removeClass("active");
         }
         var Ao = function () {
               !(function () {
                  var e = document.getElementById("ScrollableMenu");
                  e &&
                     _t.a.render(
                        St.a.createElement(
                           St.a.Suspense,
                           { fallback: St.a.createElement("div", null) },
                           St.a.createElement(
                              wt.a,
                              { i18n: C },
                              St.a.createElement(Zr, null)
                           )
                        ),
                        e
                     );
               })(),
                  Do(),
                  No(),
                  yo(),
                  ko(),
                  So(),
                  jo(),
                  _o();
            },
            Io = (function (e) {
               Object(L.a)(a, e);
               var t = Object(T.a)(a);
               function a(e) {
                  var n;
                  return (
                     Object(S.a)(this, a),
                     ((n = t.call(this)).newLocation = e),
                     n
                  );
               }
               return a;
            })(Object(N.a)(Error));
         function Mo(e) {
            if (0 !== e.length) {
               var t = window.Stripe(window.STRIPE_API_KEY),
                  a = window.Stripe(window.STRIPE_API_KEY, {
                     stripeAccount: c()(
                        'input[name="stripeConnectAccount"]'
                     ).val(),
                  }),
                  n = t.elements(),
                  r = e.find("#card-errors"),
                  i = e.find('button[type="submit"]'),
                  o = n.create("card", { hidePostalCode: !0 });
               o.mount("#card-element");
               var s = function (e) {
                     return r.html("<p>".concat(e.message, "</p>"));
                  },
                  l = function () {
                     return r.empty();
                  },
                  u = function () {
                     l(), i.removeClass("disabled"), i.prop("disabled", !1);
                  },
                  d = function () {
                     i.addClass("disabled"), i.prop("disabled", !0);
                  };
               o.addEventListener("change", function (e) {
                  e.complete ? u() : e.error && (s(e.error), d());
               });
               var p = e.find("#CurrentCard"),
                  m = function () {
                     return p.hasClass("active");
                  };
               i.on("click", function (n) {
                  n.preventDefault(),
                     l(),
                     i.addClass("loading"),
                     i.prop("disabled", !0),
                     (function () {
                        if (m()) return Promise.resolve(p.attr("data-id"));
                        var a = e.find('input[name="holderName"]').val();
                        return t
                           .createPaymentMethod("card", o, {
                              billing_details: { name: a },
                           })
                           .then(function (e) {
                              var t = e.error,
                                 a = e.paymentMethod;
                              if (t) throw Error(t);
                              return a.id;
                           });
                     })()
                        .then(function (e) {
                           return (function (e) {
                              var t = c()("#gaClientId").val();
                              return F("/cart/payment", {
                                 method: "POST",
                                 headers: {
                                    "Content-Type": "application/json",
                                    "Csrf-Token": c()(
                                       'input[name="csrfToken"]'
                                    ).val(),
                                 },
                                 body: JSON.stringify({
                                    methodId: e,
                                    gaClientId: t,
                                    strategy: c()(
                                       'input[name="strategy"]:checked'
                                    ).val(),
                                 }),
                              })
                                 .then(function (e) {
                                    if (e.redirected) throw new Io(e.url);
                                    return e.json();
                                 })
                                 .catch(function (e) {
                                    if (e instanceof Io) throw e;
                                    return e.res.json().then(function (e) {
                                       throw new Error(e.error);
                                    });
                                 });
                           })(e).then(function (e) {
                              var t = e.intent_secret,
                                 n = e.method_id;
                              return a.handleCardPayment(t, {
                                 payment_method: n,
                              });
                           });
                        })
                        .then(function (e) {
                           if (e.error) throw new Error(e.error.message);
                           return document.location.replace(
                              "/cart/payment/waiting?intent_secret=".concat(
                                 e.paymentIntent.client_secret
                              )
                           );
                        })
                        .catch(function (e) {
                           e instanceof Io
                              ? document.location.replace(e.newLocation)
                              : (i.removeClass("loading"),
                                i.prop("disabled", !1),
                                s(e));
                        });
               });
               var f = e.find("#ChangeCard"),
                  v = e.find("#NewCard"),
                  b = function () {
                     var t = p.attr("data-id");
                     t &&
                        t.length &&
                        (!(function (t, a) {
                           var n = e.find('input[name="'.concat(t, '"]'));
                           if (n && n.length) n.val(a);
                           else {
                              var r = document.createElement("input");
                              r.setAttribute("type", "hidden"),
                                 r.setAttribute("name", t),
                                 r.setAttribute("value", a),
                                 e.append(r);
                           }
                        })("stripeId", t),
                        u(),
                        o.clear());
                  };
               b(),
                  f.on("click", function (e) {
                     e.stopPropagation(),
                        p.removeClass("active"),
                        v.show(),
                        d();
                  }),
                  p.on("click", function () {
                     m() || (p.addClass("active"), v.hide(), b());
                  });
               var g = e.find("#SaveCardCheckbox"),
                  h = c()("#ChangePaymentStoreStrategyModal"),
                  E = e.find("#SimplePaymentStore"),
                  O = e.find("#FullPaymentStore"),
                  C = function (t) {
                     e
                        .find('input[name="strategy"][value="'.concat(t, '"]'))
                        .prop("checked", !0),
                        c.a.magnificPopup.close();
                  };
               h.find("button.keep-strategy").on("click", function () {
                  return C("removeOnceCompleted");
               }),
                  h.find("button.none-strategy").on("click", function () {
                     return C("none");
                  }),
                  g.on("change", function () {
                     E.remove(),
                        O.show(),
                        c.a.magnificPopup.open({ items: { src: h } });
                  });
            }
         }
         function Fo(e) {
            window.Stripe
               ? Mo(e)
               : document
                    .querySelector("#stripe-js")
                    .addEventListener("load", function () {
                       Mo(e);
                    });
         }
         var Ro = 2e3,
            xo = 120;
         function Ho() {
            var e = w()(window.location).query(!0).intent_secret,
               t = null,
               a = 0,
               n = function (e) {
                  (a += 1),
                     e &&
                        ("Pending" !== e.status || a >= xo) &&
                        (clearInterval(t),
                        document.location.replace(e.redirectUrl));
               };
            t = setInterval(function () {
               x("/cart/payment/status?intent_secret=".concat(e), {
                  method: "GET",
               })
                  .then(function (e) {
                     n(e);
                  })
                  .catch(function () {
                     return n();
                  });
            }, Ro);
         }
         var Po = function () {
               var e = c()("#FinishForm");
               Fo(e), m(e);
               var t = c()("#WaitingPaymentValidation");
               t && t.length && Ho();
               var a = c()("#PaymentAccepted");
               if (a && a.length) {
                  localStorage.removeItem("persist:root"),
                     d("updatevirtualpath", {
                        virtualDocumentPath: "/".concat(
                           O(),
                           "/payment/accepted"
                        ),
                        virtualDocumentTitle: "Paiement Accept\xe9",
                     });
                  try {
                     d(
                        "isNew",
                        Number(a.attr("data-order-count")) <= 1
                           ? { newCustomer: "nouveau" }
                           : { newCustomer: "ancien" }
                     );
                  } catch (i) {}
                  try {
                     var n = a.attr("data-order-code"),
                        r = a.attr("data-order-total");
                     d("Transaction", {
                        ti: n,
                        tr: r,
                        mailAcheteur: a.attr("data-order-email"),
                        userId: a.attr("data-order-user-id"),
                        externalId: a.attr("data-order-external-id"),
                     }),
                        (function (e, t) {
                           d("booking_success", {
                              currency: "EUR",
                              transaction_id: t,
                              value: e,
                           });
                        })(r, n);
                  } catch (i) {}
               }
               c()("#PaymentRefused").length &&
                  (d("updatevirtualpath", {
                     virtualDocumentPath: "/".concat(O(), "/payment/refused"),
                     virtualDocumentTitle: "Paiement Refus\xe9",
                  }),
                  d("purchase_error", {}));
            },
            Bo = function () {
               var e = document.querySelectorAll(".accordion button");
               function t() {
                  var t = this.getAttribute("aria-expanded");
                  e.forEach(function (e) {
                     e.setAttribute("aria-expanded", !1);
                  }),
                     "false" === t && this.setAttribute("aria-expanded", !0);
               }
               e.forEach(function (e) {
                  return e.addEventListener("click", t);
               });
            },
            Yo = function () {
               var e = c()(".sliderPhoto"),
                  t = c()("ul", e),
                  a = c()("li", t),
                  n = null,
                  r = function (a) {
                     t.css({ left: e.width() * a * -1 }),
                        c()("ol li", e).removeClass("active"),
                        c()("ol li:eq(".concat(a, ")"), e).addClass("active");
                  },
                  i = function () {
                     t.width(e.width() * a.length),
                        a.width(e.width()),
                        a.first().addClass("active"),
                        c()("ol", e).remove(),
                        (function (t) {
                           c()("<ol></ol>").appendTo(e);
                           for (var a = c()("ol", e), n = 0; n < t; n += 1)
                              c()(
                                 '<li data-index="'.concat(n, '"></li>')
                              ).appendTo(a);
                           c()("li", a).bind("click", function (e) {
                              var t = c()(e.currentTarget),
                                 a = parseInt(t.data("index"), 10);
                              r(a);
                           });
                        })(a.length),
                        clearInterval(n),
                        (n = setInterval(function () {
                           var e = c()("li.active", t),
                              n = e.next(),
                              i = e.index() >= a.length - 1 ? 0 : n.index();
                           e.removeClass("active"),
                              0 === i
                                 ? a.first().addClass("active")
                                 : n.addClass("active"),
                              r(i);
                        }, 4e3));
                  };
               c()(window).resize(function () {
                  i(), r(0);
               }),
                  i();
            },
            Uo = function () {
               var e = Object(wt.c)(),
                  t = e.t,
                  a = Mt(e.i18n.language);
               return St.a.createElement(
                  St.a.Fragment,
                  null,
                  a.map(function (e, a) {
                     var n = e.rate,
                        r = e.reviewAmount,
                        i = e.name,
                        o = e.link;
                     return St.a.createElement(
                        St.a.Fragment,
                        { key: a },
                        a >= 1 &&
                           St.a.createElement("div", {
                              className: "dotted-separation",
                           }),
                        St.a.createElement(
                           "div",
                           { className: "rating" },
                           St.a.createElement(It, { rating: n }),
                           St.a.createElement(
                              "p",
                              { className: "ratingScore" },
                              n,
                              St.a.createElement("span", null, "/5")
                           ),
                           St.a.createElement(
                              "a",
                              { target: "blank", href: o },
                              St.a.createElement(
                                 "p",
                                 { className: "sourceData" },
                                 "+",
                                 r,
                                 " ",
                                 t("reviews"),
                                 " ",
                                 St.a.createElement("strong", null, i)
                              )
                           )
                        )
                     );
                  })
               );
            },
            Vo = function (e) {
               var t = e.items,
                  a = e.total,
                  n = e.limitPerPage,
                  r = Object(kt.useState)(t),
                  i = Object(P.a)(r, 2),
                  o = i[0],
                  c = i[1],
                  s = Object(kt.useState)(1),
                  l = Object(P.a)(s, 2),
                  u = l[0],
                  d = l[1],
                  p = (u - 1) * n;
               function m(e) {
                  u + e && d(u + e);
               }
               Object(kt.useEffect)(
                  function () {
                     u > 1
                        ? x(
                             "/reviews/list.json?offset="
                                .concat(p, "&limit=")
                                .concat(n)
                          ).then(function (e) {
                             c(e);
                          })
                        : c(t);
                  },
                  [u, t, n, p]
               );
               var f = 1 === u,
                  v = u * n < a,
                  b = u + 2 * n < a;
               return St.a.createElement(
                  St.a.Fragment,
                  null,
                  St.a.createElement(
                     "ul",
                     { className: "reviewsList" },
                     null === o || void 0 === o
                        ? void 0
                        : o.map(function (e) {
                             return St.a.createElement(
                                "li",
                                { key: e.id },
                                St.a.createElement(ua, { review: e })
                             );
                          })
                  ),
                  St.a.createElement(
                     "ul",
                     { className: "pagination" },
                     !f &&
                        St.a.createElement(
                           St.a.Fragment,
                           null,
                           St.a.createElement(
                              "li",
                              { className: "prev" },
                              St.a.createElement("button", {
                                 className: "Button",
                                 type: "button",
                                 "aria-label": "previous page",
                                 onClick: function () {
                                    return m(-1);
                                 },
                              })
                           ),
                           St.a.createElement(
                              "li",
                              null,
                              St.a.createElement(
                                 "button",
                                 {
                                    className: "Button",
                                    type: "button",
                                    "aria-label": "page ".concat(u - 1),
                                    onClick: function () {
                                       return m(-1);
                                    },
                                 },
                                 u - 1
                              )
                           )
                        ),
                     St.a.createElement(
                        "li",
                        { className: "active" },
                        St.a.createElement("span", null, u)
                     ),
                     v &&
                        St.a.createElement(
                           St.a.Fragment,
                           null,
                           St.a.createElement(
                              "li",
                              null,
                              St.a.createElement(
                                 "button",
                                 {
                                    className: "Button",
                                    type: "button",
                                    "aria-label": "page ".concat(u - 1),
                                    onClick: function () {
                                       return m(1);
                                    },
                                 },
                                 u + 1
                              )
                           ),
                           f &&
                              b &&
                              St.a.createElement(
                                 "li",
                                 null,
                                 St.a.createElement(
                                    "button",
                                    {
                                       className: "Button",
                                       type: "button",
                                       "aria-label": "page ".concat(u - 2),
                                       onClick: function () {
                                          return m(2);
                                       },
                                    },
                                    u + 2
                                 )
                              ),
                           St.a.createElement(
                              "li",
                              { className: "next" },
                              St.a.createElement("button", {
                                 className: "Button",
                                 type: "button",
                                 "aria-label": "next page",
                                 onClick: function () {
                                    return m(1);
                                 },
                              })
                           )
                        )
                  )
               );
            },
            Zo = c()("#review-form"),
            Go = c()("#share-review"),
            zo = c()('textarea[name="description"]'),
            Ko = c()("#submit-review"),
            Jo = c()("#btn-copy-comment");
         function Wo(e) {
            e.preventDefault(),
               "5" ===
               Zo.serializeArray().find(function (e) {
                  return "score" === e.name;
               }).value
                  ? c.a.magnificPopup.open({
                       items: { src: Go },
                       closeOnBgClick: !1,
                    })
                  : Zo.submit();
         }
         function qo(e) {
            e.preventDefault();
            var t = c()("<input>");
            Go.append(t),
               t.val(zo.val()),
               t.select(),
               document.execCommand("copy"),
               t.remove(),
               Jo.addClass("hidden"),
               c()(".comment-copied").removeClass("hidden");
         }
         function Qo() {
            setTimeout(function () {
               c.a.magnificPopup.close(), Zo.submit();
            }, 100);
         }
         function Xo(e) {
            var t = Zo.find(e),
               a = t.find("input");
            t.find("li").on("click", function (e) {
               var n,
                  r = c()(e.currentTarget);
               !(function (e) {
                  a.val(e);
               })(r.attr("data-value")),
                  (n = r).addClass("active"),
                  t.find("li").not(n).removeClass("active");
            });
         }
         function $o() {
            var e = Zo.find(".how-you-know"),
               t = e.find('input[type="hidden"]'),
               a = function (e) {
                  return t.val(e);
               };
            e.find('input[type="checkbox"]').on("change", function (t) {
               var n = c()(t.currentTarget);
               t.currentTarget.checked
                  ? (!(function (t) {
                       e.find('input[type="checkbox"]')
                          .not(t)
                          .prop("checked", !1);
                    })(n),
                    a(t.currentTarget.id))
                  : a(void 0);
            });
         }
         var ec = {
               updateLoading: "updateLoading",
               updateDepartureDate: "updateDepartureDate",
               updateDepartureHour: "updateDepartureHour",
               updateDepartureTripNumber: "updateDepartureTripNumber",
               updateDepartureTripDetails: "updateDepartureTripDetails",
               updateArrivalDate: "updateArrivalDate",
               updateArrivalHour: "updateArrivalHour",
               updateArrivalTripNumber: "updateArrivalTripNumber",
               updateArrivalTripDetails: "updateArrivalTripDetails",
            },
            tc = {
               isLoading: !1,
               departure: {
                  site: null,
                  date: null,
                  hour: null,
                  tripDetails: null,
               },
               arrival: {
                  site: null,
                  date: null,
                  hour: null,
                  tripNumber: null,
                  tripDetails: null,
               },
            },
            ac = function (e, t) {
               switch (t.type) {
                  case ec.updateLoading:
                     return Object(s.a)(
                        Object(s.a)({}, e),
                        {},
                        { isLoading: t.payload }
                     );
                  case ec.updateDepartureDate:
                     return Object(s.a)(
                        Object(s.a)({}, e),
                        {},
                        {
                           departure: Object(s.a)(
                              Object(s.a)({}, e.departure),
                              {},
                              { date: t.payload }
                           ),
                        }
                     );
                  case ec.updateDepartureHour:
                     return Object(s.a)(
                        Object(s.a)({}, e),
                        {},
                        {
                           departure: Object(s.a)(
                              Object(s.a)({}, e.departure),
                              {},
                              { hour: t.payload }
                           ),
                        }
                     );
                  case ec.updateDepartureTripNumber:
                     return Object(s.a)(
                        Object(s.a)({}, e),
                        {},
                        {
                           departure: Object(s.a)(
                              Object(s.a)({}, e.departure),
                              {},
                              { tripNumber: t.payload }
                           ),
                        }
                     );
                  case ec.updateDepartureTripDetails:
                     return Object(s.a)(
                        Object(s.a)({}, e),
                        {},
                        {
                           departure: Object(s.a)(
                              Object(s.a)({}, e.departure),
                              {},
                              { tripDetails: t.payload }
                           ),
                        }
                     );
                  case ec.updateArrivalDate:
                     return Object(s.a)(
                        Object(s.a)({}, e),
                        {},
                        {
                           arrival: Object(s.a)(
                              Object(s.a)({}, e.arrival),
                              {},
                              { date: t.payload }
                           ),
                        }
                     );
                  case ec.updateArrivalHour:
                     return Object(s.a)(
                        Object(s.a)({}, e),
                        {},
                        {
                           arrival: Object(s.a)(
                              Object(s.a)({}, e.arrival),
                              {},
                              { hour: t.payload }
                           ),
                        }
                     );
                  case ec.updateArrivalTripNumber:
                     return Object(s.a)(
                        Object(s.a)({}, e),
                        {},
                        {
                           arrival: Object(s.a)(
                              Object(s.a)({}, e.arrival),
                              {},
                              { tripNumber: t.payload }
                           ),
                        }
                     );
                  case ec.updateArrivalTripDetails:
                     return Object(s.a)(
                        Object(s.a)({}, e),
                        {},
                        {
                           arrival: Object(s.a)(
                              Object(s.a)({}, e.arrival),
                              {},
                              { tripDetails: t.payload }
                           ),
                        }
                     );
                  default:
                     return e;
               }
            },
            nc = St.a.createContext(),
            rc = function (e) {
               var t = e.initState,
                  a = e.children,
                  n = Object(kt.useReducer)(
                     ac,
                     Object(s.a)(
                        Object(s.a)(Object(s.a)({}, tc), t),
                        {},
                        { initial: t }
                     )
                  ),
                  r = Object(P.a)(n, 2),
                  i = r[0],
                  o = r[1];
               return St.a.createElement(
                  nc.Provider,
                  { value: { state: i, dispatch: o } },
                  a
               );
            },
            ic = Object(or.extendMoment)(u.a),
            oc = function (e) {
               return ic(e, "DD/MM/YYYY", !0);
            },
            cc = function (e, t) {
               return ic(
                  "".concat(e, " ").concat(t),
                  "".concat("DD/MM/YYYY", " ").concat("HH:mm"),
                  !0
               );
            },
            sc = function (e) {
               return ic(e, "".concat("DD/MM/YYYY", " ").concat("HH:mm"), !0);
            },
            lc = function (e) {
               return ic(e, "DD/MM/YYYY", !0).toDate();
            },
            uc = function (e) {
               return ic(e).format("DD/MM/YYYY");
            },
            dc = function (e) {
               return e.format("DD/MM/YYYY");
            },
            pc = function (e) {
               switch (e) {
                  case "fr":
                     return "fr-FR";
                  case "en":
                     return "en-GB";
                  case "es":
                     return "es-ES";
                  case "nl":
                     return "nl-NL";
                  case "pt":
                     return "pt-BR";
                  case "it":
                     return "it-IT";
                  default:
                     return "en-GB";
               }
            },
            mc = function (e) {
               return {
                  language: pc(e.language),
                  format: "dd/mm/yyyy",
                  startDate: new Date(),
                  weekStart: 1,
                  autoHide: !0,
                  startView: 0,
                  endView: 0,
               };
            },
            fc = (function (e) {
               Object(L.a)(a, e);
               var t = Object(T.a)(a);
               function a(e) {
                  var n;
                  return (
                     Object(S.a)(this, a),
                     ((n = t.call(this, e)).createDatePicker = function (e, t) {
                        e.datepicker(
                           Object(s.a)(
                              Object(s.a)({}, mc(t)),
                              {},
                              { pick: n.onDatePickerChange }
                           )
                        );
                     }),
                     (n.setPickerDates = function (e, t, a, n) {
                        e.datepicker("setDate", t, !0),
                           e.datepicker("setValue", t),
                           a &&
                              (e.datepicker("setStartDate", a),
                              e.datepicker("setViewDate", a)),
                           n && e.datepicker("setEndDate", n);
                     }),
                     (n.onDatePickerChange = function (e) {
                        (0, n.props.onDateChange)(uc(e.date));
                     }),
                     (n.onInputChange = function (e) {
                        var t = e.target.value,
                           a = n.props,
                           r = a.minDate,
                           i = a.maxDate,
                           o = a.onDateChange,
                           c = oc(t);
                        !c.isValid() ||
                           (r && !c.isSameOrAfter(oc(r))) ||
                           (i && !c.isBefore(oc(i))) ||
                           o(t);
                     }),
                     (n.refName = "".concat(e.prefix, "Input")),
                     (n[n.refName] = St.a.createRef()),
                     n
                  );
               }
               return (
                  Object(j.a)(a, [
                     {
                        key: "componentDidMount",
                        value: function () {
                           var e = this.props,
                              t = e.date,
                              a = e.minDate,
                              n = e.maxDate,
                              r = e.i18n;
                           if (!e.readOnly) {
                              var i = c()(this[this.refName].current);
                              this.createDatePicker(i, r),
                                 this.setPickerDates(i, t, a, n);
                           }
                        },
                     },
                     {
                        key: "componentDidUpdate",
                        value: function (e) {
                           var t = this.props,
                              a = t.date,
                              n = t.minDate,
                              r = t.maxDate,
                              i = t.i18n,
                              o = t.readOnly,
                              s = c()(this[this.refName].current);
                           o
                              ? e.readOnly || s.datepicker("destroy")
                              : (e.readOnly && this.createDatePicker(s, i),
                                this.setPickerDates(s, a, n, r));
                        },
                     },
                     {
                        key: "render",
                        value: function () {
                           var e = this.props,
                              t = e.t,
                              a = e.prefix,
                              n = e.label,
                              r = e.date,
                              i = e.forceValidation,
                              o = e.readOnly,
                              c = de(i, r),
                              s = {
                                 success: !1,
                                 error: c,
                                 message: c ? t("error-required") : "",
                              },
                              l = "".concat(a, "Date");
                           return St.a.createElement(
                              "div",
                              { className: "DayPicker" },
                              St.a.createElement(
                                 ka.Input,
                                 Object.assign(
                                    {
                                       ref: this[this.refName],
                                       "data-cy": l,
                                       id: l,
                                       name: l,
                                       label: n,
                                       type: "text",
                                       placeholder: t("date"),
                                       autoComplete: "off",
                                       onChange: this.onInputChange,
                                       icon: St.a.createElement(sr.a, null),
                                       inputMode: "none",
                                       readOnly: o,
                                    },
                                    s
                                 )
                              )
                           );
                        },
                     },
                  ]),
                  a
               );
            })(kt.PureComponent),
            vc = Object(wt.d)()(fc),
            bc = Object(or.extendMoment)(u.a),
            gc = (function (e) {
               Object(L.a)(a, e);
               var t = Object(T.a)(a);
               function a(e) {
                  var n;
                  return (
                     Object(S.a)(this, a),
                     ((n = t.call(this, e)).onHourChange = function (e) {
                        (0, n.props.onHourChange)(e);
                     }),
                     (n.isDeparture = function () {
                        return "start" === n.props.prefix;
                     }),
                     (n.isArrival = function () {
                        return "end" === n.props.prefix;
                     }),
                     (n.validateDeparture = function () {
                        var e = n.props,
                           t = e.t,
                           a = e.date,
                           r = e.hour,
                           i = e.tripDetails,
                           o = e.siteType,
                           c = {
                              success: !1,
                              warning: !1,
                              error: !1,
                              message: "",
                           };
                        if (i) {
                           var s = oc(a);
                           if (r) {
                              var l = r.split(":"),
                                 u = Object(P.a)(l, 2),
                                 d = u[0],
                                 p = u[1];
                              s.set({ hours: d, minutes: p });
                           }
                           var m = bc(i.departureTime, "DD/MM/YYYY HH:mm"),
                              f = le[o];
                           r && r.length > 0 && s.isBefore(m, "minute")
                              ? s.diff(m, "minute") > -f
                                 ? ((c.warning = !0),
                                   (c.message = t(
                                      "booking-trip_warning_hours",
                                      { n: f }
                                   )))
                                 : (c.success = !0)
                              : (c.error = !0);
                        }
                        return c;
                     }),
                     (n.validateArrival = function () {
                        var e = n.props,
                           t = e.date,
                           a = e.hour,
                           r = e.tripDetails,
                           i = {
                              success: !1,
                              warning: !1,
                              error: !1,
                              message: "",
                           };
                        if (r) {
                           var o = oc(t);
                           if (a) {
                              var c = a.split(":"),
                                 s = Object(P.a)(c, 2),
                                 l = s[0],
                                 u = s[1];
                              o.set({ hours: l, minutes: u });
                           }
                           var d = bc(r.arrivalTime, "DD/MM/YYYY HH:mm");
                           a && a.length > 0
                              ? o.isSameOrAfter(d)
                                 ? (i.success = !0)
                                 : (i.error = !0)
                              : !a && r.arrivalTime && (i.error = !0);
                        }
                        return i;
                     }),
                     (n.refName = "".concat(e.prefix, "Input")),
                     (n[n.refName] = St.a.createRef()),
                     n
                  );
               }
               return (
                  Object(j.a)(a, [
                     {
                        key: "componentDidUpdate",
                        value: function (e) {
                           var t = this.props,
                              a = t.slots,
                              n = t.date,
                              r = t.hour,
                              i = t.tripDetails;
                           a &&
                              r &&
                              e.date &&
                              n &&
                              !bc(e.date).isSame(n) &&
                              (!!this.getDisplayedSlots().find(function (e) {
                                 return e.value === r;
                              }) ||
                                 this.onHourChange(""));
                           if (this.isArrival() && i && i !== e.tripDetails) {
                              var o = this.getDisplayedSlots(),
                                 c = Oe(i, o);
                              ie()(c) || c.isUnavailable
                                 ? this.onHourChange("")
                                 : this.onHourChange(c.value);
                           }
                        },
                     },
                     {
                        key: "getDisplayedSlots",
                        value: function () {
                           var e = [],
                              t = this.props,
                              a = t.minHour,
                              n = t.maxHour,
                              r = t.slots,
                              i = t.tripDetail,
                              o = t.readOnly,
                              c = t.date,
                              s = t.hour;
                           if (o && s) e = [{ slot: cc(c, s), value: s }];
                           else if (r) {
                              var l = r.startTime,
                                 u = r.endTime;
                              ie()(i)
                                 ? (n && (u = n), a && (l = a))
                                 : this.isDeparture()
                                 ? (u = bc(i.departureTime, "DD/MM/YYYY HH:mm")
                                      .subtract(r.step, "minutes")
                                      .format("HH:mm"))
                                 : (l = bc(i.arrivalTime, "DD/MM/YYYY HH:mm")
                                      .subtract(r.step, "minutes")
                                      .format("HH:mm")),
                                 (l = bc(l, "HH:mm")),
                                 (u = bc(u, "HH:mm")),
                                 (e = he(r, l, u));
                           }
                           return e;
                        },
                     },
                     {
                        key: "render",
                        value: function () {
                           var e = this.props,
                              t = e.t,
                              a = e.prefix,
                              n = e.label,
                              r = e.hour,
                              i = e.notice,
                              o = e.tripDetails,
                              c = e.readOnly,
                              s = e.isFetchingSlots,
                              l = this.getDisplayedSlots(),
                              u =
                                 -1 ===
                                 l
                                    .filter(function (e) {
                                       return e.isUnavailable;
                                    })
                                    .map(function (e) {
                                       return e.value;
                                    })
                                    .indexOf(r)
                                    ? r
                                    : null,
                              d = this.isDeparture()
                                 ? this.validateDeparture()
                                 : this.validateArrival(),
                              p = "".concat(a, "Hour"),
                              m = o ? Oe(o, l) : null,
                              f =
                                 this.isArrival() &&
                                 !ie()(m) &&
                                 !m.isUnavailable,
                              v = this.isArrival() && f && o,
                              b = fr()("HourPicker");
                           return St.a.createElement(
                              "div",
                              { className: b },
                              s &&
                                 !v &&
                                 St.a.createElement(ka.InputSelect, {
                                    id: "loading",
                                    name: "loading",
                                    label: "".concat(t(n), " *"),
                                    placeholder: t("hour"),
                                    loading: !0,
                                 }),
                              v &&
                                 St.a.createElement(
                                    St.a.Fragment,
                                    null,
                                    St.a.createElement(ka.Fixed, {
                                       dark: !0,
                                       label: "".concat(t(n), " *"),
                                       value: r,
                                    }),
                                    St.a.createElement("input", {
                                       type: "hidden",
                                       name: p,
                                       value: r,
                                    })
                                 ),
                              !s &&
                                 !v &&
                                 St.a.createElement(
                                    ka.InputSelect,
                                    {
                                       "data-cy": p,
                                       id: p,
                                       name: p,
                                       label: "".concat(t(n), " *"),
                                       value: u || "",
                                       onChange: this.onHourChange,
                                       hidePlaceholderOption: c,
                                       placeholder: t("hour"),
                                       success: d.success,
                                       warning: d.warning,
                                       error: d.error,
                                       message: d.message,
                                       icon: St.a.createElement(ha.a, null),
                                       notice: i
                                          ? { question: !0, content: t(i) }
                                          : null,
                                       readOnly: c,
                                    },
                                    l &&
                                       l.map(function (e) {
                                          return St.a.createElement(
                                             "option",
                                             {
                                                key: e.value,
                                                value: e.value,
                                                disabled: e.isUnavailable,
                                             },
                                             e.isUnavailable
                                                ? ""
                                                     .concat(e.value, " (")
                                                     .concat(t("full"), ")")
                                                : e.value
                                          );
                                       })
                                 )
                           );
                        },
                     },
                  ]),
                  a
               );
            })(kt.PureComponent),
            hc = Object(wt.d)()(gc),
            Ec = "departure",
            Oc = "arrival",
            Cc = (function (e) {
               Object(L.a)(a, e);
               var t = Object(T.a)(a);
               function a(e) {
                  var n;
                  return (
                     Object(S.a)(this, a),
                     ((n = t.call(this, e)).onTravelInformationsChange =
                        function (e) {
                           var t = e.target.value,
                              a = n.props,
                              r = a.prefix,
                              i = a.site,
                              o = a.date,
                              c = a.onTripNumberChange;
                           n.state.fetchAbortController.abort(),
                              n.setState(
                                 {
                                    fetchAbortController: new AbortController(),
                                 },
                                 function () {
                                    var e = n.state.fetchAbortController.signal;
                                    c(t), n.fetchTripInfos(r, i, o, t, e);
                                 }
                              );
                        }),
                     (n.onClearTripNumber = function () {
                        var e = n.props,
                           t = e.onTripNumberChange,
                           a = e.onTripDetailsChange;
                        t(""), a();
                     }),
                     (n.getStatus = function () {
                        var e = n.props.tripNumber;
                        return n.state.trip.isFetchingInformations
                           ? "loading"
                           : "" !== e
                           ? "loaded"
                           : "";
                     }),
                     (n.getInputProps = function () {
                        var e = n.props,
                           t = e.site,
                           a = e.date,
                           r = e.hour;
                        return {
                           readOnly: e.readOnly,
                           disabled: !t || !a || cc(a, r).isBefore(),
                           success: !1,
                           error: !1,
                           message: "",
                        };
                     }),
                     (n.fetchTripInfos = (function () {
                        var e = Object(Ht.a)(
                           xt.a.mark(function e(t, a, r, i, o) {
                              var c, s, l, u;
                              return xt.a.wrap(function (e) {
                                 for (;;)
                                    switch ((e.prev = e.next)) {
                                       case 0:
                                          if (
                                             ((c = n.props),
                                             (s = c.t),
                                             (l = c.onTripDetailsChange),
                                             !i ||
                                                i.toLowerCase() ===
                                                   s(
                                                      "booking-trip_unknown_number_sel"
                                                   ).toLowerCase())
                                          ) {
                                             e.next = 10;
                                             break;
                                          }
                                          return (
                                             n.setState({
                                                trip: {
                                                   isFetchingInformations: !0,
                                                },
                                             }),
                                             (e.next = 5),
                                             V.getTripInfos(
                                                t,
                                                a,
                                                r,
                                                i,
                                                o
                                             ).catch(function () {
                                                return null;
                                             })
                                          );
                                       case 5:
                                          (u = e.sent),
                                             n.setState({
                                                trip: {
                                                   isFetchingInformations: !1,
                                                },
                                             }),
                                             l(u),
                                             (e.next = 11);
                                          break;
                                       case 10:
                                          l();
                                       case 11:
                                       case "end":
                                          return e.stop();
                                    }
                              }, e);
                           })
                        );
                        return function (t, a, n, r, i) {
                           return e.apply(this, arguments);
                        };
                     })()),
                     (n.state = {
                        fetchAbortController: new AbortController(),
                        trip: {
                           isFetchingInformations: !1,
                           isValid: !1,
                           isForced: !1,
                           isUnknown: !1,
                        },
                     }),
                     n
                  );
               }
               return (
                  Object(j.a)(
                     a,
                     [
                        {
                           key: "componentDidMount",
                           value: function () {
                              var e = this.props,
                                 t = e.prefix,
                                 a = e.site,
                                 n = e.date,
                                 r = e.tripNumber;
                              e.tripDetails || this.fetchTripInfos(t, a, n, r);
                           },
                        },
                        {
                           key: "componentDidUpdate",
                           value: function (e) {
                              var t = this.props,
                                 a = t.prefix,
                                 n = t.site,
                                 r = t.date,
                                 i = t.tripNumber;
                              r !== e.date && this.fetchTripInfos(a, n, r, i);
                           },
                        },
                        {
                           key: "render",
                           value: function () {
                              var e = this.props,
                                 t = e.t,
                                 n = e.prefix,
                                 r = e.tripNumber,
                                 i = e.tripDetails,
                                 o = e.siteType;
                              return St.a.createElement(
                                 "div",
                                 { className: "trip-informations" },
                                 St.a.createElement(ka.TravelInformations, {
                                    type: n,
                                    name: a.getTravelInformationsName(n),
                                    label: "".concat(
                                       t(
                                          a.getTravelInformationsLabelProperty(
                                             n,
                                             o
                                          )
                                       ),
                                       " *"
                                    ),
                                    site: a.getSiteLabel(i, n),
                                    message: t("booking-trip_travel_not_found"),
                                    value: r,
                                    onChange: this.onTravelInformationsChange,
                                    onClearValue: this.onClearTripNumber,
                                    status: this.getStatus(),
                                    results: i ? [i] : [],
                                    inputProps: this.getInputProps(),
                                    lang: f.a.language,
                                 })
                              );
                           },
                        },
                     ],
                     [
                        {
                           key: "getSiteLabel",
                           value: function (e, t) {
                              if (e) {
                                 var a =
                                    null === e || void 0 === e
                                       ? void 0
                                       : e.type.toLowerCase();
                                 if (t === Ec) {
                                    if ("flight" === a)
                                       return e.departureAirport;
                                    if ("train" === a)
                                       return e.departureStation;
                                 }
                                 if (t === Oc) {
                                    if ("flight" === a) return e.arrivalAirport;
                                    if ("train" === a) return e.arrivalStation;
                                 }
                              }
                              return "";
                           },
                        },
                        {
                           key: "getTravelInformationsLabelProperty",
                           value: function (e, t) {
                              var a, n;
                              switch (e) {
                                 case Ec:
                                    a = "start";
                                    break;
                                 case Oc:
                                    a = "end";
                                    break;
                                 default:
                                    return null;
                              }
                              switch (t) {
                                 case se.Airport:
                                    n = "flight";
                                    break;
                                 case se.Station:
                                    n = "train";
                                    break;
                                 default:
                                    n = "gen";
                              }
                              return "booking-trip_"
                                 .concat(a, "_")
                                 .concat(n, "_number");
                           },
                        },
                        {
                           key: "getTravelInformationsName",
                           value: function (e) {
                              return e === Ec
                                 ? "startTripNumber"
                                 : e === Oc
                                 ? "endTripNumber"
                                 : null;
                           },
                        },
                     ]
                  ),
                  a
               );
            })(kt.PureComponent),
            yc = Object(wt.d)()(Cc);
         function kc() {
            var e = Object(kt.useContext)(nc),
               t = e.state,
               a = e.dispatch,
               n = Object(kt.useState)(!1),
               r = Object(P.a)(n, 2),
               i = r[0],
               o = r[1],
               c = Object(kt.useState)(),
               s = Object(P.a)(c, 2),
               l = s[0],
               d = s[1],
               p = Object(kt.useState)(!1),
               m = Object(P.a)(p, 2),
               f = m[0],
               v = m[1],
               b = Object(kt.useState)(),
               g = Object(P.a)(b, 2),
               h = g[0],
               E = g[1],
               O = Object(kt.useState)(!1),
               C = Object(P.a)(O, 2),
               y = C[0],
               k = C[1],
               S = Object(wt.c)().t,
               j = function (e, t) {
                  a({ type: e, payload: t });
               },
               _ = Object(kt.useCallback)(
                  Object(Ht.a)(
                     xt.a.mark(function e() {
                        var a;
                        return xt.a.wrap(function (e) {
                           for (;;)
                              switch ((e.prev = e.next)) {
                                 case 0:
                                    return (
                                       v(!0),
                                       (e.next = 3),
                                       V.getSiteDepartureSlots(
                                          t.departure.site,
                                          lc(t.departure.date),
                                          t.orderId
                                       )
                                    );
                                 case 3:
                                    (a = e.sent), d(a), v(!1);
                                 case 6:
                                 case "end":
                                    return e.stop();
                              }
                        }, e);
                     })
                  ),
                  [t.orderId, t.departure.site, t.departure.date]
               ),
               w = Object(kt.useCallback)(
                  Object(Ht.a)(
                     xt.a.mark(function e() {
                        var a;
                        return xt.a.wrap(function (e) {
                           for (;;)
                              switch ((e.prev = e.next)) {
                                 case 0:
                                    return (
                                       k(!0),
                                       (e.next = 3),
                                       V.getSiteArrivalSlots(
                                          t.arrival.site,
                                          lc(t.arrival.date),
                                          t.orderId
                                       )
                                    );
                                 case 3:
                                    (a = e.sent), E(a), k(!1);
                                 case 6:
                                 case "end":
                                    return e.stop();
                              }
                        }, e);
                     })
                  ),
                  [t.orderId, t.arrival.site, t.arrival.date]
               );
            Object(kt.useEffect)(
               function () {
                  _();
               },
               [_]
            ),
               Object(kt.useEffect)(
                  function () {
                     w();
                  },
                  [w]
               ),
               Object(kt.useEffect)(
                  function () {
                     if (t.initial.departure.date && t.initial.departure.hour) {
                        var e = cc(
                           t.initial.departure.date,
                           t.initial.departure.hour
                        );
                        o(e.isBefore());
                     }
                  },
                  [t.initial.departure.date, t.initial.departure.hour]
               );
            return St.a.createElement(
               St.a.Fragment,
               null,
               St.a.createElement(
                  "div",
                  { className: "field compact" },
                  St.a.createElement(vc, {
                     prefix: "start",
                     notice: "booking-departure_notice",
                     date: t.departure.date,
                     maxDate: t.arrival.date,
                     label: "".concat(S("booking-departure_date"), " *"),
                     onDateChange: function (e) {
                        return j(ec.updateDepartureDate, e);
                     },
                     readOnly: i,
                  })
               ),
               St.a.createElement(
                  "div",
                  { className: "field compact" },
                  St.a.createElement(yc, {
                     prefix: Ec,
                     site: t.departure.site,
                     siteType: t.departure.siteKind,
                     date: t.departure.date,
                     tripNumber: t.departure.tripNumber,
                     tripDetails: t.departure.tripDetails,
                     onTripNumberChange: function (e) {
                        return j(ec.updateDepartureTripNumber, e);
                     },
                     onTripDetailsChange: function (e) {
                        return j(ec.updateDepartureTripDetails, e);
                     },
                     readOnly: i,
                  })
               ),
               St.a.createElement(
                  "div",
                  { className: "field compact" },
                  St.a.createElement(hc, {
                     prefix: "start",
                     date: t.departure.date,
                     hour: t.departure.hour,
                     maxHour: (function () {
                        var e = u()(t.departure.date).isSame(
                              t.arrival.date,
                              "day"
                           )
                              ? cc(t.arrival.date, t.arrival.hour)
                              : null,
                           a = t.departure.tripDetails
                              ? sc(t.departure.tripDetails.departureTime)
                              : null;
                        return e && a
                           ? u.a.min(e, a).format("HH:mm")
                           : e
                           ? e.format("HH:mm")
                           : a
                           ? a.format("HH:mm")
                           : null;
                     })(),
                     label: "booking-hour_start_label",
                     slots: l,
                     tripDetails: t.departure.tripDetails,
                     notice: "booking-departure_notice",
                     onHourChange: function (e) {
                        return j(ec.updateDepartureHour, e);
                     },
                     isFetchingSlots: f,
                     siteType: t.departure.siteKind,
                     readOnly: i,
                  })
               ),
               St.a.createElement("div", { className: "field compact" }),
               St.a.createElement(
                  "div",
                  { className: "field compact" },
                  St.a.createElement(vc, {
                     prefix: "end",
                     notice: "booking-arrival_notice",
                     date: t.arrival.date,
                     minDate: dc(u.a.max(oc(t.departure.date), u()())),
                     label: "".concat(S("booking-arrival_date"), " *"),
                     onDateChange: function (e) {
                        return j(ec.updateArrivalDate, e);
                     },
                  })
               ),
               St.a.createElement(
                  "div",
                  { className: "field compact" },
                  St.a.createElement(yc, {
                     prefix: Oc,
                     site: t.arrival.site,
                     siteType: t.arrival.siteKind,
                     date: t.arrival.date,
                     tripNumber: t.arrival.tripNumber,
                     tripDetails: t.arrival.tripDetails,
                     onTripNumberChange: function (e) {
                        return j(ec.updateArrivalTripNumber, e);
                     },
                     onTripDetailsChange: function (e) {
                        return j(ec.updateArrivalTripDetails, e);
                     },
                  })
               ),
               St.a.createElement(
                  "div",
                  { className: "field compact" },
                  St.a.createElement(hc, {
                     prefix: "end",
                     date: t.arrival.date,
                     hour: t.arrival.hour,
                     minHour: u()(t.arrival.date).isSame(
                        t.departure.date,
                        "day"
                     )
                        ? t.departure.hour
                        : null,
                     label: (function (e) {
                        switch (e) {
                           case se.Airport:
                              return "booking-hour_end_flight_label";
                           case se.Station:
                              return "booking-hour_end_train_label";
                           default:
                              return "booking-hour_end_label";
                        }
                     })(t.arrival.siteKind),
                     slots: h,
                     tripDetails: t.arrival.tripDetails,
                     notice: "booking-arrival_notice",
                     onHourChange: function (e) {
                        return j(ec.updateArrivalHour, e);
                     },
                     isFetchingSlots: y,
                     siteType: t.arrival.siteKind,
                     required: !0,
                  })
               ),
               St.a.createElement("div", { className: "field compact" })
            );
         }
         var Sc = a(302),
            jc = a.n(Sc),
            _c = (function () {
               var e = Object(Ht.a)(
                  xt.a.mark(function e(t, a) {
                     var n, r, i, o, s, l, u, d, p, m;
                     return xt.a.wrap(
                        function (e) {
                           for (;;)
                              switch ((e.prev = e.next)) {
                                 case 0:
                                    return (
                                       (n = c()("#orderUpdateForm")),
                                       (r = n.attr("data-order-id")),
                                       (i = function (e) {
                                          return n
                                             .find(
                                                'input[name="'
                                                   .concat(
                                                      e,
                                                      '"], select[name="'
                                                   )
                                                   .concat(e, '"]')
                                             )
                                             .val();
                                       }),
                                       (o = { vehicle: {}, address: {} }),
                                       [
                                          "startDate",
                                          "startHour",
                                          "endDate",
                                          "endHour",
                                          "endTripNumber",
                                          "startTripNumber",
                                          "lastName",
                                          "firstName",
                                          "email",
                                          "phoneNumber",
                                          "company",
                                          "vehicle.kind",
                                          "vehicle.color",
                                          "address.firstLine",
                                          "address.secondLine",
                                          "address.zipCode",
                                          "address.city",
                                          "address.country",
                                       ].forEach(function (e) {
                                          var t = e.split(".");
                                          2 === t.length
                                             ? (o[t[0]][t[1]] = i(e))
                                             : (o[e] = i(e));
                                       }),
                                       (e.prev = 6),
                                       (e.next = 9),
                                       V.simulateUpdate(r, o)
                                    );
                                 case 9:
                                    if (!(s = e.sent) || !s.changes) {
                                       e.next = 34;
                                       break;
                                    }
                                    if (
                                       ((l = ""),
                                       s.hasCancellationOption
                                          ? (l += "<p>".concat(
                                               C.t(
                                                  "order_simulate_modal_has_cancellation_option"
                                               ),
                                               "</p>"
                                            ))
                                          : (l += "<p>".concat(
                                               C.t(
                                                  "order_simulate_modal_no_cancellation_option"
                                               ),
                                               "</p>"
                                            )),
                                       (u =
                                          (s.changes.startDate &&
                                             s.changes.startDate !==
                                                s.changes.previousStartDate) ||
                                          (s.changes.startHour &&
                                             s.changes.startHour !==
                                                s.changes.previousStartHour)),
                                       (d =
                                          (s.changes.endDate &&
                                             s.changes.endDate !==
                                                s.changes.previousEndDate) ||
                                          (s.changes.endHour &&
                                             s.changes.endHour !==
                                                s.changes.previousEndHour)),
                                       u && d
                                          ? (l += "<p>".concat(
                                               C.t(
                                                  "order_simulate_modal_change_date_in_and_out",
                                                  {
                                                     startDate:
                                                        s.changes.startDate,
                                                     startHour:
                                                        s.changes.startHour,
                                                     endDate: s.changes.endDate,
                                                     endHour: s.changes.endHour,
                                                  }
                                               ),
                                               "</p>"
                                            ))
                                          : u
                                          ? (l += "<p>".concat(
                                               C.t(
                                                  "order_simulate_modal_change_date_in",
                                                  {
                                                     startDate:
                                                        s.changes.startDate,
                                                     startHour:
                                                        s.changes.startHour,
                                                  }
                                               ),
                                               "</p>"
                                            ))
                                          : d &&
                                            (l += "<p>".concat(
                                               C.t(
                                                  "order_simulate_modal_change_date_out",
                                                  {
                                                     endDate: s.changes.endDate,
                                                     endHour: s.changes.endHour,
                                                  }
                                               ),
                                               "</p>"
                                            )),
                                       !s.balance ||
                                          0 === s.balance.pendingTotal)
                                    ) {
                                       e.next = 33;
                                       break;
                                    }
                                    if (
                                       ((p = ""),
                                       (m = {
                                          newTotal: s.balance.newTotal,
                                          alreadyPaid: s.balance.alreadyPaid,
                                          endDate: s.changes.endDate,
                                       }),
                                       !(s.balance.pendingTotal > 0))
                                    ) {
                                       e.next = 30;
                                       break;
                                    }
                                    (m.pendingTotal = s.balance.pendingTotal),
                                       (e.t0 = s.balance.pendingPaymentType),
                                       (e.next =
                                          "paytweak" === e.t0
                                             ? 24
                                             : (e.t0, 26));
                                    break;
                                 case 24:
                                    return (
                                       (p =
                                          "order_simulate_modal_new_balance_with_paytweak"),
                                       e.abrupt("break", 28)
                                    );
                                 case 26:
                                    return (
                                       (p =
                                          "order_simulate_modal_new_balance_with_payment"),
                                       e.abrupt("break", 28)
                                    );
                                 case 28:
                                    e.next = 32;
                                    break;
                                 case 30:
                                    (p =
                                       "order_simulate_modal_new_balance_with_refund"),
                                       (m.pendingTotal =
                                          -s.balance.pendingTotal);
                                 case 32:
                                    l += "<p>".concat(C.t(p, m), "</p>");
                                 case 33:
                                    u || d
                                       ? (t.find("#SimulationContent").html(l),
                                         c.a.magnificPopup.open({
                                            items: { src: t },
                                         }))
                                       : a();
                                 case 34:
                                    e.next = 39;
                                    break;
                                 case 36:
                                    (e.prev = 36),
                                       (e.t1 = e.catch(6)),
                                       e.t1 &&
                                          e.t1.res &&
                                          e.t1.res.json().then(function (e) {
                                             if (e && e.message) {
                                                var t = jc()(e.message)
                                                      ? e.message.join("<br>")
                                                      : e.message,
                                                   a = c()("#ErrorContainer");
                                                a.html(
                                                   "<div class='message alert'>".concat(
                                                      t,
                                                      "</div>"
                                                   )
                                                ),
                                                   zt(a);
                                             }
                                          });
                                 case 39:
                                 case "end":
                                    return e.stop();
                              }
                        },
                        e,
                        null,
                        [[6, 36]]
                     );
                  })
               );
               return function (t, a) {
                  return e.apply(this, arguments);
               };
            })(),
            wc = function () {
               mn(), Lr(), pn(), Ir(), dn("sites-slider-container"), Bo();
            },
            Lc = function () {
               mn(), Lr(), ya(), pn(), pa(), Bo();
            },
            Tc = function () {
               Lr(), ya(), Bo(), pn();
            },
            Nc = function () {
               Lr(),
                  (function () {
                     var e = document.getElementsByClassName("siteCardRoot");
                     e &&
                        e.length &&
                        Object(Lt.a)(e).forEach(function (e) {
                           var t = e.getAttribute("data-site");
                           _t.a.render(
                              St.a.createElement(
                                 St.a.Suspense,
                                 { fallback: St.a.createElement("div", null) },
                                 St.a.createElement(
                                    wt.a,
                                    { i18n: C },
                                    St.a.createElement(rn, {
                                       siteKey: t,
                                       withLink: !1,
                                    })
                                 )
                              ),
                              e
                           );
                        });
                  })();
            },
            Dc = function () {
               pa();
            },
            Ac = function () {
               Ao(), Po();
            },
            Ic = function () {
               Po();
            },
            Mc = function () {
               !(function () {
                  var e = c()("#ValidateForm");
                  e.length && (Fr(e), m(e));
                  var t = c()("#FinishForm");
                  t.length && Fo(t);
               })();
            },
            Fc = function () {
               Bo();
            },
            Rc = function () {
               Yo();
            },
            xc = function () {
               !(function () {
                  var e = document.getElementById("ExternalRatingsRoot"),
                     t = document.getElementById("ReviewsListRoot"),
                     a = cn ? 8 : 4;
                  if (
                     (e &&
                        _t.a.render(
                           St.a.createElement(
                              St.a.Suspense,
                              { fallback: St.a.createElement("div", null) },
                              St.a.createElement(
                                 wt.a,
                                 { i18n: C },
                                 St.a.createElement(Uo, null)
                              )
                           ),
                           e
                        ),
                     t)
                  ) {
                     var n = window.__INITIAL_DATA__,
                        r = n.items,
                        i = n.total,
                        o = r.slice(0, a);
                     _t.a.render(
                        St.a.createElement(
                           St.a.Suspense,
                           { fallback: St.a.createElement("div", null) },
                           St.a.createElement(
                              wt.a,
                              { i18n: C },
                              St.a.createElement(Vo, {
                                 items: o,
                                 total: i,
                                 limitPerPage: a,
                              })
                           )
                        ),
                        t
                     );
                  }
               })(),
                  dn("SitesSliderRoot");
            },
            Hc = function () {
               Xo(".stars"),
                  Xo(".eval"),
                  $o(),
                  Ko.on("click", Wo),
                  Jo.on("click", qo),
                  Go.on("click", ".submit .Link", Qo);
            },
            Pc = function () {
               c()("#RemoveAccount").on("click", function (e) {
                  e.preventDefault();
                  var t = c()(e.target),
                     a = t.attr("data-content"),
                     n = t.attr("data-url");
                  if (a && n && window.confirm(a)) {
                     var r = document.createElement("form");
                     r.setAttribute("method", "POST"),
                        r.setAttribute("action", n),
                        document.body.appendChild(r),
                        r.submit();
                  }
               });
            },
            Bc = function () {
               !(function () {
                  var e = c()("#ConfirmUpdateModal"),
                     t = function () {
                        c()("#orderUpdateForm").trigger("submit");
                     };
                  if (e && e.length) {
                     e.find(".js-close-popup").on("click", function () {
                        return c.a.magnificPopup.close();
                     }),
                        e.find(".js-submit-popup").on("click", function () {
                           t();
                        });
                     var a = c()("#SimulateUpdateBtn");
                     a.on(
                        "click",
                        (function () {
                           var n = Object(Ht.a)(
                              xt.a.mark(function n(r) {
                                 return xt.a.wrap(function (n) {
                                    for (;;)
                                       switch ((n.prev = n.next)) {
                                          case 0:
                                             return (
                                                r.preventDefault(),
                                                a.addClass("loading"),
                                                a.prop("disabled", !0),
                                                (n.next = 5),
                                                _c(e, t)
                                             );
                                          case 5:
                                             return (
                                                a.removeClass("loading"),
                                                a.prop("disabled", !1),
                                                n.abrupt("return", !1)
                                             );
                                          case 8:
                                          case "end":
                                             return n.stop();
                                       }
                                 }, n);
                              })
                           );
                           return function (e) {
                              return n.apply(this, arguments);
                           };
                        })()
                     );
                  }
                  var n = c()("#CancelModal");
                  n &&
                     n.length &&
                     (n.find(".js-close-popup").on("click", function () {
                        return c.a.magnificPopup.close();
                     }),
                     n.find("form").on("submit", function (e) {
                        return (
                           c()(e.currentTarget)
                              .find('button[type="submit"]')
                              .prop("disabled", !0),
                           !0
                        );
                     }),
                     c()("#CancelOrder").on("click", function (e) {
                        return (
                           e.preventDefault(),
                           c.a.magnificPopup.open({ items: { src: n } }),
                           !1
                        );
                     }));
                  var r = document.getElementById("TripRoot"),
                     i = r.getAttribute("data-departure-trip-details"),
                     o = r.getAttribute("data-arrival-trip-details"),
                     s = {
                        orderId: r.getAttribute("data-order-id"),
                        departure: {
                           site: r.getAttribute("data-departure-site"),
                           siteKind: r.getAttribute("data-departure-site-kind"),
                           date: r.getAttribute("data-departure-date"),
                           hour: r.getAttribute("data-departure-hour"),
                           tripNumber: r.getAttribute(
                              "data-departure-trip-number"
                           ),
                           tripDetails: i ? JSON.parse(i) : null,
                        },
                        arrival: {
                           site: r.getAttribute("data-arrival-site"),
                           siteKind: r.getAttribute("data-arrival-site-kind"),
                           date: r.getAttribute("data-arrival-date"),
                           hour: r.getAttribute("data-arrival-hour"),
                           tripNumber: r.getAttribute(
                              "data-arrival-trip-number"
                           ),
                           tripDetails: o ? JSON.parse(o) : null,
                        },
                     };
                  r &&
                     _t.a.render(
                        St.a.createElement(
                           St.a.Suspense,
                           { fallback: St.a.createElement("div", null) },
                           St.a.createElement(
                              wt.a,
                              { i18n: C },
                              St.a.createElement(
                                 rc,
                                 { initState: s },
                                 St.a.createElement(kc, null)
                              )
                           )
                        ),
                        r
                     );
               })();
            };
         [Yt, Ut, Vt, Zt, Gt, Kt, Jt, Qt, ea, ca].map(function (e) {
            return e.call(void 0);
         }),
            la()("/fr", wc),
            la()("/en", wc),
            la()("/es", wc),
            la()("/nl", wc),
            la()("/pt", wc),
            la()("/it", wc),
            la()("/:lang/landing/*/parking-longue-duree", Dc),
            la()("/:lang/landing/*", Lc),
            la()("/:lang/ads/*", Tc),
            la()("/:lang/parking-aeroport", Nc),
            la()("/:lang/cart", Ac),
            la()("/:lang/cart/*", Ac),
            la()("/cart", Ac),
            la()("/cart/*", Ac),
            la()("/cart/payment", Ic),
            la()("/:lang/cart/payment", Ic),
            la()("/:lang/credit-packs/:id", Mc),
            la()("/credit-packs/:id", Mc),
            la()("/:lang/credit-pack/payment/:id", Mc),
            la()("/credit-pack/payment/:id", Mc),
            la()("/:lang/code-promo", Fc),
            la()("/:lang/reviews", xc),
            la()("/:lang/reviews/new", Hc),
            la()("/reviews/new", Hc),
            la()("/:lang/affiliate", Rc),
            la()("/:lang/my-account/profile", Pc),
            la()("/my-account/profile", Pc),
            la()("/:lang/orders/:id", Bc),
            la()("/orders/:id", Bc),
            la.a.start({ click: !1, popstate: !1 }),
            c()("#loginBtn").on("click", function () {
               d("login_header", {});
            }),
            (function () {
               var e = document.getElementById("footerReviewContainer");
               e &&
                  _t.a.render(
                     St.a.createElement(
                        St.a.Suspense,
                        { fallback: St.a.createElement("div", null) },
                        St.a.createElement(
                           wt.a,
                           { i18n: C },
                           St.a.createElement(Ft, null)
                        )
                     ),
                     e
                  );
            })(),
            c()(".NewsletterForm").on(
               "submit",
               (function () {
                  var e = Object(Ht.a)(
                     xt.a.mark(function e(t) {
                        var a, n;
                        return xt.a.wrap(function (e) {
                           for (;;)
                              switch ((e.prev = e.next)) {
                                 case 0:
                                    return (
                                       Ct(
                                          (n =
                                             null === (a = t.target) ||
                                             void 0 === a
                                                ? void 0
                                                : a.getAttribute("data-from"))
                                       ),
                                       t.preventDefault(),
                                       (e.next = 5),
                                       window.grecaptcha.enterprise.ready(
                                          Object(Ht.a)(
                                             xt.a.mark(function e() {
                                                var a;
                                                return xt.a.wrap(function (e) {
                                                   for (;;)
                                                      switch (
                                                         (e.prev = e.next)
                                                      ) {
                                                         case 0:
                                                            return (
                                                               (e.next = 2),
                                                               window.grecaptcha.enterprise.execute(
                                                                  window.RECAPTCHA_API_KEY,
                                                                  {
                                                                     action:
                                                                        "newsletter",
                                                                  }
                                                               )
                                                            );
                                                         case 2:
                                                            (a = e.sent),
                                                               c()(
                                                                  '.NewsletterForm[data-from="'.concat(
                                                                     n,
                                                                     '"] input[name="token"]'
                                                                  )
                                                               ).val(a),
                                                               t.currentTarget.submit();
                                                         case 5:
                                                         case "end":
                                                            return e.stop();
                                                      }
                                                }, e);
                                             })
                                          )
                                       )
                                    );
                                 case 5:
                                 case "end":
                                    return e.stop();
                              }
                        }, e);
                     })
                  );
                  return function (t) {
                     return e.apply(this, arguments);
                  };
               })()
            );
      },
   },
   [[303, 1, 2]],
]);
//# sourceMappingURL=main.ad56b556.chunk.js.map
