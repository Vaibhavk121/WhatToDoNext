const latex = require("latex");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const createPDF = (latexString, outputPath) => {
    const doc = new PDFDocument();

    const latexStream = latex(latexString);
    const pdfStream = doc.pipe(fs.createWriteStream(outputPath));

    latexStream.pipe(doc);

    doc.on('finish', () => {
        console.log('PDF created successfully');
    });

    pdfStream.on('close', () => {
        console.log('PDF file written to', outputPath);
    });

    doc.end();
}

const latexString = `
\\documentclass{article}
\\begin{document}
Hello, world!
\\end{document}
`;

createPDF(latexString, 'output.pdf');