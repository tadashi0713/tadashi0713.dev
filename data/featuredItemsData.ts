const featuredItemsData = [
  {
    title:
      'Claude Code などのコーディングエージェントを隔離されたサンドボックス環境で実行 ー Docker Sandboxes',
    description:
      'Claude Code などのコーディングエージェントを隔離されたサンドボックス環境で実行することができる Docker Sandboxes を紹介します。',
    imgSrc: '/static/images/sandboxes-youtube.jpg',
    href: 'https://youtu.be/Jpu8-8xEDYU',
  },
  {
    title:
      'Dockerと考えるソフトウェアサプライチェーンセキュリティ 〜ビジネスアジリティと安全を両立する、持続可能なコンテナ開発の進め方〜',
    description:
      'Security Days Spring 2026: 2013年にDockerが広めたコンテナ技術は、その開発・運用のしやすさからクラウドネイティブ開発の標準となりました。一方で、多数のOSSで構成される「コンテナイメージ」は、脆弱性を狙ったサプライチェーン攻撃の標的となりつつあります。 本講演では、コンテナ技術の基礎からリスクの構造までを分かりやすく紐解きます。その上で、SBOMによる可視化や信頼できるベースイメージの選定などを通じ、開発者とセキュリティ担当者が連携してビジネスアジリティと安全性を両立させる、「DevSecOps」の実践的な仕組み作りについてご紹介します。',
    imgSrc: '/static/images/security-dsys-spring-2026.jpg',
    href: 'https://www.docswell.com/s/tadashi0713/ZN7RDD-security-days-spring-2026',
  },
  {
    title:
      '進化した Docker Compose ではじめるAI エージェント開発 〜ローカル LLM・MCP サーバー・アプリケーションを 1 つの Compose ファイルで〜',
    description:
      '多くの開発者がコンテナ開発で利用している Docker Compose がアップデートされ、Agentic Compose として AI エージェント開発に対応しました。',
    imgSrc: '/static/images/agentic_compose_youtube.jpg',
    href: 'https://www.youtube.com/watch?v=YrY--rpZH_g',
  },
  {
    title: `脆弱性管理を大幅に削減する、安全で強化されたコンテナイメージ「Docker Hardened Images」 | DevOps Hub | SB C&S`,
    description:
      '本ブログでは Docker で新たにリリースされた、本番環境向けに構築されたデフォルトで安全なコンテナイメージ「Docker Hardened Images」を紹介します。',
    imgSrc: '/static/images/dhi_blog.png',
    href: 'https://licensecounter.jp/devops-hub/blog/docker-hardenedimages/',
  },
  {
    title:
      'Docker MCP Catalog and Toolkit 〜Docker コンテナで実現する、簡単・安全な MCP サーバーの管理〜',
    description:
      '信頼性の高いコンテナイメージ化されたMCPサーバーを Docker MCP Catalogより選択し、Docker MCP Toolkit を用いて複数のMCPクライアントとの接続および認証情報の一元管理を可能にすることで、運用の簡素化とセキュリティ強化を実現することができます。',
    imgSrc: '/static/images/docker_mcp_toolkit_youtube.png',
    href: 'https://www.youtube.com/watch?v=ldLVCdyiChI',
  },
  {
    title: `LLM を簡単にローカルで実行できる Docker Model Runner 〜Docker が提案する新しい生成AIアプリ開発体験〜 | DevOps Hub | SB C&S`,
    description:
      'Docker Model Runner は弊社 COO Mark Cavage が Java One 2025 の基調講演にて発表を行い、Docker Desktop 4.40 にてベータ版としてリリースされました。',
    imgSrc: '/static/images/docker_model_command_630x360.png',
    href: 'https://licensecounter.jp/devops-hub/blog/docker-modelrunner/',
  },
  {
    title:
      'Docker Model Runner 〜ローカル環境で LLM を簡単に実行、Docker が提案する新しい生成AIアプリ開発体験〜',
    description:
      'Docker Model Runner は 大規模言語モデル(LLM) をDocker を使ったコンテナ開発と同じ体験でローカル環境で実行することができる、Docker Desktop の新たな機能です。',
    imgSrc: '/static/images/docker-model-runner.jpg',
    href: 'https://www.youtube.com/watch?v=b9dH0Q_BKcA',
  },
  {
    title: 'Accelerate Your Docker Builds Using AWS CodeBuild and Docker Build Cloud | Docker',
    description: `Learn how integrating Docker Build Cloud into a CI/CD pipeline using AWS CodeBuild can dramatically reduce build times and improve release frequency.`,
    imgSrc: '/static/images/2400x1260_generic-dbc-blog_e.png',
    href: 'https://www.docker.com/blog/accelerate-your-docker-builds-using-aws-codebuild-and-docker-build-cloud/',
  },
]

export default featuredItemsData
