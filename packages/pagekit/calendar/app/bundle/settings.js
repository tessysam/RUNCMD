! function(t) {
    function n(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = { exports: {}, id: o, loaded: !1 };
        return t[o].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
    }
    var e = {};
    return n.m = t, n.c = e, n.p = "", n(0)
}([function(t, n) {
    t.exports = {
        el: "#settings",
        data: function() {
            return window.$data
        },
        methods: { 
            save: function() {
                              this.$http.post("admin/system/settings/config",
                                 { 
                                    name: "calendar", config: this.config }).then(function() {
                                                     this.$notify("Settings saved.") }, 
                                                     function(t) { 
                                                        this.$notify(t.data, "danger") 
                                                                  }) 
                                  } }
    }, Vue.ready(t.exports)
}]);
