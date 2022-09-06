export function SessionStorage(key) {
    this.key = key;
    this.setData = function (data) {
        sessionStorage.setItem(this.key, JSON.stringify(data));
    };

    this.getData = function () {
        return JSON.parse(sessionStorage.getItem(this.key))
    };
}