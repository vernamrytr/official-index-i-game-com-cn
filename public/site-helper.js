// public/site-helper.js
(function() {
  'use strict';

  const CONFIG = {
    siteUrl: 'https://official-index-i-game.com.cn',
    keyword: '爱游戏',
    cardTitle: '欢迎来到爱游戏',
    cardDescription: '在这里，你可以发现最有趣的游戏体验。点击下方的按钮，开始你的冒险。',
    badgeText: '爱游戏',
    badgeTooltip: '官方推荐'
  };

  const container = document.createElement('div');
  container.id = 'site-helper-container';

  const card = document.createElement('div');
  card.className = 'helper-card';
  card.innerHTML = `
    <div class="card-header">
      <h3 class="card-title">${CONFIG.cardTitle}</h3>
      <span class="badge" title="${CONFIG.badgeTooltip}">${CONFIG.badgeText}</span>
    </div>
    <div class="card-body">
      <p class="card-description">${CONFIG.cardDescription}</p>
      <div class="card-action">
        <a href="${CONFIG.siteUrl}" class="card-button" target="_blank" rel="noopener noreferrer">开始探索</a>
      </div>
      <div class="card-footer">
        <small>关键词：${CONFIG.keyword} · 访问说明：请确保网络畅通</small>
      </div>
    </div>
  `;

  container.appendChild(card);

  const style = document.createElement('style');
  style.textContent = `
    #site-helper-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      max-width: 340px;
      width: 100%;
    }
    .helper-card {
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.12);
      overflow: hidden;
      border: 1px solid #e8e8e8;
    }
    .card-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 16px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .card-title {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: #ffffff;
      letter-spacing: 0.3px;
    }
    .badge {
      display: inline-block;
      background: #ffd700;
      color: #333;
      font-size: 12px;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 20px;
      cursor: default;
      box-shadow: 0 2px 4px rgba(0,0,0,0.15);
    }
    .card-body {
      padding: 18px 20px 14px;
    }
    .card-description {
      margin: 0 0 14px;
      font-size: 14px;
      color: #444;
      line-height: 1.5;
    }
    .card-action {
      text-align: center;
      margin-bottom: 10px;
    }
    .card-button {
      display: inline-block;
      background: #667eea;
      color: #fff;
      padding: 10px 28px;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 600;
      font-size: 15px;
      transition: background 0.2s ease;
    }
    .card-button:hover {
      background: #5a6fd6;
    }
    .card-footer {
      border-top: 1px solid #f0f0f0;
      padding-top: 10px;
      text-align: center;
    }
    .card-footer small {
      font-size: 11px;
      color: #999;
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(container);
})();