const siteUrlStem = 'https://kyaukyuai.github.io/llm-tech-blog-rss-feed';
const siteUrl = `${siteUrlStem}/`;

module.exports = {
  // サイト設定
  siteUrl: `${siteUrl}`,
  siteUrlStem: siteUrlStem,
  siteTitle: 'LLMテックブログRSS',
  siteDescription:
    'LLMのテックブログの更新をまとめたRSSフィードを配信しています。記事を読んでその企業の技術・カルチャーを知れることや、質の高い技術情報を得られることを目的としています。',

  // フィード設定
  feedTitle: 'LLMテックブログRSS',
  feedDescription: 'LLMのテックブログの更新をまとめたRSSフィード',
  feedLanguage: 'ja',
  feedCopyright: 'kyaukyuai/llm-tech-blog-rss-feed',
  feedGenerator: 'kyaukyuai/llm-tech-blog-rss-feed',
  feedUrls: {
    atom: `${siteUrl}feeds/atom.xml`,
    rss: `${siteUrl}feeds/rss.xml`,
    json: `${siteUrl}feeds/feed.json`,
  },

  // GitHub
  author: 'kyaukyuai',
  gitHubUserUrl: 'https://github.com/kyaukyuai/',
  gitHubRepositoryUrl: 'https://github.com/kyaukyuai/llm-tech-blog-rss-feed/',

  // Google Analytics系。フォークして使う際は値を空にするか書き換えてください
  googleSiteVerification: '',
  globalSiteTagKey: '',

  // フィードの取得などに使う UserAgent
  requestUserAgent: 'facebookexternalhit/1.1; kyaukyuai/llm-tech-blog-rss-feed',

  // サイトの追加方法のリンク
  howToAddSiteLink:
    'https://github.com/kyaukyuai/llm-tech-blog-rss-feed#%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AE%E8%BF%BD%E5%8A%A0%E6%96%B9%E6%B3%95',
};
