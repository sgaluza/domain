Space.messaging.Serializable.extend('Space.domain.ValueObject', {

  equals: function(other) {
    if(other === null) return false;
    return (other.constructor === this.constructor) && this._hasSameValues(other);
  },

  _hasSameValues: function(other) {
    let hasSameValues = true;
    for (let key in this.fields()) {
      if (this[key] instanceof Space.domain.ValueObject) {
        if (!this[key].equals(other[key])) {
          hasSameValues = false;
          break;
        }
      } else {
        if (!_.isEqual(this[key], other[key])) {
          hasSameValues = false;
          break;
        }
      }
    }
    return hasSameValues;
  }

});
