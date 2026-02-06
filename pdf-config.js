/**
 * MD to PDF 樣式設定檔
 * 使用方式：npx md-to-pdf "檔案.md" --config-file pdf-config.js
 */

module.exports = {
  // 外部樣式表（GitHub 風格）
  stylesheet: [
    'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown.min.css'
  ],

  // 自訂 CSS 樣式
  css: `
    /* 基礎設定 */
    body {
      font-family: "Microsoft JhengHei", "微軟正黑體", "PingFang TC", "Noto Sans TC", sans-serif;
      font-size: 14px;
      line-height: 1.8;
      color: #333;
      padding: 0;
      margin: 0;
    }

    .markdown-body {
      max-width: none;
      padding: 2cm;
    }

    /* 標題樣式 */
    h1 {
      color: #2c3e50;
      border-bottom: 3px solid #3498db;
      padding-bottom: 10px;
      margin-top: 0;
    }

    h2 {
      color: #34495e;
      border-bottom: 1px solid #bdc3c7;
      padding-bottom: 8px;
    }

    h3 {
      color: #7f8c8d;
    }

    /* 表格樣式 */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
      font-size: 13px;
    }

    th, td {
      border: 1px solid #ddd;
      padding: 10px 12px;
      text-align: left;
    }

    th {
      background-color: #3498db;
      color: white;
      font-weight: 600;
    }

    tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    tr:hover {
      background-color: #f5f5f5;
    }

    /* 程式碼區塊 */
    code {
      font-family: "Consolas", "Monaco", "Courier New", monospace;
      background-color: #f4f4f4;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 13px;
      color: #e74c3c;
    }

    pre {
      background-color: #2d2d2d;
      color: #f8f8f2;
      padding: 16px;
      border-radius: 8px;
      overflow-x: auto;
      font-size: 13px;
      line-height: 1.6;
    }

    pre code {
      background-color: transparent;
      color: inherit;
      padding: 0;
    }

    /* 引用區塊 */
    blockquote {
      border-left: 4px solid #3498db;
      background-color: #ecf0f1;
      padding: 12px 20px;
      margin: 16px 0;
      color: #555;
    }

    /* 連結 */
    a {
      color: #3498db;
      text-decoration: none;
    }

    /* 分隔線 */
    hr {
      border: none;
      border-top: 2px solid #ecf0f1;
      margin: 24px 0;
    }

    /* 列表 */
    ul, ol {
      padding-left: 24px;
    }

    li {
      margin: 6px 0;
    }

    /* 圖片 */
    img {
      max-width: 100%;
      height: auto;
      border-radius: 4px;
    }

    /* 頁面分隔（手動插入） */
    .page-break {
      page-break-after: always;
    }
  `,

  // 套用的 body class
  body_class: 'markdown-body',

  // PDF 輸出選項
  pdf_options: {
    format: 'A4',
    margin: {
      top: '20mm',
      bottom: '20mm',
      left: '15mm',
      right: '15mm'
    },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: `
      <div style="width: 100%; font-size: 10px; text-align: center; color: #999;">
        <span class="pageNumber"></span> / <span class="totalPages"></span>
      </div>
    `
  },

  // Puppeteer 啟動選項
  launch_options: {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  },

  // Markdown 解析選項
  marked_options: {
    headerIds: true,
    gfm: true
  }
};
