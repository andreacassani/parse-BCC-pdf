const fs = require("fs");
const pdfreader = require("pdfreader");

const pdfFiles = fs.readdirSync("./in").filter((f) => {
  return f.indexOf("pdf") > -1;
});

for (let pdfFile of pdfFiles) {
  fs.writeFileSync(`out/${pdfFile}.txt`, `${pdfFile}\n`);
  let dataAcquisto, dataRegistrazione, descrizione, importo;

  new pdfreader.PdfReader().parseFileItems(`in/${pdfFile}`, (error, item) => {
    if (error) {
      return console.log("An error occured while parsing:", error);
    }

    if (!item) {
      return console.log("Parsing is over.");
    }

    const { file } = item;
    const { page, width, height } = item;
    const { text, x, y, w } = item;

    if (file) {
      return console.log("Started parsing", JSON.stringify(file));
    }

    if (page) {
      return console.log(
        `Parsing page #${page} of width ${width} and height ${height}`
      );
    }

    if (text) {
      if (!dataAcquisto) {
        if (isDate(text)) {
          dataAcquisto = text;
        }
      } else if (dataAcquisto && !dataRegistrazione) {
        if (isDate(text)) {
          dataRegistrazione = text;
        } else {
          clearData();
        }
      } else if (dataRegistrazione && !descrizione) {
        descrizione = text;
      } else if (descrizione && !importo) {
        if (isNumber(text)) {
          importo = text;
        } else {
          clearData();
        }
      } else {
        clearData();
      }

      if (dataAcquisto && dataRegistrazione && descrizione && importo) {
        const newLine = `${dataAcquisto}\t${dataRegistrazione}\t\t\t\t${descrizione}\t${importo}\n`;
        fs.appendFileSync(`out/${pdfFile}.txt`, newLine, "utf-8");
        clearData();
      }
    }
  });

  const clearData = () => {
    dataAcquisto = undefined;
    dataRegistrazione = undefined;
    descrizione = undefined;
    importo = undefined;
  };
}

const isDate = (t) => {
  return t.match(/^[\d]{2}\/[\d]{2}\/[\d]{4}$/i) ? true : false;
};

const isNumber = (n) => {
  return !isNaN(Number(n.replace(".", "").replace(",", "."))) ? true : false;
};
