
exports.config = {
    framework = 'jasmine',
    seleniumAdress = 'http://localhost:4444/wd/hub',
    Capabilities : {
        browserName : 'chrome'
    },
    spec :['spec.js']
}
