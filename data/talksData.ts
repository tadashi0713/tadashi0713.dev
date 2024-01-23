const talksData = [
  {
    title: 'プラットフォームエンジニアリングを加速させるCircleCI',
    description:
      '企業全体でのソフトウェアデリバリーを向上させる手段として、近年プラットフォームエンジニアリングが注目されています。このセッションでは、プラットフォームエンジニアリングを実践・進化させていきたい方に向けたCircleCIの最近機能とベストプラクティスを、デモを交えながらご紹介します。',
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1705978314/tadashi0713.dev/platform-engineering.png',
    href: 'https://www.docswell.com/s/tadashi0713/ZP9PMX-circleci-platform-engineering',
  },
  {
    title: 'Scalable and cloud-native mobile game CI/CD environment using Unity',
    description:
      'This talk was part of the JetBrains GameDev Day 2023: https://jb.gg/gamedevday2023 Description: Developing continuously high-quality mobile games, with their ...',
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1698250385/tadashi0713.dev/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=_EMi84CwdKQ',
  },
  {
    title: 'Migrating your mobile CI/CD environment to a scalable cloud solution using CircleCI',
    description: 'Cloud Expo Asia 2023, Singapore',
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1697277715/tadashi0713.dev/speaker__33_.png',
    href: 'https://speakerdeck.com/tadashi0713/cd-environment-to-a-scalable-cloud-solution-using-circleci',
  },
  {
    title: 'Unityを使ったモバイルゲームCI/CDパイプラインをクラウドネイティブ化しよう',
    description: 'Cloud Operator Days Tokyo 2023',
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1695013316/tadashi0713.dev/G75YQKKM74.jpg',
    href: 'https://www.docswell.com/s/tadashi0713/K6Y9N7-unity-mobile-cicd',
  },
  {
    title: '自動テストをCIで”実行”させるだけでは不十分な理由',
    description:
      'CircleCI＆Autify共催セミナー「CI/CD、テスト自動化で実現する高品質・高速なプロダクト開発」',
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1690864679/tadashi0713.dev/19a26443fe31c577ccbcf9a99bbef98c0c561c2d.png',
    href: 'https://www.docswell.com/s/tadashi0713/KP9G32-circleci-autify-webinar',
  },
  {
    title:
      'Speed matters: Advanced CI/CD techniques to improve development velocity, quality & security',
    description: 'Cloud Expo Asia 2022, Singapore',
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1665745656/tadashi0713.dev/slide_0.jpg',
    href: 'https://speakerdeck.com/tadashi0713/cd-techniques-to-improve-development-velocity-quality-and-security',
  },
  {
    title: 'CircleCI Webinar: CircleCIを使いこなそう〜応用編〜',
    description:
      'このウェビナーでは既に CircleCI をお使いの方に、CircleCI が近年リリースした機能を中心に応用的な使い方をご紹介します。',
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1659319510/tadashi0713.dev/circleci_advanced_webinar.jpg',
    href: 'https://www.youtube.com/watch?v=7r5ITZiCc9w',
  },
  {
    title: 'AWS Graviton 環境への CI/CD パイプラインを CircleCI で実現しよう(AWS Fargate 編)',
    description:
      'AWS Graviton プロセッサを採用した AWS Fargate を使用し、どのようにコンテナアプリケーション開発の CI/CD パイプラインを構築できるのか、AWS Graviton に対応した CircleCI の CI/CDツールを使用し、デモを交えて具体的にご説明いたします。',
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1661304619/tadashi0713.dev/circleci-aws-ipc-webinar-0616.32c31db2dcdbb401f1d9b49207eb52697999abca.jpg',
    href: 'https://speakerdeck.com/tadashi0713/aws-graviton-huan-jing-hefalse-ci-cd-haihurainwo-circleci-teshi-xian-siyou-aws-fargate-bian',
  },
  {
    title: 'CircleCI Webinar: モバイル開発者向け CircleCI 入門ウェビナー',
    description:
      'このウェビナーではモバイル開発者に向けたCircleCIの機能や特徴、アップデートについて紹介します。',
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1655456212/tadashi0713.dev/Untitled_presentation_31.png',
    href: 'https://www.youtube.com/watch?v=3YsbMRbvvNc',
  },
  {
    title: 'はじめてのCircleCI 内製化への第一歩 〜効率的にCircleCIについて学ぼう〜',
    description:
      '本セミナーでは、CI/CDツールのーつであるCircleCIにフォーカスをして、CI/CDをはじめる方法をデモやコツを交えながらご紹介いたします。',
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1655457399/tadashi0713.dev/unnamed_1.png',
    href: 'https://www.youtube.com/watch?v=6lQ0AkkiBKk',
  },
  {
    title: '10x deployment frequency using GitLab Flow and GitHub Actions on AWS ECS',
    description: `English version of previous presentation slide`,
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1661304730/tadashi0713.dev/5970ee8f76d947308c9e0a0a148e1e8d.jpg',
    href: 'https://speakerdeck.com/tadashi0713/10x-deployment-frequency-using-gitlab-flow-and-github-actions-on-aws-ecs',
  },
  {
    title: 'デプロイ頻度を10倍にした、ブランチ戦略とGitHub Actions on AWS ECS',
    description: `AWS Startup Tech Meetup Online #4`,
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1661304785/tadashi0713.dev/2c3f9b9d74314082ba440426a9e39f6e.jpg',
    href: 'https://speakerdeck.com/tadashi0713/depuroipin-du-wo10bei-nisita-burantizhan-lue-togithub-actions-on-aws-ecs',
  },
  {
    title:
      'Creating parallelized Android UITest (Appium) environment using Azure, Docker and Android emulator',
    description: `Agile & Automation Days 2019 #aadays2019`,
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1661304838/tadashi0713.dev/b39c847fb0e84047a74d0dee8f76b916.jpg',
    href: 'https://speakerdeck.com/tadashi0713/creating-parallelized-android-uitest-appium-environment-using-azure-docker-and-android-emulator',
  },
  {
    title: 'メルカリの開発スピードと品質を支える Selenium on Azure Kubernetes Service',
    description: `【東京】JJUG ナイトセミナー 「Java on Azure まつり＠Microsoft」 6/19(水)開催`,
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1661306667/tadashi0713.dev/671416e974c145a090ffe6cc4eee9078.jpg',
    href: 'https://speakerdeck.com/tadashi0713/merukarifalsekai-fa-supidotopin-zhi-wozhi-eru-selenium-on-azure-kubernetes-service',
  },
  {
    title: 'Docker × Androidエミュレーターを使ったAppiumテスト環境',
    description: `システムテスト自動化カンファレンス2018`,
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1661306712/tadashi0713.dev/edaba8cd3f6a45a78c65641346eaa4e0.jpg',
    href: 'https://speakerdeck.com/tadashi0713/docker-x-androidemiyuretawoshi-tutaappiumtesutohuan-jing',
  },
  {
    title: 'Scaling Selenium to Infinity',
    description: `[人気につき増枠]AQA POP TALK #3 ~海外カンファレンスから見えたテスト自動化の未来~`,
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1661306761/tadashi0713.dev/2500c5c66a524566ba4322827160f139.jpg',
    href: 'https://speakerdeck.com/tadashi0713/scaling-selenium-to-infinity',
  },
  {
    title: '私がAndroid CI/CDを Bitrise・CircleCIに 移行して得られたもの',
    description: `CI/CD Test Night #2`,
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1661306810/tadashi0713.dev/4886038189764818b0713fac4ecb7543.jpg',
    href: 'https://speakerdeck.com/tadashi0713/cdwo-bitrisecirclecini-yi-xing-sitede-raretamofalse',
  },
  {
    title: 'メルカリのテスト自動化戦略',
    description: `AQA POP TALK #2 〜マニュアルテスト VS 自動テストの巻〜 ＠博多`,
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1661306860/tadashi0713.dev/936c9be3fd7442e3bd1f9d3b3c7327d6.jpg',
    href: 'https://speakerdeck.com/tadashi0713/merukarifalsetesutozi-dong-hua-zhan-lue',
  },
]

export default talksData
