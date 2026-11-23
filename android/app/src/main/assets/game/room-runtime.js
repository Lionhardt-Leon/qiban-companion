function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function () {
  (function () {
    "use strict";

    var RULES_VERSION = "qiban-tycoon/1";
    var SUITS = ["\u2663", "\u2666", "\u2665", "\u2660", "\u2605"];
    var face = function face(rank) {
      return {
        11: "J",
        12: "Q",
        13: "K",
        14: "A",
        15: "2",
        16: "JOKER"
      }[rank] || String(rank);
    };
    var card = function card(id) {
      return Number.isInteger(id) && id >= 0 && id < 54 ? {
        id: id,
        suit: id < 52 ? Math.floor(id / 13) : 4,
        rank: id < 52 ? id % 13 + 3 : 16
      } : null;
    };
    var label = function label(id) {
      var c = card(id);
      return c ? c.suit === 4 ? "JOKER" : SUITS[c.suit] + face(c.rank) : "?";
    };
    var titles = function titles(n) {
      return n === 3 ? ["\u5927\u5BCC\u8C6A", "\u5E73\u6C11", "\u5927\u8D2B\u6C11"] : ["\u5927\u5BCC\u7FC1", "\u5BCC\u7FC1", "\u8D2B\u6C11", "\u5927\u8D2B\u6C11"];
    };
    var fail = function fail(message) {
      throw new Error(message);
    };
    var clone = function clone(x) {
      return JSON.parse(JSON.stringify(x));
    };
    function makePlay(ids) {
      if (!Array.isArray(ids) || ids.length < 1 || ids.length > 4 || new Set(ids).size !== ids.length) fail("\u8BF7\u9009\u62E9 1\uFF5E4 \u5F20\u4E0D\u540C\u7684\u624B\u724C\u3002");
      var cards = ids.map(card);
      if (cards.some(function (c) {
        return !c;
      })) fail("\u724C\u7F16\u53F7\u65E0\u6548\u3002");
      var ranks = _toConsumableArray(new Set(cards.filter(function (c) {
        return c.suit !== 4;
      }).map(function (c) {
        return c.rank;
      })));
      if (ranks.length > 1) fail("\u53EA\u652F\u6301\u540C\u70B9\u6570\u724C\u7EC4\uFF1B\u6CA1\u6709\u987A\u5B50\u6216\u4E09\u5E26\u4E8C\u3002");
      return {
        ids: _toConsumableArray(ids),
        count: ids.length,
        rank: ranks[0] || 16,
        joker: ids.length === 1 && cards[0].suit === 4,
        doubleJoker: ids.length === 2 && cards.every(function (c) {
          return c.suit === 4;
        }),
        spadeThree: ids.length === 1 && ids[0] === 39,
        cut: cards.some(function (c) {
          return c.suit !== 4 && c.rank === 8;
        })
      };
    }
    function beats(play, table) {
      var revolution = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!table) return true;
      if (play.count !== table.count || table.doubleJoker) return false;
      if (play.doubleJoker) return true;
      if (table.joker) return play.spadeThree;
      if (play.joker) return true;
      return revolution ? play.rank < table.rank : play.rank > table.rank;
    }
    var active = function active(g, seat) {
      return seat >= 0 && seat < g.players.length && seat !== g.fallen && !g.order.includes(seat) && g.players[seat].hand.length > 0;
    };
    var next = function next(g, seat) {
      for (var step = 1; step <= g.players.length; step++) {
        var s = (seat + step + g.players.length) % g.players.length;
        if (active(g, s)) return s;
      }
      return -1;
    };
    var log = function log(g, text2) {
      g.log.push(text2);
      if (g.log.length > 160) g.log.shift();
    };
    var gift = function gift(g, seat) {
      var i = g.previous.indexOf(seat);
      return g.players.length === 3 ? i === 0 ? 1 : 0 : i === 0 ? 2 : i === 1 ? 1 : 0;
    };
    function createGame(players) {
      var random = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.random;
      if (![3, 4].includes(players == null ? void 0 : players.length)) fail("\u724C\u5C40\u9700\u8981 3 \u6216 4 \u4E2A\u5EA7\u4F4D\u3002");
      var g = {
        schema: RULES_VERSION,
        players: players.map(function (p, i) {
          return {
            name: String(p.name || "\u73A9\u5BB6 ".concat(i + 1)).slice(0, 24),
            character: p.character || "",
            bot: !!p.bot,
            hand: [],
            status: "\u7B49\u5F85",
            score: 0
          };
        }),
        round: 0,
        phase: "finished",
        order: [],
        previous: [],
        table: null,
        lastPlay: null,
        lastActor: -1,
        current: -1,
        leader: -1,
        fallen: -1,
        revolution: false,
        passes: 0,
        exchanges: {},
        log: [],
        revision: 0
      };
      return startRound(g, random);
    }
    function startRound(g) {
      var random = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.random;
      if (g.phase !== "finished") fail("\u672C\u5C40\u5C1A\u672A\u7ED3\u675F\u3002");
      if (g.round > 0) g.previous = _toConsumableArray(g.order);
      g.round++;
      g.order = [];
      g.table = null;
      g.lastPlay = null;
      g.lastActor = -1;
      g.leader = -1;
      g.fallen = -1;
      g.revolution = false;
      g.passes = 0;
      g.exchanges = {};
      g.log = [];
      var deck = Array.from({
        length: 54
      }, function (_, i) {
        return i;
      });
      for (var i = 53; i > 0; i--) {
        var j = Math.floor(random() * (i + 1));
        var _ref = [deck[j], deck[i]];
        deck[i] = _ref[0];
        deck[j] = _ref[1];
      }
      g.players.forEach(function (p) {
        p.hand = [];
        p.status = "\u7B49\u5F85";
        p.lastAction = null;
      });
      deck.forEach(function (id, i) {
        return g.players[(i + g.round - 1) % g.players.length].hand.push(id);
      });
      g.players.forEach(function (p) {
        return p.hand.sort(function (a, b) {
          return a % 13 - b % 13 || a - b;
        });
      });
      g.current = g.previous.length ? g.previous.at(-1) : g.players.findIndex(function (p) {
        return p.hand.includes(13);
      });
      g.phase = g.previous.length ? "exchange" : "playing";
      log(g, "\u7B2C ".concat(g.round, " \u5C40 \xB7 ").concat(g.players.length, " \u4EBA \xB7 54 \u5F20\u724C"));
      if (g.phase === "exchange") {
        for (var _i = 0; _i < g.players.length; _i++) if (g.players[_i].bot && gift(g, _i)) g.exchanges[_i] = weakest(g.players[_i].hand, gift(g, _i));
        finishExchange(g);
      } else log(g, "".concat(g.players[g.current].name, "\u5148\u624B\uFF08\u6301\u65B9\u5757 3\uFF0C\u9996\u624B\u81EA\u7531\uFF09"));
      g.revision++;
      return g;
    }
    function weakest(hand, n) {
      return _toConsumableArray(hand).sort(function (a, b) {
        return card(a).rank - card(b).rank || a - b;
      }).slice(0, n);
    }
    function finishExchange(g) {
      var high = g.previous.filter(function (s) {
        return gift(g, s);
      });
      if (high.some(function (s) {
        return !g.exchanges[s];
      })) return;
      var transfers = [];
      var _iterator = _createForOfIteratorHelper(high),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var s = _step.value;
          var rank = g.previous.indexOf(s),
            low = g.previous[g.players.length - 1 - rank],
            n = gift(g, s);
          var tribute = _toConsumableArray(g.players[low].hand).sort(function (a, b) {
            return card(b).rank - card(a).rank || a - b;
          }).slice(0, n);
          transfers.push([s, low, g.exchanges[s]], [low, s, tribute]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var _loop = function _loop() {
        var _transfers$_i = _slicedToArray(_transfers[_i2], 3),
          from = _transfers$_i[0],
          ids = _transfers$_i[2];
        g.players[from].hand = g.players[from].hand.filter(function (id) {
          return !ids.includes(id);
        });
      };
      for (var _i2 = 0, _transfers = transfers; _i2 < _transfers.length; _i2++) {
        _loop();
      }
      for (var _i3 = 0, _transfers2 = transfers; _i3 < _transfers2.length; _i3++) {
        var _g$players$to$hand;
        var _transfers2$_i = _slicedToArray(_transfers2[_i3], 3),
          to = _transfers2$_i[1],
          ids = _transfers2$_i[2];
        (_g$players$to$hand = g.players[to].hand).push.apply(_g$players$to$hand, _toConsumableArray(ids));
      }
      g.exchanges = {};
      g.phase = "playing";
      log(g, "\u6362\u724C\u5B8C\u6210\uFF1A\u4F4E\u540D\u6B21\u4EA4\u51FA\u6700\u5F3A\u724C\uFF0C\u9AD8\u540D\u6B21\u56DE\u8D60\u6240\u9009\u724C\u3002");
      log(g, "".concat(g.players[g.current].name, "\u5148\u624B\uFF08\u4E0A\u5C40\u6700\u540E\u4E00\u540D\uFF09"));
    }
    function clear(g, reason) {
      g.current = active(g, g.leader) ? g.leader : next(g, g.leader);
      g.table = null;
      g.leader = -1;
      g.passes = 0;
      g.players.forEach(function (p) {
        if (p.status === "PASS") p.status = "\u7B49\u5F85";
      });
      log(g, reason);
    }
    function finish(g, seat) {
      g.order.push(seat);
      g.players[seat].status = "\u7B2C ".concat(g.order.length, " \u540D");
      log(g, "".concat(g.players[seat].name, "\u51FA\u5B8C\u624B\u724C\uFF0C\u7B2C ").concat(g.order.length, " \u540D"));
      if (g.order.length === 1 && g.previous.length && seat !== g.previous[0]) {
        g.fallen = g.previous[0];
        g.players[g.fallen].status = "\u90FD\u843D\u3061";
        log(g, "".concat(g.players[g.fallen].name, "\u672A\u536B\u5195\uFF0C\u4E00\u843D\u5343\u4E08\uFF0C\u76F4\u63A5\u6700\u540E\u4E00\u540D\u3002"));
      }
    }
    function complete(g) {
      var _g$order;
      var remaining = g.players.map(function (_, i) {
        return i;
      }).filter(function (i) {
        return active(g, i);
      });
      if (remaining.length > 1) return false;
      (_g$order = g.order).push.apply(_g$order, _toConsumableArray(remaining));
      if (g.fallen >= 0) g.order.push(g.fallen);
      g.order.forEach(function (seat, rank) {
        g.players[seat].status = titles(g.players.length)[rank];
        g.players[seat].score += g.players.length - 1 - rank;
      });
      g.phase = "finished";
      g.current = -1;
      log(g, "\u672C\u5C40\u7ED3\u675F\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u4E0B\u4E00\u5C40\u3002");
      return true;
    }
    function act(g, seat, action) {
      var _a, _b;
      if (!Number.isInteger(seat) || !g.players[seat]) fail("\u5EA7\u4F4D\u65E0\u6548\u3002");
      if ((action == null ? void 0 : action.type) === "exchange") {
        var ids = action.ids,
          n = gift(g, seat);
        if (g.phase !== "exchange" || !n || g.exchanges[seat]) fail("\u5F53\u524D\u65E0\u9700\u56DE\u8D60\uFF0C\u6216\u5DF2\u63D0\u4EA4\u3002");
        if (!Array.isArray(ids) || ids.length !== n || new Set(ids).size !== n || ids.some(function (id) {
          return !g.players[seat].hand.includes(id);
        })) fail("\u8BF7\u9009\u62E9 ".concat(n, " \u5F20\u81EA\u5DF1\u7684\u724C\u56DE\u8D60\u3002"));
        g.exchanges[seat] = _toConsumableArray(ids);
        finishExchange(g);
        g.revision++;
        return g;
      }
      if (g.phase !== "playing" || g.current !== seat || !active(g, seat)) fail("\u8FD8\u6CA1\u8F6E\u5230\u4F60\u3002");
      if ((action == null ? void 0 : action.type) === "pass") {
        if (!g.table) fail("\u9886\u51FA\u65F6\u4E0D\u80FD PASS\u3002");
        g.passes++;
        g.players[seat].status = "PASS";
        g.players[seat].lastAction = {
          type: "pass"
        };
        log(g, "".concat(g.players[seat].name, "\uFF1APASS"));
        var others = g.players.filter(function (_, i) {
          return active(g, i) && i !== g.leader;
        }).length;
        if (g.passes >= others) clear(g, "\u5176\u4ED6\u5728\u573A\u73A9\u5BB6\u5168\u90E8 PASS\uFF0C\u91CD\u65B0\u9886\u51FA\u3002");else g.current = next(g, seat);
      } else if ((action == null ? void 0 : action.type) === "play") {
        var play = makePlay(action.ids);
        if (play.ids.some(function (id) {
          return !g.players[seat].hand.includes(id);
        })) fail("\u53EA\u80FD\u51FA\u81EA\u5DF1\u7684\u624B\u724C\u3002");
        if (!beats(play, g.table, g.revolution)) fail(((_a = g.table) == null ? void 0 : _a.joker) ? "\u5355\u5F20 Joker \u53EA\u80FD\u7531\u9ED1\u6843 3 \u53CD\u5236\u3002" : "\u724C\u578B\u5F20\u6570\u987B\u76F8\u540C\uFF0C\u4E14\u70B9\u6570\u5FC5\u987B\u66F4\u5F3A\u3002");
        var counter = play.spadeThree && ((_b = g.table) == null ? void 0 : _b.joker);
        g.players[seat].hand = g.players[seat].hand.filter(function (id) {
          return !play.ids.includes(id);
        });
        g.table = play;
        g.lastPlay = play;
        g.lastActor = seat;
        g.leader = seat;
        g.passes = 0;
        g.players.forEach(function (p) {
          if (p.status === "PASS") p.status = "\u7B49\u5F85";
        });
        g.players[seat].status = play.ids.map(label).join(" ");
        g.players[seat].lastAction = {
          type: "play",
          play: play
        };
        log(g, "".concat(g.players[seat].name, "\uFF1A").concat(g.players[seat].status));
        if (play.count === 4) {
          g.revolution = !g.revolution;
          log(g, g.revolution ? "\u9769\u547D\uFF013 \u6700\u5927\uFF0C2 \u6700\u5C0F\uFF1BJoker \u4ECD\u6700\u5927\u3002" : "\u53CD\u9769\u547D\uFF01\u6062\u590D\u6B63\u5E38\u724C\u529B\u3002");
        }
        if (!g.players[seat].hand.length) finish(g, seat);
        if (!complete(g)) {
          if (play.cut || counter) clear(g, counter ? "\u9ED1\u6843 3 \u53CD\u5236 Joker\uFF0C\u7ACB\u5373\u6E05\u573A\u3002" : "8 \u5207\uFF0C\u7ACB\u5373\u6E05\u573A\u3002");else g.current = next(g, seat);
        }
      } else fail("\u4E0D\u652F\u6301\u7684\u51FA\u724C\u64CD\u4F5C\u3002");
      g.revision++;
      return g;
    }
    function legalMoves(g, seat) {
      if (g.phase !== "playing" || g.current !== seat) return [];
      var hand = g.players[seat].hand,
        result = [],
        _visit = function visit(at, ids) {
          var _a;
          if (ids.length) {
            try {
              var p = makePlay(ids);
              if (beats(p, g.table, g.revolution)) result.push(p);
            } catch (e) {}
          }
          if (ids.length === 4) return;
          for (var i = at; i < hand.length; i++) {
            var rank = (_a = ids.map(card).find(function (c2) {
                return c2.suit !== 4;
              })) == null ? void 0 : _a.rank,
              c = card(hand[i]);
            if (rank && c.suit !== 4 && c.rank !== rank) continue;
            _visit(i + 1, [].concat(_toConsumableArray(ids), [hand[i]]));
          }
        };
      _visit(0, []);
      return result;
    }
    function botAction(g, seat) {
      var difficulty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "normal";
      var random = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Math.random;
      if (g.phase === "exchange") return {
        type: "exchange",
        ids: weakest(g.players[seat].hand, gift(g, seat))
      };
      var moves = legalMoves(g, seat);
      if (!moves.length) return {
        type: "pass"
      };
      var hand = g.players[seat].hand,
        finish2 = moves.find(function (p) {
          return p.count === hand.length;
        });
      if (finish2) return {
        type: "play",
        ids: finish2.ids
      };
      if (difficulty === "easy") return {
        type: "play",
        ids: moves[Math.floor(random() * moves.length)].ids
      };
      var urgent = g.players.some(function (p, i) {
        return i !== seat && active(g, i) && p.hand.length <= 2;
      });
      var score = function score(p) {
        var left = hand.filter(function (id) {
            return !p.ids.includes(id);
          }),
          groups = new Set(left.filter(function (id) {
            return card(id).suit !== 4;
          }).map(function (id) {
            return card(id).rank;
          })).size;
        var strength = p.joker || p.doubleJoker ? 22 : g.revolution ? 18 - p.rank : p.rank;
        var n = p.count * 7 - groups * 22 - strength * (urgent ? 0.1 : 1.2) - p.ids.filter(function (id) {
          return card(id).suit === 4;
        }).length * (urgent ? 2 : 16);
        if (p.cut) n += left.length <= 4 ? 45 : 4;
        if (difficulty === "hard") {
          if (!g.table && g.players.some(function (p2, i) {
            return i !== seat && active(g, i) && p2.hand.length === 1;
          }) && p.count > 1) n += 35;
          if (p.count === 4) n += left.reduce(function (sum, id) {
            return sum + (g.revolution ? card(id).rank - 9 : 9 - card(id).rank);
          }, 0) * 2;
          if (urgent) n += strength * 3;
        }
        return n;
      };
      moves.sort(function (a, b) {
        return score(b) - score(a);
      });
      return {
        type: "play",
        ids: moves[0].ids
      };
    }
    function viewFor(g, seat) {
      var v = clone(g);
      v.players.forEach(function (p, i) {
        p.count = p.hand.length;
        if (i !== seat) delete p.hand;
      });
      v.exchangeCount = g.phase === "exchange" ? gift(g, seat) : 0;
      v.exchangeSubmitted = !!g.exchanges[seat];
      delete v.exchanges;
      v.seat = seat;
      return v;
    }
    function restoreGame(value) {
      var _a;
      var g = clone(value);
      if (g.schema !== RULES_VERSION || ![3, 4].includes((_a = g.players) == null ? void 0 : _a.length) || !["playing", "exchange", "finished"].includes(g.phase)) fail("\u5355\u673A\u5B58\u6863\u7248\u672C\u65E0\u6548\u3002");
      var ids = g.players.flatMap(function (p) {
        return p.hand;
      });
      if (ids.some(function (id) {
        return !card(id);
      }) || new Set(ids).size !== ids.length || g.order.some(function (i) {
        return !g.players[i];
      })) fail("\u5355\u673A\u5B58\u6863\u724C\u7EC4\u635F\u574F\u3002");
      return g;
    }
    var text = function text(v) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 24;
      return String(v != null ? v : "").trim().slice(0, n);
    };
    var error = function error(message) {
      throw new Error(message);
    };
    function cleanAppearance() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var image = function image(s) {
        if (s == null || s === "") return "";
        if (typeof s !== "string" || s.length > 8e5 || !/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(s)) error("\u81EA\u5B9A\u4E49\u7ACB\u7ED8\u987B\u4E3A 600KB \u4EE5\u5185\u7684 PNG\u3001JPEG \u6216 WebP\u3002");
        return s;
      };
      return {
        id: text(value.id, 80),
        name: text(value.name) || "\u81EA\u5B9A\u4E49\u89D2\u8272",
        portrait: image(value.portrait),
        avatar: image(value.avatar)
      };
    }
    var RoomCore = /*#__PURE__*/function () {
      function RoomCore() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$now = _ref2.now,
          now = _ref2$now === void 0 ? Date.now : _ref2$now,
          _ref2$random = _ref2.random,
          random = _ref2$random === void 0 ? Math.random : _ref2$random,
          crypto = _ref2.crypto,
          _ref2$onError = _ref2.onError,
          onError = _ref2$onError === void 0 ? function () {} : _ref2$onError;
        _classCallCheck(this, RoomCore);
        if (!crypto) throw new Error("Secure crypto provider required");
        this.token = function () {
          var bytes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 24;
          return crypto.token(bytes);
        };
        this.digest = function (value) {
          return crypto.hash(String(value));
        };
        this.equal = function (a, b) {
          return crypto.equal(String(a), String(b));
        };
        this.rooms = /* @__PURE__ */new Map();
        this.now = now;
        this.random = random;
        this.creations = /* @__PURE__ */new Map();
        this.onError = onError;
      }
      return _createClass(RoomCore, [{
        key: "prune",
        value: function prune() {
          var _iterator2 = _createForOfIteratorHelper(this.rooms),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _step2$value = _slicedToArray(_step2.value, 2),
                code = _step2$value[0],
                r = _step2$value[1];
              if (this.now() - r.touched > 12 * 60 * 60 * 1e3) this.rooms.delete(code);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }, {
        key: "player",
        value: function player(r, credential) {
          var _this = this;
          var p = r.seats.find(function (p2) {
            return p2 && !p2.bot && _this.equal(p2.token, credential);
          });
          if (!p) error("\u5EA7\u4F4D\u51ED\u8BC1\u65E0\u6548\uFF0C\u8BF7\u4F7F\u7528\u539F\u8BBE\u5907\u91CD\u8FDE\u3002");
          p.seen = this.now();
          return p;
        }
      }, {
        key: "syncClock",
        value: function syncClock(r) {
          var g = r.game;
          if (!g) return;
          var key = "".concat(g.round, "/").concat(g.revision, "/").concat(g.phase, "/").concat(g.current);
          if (r.turnKey !== key) {
            r.turnKey = key;
            r.turnDeadline = this.now() + 15e3;
          }
          if (g.phase === "finished" && r.finishedRound !== g.round) {
            r.finishedRound = g.round;
            r.seats.forEach(function (s, i) {
              if (s) s.ready = s.bot || i === r.host;
            });
          }
        }
      }, {
        key: "publicState",
        value: function publicState(r, p) {
          var _this2 = this;
          r.touched = this.now();
          this.syncClock(r);
          return {
            rules: RULES_VERSION,
            code: r.code,
            host: r.host,
            seat: p.seat,
            revision: r.revision,
            capacity: r.capacity,
            difficulty: r.difficulty,
            seats: r.seats.map(function (s) {
              return s ? {
                seat: s.seat,
                name: s.name,
                appearance: s.appearance,
                bot: s.bot,
                ready: s.ready,
                online: s.bot || _this2.now() - s.seen < 2e4
              } : null;
            }),
            autoPlay: r.autoPlay || Array(r.capacity).fill(false),
            turnRemaining: r.game ? Math.max(0, Math.ceil((r.turnDeadline - this.now()) / 1e3)) : 15,
            game: r.game ? viewFor(r.game, p.seat) : null
          };
        }
      }, {
        key: "request",
        value: function request() {
          var _this3 = this;
          var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.prune();
          var op = input.op;
          if (op === "create") {
            if (this.rooms.size >= 100) error("\u623F\u95F4\u670D\u52A1\u5DF2\u6EE1\u3002");
            var requestId = text(input.requestId, 100);
            if (!requestId) error("\u7F3A\u5C11\u521B\u5EFA\u8BF7\u6C42\u7F16\u53F7\u3002");
            var old = this.creations.get(requestId);
            if (old && this.rooms.has(old.code)) {
              var r3 = this.rooms.get(old.code),
                p3 = this.player(r3, old.token);
              return {
                token: p3.token,
                state: this.publicState(r3, p3)
              };
            }
            if (![3, 4].includes(input.capacity)) error("\u8BF7\u9009\u62E9 3 \u4EBA\u6216 4 \u4EBA\u724C\u684C\u3002");
            var code2;
            do {
              code2 = this.token(4).slice(0, 6).toUpperCase();
            } while (this.rooms.has(code2));
            var salt = this.token(),
              r2 = {
                code: code2,
                capacity: input.capacity,
                difficulty: ["easy", "normal", "hard"].includes(input.difficulty) ? input.difficulty : "normal",
                salt: salt,
                password: this.digest(salt + text(input.password, 64)),
                host: 0,
                seats: Array(input.capacity).fill(null),
                autoPlay: Array(input.capacity).fill(false),
                game: null,
                touched: this.now(),
                revision: 1,
                actions: /* @__PURE__ */new Map(),
                joins: /* @__PURE__ */new Map(),
                nextBotAt: 0
              };
            var p2 = {
              seat: 0,
              name: text(input.name) || "\u623F\u4E3B",
              appearance: cleanAppearance(input.appearance),
              bot: false,
              ready: true,
              token: this.token(),
              seen: this.now()
            };
            r2.seats[0] = p2;
            this.rooms.set(code2, r2);
            this.creations.set(requestId, {
              code: code2,
              token: p2.token
            });
            if (this.creations.size > 200) this.creations.delete(this.creations.keys().next().value);
            return {
              token: p2.token,
              state: this.publicState(r2, p2)
            };
          }
          var code = text(input.code, 6).toUpperCase(),
            r = this.rooms.get(code);
          if (!r) error("\u623F\u95F4\u4E0D\u5B58\u5728\u6216\u5DF2\u7ED3\u675F\u3002");
          if (op === "join") {
            if (!this.equal(r.password, this.digest(r.salt + text(input.password, 64)))) error("\u623F\u95F4\u5BC6\u7801\u4E0D\u6B63\u786E\u3002");
            var _requestId = text(input.requestId, 100);
            if (!_requestId) error("\u7F3A\u5C11\u52A0\u5165\u8BF7\u6C42\u7F16\u53F7\u3002");
            if (r.joins.has(_requestId)) {
              var _p = this.player(r, r.joins.get(_requestId));
              return {
                token: _p.token,
                state: this.publicState(r, _p)
              };
            }
            if (r.game) error("\u724C\u5C40\u5DF2\u7ECF\u5F00\u59CB\uFF0C\u8BF7\u7B49\u5F85\u4E0B\u4E00\u573A\u6216\u4F7F\u7528\u539F\u8BBE\u5907\u91CD\u8FDE\u3002");
            var seat = r.seats.findIndex(function (s) {
              return !s;
            });
            if (seat < 0) error("\u623F\u95F4\u5DF2\u6EE1\u3002");
            var _p2 = {
              seat: seat,
              name: text(input.name) || "\u73A9\u5BB6 ".concat(seat + 1),
              appearance: cleanAppearance(input.appearance),
              bot: false,
              ready: false,
              token: this.token(),
              seen: this.now()
            };
            r.seats[seat] = _p2;
            r.joins.set(_requestId, _p2.token);
            r.revision++;
            return {
              token: _p2.token,
              state: this.publicState(r, _p2)
            };
          }
          var p = this.player(r, input.token);
          if (op === "state") return {
            state: this.publicState(r, p)
          };
          var actionId = text(input.actionId, 100);
          if (!actionId) error("\u7F3A\u5C11\u64CD\u4F5C\u7F16\u53F7\u3002");
          var dedup = p.token + ":" + actionId;
          if (r.actions.has(dedup)) return {
            state: this.publicState(r, p),
            duplicate: true
          };
          if (input.revision !== r.revision) error("\u724C\u684C\u5DF2\u66F4\u65B0\uFF0C\u8BF7\u540C\u6B65\u540E\u91CD\u8BD5\u3002");
          switch (op) {
            case "ready":
              if (r.game && r.game.phase !== "finished") error("\u5F53\u524D\u724C\u5C40\u5DF2\u5F00\u59CB\u3002");
              p.ready = !!input.ready;
              break;
            case "appearance":
              p.appearance = cleanAppearance(input.appearance);
              p.name = text(input.name) || p.name;
              if (r.game) {
                r.game.players[p.seat].name = p.name;
                r.game.players[p.seat].character = p.appearance.id;
              }
              break;
            case "auto":
              if (!r.game || r.game.phase === "finished") error("\u5F53\u524D\u65E0\u9700\u6258\u7BA1\u3002");
              r.autoPlay[p.seat] = !!input.enabled;
              break;
            case "start":
              if (p.seat !== r.host) error("\u53EA\u6709\u623F\u4E3B\u53EF\u4EE5\u5F00\u5C40\u3002");
              if (r.game) error("\u5DF2\u6709\u724C\u5C40\u3002");
              if (r.seats.filter(function (s) {
                return s && !s.bot;
              }).some(function (s) {
                return !s.ready;
              })) error("\u8BF7\u7B49\u5F85\u6240\u6709\u73A9\u5BB6\u51C6\u5907\u3002");
              if (r.seats.some(function (s) {
                return !s;
              }) && !input.fillBots) error("\u5EA7\u4F4D\u672A\u6EE1\uFF1B\u53EF\u9009\u62E9\u7528\u7535\u8111\u8865\u9F50\u3002");
              var seats = r.seats.map(function (s, i) {
                if (s) return s;
                var profile = Array.isArray(input.botProfiles) ? input.botProfiles[i] : null;
                return {
                  seat: i,
                  name: text(profile == null ? void 0 : profile.name) || "\u7535\u8111 ".concat(i + 1),
                  appearance: profile ? cleanAppearance(profile.appearance) : {
                    id: "builtin-" + i,
                    name: "\u7535\u8111",
                    portrait: "",
                    avatar: ""
                  },
                  bot: true,
                  ready: true,
                  seen: _this3.now()
                };
              });
              r.seats = seats;
              r.game = createGame(r.seats.map(function (s) {
                return {
                  name: s.name,
                  bot: s.bot,
                  character: s.appearance.id
                };
              }), this.random);
              break;
            case "act":
              if (!r.game) error("\u724C\u5C40\u5C1A\u672A\u5F00\u59CB\u3002");
              act(r.game, p.seat, input.action);
              break;
            case "next":
              if (p.seat !== r.host) error("\u8BF7\u7531\u623F\u4E3B\u5F00\u59CB\u4E0B\u4E00\u5C40\u3002");
              if (!r.game || r.game.phase !== "finished") error("\u672C\u5C40\u5C1A\u672A\u7ED3\u675F\u3002");
              if (r.seats.some(function (s, i) {
                return s && !s.bot && i !== r.host && !s.ready;
              })) error("\u8BF7\u7B49\u5F85\u6240\u6709\u73A9\u5BB6\u51C6\u5907\u4E0B\u4E00\u5C40\u3002");
              r.seats.forEach(function (s, i) {
                r.game.players[i].name = s.name;
                r.game.players[i].character = s.appearance.id;
                r.game.players[i].bot = s.bot;
              });
              startRound(r.game, this.random);
              break;
            case "leave":
              if (r.game) {
                p.bot = true;
                p.ready = true;
                delete p.token;
                r.game.players[p.seat].bot = true;
              } else r.seats[p.seat] = null;
              if (p.seat === r.host) r.host = r.seats.findIndex(function (s) {
                return s && !s.bot;
              });
              r.revision++;
              r.actions.set(dedup, true);
              if (!r.seats.some(function (s) {
                return s && !s.bot;
              })) this.rooms.delete(code);
              return {
                left: true
              };
            default:
              error("\u672A\u77E5\u623F\u95F4\u64CD\u4F5C\u3002");
          }
          r.actions.set(dedup, true);
          if (r.actions.size > 512) r.actions.delete(r.actions.keys().next().value);
          r.revision++;
          r.nextBotAt = this.now() + 1700;
          return {
            state: this.publicState(r, p)
          };
        }
      }, {
        key: "tick",
        value: function tick() {
          var _a, _b, _c, _d;
          var _iterator3 = _createForOfIteratorHelper(this.rooms.values()),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var r = _step3.value;
              var g = r.game;
              if (!g || this.now() < r.nextBotAt) continue;
              this.syncClock(r);
              try {
                if (g.phase === "playing") {
                  var seat = g.current,
                    timeout = this.now() >= r.turnDeadline;
                  if (((_a = r.seats[seat]) == null ? void 0 : _a.bot) || r.autoPlay[seat] || timeout) {
                    if (timeout && !((_b = r.seats[seat]) == null ? void 0 : _b.bot)) r.autoPlay[seat] = true;
                    act(g, seat, botAction(g, seat, r.difficulty, this.random));
                    r.revision++;
                    r.nextBotAt = this.now() + 1700;
                    this.syncClock(r);
                  }
                }
                if (g.phase === "exchange") {
                  for (var i = 0; i < r.capacity; i++) if (g.phase === "exchange" && (((_c = r.seats[i]) == null ? void 0 : _c.bot) || r.autoPlay[i] || this.now() >= r.turnDeadline) && g.previous.indexOf(i) < (r.capacity === 3 ? 1 : 2) && g.previous.indexOf(i) >= 0 && !g.exchanges[i]) {
                    if (!((_d = r.seats[i]) == null ? void 0 : _d.bot) && this.now() >= r.turnDeadline) r.autoPlay[i] = true;
                    act(g, i, botAction(g, i, r.difficulty, this.random));
                    r.revision++;
                    this.syncClock(r);
                  }
                }
              } catch (e) {
                this.onError(e.message);
                r.nextBotAt = this.now() + 5e3;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }]);
    }();
    globalThis.QibanRoomRuntime = {
      RoomCore: RoomCore,
      RULES_VERSION: RULES_VERSION
    };
  })();
})();