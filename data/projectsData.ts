export type Project = {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'GitHub - tadashi0713/howtheytest-jp',
    description: `日本のソフトウェア企業のテスト・テスト自動化に関する資料をまとめています.`,
    imgSrc: '/static/images/c2e04280-9b99-11ea-9ada-2270bd8dc602.png',
    href: 'https://github.com/tadashi0713/howtheytest-jp',
  },
  {
    title: 'GitHub - tadashi0713/circleci-graviton-fargate-demo',
    description: `CircleCI(Arm Executor) + AWS Graviton2 on AWS Fargate Demo`,
    imgSrc: '/static/images/8cf99b0b-713b-4c1f-bea7-83d0b46386ca.jpg',
    href: 'https://github.com/tadashi0713/circleci-graviton-fargate-demo',
  },
  {
    title: 'GitHub - tadashi0713/circleci-demo-mobile-unity',
    description: `Demo for mobile game CI/CD pipeline of Unity using CircleCI.`,
    imgSrc: '/static/images/circleci-demo-mobile-unity.png',
    href: 'https://github.com/tadashi0713/circleci-demo-mobile-unity',
  },
  {
    title: 'GitHub - tadashi0713/circleci-demo-ios',
    description: `Demo for CI/CD pipeline for iOS Native app(SwiftUI) using CircleCI.`,
    imgSrc: '/static/images/circleci-demo-ios.png',
    href: 'https://github.com/tadashi0713/circleci-demo-ios',
  },
  {
    title: 'GitHub - tadashi0713/circleci-demo-android',
    description: `Demo for CI/CD pipeline for Android Native app using CircleCI. `,
    imgSrc: '/static/images/circleci-demo-android.png',
    href: 'https://github.com/tadashi0713/circleci-demo-android',
  },
  {
    title: 'GitHub - tadashi0713/circleci-runner-ec2-mac-terraform',
    description: `Terraform / Packer template to deploy autoscaling CircleCI Runner of EC2 Mac instances.`,
    imgSrc: '/static/images/6ece0f56-a9c4-4dc9-8563-0fe427eeb5b9.png',
    href: 'https://github.com/tadashi0713/circleci-runner-ec2-mac-terraform',
  },
  {
    title: 'GitHub - CircleCI-Public/flutter-orb',
    description: `Easily install Flutter SDK and package dependencies. Also wasily run unit test and lint. Supports Linux and macOS`,
    imgSrc: '/static/images/flutter-orb.png',
    href: 'https://github.com/CircleCI-Public/flutter-orb',
  },
  {
    title: 'GitHub - tadashi0713/flaky-tests-notify-orb',
    description: `You can notify(slack) flaky tests of your project, so that you can find and fix them quickly.`,
    imgSrc: '/static/images/flaky-tests-notify-orb.png',
    href: 'https://github.com/tadashi0713/flaky-tests-notify-orb',
  },
  {
    title: 'GitHub - tadashi0713/circleci_flutter_demo',
    description: `Demo for CI/CD pipeline for Flutter app using CircleCI.`,
    imgSrc: '/static/images/circleci_flutter_demo.png',
    href: 'https://github.com/tadashi0713/circleci_flutter_demo',
  },
  {
    title: 'GitHub - tadashi0713/circleci-reactnative-detox-demo',
    description: `Demo for CI/CD pipeline for React Native + Detox app using CircleCI.`,
    imgSrc: '/static/images/circleci-reactnative-detox-demo.png',
    href: 'https://github.com/tadashi0713/circleci-reactnative-detox-demo',
  },
  {
    title: 'GitHub - tadashi0713/circleci-demo-ip-ranges',
    description: `Demo to run CircleCI jobs(Cypress) to IP-based restricted application using IP Ranges feature.`,
    imgSrc: '/static/images/circleci-demo-ip-ranges.png',
    href: 'https://github.com/tadashi0713/circleci-demo-ip-ranges',
  },
]

export default projectsData
