export type Article = {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const articlesData: Article[] = [
  {
    title: `進化した Docker Compose ではじめる AI エージェント開発 〜ローカル LLM・MCP サーバー・アプリケーションを全て1つの Compose ファイルで〜 | DevOps Hub | SB C&S`,
    description:
      '本ブログでは Docker で新たにリリースされた、本番環境向けに構築されたデフォルトで安全なコンテナイメージ「Docker Hardened Images」を紹介します。',
    imgSrc: '/static/images/agentic_compose_blog.jpg',
    href: 'https://licensecounter.jp/devops-hub/blog/docker-compose-ai/',
  },
  {
    title: `脆弱性管理を大幅に削減する、安全で強化されたコンテナイメージ「Docker Hardened Images」 | DevOps Hub | SB C&S`,
    description:
      '本ブログでは Docker で新たにリリースされた、本番環境向けに構築されたデフォルトで安全なコンテナイメージ「Docker Hardened Images」を紹介します。',
    imgSrc: '/static/images/dhi_blog.png',
    href: 'https://licensecounter.jp/devops-hub/blog/docker-hardenedimages/',
  },
  {
    title: `Docker MCP Catalog and Toolkit ではじめる、コンテナを使った 簡単・安全な MCP サーバーの管理 | DevOps Hub | SB C&S`,
    description:
      '本ブログでは Docker で新たにリリースされた、MCP サーバーを簡単・安全に管理ができる「Docker MCP Catalog and Toolkit」を紹介します。',
    imgSrc: '/static/images/docker_mcp_toolkit_blog.png',
    href: 'https://licensecounter.jp/devops-hub/blog/docker-mcp/',
  },
  {
    title: `LLM を簡単にローカルで実行できる Docker Model Runner 〜Docker が提案する新しい生成AIアプリ開発体験〜 | DevOps Hub | SB C&S`,
    description:
      'Docker Model Runner は弊社 COO Mark Cavage が Java One 2025 の基調講演にて発表を行い、Docker Desktop 4.40 にてベータ版としてリリースされました。',
    imgSrc: '/static/images/docker_model_command_630x360.png',
    href: 'https://licensecounter.jp/devops-hub/blog/docker-modelrunner/',
  },
  {
    title: `Solve Docker Hub's Pull Rate Limit on CI/CD Pipelines using Organization Access Tokens`,
    description:
      'This article explains how to solve Docker Hub’s Pull Rate Limit on CI/CD pipelines using Organization Access Tokens.',
    imgSrc: '/static/images/dockerhub-oats-ci.png',
    href: '/blog/en/dockerhub-oats-ci',
  },
  {
    title: 'CI における Docker Hub Pull Rate Limit を Organization Access Tokens で回避しよう',
    description:
      'この記事では Docker Hub Pull Rate Limit の CI への影響を避けるために、パーソナルアクセストークンに代替する Organization Access Token を利用する方法について紹介します。',
    imgSrc: '/static/images/ci-organization-token-ja.png',
    href: 'https://zenn.dev/tadashi/articles/dcb5b917ec1c09',
  },
  {
    title: 'Accelerate Your Docker Builds Using AWS CodeBuild and Docker Build Cloud | Docker',
    description: `Learn how integrating Docker Build Cloud into a CI/CD pipeline using AWS CodeBuild can dramatically reduce build times and improve release frequency.`,
    imgSrc: '/static/images/2400x1260_generic-dbc-blog_e.png',
    href: 'https://www.docker.com/blog/accelerate-your-docker-builds-using-aws-codebuild-and-docker-build-cloud/',
  },
  {
    title: 'AWS CodeBuild を使ったコンテナイメージビルドを Docker Build Cloud で高速化しよう',
    description:
      'この記事では AWS CodeBuild を使ったコンテナイメージビルドを Docker Build Cloud で高速化する方法についてご紹介していきます。',
    imgSrc: '/static/images/dbc-aws-codebuild.png',
    href: 'https://zenn.dev/tadashi/articles/5ca8b822e167ce',
  },
  {
    title: 'Microsoft Dev Box を使って Docker Desktop on Windows を動かしてみる',
    description:
      'この記事では Microsoft Dev Box を使って Docker Desktop on Windows を実現する方法と注意点をご紹介していきます。',
    imgSrc: '/static/images/qctidaagofggtglt26t3.png',
    href: 'https://zenn.dev/tadashi/articles/7db43fc8371ff5',
  },
  {
    title:
      'Argo Rollouts と CircleCI を統合した、Google Kubernetes Engine(GKE) への安全なプログレッシブデリバリー(カナリアリリース)の実現 - Qiita',
    description: `この記事では、Argo Rollouts と CircleCI のリリース機能(CircleCI Releases)を統合することによって、Google Kubernetes Engine(GKE) への安全なプログレッシブデリバリー(カナリアリリース)を実現する方法について紹介します。`,
    imgSrc: '/static/images/argo-rollouts-gke.jpg',
    href: 'https://qiita.com/CircleCIJapan/items/1e4ad6cddbdf60fc4851',
  },
  {
    title:
      'Argo Rollouts と CircleCI を統合した、Amazon EKS への安全なプログレッシブデリバリー(カナリアリリース)の実現 #kubernetes - Qiita',
    description: `この記事では、Argo Rollouts と CircleCI のリリース機能(CircleCI Releases)を統合することによって、Amazon EKS への安全なプログレッシブデリバリー(カナリアリリース)を実現する方法について紹介します。`,
    imgSrc: '/static/images/argo-rollouts-eks.jpg',
    href: 'https://qiita.com/CircleCIJapan/items/99e935600bc8ec322819',
  },
  {
    title:
      'Introducing CircleCI App Distribution - The Easiest Way to Distribute Your Mobile Applications Inside CircleCI',
    description: `This article introduces the usage and characteristics of CircleCI App Distribution, the easiest way to distribute your mobile applications all inside CircleCI`,
    imgSrc: '/static/images/cci_app_distribution.jpg',
    href: '/blog/en/circleci-app-distribution',
  },
  {
    title:
      'モバイルアプリを CircleCI 上のみで簡単に配布することができる CircleCI App Distribution をリリースしました！',
    description: `モバイルアプリを CircleCI 上のみで簡単に配布することができる CircleCI App Distribution をリリースしました。この記事ではこの CircleCI App Distribution の使い方と特徴について紹介します。`,
    imgSrc: '/static/images/cci_app_distribution.jpg',
    href: '/blog/ja/circleci-app-distribution',
  },
  {
    title: 'Using OpenID Connect (OIDC) for Azure access',
    description: `This article describes how to achieve secure access to Azure by using OpenID Connect (OIDC), without having to maintain a static credential on the CircleCI side.`,
    imgSrc: '/static/images/2023-11-29-azure-oidc.png',
    href: 'https://circleci.com/blog/azure-oidc/',
  },
  {
    title: 'Splitting and Parallelizing Android UI tests with Espresso and CircleCI',
    description: `This article describes how to reduce Android UI test execution time using test splitting, parallelization, and CircleCI’s Android emulator.`,
    imgSrc: '/static/images/android-parallel-testing-hero.png',
    href: '/blog/en/circleci-android-parallel-testing',
  },
  {
    title: 'Software Design 2023年12月号',
    description: `開発を加速するCI/CD 生産性と品質を両立させるための鉄則\n第2章：本番／検証環境を意識したCDデザイン`,
    imgSrc: '/static/images/642312.jpg',
    href: 'https://gihyo.jp/magazine/SD/archive/2023/202312',
  },
  {
    title: 'Cloud native mobile game CI/CD with Unity and CircleCI',
    description: `Learn how to build a cloud native mobile game CI/CD environment with CircleCI and Unity.`,
    imgSrc: '/static/images/unity-mobile-cicd-hero.png',
    href: 'https://circleci.com/blog/unity-mobile-cicd',
  },
  {
    title: 'Azure へのアクセスに Open ID Connect(OIDC) を使用する',
    description: `この記事では、Azure へのアクセスに Open ID Connect(OIDC)を使用することによって、CircleCI側で静的なシークレットを保持することなくAzureへのセキュアなアクセスを実現する方法について紹介します。`,
    imgSrc: '/static/images/2023-11-29-azure-oidc.png',
    href: 'https://circleci.com/ja/blog/azure-oidc',
  },
  {
    title: 'Securely connect GitLab Self-managed to CircleCI using IP ranges feature',
    description: `This article describes how to securely connect GitLab Self-managed to CircleCI using the IP ranges feature.`,
    imgSrc: '/static/images/gitlab-ip-ranges.jpg',
    href: '/blog/en/gitlab-ip-ranges',
  },
  {
    title:
      'セルフホスト(self-managed)版 GitLab と CircleCI クラウドを IP アドレスベースでセキュアに接続する方法',
    description: `この記事では、CircleCI が提供する IP アドレス範囲機能を利用して、セルフホスト(self-managed)版 GitLab と CircleCI クラウドを IP アドレスベースでセキュアに接続する方法について紹介します。`,
    imgSrc: '/static/images/gitlab-ip-ranges.jpg',
    href: '/blog/ja/gitlab-ip-ranges',
  },
  {
    title: 'Create GitOps CI/CD pipeline to Kubernetes(Amazon EKS) using ArgoCD and Kustomize',
    description: `This blog describes how to create GitOps CI/CD pipeline to Kubernetes(Amazon EKS) using ArgoCD and Kustomize`,
    imgSrc: '/static/images/gitops-argocd-hero.png',
    href: '/blog/en/gitops-argocd',
  },
  {
    title: 'CircleCI M1 Mac performance comparison',
    description: `This article presents a performance comparison of the M1 Mac resource class released by CircleCI.`,
    imgSrc: '/static/images/circleci-m1-comparison.jpg',
    href: '/blog/en/circleci-m1-comparison',
  },
  {
    title: 'CircleCI M1 Mac パフォーマンス比較',
    description: `この記事では、CircleCI でリリースされた M1 Mac リソースクラスのパフォーマンス比較を紹介します。`,
    imgSrc: '/static/images/circleci-m1-comparison.jpg',
    href: '/blog/ja/circleci-m1-comparison',
  },
  {
    title: 'Androidエミュレーターを使ったUIテスト(Espresso)を分割・並列実行しよう',
    description: `この記事では、Androidエミュレーターを使ったUIテスト(Espresso)を分割・並列実行することによって、実行時間を短縮する方法について紹介します。`,
    imgSrc: '/static/images/android-parallel-testing-hero.png',
    href: 'https://circleci.com/ja/blog/android-parallel-testing',
  },
  {
    title: 'Unity を使ったモバイルゲーム CI/CD 環境をクラウドネイティブ化しよう(GameCI)',
    description: `この記事では、GameCI と CircleCI を利用して、Unity を使ったモバイルゲーム CI/CD 環境をクラウドネイティブ化する方法について紹介します。`,
    imgSrc: '/static/images/unity-mobile-cicd-hero.png',
    href: 'https://circleci.com/ja/blog/unity-mobile-cicd',
  },
  {
    title: 'Speed up XCUITest execution with parallelism and test splitting',
    description: `Learn how to accelerate XCUITest test runs using parallelism and test splitting.`,
    imgSrc: '/static/images/Tutorial-Intermediate-RP.jpg',
    href: 'https://circleci.com/blog/xcuitest-parallel-execution',
  },
  {
    title: 'CircleCI Orb を使って不安定なテスト(Flaky Tests)を Slack 通知する方法',
    description: `この記事では、CircleCI Orb を使って不安定なテスト(Flaky Tests)を Slack 通知する方法について紹介します。`,
    imgSrc: '/static/images/flaky-tests-notify.png',
    href: '/blog/ja/flaky-tests-notify-orb',
  },
  {
    title: 'Setting up slack notification of detecting flaky tests using CircleCI(Orb)',
    description: `This blog describes how to set up slack notification of detecting flaky tests using CircleCI(Orb)`,
    imgSrc: '/static/images/flaky-tests-notify.png',
    href: '/blog/en/flaky-tests-notify-orb',
  },
  {
    title: 'iOSの自動テスト(iOSシミュレーターを使ったUIテスト)を分割・並列実行しよう',
    description: `この記事では、iOSの自動テスト(iOSシミュレーターを使ったUIテスト)を分割・並列実行することによって、実行時間を短縮する方法について紹介します`,
    imgSrc: '/static/images/ios-parallel-testing-hero.png',
    href: 'https://circleci.com/ja/blog/ios-parallel-testing/',
  },
  {
    title:
      'CI/CDの現場への定着も手厚くサポート─圧倒的なスピードのDevOpsを実現する「CircleCI」のインパクト',
    description: `開発と運用を一体化させたDevOpsの手法によってソフトウェアのリリースと改善のスピードを高めるうえでは、CI(継続的インテグレーション)/CD(継続的デリバリー)のためのツールとして何を選ぶかが重要なポイントとなる。そのCI/CDツールとして、デジタル時代をリードする新興のテクノロジー企業から製造系・金融系の大手企業に至るまで、幅広い層の企業に支持されているのが「CircleCI(サークルシーアイ)」だ。同製品の持つ強みを開発・提供元であるCircleCI社のキーパーソンに聞いた。`,
    imgSrc: '/static/images/f_devops_guide2022_cover_1.jpg',
    href: 'https://thinkit.co.jp/article/19685',
  },
  {
    title:
      '最新のコンテナアプリケーション開発環境でパフォーマンス向上とコスト削減を両立する ~AWS Graviton に対応した CircleCI の CI/CDプラットフォームとは - builders.flash☆ - 変化を求めるデベロッパーを応援するウェブマガジン | AWS',
    description: `AWS が変化を求めるデベロッパーの皆様を応援するウェブマガジン。毎月更新する記事で新たなスキルや他のデベロッパーが抱える課題と解決方法に迫るインタビューをご覧いただけます。`,
    imgSrc: '/static/images/thumb_circle-ci-ci-cd.b3047dfb9ccf0376632f0865e67ea0fa726e0814.jpg',
    href: 'https://aws.amazon.com/jp/builders-flash/202206/circle-ci-ci-cd',
  },
  {
    title: '【社員インタビュー vol.7】Solutions Engineerロードマップ (JPN & ENG) | CircleCI Japan',
    description: `お世話になっております。人事採用担当の江藤愛です。現在様々な企業がDX化を進めている中で、多くの企業がDevOpsに取り組むようになって参りました。IT企業のみならず製造業界、金融業界、EC、小...`,
    imgSrc: '/static/images/490f5d0e-8250-4712-b2f9-c9ee663bbae9.jpg',
    href: 'https://www.wantedly.com/companies/circleci/post_articles/379626',
  },
  {
    title: 'GitOps とは? ArgoCD による、Kubernetes への継続的デリバリーを実現しよう',
    description: `この記事では、GitOps とは何か、そして実際に GitOps(ArgoCD) を使った Kubernetes への継続的デリバリーの実現方法について紹介します。`,
    imgSrc: '/static/images/gitops-argocd-hero.png',
    href: 'https://circleci.com/ja/blog/gitops-argocd/',
  },
  {
    title:
      'React Native(リアクトネイティブ) アプリの CI/CD パイプラインを、CircleCI Orb で効率化しよう',
    description: `この記事では、React Native(リアクトネイティブ) アプリの CI/CD パイプラインを CircleCI Orb を活用して効率化する方法について紹介します。`,
    imgSrc: '/static/images/react-native-hero-2021.png',
    href: 'https://circleci.com/ja/blog/react-native-cicd/',
  },
  {
    title: 'Flutter (フラッター) アプリの CI / CD パイプラインを構築しよう',
    description: `このブログ記事では、CircleCI を使って Flutter (フラッター) アプリの CI / CD パイプラインを構築していく方法について紹介していきます。`,
    imgSrc: '/static/images/flutter-app-cicd-pipeline.png',
    href: 'https://circleci.com/ja/blog/flutter-cicd/',
  },
  {
    title: '【開催報告】AWS Startup Tech Meetup Online #4 | Amazon Web Services',
    description: `（この投稿は AWS Startup Community から寄稿頂いたものです。） こんにちは、O-KUN の sumi です。 前回に引き続き、AWS Startup Tech Meetup #4 のイベント開催レポートを投稿します。（動画は最下部に掲載しています。） オープニング オープニングは、毎度おなじみ AWS の 松田さん (@mats16k) より、コミュニティの紹介からスタートです。 AWS Startup Community では、AWS を利用するスタートアップ同士が、交流や知見の共有を通じて、スタートアップならではの悩みや課題を解消、そしてサポートできるコミュニティを目指しています。 また、コミュニティの中でスタートアップ企業の露出機会を提供することにより、企業名やプロダクトの知名度向上に寄与できれば嬉しいなと思っています。 そう、これは… スタートアップの、 スタートアップによる、 スタートアップのためのコミュニティです!!! と、AWS Startup Community をさらっと紹介したところでいつもの連絡事項です。   連絡１. コミュニティロゴが爆誕しました！！ 冒頭でお気づきの方もいらっしゃったかと思いますが、コミュニティのロゴがしれっと爆誕しました。モチーフはスタートアップらしさのあるユニコーンです。 ※ ただ、デザイナーでもなんでもない一般の情シスが、なんとなく作ったものなので、今後コミュニティの皆さんでアイデアや意見を出し合いながら、より良いアイコンをつくっていけたらいいなと思います。   連絡２. Discord を採用します これまで Slackと併用で運用しておりましたが、コミュニティスペースとして Discord を正式採用し、今後も活動していきたいと思いますのでよろしくお願いいたします。   連絡３. AWS Summit Online […]`,
    imgSrc: '/static/images/aws-startup-tech-meetup-online-4-1120x630.png',
    href: 'https://aws.amazon.com/jp/blogs/startup/event-report-tech-meetup-online-4/',
  },
  {
    title:
      'Continuous delivery of iOS using GitHub Actions + Fastlane, complete on GitHub - エクサウィザーズ Engineer Blog',
    description: `The Japanese version of this blog post can be found here: techblog.exawizards.com Hello, I'm Tadashi Nemoto from the Platform Engineering team(previously DevOps team). In the last article, I introduced how to improve an API / Frontend deployment flow using GitHub Actions + GitLab Flow. techblog.exaw…`,
    imgSrc: '/static/images/20210224120254.png',
    href: 'https://techblog.exawizards.com/entry/2021/04/06/090519',
  },
  {
    title:
      'GitHub 上で完結する、GitHub Actions + Fastlane をフル活用した iOS の継続的デリバリー - エクサウィザーズ Engineer Blog',
    description: `Platform Engineer (旧 DevOps Engineer) の 根本 征 です。 前回は GitHub Actions + GitLab Flow を使った API / Frontend のデプロイフローの改善について紹介しました。 techblog.exawizards.com iOS の継続的デリバリーも GitHub Actions を活用して改善することができたので、今回はその内容を紹介したいと思います。 iOS のみならず、Android 開発 や Flutter などのマルチプラットフォーム開発での継続的デリバリーにも応用できると考えています。 Git Flow の…`,
    imgSrc: '/static/images/20210224120254.png',
    href: 'https://techblog.exawizards.com/entry/2021/03/23/115834',
  },
  {
    title:
      '社会課題を解決するサービス群のプラットフォームをゼロから作る。エクサウィザーズDevOpsチーム。　#Talk Wiz｜エクサウィザーズ HR note',
    description: `求人情報だけでは分からない、エクサウィザーズで一緒に働きたい人についてメンバーに聞く企画「#Talk Wiz」。 今回は、エクサウィザーズのサービス開発・運用の要であるDevOpsチームです。200人規模ながら複数サービスを安定して開発・運用できるプラットフォーム作りをしている同チームの魅力を青木さん、根本さんに伺いました。 ◾️ プロフィール 青木 悠輔（あおき・ゆうすけ） 東北大学工学部、大学院情報科学研究科専攻後、NTTコミュニケーションズにネットワークエンジニアとして入社。その後、楽天のインフラエンジニアなどを経て、エクサウィザーズへ入社。DevOpsエンジニアとして`,
    imgSrc: '/static/images/rectangle_large_type_2_f73c04d7abcd5bfabb19cff44da67e30.png',
    href: 'https://note.exawizards.com/n/nd10831bbb2da',
  },
  {
    title:
      'Improving Continuous Delivery with GitLab Flow + GitHub Actions - エクサウィザーズ Engineer Blog',
    description: `The Japanese version of this blog post can be found here: techblog.exawizards.com Hello, I'm Tadashi Nemoto from the DevOps team. In this article, I will demonstrate how to improve deployment flows using GitHub Actions. Standard deployment flows and their problems How about GitHub Flow? About GitLab…`,
    imgSrc: '/static/images/20201228172750.png',
    href: 'https://techblog.exawizards.com/entry/2021/01/28/113812',
  },
  {
    title:
      'GitLab Flow + GitHub Actions ではじめる、デプロイフローの改善・自動化 - エクサウィザーズ Engineer Blog',
    description: `DevOps エンジニアの 根本 征 です。 前回のエントリーでは GitHub Actions の self-hosted runners について紹介しました。 今回はそれらを活用したデプロイフロー(主に API / Frontend)の改善について紹介したいと思います。 これまでのデプロイフローと課題 GitHub Flow はどうか GitLab Flow とは git-pr-release + GitHub Actions を使った、リリース Pull Request の自動生成 GitHub Actions を使ってデプロイを行う 効果と課題 おわりに これまでのデプロイフローと課…`,
    imgSrc: '/static/images/20201228172750.png',
    href: 'https://techblog.exawizards.com/entry/2021/01/21/111031',
  },
  {
    title:
      'Creating CI / CD pipeline using GitHub Actions self-hosted runners on AWS ECS - エクサウィザーズ Engineer Blog',
    description: `This is English version of this article. techblog.exawizards.com Hello, I'm Tadashi Nemoto from the DevOps team. I joined ExaWizards this year in July in order to improve CI / CD promote the usage of automated testing in product development. In this article, I will demonstrate how to create GitHub A…`,
    imgSrc: '/static/images/20201019135904.png',
    href: 'https://techblog.exawizards.com/entry/2020/11/04/100000',
  },
  {
    title:
      'GitHub Actions の self-hosted runners を AWS ECS で動かして、CI / CD パイプラインを作る - エクサウィザーズ Engineer Blog',
    description: `DevOps エンジニアの 根本 征 です。 7月からエクサウィザーズ にジョインし、CI / CD パイプラインの改善や自動テストの布教などを行っています。 今回は GitHub Actions の self-hosted runners を AWS ECS 上に構築し運用してみたので、その試行錯誤について紹介したいと思います。 GitHub Actions と self-hosted runners self-hosted runners を Docker で動かす self-hosted runners を AWS ECS で動かす アプリケーションを AWS ECS へデプロイする W…`,
    imgSrc: '/static/images/20201019135904.png',
    href: 'https://techblog.exawizards.com/entry/2020/10/22/080000',
  },
  {
    title:
      'ポーランドで行われた海外カンファレンス「Agile & Automation Days 2019」に登壇しました！ | メルカリエンジニアリング',
    description: `メルカリで QA Automation Engineer をしている 根本 征 です。先日 10/28~29 にポーランド・グダニスクで行われた海外カンファレンス「Agile & Automation Days 2019」にスピーカーとして`,
    imgSrc: '/static/images/645d2d40-20191104165330.jpg',
    href: 'https://engineering.mercari.com/blog/entry/2019-11-12-060000',
  },
  {
    title:
      'Speeding up Windows 10 / Microsoft Edge browser testing (Selenium WebDriver) using Azure DevTest Labs | Mercari Engineering',
    description: `Note: This is a translation from the Japanese article.tech.mercari.comHello. I'm Tadashi, QA Automation Engineer f`,
    imgSrc: '/static/images/43f3b174-20190816141725.jpg',
    href: 'https://engineering.mercari.com/en/blog/entry/2019-09-09-113455',
  },
  {
    title:
      'Windows10 / Microsoft Edge での自動テスト(Selenium WebDriver)を Azure DevTest Labs 上で実行して高速化したお話 | メルカリエンジニアリング',
    description: `この記事は、Mercari Bold Challenge Month の 2日目の記事です。メルカリで QA Automation Engineer をしている 根本 征 です。私は現在、メルカリWeb版のUIテスト自動化に取り組んでいます`,
    imgSrc: '/static/images/43f3b174-20190816141725.jpg',
    href: 'https://engineering.mercari.com/blog/entry/2019-08-27-080000',
  },
  {
    title:
      '安定・スケールするAppiumテストを実現するための、最先端のモバイルテスト環境と戦略とは【Appium Conf 2019】',
    description: `6月14日から15日にかけて、インド・バンガロールでAppium Conf 2019が開催されました。300人を超える自動化エンジニア、QAエンジニアが集い、Appiumを活用した自動テストを中心に30以上ものセッションが行われました。今回は主にAppiumをはじめとしたモバイルテストを実行させるテスト環境についてのセッションをまとめて紹介します。`,
    imgSrc: '/static/images/11609_02a.jpg',
    href: 'https://codezine.jp/article/detail/11609',
  },
  {
    title:
      'Appiumを使った、自律的にアプリの情報を収集しバグを探し出すクローラーとは【Appium Conf 2019】 (1/2)：CodeZine（コードジン）',
    description: `6月14日から15日にかけて、インド・バンガロールでAppium Conf 2019が開催されました。300人を超える自動化エンジニア、QAエンジニアが集い、Appiumを活用した自動テストを中心に30以上ものセッションが行われました。この記事では、Justin Iron氏によるセッション「Appium Native App Crawler」をもとに、機能テストの自動化だけにとどまらないAppiumの可能性について紹介します。`,
    imgSrc: '/static/images/11600_01a.jpg',
    href: 'https://codezine.jp/article/detail/11600',
  },
  {
    title:
      'メルカリWeb版のUIテスト自動化で目指している世界と、そのために作った Selenium Grid・Zalenium 環境 on Azure Kubernetes Service(AKS) | メルカリエンジニアリング',
    description: `メルカリの自動化＆品質保証グループ（Automation & QA Group：通称AQA）の 根本 征 です。私は普段、テスト自動化・CI / CD 改善・その他社内の生産性を上げるための自動化を行っています。今回は、最近私たちが行なって`,
    imgSrc: '/static/images/fef2e94c-20190411161526.png',
    href: 'https://engineering.mercari.com/blog/entry/2019-04-16-060000/',
  },
  {
    title: 'How HeadSpin will change mobile testing and monitoring? | Mercari Engineering',
    description: `This is a translation of the original Japanese article.tech.mercari.comHello. I’m Tadashi, an Automation Engineer`,
    imgSrc: '/static/images/67d10e5e-20190212132627.jpg',
    href: 'https://engineering.mercari.com/en/blog/entry/2019-02-18-173236',
  },
  {
    title:
      'HeadSpinでモバイルアプリのテスト・モニタリングはどう変わるか | メルカリエンジニアリング',
    description: `メルカリの自動化＆品質保証グループ（Automation & QA Group：通称AQA）の 根本 征 です。私は普段、テスト自動化・CI / CD 改善・その他社内の生産性を上げるための自動化を行っています。今回は社内で HeadSpi`,
    imgSrc: '/static/images/67d10e5e-20190212132627.jpg',
    href: 'https://engineering.mercari.com/blog/entry/2019-02-14-105750',
  },
  {
    title:
      'Super fast and parallelized Android UITest(Appium) environment using AWS, Docker and Android emulator | Mercari Engineering',
    description: `Note: This is a translation from the Japanese article.tech.mercari.comHello. I’m Tadashi, an Automation Engineer f`,
    imgSrc: '/static/images/728a44e1-20181129162340.jpg',
    href: 'https://engineering.mercari.com/en/blog/entry/2018-12-28-175147',
  },
  {
    title:
      'Docker × Android エミュレータで、自動テスト(Appium)を並列化・爆速にする環境を作ったお話 | メルカリエンジニアリング',
    description: `これは Mercari Advent Calendar 2018 10日目の記事です。こんにちは、メルカリの自動化＆品質保証グループ（Automation & QA Group：通称AQA) の 根本 征 です。私は普段、テスト自動化・CI`,
    imgSrc: '/static/images/728a44e1-20181129162340.jpg',
    href: 'https://engineering.mercari.com/blog/entry/2018-12-10-060000',
  },
  {
    title:
      'お待たせしました、Mercari Tech Conf 2018 アプリの裏側をお見せします！#mtc18 | メルカリエンジニアリング',
    description: `こんにちは。MTCアプリチームです。この記事では2018/10/04に行われたMercari Tech Conference (MTC)向けに作ったカンファレンスアプリについて書きます。以前公開したWebの裏側 に引き続きアプリの裏側を紹介`,
    imgSrc: '/static/images/c27e021b-20181126164914.jpg',
    href: 'https://engineering.mercari.com/blog/entry/2018-11-27-141042',
  },
  {
    title:
      'AI、サーバーレス、Dockerなど、Seleniumテストを安定化・スケールさせるためのヒントとは？【SeleniumConf Chicago】 (1/2)：CodeZine（コードジン）',
    description: `10月18日から19日にかけて、アメリカ・シカゴでSeleniumConf Chicagoが開催されました。600人を超える開発者が集い、Selenium／Appiumを活用した自動テストについて20以上のセッションが行われました。この記事では、私が聴講したセッションを基に、Seleniumなどの自動テストを安定化・スケールさせるためにどのようなアプローチができるのかをご紹介します。`,
    imgSrc: '/static/images/11199_01.jpg',
    href: 'https://codezine.jp/article/detail/11199',
  },
  {
    title: 'kintone＋Zapierで社員自ら作業を省力化するメルカリ',
    description: `kintoneによる業務の省力化・自動化を進めるメルカリ。Zapierを用いることで、kintoneとSlackを連携させた事例を見ていく`,
    imgSrc: '/static/images/4015feaa2b75a4d1.jpg',
    href: 'https://ascii.jp/elem/000/001/759/1759729',
  },
  {
    title: 'メルカリiOSのUIテスト自動化をまるっとご紹介します！ | メルカリエンジニアリング',
    description: `こんにちは、メルカリの自動化＆品質保証グループ（Automation & QA Group：通称AQA）の 根本 征 です。私は普段、テスト自動化・CI / CD改善・その他社内の生産性を上げるための自動化を行っています。今回はiOSのUI`,
    imgSrc: '/static/images/64bac66c-20180717180233.png',
    href: 'https://engineering.mercari.com/blog/entry/2018-08-07-123000',
  },
  {
    title:
      '「ノンプログラマーでも、自動化はできる」Zapier Automation Meetup Tokyo #0 を開催しました | メルカリエンジニアリング',
    description: `こんにちは、メルカリの自動化＆品質保証グループ（Automation & QA Group：通称AQA）の 根本 征 です。私は普段、テスト自動化・CI / CD改善・その他社内の生産性を上げるための自動化を行っています。今回は、7/10に`,
    imgSrc: '/static/images/555b6645-20180712192331.png',
    href: 'https://engineering.mercari.com/blog/entry/2018-07-13-150000',
  },
  {
    title:
      'AndroidのCI時間を10分短縮し、開発を爆速にするためのKarakuriを作った話 | メルカリエンジニアリング',
    description: `こんにちは、メルカリの自動化＆品質保証グループ（Automation & QA Group：通称AQA）で、自動化をぶりぶりしている tadashi0713 です。私は普段、テスト自動化・CI(継続的インテグレーション) / CD(継続的デ`,
    imgSrc: '/static/images/849efda6-20180629154905.png',
    href: 'https://engineering.mercari.com/blog/entry/2018-07-04-110000',
  },
  {
    title:
      'ノンプログラマーが半年で400以上の業務を自動化！メルカリが作る「Karakuri」とは | SELECK [セレック]',
    description: `〜ノンプログラマーでも、ルーティン業務を「自動化」できる！社員の3人に1人が「Zapier」を活用し、全社で4…`,
    imgSrc: '/static/images/2260.jpg',
    href: 'https://seleck.cc/1230',
  },
  {
    title:
      '社内の面倒な手作業はZapierにやらせよう #2 〜Webhookを使って、自動化の幅を広げる〜 | メルカリエンジニアリング',
    description: `こんにちは、メルカリの自動化＆品質保証グループ（Automation & QA Group：通称AQA）で、自動化をぶりぶりしている tadashi0713 です。私は普段、テスト自動化・CI / CD改善・その他社内の生産性を上げるための`,
    imgSrc: '/static/images/cf47bf7b-20180218185222.png',
    href: 'https://engineering.mercari.com/blog/entry/2018-06-12-110000',
  },
  {
    title:
      '社内の面倒な手作業はZapierにやらせようーーノンプログラマーでも業務自動化ができるツールを導入してみて | メルカリエンジニアリング',
    description: `これは Mercari Advent Calendar 2017 22日目の記事です。こんにちは、メルカリのQA-SETチームで自動化をぶりぶりしている tadashi0713 です。前回は業務自動化の1つとして、Seleniumを使ったブ`,
    imgSrc: '/static/images/b854104c-20171221142658.png',
    href: 'https://engineering.mercari.com/blog/entry/2017-12-22-110934',
  },
  {
    title:
      '退屈なブラウザ作業はSeleniumにやらせようーーはじめてでもできるブラウザ操作自動化 | メルカリエンジニアリング',
    description: `こんにちは、メルカリのQA-SETチームで自動化をぶりぶりしている tadashi0713 です。これまではモバイルアプリ・WebアプリのE2Eテストを中心に自動化をしていましたが、最近ではプロダクト部門・カスタマーサポート部門・コーポレー`,
    imgSrc: '/static/images/ea1ea6bb-20171026161553.png',
    href: 'https://engineering.mercari.com/blog/entry/2017-10-31-122018',
  },
  {
    title:
      'Appiumの新しいGUIツール、appium-desktopがよくなってきてるぞう | メルカリエンジニアリング',
    description: `こんにちは！ メルカリのテストエンジニアとして、モバイルアプリのテストをぶりぶり自動化している@tadashi0713です。メルカリでは、モバイルアプリのテスト自動化のために、一部、Appiumを使用しています。今回は、現在ベータ版で公開さ`,
    imgSrc: '/static/images/668bb72e-20170405102425.png',
    href: 'https://engineering.mercari.com/blog/entry/2017-04-07-110955',
  },
]

export default articlesData
