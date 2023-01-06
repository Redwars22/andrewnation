//@ts-check

var Tools = /** @class */ (function () {
  function Tools() {}
  Tools.prototype.transformToRem = function (value) {
    return value / 16;
  };
  return Tools;
})();

var units = {
  px: "px",
  rem: "rem",
};

var justify = {
  "flex-start": "start",
  "flex-end": "end",
  center: "center",
  "space-between": "between",
  "space-around": "around",
  "space-evenly": "evenly",
};

var CSSTOTailwindMap = {
  "display: flex": "flex",
  "margin-top": "mt-",
  "margin-bottom": "mb-",
  "margin-left": "ml-",
  "margin-right": "mr-",
  margin: "m-",
  "padding-top": "pt-",
  "padding-bottom": "pb-",
  "padding-left": "pl-",
  "padding-right": "pr-",
  padding: "p-",
  "width: 100%": "w-full",
  "font-size": "text-",
  "font-weight": "font-",
  "justify-content": "justify-",
  height: "h-",
  width: "w-",
};

function parseTokens(tokens) {
  var tokensArr = tokens;
  for (var token = 0; token < tokensArr.length; token++) {
    if (CSSTOTailwindMap[tokensArr[token].trim()]) {
      tokensArr[token] = CSSTOTailwindMap[tokensArr[token].trim()];
      continue;
    }
    if (tokensArr[token].trim().includes(units.px)) {
      var utils = new Tools();
      tokensArr[token] = tokensArr[token].replace(units.px, "");
      tokensArr[token] = "["
        .concat(utils.transformToRem(Number(tokensArr[token])))
        .concat(units.rem, "]");
      continue;
    }
    if (tokensArr[token].trim() == "justify-content") {
      tokensArr[token] = CSSTOTailwindMap["justify-content"];
      tokensArr[token + 1] = justify[tokensArr[token + 1].trim()];
      break;
    }
    if (!CSSTOTailwindMap[tokensArr[token].trim()]) {
      if (Number(tokensArr[token]))
        tokensArr[token] = "[".concat(tokensArr[token].trim(), "]");
      continue;
      //if(isNaN(Number(tokensArr[token]))) tokensArr[token] = `"${tokensArr[token]}"`;
    }
  }
  return tokensArr.join("").replace(" ", "");
}

const transformToTW = (statement) => {
    if (statement.includes(";")) {
        var statements = statement.split(";");
        var parsedTW = void 0;
        parsedTW = '"';
    
        for (var statement = 0; statement < statements.length; statement++) {
          if (statements[statement].match(/.*[A-Za-z\-]: .*[0-9A-Za-z\-](px)?/)) {
            parsedTW +=
              parseTokens(statements[statement].split(":")) +
              (statement < statements.length - 1 ? " " : "");
            continue;
          }
    
          for (var CSSRule_1 in CSSTOTailwindMap)
            if (statements[statement].trim() == CSSRule_1)
              parsedTW +=
                CSSTOTailwindMap[CSSRule_1] +
                (statement < statements.length - 1 ? " " : "");
        }
    
        return parsedTW.trim() + '"';
    }
}