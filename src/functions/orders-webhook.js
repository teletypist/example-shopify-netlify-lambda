import fetch from 'node-fetch'

const some_credential = process.env.SOME_CREDENTIAL

exports.handler = function(event, context, callback) {
    let data;
    try {
        data = JSON.parse(event.body);
        if (data.total_price === undefined || data.line_items === undefined) {
            console.log("Not a Shopify webhook, aborting")
            callback(null, {
                statusCode: 400,
                body: JSON.stringify({success: false, message: "Not a valid order"})
            })
            return
        }
    } catch (err) {
        console.log("Failed to parse JSON");
            callback(null, {
            statusCode: 400,
            body: JSON.stringify({success: false, message: "Not a valid request"})
        })
        return
    }

    console.log(data);

    callback(null, {
        statusCode: 200,
    })
}
