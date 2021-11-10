const articlesData = [
  {
    title:
      'React Native(リアクトネイティブ) アプリの CI/CD パイプラインを、CircleCI Orb で効率化しよう',
    description: `	この記事では、React Native(リアクトネイティブ) アプリの CI/CD パイプラインを CircleCI Orb を活用して効率化する方法について紹介します。`,
    imgSrc: 'https://circleci.com/ja/blog/media/react-native-hero-2021.png',
    href: '	https://circleci.com/ja/blog/react-native-cicd/',
  },
  {
    title: 'Flutter (フラッター) アプリの CI / CD パイプラインを構築しよう',
    description: `このブログ記事では、CircleCI を使って Flutter (フラッター) アプリの CI / CD パイプラインを構築していく方法について紹介していきます。`,
    imgSrc: 'https://circleci.com/ja/blog/media/flutter-app-cicd-pipeline.png',
    href: '	https://circleci.com/ja/blog/flutter-cicd/',
  },
  {
    title: '【開催報告】AWS Startup Tech Meetup Online #4 | Amazon Web Services',
    description: `（この投稿は AWS Startup Community から寄稿頂いたものです。） こんにちは、O-KUN の sumi です。 前回に引き続き、AWS Startup Tech Meetup #4 のイベント開催レポートを投稿します。（動画は最下部に掲載しています。） オープニング オープニングは、毎度おなじみ AWS の 松田さん (@mats16k) より、コミュニティの紹介からスタートです。 AWS Startup Community では、AWS を利用するスタートアップ同士が、交流や知見の共有を通じて、スタートアップならではの悩みや課題を解消、そしてサポートできるコミュニティを目指しています。 また、コミュニティの中でスタートアップ企業の露出機会を提供することにより、企業名やプロダクトの知名度向上に寄与できれば嬉しいなと思っています。 そう、これは… スタートアップの、 スタートアップによる、 スタートアップのためのコミュニティです!!! と、AWS Startup Community をさらっと紹介したところでいつもの連絡事項です。   連絡１. コミュニティロゴが爆誕しました！！ 冒頭でお気づきの方もいらっしゃったかと思いますが、コミュニティのロゴがしれっと爆誕しました。モチーフはスタートアップらしさのあるユニコーンです。 ※ ただ、デザイナーでもなんでもない一般の情シスが、なんとなく作ったものなので、今後コミュニティの皆さんでアイデアや意見を出し合いながら、より良いアイコンをつくっていけたらいいなと思います。   連絡２. Discord を採用します これまで Slackと併用で運用しておりましたが、コミュニティスペースとして Discord を正式採用し、今後も活動していきたいと思いますのでよろしくお願いいたします。   連絡３. AWS Summit Online […]`,
    imgSrc:
      'https://d2908q01vomqb2.cloudfront.net/0286dd552c9bea9a69ecb3759e7b94777635514b/2021/04/30/aws-startup-tech-meetup-online-4-1120x630.png',
    href: 'https://aws.amazon.com/jp/blogs/startup/event-report-tech-meetup-online-4/',
  },
  {
    title:
      'Continuous delivery of iOS using GitHub Actions + Fastlane, complete on GitHub - エクサウィザーズ Engineer Blog',
    description: `The Japanese version of this blog post can be found here: techblog.exawizards.com Hello, I'm Tadashi Nemoto from the Platform Engineering team(previously DevOps team). In the last article, I introduced how to improve an API / Frontend deployment flow using GitHub Actions + GitLab Flow. techblog.exaw…`,
    imgSrc:
      'https://cdn-ak.f.st-hatena.com/images/fotolife/t/tadashi-nemoto0713/20210224/20210224120254.png',
    href: 'https://techblog.exawizards.com/entry/2021/04/06/090519',
  },
  {
    title:
      'GitHub 上で完結する、GitHub Actions + Fastlane をフル活用した iOS の継続的デリバリー - エクサウィザーズ Engineer Blog',
    description: `Platform Engineer (旧 DevOps Engineer) の 根本 征 です。 前回は GitHub Actions + GitLab Flow を使った API / Frontend のデプロイフローの改善について紹介しました。 techblog.exawizards.com iOS の継続的デリバリーも GitHub Actions を活用して改善することができたので、今回はその内容を紹介したいと思います。 iOS のみならず、Android 開発 や Flutter などのマルチプラットフォーム開発での継続的デリバリーにも応用できると考えています。 Git Flow の…`,
    imgSrc:
      'https://cdn-ak.f.st-hatena.com/images/fotolife/t/tadashi-nemoto0713/20210224/20210224120254.png',
    href: 'https://techblog.exawizards.com/entry/2021/03/23/115834',
  },
  {
    title:
      '社会課題を解決するサービス群のプラットフォームをゼロから作る。エクサウィザーズDevOpsチーム。　#Talk Wiz｜エクサウィザーズ HR note',
    description: `求人情報だけでは分からない、エクサウィザーズで一緒に働きたい人についてメンバーに聞く企画「#Talk Wiz」。 今回は、エクサウィザーズのサービス開発・運用の要であるDevOpsチームです。200人規模ながら複数サービスを安定して開発・運用できるプラットフォーム作りをしている同チームの魅力を青木さん、根本さんに伺いました。 ◾️ プロフィール 青木 悠輔（あおき・ゆうすけ） 東北大学工学部、大学院情報科学研究科専攻後、NTTコミュニケーションズにネットワークエンジニアとして入社。その後、楽天のインフラエンジニアなどを経て、エクサウィザーズへ入社。DevOpsエンジニアとして`,
    imgSrc:
      'https://assets.st-note.com/production/uploads/images/43568020/rectangle_large_type_2_f73c04d7abcd5bfabb19cff44da67e30.png?fit=bounds&quality=85&width=1280',
    href: 'https://note.exawizards.com/n/nd10831bbb2da',
  },
  {
    title:
      'Improving Continuous Delivery with GitLab Flow + GitHub Actions - エクサウィザーズ Engineer Blog',
    description: `The Japanese version of this blog post can be found here: techblog.exawizards.com Hello, I'm Tadashi Nemoto from the DevOps team. In this article, I will demonstrate how to improve deployment flows using GitHub Actions. Standard deployment flows and their problems How about GitHub Flow? About GitLab…`,
    imgSrc:
      'https://cdn-ak.f.st-hatena.com/images/fotolife/t/tadashi-nemoto0713/20201228/20201228172750.png',
    href: 'https://techblog.exawizards.com/entry/2021/01/28/113812',
  },
  {
    title:
      'GitLab Flow + GitHub Actions ではじめる、デプロイフローの改善・自動化 - エクサウィザーズ Engineer Blog',
    description: `DevOps エンジニアの 根本 征 です。 前回のエントリーでは GitHub Actions の self-hosted runners について紹介しました。 今回はそれらを活用したデプロイフロー(主に API / Frontend)の改善について紹介したいと思います。 これまでのデプロイフローと課題 GitHub Flow はどうか GitLab Flow とは git-pr-release + GitHub Actions を使った、リリース Pull Request の自動生成 GitHub Actions を使ってデプロイを行う 効果と課題 おわりに これまでのデプロイフローと課…`,
    imgSrc:
      'https://cdn-ak.f.st-hatena.com/images/fotolife/t/tadashi-nemoto0713/20201228/20201228172750.png',
    href: 'https://techblog.exawizards.com/entry/2021/01/21/111031',
  },
  {
    title:
      'Creating CI / CD pipeline using GitHub Actions self-hosted runners on AWS ECS - エクサウィザーズ Engineer Blog',
    description: `This is English version of this article. techblog.exawizards.com Hello, I'm Tadashi Nemoto from the DevOps team. I joined ExaWizards this year in July in order to improve CI / CD promote the usage of automated testing in product development. In this article, I will demonstrate how to create GitHub A…`,
    imgSrc:
      'https://cdn-ak.f.st-hatena.com/images/fotolife/t/tadashi-nemoto0713/20201019/20201019135904.png',
    href: 'https://techblog.exawizards.com/entry/2020/11/04/100000',
  },
  {
    title:
      'GitHub Actions の self-hosted runners を AWS ECS で動かして、CI / CD パイプラインを作る - エクサウィザーズ Engineer Blog',
    description: `DevOps エンジニアの 根本 征 です。 7月からエクサウィザーズ にジョインし、CI / CD パイプラインの改善や自動テストの布教などを行っています。 今回は GitHub Actions の self-hosted runners を AWS ECS 上に構築し運用してみたので、その試行錯誤について紹介したいと思います。 GitHub Actions と self-hosted runners self-hosted runners を Docker で動かす self-hosted runners を AWS ECS で動かす アプリケーションを AWS ECS へデプロイする W…`,
    imgSrc:
      'https://cdn-ak.f.st-hatena.com/images/fotolife/t/tadashi-nemoto0713/20201019/20201019135904.png',
    href: 'https://techblog.exawizards.com/entry/2020/10/22/080000',
  },
  {
    title:
      'ポーランドで行われた海外カンファレンス「Agile & Automation Days 2019」に登壇しました！ | メルカリエンジニアリング',
    description: `メルカリで QA Automation Engineer をしている 根本 征 です。先日 10/28~29 にポーランド・グダニスクで行われた海外カンファレンス「Agile & Automation Days 2019」にスピーカーとして`,
    imgSrc:
      'https://storage.googleapis.com/prd-engineering-asset/2019/11/645d2d40-20191104165330.jpg',
    href: 'https://engineering.mercari.com/blog/entry/2019-11-12-060000',
  },
  {
    title:
      'Speeding up Windows 10 / Microsoft Edge browser testing (Selenium WebDriver) using Azure DevTest Labs | Mercari Engineering',
    description: `Note: This is a translation from the Japanese article.tech.mercari.comHello. I'm Tadashi, QA Automation Engineer f`,
    imgSrc:
      'https://storage.googleapis.com/prd-engineering-asset/2019/08/43f3b174-20190816141725.jpg',
    href: 'https://engineering.mercari.com/en/blog/entry/2019-09-09-113455',
  },
  {
    title:
      'Windows10 / Microsoft Edge での自動テスト(Selenium WebDriver)を Azure DevTest Labs 上で実行して高速化したお話 | メルカリエンジニアリング',
    description: `この記事は、Mercari Bold Challenge Month の 2日目の記事です。メルカリで QA Automation Engineer をしている 根本 征 です。私は現在、メルカリWeb版のUIテスト自動化に取り組んでいます`,
    imgSrc:
      'https://storage.googleapis.com/prd-engineering-asset/2019/08/43f3b174-20190816141725.jpg',
    href: 'https://engineering.mercari.com/blog/entry/2019-08-27-080000',
  },
  {
    title:
      '安定・スケールするAppiumテストを実現するための、最先端のモバイルテスト環境と戦略とは【Appium Conf 2019】',
    description: `6月14日から15日にかけて、インド・バンガロールでAppium Conf 2019が開催されました。300人を超える自動化エンジニア、QAエンジニアが集い、Appiumを活用した自動テストを中心に30以上ものセッションが行われました。今回は主にAppiumをはじめとしたモバイルテストを実行させるテスト環境についてのセッションをまとめて紹介します。`,
    imgSrc: 'https://codezine.jp/static/images/article/11609/11609_02a.jpg',
    href: 'https://codezine.jp/article/detail/11609',
  },
  {
    title:
      'Appiumを使った、自律的にアプリの情報を収集しバグを探し出すクローラーとは【Appium Conf 2019】 (1/2)：CodeZine（コードジン）',
    description: `6月14日から15日にかけて、インド・バンガロールでAppium Conf 2019が開催されました。300人を超える自動化エンジニア、QAエンジニアが集い、Appiumを活用した自動テストを中心に30以上ものセッションが行われました。この記事では、Justin Iron氏によるセッション「Appium Native App Crawler」をもとに、機能テストの自動化だけにとどまらないAppiumの可能性について紹介します。`,
    imgSrc: 'https://codezine.jp/static/images/article/11600/11600_01a.jpg',
    href: 'https://codezine.jp/article/detail/11600',
  },
  {
    title:
      'メルカリWeb版のUIテスト自動化で目指している世界と、そのために作った Selenium Grid・Zalenium 環境 on Azure Kubernetes Service(AKS) | メルカリエンジニアリング',
    description: `メルカリの自動化＆品質保証グループ（Automation & QA Group：通称AQA）の 根本 征 です。私は普段、テスト自動化・CI / CD 改善・その他社内の生産性を上げるための自動化を行っています。今回は、最近私たちが行なって`,
    imgSrc:
      'https://storage.googleapis.com/prd-engineering-asset/2019/04/fef2e94c-20190411161526.png',
    href: 'https://engineering.mercari.com/blog/entry/2019-04-16-060000/',
  },
  {
    title: 'How HeadSpin will change mobile testing and monitoring? | Mercari Engineering',
    description: `This is a translation of the original Japanese article.tech.mercari.comHello. I’m Tadashi, an Automation Engineer`,
    imgSrc:
      'https://storage.googleapis.com/prd-engineering-asset/2019/02/67d10e5e-20190212132627.jpg',
    href: 'https://engineering.mercari.com/en/blog/entry/2019-02-18-173236',
  },
  {
    title:
      'HeadSpinでモバイルアプリのテスト・モニタリングはどう変わるか | メルカリエンジニアリング',
    description: `メルカリの自動化＆品質保証グループ（Automation & QA Group：通称AQA）の 根本 征 です。私は普段、テスト自動化・CI / CD 改善・その他社内の生産性を上げるための自動化を行っています。今回は社内で HeadSpi`,
    imgSrc:
      'https://storage.googleapis.com/prd-engineering-asset/2019/02/67d10e5e-20190212132627.jpg',
    href: 'https://engineering.mercari.com/blog/entry/2019-02-14-105750',
  },
  {
    title:
      'Super fast and parallelized Android UITest(Appium) environment using AWS, Docker and Android emulator | Mercari Engineering',
    description: `Note: This is a translation from the Japanese article.tech.mercari.comHello. I’m Tadashi, an Automation Engineer f`,
    imgSrc:
      'https://storage.googleapis.com/prd-engineering-asset/2018/12/728a44e1-20181129162340.jpg',
    href: 'https://engineering.mercari.com/en/blog/entry/2018-12-28-175147',
  },
  {
    title:
      'Docker × Android エミュレータで、自動テスト(Appium)を並列化・爆速にする環境を作ったお話 | メルカリエンジニアリング',
    description: `これは Mercari Advent Calendar 2018 10日目の記事です。こんにちは、メルカリの自動化＆品質保証グループ（Automation & QA Group：通称AQA) の 根本 征 です。私は普段、テスト自動化・CI`,
    imgSrc:
      'https://storage.googleapis.com/prd-engineering-asset/2018/12/728a44e1-20181129162340.jpg',
    href: 'https://engineering.mercari.com/blog/entry/2018-12-10-060000',
  },
  {
    title:
      'お待たせしました、Mercari Tech Conf 2018 アプリの裏側をお見せします！#mtc18 | メルカリエンジニアリング',
    description: `こんにちは。MTCアプリチームです。この記事では2018/10/04に行われたMercari Tech Conference (MTC)向けに作ったカンファレンスアプリについて書きます。以前公開したWebの裏側 に引き続きアプリの裏側を紹介`,
    imgSrc:
      'https://storage.googleapis.com/prd-engineering-asset/2018/11/c27e021b-20181126164914.jpg',
    href: 'https://engineering.mercari.com/blog/entry/2018-11-27-141042',
  },
  {
    title:
      'AI、サーバーレス、Dockerなど、Seleniumテストを安定化・スケールさせるためのヒントとは？【SeleniumConf Chicago】 (1/2)：CodeZine（コードジン）',
    description: `10月18日から19日にかけて、アメリカ・シカゴでSeleniumConf Chicagoが開催されました。600人を超える開発者が集い、Selenium／Appiumを活用した自動テストについて20以上のセッションが行われました。この記事では、私が聴講したセッションを基に、Seleniumなどの自動テストを安定化・スケールさせるためにどのようなアプローチができるのかをご紹介します。`,
    imgSrc: 'https://codezine.jp/static/images/article/11199/11199_01.jpg',
    href: 'https://codezine.jp/article/detail/11199',
  },
  {
    title: 'kintone＋Zapierで社員自ら作業を省力化するメルカリ',
    description: `kintoneによる業務の省力化・自動化を進めるメルカリ。Zapierを用いることで、kintoneとSlackを連携させた事例を見ていく`,
    imgSrc: 'https://ascii.jp/img/2017/02/16/571525/l/7b6a3ab3d400a661.jpg?20200122',
    href: 'https://ascii.jp/elem/000/001/759/1759729',
  },
  {
    title: 'メルカリiOSのUIテスト自動化をまるっとご紹介します！ | メルカリエンジニアリング',
    description: `こんにちは、メルカリの自動化＆品質保証グループ（Automation & QA Group：通称AQA）の 根本 征 です。私は普段、テスト自動化・CI / CD改善・その他社内の生産性を上げるための自動化を行っています。今回はiOSのUI`,
    imgSrc:
      'https://storage.googleapis.com/prd-engineering-asset/2018/08/64bac66c-20180717180233.png',
    href: 'https://engineering.mercari.com/blog/entry/2018-08-07-123000',
  },
  {
    title:
      '「ノンプログラマーでも、自動化はできる」Zapier Automation Meetup Tokyo #0 を開催しました | メルカリエンジニアリング',
    description: `こんにちは、メルカリの自動化＆品質保証グループ（Automation & QA Group：通称AQA）の 根本 征 です。私は普段、テスト自動化・CI / CD改善・その他社内の生産性を上げるための自動化を行っています。今回は、7/10に`,
    imgSrc:
      'https://storage.googleapis.com/prd-engineering-asset/2018/07/555b6645-20180712192331.png',
    href: 'https://engineering.mercari.com/blog/entry/2018-07-13-150000',
  },
  {
    title:
      'AndroidのCI時間を10分短縮し、開発を爆速にするためのKarakuriを作った話 | メルカリエンジニアリング',
    description: `こんにちは、メルカリの自動化＆品質保証グループ（Automation & QA Group：通称AQA）で、自動化をぶりぶりしている tadashi0713 です。私は普段、テスト自動化・CI(継続的インテグレーション) / CD(継続的デ`,
    imgSrc:
      'https://storage.googleapis.com/prd-engineering-asset/2018/07/849efda6-20180629154905.png',
    href: 'https://engineering.mercari.com/blog/entry/2018-07-04-110000',
  },
  {
    title:
      'ノンプログラマーが半年で400以上の業務を自動化！メルカリが作る「Karakuri」とは | SELECK [セレック]',
    description: `〜ノンプログラマーでも、ルーティン業務を「自動化」できる！社員の3人に1人が「Zapier」を活用し、全社で4…`,
    imgSrc: 'https://dpd29bjwmgbr8.cloudfront.net/wp-content/uploads/2018/06/25171946/2260.jpg',
    href: 'https://seleck.cc/1230',
  },
  {
    title:
      '社内の面倒な手作業はZapierにやらせよう #2 〜Webhookを使って、自動化の幅を広げる〜 | メルカリエンジニアリング',
    description: `こんにちは、メルカリの自動化＆品質保証グループ（Automation & QA Group：通称AQA）で、自動化をぶりぶりしている tadashi0713 です。私は普段、テスト自動化・CI / CD改善・その他社内の生産性を上げるための`,
    imgSrc:
      'https://storage.googleapis.com/prd-engineering-asset/2018/06/cf47bf7b-20180218185222.png',
    href: 'https://engineering.mercari.com/blog/entry/2018-06-12-110000',
  },
  {
    title:
      '社内の面倒な手作業はZapierにやらせようーーノンプログラマーでも業務自動化ができるツールを導入してみて | メルカリエンジニアリング',
    description: `これは Mercari Advent Calendar 2017 22日目の記事です。こんにちは、メルカリのQA-SETチームで自動化をぶりぶりしている tadashi0713 です。前回は業務自動化の1つとして、Seleniumを使ったブ`,
    imgSrc:
      'https://storage.googleapis.com/prd-engineering-asset/2017/12/b854104c-20171221142658.png',
    href: 'https://engineering.mercari.com/blog/entry/2017-12-22-110934',
  },
  {
    title:
      '退屈なブラウザ作業はSeleniumにやらせようーーはじめてでもできるブラウザ操作自動化 | メルカリエンジニアリング',
    description: `こんにちは、メルカリのQA-SETチームで自動化をぶりぶりしている tadashi0713 です。これまではモバイルアプリ・WebアプリのE2Eテストを中心に自動化をしていましたが、最近ではプロダクト部門・カスタマーサポート部門・コーポレー`,
    imgSrc:
      'https://storage.googleapis.com/prd-engineering-asset/2017/10/ea1ea6bb-20171026161553.png',
    href: 'https://engineering.mercari.com/blog/entry/2017-10-31-122018',
  },
  {
    title:
      'Appiumの新しいGUIツール、appium-desktopがよくなってきてるぞう | メルカリエンジニアリング',
    description: `こんにちは！ メルカリのテストエンジニアとして、モバイルアプリのテストをぶりぶり自動化している@tadashi0713です。メルカリでは、モバイルアプリのテスト自動化のために、一部、Appiumを使用しています。今回は、現在ベータ版で公開さ`,
    imgSrc:
      'https://storage.googleapis.com/prd-engineering-asset/2017/04/668bb72e-20170405102425.png',
    href: 'https://engineering.mercari.com/blog/entry/2017-04-07-110955',
  },
]

export default articlesData
