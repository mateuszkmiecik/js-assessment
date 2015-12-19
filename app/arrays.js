if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce((r, e) => r + e, 0)
    },

    remove : function(arr, item) {
        while(arr.indexOf(item) >= 0){
            arr.splice(arr.indexOf(item), 1);
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        while(arr.indexOf(item) >= 0){
            arr.splice(arr.indexOf(item), 1);
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.splice(-1,1);
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        return arr.filter(x => x == item).length;
    },

    duplicates : function(arr) {
        var appeared = [], duplicates = [];
        arr.forEach(x => {
            if(appeared[x] && duplicates.indexOf(x) < 0){
                duplicates.push(x);
            } else {
                appeared[x] = true;
            }
        });
        return duplicates;
    },

    square : function(arr) {
        return arr.map(x => x*x);
    },

    findAllOccurrences : function(arr, target) {
        return arr.map((x, i) => {
            return (x == target) ? i : -1;
        }).filter(x => x >= 0);
    }
  };
});
