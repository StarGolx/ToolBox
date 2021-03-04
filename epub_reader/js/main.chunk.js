(window.webpackJsonp = window.webpackJsonp || []).push([
  [0], {
    128: function(e, t, a) {
      e.exports = a(142)
    },
    133: function(e, t, a) {},
    138: function(e, t, a) {},
    139: function(e, t, a) {},
    140: function(e, t, a) {},
    142: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        o = a.n(n),
        l = a(15),
        r = a.n(l),
        i = (a(133), a(6)),
        s = a(7),
        c = a(11),
        d = a(10),
        u = a(2),
        h = a(12),
        p = a(5),
        m = a(177),
        g = a(173),
        b = a(176),
        f = a(178),
        k = a(110),
        v = a(78),
        y = a.n(v),
        E = function e(t, a, n, o) {
          Object(i.a)(this, e), this.key = (new Date).getTime() + "", this.name = t, this.author = a, this.description = n, this.content = o
        },
        C = function(e) {
          function t(e) {
            var a;
            return Object(i.a)(this, t), (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).handleChange = a.handleChange.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "handleChange",
            value: function(e) {
              var t = this,
                a = e.target.files[0],
                n = new FileReader;
              n.readAsArrayBuffer(a), n.onload = function(e) {
                window.ePub({
                  bookPath: e.target.result
                }).getMetadata().then(function(a) {
                  var n, o = [a.bookTitle, a.creator, a.description, e.target.result];
                  n = new E(o[0], o[1], o[2], o[3]), t.props.handleAddBook(n)
                })
              }, n.onerror = function() {
                alert("\u03a3(\u3063 \xb0\u0414 \xb0;)\u3063 Some error occurred, please try again!")
              }
            }
          }, {
            key: "render",
            value: function() {
              var e = this.props.classes;
              return o.a.createElement("div", {
                id: "navbar"
              }, o.a.createElement(g.a, {
                position: "fixed",
                className: e.navbar
              }, o.a.createElement("div", {
                className: "container"
              }, o.a.createElement(b.a, null, o.a.createElement(m.a, {
                container: !0,
                align: "center"
              }, o.a.createElement(m.a, {
                item: !0,
                xs: 6
              }, o.a.createElement(m.a, {
                container: !0,
                justify: "flex-start",
                align: "center"
              }, o.a.createElement(m.a, {
                item: !0
              }, o.a.createElement(k.a, {
                type: "title",
                className: e.logo
              }, "SG Epub reader")))), o.a.createElement(m.a, {
                item: !0,
                xs: 6
              }, o.a.createElement(m.a, {
                container: !0,
                justify: "flex-end",
                align: "center"
              }, o.a.createElement(m.a, {
                item: !0
              }, o.a.createElement("input", {
                accept: "application/epub+zip",
                id: "add-book",
                type: "file",
                onChange: this.handleChange,
                hidden: !0
              }), o.a.createElement("label", {
                htmlFor: "add-book"
              }, o.a.createElement(f.a, {
                component: "span",
                "aria-label": "add",
                color: "primary",
                className: e.button
              }, o.a.createElement(y.a, null), "\u6253\u5f00\u4e66\u7c4d"))))))))))
            }
          }]), t
        }(o.a.Component),
        N = Object(p.a)(function(e) {
          return {
            navbar: {
              backgroundColor: e.palette.background.paper,
              boxShadow: "0 1px 1px rgba(0, 0, 0, .15)"
            },
            logo: {
              fontFamily: "'Titillium Web', sans-serif",
              fontSize: "1.5rem",
              color: e.palette.text.primary
            },
            button: {
              paddingTop: 6,
              paddingBottom: 6,
              fontSize: "1rem"
            }
          }
        })(C),
        O = a(61),
        S = a(180),
        j = a(57),
        x = a.n(j),
        B = a(83),
        w = a.n(B),
        D = a(79),
        P = a(107),
        F = a(179),
        T = a(80),
        I = a.n(T),
        R = a(81),
        M = a.n(R),
        z = a(82),
        A = a.n(z),
        H = Object(P.a)({
          palette: {
            primary: I.a,
            secondary: Object(D.a)({}, M.a, {
              A400: "#00e677"
            }),
            error: A.a
          }
        }),
        J = function(e) {
          function t() {
            return Object(i.a)(this, t), Object(c.a)(this, Object(d.a)(t).apply(this, arguments))
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "render",
            value: function() {
              return o.a.createElement(F.a, {
                theme: H
              }, this.props.children)
            }
          }]), t
        }(o.a.Component),
        U = (a(138), function() {
          function e() {
            Object(i.a)(this, e)
          }
          return Object(s.a)(e, null, [{
            key: "getDefaultConfigObj",
            value: function() {
              return {
                theme: !0,
                colors: ["#FBF1D1", "#EFEEB0", "#CAEFC9", "#76BEE9"],
                background: "#FFF",
                fontSize: 0,
                lineHeight: 0,
                letterSpacing: 0,
                wordSpacing: 0,
                column: 2,
                padding: 10,
                gutter: 80,
                disablePopup: !1
              }
            }
          }, {
            key: "get",
            value: function() {
              var t = localStorage.getItem("config");
              return JSON.parse(t) || e.getDefaultConfigObj()
            }
          }, {
            key: "set",
            value: function(t, a) {
              var n = localStorage.getItem("config"),
                o = JSON.parse(n) || e.getDefaultConfigObj();
              o[t] = a, localStorage.setItem("config", JSON.stringify(o))
            }
          }, {
            key: "resetConfig",
            value: function() {
              var t = JSON.stringify(e.getDefaultConfigObj());
              localStorage.setItem("config", t)
            }
          }, {
            key: "getDefaultCss",
            value: function() {
              var t = e.get(),
                a = t.colors,
                n = "::selection{background:#f3a6a68c}::-moz-selection{background:#f3a6a68c}[class*=color-]:hover{cursor:pointer;background-image:linear-gradient(0,rgba(0,0,0,.075),rgba(0,0,0,.075))}.color-0{background-color:".concat(a[0], "}.color-1{background-color:").concat(a[1], "}.color-2{background-color:").concat(a[2], "}.color-3{background-color:").concat(a[3], "}"),
                o = ["a, article, cite, code, div, li, p, pre, span, table {", "    font-size: ".concat(t.fontSize + "px", " !important;"), "    line-height: ".concat(t.lineHeight + "px", " !important;"), "    letter-spacing: ".concat(t.letterSpacing + "px", " !important;"), "    word-spacing: ".concat(t.wordSpacing + "px", " !important;"), "}", "img {", "    max-width: 100% !important;", "}", "body {", "    background-color: transparent !important;", "    color: ".concat(t.theme ? "#000000de" : "#f5f5f5", " !important;"), "}"];
              return o[1] = t.fontSize ? o[1] : "", o[2] = t.lineHeight ? o[2] : "", o[3] = t.letterSpacing ? o[3] : "", o[4] = t.wordSpacing ? o[4] : "", n + o.join("\n")
            }
          }]), e
        }()),
        W = function(e) {
          function t(e) {
            var a;
            return Object(i.a)(this, t), (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).handleEditBook = a.handleEditBook.bind(Object(u.a)(a)), a.handleDeleteBook = a.handleDeleteBook.bind(Object(u.a)(a)), a.handleOpenBook = a.handleOpenBook.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "handleEditBook",
            value: function() {
              console.log("clicked edit button"), this.props.handleEdit(this.props.book)
            }
          }, {
            key: "handleDeleteBook",
            value: function() {
              console.log("clicked delete button"), this.props.handleDelete(this.props.book.key)
            }
          }, {
            key: "handleOpenBook",
            value: function() {
              this.props.handleReadingBook(this.props.book), this.props.handleReading(!0)
            }
          }, {
            key: "render",
            value: function() {
              var e = this.props.classes;
              return o.a.createElement("div", {
                className: "book ".concat(e.book),
                "data-key": this.props.book.key
              }, o.a.createElement("div", {
                className: "book-head"
              }, o.a.createElement("div", {
                className: "cover ".concat(e.book)
              }, o.a.createElement("div", {
                className: "cover-border ".concat(e.coverBorder)
              }, o.a.createElement("div", {
                className: "book-title"
              }, o.a.createElement(k.a, {
                className: e.text
              }, this.props.book.name)))), o.a.createElement("div", {
                className: "mask-content"
              }, o.a.createElement("div", {
                className: "mask-top"
              }, o.a.createElement(S.a, {
                className: e.button,
                onClick: this.handleDeleteBook,
                size: "small"
              }, o.a.createElement(x.a, {
                className: e.icon,
                fontSize: "inherit"
              })), o.a.createElement(S.a, {
                className: e.button,
                onClick: this.handleEditBook,
                size: "small"
              }, o.a.createElement(w.a, {
                className: e.icon,
                fontSize: "inherit"
              }))), o.a.createElement("div", {
                className: "mask-bottom"
              }, o.a.createElement(J, null, o.a.createElement(f.a, {
                variant: "contained",
                color: "primary",
                onClick: this.handleOpenBook
              }, "\u9605\u8bfb")))), o.a.createElement("div", {
                className: "mask"
              })), o.a.createElement("div", {
                className: "book-body"
              }, o.a.createElement("div", {
                className: "author-box"
              }, o.a.createElement(k.a, {
                className: e.text
              }, "\u4f5c\u8005: "), o.a.createElement(k.a, {
                className: e.text
              }, this.props.book.author))))
            }
          }]), t
        }(o.a.Component),
        Y = Object(p.a)(function(e) {
          return {
            book: {
              backgroundColor: e.palette.background.paper
            },
            text: {
              display: "inline-block",
              color: e.palette.text.primary
            },
            coverBorder: {
              borderColor: U.get().theme ? "#000" : "#fff",
              outlineColor: U.get().theme ? "#000" : "#fff"
            },
            button: {
              width: 28,
              height: 28
            },
            icon: {
              color: "#fff",
              width: 20,
              height: 20,
              transition: "color .3s",
              "&:hover": {
                color: O.a[700]
              }
            }
          }
        })(W),
        L = {
          marginTop: 65,
          marginLeft: "auto",
          marginRight: "auto",
          width: "90%",
          overflow: "auto",
          display: "flex",
          flexWrap: "wrap"
        },
        X = function(e) {
          function t() {
            return Object(i.a)(this, t), Object(c.a)(this, Object(d.a)(t).apply(this, arguments))
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "render",
            value: function() {
              var e = this,
                t = this.props.books.map(function(t) {
                  return o.a.createElement(Y, {
                    key: t.key,
                    book: t,
                    handleEdit: e.props.handleEdit,
                    handleDelete: e.props.handleDelete,
                    handleReading: e.props.handleReading,
                    handleReadingBook: e.props.handleReadingBook,
                    theme: e.props.theme
                  })
                });
              return o.a.createElement("div", {
                id: "book-list",
                style: L
              }, t)
            }
          }]), t
        }(o.a.Component),
        q = a(190),
        K = a(181),
        V = a(183),
        G = a(184),
        Q = a(186),
        $ = function(e) {
          function t(e) {
            var a;
            return Object(i.a)(this, t), (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).handleSaveBook = a.handleSaveBook.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "handleSaveBook",
            value: function() {
              var e = this.props.book;
              e.name = document.getElementById("title").value, e.author = document.getElementById("author").value, this.props.handleUpdateBook(e), this.props.handleCloseEditDialog()
            }
          }, {
            key: "render",
            value: function() {
              var e = this;
              return o.a.createElement(K.a, {
                open: this.props.open
              }, o.a.createElement(V.a, null, "\u7f16\u8f91\u4fe1\u606f"), o.a.createElement(G.a, null, o.a.createElement(m.a, {
                container: !0,
                justify: "center"
              }, o.a.createElement(m.a, {
                item: !0,
                xs: 8
              }, o.a.createElement(q.a, {
                id: "title",
                label: "\u4e66\u540d",
                defaultValue: this.props.book.name,
                fullWidth: !0,
                margin: "normal"
              })), o.a.createElement(m.a, {
                item: !0,
                xs: 8
              }, o.a.createElement(q.a, {
                id: "author",
                label: "\u4f5c\u8005",
                defaultValue: this.props.book.author,
                fullWidth: !0,
                margin: "normal"
              })))), o.a.createElement(Q.a, null, o.a.createElement(f.a, {
                onClick: this.handleSaveBook,
                color: "primary"
              }, "\u4fdd\u5b58"), o.a.createElement(f.a, {
                onClick: function() {
                  return e.props.handleCloseEditDialog()
                },
                color: "secondary"
              }, "\u5173\u95ed")))
            }
          }]), t
        }(o.a.Component),
        Z = a(193),
        _ = function(e) {
          function t(e) {
            var a;
            return Object(i.a)(this, t), (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).handleClose = a.handleClose.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "handleClose",
            value: function() {
              this.props.toggleUpdate(!1), localStorage.setItem("update-message", "")
            }
          }, {
            key: "render",
            value: function() {
              var e = this.props,
                t = e.open,
                a = e.message;
              return o.a.createElement(Z.a, {
                anchorOrigin: {
                  vertical: "top",
                  horizontal: "right"
                },
                open: t,
                autoHideDuration: 8e3,
                onClose: this.handleClose,
                message: o.a.createElement("span", {
                  id: "update-message"
                }, a),
                action: [o.a.createElement(f.a, {
                  key: "dismiss",
                  color: "secondary",
                  size: "small",
                  onClick: this.handleClose
                }, "DISMISS")]
              })
            }
          }]), t
        }(o.a.Component),
        ee = function() {
          function e(t, a) {
            var n = this,
              o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            if (Object(i.a)(this, e), !window.indexedDB) return console.error("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."), {};
            this.dbName = t, this.storeName = a, this.version = o, this.db = null;
            var l = indexedDB.open(t, o);
            l.onsuccess = function(e) {
              n.db = e.target.result
            }, l.onerror = function(e) {
              console.error("Something bad happened while trying to open:" + e.target.errorCode)
            }, l.onupgradeneeded = function(e) {
              n.db = e.target.result, n.db.objectStoreNames.contains(a) ? console.log("DB version changed, db version: ", n.db.version) : n.db.createObjectStore(a, {
                keyPath: "key"
              })
            }
          }
          return Object(s.a)(e, [{
            key: "open",
            value: function(e, t) {
              var a = this,
                n = indexedDB.open(this.dbName);
              n.onsuccess = function(t) {
                console.log("open database ".concat(a.dbName, " successfully")), a.db = t.target.result, e && e()
              }, n.onerror = function() {
                console.error("Can't open database ".concat(a.dbName)), t && t()
              }
            }
          }, {
            key: "add",
            value: function(e, t, a) {
              var n = this,
                o = this.db.transaction(this.storeName, "readwrite").objectStore(this.storeName).add(e);
              o.onsuccess = function(e) {
                t && t(e.target.result), console.log("add data to database ".concat(n.dbName, " -> ").concat(n.storeName, " successfully"))
              }, o.onerror = function() {
                console.error("Can't add data to database ".concat(n.dbName, " -> ").concat(n.storeName)), a && a()
              }
            }
          }, {
            key: "remove",
            value: function(e, t, a) {
              var n = this,
                o = this.db.transaction(this.storeName, "readwrite").objectStore(this.storeName).delete(e);
              o.onsuccess = function(a) {
                console.log("remove data with key ".concat(e, " from database ").concat(n.dbName, " -> ").concat(n.storeName, " successfully")), t && t(a.target.result)
              }, o.onerror = function() {
                console.error("Can't remove data with key ".concat(e, " from database ").concat(n.dbName, " -> ").concat(n.storeName)), a && a()
              }
            }
          }, {
            key: "get",
            value: function(e, t, a) {
              var n = this,
                o = this.db.transaction(this.storeName, "readonly").objectStore(this.storeName).get(e);
              o.onsuccess = function(e) {
                console.log("get data from database ".concat(n.dbName, " -> ").concat(n.storeName, " successfully")), t && t(e.target.result)
              }, o.onerror = function() {
                console.error("Can't get data with key ".concat(e, " from ").concat(n.dbName, " -> ").concat(n.storeName)), a && a()
              }
            }
          }, {
            key: "getAll",
            value: function(e, t) {
              var a = this,
                n = this.db.transaction(this.storeName, "readonly").objectStore(this.storeName).openCursor(),
                o = [];
              n.onsuccess = function(t) {
                var n = t.target.result;
                n ? (o.push(n.value), n.continue()) : (console.log("get all data from database ".concat(a.dbName, " -> ").concat(a.storeName, " successfully")), e(o))
              }, n.onerror = function() {
                console.error("Can't get data from database ".concat(a.dbName, " -> ").concat(a.storeName)), t && t()
              }
            }
          }, {
            key: "update",
            value: function(e, t, a) {
              var n = this.db.transaction(this.storeName, "readwrite").objectStore(this.storeName).put(e);
              n.onsuccess = function(e) {
                console.log("update data successfully"), t && t(e.target.result)
              }, n.onerror = function() {
                console.error("Can't update data"), a && a()
              }
            }
          }, {
            key: "close",
            value: function() {
              this.db.close()
            }
          }]), e
        }(),
        te = function(e) {
          function t(e) {
            var a;
            return Object(i.a)(this, t), (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).state = {
              books: [],
              openEditDialog: !1,
              openUpdate: !0,
              targetBook: {}
            }, a.handleAddBook = a.handleAddBook.bind(Object(u.a)(a)), a.handleDeleteBook = a.handleDeleteBook.bind(Object(u.a)(a)), a.handleEditBook = a.handleEditBook.bind(Object(u.a)(a)), a.handleUpdateBook = a.handleUpdateBook.bind(Object(u.a)(a)), a.handleCloseEditDialog = a.handleCloseEditDialog.bind(Object(u.a)(a)), a.toggleUpdate = a.toggleUpdate.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "componentWillMount",
            value: function() {
              var e = this,
                t = new ee("books", "book"),
                a = [];
              t.open(function() {
                t.getAll(function(t) {
                  a = t, e.setState({
                    books: a
                  })
                })
              })
            }
          }, {
            key: "handleAddBook",
            value: function(e) {
              var t = this,
                a = new ee("books", "book");
              a.open(function() {
                a.add(e);
                var n = t.state.books;
                n.push(e), t.setState({
                  books: n
                })
              })
            }
          }, {
            key: "handleDeleteBook",
            value: function(e) {
              var t = this,
                a = new ee("books", "book");
              a.open(function() {
                a.remove(e);
                var n = t.state.books;
                n = n.filter(function(t) {
                  return t.key !== e
                }), t.setState({
                  books: n
                })
              });
              var n = new ee("notes", "note");
              n.open(function() {
                n.getAll(function(t) {
                  t.filter(function(t) {
                    return t.bookKey === e
                  }).forEach(function(e) {
                    n.remove(e.key)
                  })
                })
              });
              var o = new ee("bookmarks", "bookmark");
              o.open(function() {
                o.getAll(function(t) {
                  t.filter(function(t) {
                    return t.bookKey === e
                  }).forEach(function(e) {
                    o.remove(e.key)
                  })
                })
              })
            }
          }, {
            key: "handleEditBook",
            value: function(e) {
              this.setState({
                openEditDialog: !0,
                targetBook: e
              })
            }
          }, {
            key: "handleUpdateBook",
            value: function(e) {
              var t = this,
                a = new ee("books", "book");
              a.open(function() {
                a.update(e);
                var n = t.state.books;
                n.forEach(function(t, a, n) {
                  t.key === e.key && (n[a] = e)
                }), t.setState({
                  books: n
                })
              })
            }
          }, {
            key: "handleCloseEditDialog",
            value: function() {
              this.setState({
                openEditDialog: !1
              })
            }
          }, {
            key: "toggleUpdate",
            value: function(e) {
              this.setState({
                openUpdate: e
              })
            }
          }, {
            key: "render",
            value: function() {
              var e = this.props,
                t = e.handleReading,
                a = e.handleReadingBook,
                n = e.theme,
                l = localStorage.getItem("update-message"),
                r = this.state.openUpdate && !!l,
                i = document.body.classList,
                s = this.state.books;
              return s.length ? i.remove("show") : i.add("show"), o.a.createElement("div", {
                id: "manager"
              }, o.a.createElement(N, {
                handleAddBook: this.handleAddBook
              }), o.a.createElement(X, {
                books: s,
                handleDelete: this.handleDeleteBook,
                handleEdit: this.handleEditBook,
                handleReading: t,
                handleReadingBook: a,
                theme: n
              }), o.a.createElement($, {
                open: this.state.openEditDialog,
                book: this.state.targetBook,
                handleUpdateBook: this.handleUpdateBook,
                handleCloseEditDialog: this.handleCloseEditDialog
              }), o.a.createElement(_, {
                open: r,
                message: l,
                toggleUpdate: this.toggleUpdate
              }))
            }
          }]), t
        }(o.a.Component),
        ae = a(42),
        ne = a(187),
        oe = a(84),
        le = a.n(oe),
        re = (a(139), function(e) {
          function t(e) {
            var a;
            return Object(i.a)(this, t), (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).handleJump = a.handleJump.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "handleJump",
            value: function(e) {
              var t = e.target.getAttribute("href");
              this.props.epub.goto(t), e.preventDefault()
            }
          }, {
            key: "render",
            value: function() {
              var e = this.props,
                t = e.chapter,
                a = e.epub,
                n = t.subitems && t.subitems.length ? o.a.createElement(ie, {
                  chapters: t.subitems,
                  collapse: !1,
                  epub: a
                }) : null;
              return o.a.createElement("li", {
                className: "chapter-list-item"
              }, o.a.createElement("div", {
                className: "item-content"
              }, o.a.createElement("i", {
                className: "item-mark"
              }), o.a.createElement("a", {
                className: "chapter-url",
                href: t.href,
                onClick: this.handleJump
              }, t.label)), n)
            }
          }]), t
        }(o.a.Component)),
        ie = function(e) {
          function t() {
            return Object(i.a)(this, t), Object(c.a)(this, Object(d.a)(t).apply(this, arguments))
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "render",
            value: function() {
              var e = this.props,
                t = e.chapters,
                a = e.collapse,
                n = e.epub;
              return o.a.createElement("ul", {
                className: a ? "chapter-list collapse" : "chapter-list expand"
              }, t.map(function(e, t) {
                return o.a.createElement(re, {
                  key: t,
                  chapter: e,
                  epub: n
                })
              }))
            }
          }]), t
        }(o.a.Component),
        se = function(e) {
          function t(e) {
            var a;
            return Object(i.a)(this, t), (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).state = {
              open: !1,
              chapters: []
            }, a.handleClose = a.handleClose.bind(Object(u.a)(a)), a.handleOpen = a.handleOpen.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "componentDidMount",
            value: function() {
              var e = this;
              this.props.epub.getToc().then(function(t) {
                e.setState({
                  chapters: t
                })
              })
            }
          }, {
            key: "handleOpen",
            value: function() {
              this.setState({
                open: !0
              })
            }
          }, {
            key: "handleClose",
            value: function() {
              this.setState({
                open: !1
              })
            }
          }, {
            key: "render",
            value: function() {
              var e = this.props,
                t = e.theme,
                a = e.classes,
                n = e.epub,
                l = {
                  color: t ? "#000000de" : "#fff"
                };
              return o.a.createElement("div", {
                id: "navigation"
              }, o.a.createElement(S.a, {
                onClick: this.handleOpen,
                className: a.button
              }, o.a.createElement(le.a, null)), o.a.createElement(ne.a, {
                open: this.state.open,
                onClose: this.handleClose,
                onClick: this.handleClose
              }, o.a.createElement("div", {
                className: a.title
              }, o.a.createElement(k.a, {
                type: "title",
                align: "center"
              }, "\u76ee\u5f55")), o.a.createElement("div", {
                id: "toc",
                className: a.list,
                style: l
              }, o.a.createElement(ie, {
                chapters: this.state.chapters,
                collapse: !1,
                epub: n
              }))))
            }
          }]), t
        }(o.a.Component),
        ce = Object(p.a)({
          button: {
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 10
          },
          list: {
            width: 280,
            flex: "initial",
            marginRight: 10
          },
          title: {
            marginTop: 15,
            marginBottom: 15
          }
        })(se),
        de = a(85),
        ue = a.n(de),
        he = a(86),
        pe = a.n(he),
        me = function e(t, a, n, o, l, r, s) {
          Object(i.a)(this, e), this.key = (new Date).getTime() + "", this.bookKey = t, this.chapter = a, this.text = n, this.cfi = o, this.range = l, this.color = r, this.note = s || ""
        },
        ge = function(e) {
          function t(e) {
            var a;
            return Object(i.a)(this, t), (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).createNote = a.createNote.bind(Object(u.a)(a)), a.closeMenu = a.closeMenu.bind(Object(u.a)(a)), a.handleHighlight = a.handleHighlight.bind(Object(u.a)(a)), a.handleCopyPlainText = a.handleCopyPlainText.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "createNote",
            value: function(e) {
              var t = this.props,
                a = t.book,
                n = t.epub,
                o = document.getElementsByTagName("iframe")[0],
                l = o.contentDocument,
                r = l.getSelection(),
                i = r.getRangeAt(0),
                s = r.toString();
              s = s && s.trim();
              var c = n.renderer.currentChapter.cfiBase,
                d = (new window.EPUBJS.EpubCFI).generateCfiFromRange(i, c),
                u = n.renderer.currentChapter.spinePos,
                h = a.key,
                p = window.rangy.getSelection(o).saveCharacterRanges(l.body)[0],
                m = JSON.stringify(p);
              return new me(h, u, s, d, m, e, "")
            }
          }, {
            key: "closeMenu",
            value: function() {
              this.props.closeMenu()
            }
          }, {
            key: "handleHighlight",
            value: function(e) {
              var t = document.getElementsByTagName("iframe")[0].contentDocument,
                a = parseInt(e.target.dataset.color);
              if (!isNaN(a)) {
                var n = this.createNote(a);
                this.props.setKey(n.key), this.props.pen.highlightSelection(["color-0", "color-1", "color-2", "color-3"][a]), t.getSelection().empty(), this.props.addNote(n), this.closeMenu(), e.stopPropagation(), console.log("%c Add note here. ", "background-color: green")
              }
            }
          }, {
            key: "handleCopyPlainText",
            value: function() {
              document.getElementsByTagName("iframe")[0].contentDocument.execCommand("copy", !1, null) ? console.log("copied!") : console.log("failed to copy text to clipboard"), this.closeMenu()
            }
          }, {
            key: "render",
            value: function() {
              var e = this.props,
                t = e.open,
                a = e.theme,
                n = e.posX,
                l = e.posY,
                r = e.colors,
                i = e.classes,
                s = {
                  left: n,
                  top: l,
                  visibility: t ? "visible" : "hidden",
                  backgroundColor: a ? "#424242" : "#f5f5f5"
                },
                c = {
                  borderTopColor: a ? "#424242" : "#f5f5f5"
                },
                d = {
                  width: 20,
                  height: 20,
                  color: a ? "#fff" : "#000"
                };
              return o.a.createElement("div", {
                id: "editor-toolbar",
                className: i.root,
                style: s
              }, o.a.createElement("div", {
                className: i.button,
                onClick: this.handleHighlight
              }, o.a.createElement("span", {
                className: i.dot,
                "data-color": "0",
                style: {
                  backgroundColor: r[0]
                }
              })), o.a.createElement("div", {
                className: i.button,
                onClick: this.handleHighlight
              }, o.a.createElement("span", {
                className: i.dot,
                "data-color": "1",
                style: {
                  backgroundColor: r[1]
                }
              })), o.a.createElement("div", {
                className: i.button,
                onClick: this.handleHighlight
              }, o.a.createElement("span", {
                className: i.dot,
                "data-color": "2",
                style: {
                  backgroundColor: r[2]
                }
              })), o.a.createElement("div", {
                className: i.button,
                onClick: this.handleHighlight
              }, o.a.createElement("span", {
                className: i.dot,
                "data-color": "3",
                style: {
                  backgroundColor: r[3]
                }
              })), o.a.createElement("div", {
                className: i.button,
                onClick: this.handleCopyPlainText
              }, o.a.createElement(x.a, {
                className: i.icon,
                style: d
              })), o.a.createElement("div", {
                className: i.bottom,
                style: c
              }))
            }
          }]), t
        }(o.a.Component),
        be = Object(p.a)(function(e) {
          return {
            root: {
              position: "absolute",
              display: "flex",
              alignItems: "center",
              height: 40,
              padding: "0 10px",
              borderRadius: 20
            },
            button: {
              cursor: "pointer",
              padding: "0 8px"
            },
            dot: {
              display: "inline-block",
              width: 20,
              height: 20,
              borderRadius: "50%",
              transition: "transform .3s",
              "&:hover": {
                transform: "scale(1.2)"
              }
            },
            icon: {
              "&:active": {
                color: O.a[400]
              }
            },
            bottom: {
              position: "absolute",
              width: 0,
              height: 0,
              borderWidth: 10,
              borderStyle: "solid",
              borderColor: "transparent",
              left: "50%",
              marginLeft: "-10px",
              bottom: "-20px"
            }
          }
        })(ge),
        fe = function(e) {
          function t(e) {
            var a;
            return Object(i.a)(this, t), (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).state = {
              note: a.props.note.note
            }, a.handleChange = a.handleChange.bind(Object(u.a)(a)), a.handleBlur = a.handleBlur.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "componentWillReceiveProps",
            value: function(e) {
              this.setState({
                note: e.note.note
              })
            }
          }, {
            key: "handleChange",
            value: function(e) {
              this.setState({
                note: e.target.value
              })
            }
          }, {
            key: "handleBlur",
            value: function(e) {
              var t = this.props.note;
              t.note = e.target.value, this.props.updateNote(t), console.log("note has been updated.", t)
            }
          }, {
            key: "render",
            value: function() {
              var e = this.props,
                t = e.posX,
                a = e.posY,
                n = e.open,
                l = e.theme,
                r = e.classes,
                i = {
                  left: t,
                  top: a,
                  visibility: n ? "visible" : "hidden",
                  background: l ? "#424242" : "#f5f5f5"
                },
                s = {
                  color: l ? "#f5f5f5" : "#424242"
                },
                c = {
                  background: l ? "#424242" : "#f5f5f5"
                };
              return o.a.createElement("div", {
                id: "note-card",
                className: r.root,
                style: i
              }, o.a.createElement("div", {
                className: r.card
              }, o.a.createElement("textarea", {
                type: "text",
                value: this.state.note,
                className: r.textarea,
                onChange: this.handleChange,
                onBlur: this.handleBlur,
                style: s,
                placeholder: "There is no note here."
              })), o.a.createElement("div", {
                className: r.bottom,
                style: c
              }))
            }
          }]), t
        }(o.a.Component),
        ke = Object(p.a)(function(e) {
          return {
            root: {
              position: "absolute",
              visibility: "hidden",
              zIndex: 100
            },
            card: {
              width: 200,
              boxShadow: "0 2px 15px rgba(0, 0, 0, .1)",
              padding: "10px 0"
            },
            bottom: {
              width: 14,
              height: 14,
              transform: "rotate(45deg)",
              position: "absolute",
              bottom: -7,
              left: 0,
              right: 0,
              margin: "auto",
              zIndex: 99
            },
            textarea: {
              fontFamily: "sans-serif",
              fontSize: 12,
              border: "none",
              outline: "none",
              width: "100%",
              padding: "0 10px",
              minHeight: 60,
              backgroundColor: "transparent",
              resize: "none",
              "&::-webkit-input-placeholder": {
                fontStyle: "italic"
              },
              "&::-moz-placeholder": {
                fontStyle: "italic"
              }
            }
          }
        })(fe),
        ve = function() {
          function e() {
            Object(i.a)(this, e)
          }
          return Object(s.a)(e, null, [{
            key: "getStyle",
            value: function(e, t) {
              return e.currentStyle ? e.currentStyle[t] : getComputedStyle(e)[t]
            }
          }, {
            key: "addScript",
            value: function(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document,
                a = t.getElementById("qiu-user-script");
              if (!a) return (a = t.createElement("script")).id = "qiu-user-script", a.type = "text/javascript", a.defer = !0, a.text = e, void t.body.appendChild(a);
              a.text = e
            }
          }, {
            key: "addCss",
            value: function(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document,
                a = t.getElementById("qiu-user-style");
              if (!a) return (a = t.createElement("style")).id = "qiu-user-style", a.textContent = e, void t.head.appendChild(a);
              a.textContent = e
            }
          }, {
            key: "addDefaultCss",
            value: function() {
              var e = U.getDefaultCss(),
                t = document.getElementsByTagName("iframe")[0].contentDocument,
                a = t.getElementById("qiu-default-style");
              if (!a) return (a = t.createElement("style")).id = "qiu-default-style", a.textContent = e, void t.head.appendChild(a);
              a.textContent = e
            }
          }, {
            key: "getUserStyle",
            value: function() {
              var e = localStorage.getItem("style") || "{}";
              return JSON.parse(e)
            }
          }, {
            key: "parseStyle",
            value: function(e) {
              var t = e.split("/* SG Epub reader Separator */");
              return {
                inner: t[0] || "",
                outer: t[1] || ""
              }
            }
          }, {
            key: "getUserScript",
            value: function() {
              var e = localStorage.getItem("script") || "{}";
              return JSON.parse(e)
            }
          }, {
            key: "parseScript",
            value: function(e) {
              var t = e.split("/* SG Epub reader Separator */");
              return {
                inner: t[0] || "",
                outer: t[1] || ""
              }
            }
          }, {
            key: "applyCss",
            value: function() {
              var t = document,
                a = document.getElementsByTagName("iframe")[0].contentDocument,
                n = e.getUserStyle();
              n.inner && e.addCss(n.inner, a), n.outer && e.addCss(n.outer, t)
            }
          }, {
            key: "applyScript",
            value: function() {
              var t = document,
                a = document.getElementsByTagName("iframe")[0].contentDocument,
                n = e.getUserScript();
              n.inner && e.addCss(n.inner, a), n.outer && e.addCss(n.outer, t)
            }
          }, {
            key: "resetStyle",
            value: function() {
              localStorage.setItem("style", JSON.stringify({
                inner: " ",
                outer: " "
              })), U.resetConfig(), e.applyCss(), e.addDefaultCss()
            }
          }, {
            key: "resetScript",
            value: function() {
              localStorage.setItem("script", JSON.stringify({
                inner: " ",
                outer: " "
              })), e.applyScript()
            }
          }]), e
        }(),
        ye = function() {
          function e() {
            Object(i.a)(this, e)
          }
          return Object(s.a)(e, null, [{
            key: "recordCfi",
            value: function(e, t) {
              var a = localStorage.getItem("autoBookmark"),
                n = JSON.parse(a) || {};
              n[e] = t, localStorage.setItem("autoBookmark", JSON.stringify(n))
            }
          }, {
            key: "getCfi",
            value: function(e) {
              var t = localStorage.getItem("autoBookmark");
              return (JSON.parse(t) || {})[e] || null
            }
          }, {
            key: "clear",
            value: function(e) {
              var t = localStorage.getItem("autoBookmark"),
                a = JSON.parse(t) || {};
              delete a[e], localStorage.setItem("autoBookmark", JSON.stringify(a))
            }
          }]), e
        }(),
        Ee = function(e) {
          function t(e) {
            var a;
            return Object(i.a)(this, t), (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).state = {
              openMenu: !1,
              openNoteCard: !1,
              mPosX: 0,
              mPosY: 0,
              nPosX: 0,
              nPosY: 0,
              note: {}
            }, a.x = 0, a.y = 0, a.pen = null, a.notes = [], a.key = "", a.prev = a.prev.bind(Object(u.a)(a)), a.next = a.next.bind(Object(u.a)(a)), a.closeMenu = a.closeMenu.bind(Object(u.a)(a)), a.openMenu = a.openMenu.bind(Object(u.a)(a)), a.closeNoteCard = a.closeNoteCard.bind(Object(u.a)(a)), a.openNoteCard = a.openNoteCard.bind(Object(u.a)(a)), a.renderNotes = a.renderNotes.bind(Object(u.a)(a)), a.getPen = a.getPen.bind(Object(u.a)(a)), a.setNote = a.setNote.bind(Object(u.a)(a)), a.setKey = a.setKey.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "componentWillUnmount",
            value: function() {
              document.removeEventListener("copy", this.copyTextHack)
            }
          }, {
            key: "componentDidMount",
            value: function() {
              var e = document.getElementById("page-area"),
                t = this.props,
                a = t.book,
                n = t.epub;
              n.renderTo(e), this.bindEvent(), n.gotoCfi(ye.getCfi(a.key)), this.copyTextHack = function(e) {
                var t = document.getElementsByTagName("iframe")[0].contentDocument.getSelection().toString() || document.getSelection().toString();
                e.clipboardData.setData("text/plain", t), e.preventDefault()
              }, document.addEventListener("copy", this.copyTextHack)
            }
          }, {
            key: "bindEvent",
            value: function() {
              var e = this,
                t = this.props.epub,
                a = -1 !== navigator.userAgent.indexOf("Firefox"),
                n = !1,
                o = function(e) {
                  if (e.preventDefault(), !n) return 37 === e.keyCode || 38 === e.keyCode ? (t.prevPage(), n = !0, setTimeout(function() {
                    n = !1
                  }, 100), !1) : 39 === e.keyCode || 40 === e.keyCode ? (t.nextPage(), n = !0, setTimeout(function() {
                    n = !1
                  }, 100), !1) : void 0
                },
                l = function(e) {
                  if (e.preventDefault(), !n) return e.detail < 0 ? (t.prevPage(), n = !0, setTimeout(function() {
                    n = !1
                  }, 100), !1) : e.detail > 0 ? (t.nextPage(), n = !0, setTimeout(function() {
                    n = !1
                  }, 100), !1) : void 0
                },
                r = function(e) {
                  if (e.preventDefault(), !n) return e.wheelDelta > 0 ? (t.prevPage(), n = !0, setTimeout(function() {
                    n = !1
                  }, 100), !1) : e.wheelDelta < 0 ? (t.nextPage(), n = !0, setTimeout(function() {
                    n = !1
                  }, 100), !1) : void 0
                },
                i = function(e) {
                  67 === (e.keyCode || e.which) && e.ctrlKey && (document.getElementsByTagName("iframe")[0].contentDocument.execCommand("copy", !1, null) ? console.log("copied!") : console.log("failed to copy text to clipboard"))
                };
              t.on("renderer:chapterDisplayed", function() {
                e.getPen(), console.log("%c renderer:chapterDisplayed has been triggered! ", "color: cyan; background: #333333");
                var n = t.renderer.doc;
                n.addEventListener("click", e.openMenu), n.addEventListener("keydown", o, !1), n.addEventListener("keydown", i), a ? n.addEventListener("DOMMouseScroll", l, !1) : n.addEventListener("mousewheel", r, !1), ve.addDefaultCss(), ve.applyCss(), e.renderNotes()
              }), t.on("renderer:visibleRangeChanged", function() {
                var t = e.props,
                  a = t.book,
                  n = t.epub,
                  o = a.key,
                  l = n.getCurrentLocationCfi();
                ye.recordCfi(o, l), console.log("auto bookmark: ", l)
              })
            }
          }, {
            key: "closeMenu",
            value: function() {
              this.setState({
                openMenu: !1
              })
            }
          }, {
            key: "openMenu",
            value: function(e) {
              var t = document.getElementsByTagName("iframe")[0].contentDocument.getSelection();
              if (this.state.openNoteCard && this.setState({
                  openNoteCard: !1
                }), t.isCollapsed) this.state.openMenu && this.closeMenu();
              else if (!this.props.disablePopup) {
                var a = this.props.epub.renderer.rangePosition(t.getRangeAt(0));
                console.log(a);
                var n = document.getElementById("editor-toolbar"),
                  o = e.clientX,
                  l = e.clientY,
                  r = parseInt(ve.getStyle(n, "width")),
                  i = parseInt(ve.getStyle(n, "height")),
                  s = a.x + a.width / 2 + r / 2,
                  c = a.y - i;
                s = s < 0 ? 0 : s, c = c < 0 ? 0 : c;
                var d = [o, l];
                this.x = d[0], this.y = d[1], this.setState({
                  openMenu: !0,
                  mPosX: s,
                  mPosY: c
                })
              }
            }
          }, {
            key: "closeNoteCard",
            value: function() {
              this.setState({
                openNoteCard: !1
              })
            }
          }, {
            key: "openNoteCard",
            value: function(e, t) {
              var a = document.getElementById("note-card"),
                n = parseInt(ve.getStyle(a, "width")),
                o = parseInt(ve.getStyle(a, "height"));
              console.log(n, o);
              var l = e - n / 2,
                r = t - o - 20;
              l = l < 0 ? 0 : l, r = r < 0 ? 0 : r, this.setState({
                openNoteCard: !0,
                nPosX: l,
                nPosY: r
              })
            }
          }, {
            key: "setNote",
            value: function(e) {
              this.setState({
                note: e
              })
            }
          }, {
            key: "setKey",
            value: function(e) {
              this.key = e
            }
          }, {
            key: "getPen",
            value: function() {
              var e = this,
                t = document.getElementsByTagName("iframe")[0].contentDocument;
              this.pen = window.rangy.createHighlighter(t);
              ["color-0", "color-1", "color-2", "color-3"].forEach(function(t) {
                var a = {
                    ignoreWhiteSpace: !0,
                    elementTagName: "span",
                    elementProperties: {
                      onclick: function(t) {
                        if (document.getElementsByTagName("iframe")[0].contentDocument.getSelection().isCollapsed) {
                          var a = e.props,
                            n = a.gutter,
                            o = a.padding,
                            l = t.currentTarget.dataset.key,
                            r = e.props.getNote(l);
                          r || console.log("no note with key: " + l), e.setNote(r);
                          var i = t.clientX + n,
                            s = t.clientY + o;
                          e.openNoteCard(i, s), t.stopPropagation(), e.state.openMenu && e.setState({
                            openMenu: !1
                          })
                        }
                      }
                    },
                    onElementCreate: function(t) {
                      t.dataset.key = e.key
                    }
                  },
                  n = window.rangy.createClassApplier(t, a);
                e.pen.addClassApplier(n)
              })
            }
          }, {
            key: "renderNotes",
            value: function() {
              var e = this;
              console.log("%c renderNotes has been called! ", "color: cyan; background: #333333");
              var t = this.props,
                a = t.epub,
                n = t.getNotesByChapter,
                o = a.renderer.currentChapter;
              if (o) {
                this.notes = n(o.spinePos);
                var l = this.notes,
                  r = document.getElementsByTagName("iframe")[0],
                  i = r.contentWindow || r.contentDocument.defaultView,
                  s = window.rangy.getSelection(r),
                  c = window.rangy.serializeSelection(s, !0);
                this.pen && this.pen.removeAllHighlights();
                var d = ["color-0", "color-1", "color-2", "color-3"];
                l.forEach(function(t) {
                  e.key = t.key;
                  try {
                    var a = JSON.parse(t.range);
                    a = [a], window.rangy.getSelection(r).restoreCharacterRanges(r.contentDocument, a)
                  } catch (n) {
                    return void console.warn("Exception has been caught when restore character ranges.")
                  }
                  e.pen.highlightSelection(d[t.color])
                }), i.getSelection().empty(), this.state.openMenu && window.rangy.deserializeSelection(c, null, i)
              }
            }
          }, {
            key: "prev",
            value: function() {
              this.props.epub.prevPage(), this.closeMenu(), this.closeNoteCard()
            }
          }, {
            key: "next",
            value: function() {
              this.props.epub.nextPage(), this.closeMenu(), this.closeNoteCard()
            }
          }, {
            key: "render",
            value: function() {
              var e = this.props,
                t = e.epub,
                a = e.book,
                n = e.theme,
                l = e.colors,
                r = e.column,
                i = e.gutter,
                s = e.padding,
                c = e.addNote,
                d = e.updateNote,
                u = e.deleteNote,
                h = e.classes,
                p = {
                  left: i,
                  right: i,
                  top: s,
                  bottom: s
                };
              return t.renderer.forceSingle(1 === r), console.log("%c render view-area. ", "color: orange; background: #333333"), this.renderNotes(), o.a.createElement("div", {
                id: "view-area"
              }, o.a.createElement("div", {
                id: "page-area",
                className: h.pageArea,
                style: p
              }), o.a.createElement("div", {
                id: "prev",
                onClick: this.prev,
                className: h.prev
              }, o.a.createElement(S.a, {
                className: h.button
              }, o.a.createElement(ue.a, {
                className: h.arrow
              }))), o.a.createElement("div", {
                id: "next",
                onClick: this.next,
                className: h.next
              }, o.a.createElement(S.a, {
                className: h.button
              }, o.a.createElement(pe.a, {
                className: h.arrow
              }))), o.a.createElement(be, {
                open: this.state.openMenu,
                posX: this.state.mPosX,
                posY: this.state.mPosY,
                closeMenu: this.closeMenu,
                openNoteCard: this.openNoteCard,
                addNote: c,
                setKey: this.setKey,
                book: a,
                epub: t,
                theme: n,
                colors: l,
                pen: this.pen
              }), o.a.createElement(ke, {
                open: this.state.openNoteCard,
                posX: this.state.nPosX,
                posY: this.state.nPosY,
                note: this.state.note,
                theme: n,
                deleteNote: u,
                updateNote: d,
                closeNoteCard: this.closeNoteCard
              }))
            }
          }]), t
        }(o.a.Component),
        Ce = Object(p.a)({
          pageArea: {
            position: "absolute",
            left: 80,
            right: 80,
            top: 0,
            bottom: 0
          },
          button: {
            width: 70,
            height: 70,
            padding: 0
          },
          arrow: {
            width: 50,
            height: 50
          },
          prev: {
            position: "absolute",
            left: 0,
            height: "100%",
            opacity: 0,
            cursor: "pointer",
            transition: ".3s",
            "&:hover": {
              opacity: 1
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          next: {
            position: "absolute",
            right: 0,
            height: "100%",
            opacity: 0,
            cursor: "pointer",
            transition: ".3s",
            "&:hover": {
              opacity: 1
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }
        })(Ee),
        Ne = a(87),
        Oe = a.n(Ne),
        Se = a(88),
        je = a.n(Se),
        xe = a(89),
        Be = a.n(xe),
        we = a(90),
        De = a.n(we),
        Pe = a(92),
        Fe = a.n(Pe),
        Te = a(93),
        Ie = a.n(Te),
        Re = a(94),
        Me = a.n(Re),
        ze = a(91),
        Ae = a.n(ze),
        He = function(e) {
          function t(e) {
            var a;
            return Object(i.a)(this, t), (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).state = {
              x: a.props.left ? a.props.left : 0,
              y: a.props.top ? a.props.top : 0
            }, a.startX = 0, a.startY = 0, a.sourceX = 0, a.sourceY = 0, a.element = null, a.start = a.start.bind(Object(u.a)(a)), a.move = a.move.bind(Object(u.a)(a)), a.end = a.end.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "start",
            value: function(e) {
              var t = [this.state.x, this.state.y];
              this.sourceX = t[0], this.sourceY = t[1];
              var a = [e.clientX, e.clientY];
              this.startX = a[0], this.startY = a[1], document.addEventListener("mousemove", this.move, !1), document.addEventListener("mouseup", this.end, !1)
            }
          }, {
            key: "move",
            value: function(e) {
              var t = [e.clientX, e.clientY],
                a = t[1],
                n = t[0] - this.startX,
                o = a - this.startY,
                l = parseInt(this.sourceX + n),
                r = parseInt(this.sourceY + o),
                i = window.innerWidth - parseFloat(this.getStyle("width")),
                s = window.innerHeight - parseFloat(this.getStyle("height"));
              l = (l = l > i ? i : l) < 0 ? 0 : l, r = (r = r > s ? s : r) < 0 ? 0 : r, this.setState({
                x: l,
                y: r
              })
            }
          }, {
            key: "end",
            value: function() {
              document.removeEventListener("mousemove", this.move), document.removeEventListener("mouseup", this.end)
            }
          }, {
            key: "getStyle",
            value: function(e) {
              return document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(this.element, null)[e] : this.element.currentStyle[e]
            }
          }, {
            key: "render",
            value: function() {
              var e = this,
                t = {
                  position: "fixed",
                  left: this.state.x,
                  top: this.state.y
                };
              return o.a.createElement("div", {
                style: t,
                onMouseDown: this.start,
                ref: function(t) {
                  e.element = t
                }
              }, this.props.children)
            }
          }]), t
        }(o.a.Component),
        Je = function e(t, a, n) {
          Object(i.a)(this, e), this.key = (new Date).getTime() + "", this.bookKey = t, this.cfi = a, this.label = n
        },
        Ue = (a(140), function(e) {
          function t(e) {
            var a;
            return Object(i.a)(this, t), (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).state = {
              isFullScreen: !1,
              show: !1
            }, a.handleFullScreen = a.handleFullScreen.bind(Object(u.a)(a)), a.handleExitFullScreen = a.handleExitFullScreen.bind(Object(u.a)(a)), a.handleScreen = a.handleScreen.bind(Object(u.a)(a)), a.handleSettings = a.handleSettings.bind(Object(u.a)(a)), a.handleNotes = a.handleNotes.bind(Object(u.a)(a)), a.handleBookmarks = a.handleBookmarks.bind(Object(u.a)(a)), a.handleAddBookmark = a.handleAddBookmark.bind(Object(u.a)(a)), a.handleExit = a.handleExit.bind(Object(u.a)(a)), a.show = a.show.bind(Object(u.a)(a)), a.hide = a.hide.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "handleFullScreen",
            value: function() {
              var e = document.documentElement;
              e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen(), this.setState({
                isFullScreen: !0
              })
            }
          }, {
            key: "handleExitFullScreen",
            value: function() {
              document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen(), this.setState({
                isFullScreen: !1
              })
            }
          }, {
            key: "handleScreen",
            value: function() {
              this.state.isFullScreen ? this.handleExitFullScreen() : this.handleFullScreen()
            }
          }, {
            key: "handleSettings",
            value: function() {
              this.props.toggleSettingsDialog(!0)
            }
          }, {
            key: "handleNotes",
            value: function() {
              this.props.toggleNotes(!0)
            }
          }, {
            key: "handleBookmarks",
            value: function() {
              this.props.toggleBookmarks(!0)
            }
          }, {
            key: "handleAddBookmark",
            value: function() {
              var e = this.props.readingBook.key,
                t = this.props.epub,
                a = t.getCurrentLocationCfi(),
                n = t.renderer.findFirstVisible().textContent;
              n = n && n.trim();
              var o = new Je(e, a, n = n || a);
              this.props.handleAddBookmark(o), this.props.toggleMessage(!0)
            }
          }, {
            key: "handleExit",
            value: function() {
              this.props.handleReading(!1)
            }
          }, {
            key: "show",
            value: function() {
              this.setState({
                show: !0
              })
            }
          }, {
            key: "hide",
            value: function() {
              this.setState({
                show: !1
              })
            }
          }, {
            key: "render",
            value: function() {
              var e = {
                  display: this.state.isFullScreen ? "none" : "inline-block"
                },
                t = {
                  display: this.state.isFullScreen ? "inline-block" : "none"
                },
                a = {
                  opacity: this.state.show ? "1" : ".3"
                },
                n = window.innerWidth - 300 - 20,
                l = window.innerHeight - 40 - 40;
              return o.a.createElement(He, {
                left: n,
                top: l
              }, o.a.createElement("div", {
                id: "toolbar",
                className: "toolbar drag-me",
                onMouseOver: this.show,
                onMouseOut: this.hide,
                style: a
              }, o.a.createElement("button", {
                className: "toolbar-btn drag-me"
              }, o.a.createElement(Oe.a, null)), o.a.createElement("button", {
                className: "toolbar-btn",
                onClick: this.handleScreen
              }, o.a.createElement("span", {
                style: e
              }, o.a.createElement(je.a, null)), o.a.createElement("span", {
                style: t
              }, o.a.createElement(Be.a, null))), o.a.createElement("button", {
                className: "toolbar-btn",
                title: "\u8bbe\u7f6e",
                onClick: this.handleSettings
              }, o.a.createElement(De.a, null)), o.a.createElement("button", {
                className: "toolbar-btn",
                title: "\u7b14\u8bb0",
                onClick: this.handleNotes
              }, o.a.createElement(Ae.a, null)), o.a.createElement("button", {
                className: "toolbar-btn",
                title: "\u4e66\u7b7e\u5217\u8868",
                onClick: this.handleBookmarks
              }, o.a.createElement(Fe.a, null)), o.a.createElement("button", {
                className: "toolbar-btn",
                title: "\u6dfb\u52a0\u4e66\u7b7e",
                onClick: this.handleAddBookmark
              }, o.a.createElement(Ie.a, null)), o.a.createElement("button", {
                className: "toolbar-btn",
                title: "\u9000\u51fa",
                onClick: this.handleExit
              }, o.a.createElement(Me.a, null))))
            }
          }]), t
        }(o.a.Component)),
        We = a(60),
        Ye = a(62),
        Le = a(188),
        Xe = a(189),
        qe = a(191),
        Ke = a(96),
        Ve = a.n(Ke),
        Ge = a(97),
        Qe = a.n(Ge),
        $e = a(98),
        Ze = a.n($e),
        _e = a(99),
        et = a.n(_e),
        tt = a(194),
        at = function(e) {
          function t(e) {
            var a;
            Object(i.a)(this, t);
            var n = (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).props,
              o = n.colors,
              l = n.background,
              r = n.gutter,
              s = n.padding,
              h = n.fontSize,
              p = n.lineHeight,
              m = n.letterSpacing,
              g = n.wordSpacing,
              b = n.column,
              f = n.disablePopup;
            return a.state = {
              colors: o,
              background: l,
              gutter: r,
              padding: s,
              fontSize: h,
              lineHeight: p,
              letterSpacing: m,
              wordSpacing: g,
              column: b,
              disablePopup: f
            }, a.handleClose = a.handleClose.bind(Object(u.a)(a)), a.changeTheme = a.changeTheme.bind(Object(u.a)(a)), a.changeColors = a.changeColors.bind(Object(u.a)(a)), a.changeColumn = a.changeColumn.bind(Object(u.a)(a)), a.changeGutter = a.changeGutter.bind(Object(u.a)(a)), a.changePadding = a.changePadding.bind(Object(u.a)(a)), a.changeFontConfig = a.changeFontConfig.bind(Object(u.a)(a)), a.changeUserStyle = a.changeUserStyle.bind(Object(u.a)(a)), a.resetUserStyle = a.resetUserStyle.bind(Object(u.a)(a)), a.disablePopup = a.disablePopup.bind(Object(u.a)(a)), a.handleColorsChange = a.handleColorsChange.bind(Object(u.a)(a)), a.handleOtherChange = a.handleOtherChange.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "componentWillReceiveProps",
            value: function(e) {
              var t = e.colors,
                a = e.background,
                n = e.gutter,
                o = e.padding,
                l = e.fontSize,
                r = e.lineHeight,
                i = e.letterSpacing,
                s = e.wordSpacing,
                c = e.column,
                d = e.disablePopup;
              this.setState({
                colors: t,
                background: a,
                gutter: n,
                padding: o,
                fontSize: l,
                lineHeight: r,
                letterSpacing: i,
                wordSpacing: s,
                column: c,
                disablePopup: d
              })
            }
          }, {
            key: "handleClose",
            value: function() {
              this.props.toggleSettingsDialog(!1)
            }
          }, {
            key: "handleColorsChange",
            value: function(e) {
              var t = parseInt(e.target.dataset.color),
                a = this.state.colors;
              a[t] = e.target.value, this.setState({
                colors: a
              })
            }
          }, {
            key: "handleOtherChange",
            value: function(e) {
              var t = e.target.name;
              this.setState(Object(ae.a)({}, t, e.target.value))
            }
          }, {
            key: "changeTheme",
            value: function(e) {
              this.props.toggleTheme(e);
              var t = U.getDefaultConfigObj().colors,
                a = e ? t : ["#F44336", "#F57F17", "#8BC34A", "#2196F3"];
              this.props.setConfig("colors", a), ve.addDefaultCss()
            }
          }, {
            key: "changeColors",
            value: function(e) {
              var t = U.get().colors,
                a = e.target.value,
                n = parseInt(e.target.dataset.color);
              t[n] = a, this.props.setConfig("colors", t), console.log("change highlight color ".concat(n, " to ").concat(a)), ve.addDefaultCss()
            }
          }, {
            key: "changeColumn",
            value: function(e, t) {
              t = t ? 1 : 2, this.props.setConfig("column", t), console.log("change column to ".concat(t))
            }
          }, {
            key: "changeGutter",
            value: function(e) {
              var t = parseInt(e.target.value);
              this.props.setConfig("gutter", t), console.log("change gutter to ".concat(t))
            }
          }, {
            key: "changePadding",
            value: function(e) {
              var t = parseInt(e.target.value);
              this.props.setConfig("padding", t), console.log("change padding to ".concat(t))
            }
          }, {
            key: "changeFontConfig",
            value: function(e) {
              var t, a = e.target.name,
                n = e.target.value;
              if ("default" === n) t = 0;
              else {
                if ("default" !== n && isNaN(n)) return void alert("Invalid value!");
                t = parseInt(n)
              }
              this.props.setConfig(a, t), console.log("change ".concat(a, " to ").concat(t)), ve.addDefaultCss()
            }
          }, {
            key: "changeUserStyle",
            value: function(e) {
              var t = e.target.files[0],
                a = new FileReader; - 1 !== t.type.indexOf("text") ? (a.readAsText(t), a.onerror = function() {
                return alert("Error! Please refresh the page and try again.")
              }, a.onload = function() {
                alert("The stylesheet has been imported.");
                var e = ve.parseStyle(a.result);
                console.log(e), localStorage.setItem("style", JSON.stringify(e)), ve.applyCss()
              }) : alert("Invalid stylesheet!")
            }
          }, {
            key: "resetUserStyle",
            value: function() {
              var e = U.getDefaultConfigObj();
              this.props.setConfig("colors", e.colors), this.props.setConfig("padding", e.padding), this.props.setConfig("gutter", e.gutter), this.props.setConfig("fontSize", e.fontSize), this.props.setConfig("lineHeight", e.lineHeight), this.props.setConfig("letterSpacing", e.letterSpacing), this.props.setConfig("wordSpacing", e.wordSpacing), ve.resetStyle()
            }
          }, {
            key: "disablePopup",
            value: function(e, t) {
              this.props.setConfig("disablePopup", t), console.log("disable popup menu: ".concat(t))
            }
          }, {
            key: "render",
            value: function() {
              var e = this,
                t = this.props.classes,
                a = this.state,
                n = a.colors,
                l = a.gutter,
                r = a.padding,
                i = a.fontSize,
                s = a.lineHeight,
                c = a.letterSpacing,
                d = a.wordSpacing,
                u = a.column,
                h = a.disablePopup,
                p = {
                  color0: {
                    backgroundColor: n[0]
                  },
                  color1: {
                    backgroundColor: n[1]
                  },
                  color2: {
                    backgroundColor: n[2]
                  },
                  color3: {
                    backgroundColor: n[3]
                  }
                };
              return o.a.createElement("div", {
                id: "settings"
              }, o.a.createElement(K.a, {
                open: this.props.open,
                onClose: this.handleClose,
                className: t.root
              }, o.a.createElement(V.a, null, "\u8bbe\u7f6e"), o.a.createElement(G.a, null, o.a.createElement("div", {
                className: t.card,
                style: p.color0
              }, o.a.createElement("div", null, o.a.createElement(k.a, {
                align: "left",
                type: "subheading"
              }, "\u4e3b\u9898"), o.a.createElement(Le.a, null)), o.a.createElement("div", {
                className: t.box
              }, o.a.createElement(tt.a, {
                placement: "bottom",
                title: "light theme"
              }, o.a.createElement(Ve.a, {
                className: t.icon,
                onClick: function() {
                  return e.changeTheme(!0)
                }
              })), o.a.createElement(tt.a, {
                placement: "bottom",
                title: "dark theme"
              }, o.a.createElement(Qe.a, {
                className: t.icon,
                style: {
                  marginLeft: 60
                },
                onClick: function() {
                  return e.changeTheme(!1)
                }
              })))), o.a.createElement("div", {
                className: t.card,
                style: p.color1
              }, o.a.createElement("div", null, o.a.createElement(k.a, {
                align: "left",
                type: "subheading"
              }, "\u989c\u8272"), o.a.createElement(Le.a, null)), o.a.createElement("div", null, o.a.createElement("div", {
                className: t.colorBox,
                onBlur: this.changeColors,
                onChange: this.handleColorsChange
              }, o.a.createElement("div", {
                className: t.colorItem
              }, o.a.createElement("span", {
                className: t.dot,
                style: {
                  backgroundColor: n[0]
                }
              }), o.a.createElement("input", {
                className: t.input,
                "data-color": "0",
                value: n[0]
              })), o.a.createElement("div", {
                className: t.colorItem
              }, o.a.createElement("span", {
                className: t.dot,
                style: {
                  backgroundColor: n[1]
                }
              }), o.a.createElement("input", {
                className: t.input,
                "data-color": "1",
                value: n[1]
              })), o.a.createElement("div", {
                className: t.colorItem
              }, o.a.createElement("span", {
                className: t.dot,
                style: {
                  backgroundColor: n[2]
                }
              }), o.a.createElement("input", {
                className: t.input,
                "data-color": "2",
                value: n[2]
              })), o.a.createElement("div", {
                className: t.colorItem
              }, o.a.createElement("span", {
                className: t.dot,
                style: {
                  backgroundColor: n[3]
                }
              }), o.a.createElement("input", {
                className: t.input,
                "data-color": "3",
                value: n[3]
              }))))), o.a.createElement("div", {
                className: t.card,
                style: p.color2
              }, o.a.createElement("div", null, o.a.createElement(k.a, {
                align: "left",
                type: "subheading"
              }, "\u9875\u9762"), o.a.createElement(Le.a, null)), o.a.createElement("div", null, o.a.createElement("div", {
                className: t.controlBox
              }, o.a.createElement("span", {
                className: t.caption
              }, "column"), o.a.createElement("div", null, o.a.createElement(Xe.a, {
                control: o.a.createElement(qe.a, {
                  checked: 1 === u,
                  onChange: this.changeColumn,
                  classes: {
                    checked: t.checked
                  }
                }),
                label: "\u5355\u680f\u663e\u793a",
                title: "\u5237\u65b0\u9875\u9762\u540e\u751f\u6548"
              }))), o.a.createElement("div", {
                className: t.controlBox,
                onChange: this.handleOtherChange
              }, o.a.createElement("span", {
                className: t.caption
              }, "gutter"), o.a.createElement("div", null, o.a.createElement("input", {
                className: t.input,
                name: "gutter",
                value: l,
                onBlur: this.changeGutter
              }))), o.a.createElement("div", {
                className: t.controlBox,
                onChange: this.handleOtherChange
              }, o.a.createElement("span", {
                className: t.caption
              }, "padding"), o.a.createElement("div", null, o.a.createElement("input", {
                className: t.input,
                name: "padding",
                value: r,
                onBlur: this.changePadding
              }))))), o.a.createElement("div", {
                className: t.card,
                style: p.color3
              }, o.a.createElement("div", null, o.a.createElement(k.a, {
                align: "left",
                type: "subheading"
              }, "\u5b57\u4f53"), o.a.createElement(Le.a, null)), o.a.createElement("div", {
                onBlur: this.changeFontConfig,
                onChange: this.handleOtherChange
              }, o.a.createElement("div", {
                className: t.controlBox
              }, o.a.createElement("span", {
                className: t.caption
              }, "\u5b57\u4f53\u5927\u5c0f"), o.a.createElement("div", {
                title: "Valid range: 10-100"
              }, o.a.createElement("input", {
                className: t.input,
                name: "fontSize",
                value: 0 === i ? "default" : i
              }))), o.a.createElement("div", {
                className: t.controlBox
              }, o.a.createElement("span", {
                className: t.caption
              }, "\u5217\u9ad8"), o.a.createElement("div", {
                title: "Valid range: 1-100"
              }, o.a.createElement("input", {
                className: t.input,
                name: "lineHeight",
                value: 0 === s ? "default" : s
              }))), o.a.createElement("div", {
                className: t.controlBox
              }, o.a.createElement("span", {
                className: t.caption
              }, "\u5b57\u7b26\u95f4\u8ddd"), o.a.createElement("div", {
                title: "Valid range: 0-100"
              }, o.a.createElement("input", {
                className: t.input,
                name: "letterSpacing",
                value: 0 === c ? "default" : c
              }))), o.a.createElement("div", {
                className: t.controlBox
              }, o.a.createElement("span", {
                className: t.caption
              }, "\u5355\u8bcd\u95f4\u8ddd"), o.a.createElement("div", {
                title: "Valid range: 0-100"
              }, o.a.createElement("input", {
                className: t.input,
                name: "wordSpacing",
                value: 0 === d ? "default" : d
              }))))), o.a.createElement("div", {
                className: t.card,
                style: p.color0
              }, o.a.createElement("div", null, o.a.createElement(k.a, {
                align: "left",
                type: "subheading"
              }, "\u98ce\u683c"), o.a.createElement(Le.a, null)), o.a.createElement("div", {
                className: t.box
              }, o.a.createElement("label", {
                htmlFor: "custom-style"
              }, o.a.createElement(tt.a, {
                placement: "bottom",
                title: "\u5bfc\u5165\u81ea\u5b9a\u4e49\u6837\u5f0f"
              }, o.a.createElement(Ze.a, {
                className: t.icon
              })), o.a.createElement("input", {
                type: "file",
                accept: "text/css",
                id: "custom-style",
                className: t.hide,
                onChange: this.changeUserStyle
              })), o.a.createElement(tt.a, {
                placement: "bottom",
                title: "\u8fd8\u539f"
              }, o.a.createElement(et.a, {
                className: t.icon,
                onClick: this.resetUserStyle,
                style: {
                  marginLeft: 60
                }
              })))), o.a.createElement("div", {
                className: t.card,
                style: p.color1
              }, o.a.createElement("div", null, o.a.createElement(k.a, {
                align: "left",
                type: "subheading"
              }, "\u5176\u5b83"), o.a.createElement(Le.a, null)), o.a.createElement("div", null, o.a.createElement("div", {
                className: t.controlBox
              }, o.a.createElement("span", {
                className: t.caption
              }, "\u5f39\u51fa\u83dc\u5355"), o.a.createElement("div", null, o.a.createElement(Xe.a, {
                control: o.a.createElement(qe.a, {
                  checked: h,
                  onChange: this.disablePopup,
                  classes: {
                    checked: t.checked
                  }
                }),
                label: "\u7981\u7528\u9009\u62e9\u6587\u672c\u540e\u7684\u5f39\u51fa\u83dc\u5355"
              })))))), o.a.createElement(Q.a, {
                color: "primary"
              }, o.a.createElement(f.a, {
                onClick: this.handleClose
              }, "Close"))))
            }
          }]), t
        }(o.a.Component),
        nt = Object(p.a)(function(e) {
          return {
            root: {},
            card: {
              minWidth: 400,
              minHeight: 60,
              padding: 10,
              margin: "15px auto",
              boxShadow: e.shadows[1],
              transition: "box-shadow .3s",
              "&:hover": {
                boxShadow: e.shadows[6]
              }
            },
            icon: {
              color: We.a[700],
              "&:hover": {
                color: O.a[700],
                cursor: "pointer"
              }
            },
            box: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20 0 10"
            },
            colorBox: {
              width: 360,
              padding: "20px 0 10px",
              margin: "auto",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around"
            },
            colorItem: {
              width: "45%",
              margin: "5px 0",
              display: "flex",
              alignItems: "center"
            },
            dot: {
              width: 14,
              height: 14,
              display: "inline-block",
              borderRadius: "50%",
              border: "1px solid black",
              marginRight: 8
            },
            input: {
              outline: "none",
              border: "none",
              width: "80%",
              borderBottom: "1px dotted black",
              backgroundColor: "transparent",
              transition: ".3s",
              "&:hover": {
                borderColor: O.a[700]
              },
              "&:focus": {
                borderColor: O.a[700]
              }
            },
            controlBox: {
              width: 360,
              display: "flex",
              alignItems: "center",
              padding: "5px 10px"
            },
            caption: {
              width: "20%",
              marginRight: 20,
              fontSize: "small",
              textAlign: "right",
              color: We.a[700]
            },
            checked: {
              color: Ye.a[500]
            },
            hide: {
              display: "none"
            }
          }
        })(at),
        ot = a(100),
        lt = a.n(ot),
        rt = a(102),
        it = a.n(rt),
        st = a(101),
        ct = a.n(st),
        dt = function(e) {
          function t(e) {
            var a;
            return Object(i.a)(this, t), (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).state = {
              label: a.props.item.label,
              editable: !1
            }, a.handleClick = a.handleClick.bind(Object(u.a)(a)), a.handleRemove = a.handleRemove.bind(Object(u.a)(a)), a.handleEdit = a.handleEdit.bind(Object(u.a)(a)), a.handleSave = a.handleSave.bind(Object(u.a)(a)), a.handleChange = a.handleChange.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "handleClick",
            value: function() {
              var e = this.props,
                t = e.item;
              e.epub.gotoCfi(t.cfi), this.props.handleClose()
            }
          }, {
            key: "handleRemove",
            value: function() {
              var e = this.props.item;
              console.log("remove bookmark with key: ", e.key), this.props.deleteBookmark(e.key)
            }
          }, {
            key: "handleEdit",
            value: function() {
              this.setState({
                editable: !0
              })
            }
          }, {
            key: "handleSave",
            value: function() {
              var e = this.props.item;
              e.label = this.state.label, this.props.updateBookmark(e), this.setState({
                editable: !1
              })
            }
          }, {
            key: "handleChange",
            value: function(e) {
              this.setState({
                label: e.target.value
              })
            }
          }, {
            key: "render",
            value: function() {
              var e = this.props.classes,
                t = o.a.createElement(k.a, {
                  noWrap: !0,
                  className: e.text,
                  onClick: this.handleClick
                }, this.state.label),
                a = o.a.createElement("input", {
                  type: "text",
                  value: this.state.label,
                  onChange: this.handleChange,
                  className: e.input
                }),
                n = o.a.createElement(lt.a, {
                  className: e.icon,
                  onClick: this.handleEdit
                }),
                l = o.a.createElement(ct.a, {
                  className: e.icon,
                  onClick: this.handleSave
                }),
                r = this.state.editable ? a : t,
                i = this.state.editable ? l : n;
              return o.a.createElement("li", {
                className: e.item
              }, o.a.createElement(m.a, {
                container: !0,
                align: "center",
                className: e.container
              }, o.a.createElement(m.a, {
                item: !0,
                xs: 9
              }, o.a.createElement("div", null, r)), o.a.createElement(m.a, {
                item: !0,
                xs: 3
              }, o.a.createElement("div", {
                className: e.button
              }, i, o.a.createElement(it.a, {
                className: e.icon,
                onClick: this.handleRemove
              })))))
            }
          }]), t
        }(o.a.Component),
        ut = Object(p.a)(function(e) {
          return {
            item: {
              padding: "0 10px",
              height: 40,
              overflow: "hidden",
              transition: ".3s"
            },
            container: {
              margin: 0
            },
            text: {
              "&:hover": {
                cursor: "pointer",
                color: O.a[700]
              }
            },
            input: {
              width: "100%",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              borderBottom: "1px dotted black",
              "&:hover": {
                borderColor: O.a[700]
              },
              "&:focus": {
                borderColor: O.a[700]
              }
            },
            button: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around"
            },
            icon: {
              width: 21,
              height: 21,
              transition: ".3s",
              "&:hover": {
                cursor: "pointer",
                color: O.a[700]
              }
            }
          }
        })(dt),
        ht = function(e) {
          function t(e) {
            var a;
            return Object(i.a)(this, t), (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).handleClose = a.handleClose.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "handleClose",
            value: function() {
              this.props.toggleBookmarks(!1)
            }
          }, {
            key: "render",
            value: function() {
              var e = this,
                t = this.props.classes;
              return o.a.createElement("div", {
                id: "bookmarks"
              }, o.a.createElement(ne.a, {
                open: this.props.open,
                onClose: this.handleClose
              }, o.a.createElement("div", {
                className: t.title
              }, o.a.createElement(k.a, {
                type: "headline",
                align: "center",
                gutterBottom: !0
              }, "\u4e66\u7b7e")), o.a.createElement("ul", {
                className: t.list
              }, this.props.bookmarks.map(function(t) {
                return o.a.createElement(ut, {
                  key: t.key,
                  item: t,
                  epub: e.props.epub,
                  handleClose: e.handleClose,
                  updateBookmark: e.props.updateBookmark,
                  deleteBookmark: e.props.deleteBookmark
                })
              }))))
            }
          }]), t
        }(o.a.Component),
        pt = Object(p.a)(function(e) {
          return {
            title: {
              marginTop: 10
            },
            list: {
              width: 280,
              padding: 0,
              listStyle: "none",
              overflowX: "hidden"
            }
          }
        })(ht),
        mt = a(104),
        gt = a.n(mt),
        bt = a(103),
        ft = a.n(bt),
        kt = function(e) {
          function t(e) {
            var a;
            return Object(i.a)(this, t), (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).state = {
              note: a.props.note.note,
              editable: !1
            }, a.handleJump = a.handleJump.bind(Object(u.a)(a)), a.handleDelete = a.handleDelete.bind(Object(u.a)(a)), a.handleEdit = a.handleEdit.bind(Object(u.a)(a)), a.handleChange = a.handleChange.bind(Object(u.a)(a)), a.handleBlur = a.handleBlur.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "handleJump",
            value: function() {
              this.props.handleJump(this.props.note.cfi)
            }
          }, {
            key: "handleDelete",
            value: function() {
              this.props.deleteNote(this.props.note.key)
            }
          }, {
            key: "handleEdit",
            value: function() {
              this.setState({
                editable: !0
              })
            }
          }, {
            key: "handleChange",
            value: function(e) {
              this.setState({
                note: e.target.value
              })
            }
          }, {
            key: "handleBlur",
            value: function(e) {
              var t = this.props.note;
              t.note = e.target.value, this.props.updateNote(t), this.setState({
                editable: !1
              }), console.log("note has been updated!")
            }
          }, {
            key: "render",
            value: function() {
              var e = this.props,
                t = e.note,
                a = e.colors,
                n = e.classes,
                l = {
                  backgroundColor: a[t.color]
                },
                r = o.a.createElement(k.a, {
                  noWrap: !0,
                  color: "secondary",
                  onClick: this.handleEdit
                }, this.state.note),
                i = o.a.createElement("input", {
                  type: "text",
                  autoFocus: "autofocus",
                  value: this.state.note,
                  className: n.input,
                  onChange: this.handleChange,
                  onBlur: this.handleBlur
                });
              return o.a.createElement("li", null, o.a.createElement("div", {
                style: l,
                className: n.item
              }, o.a.createElement("div", {
                className: n.noteContent
              }, o.a.createElement("div", null, o.a.createElement(k.a, {
                noWrap: !0,
                type: "body2"
              }, t.text)), o.a.createElement("div", null, this.state.editable ? i : r)), o.a.createElement("div", null, o.a.createElement(ft.a, {
                className: n.icon,
                onClick: this.handleDelete
              }), o.a.createElement(gt.a, {
                className: n.icon,
                onClick: this.handleJump,
                style: {
                  marginTop: 15
                }
              }))))
            }
          }]), t
        }(o.a.Component),
        vt = Object(p.a)(function(e) {
          return {
            item: {
              width: "90%",
              height: 80,
              padding: 10,
              margin: "15px auto",
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              boxShadow: e.shadows[1],
              transition: ".3s",
              "&:hover": {
                boxShadow: e.shadows[6]
              }
            },
            noteContent: {
              width: "70%",
              flexGrow: "1"
            },
            input: {
              border: "none",
              outline: "none",
              color: We.a[600],
              width: "100%",
              backgroundColor: "transparent",
              borderBottom: "1px dotted black"
            },
            icon: {
              width: 18,
              height: 18,
              color: We.a[700],
              display: "block",
              transition: ".3s",
              "&:hover": {
                cursor: "pointer",
                color: O.a[700]
              }
            }
          }
        })(kt),
        yt = function(e) {
          function t(e) {
            var a;
            return Object(i.a)(this, t), (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).handleClose = a.handleClose.bind(Object(u.a)(a)), a.handleJump = a.handleJump.bind(Object(u.a)(a)), a.handleExport = a.handleExport.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "handleClose",
            value: function() {
              this.props.toggleNotes(!1)
            }
          }, {
            key: "handleJump",
            value: function(e) {
              this.props.epub.gotoCfi(e)
            }
          }, {
            key: "handleExport",
            value: function() {
              this.props.toggleExport(!0)
            }
          }, {
            key: "render",
            value: function() {
              var e = this,
                t = this.props,
                a = t.notes,
                n = t.colors,
                l = t.classes;
              return o.a.createElement("div", {
                id: "notes"
              }, o.a.createElement(ne.a, {
                open: this.props.open,
                onClose: this.handleClose,
                anchor: "right",
                className: l.root
              }, o.a.createElement("div", {
                className: l.title
              }, o.a.createElement(k.a, {
                type: "headline",
                align: "center",
                gutterBottom: !0
              }, "\u7b14\u8bb0")), o.a.createElement("ul", {
                className: l.list
              }, a.map(function(t) {
                return o.a.createElement(vt, {
                  key: t.key,
                  note: t,
                  colors: n,
                  deleteNote: e.props.deleteNote,
                  updateNote: e.props.updateNote,
                  handleJump: e.handleJump
                })
              })), o.a.createElement(Le.a, null), o.a.createElement("div", {
                className: l.foot
              }, o.a.createElement(f.a, {
                onClick: this.handleExport,
                color: "secondary"
              }, "\u5bfc\u51fa"))))
            }
          }]), t
        }(o.a.Component),
        Et = Object(p.a)(function(e) {
          return {
            root: {
              display: "flex",
              flexDirection: "column"
            },
            title: {
              marginTop: 10
            },
            list: {
              width: 280,
              padding: 0,
              listStyle: "none",
              flexGrow: 2,
              overflowX: "hidden"
            },
            foot: {
              display: "flex",
              flexShrink: 0,
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
              height: 40,
              padding: "0 10px"
            }
          }
        })(yt),
        Ct = function(e) {
          function t(e) {
            var a;
            return Object(i.a)(this, t), (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).handleClose = a.handleClose.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "handleClose",
            value: function() {
              this.props.toggleMessage(!1)
            }
          }, {
            key: "render",
            value: function() {
              var e = this.props.open;
              return o.a.createElement(Z.a, {
                anchorOrigin: {
                  vertical: "top",
                  horizontal: "right"
                },
                open: e,
                autoHideDuration: 1e3,
                onClose: this.handleClose,
                message: o.a.createElement("span", {
                  id: "message"
                }, "\u4e66\u7b7e\u6dfb\u52a0\u6210\u529f"),
                action: [o.a.createElement(f.a, {
                  key: "dismiss",
                  color: "secondary",
                  size: "small",
                  onClick: this.handleClose
                }, "\u5173\u95ed")]
              })
            }
          }]), t
        }(o.a.Component),
        Nt = a(105),
        Ot = a.n(Nt),
        St = a(106),
        jt = a.n(St),
        xt = a(144),
        Bt = o.a.forwardRef(function(e, t) {
          return o.a.createElement(xt.a, Object.assign({
            direction: "up",
            ref: t
          }, e))
        }),
        wt = function(e) {
          function t(e) {
            var a;
            return Object(i.a)(this, t), (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).copyHandler = function(e) {
              var t = a.generateArticle(!0);
              e.clipboardData.setData("text/plain", t), e.preventDefault(), console.log("notes copied!"), alert("\u7b14\u8bb0\u5df2\u88ab\u590d\u5236")
            }, a.handleClose = a.handleClose.bind(Object(u.a)(a)), a.generateArticle = a.generateArticle.bind(Object(u.a)(a)), a.handleCopy = a.handleCopy.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "handleClose",
            value: function() {
              this.props.toggleExport(!1)
            }
          }, {
            key: "generateArticle",
            value: function(e) {
              var t = this.props.notes,
                a = "",
                n = e ? "\n*** *** ***\n\n" : "\n* * * * * *\n\n";
              return t.forEach(function(t) {
                var o = e ? "" : "> ";
                o += t.text, o += "\n\n", o += t.note ? "".concat(t.note, "\n") : "", a += o += n
              }), a
            }
          }, {
            key: "handleCopy",
            value: function() {
              var e = this;
              document.addEventListener("copy", this.copyHandler), document.execCommand("copy", !1, null), setTimeout(function() {
                document.removeEventListener("copy", e.copyHandler)
              }, 1e3)
            }
          }, {
            key: "render",
            value: function() {
              var e = this.props,
                t = e.open,
                a = e.notes,
                n = e.book,
                l = e.classes;
              return o.a.createElement("div", {
                id: "export-panel"
              }, o.a.createElement(K.a, {
                fullScreen: !0,
                open: t,
                onClose: this.handleClose,
                TransitionComponent: Bt
              }, o.a.createElement("div", {
                className: l.head
              }, o.a.createElement("div", {
                className: l.logo
              }, "\u7b14\u8bb0\u9884\u89c8"), o.a.createElement("div", {
                className: l.headRight
              }, o.a.createElement(tt.a, {
                title: "copy",
                placement: "bottom"
              }, o.a.createElement(S.a, {
                onClick: this.handleCopy
              }, o.a.createElement(Ot.a, {
                className: l.icon
              }))), o.a.createElement(S.a, {
                onClick: this.handleClose
              }, o.a.createElement(jt.a, null)))), o.a.createElement("div", {
                className: l.article
              }, o.a.createElement("div", {
                className: l.page
              }, o.a.createElement("h1", {
                className: l.title
              }, n.name), a.map(function(e) {
                return o.a.createElement("div", {
                  key: e.key
                }, o.a.createElement("div", {
                  className: l.note
                }, o.a.createElement("blockquote", {
                  className: l.quote
                }, e.text), o.a.createElement("p", {
                  className: l.annotation
                }, e.note)), o.a.createElement(Le.a, null))
              })))))
            }
          }]), t
        }(o.a.Component),
        Dt = Object(p.a)(function(e) {
          return {
            head: {
              width: "100%",
              height: 60,
              padding: "0 30px",
              top: 0,
              position: "fixed",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomStyle: "solid",
              borderColor: e.palette.text.divider,
              backgroundColor: e.palette.background.paper
            },
            logo: {
              fontFamily: "'Titillium Web', sans-serif",
              fontSize: "1.5rem",
              color: e.palette.text.primary
            },
            headRight: {
              display: "flex"
            },
            icon: {
              width: 20,
              height: 20
            },
            article: {
              overflowY: "auto",
              width: "100vw",
              height: "100vh",
              marginTop: 60
            },
            page: {
              width: 660,
              margin: "50px auto 0",
              fontFamily: "'Helvetica Neue', 'Arial', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', sans-serif",
              color: e.palette.text.primary
            },
            title: {
              fontFamily: "Georgia, Palatino, serif",
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: "30px",
              textAlign: "center",
              paddingBottom: 10
            },
            note: {
              margin: "20px 0"
            },
            quote: {
              borderColor: O.a[400],
              borderLeft: "6px solid",
              backgroundColor: We.a[200],
              borderRadius: "5px",
              padding: "15px 10px",
              color: "rgba(0, 0, 0, 0.87)"
            },
            annotation: {
              marginTop: "20px",
              fontSize: "14px",
              paddingLeft: "16px"
            }
          }
        })(wt),
        Pt = function(e) {
          function t(e) {
            var a;
            return Object(i.a)(this, t), (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).state = {
              openSettings: !1,
              openBookmarks: !1,
              openNotes: !1,
              openMessage: !1,
              openExport: !1,
              bookmarks: [],
              notes: [],
              colors: U.get().colors,
              background: U.get().background,
              gutter: U.get().gutter,
              padding: U.get().padding,
              fontSize: U.get().fontSize,
              lineHeight: U.get().lineHeight,
              letterSpacing: U.get().letterSpacing,
              wordSpacing: U.get().wordSpacing,
              column: U.get().column,
              disablePopup: U.get().disablePopup
            }, a.epub = null, a.toggleSettingsDialog = a.toggleSettingsDialog.bind(Object(u.a)(a)), a.toggleBookmarks = a.toggleBookmarks.bind(Object(u.a)(a)), a.toggleNotes = a.toggleNotes.bind(Object(u.a)(a)), a.toggleMessage = a.toggleMessage.bind(Object(u.a)(a)), a.toggleExport = a.toggleExport.bind(Object(u.a)(a)), a.addBookmark = a.addBookmark.bind(Object(u.a)(a)), a.deleteBookmark = a.deleteBookmark.bind(Object(u.a)(a)), a.updateBookmark = a.updateBookmark.bind(Object(u.a)(a)), a.addNote = a.addNote.bind(Object(u.a)(a)), a.deleteNote = a.deleteNote.bind(Object(u.a)(a)), a.updateNote = a.updateNote.bind(Object(u.a)(a)), a.getNote = a.getNote.bind(Object(u.a)(a)), a.getNotesByChapter = a.getNotesByChapter.bind(Object(u.a)(a)), a.setConfig = a.setConfig.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "componentWillMount",
            value: function() {
              var e = this,
                t = new ee("bookmarks", "bookmark");
              t.open(function() {
                t.getAll(function(t) {
                  var a;
                  a = t.filter(function(t) {
                    return t.bookKey === e.props.readingBook.key
                  }), e.setState({
                    bookmarks: a
                  })
                })
              });
              var a = new ee("notes", "note");
              a.open(function() {
                a.getAll(function(t) {
                  var a;
                  a = t.filter(function(t) {
                    return t.bookKey === e.props.readingBook.key
                  }), e.setState({
                    notes: a
                  })
                })
              }), this.epub = window.ePub({
                bookPath: this.props.readingBook.content,
                restore: !1
              })
            }
          }, {
            key: "componentDidMount",
            value: function() {
              window.rangy.init()
            }
          }, {
            key: "setConfig",
            value: function(e, t) {
              this.setState(Object(ae.a)({}, e, t)), U.set(e, t)
            }
          }, {
            key: "toggleSettingsDialog",
            value: function(e) {
              this.setState({
                openSettings: e
              })
            }
          }, {
            key: "toggleBookmarks",
            value: function(e) {
              this.setState({
                openBookmarks: e
              })
            }
          }, {
            key: "toggleNotes",
            value: function(e) {
              this.setState({
                openNotes: e
              })
            }
          }, {
            key: "toggleMessage",
            value: function(e) {
              this.setState({
                openMessage: e
              })
            }
          }, {
            key: "toggleExport",
            value: function(e) {
              this.setState({
                openExport: e
              })
            }
          }, {
            key: "addBookmark",
            value: function(e) {
              var t = this,
                a = new ee("bookmarks", "bookmark");
              a.open(function() {
                a.add(e);
                var n = t.state.bookmarks;
                n.push(e), t.setState({
                  bookmarks: n
                })
              })
            }
          }, {
            key: "deleteBookmark",
            value: function(e) {
              var t = this,
                a = new ee("bookmarks", "bookmark");
              a.open(function() {
                a.remove(e);
                var n = t.state.bookmarks;
                n = n.filter(function(t) {
                  return t.key !== e
                }), t.setState({
                  bookmarks: n
                })
              })
            }
          }, {
            key: "updateBookmark",
            value: function(e) {
              var t = this,
                a = new ee("bookmarks", "bookmark");
              a.open(function() {
                a.update(e);
                var n = t.state.bookmarks;
                n.forEach(function(t, a, n) {
                  t.key === e.key && (n[a] = e)
                }), t.setState({
                  bookmarks: n
                })
              })
            }
          }, {
            key: "addNote",
            value: function(e) {
              var t = this,
                a = new ee("notes", "note");
              a.open(function() {
                a.add(e);
                var n = t.state.notes;
                n.push(e), t.setState({
                  notes: n
                })
              })
            }
          }, {
            key: "deleteNote",
            value: function(e) {
              var t = this,
                a = new ee("notes", "note");
              a.open(function() {
                a.remove(e);
                var n = t.state.notes;
                n = n.filter(function(t) {
                  return t.key !== e
                }), t.setState({
                  notes: n
                })
              })
            }
          }, {
            key: "updateNote",
            value: function(e) {
              var t = this,
                a = new ee("notes", "note");
              a.open(function() {
                a.update(e);
                var n = t.state.notes;
                n.forEach(function(t, a, n) {
                  t.key === e.key && (n[a] = e)
                }), t.setState({
                  notes: n
                })
              })
            }
          }, {
            key: "getNote",
            value: function(e) {
              var t = this.state.notes,
                a = null;
              return t.forEach(function(t) {
                t.key === e && (a = t)
              }), a
            }
          }, {
            key: "getNotesByChapter",
            value: function(e) {
              return this.state.notes.filter(function(t) {
                return t.chapter === e
              })
            }
          }, {
            key: "render",
            value: function() {
              var e = this.epub,
                t = this.props.readingBook,
                a = this.state,
                n = a.openSettings,
                l = a.openBookmarks,
                r = a.openNotes,
                i = a.openMessage,
                s = a.openExport,
                c = a.bookmarks,
                d = a.notes,
                u = a.colors,
                h = a.background,
                p = a.gutter,
                m = a.padding,
                g = a.fontSize,
                b = a.lineHeight,
                f = a.letterSpacing,
                k = a.wordSpacing,
                v = a.column,
                y = a.disablePopup;
              return o.a.createElement("div", {
                id: "viewer"
              }, o.a.createElement(ce, {
                epub: e,
                theme: this.props.theme
              }), o.a.createElement(Ce, {
                epub: e,
                book: this.props.readingBook,
                addNote: this.addNote,
                getNote: this.getNote,
                deleteNote: this.deleteNote,
                updateNote: this.updateNote,
                getNotesByChapter: this.getNotesByChapter,
                theme: this.props.theme,
                background: h,
                gutter: p,
                padding: m,
                colors: u,
                column: v,
                disablePopup: y
              }), o.a.createElement(Ue, {
                handleReading: this.props.handleReading,
                toggleMessage: this.toggleMessage,
                toggleSettingsDialog: this.toggleSettingsDialog,
                toggleBookmarks: this.toggleBookmarks,
                toggleNotes: this.toggleNotes,
                handleAddBookmark: this.addBookmark,
                readingBook: this.props.readingBook,
                epub: e
              }), o.a.createElement(pt, {
                open: l,
                toggleBookmarks: this.toggleBookmarks,
                bookmarks: c,
                deleteBookmark: this.deleteBookmark,
                updateBookmark: this.updateBookmark,
                getBookmark: this.getBookmark,
                epub: e
              }), o.a.createElement(Et, {
                open: r,
                toggleNotes: this.toggleNotes,
                toggleExport: this.toggleExport,
                notes: d,
                colors: u,
                deleteNote: this.deleteNote,
                updateNote: this.updateNote,
                epub: e
              }), o.a.createElement(nt, {
                open: n,
                toggleSettingsDialog: this.toggleSettingsDialog,
                toggleTheme: this.props.toggleTheme,
                setConfig: this.setConfig,
                colors: u,
                background: h,
                gutter: p,
                padding: m,
                fontSize: g,
                lineHeight: b,
                letterSpacing: f,
                wordSpacing: k,
                column: v,
                disablePopup: y
              }), o.a.createElement(Ct, {
                open: i,
                toggleMessage: this.toggleMessage
              }), o.a.createElement(Dt, {
                open: s,
                book: t,
                notes: d,
                theme: this.props.theme,
                toggleExport: this.toggleExport
              }))
            }
          }]), t
        }(o.a.Component),
        Ft = function(e) {
          function t(e) {
            var a;
            return Object(i.a)(this, t), (a = Object(c.a)(this, Object(d.a)(t).call(this, e))).state = {
              isReading: !1,
              readingBook: null,
              theme: U.get().theme
            }, a.handleReading = a.handleReading.bind(Object(u.a)(a)), a.handleReadingBook = a.handleReadingBook.bind(Object(u.a)(a)), a.toggleTheme = a.toggleTheme.bind(Object(u.a)(a)), a
          }
          return Object(h.a)(t, e), Object(s.a)(t, [{
            key: "handleReading",
            value: function(e) {
              this.setState({
                isReading: e
              })
            }
          }, {
            key: "handleReadingBook",
            value: function(e) {
              this.setState({
                readingBook: e
              })
            }
          }, {
            key: "toggleTheme",
            value: function(e) {
              this.setState({
                theme: e
              }), U.set("theme", e)
            }
          }, {
            key: "render",
            value: function() {
              var e, t = this.state,
                a = t.isReading,
                n = t.readingBook,
                l = t.theme,
                r = Object(P.a)({
                  palette: {
                    type: l ? "light" : "dark"
                  }
                }),
                i = o.a.createElement(te, {
                  handleReading: this.handleReading,
                  handleReadingBook: this.handleReadingBook,
                  theme: l
                }),
                s = o.a.createElement(Pt, {
                  handleReading: this.handleReading,
                  readingBook: n,
                  toggleTheme: this.toggleTheme,
                  theme: l
                }),
                c = a ? s : i;
              return document.title = a ? n.name : "Library", a && l ? e = U.get().background || "#fff" : a && !l ? e = "#424242" : !a && l ? e = "#f1f2f3" : a || l || (e = "#424242"), document.body.style.backgroundColor = e, o.a.createElement(F.a, {
                theme: r
              }, o.a.createElement("div", {
                id: "app"
              }, c))
            }
          }]), t
        }(o.a.Component);
      Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
      r.a.render(o.a.createElement(Ft, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function(e) {
        e.unregister()
      })
    }
  },
  [
    [128, 1, 2]
  ]
]);
//# sourceMappingURL=main.2c62b6e9.chunk.js.map
