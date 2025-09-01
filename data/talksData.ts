export type Talk = {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const talksData: Talk[] = [
  {
    title:
      '脆弱性を大幅に削減する、Docker 提供のセキュリティ強化コンテナイメージ「Docker Hardened Images」への移行方法',
    description:
      'この動画では、Docker で提供している脆弱性の少ない、セキュリティが強化されたコンテナイメージ Docker Hardened Images(DHI) への移行方法についてご紹介します。',
    imgSrc: '/static/images/dhi_migration_youtube.jpg',
    href: 'https://www.youtube.com/watch?v=lukHCq1aVqs',
  },
  {
    title: 'CircleCI と Docker が実践解説：AI・LLM 時代のCI CDとMCP基盤運用',
    description:
      '生成 AI・LLM の活用が進む今、開発運用の最適化が求められています。本セミナーでは、CircleCI と Docker より、CI/CD と MCP 基盤の最新動向と実践事例をご紹介します。',
    imgSrc: '/static/images/docker_circleci_mcp_webinar.jpeg',
    href: 'https://www.youtube.com/watch?v=3ajMdKxpmvQ',
  },
  {
    title:
      'Docker Hardened Images (DHI) Introduction 〜本番環境向けに構築した、デフォルトで安全なコンテナイメージ〜',
    description:
      'この動画では Docker Hardened Images (DHI) がどのようにソフトウェアサプライチェーンの課題を解決することができるのか、その背景からご紹介しています。',
    imgSrc: '/static/images/dhi_introduction_youtube.jpg',
    href: 'https://www.youtube.com/watch?v=OFPo0LmRMlg',
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
    title:
      'Docker Model Runner 〜ローカル環境で LLM を簡単に実行、Docker が提案する新しい生成AIアプリ開発体験〜',
    description:
      'Docker Model Runner は 大規模言語モデル(LLM) をDocker を使ったコンテナ開発と同じ体験でローカル環境で実行することができる、Docker Desktop の新たな機能です。',
    imgSrc: '/static/images/docker-model-runner.jpg',
    href: 'https://www.youtube.com/watch?v=b9dH0Q_BKcA',
  },
  {
    title: 'Docker Scout を使ったコンテナセキュリティの可視化と管理',
    description:
      'Docker Scoutは、コンテナのセキュリティ管理を効率化し、ソフトウェアサプライチェーン全体の安全性を確保するための最新ツールです。本ウェビナーでは、Docker Scoutの最新機能や脆弱性の特定や対応方法、運用のベストプラクティスについて詳しく解説します。',
    imgSrc: '/static/images/docker-scout-webinar-ja.jpeg',
    href: 'https://www.youtube.com/watch?v=wuV8hO3Tm_0',
  },
  {
    title: 'CircleCI と Argo Rollouts を統合した GKE への継続的リリース基盤',
    description:
      'GKEをはじめとしたKubernetesへのCI/CDには様々なアプローチがありますが、多くの場合CIとCDツールが別々になり管理や可視化が難しくなります。本セッションではCircleCIとArgo Rolloutsを連携し、CI(ビルド・テスト)からCD(デプロイ・段階リリース)までを統合されたワークフローにすることによって、安全かつ効率的なアプリケーション開発を実現する方法をご紹介します。',
    imgSrc: '/static/images/google-cloud-next-2024.png',
    href: 'https://www.docswell.com/s/tadashi0713/KNREWL-google-cloud-next-2024',
  },
  {
    title: 'Best Practice CI/CD Pipeline for Deploying Container Apps to AWS',
    description: 'AWS User Group Singapore: AWS Meetup March 2024 (AWS Office)',
    imgSrc: '/static/images/Best_Practice_CI_CD_Pipeline_for_Deploying_Container_Apps_to_AWS.jpg',
    href: 'https://speakerdeck.com/tadashi0713/cd-pipeline-for-deploying-container-apps-to-aws',
  },
  {
    title: 'プラットフォームエンジニアリングを加速させるCircleCI',
    description:
      '企業全体でのソフトウェアデリバリーを向上させる手段として、近年プラットフォームエンジニアリングが注目されています。このセッションでは、プラットフォームエンジニアリングを実践・進化させていきたい方に向けたCircleCIの最近機能とベストプラクティスを、デモを交えながらご紹介します。',
    imgSrc: '/static/images/circleci-platform-engineering.jpg',
    href: 'https://www.docswell.com/s/tadashi0713/ZP9PMX-circleci-platform-engineering',
  },
  {
    title: 'Scalable and cloud-native mobile game CI/CD environment using Unity',
    description:
      'This talk was part of the JetBrains GameDev Day 2023: https://jb.gg/gamedevday2023 Description: Developing continuously high-quality mobile games, with their ...',
    imgSrc: '/static/images/jetbrains_gamedev_day_2023.jpg',
    href: 'https://www.youtube.com/watch?v=_EMi84CwdKQ',
  },
  {
    title: 'Migrating your mobile CI/CD environment to a scalable cloud solution using CircleCI',
    description: 'Cloud Expo Asia 2023, Singapore',
    imgSrc: '/static/images/speaker__33_.png',
    href: 'https://speakerdeck.com/tadashi0713/cd-environment-to-a-scalable-cloud-solution-using-circleci',
  },
  {
    title: 'Unityを使ったモバイルゲームCI/CDパイプラインをクラウドネイティブ化しよう',
    description: 'Cloud Operator Days Tokyo 2023',
    imgSrc: '/static/images/G75YQKKM74.jpg',
    href: 'https://www.docswell.com/s/tadashi0713/K6Y9N7-unity-mobile-cicd',
  },
  {
    title: '自動テストをCIで”実行”させるだけでは不十分な理由',
    description:
      'CircleCI＆Autify共催セミナー「CI/CD、テスト自動化で実現する高品質・高速なプロダクト開発」',
    imgSrc: '/static/images/autify-webinar.png',
    href: 'https://www.docswell.com/s/tadashi0713/KP9G32-circleci-autify-webinar',
  },
  {
    title:
      'Speed matters: Advanced CI/CD techniques to improve development velocity, quality & security',
    description: 'Cloud Expo Asia 2022, Singapore',
    imgSrc: '/static/images/slide_0.jpg',
    href: 'https://speakerdeck.com/tadashi0713/cd-techniques-to-improve-development-velocity-quality-and-security',
  },
  {
    title: 'CircleCI Webinar: CircleCIを使いこなそう〜応用編〜',
    description:
      'このウェビナーでは既に CircleCI をお使いの方に、CircleCI が近年リリースした機能を中心に応用的な使い方をご紹介します。',
    imgSrc: '/static/images/circleci_advanced_webinar.jpg',
    href: 'https://www.youtube.com/watch?v=7r5ITZiCc9w',
  },
  {
    title: 'AWS Graviton 環境への CI/CD パイプラインを CircleCI で実現しよう(AWS Fargate 編)',
    description:
      'AWS Graviton プロセッサを採用した AWS Fargate を使用し、どのようにコンテナアプリケーション開発の CI/CD パイプラインを構築できるのか、AWS Graviton に対応した CircleCI の CI/CDツールを使用し、デモを交えて具体的にご説明いたします。',
    imgSrc:
      '/static/images/circleci-aws-ipc-webinar-0616.32c31db2dcdbb401f1d9b49207eb52697999abca.jpg',
    href: 'https://speakerdeck.com/tadashi0713/aws-graviton-huan-jing-hefalse-ci-cd-haihurainwo-circleci-teshi-xian-siyou-aws-fargate-bian',
  },
  {
    title: 'CircleCI Webinar: モバイル開発者向け CircleCI 入門ウェビナー',
    description:
      'このウェビナーではモバイル開発者に向けたCircleCIの機能や特徴、アップデートについて紹介します。',
    imgSrc: '/static/images/mobile_cicd_webinar.png',
    href: 'https://www.youtube.com/watch?v=3YsbMRbvvNc',
  },
  {
    title: 'はじめてのCircleCI 内製化への第一歩 〜効率的にCircleCIについて学ぼう〜',
    description:
      '本セミナーでは、CI/CDツールのーつであるCircleCIにフォーカスをして、CI/CDをはじめる方法をデモやコツを交えながらご紹介いたします。',
    imgSrc: '/static/images/unnamed_1.png',
    href: 'https://www.youtube.com/watch?v=6lQ0AkkiBKk',
  },
  {
    title: '10x deployment frequency using GitLab Flow and GitHub Actions on AWS ECS',
    description: `English version of previous presentation slide`,
    imgSrc: '/static/images/5970ee8f76d947308c9e0a0a148e1e8d.jpg',
    href: 'https://speakerdeck.com/tadashi0713/10x-deployment-frequency-using-gitlab-flow-and-github-actions-on-aws-ecs',
  },
  {
    title: 'デプロイ頻度を10倍にした、ブランチ戦略とGitHub Actions on AWS ECS',
    description: `AWS Startup Tech Meetup Online #4`,
    imgSrc: '/static/images/2c3f9b9d74314082ba440426a9e39f6e.jpg',
    href: 'https://speakerdeck.com/tadashi0713/depuroipin-du-wo10bei-nisita-burantizhan-lue-togithub-actions-on-aws-ecs',
  },
  {
    title:
      'Creating parallelized Android UITest (Appium) environment using Azure, Docker and Android emulator',
    description: `Agile & Automation Days 2019 #aadays2019`,
    imgSrc: '/static/images/b39c847fb0e84047a74d0dee8f76b916.jpg',
    href: 'https://speakerdeck.com/tadashi0713/creating-parallelized-android-uitest-appium-environment-using-azure-docker-and-android-emulator',
  },
  {
    title: 'メルカリの開発スピードと品質を支える Selenium on Azure Kubernetes Service',
    description: `【東京】JJUG ナイトセミナー 「Java on Azure まつり＠Microsoft」 6/19(水)開催`,
    imgSrc: '/static/images/671416e974c145a090ffe6cc4eee9078.jpg',
    href: 'https://speakerdeck.com/tadashi0713/merukarifalsekai-fa-supidotopin-zhi-wozhi-eru-selenium-on-azure-kubernetes-service',
  },
  {
    title: 'Docker × Androidエミュレーターを使ったAppiumテスト環境',
    description: `システムテスト自動化カンファレンス2018`,
    imgSrc: '/static/images/edaba8cd3f6a45a78c65641346eaa4e0.jpg',
    href: 'https://speakerdeck.com/tadashi0713/docker-x-androidemiyuretawoshi-tutaappiumtesutohuan-jing',
  },
  {
    title: 'Scaling Selenium to Infinity',
    description: `[人気につき増枠]AQA POP TALK #3 ~海外カンファレンスから見えたテスト自動化の未来~`,
    imgSrc: '/static/images/2500c5c66a524566ba4322827160f139.jpg',
    href: 'https://speakerdeck.com/tadashi0713/scaling-selenium-to-infinity',
  },
  {
    title: '私がAndroid CI/CDを Bitrise・CircleCIに 移行して得られたもの',
    description: `CI/CD Test Night #2`,
    imgSrc: '/static/images/4886038189764818b0713fac4ecb7543.jpg',
    href: 'https://speakerdeck.com/tadashi0713/cdwo-bitrisecirclecini-yi-xing-sitede-raretamofalse',
  },
  {
    title: 'メルカリのテスト自動化戦略',
    description: `AQA POP TALK #2 〜マニュアルテスト VS 自動テストの巻〜 ＠博多`,
    imgSrc: '/static/images/936c9be3fd7442e3bd1f9d3b3c7327d6.jpg',
    href: 'https://speakerdeck.com/tadashi0713/merukarifalsetesutozi-dong-hua-zhan-lue',
  },
]

export default talksData
