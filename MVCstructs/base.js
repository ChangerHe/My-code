//连缀的写法,可以避免写过多的代码,更加的方便

var Base = {
    getId: function(id) {
        return document.getElementById(id)
    },
    getName: function(name) {
        return document.getElementsByName(name)
    },
    getTagName: function(tag) {
        return document.getElementsByTagName(tag)
    }
}