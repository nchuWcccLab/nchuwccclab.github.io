function loadPage(pageName) {
    fetch(`pages/${pageName}.html`)
      .then(response => response.text())
      .then(data => {
        document.getElementById('content').innerHTML = data;
  
        // 清除目前所有 active 狀態
        document.querySelectorAll('.navbar a').forEach(link => {
          link.classList.remove('active');
        });
  
        // 加上當前 active
        const current = document.getElementById(`nav-${pageName}`);
        if (current) current.classList.add('active');
      })
      .catch(err => {
        document.getElementById('content').innerHTML = "<p>內容載入失敗。</p>";
        console.error(err);
      });
  }
  