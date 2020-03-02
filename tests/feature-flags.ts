import { Stack } from '@aws-cdk/core';
import '@aws-cdk/assert/jest';

import { FeatureFlags } from '../lib/index';

it('creates the stack', () => {
  const stack = new Stack();
  new FeatureFlags(stack, 'FeatureFlags');

  expect(stack).toHaveResource('AWS::Lambda::Function');
  expect(stack).toHaveResource('AWS::DynamoDB::Table');
});
