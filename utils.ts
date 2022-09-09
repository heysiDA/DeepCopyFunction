export class Utils {
    /**
     * @description :Function to make a deep copy of an object, losing all connections
     * Useful to avoid correlations between to object when making a copy
     * @param array : The object to clone
     * @param count : Número de elementos a agrupar por cada posición del arreglo
     * @result : A copy of the current object with no links
     */
    
  public static deepCopy<T>(obj: T): T {
    let copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || 'object' !== typeof obj) {
      return obj;
    }

    // Handle Date
    if (obj instanceof Date) {
      copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
      copy = [];
      for (let i = 0, len = obj.length; i < len; i++) {
        copy[i] = this.deepCopy(obj[i]);
      }
      return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
      copy = {};
      for (const attr in obj) {
        if (obj.hasOwnProperty(attr)) {
          copy[attr] = this.deepCopy(obj[attr]);
        }
      }
      return copy;
    }
  }
}
