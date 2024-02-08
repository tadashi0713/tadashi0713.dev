const talksData = [
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
    imgSrc: '/static/images/jetbrains-gamedev-day-2023.jpg',
    href: 'https://www.youtube.com/watch?v=_EMi84CwdKQ',
  },
  {
    title: 'Migrating your mobile CI/CD environment to a scalable cloud solution using CircleCI',
    description: 'Cloud Expo Asia 2023, Singapore',
    imgSrc: '/static/images/cloud-expo-asia-2023.png',
    href: 'https://speakerdeck.com/tadashi0713/cd-environment-to-a-scalable-cloud-solution-using-circleci',
  },
  {
    title: 'Unityを使ったモバイルゲームCI/CDパイプラインをクラウドネイティブ化しよう',
    description: 'Cloud Operator Days Tokyo 2023',
    imgSrc: '/static/images/circleci-unity-mobile-cicd-talk-ja.jpg',
    href: 'https://www.docswell.com/s/tadashi0713/K6Y9N7-unity-mobile-cicd',
  },
  {
    title: '自動テストをCIで”実行”させるだけでは不十分な理由',
    description:
      'CircleCI＆Autify共催セミナー「CI/CD、テスト自動化で実現する高品質・高速なプロダクト開発」',
    imgSrc: '/static/images/circleci-autify-webinar.png',
    href: 'https://www.docswell.com/s/tadashi0713/KP9G32-circleci-autify-webinar',
  },
  {
    title:
      'Speed matters: Advanced CI/CD techniques to improve development velocity, quality & security',
    description: 'Cloud Expo Asia 2022, Singapore',
    imgSrc: 'public/static/images/cloud-expo-asia-2022.jpg',
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
    imgSrc: '/static/images/circleci-aws-ipc-webinar.jpg',
    href: 'https://speakerdeck.com/tadashi0713/aws-graviton-huan-jing-hefalse-ci-cd-haihurainwo-circleci-teshi-xian-siyou-aws-fargate-bian',
  },
  {
    title: 'CircleCI Webinar: モバイル開発者向け CircleCI 入門ウェビナー',
    description:
      'このウェビナーではモバイル開発者に向けたCircleCIの機能や特徴、アップデートについて紹介します。',
    imgSrc: '/static/images/circleci-mobile-webinar.png',
    href: 'https://www.youtube.com/watch?v=3YsbMRbvvNc',
  },
  {
    title: 'はじめてのCircleCI 内製化への第一歩 〜効率的にCircleCIについて学ぼう〜',
    description:
      '本セミナーでは、CI/CDツールのーつであるCircleCIにフォーカスをして、CI/CDをはじめる方法をデモやコツを交えながらご紹介いたします。',
    imgSrc: '/static/images/circleci-101.png',
    href: 'https://www.youtube.com/watch?v=6lQ0AkkiBKk',
  },
  {
    title: '10x deployment frequency using GitLab Flow and GitHub Actions on AWS ECS',
    description: `English version of previous presentation slide`,
    imgSrc: '/static/images/exawizards-10x-deploy-en.jpg',
    href: 'https://speakerdeck.com/tadashi0713/10x-deployment-frequency-using-gitlab-flow-and-github-actions-on-aws-ecs',
  },
  {
    title: 'デプロイ頻度を10倍にした、ブランチ戦略とGitHub Actions on AWS ECS',
    description: `AWS Startup Tech Meetup Online #4`,
    imgSrc: '/static/images/exawizards-10x-deploy-ja.jpg',
    href: 'https://speakerdeck.com/tadashi0713/depuroipin-du-wo10bei-nisita-burantizhan-lue-togithub-actions-on-aws-ecs',
  },
  {
    title:
      'Creating parallelized Android UITest (Appium) environment using Azure, Docker and Android emulator',
    description: `Agile & Automation Days 2019 #aadays2019`,
    imgSrc: '/static/images/aadays-2019.jpg',
    href: 'https://speakerdeck.com/tadashi0713/creating-parallelized-android-uitest-appium-environment-using-azure-docker-and-android-emulator',
  },
  {
    title: 'メルカリの開発スピードと品質を支える Selenium on Azure Kubernetes Service',
    description: `【東京】JJUG ナイトセミナー 「Java on Azure まつり＠Microsoft」 6/19(水)開催`,
    imgSrc: '/static/images/jjug-selenium-aks.jpg',
    href: 'https://speakerdeck.com/tadashi0713/merukarifalsekai-fa-supidotopin-zhi-wozhi-eru-selenium-on-azure-kubernetes-service',
  },
  {
    title: 'Docker × Androidエミュレーターを使ったAppiumテスト環境',
    description: `システムテスト自動化カンファレンス2018`,
    imgSrc: '/static/images/docker-android-appium.jpg',
    href: 'https://speakerdeck.com/tadashi0713/docker-x-androidemiyuretawoshi-tutaappiumtesutohuan-jing',
  },
  {
    title: 'Scaling Selenium to Infinity',
    description: `[人気につき増枠]AQA POP TALK #3 ~海外カンファレンスから見えたテスト自動化の未来~`,
    imgSrc: 'public/static/images/scaling-selenium-to-infinity.jpg',
    href: 'https://speakerdeck.com/tadashi0713/scaling-selenium-to-infinity',
  },
  {
    title: '私がAndroid CI/CDを Bitrise・CircleCIに 移行して得られたもの',
    description: `CI/CD Test Night #2`,
    imgSrc: '/static/images/mercari-android-cicd-bitrise-circleci.jpg',
    href: 'https://speakerdeck.com/tadashi0713/cdwo-bitrisecirclecini-yi-xing-sitede-raretamofalse',
  },
  {
    title: 'メルカリのテスト自動化戦略',
    description: `AQA POP TALK #2 〜マニュアルテスト VS 自動テストの巻〜 ＠博多`,
    imgSrc: '/static/images/mercari-testing-strategy.jpg',
    href: 'https://speakerdeck.com/tadashi0713/merukarifalsetesutozi-dong-hua-zhan-lue',
  },
]

export default talksData
