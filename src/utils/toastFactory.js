export const ToastFactory = (function() {
  let instance;

  function createInstance() {
    return {
      toasts: [],
      add(toast) {
        this.toasts.push(toast);
        this.worker(this.toasts);
      },
      remove(id) {
        this.toasts = this.toasts.filter(toast => toast.id !== id);
        this.worker(this.toasts);
      },
      worker() {},
      listener(externalListenerFunction) {
        this.worker = externalListenerFunction;
      },
    };
  }

  return {
    getInstance() {
      if (!instance) instance = createInstance();
      return instance;
    },
  };
})();
