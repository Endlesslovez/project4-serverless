// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'aedeoys1o0'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-s53cexiv35ond773.jp.auth0.com',            // Auth0 domain
  clientId: 'OCLNM9iCjO0wdFP30jACLh6bkSmwaaaF',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
// endpoints:
//   GET - https://xqwjx1fy2j.execute-api.us-east-1.amazonaws.com/dev/todos
//   POST - https://xqwjx1fy2j.execute-api.us-east-1.amazonaws.com/dev/todos
//   PATCH - https://xqwjx1fy2j.execute-api.us-east-1.amazonaws.com/dev/todos/{todoId}
//   DELETE - https://xqwjx1fy2j.execute-api.us-east-1.amazonaws.com/dev/todos/{todoId}
//   POST - https://xqwjx1fy2j.execute-api.us-east-1.amazonaws.com/dev/todos/{todoId}/attachment
// functions:
//   Auth: serverless-dev-Auth (14 MB)
//   GetTodos: serverless-dev-GetTodos (14 MB)
//   CreateTodo: serverless-dev-CreateTodo (14 MB)
//   UpdateTodo: serverless-dev-UpdateTodo (14 MB)
//   DeleteTodo: serverless-dev-DeleteTodo (14 MB)
//   GenerateUploadUrl: serverless-dev-GenerateUploadUrl (14 MB)

// Stack Outputs:
//   AuthLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:315059893147:function:serverless-dev-Auth:2
//   GenerateUploadUrlLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:315059893147:function:serverless-dev-GenerateUploadUrl:1
//   UpdateTodoLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:315059893147:function:serverless-dev-UpdateTodo:1
//   AwsDocApiId: xqwjx1fy2j
//   GetTodosLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:315059893147:function:serverless-dev-GetTodos:1
//   DeleteTodoLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:315059893147:function:serverless-dev-DeleteTodo:2
//   EnterpriseLogAccessIamRole: arn:aws:iam::315059893147:role/serverless-dev-EnterpriseLogAccessIamRole-QPEJE5SQUWKI
//   CreateTodoLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:315059893147:function:serverless-dev-CreateTodo:2
//   ServiceEndpoint: https://xqwjx1fy2j.execute-api.us-east-1.amazonaws.com/dev
//   ServerlessDeploymentBucketName: serverless-dev-serverlessdeploymentbucket-1c8tag4oy2j6t