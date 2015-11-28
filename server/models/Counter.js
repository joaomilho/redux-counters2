import fs from 'fs';

export default class Counter {
  static update(diff = +1){
    fs.writeFileSync('count.db', this.get() + diff, {encoding: 'utf-8'});
    return true;
  }

  static get(){
    return parseInt(fs.readFileSync('count.db', {encoding: 'utf-8'}));
  }
}
