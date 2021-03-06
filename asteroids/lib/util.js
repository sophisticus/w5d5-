"use strict"

const Util = {

  // dir (vec) {
  // var norm = Util.norm(vec);
  // return Util.scale(vec, 1 / norm);
  // },
  // // Find distance between two points.
  // dist (pos1, pos2) {
  //   return Math.sqrt(
  //     Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
  //   );
  // },
  // // Find the length of the vector.
  // norm (vec) {
  //   return Util.dist([0, 0], vec);
  // },
  //
  inherits (ChildClass, ParentClass){
    function Surrogate(){ this.constructor = ChildClass;}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  }, // there's commas because this is an object, not a class

  randomVec (length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  }

}

module.exports = Util;
