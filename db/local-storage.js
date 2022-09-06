export function LocalStorage(key) {
    this.key = key;
    this.setData = function (data) {
        localStorage.setItem(this.key, JSON.stringify(data));
    };

    this.getData = function () {
        return JSON.parse(localStorage.getItem(this.key))
    };
}