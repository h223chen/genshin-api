const fs = require("fs");

module.exports = {
  // I/O functions
  /**
   * @param filename - file name including path and extension
   * @return parsed JSON object or null
   */
  readToJSON: (filename) => {
    const file = fs.readFileSync(filename, "utf8");
    let parsed;

    try {
      parsed = JSON.parse(file);
    } catch (e) {
      console.error("unable to parse file as JSON: ", filename);
    }
    return parsed;
  },

  /**
   * @param filename - file name including path and extension
   * @param data - transformed JSON data
   * @returns success or failure of write to json operation
   */
  writeToJSON: (filename, data) => {
    if (!filename.includes(".json")) {
      console.warn('filename does not include ".json" extension');
    }
    try {
      fs.writeFileSync(filename, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error("unable to write JSON file", filename);
      return false;
    }
  },
};
