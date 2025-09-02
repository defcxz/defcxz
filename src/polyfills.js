// Polyfill for MessageChannel in Cloudflare Workers
if (typeof MessageChannel === 'undefined') {
  globalThis.MessageChannel = class MessageChannel {
    constructor() {
      this.port1 = new MessagePort();
      this.port2 = new MessagePort();
      this.port1._otherPort = this.port2;
      this.port2._otherPort = this.port1;
    }
  };

  globalThis.MessagePort = class MessagePort extends EventTarget {
    constructor() {
      super();
      this._otherPort = null;
      this._closed = false;
    }

    postMessage(data) {
      if (this._closed || !this._otherPort) return;
      // Simulate async message passing
      setTimeout(() => {
        if (!this._otherPort._closed) {
          this._otherPort.dispatchEvent(new MessageEvent('message', { data }));
        }
      }, 0);
    }

    close() {
      this._closed = true;
    }

    start() {
      // No-op in this polyfill
    }
  };
}
