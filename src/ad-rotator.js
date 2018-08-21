export default class Rotator {

    constructor(model, property) {
        this._model = model;
        this._property = property;
    }

    stop() {
        this.pause();
        this._idx = 0;

    }

    pause() {
        if (this._interval) {
            clearInterval(this._interval);
        }
    }

    start(config, callback) {
        if (this._config != config) {
            this.stop();
            this._config = config;
            let propertyName = this._config.propertyName != null ? this._config.proprtyName : "ad";
            let notify = ()=>  this._model[this._property] = this._config.ads[this._idx];

            this._interval = setInterval(()=> {
                this._idx = (this._idx + 1) % this._config.ads.length;
                notify();
            }, config.interval);
            notify();
        }
        this._callback = callback;
    }
}