name = 'The Window';

var alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
      const a = () => this.name
      return a
    }
}