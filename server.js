const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 启用CORS
app.use(cors());

// 静态文件服务
app.use(express.static(path.join(__dirname, '.')));

// 处理所有路由，返回index.html（支持单页应用路由）
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});