const axios = require("axios").default;
const crawler = require("./crawler");
const utils = require("./utils");
const links = crawler.links;

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var parseTr = (tr) => {
  var results = [];
  var cols = tr.getElementsByTagName("td");
  var idx = cols.length == 3 ? 1 : 0; // skip the first element if there's 3 (image in the first row)
  var key;
  for (var i = idx; i < cols.length; i++) {
    if (results.length == 0) {
      key = cols[i].textContent;
      results.push(key);
    } else {
      if (key && key.toLowerCase() == "rarity") {
        // rarity is shown as stars, convert to numeric value
        const divs = cols[i].getElementsByTagName("div");
        results.push(divs.length);
      } else {
        results.push(cols[i].textContent);
      }
    }
  }

  return results;
};

var items = {};
var promises = [];
var catName = "artifacts";
// TODO: failed -> food, weapons
var category = links[catName]; // modify this value

for (var idx in category) {
  const link = category[idx];

  promises.push(
    axios
      .get(link)
      .then((response) => {
        const dom = new JSDOM(response.data);
        const rows = dom.window.document.getElementsByTagName("tr");
        const itemName = dom.window.document
          .getElementsByClassName("post-title")[0]
          .textContent.trim();
        items[itemName] = {};

        for (var i = 0; i < rows.length; i++) {
          const kv = parseTr(rows[i]);
          items[itemName][kv[0]] = kv[1];
        }
      })
      .catch((err) => {
        console.error(link, err);
      })
  );
}

Promise.all(promises).then((result) => {
  utils.writeToJSON("scripts/" + catName + ".json", items);
});
