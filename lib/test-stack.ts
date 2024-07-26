import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class TestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this,'DemoPipeline',{
      pipelineName: 'DemoPipeline',
      synth: new ShellStep('Synth',{
        input: CodePipelineSource.gitHub('holoyolo247/cicdrepo', 'main'),
        commands:[
          'npm ci',
          'npx cdk synth'
        ]
      })
    })
  }
}
