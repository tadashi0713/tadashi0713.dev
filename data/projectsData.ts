interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Docker セキュリティ',
    description: `Docker が提供するセキュリティ機能を学び、ベストプラクティスを探求しましょう。`,
    imgSrc: '/static/images/docker-security-ja.png',
    href: 'https://docs.tadashi0713.dev/docker-security-ja',
  },
  {
    title: 'Testcontainers ガイド',
    description: `以下のガイドでは、実践的なプロジェクトを通じて Testcontainers を学ぶことができます。初心者から上級者まで、どのレベルの方にも役立つガイドが用意されているはずです。スキルをゼロから習得したい方も、すでに専門的な知識をお持ちの方も、ぜひお試しください。`,
    imgSrc: '/static/images/testcontainers-guides-ja.png',
    href: 'https://docs.tadashi0713.dev/testcontainers-guides-ja',
  },
  {
    title: 'Docker Scout',
    description: `Docker Scout を使ってソフトウェアサプライチェーンのセキュリティを積極的に強化しましょう。`,
    imgSrc: '/static/images/scout-ja.png',
    href: 'https://docs.tadashi0713.dev/scout-ja',
  },
  {
    title: 'Docker Build Cloud',
    description: `Docker Build Cloud に関するドキュメントを見つけて、ローカルおよびCIでコンテナイメージをより速くビルドするために役立てましょう`,
    imgSrc: '/static/images/build-cloud-ja.png',
    href: 'https://docs.tadashi0713.dev/build-cloud-ja',
  },
  {
    title: 'GitHub - tadashi0713/howtheytest-jp',
    description: `日本のソフトウェア企業のテスト・テスト自動化に関する資料をまとめています.`,
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1661307223/tadashi0713.dev/c2e04280-9b99-11ea-9ada-2270bd8dc602.png',
    href: 'https://github.com/tadashi0713/howtheytest-jp',
  },
  {
    title: 'GitHub - tadashi0713/circleci-graviton-fargate-demo',
    description: `CircleCI(Arm Executor) + AWS Graviton2 on AWS Fargate Demo`,
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1661307184/tadashi0713.dev/8cf99b0b-713b-4c1f-bea7-83d0b46386ca.jpg',
    href: 'https://github.com/tadashi0713/circleci-graviton-fargate-demo',
  },
  {
    title: 'GitHub - tadashi0713/circleci-demo-mobile-unity',
    description: `Demo for mobile game CI/CD pipeline of Unity using CircleCI.`,
    imgSrc:
      'https://opengraph.githubassets.com/2125c3e0c8e4621021a3c989ceb7465da52570f3822d8de6f20b1f1614c9cf33/tadashi0713/circleci-demo-mobile-unity',
    href: 'https://github.com/tadashi0713/circleci-demo-mobile-unity',
  },
  {
    title: 'GitHub - tadashi0713/circleci-demo-ios',
    description: `Demo for CI/CD pipeline for iOS Native app(SwiftUI) using CircleCI.`,
    imgSrc:
      'https://opengraph.githubassets.com/5b5bb1b99ba89d8e725f42bb7c295dddc0ebd42e483733b78f56cde7bc0d2ee8/tadashi0713/circleci-demo-ios',
    href: 'https://github.com/tadashi0713/circleci-demo-ios',
  },
  {
    title: 'GitHub - tadashi0713/circleci-demo-android',
    description: `Demo for CI/CD pipeline for Android Native app using CircleCI. `,
    imgSrc:
      'https://opengraph.githubassets.com/5a1eea62515975ee98209ded41101fb8d25e4898cd0a3c4dcbee10605c965201/tadashi0713/circleci-demo-android',
    href: 'https://github.com/tadashi0713/circleci-demo-android',
  },
  {
    title: 'GitHub - tadashi0713/circleci-runner-ec2-mac-terraform',
    description: `Terraform / Packer template to deploy autoscaling CircleCI Runner of EC2 Mac instances.`,
    imgSrc:
      'https://res.cloudinary.com/tadashi0713/image/upload/v1661307132/tadashi0713.dev/6ece0f56-a9c4-4dc9-8563-0fe427eeb5b9.png',
    href: 'https://github.com/tadashi0713/circleci-runner-ec2-mac-terraform',
  },
  {
    title: 'GitHub - CircleCI-Public/flutter-orb',
    description: `Easily install Flutter SDK and package dependencies. Also wasily run unit test and lint. Supports Linux and macOS`,
    imgSrc:
      'https://opengraph.githubassets.com/1415841adafd526a9ac7cbe6363d0e43884a290ace352e42bf7a28b50f42de9f/CircleCI-Public/flutter-orb',
    href: 'https://github.com/CircleCI-Public/flutter-orb',
  },
  {
    title: 'GitHub - tadashi0713/flaky-tests-notify-orb',
    description: `You can notify(slack) flaky tests of your project, so that you can find and fix them quickly.`,
    imgSrc:
      'https://opengraph.githubassets.com/ebfea3020aa96d3d899ec673bddfd0d3be011180fa0bcdda4f7d338d6e317a8f/tadashi0713/flaky-tests-notify-orb',
    href: 'https://github.com/tadashi0713/flaky-tests-notify-orb',
  },
  {
    title: 'GitHub - tadashi0713/circleci_flutter_demo',
    description: `Demo for CI/CD pipeline for Flutter app using CircleCI.`,
    imgSrc:
      'https://opengraph.githubassets.com/f71ba98b5a9f959dfd3ef6d7380fe96ae8b4f8d19c395f99b38c0a1f9e39eb08/tadashi0713/circleci_flutter_demo',
    href: 'https://github.com/tadashi0713/circleci_flutter_demo',
  },
  {
    title: 'GitHub - tadashi0713/circleci-reactnative-detox-demo',
    description: `Demo for CI/CD pipeline for React Native + Detox app using CircleCI.`,
    imgSrc:
      'https://opengraph.githubassets.com/1fd587308bfd81e8accac570398fb14698cfb35ddb8d5a1cfd494b47dd37a5cc/tadashi0713/circleci-reactnative-detox-demo',
    href: 'https://github.com/tadashi0713/circleci-reactnative-detox-demo',
  },
  {
    title: 'GitHub - tadashi0713/circleci-demo-ip-ranges',
    description: `Demo to run CircleCI jobs(Cypress) to IP-based restricted application using IP Ranges feature.`,
    imgSrc:
      'https://opengraph.githubassets.com/6aab29c62a9e297fdb50fd62c4c684614024c3159e800da0f5d7a7ed0849b355/tadashi0713/circleci-demo-ip-ranges',
    href: 'https://github.com/tadashi0713/circleci-demo-ip-ranges',
  },
]

export default projectsData
