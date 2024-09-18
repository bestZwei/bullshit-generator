document.getElementById('generateBtn').addEventListener('click', function() {
    const title = document.getElementById('title').value.trim();
    const length = parseInt(document.getElementById('length').value, 10);
    const resultDiv = document.getElementById('result');

    if (!title || isNaN(length) || length < 10 || length > 10000) {
        resultDiv.innerHTML = "请填写有效的主题和长度！";
        return;
    }

    resultDiv.innerHTML = "正在生成，请稍候...";

    fetch(`https://oiapi.net/API/Bullshit/?title=${encodeURIComponent(title)}&length=${length}`)
        .then(response => response.json())
        .then(data => {
            if (data.code === 1) {
                resultDiv.innerHTML = data.message;
            } else {
                resultDiv.innerHTML = "生成失败，请检查输入！";
            }
        })
        .catch(error => {
            resultDiv.innerHTML = "请求出错，请稍后重试！";
            console.error('Error:', error);
        });
});
