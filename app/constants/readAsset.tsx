import fs  from 'fs';
import path from 'path';

export default function read(url,callback) {

  fs.readFile(
    path.resolve("", url), 'utf-8' , (err, data) => {
      if (err) throw err;
      return callback(data);
    }
  );
}
