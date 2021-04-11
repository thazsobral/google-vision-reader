const vision = require("@google-cloud/vision")
const fs = require("fs")
const { client_email, private_key, project_id} = require("./google-cloud-credentials.json")

const client = new vision.ImageAnnotatorClient({
    credentials: {
        client_email,
        private_key,
        project_id
    }
})

module.exports.extract = async function(filepath="", mimeType="") {
    const filBuffer = fs.readFileSync(filepath)
    const requestNeeded = ["application/pdf", "image/gif", "image/tiff"].some(e => e == mimeType)

    const inputConfig = {
        mimeType,
        content: filBuffer
    }

    const features = [{ type: "DOCUMENT_TEXT_DETECTION" }]
    const request = {
        requests: [
            {
                inputConfig,
                features,
                pages: [1]
            }
        ]
    }

    const [result] = requestNeeded ? await client.batchAnnotateFiles(request) : await client.documentTextDetection(filBuffer)

    const fulltextAnotation = result.fullTextAnnotation || result.responses[0].responses[0].fullTextAnnotation

    return fulltextAnotation.text
}
