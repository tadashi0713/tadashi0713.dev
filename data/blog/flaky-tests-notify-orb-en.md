---
title: Sample .md file
date: '2016-03-08'
tags: ['circleci', 'orb', 'test']
draft: false
summary: Example of a markdown file with code blocks and syntax highlighting
---

![Flaky Tests Notify Orb](https://res.cloudinary.com/tadashi0713/image/upload/v1661315964/tadashi0713.dev/flaky-tests-notify.png)

# How to see flaky tests in Test Insights Dashboard

# About flaky-tests-notify Orb

[https://circleci.com/developer/orbs/orb/tadashi0713/flaky-tests-notify](https://circleci.com/developer/orbs/orb/tadashi0713/flaky-tests-notify)

# How to set up

```yaml
version: '2.1'

orbs:
  flaky-tests-notify: tadashi/flaky-tests-notify@1.0.0

workflows:
  notify_flaky_tests:
    jobs:
      - flaky-tests-notify/notify
    when: << pipeline.parameters.notify_flaky_tests >>
```
