const writingsData = [
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
]

export default writingsData
