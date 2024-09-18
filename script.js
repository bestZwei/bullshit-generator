document.getElementById('generateBtn').addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const length = document.getElementById('length').value;
    const resultDiv = document.getElementById('result');

    if (!title || !length) {
        resultDiv.innerHTML = "请填写所有字段！";
        return;
    }

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
