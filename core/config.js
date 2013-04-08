define(['config!config'], function(c) {
    var Config = {
        items: c
    };

    Config.get = function(key) {
        return Config.items[key] || null;
    };

    return Config;
});