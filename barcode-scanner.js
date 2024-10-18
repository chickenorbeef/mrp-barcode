const codeReader = new ZXing.BrowserMultiFormatReader();
let selectedDeviceId;

codeReader
    .listVideoInputDevices()
    .then((videoInputDevices) => {
        selectedDeviceId = videoInputDevices[0].deviceId;
        return codeReader.decodeFromVideoDevice(selectedDeviceId, 'reader', (result, err) => {
            if (result) {
                console.log(result);
                document.getElementById('result').textContent = result.text;
                // Here you can implement logic to update your Google Sheet
            }
            if (err && !(err instanceof ZXing.NotFoundException)) {
                console.error(err);
            }
        });
    })
    .catch((err) => {
        console.error(err);
    });