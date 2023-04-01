const PREURL = 'https://www.xmind.net/m/'
const PREEMBED = 'https://www.xmind.app/embed/'
const NOTION = 'notion.so'

function getContentFromClipboard() {
    var result = ''
    var sandbox = document.getElementById('sandbox')
    sandbox.value = ''
    sandbox.select()
    if (document.execCommand('paste')) {
        result = sandbox.value
    }
    sandbox.value = ''
    return result
}

function formatEmbedCode(text) {
    const sp = text.split('/')
    const result = PREEMBED + sp[sp.length-1]
    sandbox.value = result
    console.log(result)
    sandbox.select()
    document.execCommand('copy')
    sandbox.value = ''
}

function getCurrentUrl() {
    result = ''
    chrome.tabs.getSelected(null,function(tab) {
        result = tab.url;
    });
    return result
}

chrome.windows.onFocusChanged.addListener(function(window) {
    const text = getContentFromClipboard()

    if (text.includes(PREURL)) {
        formatEmbedCode(text)
    }
});