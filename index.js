const express = require("express")
const multer = require("multer")
const ocr = require("./google-ocr")

const upload = multer({ dest: "./tmp" })
const app = express()
app.set("view engine", "ejs")

app.get("/ocr/", function(req, res) {
    res.render("index")
})

app.post("/ocr/", upload.single("file"), async function(req, res) {
    const response = await ocr.extract(req.file.path, req.file.mimetype)
    res.end(`
        <div
            id="response"
            style="
                border: gray solid 1px;
                margin: 1% 0;
            "
        >
            <pre
                style="
                    word-wrap: break-word;
                    white-space: pre-wrap;
                "
            >
                ${response}
            </pre>
        </div>
        <button onClick="location.href = document.referrer">
            Voltar
        </button>`
    )
})

app.listen(3000, function() {
    console.log("App live in port 3000.")
})
