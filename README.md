# aws-cdk-featureflags

![build](https://github.com/elegantdevelopment/aws-cdk-featureflags/workflows/build/badge.svg)
[![dependencies Status](https://david-dm.org/elegantdevelopment/aws-cdk-featureflags/status.svg)](https://david-dm.org/elegantdevelopment/aws-cdk-featureflags)
[![npm](https://img.shields.io/npm/dt/aws-cdk-featureflags)](https://www.npmjs.com/package/aws-cdk-featureflags)

[![npm version](https://badge.fury.io/js/aws-cdk-featureflags.svg)](https://badge.fury.io/js/aws-cdk-featureflags)
[![NuGet version](https://badge.fury.io/nu/ElegantDevelopment.AWSCDKDynamoDBSeeder.svg)](https://badge.fury.io/nu/ElegantDevelopment.AWSCDKFeatureFlags)
[![PyPI version](https://badge.fury.io/py/aws-cdk-featureflags.svg)](https://badge.fury.io/py/aws-cdk-featureflags)
[![Maven Central](https://img.shields.io/maven-central/v/io.github.elegantdevelopment/AWSCDKDynamoDBSeeder?color=brightgreen)](https://repo1.maven.org/maven2/io/github/elegantdevelopment/AWSCDKFeatureFlags/)

An [AWS CDK] feature flag implementation

## Why this package

For when you want feature flags.

## How do I use it

Install using your favourite package manager:

```sh
yarn add aws-cdk-featureflags
```

### Example TypeScript usage

```ts
import { FeatureFlags } from "aws-cdk-featureflags";
...
new FeatureFlags(this, "featureflags");
```

[aws cdk]: https://aws.amazon.com/cdk
